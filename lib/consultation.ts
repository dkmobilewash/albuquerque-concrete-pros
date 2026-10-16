/** Shared consultation-form contract used by the client form and the API route. */

export const TIMELINES = ["As soon as possible", "Within 1–3 months", "3–6 months out", "Just planning / budgeting"] as const;

export const HONEYPOT_FIELD = "company_website";

export type ConsultationInput = {
  name: string;
  email: string;
  phone: string;
  area: string;
  service: string;
  timeline: string;
  message: string;
};

export const REQUIRED_FIELDS: (keyof ConsultationInput)[] = ["name", "email", "area", "service", "message"];

const LIMITS: Record<keyof ConsultationInput, number> = {
  name: 120,
  email: 200,
  phone: 40,
  area: 120,
  service: 120,
  timeline: 80,
  message: 5000,
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export type ValidationResult =
  | { ok: true; data: ConsultationInput }
  | { ok: false; errors: Partial<Record<keyof ConsultationInput, string>> };

export function validateConsultation(raw: Record<string, unknown>): ValidationResult {
  const data = {} as ConsultationInput;
  const errors: Partial<Record<keyof ConsultationInput, string>> = {};
  for (const key of Object.keys(LIMITS) as (keyof ConsultationInput)[]) {
    const v = typeof raw[key] === "string" ? (raw[key] as string).trim() : "";
    data[key] = v;
    if (v.length > LIMITS[key]) errors[key] = "Too long.";
  }
  for (const key of REQUIRED_FIELDS) {
    if (!data[key]) errors[key] = "Required.";
  }
  if (data.email && !EMAIL_RE.test(data.email)) errors.email = "Enter a valid email address.";
  if (data.phone && data.phone.replace(/\D/g, "").length < 7) errors.phone = "Enter a valid phone number.";
  return Object.keys(errors).length ? { ok: false, errors } : { ok: true, data };
}
