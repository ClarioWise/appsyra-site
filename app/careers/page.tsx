import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Careers",
  description:
    "Join Appsyra — a pre-launch mobile product company building lifestyle apps for global audiences. We are looking for people who care about craft.",
};

function Arrow() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path d="M3 8h10M8 3l5 5-5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

const OPEN_ROLES = [
  {
    title: "Senior Product Designer",
    type: "Full-time · Remote",
    area: "Product",
    description: "We are looking for a senior designer who thinks in systems and cares deeply about the end-to-end user experience. You will shape the product design language and set the quality bar for everything we ship.",
  },
  {
    title: "iOS Engineer",
    type: "Full-time · Remote",
    area: "Engineering",
    description: "We need a senior iOS engineer who is as comfortable with product thinking as they are with Swift. You will be among the first engineers on the team and will have significant influence over architecture decisions.",
  },
  {
    title: "Android Engineer",
    type: "Full-time · Remote",
    area: "Engineering",
    description: "A senior Android engineer who builds for quality and longevity. You understand the nuances of the platform and care about performance, accessibility, and the details that make a product feel genuinely good.",
  },
  {
    title: "Product Manager",
    type: "Full-time · Remote",
    area: "Product",
    description: "A product thinker who leads with curiosity, communicates clearly, and makes good decisions under uncertainty. You will own a product area end-to-end and work closely with design and engineering.",
  },
];

const WHY_JOIN = [
  {
    title: "Pre-launch advantage.",
    body: "Joining before launch means your fingerprints are on everything. The architecture, the culture, the quality bar — all of it is being defined right now.",
  },
  {
    title: "Craft-first culture.",
    body: "We hire people who sweat the details. You will work with people who care as much about the quality of their work as you do — and are honest when things aren't good enough.",
  },
  {
    title: "Remote by design.",
    body: "We are distributed across Asia and Southeast Asia by intention, not by accident. Async communication, written culture, and genuine autonomy are built into how we work.",
  },
  {
    title: "Long-term thinking.",
    body: "We are building Appsyra to last. That means we make decisions that compound — in the products we build, the people we hire, and how we invest in the team over time.",
  },
];

export default function CareersPage() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="bg-terra px-6 pb-24 pt-[160px] md:px-16">
        <div className="mx-auto max-w-[1080px]">
          <span className="mb-8 inline-flex rounded-full border border-white/25 px-3 py-1 text-[0.6375rem] font-semibold uppercase tracking-[0.12em] text-cream/60">
            Careers at Appsyra
          </span>
          <h1 className="mb-9 text-[clamp(2.75rem,5.5vw,4.5rem)] font-extrabold leading-[1.05] tracking-[-0.04em] text-cream max-w-[780px] text-balance">
            Build something that lasts, from the beginning.
          </h1>
          <p className="max-w-[560px] text-[1.25rem] leading-[1.65] text-cream/80">
            We are a pre-launch mobile product company looking for people who care about craft, move deliberately, and want to build products that genuinely improve people&apos;s lives.
          </p>
        </div>
      </section>

      {/* ── WHY JOIN ── */}
      <section className="bg-parchment px-6 py-24 md:px-16 md:py-28">
        <div className="mx-auto max-w-[1080px]">
          <div className="mb-14">
            <span className="mb-4 inline-flex rounded-full border border-sand px-3 py-1 text-[0.6375rem] font-semibold uppercase tracking-[0.12em] text-subtle">
              Why Appsyra
            </span>
            <h2 className="text-[clamp(2rem,3vw,2.75rem)] font-extrabold leading-[1.1] tracking-[-0.03em] text-ink">
              Why join at pre-launch?
            </h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {WHY_JOIN.map(({ title, body }) => (
              <div key={title} className="rounded-2xl border border-sand bg-cream p-9 transition-all hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(28,23,20,0.07)]">
                <div className="mb-5 h-1 w-9 rounded-full bg-terra" />
                <h3 className="mb-3 font-display text-[1.125rem] font-bold tracking-[-0.015em] text-ink">{title}</h3>
                <p className="text-[0.9375rem] leading-[1.65] text-muted">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── OPEN ROLES ── */}
      <section id="roles" className="bg-cream px-6 py-24 md:px-16 md:py-28">
        <div className="mx-auto max-w-[1080px]">
          <div className="mb-14">
            <span className="mb-4 inline-flex rounded-full border border-sand px-3 py-1 text-[0.6375rem] font-semibold uppercase tracking-[0.12em] text-subtle">
              Open roles
            </span>
            <h2 className="mb-4 text-[clamp(2rem,3vw,2.75rem)] font-extrabold leading-[1.1] tracking-[-0.03em] text-ink">
              We&apos;re hiring.
            </h2>
            <p className="max-w-[480px] text-[1.0625rem] leading-[1.65] text-muted">
              All roles are remote-first. We are a distributed team across Asia and Southeast Asia and we hire across time zones.
            </p>
          </div>

          <div className="flex flex-col gap-3">
            {OPEN_ROLES.map(({ title, type, area, description }) => (
              <div key={title} className="group rounded-2xl border border-sand bg-cream p-8 transition-all hover:border-terra hover:-translate-y-0.5">
                <div className="mb-4 flex flex-wrap items-start justify-between gap-4">
                  <div>
                    <h3 className="font-display text-[1.25rem] font-bold tracking-[-0.015em] text-ink group-hover:text-terra transition-colors">{title}</h3>
                    <p className="mt-1 text-[0.875rem] text-subtle">{type}</p>
                  </div>
                  <span className={`rounded-full px-3 py-1 text-[0.6375rem] font-semibold uppercase tracking-[0.1em] ${
                    area === "Engineering" ? "bg-cobalt/[0.07] text-cobalt" : "bg-terra/[0.07] text-terra"
                  }`}>
                    {area}
                  </span>
                </div>
                <p className="text-[0.9375rem] leading-[1.65] text-muted">{description}</p>
                <div className="mt-5">
                  <a
                    href={`mailto:support@appsyra.com?subject=Application: ${encodeURIComponent(title)}`}
                    className="inline-flex items-center gap-2 text-[0.9375rem] font-semibold text-cobalt tracking-[-0.01em] transition-[gap] hover:gap-3"
                  >
                    Apply via email <Arrow />
                  </a>
                </div>
              </div>
            ))}
          </div>

          <p className="mt-10 text-[0.9375rem] leading-[1.65] text-muted">
            Don&apos;t see a role that fits?{" "}
            <a
              href="mailto:support@appsyra.com?subject=General application"
              className="font-semibold text-cobalt hover:text-terra transition-colors"
            >
              Send us a general application
            </a>
            {" "}— we will keep it on file.
          </p>
        </div>
      </section>

      {/* ── CULTURE ── */}
      <section className="bg-cobalt px-6 py-24 md:px-16 md:py-28">
        <div className="mx-auto max-w-[1080px] grid gap-16 md:grid-cols-[1fr_1fr] md:items-center">
          <div>
            <span className="mb-6 inline-flex rounded-full border border-white/25 px-3 py-1 text-[0.6375rem] font-semibold uppercase tracking-[0.12em] text-cream/60">
              How we work
            </span>
            <h2 className="mb-6 text-[clamp(1.75rem,2.5vw,2.25rem)] font-extrabold leading-[1.15] tracking-[-0.03em] text-cream">
              Remote, senior-weighted, async-first.
            </h2>
            <p className="text-[1.0625rem] leading-[1.65] text-[#90ADEC]">
              We are a distributed team across Asia and Southeast Asia. We communicate primarily in writing, protect deep work time, and make decisions collaboratively without requiring constant synchronous meetings.
            </p>
            <p className="mt-4 text-[1.0625rem] leading-[1.65] text-[#90ADEC]">
              We are senior-weighted by design. We prefer smaller teams of highly capable people over larger teams that need heavy coordination overhead.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              { label: "Team structure", value: "Small, senior-weighted" },
              { label: "Location", value: "Asia · Southeast Asia · Remote" },
              { label: "Communication", value: "Async-first, written culture" },
              { label: "Stage", value: "Pre-launch · Building now" },
            ].map(({ label, value }) => (
              <div key={label} className="rounded-2xl bg-cream/[0.07] p-6">
                <p className="mb-1.5 text-[0.6875rem] font-semibold uppercase tracking-[0.1em] text-cream/50">{label}</p>
                <p className="font-display text-[0.9375rem] font-bold text-cream">{value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-ink px-6 py-24 md:px-16 md:py-28">
        <div className="mx-auto max-w-[1080px] flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="mb-4 text-[clamp(1.75rem,2.5vw,2.5rem)] font-extrabold leading-[1.15] tracking-[-0.03em] text-cream max-w-[560px]">
              Questions before you apply?
            </h2>
            <p className="max-w-[440px] text-[1.0625rem] leading-[1.65] text-[#7A6A62]">
              We are happy to talk through a role before you send an application. Reach out and we will respond promptly.
            </p>
          </div>
          <Link
            href="/contact"
            className="shrink-0 inline-flex items-center gap-2 rounded-[10px] bg-terra px-6 py-[14px] text-[1rem] font-semibold text-cream tracking-[-0.01em] transition-all hover:bg-[#AC3317] hover:-translate-y-px"
          >
            Contact us <Arrow />
          </Link>
        </div>
      </section>
    </>
  );
}
