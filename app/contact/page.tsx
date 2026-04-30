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
                We aim to respond to all inquiries within 1–2 business days. Compliance and KYB requests are treated with priority.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── INQUIRY TYPES ── */}
      <section className="bg-parchment px-6 py-24 md:px-16 md:py-28">
        <div className="mx-auto max-w-[1080px]">
          <div className="mb-12">
            <span className="mb-4 inline-flex rounded-full border border-sand px-3 py-1 text-[0.6375rem] font-semibold uppercase tracking-[0.12em] text-subtle">
              Who we hear from
            </span>
            <h2 className="text-[clamp(1.75rem,2.5vw,2.25rem)] font-extrabold leading-[1.1] tracking-[-0.03em] text-ink">
              Common inquiry types.
            </h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            {[
              {
                color: "cobalt",
                title: "KYB / Compliance",
                email: "legal@appsyra.com",
                items: ["Company registration documents", "Beneficial ownership information", "Business activity description", "Director / officer information"],
              },
              {
                color: "terra",
                title: "Partnerships",
                email: "support@appsyra.com",
                items: ["Technology partnerships", "Distribution partnerships", "Business development", "Investor inquiries"],
              },
              {
                color: "cobalt",
                title: "Candidates",
                email: "support@appsyra.com",
                items: ["Open role applications", "General applications", "Questions about roles", "Hiring process details"],
              },
            ].map(({ color, title, email, items }) => (
              <div key={title} className="rounded-2xl border border-sand bg-cream p-8">
                <div className={`mb-5 h-1 w-9 rounded-full ${color === "cobalt" ? "bg-cobalt" : "bg-terra"}`} />
                <h3 className="mb-4 font-display text-[1.125rem] font-bold tracking-[-0.015em] text-ink">{title}</h3>
                <ul className="mb-5 space-y-2">
                  {items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-[0.875rem] leading-[1.5] text-muted">
                      <span className="mt-[6px] h-1 w-1 shrink-0 rounded-full bg-sand" />
                      {item}
                    </li>
                  ))}
                </ul>
                <a
                  href={`mailto:${email}`}
                  className="text-[0.875rem] font-semibold text-cobalt hover:text-terra transition-colors"
                >
                  {email}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
