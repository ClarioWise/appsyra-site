import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Appsyra — for partnerships, press, compliance inquiries, or general questions.",
};

export default function ContactPage() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="bg-cream px-6 pb-24 pt-[160px] md:px-16">
        <div className="mx-auto max-w-[1080px]">
          <span className="mb-8 inline-flex rounded-full border border-sand px-3 py-1 text-[0.6375rem] font-semibold uppercase tracking-[0.12em] text-subtle">
            Contact
          </span>
          <h1 className="mb-9 text-[clamp(2.75rem,5.5vw,4.5rem)] font-extrabold leading-[1.05] tracking-[-0.04em] text-ink max-w-[760px] text-balance">
            Let&apos;s talk.
          </h1>
          <p className="max-w-[520px] text-[1.25rem] leading-[1.65] text-muted">
            Whether you are a potential partner, a candidate, a journalist, or reviewing us as part of a compliance or KYB process — we welcome your inquiry and respond promptly.
          </p>
        </div>
      </section>

      {/* ── CONTACT CHANNELS ── */}
      <section className="border-t border-sand bg-cream px-6 py-24 md:px-16 md:py-28">
        <div className="mx-auto max-w-[1080px] grid gap-16 md:grid-cols-[1fr_1fr]">
          <div>
            <h2 className="mb-6 text-[clamp(1.5rem,2vw,2rem)] font-extrabold leading-[1.15] tracking-[-0.03em] text-ink">
              How to reach us.
            </h2>
            <p className="mb-8 text-[1.0625rem] leading-[1.75] text-muted">
              We maintain two email addresses for different purposes. Please use the appropriate address — it helps us route your inquiry to the right person quickly.
            </p>
            <div className="space-y-4">
              <a
                href="mailto:support@appsyra.com"
                className="group flex flex-col gap-1.5 rounded-2xl border border-sand bg-cream p-7 transition-all hover:border-terra hover:-translate-y-0.5"
              >
                <span className="text-[0.6875rem] font-semibold uppercase tracking-[0.1em] text-subtle">General</span>
                <span className="font-display text-[1.25rem] font-bold tracking-[-0.01em] text-cobalt group-hover:text-terra transition-colors">
                  support@appsyra.com
                </span>
                <span className="text-[0.875rem] text-muted">
                  Partnerships, press, candidates, general questions
                </span>
              </a>
              <a
                href="mailto:legal@appsyra.com"
                className="group flex flex-col gap-1.5 rounded-2xl border border-sand bg-cream p-7 transition-all hover:border-terra hover:-translate-y-0.5"
              >
                <span className="text-[0.6875rem] font-semibold uppercase tracking-[0.1em] text-subtle">Legal &amp; Compliance</span>
                <span className="font-display text-[1.25rem] font-bold tracking-[-0.01em] text-cobalt group-hover:text-terra transition-colors">
                  legal@appsyra.com
                </span>
                <span className="text-[0.875rem] text-muted">
                  KYB / compliance reviews, legal inquiries, data requests
                </span>
              </a>
            </div>
          </div>

          {/* Company info */}
          <div className="flex flex-col gap-8">
            <div className="rounded-2xl border border-sand bg-cream p-8">
              <p className="mb-5 text-[0.6875rem] font-semibold uppercase tracking-[0.1em] text-subtle">
                Company Information
              </p>
              <dl className="space-y-4">
                {[
                  { label: "Legal name", value: "Appsyra FZE LLC" },
                  { label: "Jurisdiction", value: "Ajman Free Zone, UAE" },
                  { label: "Address", value: "[BUILDING_CODE], Ajman Media City, Ajman Free Zone, Ajman, UAE" },
                  { label: "License No.", value: "[LICENSE_NUMBER]" },
                  { label: "Registered", value: "[DD.MM.YYYY]" },
                  { label: "Activity", value: "Mobile Application Development" },
                ].map(({ label, value }) => (
                  <div key={label} className="flex flex-col gap-0.5">
                    <dt className="text-[0.75rem] font-semibold uppercase tracking-[0.08em] text-subtle">{label}</dt>
                    <dd className="text-[0.9375rem] text-ink">{value}</dd>
                  </div>
                ))}
              </dl>
            </div>

            <div className="rounded-2xl bg-parchment p-8">
              <p className="mb-3 text-[0.6875rem] font-semibold uppercase tracking-[0.1em] text-subtle">Response time</p>
              <p className="text-[0.9375rem] leading-[1.65] text-muted">
                We aim to respond to all inquiries within 1–2 business days.
              </p>
            </div>
          </div>
        </div>
      </section>

    </>
  );
}
