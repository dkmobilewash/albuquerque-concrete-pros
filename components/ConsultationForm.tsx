"use client";

import { useState, type FormEvent } from "react";
import { HONEYPOT_FIELD, TIMELINES, type ConsultationInput } from "@/lib/consultation";

type Status = { state: "idle" | "sending" | "sent" | "error"; message?: string };
type FieldErrors = Partial<Record<keyof ConsultationInput, string>>;

const input =
  "mt-1 w-full rounded-sm border border-stone bg-white px-3 py-2.5 text-base outline-none focus:border-clay";

export function ConsultationForm({ services, areas }: { services: string[]; areas: string[] }) {
  const [status, setStatus] = useState<Status>({ state: "idle" });
  const [errors, setErrors] = useState<FieldErrors>({});

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus({ state: "sending" });
    setErrors({});
    const form = e.currentTarget;
    const body = Object.fromEntries(new FormData(form).entries());
    try {
      const res = await fetch("/api/consultation/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      const json = (await res.json()) as { ok: boolean; error?: string; fields?: FieldErrors };
      if (json.ok) {
        form.reset();
        setStatus({ state: "sent" });
      } else {
        setErrors(json.fields ?? {});
        setStatus({ state: "error", message: json.error ?? "Something went wrong." });
      }
    } catch {
      setStatus({ state: "error", message: "Network error — please try again." });
    }
  }

  if (status.state === "sent") {
    return (
      <div role="status" className="rounded-sm border border-juniper bg-white/70 p-6">
        <p className="font-display text-2xl font-semibold">Thanks — your request is in.</p>
        <p className="mt-2 text-ink-soft">We&apos;ll follow up to schedule a site visit.</p>
      </div>
    );
  }

  const err = (k: keyof ConsultationInput) =>
    errors[k] ? (
      <span id={`${k}-error`} className="mt-1 block text-sm text-clay-dark">
        {errors[k]}
      </span>
    ) : null;
  const aria = (k: keyof ConsultationInput) =>
    errors[k] ? { "aria-invalid": true, "aria-describedby": `${k}-error` } : {};

  return (
    <form onSubmit={onSubmit} noValidate className="grid gap-5 sm:grid-cols-2">
      <label className="block text-sm font-semibold">
        Name *
        <input name="name" required autoComplete="name" className={input} {...aria("name")} />
        {err("name")}
      </label>
      <label className="block text-sm font-semibold">
        Email *
        <input name="email" type="email" required autoComplete="email" className={input} {...aria("email")} />
        {err("email")}
      </label>
      <label className="block text-sm font-semibold">
        Phone
        <input name="phone" type="tel" autoComplete="tel" className={input} {...aria("phone")} />
        {err("phone")}
      </label>
      <label className="block text-sm font-semibold">
        Project location *
        <select name="area" required defaultValue="" className={input} {...aria("area")}>
          <option value="" disabled>
            Select an area
          </option>
          {areas.map((a) => (
            <option key={a}>{a}</option>
          ))}
          <option>Elsewhere in the metro</option>
        </select>
        {err("area")}
      </label>
      <label className="block text-sm font-semibold">
        Service *
        <select name="service" required defaultValue="" className={input} {...aria("service")}>
          <option value="" disabled>
            Select a service
          </option>
          {services.map((s) => (
            <option key={s}>{s}</option>
          ))}
          <option>Not sure yet</option>
        </select>
        {err("service")}
      </label>
      <label className="block text-sm font-semibold">
        Timeline
        <select name="timeline" defaultValue="" className={input}>
          <option value="">No preference</option>
          {TIMELINES.map((t) => (
            <option key={t}>{t}</option>
          ))}
        </select>
      </label>
      <label className="block text-sm font-semibold sm:col-span-2">
        Tell us about the project *
        <textarea
          name="message"
          required
          rows={6}
          className={input}
          placeholder="Size, current condition, what you have in mind, access or slope issues…"
          {...aria("message")}
        />
        {err("message")}
      </label>
      {/* Honeypot — hidden from people, tempting to bots. */}
      <div aria-hidden="true" className="absolute -left-[9999px] h-px w-px overflow-hidden">
        <label>
          Leave this field empty
          <input name={HONEYPOT_FIELD} tabIndex={-1} autoComplete="off" />
        </label>
      </div>
      <div className="sm:col-span-2">
        <button
          type="submit"
          disabled={status.state === "sending"}
          className="rounded-sm bg-clay px-6 py-3 font-semibold text-white transition hover:bg-clay-dark disabled:opacity-60"
        >
          {status.state === "sending" ? "Sending…" : "Request a consultation"}
        </button>
        {status.state === "error" ? (
          <p role="alert" className="mt-3 text-sm text-clay-dark">
            {status.message}
          </p>
        ) : null}
      </div>
    </form>
  );
}
