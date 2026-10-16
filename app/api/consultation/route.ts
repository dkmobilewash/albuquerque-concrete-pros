import { Resend } from "resend";
import { HONEYPOT_FIELD, validateConsultation, type ConsultationInput } from "@/lib/consultation";
import { siteConfig } from "@/lib/site-config";

/*
 * Consultation requests.
 *
 * Delivery (any combination):
 *   RESEND_API_KEY + LEAD_NOTIFICATION_EMAIL  → email via Resend (reply-to = submitter)
 *   RESEND_FROM_EMAIL (optional)              → sender; must be on a domain verified in Resend.
 *                                               Defaults to Resend's shared test sender, which only
 *                                               delivers to the Resend account owner — set this before launch.
 *   CONSULTATION_WEBHOOK_URL (optional)       → JSON POST to a CRM / automation endpoint
 *
 * There is deliberately NO hardcoded destination address. If nothing is
 * configured, the lead is written to the server log (never silently dropped).
 */

const DEFAULT_FROM = `${siteConfig.name} <onboarding@resend.dev>`;

function escapeHtml(s: string): string {
  return s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]!);
}

function formatText(d: ConsultationInput): string {
  return [
    `Name: ${d.name}`,
    `Email: ${d.email}`,
    `Phone: ${d.phone || "—"}`,
    `Area: ${d.area}`,
    `Service: ${d.service}`,
    `Timeline: ${d.timeline || "—"}`,
    "",
    d.message,
  ].join("\n");
}

async function sendEmail(d: ConsultationInput): Promise<"sent" | "skipped"> {
  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.LEAD_NOTIFICATION_EMAIL;
  if (!apiKey || !to) return "skipped";
  const resend = new Resend(apiKey);
  const rows = (
    [
      ["Name", d.name],
      ["Email", d.email],
      ["Phone", d.phone || "—"],
      ["Area", d.area],
      ["Service", d.service],
      ["Timeline", d.timeline || "—"],
    ] as const
  )
    .map(([k, v]) => `<tr><td style="padding:4px 12px 4px 0"><strong>${k}</strong></td><td>${escapeHtml(v)}</td></tr>`)
    .join("");
  const { error } = await resend.emails.send({
    from: process.env.RESEND_FROM_EMAIL || DEFAULT_FROM,
    to: to.split(",").map((s) => s.trim()).filter(Boolean),
    replyTo: d.email,
    subject: `New consultation request: ${d.service} — ${d.area}`,
    text: formatText(d),
    html: `<table>${rows}</table><p style="white-space:pre-wrap">${escapeHtml(d.message)}</p>`,
  });
  if (error) throw new Error(`Resend: ${error.message}`);
  return "sent";
}

async function sendWebhook(d: ConsultationInput): Promise<"sent" | "skipped"> {
  const url = process.env.CONSULTATION_WEBHOOK_URL;
  if (!url) return "skipped";
  const res = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ ...d, source: siteConfig.url, submittedAt: new Date().toISOString() }),
  });
  if (!res.ok) throw new Error(`Webhook responded ${res.status}`);
  return "sent";
}

export async function POST(request: Request) {
  let raw: Record<string, unknown>;
  try {
    const type = request.headers.get("content-type") ?? "";
    raw = type.includes("application/json")
      ? await request.json()
      : Object.fromEntries((await request.formData()).entries());
  } catch {
    return Response.json({ ok: false, error: "Invalid request body." }, { status: 400 });
  }

  // Honeypot: real visitors never see or fill this field.
  if (typeof raw[HONEYPOT_FIELD] === "string" && (raw[HONEYPOT_FIELD] as string).trim() !== "") {
    return Response.json({ ok: false, error: "Submission rejected." }, { status: 400 });
  }

  const result = validateConsultation(raw);
  if (!result.ok) {
    return Response.json({ ok: false, error: "Please correct the highlighted fields.", fields: result.errors }, { status: 422 });
  }
  const lead = result.data;

  const outcomes = await Promise.allSettled([sendEmail(lead), sendWebhook(lead)]);
  const sent = outcomes.some((o) => o.status === "fulfilled" && o.value === "sent");
  const failures = outcomes.filter((o): o is PromiseRejectedResult => o.status === "rejected");
  failures.forEach((f) => console.error("[consultation] delivery failed:", f.reason));

  if (!sent) {
    // Never drop a lead: log it in full so it can be recovered from server logs.
    console.log(
      `[consultation] ${failures.length ? "ALL DELIVERY FAILED" : "NO DELIVERY METHOD CONFIGURED"} — lead follows:\n${formatText(lead)}`,
    );
    if (failures.length) {
      return Response.json(
        { ok: false, error: "We couldn't send your request just now. Please try again in a few minutes." },
        { status: 502 },
      );
    }
  }
  return Response.json({ ok: true });
}
