import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Appsyra — Mobile Lifestyle Apps",
  description:
    "Appsyra is a pre-launch mobile product company developing lifestyle apps for global audiences.",
};

/* ── Arrow icon ── */
function Arrow() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path d="M3 8h10M8 3l5 5-5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/* ── Abstract phone illustration (SVG) ── */
function PhoneIllustration() {
  return (
    <svg viewBox="0 0 280 560" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-[clamp(160px,20vw,240px)] h-auto" aria-hidden="true">
      <defs>
        <clipPath id="screenClip">
          <rect x="22" y="18" width="236" height="524" rx="38" />
        </clipPath>
      </defs>
      {/* Frame */}
      <rect x="8" y="0" width="264" height="560" rx="48" fill="#1C1714" />
      <rect x="-2" y="110" width="5" height="34" rx="2.5" fill="#282018" />
      <rect x="-2" y="155" width="5" height="34" rx="2.5" fill="#282018" />
      <rect x="277" y="130" width="5" height="52" rx="2.5" fill="#282018" />
      {/* Screen */}
      <rect x="22" y="18" width="236" height="524" rx="38" fill="#FAF7F2" />
      <g clipPath="url(#screenClip)">
        {/* Status bar */}
        <rect x="22" y="18" width="236" height="50" fill="#FAF7F2" />
        <rect x="108" y="26" width="64" height="13" rx="6.5" fill="#1C1714" />
        <rect x="188" y="30" width="30" height="5" rx="2.5" fill="#1C1714" opacity="0.2" />
        <rect x="43" y="30" width="20" height="5" rx="2.5" fill="#1C1714" opacity="0.15" />
        {/* Cobalt header */}
        <rect x="22" y="68" width="236" height="92" fill="#1847D0" />
        <rect x="40" y="86" width="55" height="9" rx="4.5" fill="#FAF7F2" opacity="0.55" />
        <rect x="40" y="103" width="110" height="13" rx="6.5" fill="#FAF7F2" opacity="0.85" />
        <rect x="40" y="124" width="76" height="8" rx="4" fill="#FAF7F2" opacity="0.4" />
        <circle cx="224" cy="106" r="18" fill="#FAF7F2" opacity="0.12" />
        <circle cx="224" cy="106" r="12" fill="#FAF7F2" opacity="0.2" />
        {/* Content stubs */}
        <rect x="40" y="178" width="156" height="9" rx="4.5" fill="#1C1714" opacity="0.65" />
        <rect x="40" y="196" width="114" height="9" rx="4.5" fill="#1C1714" opacity="0.4" />
        <rect x="40" y="214" width="178" height="9" rx="4.5" fill="#1C1714" opacity="0.22" />
        {/* Terra card */}
        <rect x="30" y="238" width="220" height="110" rx="14" fill="#C63D1B" />
        <rect x="48" y="260" width="96" height="10" rx="5" fill="#FAF7F2" opacity="0.8" />
        <rect x="48" y="278" width="68" height="8" rx="4" fill="#FAF7F2" opacity="0.45" />
        <rect x="48" y="294" width="82" height="8" rx="4" fill="#FAF7F2" opacity="0.3" />
        <circle cx="220" cy="293" r="38" fill="#FAF7F2" opacity="0.06" />
        <circle cx="220" cy="293" r="22" fill="#FAF7F2" opacity="0.08" />
        {/* Mini cards */}
        <rect x="30" y="366" width="104" height="100" rx="13" fill="#F0E6DA" />
        <rect x="48" y="384" width="42" height="42" rx="9" fill="#C4871C" />
        <rect x="48" y="434" width="66" height="7" rx="3.5" fill="#1C1714" opacity="0.35" />
        <rect x="48" y="448" width="48" height="7" rx="3.5" fill="#1C1714" opacity="0.2" />
        <rect x="146" y="366" width="104" height="100" rx="13" fill="#1847D0" />
        <circle cx="198" cy="400" r="24" fill="#FAF7F2" opacity="0.1" />
        <circle cx="198" cy="400" r="14" fill="#FAF7F2" opacity="0.15" />
        <rect x="162" y="434" width="72" height="7" rx="3.5" fill="#FAF7F2" opacity="0.55" />
        <rect x="162" y="448" width="52" height="7" rx="3.5" fill="#FAF7F2" opacity="0.3" />
        {/* Bottom nav */}
        <rect x="22" y="484" width="236" height="90" fill="#1C1714" />
        <rect x="100" y="550" width="80" height="4" rx="2" fill="#FAF7F2" opacity="0.2" />
        <circle cx="70"  cy="510" r="7" fill="#FAF7F2" opacity="0.28" />
        <circle cx="116" cy="510" r="9" fill="#C63D1B" />
        <circle cx="164" cy="510" r="7" fill="#FAF7F2" opacity="0.28" />
        <circle cx="210" cy="510" r="7" fill="#FAF7F2" opacity="0.28" />
        <rect x="110" y="528" width="12" height="3" rx="1.5" fill="#C63D1B" opacity="0.6" />
      </g>
      {/* Screen edge glare */}
      <rect x="22" y="18" width="236" height="524" rx="38" fill="none" stroke="#FFFFFF" strokeWidth="0.5" opacity="0.15" />
    </svg>
  );
}

export default function HomePage() {
  return (
    <>
      {/* ── HERO ── */}
      <section aria-label="Hero" className="grid min-h-dvh grid-cols-1 lg:grid-cols-[55fr_45fr]">
        {/* Left: copy */}
        <div className="flex flex-col justify-center bg-cream px-6 pb-20 pt-[120px] md:px-16 lg:px-20">
          <div className="max-w-[560px]">
            <span className="mb-7 inline-flex items-center rounded-full border border-sand px-3 py-1 text-[0.6375rem] font-semibold uppercase tracking-[0.12em] text-subtle">
              Mobile Lifestyle Apps · Pre-launch
            </span>
            <h1 className="mb-7 text-[clamp(2.5rem,4.5vw,4rem)] font-extrabold leading-[1.05] tracking-[-0.035em] text-ink text-balance">
              Building mobile products that will improve the lives of millions.
            </h1>
            <p className="mb-10 max-w-[440px] text-[1.125rem] leading-[1.65] text-muted">
              Appsyra is a pre-launch mobile lifestyle company developing apps for everyday human needs — designed from the ground up for global audiences.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-[10px] bg-terra px-6 py-[14px] text-[1rem] font-semibold text-cream tracking-[-0.01em] transition-all hover:bg-[#AC3317] hover:-translate-y-px"
              >
                Get in touch <Arrow />
              </Link>
              <Link
                href="/what-we-do"
                className="inline-flex items-center gap-2 text-[0.9375rem] font-semibold text-cobalt tracking-[-0.01em] transition-[gap] hover:gap-3"
              >
                Learn what we&apos;re building <Arrow />
              </Link>
            </div>
          </div>
        </div>
        {/* Right: cobalt panel + phone */}
        <div className="flex min-h-[420px] items-center justify-center bg-cobalt px-10 pb-20 pt-[120px] lg:min-h-0 lg:px-16">
          <div style={{ transform: "rotate(-6deg)", filter: "drop-shadow(0 40px 80px rgba(28,23,20,0.28))" }}>
            <PhoneIllustration />
          </div>
        </div>
      </section>

      {/* ── MISSION STRIP ── */}
      <section aria-label="Mission" className="bg-ink px-6 py-24 md:px-16 md:py-28">
        <div className="mx-auto max-w-[880px] text-center">
          <span className="mb-8 inline-flex rounded-full border border-white/20 px-3 py-1 text-[0.6375rem] font-semibold uppercase tracking-[0.12em] text-cream/60">
            &#8220;
          </span>
          <blockquote className="text-[clamp(1.75rem,3.5vw,3rem)] font-extrabold leading-[1.15] tracking-[-0.03em] text-cream text-balance">
            We believe mobile apps can do more — reach further, matter more, and genuinely change how people live every day.
          </blockquote>
          <p className="mt-8 text-[1rem] tracking-[0.01em] text-[#7A6A62]">
            — The Appsyra founding principle
          </p>
        </div>
      </section>

      {/* ── WHAT WE DO ── */}
      <section id="what-we-do" aria-label="What we do" className="bg-cream px-6 py-24 md:px-16 md:py-28">
        <div className="mx-auto max-w-[1080px]">
          <div className="mb-16 max-w-[600px]">
            <span className="mb-4 inline-flex rounded-full border border-sand px-3 py-1 text-[0.6375rem] font-semibold uppercase tracking-[0.12em] text-subtle">
              What we do
            </span>
            <h2 className="mb-4 text-[clamp(2rem,3vw,2.75rem)] font-extrabold leading-[1.1] tracking-[-0.03em] text-ink">
              Products built for the way people actually live.
            </h2>
            <p className="text-[1.0625rem] leading-[1.65] text-muted">
              We develop mobile lifestyle apps that fit naturally into daily routines — not forced into them.
            </p>
          </div>

          <div className="mb-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {/* Card 1 */}
            <div className="rounded-2xl border border-sand bg-cream p-9 transition-all hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(28,23,20,0.07)]">
              <div className="mb-7">
                <svg width="44" height="44" viewBox="0 0 44 44" fill="none" aria-hidden="true">
                  <rect x="4" y="8" width="36" height="26" rx="7" fill="#1847D0" opacity="0.12" />
                  <rect x="0" y="14" width="36" height="26" rx="7" fill="#1847D0" />
                  <rect x="8" y="22" width="20" height="3" rx="1.5" fill="#FAF7F2" opacity="0.7" />
                  <rect x="8" y="29" width="14" height="3" rx="1.5" fill="#FAF7F2" opacity="0.4" />
                </svg>
              </div>
              <h3 className="mb-3 text-[1.25rem] font-bold tracking-[-0.015em] text-ink">Lifestyle, by design</h3>
              <p className="text-[0.9375rem] leading-[1.65] text-muted">
                Our apps will be built around real human habits — how people actually move through their days — not around what is technically convenient to build.
              </p>
            </div>
            {/* Card 2 */}
            <div className="rounded-2xl border border-sand bg-cream p-9 transition-all hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(28,23,20,0.07)]">
              <div className="mb-7">
                <svg width="44" height="44" viewBox="0 0 44 44" fill="none" aria-hidden="true">
                  <circle cx="10" cy="14" r="4" fill="#C63D1B" />
                  <circle cx="22" cy="14" r="4" fill="#C63D1B" opacity="0.6" />
                  <circle cx="34" cy="14" r="4" fill="#C63D1B" opacity="0.3" />
                  <circle cx="10" cy="28" r="4" fill="#C63D1B" opacity="0.5" />
                  <circle cx="22" cy="28" r="4" fill="#C63D1B" opacity="0.85" />
                  <circle cx="34" cy="28" r="4" fill="#C63D1B" />
                </svg>
              </div>
              <h3 className="mb-3 text-[1.25rem] font-bold tracking-[-0.015em] text-ink">Global from day one</h3>
              <p className="text-[0.9375rem] leading-[1.65] text-muted">
                Every product we build will be designed for international audiences from the first line of code — localisation, market-fit, and cultural nuance are not afterthoughts.
              </p>
            </div>
            {/* Card 3 */}
            <div className="rounded-2xl border border-sand bg-cream p-9 transition-all hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(28,23,20,0.07)]">
              <div className="mb-7">
                <svg width="44" height="44" viewBox="0 0 44 44" fill="none" aria-hidden="true">
                  <circle cx="22" cy="26" r="14" fill="#1847D0" opacity="0.1" />
                  <circle cx="22" cy="26" r="10" fill="#1847D0" opacity="0.18" />
                  <circle cx="22" cy="26" r="6"  fill="#1847D0" />
                  <circle cx="30" cy="14" r="5"  fill="#C63D1B" />
                </svg>
              </div>
              <h3 className="mb-3 text-[1.25rem] font-bold tracking-[-0.015em] text-ink">Human-centered</h3>
              <p className="text-[0.9375rem] leading-[1.65] text-muted">
                We will design around real needs, not features. Every product decision will be tested against a simple question: does this make someone&apos;s life genuinely better?
              </p>
            </div>
          </div>

          <Link
            href="/what-we-do"
            className="inline-flex items-center gap-2 text-[0.9375rem] font-semibold text-cobalt tracking-[-0.01em] transition-[gap] hover:gap-3"
          >
            Learn more about what we do <Arrow />
          </Link>
        </div>
      </section>

      {/* ── VALUES ── */}
      <section aria-label="Values" className="bg-parchment px-6 py-24 md:px-16 md:py-28">
        <div className="mx-auto max-w-[1080px]">
          <div className="grid gap-16 md:grid-cols-[1fr_2fr]">
            {/* Left */}
            <div>
              <span className="mb-5 inline-flex rounded-full border border-sand px-3 py-1 text-[0.6375rem] font-semibold uppercase tracking-[0.12em] text-subtle">
                Our values
              </span>
              <h2 className="text-[clamp(1.75rem,2.5vw,2.25rem)] font-extrabold leading-[1.15] tracking-[-0.03em] text-ink">
                What we stand for.
              </h2>
            </div>
            {/* Right */}
            <div>
              {[
                { n: "01", title: "Craft.", body: "We sweat the details. From the architecture of a system to the weight of a button, everything deserves to be done with care." },
                { n: "02", title: "Curiosity.", body: "We ask questions before we write a line of code. Understanding the why is always more important than moving fast on the what." },
                { n: "03", title: "Care.", body: "Real people will use what we build. That responsibility sits at the centre of every product and business decision we make." },
                { n: "04", title: "Honesty.", body: "Clear thinking, clear communication. We don't dress up difficult truths. We say what we mean — to our team, our partners, and ourselves." },
                { n: "05", title: "Long-term thinking.", body: "We build for decades, not quarters. Every product, partnership, and hire should hold up against the question: does this compound over time?" },
              ].map(({ n, title, body }) => (
                <div key={n} className="flex items-baseline gap-4 border-b border-[#D4C4B8] py-8 last:border-b-0">
                  <span className="min-w-[24px] font-display text-[1.25rem] font-extrabold tracking-[-0.01em] text-terra">{n}</span>
                  <div>
                    <p className="mb-1.5 font-display text-[1.125rem] font-bold tracking-[-0.01em] text-ink">{title}</p>
                    <p className="text-[0.9375rem] leading-[1.6] text-muted">{body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── WHO WE ARE ── */}
      <section aria-label="Who we are" className="bg-cobalt px-6 py-24 md:px-16 md:py-28">
        <div className="mx-auto max-w-[1080px] flex items-center gap-16">
          <div className="flex-1">
            <span className="mb-7 inline-flex rounded-full border border-white/25 px-3 py-1 text-[0.6375rem] font-semibold uppercase tracking-[0.12em] text-cream/60">
              Who we are
            </span>
            <p className="mb-6 text-[clamp(1.75rem,3vw,2.5rem)] font-extrabold leading-[1.15] tracking-[-0.03em] text-cream max-w-[600px] text-balance">
              A team of designers, engineers and product thinkers — distributed across Asia and Southeast Asia.
            </p>
            <p className="mb-10 max-w-[520px] text-[1.0625rem] leading-[1.65] text-[#90ADEC]">
              We are a remote-first, senior-weighted team. Diverse in background, united in how we think about building products people genuinely love.
            </p>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 rounded-[10px] bg-cream px-6 py-[14px] text-[1rem] font-semibold text-ink tracking-[-0.01em] transition-all hover:bg-parchment hover:-translate-y-px"
            >
              More about us <Arrow />
            </Link>
          </div>
          {/* Decorative A mark */}
          <div className="hidden shrink-0 opacity-[0.08] lg:block" aria-hidden="true">
            <svg viewBox="0 0 160 180" fill="none" className="h-[135px] w-[120px]">
              <polygon points="6,176 24,176 80,8 62,8" fill="#FAF7F2" />
              <polygon points="70,8 88,8 154,176 136,176" fill="#FAF7F2" />
              <rect x="28" y="106" width="104" height="22" fill="#FAF7F2" />
            </svg>
          </div>
        </div>
      </section>

      {/* ── CAREERS TEASER ── */}
      <section aria-label="Careers" className="bg-terra px-6 py-24 md:px-16 md:py-28">
        <div className="mx-auto max-w-[1080px] flex flex-col items-start gap-6">
          <span className="inline-flex rounded-full border border-white/25 px-3 py-1 text-[0.6375rem] font-semibold uppercase tracking-[0.12em] text-cream/60">
            Careers
          </span>
          <h2 className="text-[clamp(2.25rem,4vw,3.5rem)] font-extrabold leading-[1.05] tracking-[-0.04em] text-cream">
            We&apos;re growing.
          </h2>
          <p className="max-w-[480px] text-[1.125rem] leading-[1.6] text-cream/80">
            We are looking for people who take craft seriously and care about the impact of what they build. Pre-launch is the best time to join.
          </p>
          <div className="mt-2 flex flex-wrap gap-4">
            <Link
              href="/careers"
              className="inline-flex items-center gap-2 rounded-[10px] bg-cream px-6 py-[14px] text-[1rem] font-semibold text-ink tracking-[-0.01em] transition-all hover:bg-parchment hover:-translate-y-px"
            >
              See open roles <Arrow />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-[10px] border border-white/35 px-6 py-[14px] text-[1rem] font-medium text-cream tracking-[-0.01em] transition-all hover:border-white/80 hover:bg-white/7"
            >
              Get in touch directly
            </Link>
          </div>
        </div>
      </section>

      {/* ── CONTACT PREVIEW ── */}
      <section id="contact" aria-label="Contact" className="border-t border-sand bg-cream px-6 py-24 md:px-16 md:py-28">
        <div className="mx-auto max-w-[1080px] grid gap-16 md:grid-cols-2">
          <div>
            <span className="mb-6 inline-flex rounded-full border border-sand px-3 py-1 text-[0.6375rem] font-semibold uppercase tracking-[0.12em] text-subtle">
              Contact
            </span>
            <h2 className="mb-5 text-[clamp(1.75rem,2.5vw,2.5rem)] font-extrabold leading-[1.15] tracking-[-0.03em] text-ink">
              Partners, press, and&nbsp;compliance.
            </h2>
            <p className="max-w-[400px] text-[1.0625rem] leading-[1.65] text-muted">
              Whether you are a potential partner, a candidate, or reviewing us as part of a compliance process — we welcome your inquiry and respond promptly.
            </p>
          </div>
          <div className="flex flex-col gap-5">
            {[
              { label: "General", email: "support@appsyra.com" },
              { label: "Legal & Compliance", email: "legal@appsyra.com" },
            ].map(({ label, email }) => (
              <a
                key={email}
                href={`mailto:${email}`}
                className="group flex flex-col gap-1 rounded-2xl border border-sand bg-cream p-6 text-decoration-none transition-all hover:border-terra hover:-translate-y-0.5"
              >
                <span className="text-[0.6875rem] font-semibold uppercase tracking-[0.1em] text-subtle">{label}</span>
                <span className="font-display text-[1.125rem] font-bold tracking-[-0.01em] text-cobalt group-hover:text-terra transition-colors">{email}</span>
              </a>
            ))}
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 text-[0.9375rem] font-semibold text-cobalt tracking-[-0.01em] transition-[gap] hover:gap-3 mt-1"
            >
              Full contact page <Arrow />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
