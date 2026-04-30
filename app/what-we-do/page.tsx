import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "What We Do",
  description:
    "Appsyra builds mobile lifestyle apps for the global B2C market. Learn about our product approach, focus areas, and the principles that will guide our development.",
};

function Arrow() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path d="M3 8h10M8 3l5 5-5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

const PRINCIPLES = [
  {
    n: "01",
    title: "We start with the person, not the feature.",
    body: "Every product begins with a deep understanding of the people who use it. We study habits, contexts, and friction points before writing a line of code. Features follow insight — not the other way around.",
  },
  {
    n: "02",
    title: "We design for retention, not just acquisition.",
    body: "Lifestyle apps live or die by whether people return to them the next day, and the day after. We build products that earn a place in daily routines by being genuinely useful — not by being manipulative or artificially habit-forming.",
  },
  {
    n: "03",
    title: "We build for the world, not just one market.",
    body: "International thinking is built into our product process from the start. Language, currency, cultural context, and local regulation are first-class considerations — not localization tickets filed at the end of a roadmap.",
  },
  {
    n: "04",
    title: "We ship with intent.",
    body: "We would rather release fewer features that work well than many features that work adequately. Quality is not a stage of development — it is the operating principle throughout.",
  },
];


export default function WhatWeDoPage() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="bg-cream px-6 pb-24 pt-[160px] md:px-16">
        <div className="mx-auto max-w-[1080px]">
          <span className="mb-8 inline-flex rounded-full border border-sand px-3 py-1 text-[0.6375rem] font-semibold uppercase tracking-[0.12em] text-subtle">
            What we do
          </span>
          <h1 className="mb-9 text-[clamp(2.75rem,5.5vw,5rem)] font-extrabold leading-[1.04] tracking-[-0.04em] text-ink max-w-[820px] text-balance">
            We build mobile apps that genuinely fit people&apos;s lives.
          </h1>
          <div className="mb-9 flex items-center gap-5">
            <div className="h-1 w-12 rounded-full bg-terra" />
            <div className="h-1 w-4 rounded-full bg-sand" />
          </div>
          <p className="max-w-[600px] text-[1.25rem] leading-[1.65] text-muted">
            Appsyra is a product company focused on the mobile lifestyle category — a broad and underserved space where thoughtful software can make a real difference in people&apos;s everyday lives.
          </p>
        </div>
      </section>

      {/* ── CATEGORY ── */}
      <section className="border-y border-sand bg-cream px-6 py-24 md:px-16 md:py-28">
        <div className="mx-auto max-w-[1080px] grid gap-16 md:grid-cols-2 md:items-start">
          <div>
            <span className="mb-5 inline-flex rounded-full border border-sand px-3 py-1 text-[0.6375rem] font-semibold uppercase tracking-[0.12em] text-subtle">
              The category
            </span>
            <h2 className="mb-6 text-[clamp(2rem,3vw,2.75rem)] font-extrabold leading-[1.1] tracking-[-0.03em] text-ink">
              Mobile lifestyle apps.
            </h2>
            <p className="text-[1.0625rem] leading-[1.75] text-muted">
              The lifestyle category covers the parts of daily life that people most want to improve — health, finances, habits, learning, productivity, relationships. It is intimate, high-retention, and genuinely global in scale.
            </p>
          </div>
          <div className="space-y-5 text-[1.0625rem] leading-[1.75] text-muted">
            <p>
              Mobile is where people spend the most time and take the most meaningful personal actions. For lifestyle apps — which are built around daily habits and personal goals — the mobile form factor is not just convenient. It is essential.
            </p>
            <p>
              Despite the maturity of app stores, large portions of the lifestyle category remain dominated by mediocre products: apps that were built quickly, designed generically, and optimised for short-term engagement over genuine value. We believe there is significant room for products built with more care.
            </p>
            <p>
              Appsyra focuses here — not by chasing every trend, but by picking specific problems we understand deeply and solving them with the craft and patience they deserve.
            </p>
          </div>
        </div>
      </section>

      {/* ── FOCUS ── */}
      <section className="bg-parchment px-6 py-24 md:px-16 md:py-28">
        <div className="mx-auto max-w-[1080px] grid gap-16 md:grid-cols-[1fr_1fr] md:items-start">
          <div>
            <span className="mb-4 inline-flex rounded-full border border-sand px-3 py-1 text-[0.6375rem] font-semibold uppercase tracking-[0.12em] text-subtle">
              Our focus
            </span>
            <h2 className="mb-6 text-[clamp(2rem,3vw,2.75rem)] font-extrabold leading-[1.1] tracking-[-0.03em] text-ink">
              One category, done properly.
            </h2>
          </div>
          <div className="space-y-5 text-[1.0625rem] leading-[1.75] text-muted">
            <p>
              We are not trying to cover every corner of mobile software. We focus specifically on the lifestyle category — the part of daily life where people most want to improve how they feel, how they spend their time, and how they move through their days.
            </p>
            <p>
              Our first product is in active development. We choose depth over breadth: one well-executed product that earns genuine trust is worth more to us than many mediocre ones.
            </p>
          </div>
        </div>
      </section>

      {/* ── PRODUCT PRINCIPLES ── */}
      <section className="bg-cobalt px-6 py-24 md:px-16 md:py-28">
        <div className="mx-auto max-w-[1080px]">
          <span className="mb-12 inline-flex rounded-full border border-white/25 px-3 py-1 text-[0.6375rem] font-semibold uppercase tracking-[0.12em] text-cream/60">
            Product principles
          </span>
          <div className="grid gap-[3px] md:grid-cols-2">
            {PRINCIPLES.map(({ n, title, body }) => (
              <div key={n} className="bg-cream/[0.06] p-10 first:rounded-tl-2xl last:rounded-br-2xl md:first:rounded-tl-2xl md:first:rounded-bl-0 md:first:rounded-tr-0 md:[&:nth-child(2)]:rounded-tr-2xl md:[&:nth-child(3)]:rounded-bl-2xl">
                <p className="mb-3 font-display text-[1rem] font-extrabold text-terra">{n}</p>
                <h3 className="mb-4 font-display text-[1.25rem] font-bold leading-[1.3] tracking-[-0.02em] text-cream">{title}</h3>
                <p className="text-[0.9375rem] leading-[1.7] text-cream/65">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── B2C FOCUS ── */}
      <section className="bg-ink px-6 py-24 md:px-16 md:py-28">
        <div className="mx-auto max-w-[1080px] max-w-[720px]">
          <div>
            <span className="mb-6 inline-flex rounded-full border border-white/25 px-3 py-1 text-[0.6375rem] font-semibold uppercase tracking-[0.12em] text-cream/60">
              B2C, global
            </span>
            <h2 className="mb-6 text-[clamp(1.75rem,3vw,2.5rem)] font-extrabold leading-[1.15] tracking-[-0.03em] text-cream max-w-[480px]">
              Built for people, everywhere.
            </h2>
            <p className="text-[1.0625rem] leading-[1.65] text-[#7A6A62]">
              All of Appsyra&apos;s products are direct-to-consumer. Our users are everyday people — not enterprises, not niche professional audiences. This shapes everything about how we build: the simplicity we demand of our interfaces, the markets we design for, the revenue models we choose.
            </p>
            <p className="mt-6 text-[1.0625rem] leading-[1.65] text-[#7A6A62]">
              We ship to iOS and Android, globally, from the first release. International thinking is not an afterthought — it is built into the product from day one.
            </p>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-cream px-6 py-24 md:px-16 md:py-28">
        <div className="mx-auto max-w-[1080px] flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="mb-3 text-[clamp(1.5rem,2vw,2rem)] font-extrabold leading-[1.2] tracking-[-0.03em] text-ink">
              Want to know more?
            </h2>
            <p className="max-w-[420px] text-[1.0625rem] leading-[1.65] text-muted">
              Whether you are a potential partner or a candidate — get in touch.
            </p>
          </div>
          <div className="flex flex-wrap gap-4 shrink-0">
            <Link
              href="/about"
              className="inline-flex items-center gap-2 rounded-[10px] bg-terra px-6 py-[14px] text-[1rem] font-semibold text-cream tracking-[-0.01em] transition-all hover:bg-[#AC3317] hover:-translate-y-px"
            >
              Read about us <Arrow />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-[10px] border border-sand px-6 py-[14px] text-[1rem] font-medium text-ink tracking-[-0.01em] transition-all hover:border-muted hover:-translate-y-px"
            >
              Get in touch <Arrow />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
