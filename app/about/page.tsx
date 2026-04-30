import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Appsyra — our story, mission, values, and the team building mobile lifestyle apps for global audiences.",
};

function Arrow() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path d="M3 8h10M8 3l5 5-5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function AboutPage() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="bg-cream px-6 pb-24 pt-[160px] md:px-16">
        <div className="mx-auto max-w-[1080px]">
          <span className="mb-8 inline-flex rounded-full border border-sand px-3 py-1 text-[0.6375rem] font-semibold uppercase tracking-[0.12em] text-subtle">
            About Appsyra
          </span>
          <h1 className="mb-9 text-[clamp(2.75rem,5.5vw,5rem)] font-extrabold leading-[1.04] tracking-[-0.04em] text-ink max-w-[800px] text-balance">
            We&apos;re building Appsyra for the long run.
          </h1>
          <div className="mb-9 flex items-center gap-5">
            <div className="h-1 w-12 rounded-full bg-terra" />
            <div className="h-1 w-4 rounded-full bg-sand" />
          </div>
          <p className="max-w-[560px] text-[1.25rem] leading-[1.65] text-muted">
            A pre-launch mobile product company with a clear mandate: build lifestyle apps that genuinely matter to people — globally, and at scale.
          </p>
        </div>
      </section>

      {/* ── OUR STORY ── */}
      <section id="story" className="border-b border-sand bg-cream px-6 pb-24 md:px-16">
        <div className="mx-auto max-w-[1080px] grid gap-20 md:grid-cols-[280px_1fr]">
          {/* Sticky label */}
          <div className="md:sticky md:top-24 md:self-start">
            <span className="mb-5 inline-flex rounded-full border border-sand px-3 py-1 text-[0.6375rem] font-semibold uppercase tracking-[0.12em] text-subtle">
              Our story
            </span>
            <p className="font-display text-[1.5rem] font-bold leading-[1.25] tracking-[-0.02em] text-ink">
              Where we came from. Where we&apos;re going.
            </p>
          </div>
          {/* Narrative */}
          <div className="space-y-5 text-[1.0625rem] leading-[1.75] text-muted">
            <p>
              Appsyra started with a conviction shared by a small group of experienced product builders: that the most meaningful opportunities in mobile software were still ahead of us, not behind us. That despite the maturity of app stores and the crowdedness of certain categories, there were entire dimensions of everyday life that remained underserved by truly thoughtful digital products.
            </p>
            <p>
              We chose to focus on the lifestyle category — not because it is easy, but because it is intimate. Lifestyle apps sit at the intersection of habit, identity, and aspiration. When they are done well, they become part of how people define their days. Done poorly, they become noise. We are building for the former.
            </p>
            <p>
              We are currently in the pre-launch phase. Our first products are in active development, being designed and built with the same care and deliberateness that we intend to bring to everything Appsyra makes. We are not in a rush. We are building the kind of foundations — product, team, process — that will allow us to move with confidence when the time comes.
            </p>
            <p>
              In the years ahead, Appsyra will grow into a multi-product company with a global footprint. Our apps will be used by millions of people across dozens of markets. The team will expand — always with a bias toward people who care deeply about their craft. And we will have built something that compounds: a reputation, a culture, and a portfolio of products that earn real trust from real people.
            </p>
          </div>
        </div>
      </section>

      {/* ── MISSION & VISION ── */}
      <section id="mission" className="bg-cobalt px-6 py-24 md:px-16 md:py-28">
        <div className="mx-auto max-w-[1080px]">
          <span className="mb-12 inline-flex rounded-full border border-white/25 px-3 py-1 text-[0.6375rem] font-semibold uppercase tracking-[0.12em] text-cream/60">
            Mission &amp; Vision
          </span>
          <div className="grid gap-[3px] md:grid-cols-2">
            {/* Mission */}
            <div className="rounded-2xl rounded-r-none bg-cream/[0.07] p-12 md:rounded-2xl md:rounded-r-none">
              <p className="mb-5 text-[0.6875rem] font-semibold uppercase tracking-[0.12em] text-cream/50">
                Mission — what we do
              </p>
              <p className="mb-5 font-display text-[1.375rem] font-bold leading-[1.35] tracking-[-0.02em] text-cream">
                To build mobile apps that genuinely improve the everyday lives of people — across cultures, time zones, and contexts.
              </p>
              <p className="text-[0.9375rem] leading-[1.7] text-cream/65">
                We do this by combining deep product thinking with relentless attention to craft. Every decision we make — product, design, engineering, business — is measured against a single question: does this make someone&apos;s life genuinely better?
              </p>
            </div>
            {/* Vision */}
            <div className="rounded-2xl rounded-l-none border-l border-cream/[0.08] bg-cream/[0.04] p-12 md:rounded-2xl md:rounded-l-none">
              <p className="mb-5 text-[0.6875rem] font-semibold uppercase tracking-[0.12em] text-cream/50">
                Vision — what we&apos;re building toward
              </p>
              <p className="mb-5 font-display text-[1.375rem] font-bold leading-[1.35] tracking-[-0.02em] text-cream">
                A world where great mobile software is accessible to everyone, regardless of where they live or what language they speak.
              </p>
              <p className="text-[0.9375rem] leading-[1.7] text-cream/65">
                We envision a future where the apps people use every day make those days meaningfully better — where the gap between aspiration and daily habit is narrowed by software that actually cares about people. We will build that software.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── VALUES ── */}
      <section id="values" className="bg-parchment px-6 py-24 md:px-16 md:py-28">
        <div className="mx-auto max-w-[1080px]">
          <div className="mb-14 flex flex-wrap items-end justify-between gap-6">
            <div>
              <span className="mb-4 inline-flex rounded-full border border-sand px-3 py-1 text-[0.6375rem] font-semibold uppercase tracking-[0.12em] text-subtle">
                Our values
              </span>
              <h2 className="text-[clamp(2rem,3vw,2.75rem)] font-extrabold leading-[1.1] tracking-[-0.03em] text-ink">
                How we think.
              </h2>
            </div>
            <p className="max-w-[360px] text-[1rem] leading-[1.65] text-muted">
              These are not aspirational posters. They are the actual filters through which we make decisions every day.
            </p>
          </div>

          <div>
            {[
              {
                n: "01", title: "Craft.",
                body: ["We sweat the details — from system architecture to the weight of a button label. We believe that the quality of attention you bring to small things is a reliable predictor of the quality of what you will ultimately build.",
                       "Craft is not perfectionism. It is the discipline of caring consistently, even when no one is watching."],
              },
              {
                n: "02", title: "Curiosity.",
                body: ["We ask questions before we write a line of code. We are drawn to problems that are not yet fully understood — because those are the ones where the most valuable work remains to be done.",
                       "Curiosity also means staying humble. We don't assume we already know the right answer. We design systems that help us find out."],
              },
              {
                n: "03", title: "Care.",
                body: ["Real people will use what we build. That is not an abstraction — it is a weight we carry. We care about the experience of using our products, about the data we hold, and about the communities we eventually become part of.",
                       "Care extends inward too — to how we treat our team, our partners, and anyone who interacts with Appsyra."],
              },
              {
                n: "04", title: "Honesty.",
                body: ["We say what we mean. We don't dress difficult truths in optimistic language. We surface problems early, give direct feedback, and hold ourselves to the same standard we expect of others.",
                       "Honesty with users matters too. We will not design dark patterns, obscure our terms, or exploit the attention of the people we serve."],
              },
              {
                n: "05", title: "Long-term thinking.",
                body: ["We build for decades, not quarters. This shapes everything — how we hire, how we architect our products, how we choose partners, how we handle growth. We prefer slow compounding over fast fragility.",
                       "It also means being honest about what we don't yet know, and building in the capacity to learn and adapt as we do."],
              },
            ].map(({ n, title, body }) => (
              <div key={n} className="grid gap-10 border-b border-[#D4C4B8] py-10 last:border-b-0 md:grid-cols-[200px_1fr]">
                <div>
                  <span className="font-display text-[1rem] font-extrabold tracking-[-0.01em] text-terra">{n}</span>
                  <p className="mt-2 font-display text-[1.375rem] font-bold tracking-[-0.015em] text-ink">{title}</p>
                </div>
                <div className="space-y-3">
                  {body.map((p, i) => (
                    <p key={i} className="text-[1.0625rem] leading-[1.75] text-[#5A4A42]">{p}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW WE WORK ── */}
      <section id="how-we-work" className="bg-cream px-6 py-24 md:px-16 md:py-28">
        <div className="mx-auto max-w-[1080px]">
          <div className="mb-14">
            <span className="mb-4 inline-flex rounded-full border border-sand px-3 py-1 text-[0.6375rem] font-semibold uppercase tracking-[0.12em] text-subtle">
              How we work
            </span>
            <h2 className="text-[clamp(2rem,3vw,2.75rem)] font-extrabold leading-[1.1] tracking-[-0.03em] text-ink">
              Principles, not rules.
            </h2>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {[
              { accent: "terra", title: "We ship deliberately.", body: "Quality over velocity. We would rather take the time to get something right the first time than move fast and accumulate debt we will spend years repaying. Deliberate doesn't mean slow — it means intentional." },
              { accent: "cobalt", title: "We listen before we build.", body: "Every product decision begins with research. We talk to the people we are building for, we study the spaces we enter, and we resist the temptation to build solutions looking for problems." },
              { accent: "terra", title: "Distributed by default.", body: "Our team works across time zones — not as a compromise, but by design. Async-first communication, strong documentation, and deep work windows are built into how we operate from day one." },
              { accent: "cobalt", title: "We measure what matters.", body: "Vanity metrics don't interest us. We care about outcomes — real improvements in the lives of the people using our products — and we build the measurement systems to actually see them." },
            ].map(({ accent, title, body }) => (
              <div key={title} className="rounded-2xl border border-sand bg-cream p-8 transition-all hover:-translate-y-1 hover:shadow-[0_12px_32px_rgba(28,23,20,0.07)]">
                <div className={`mb-6 h-1 w-9 rounded-full ${accent === "terra" ? "bg-terra" : "bg-cobalt"}`} />
                <h3 className="mb-3 font-display text-[1.125rem] font-bold tracking-[-0.015em] text-ink">{title}</h3>
                <p className="text-[0.9375rem] leading-[1.65] text-muted">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── GEOGRAPHY ── */}
      <section id="geography" className="bg-ink px-6 py-24 md:px-16 md:py-28">
        <div className="mx-auto max-w-[1080px]">
          <span className="mb-8 inline-flex rounded-full border border-white/25 px-3 py-1 text-[0.6375rem] font-semibold uppercase tracking-[0.12em] text-cream/60">
            Where we are
          </span>
          <h2 className="mb-4 text-[clamp(1.75rem,3vw,2.5rem)] font-extrabold leading-[1.15] tracking-[-0.03em] text-cream max-w-[560px]">
            A team distributed across UAE and Europe.
          </h2>
          <p className="mb-16 max-w-[480px] text-[1.0625rem] leading-[1.65] text-[#7A6A62]">
            Remote-first and senior-weighted, we work across time zones with async discipline and a shared culture built around craft and clarity.
          </p>

          {/* Abstract dot-grid map */}
          <div className="overflow-hidden rounded-2xl border border-[#2E2520] bg-[#181210]">
            <svg viewBox="0 0 900 380" fill="none" xmlns="http://www.w3.org/2000/svg" className="block h-auto w-full" aria-hidden="true">
              <defs>
                <pattern id="dotgrid" x="0" y="0" width="22" height="22" patternUnits="userSpaceOnUse">
                  <circle cx="11" cy="11" r="1.4" fill="#FAF7F2" opacity="0.09" />
                </pattern>
                <pattern id="dotland" x="0" y="0" width="22" height="22" patternUnits="userSpaceOnUse">
                  <circle cx="11" cy="11" r="1.4" fill="#FAF7F2" opacity="0.22" />
                </pattern>
              </defs>
              <rect width="900" height="380" fill="#181210" />
              <rect width="900" height="380" fill="url(#dotgrid)" />
              {/* Continent shapes */}
              <polygon points="310,60 360,50 400,55 430,70 440,90 430,115 410,130 380,140 350,130 320,110 300,90 305,70" fill="url(#dotland)" opacity="0.9" />
              <polygon points="280,160 450,155 470,190 460,230 420,250 350,255 290,240 265,210 268,180" fill="url(#dotland)" opacity="0.9" />
              <polygon points="460,130 510,125 540,140 560,170 555,210 530,240 500,250 470,240 450,210 448,170 455,145" fill="url(#dotland)" opacity="0.9" />
              <polygon points="570,145 620,140 650,155 660,180 640,210 610,220 580,205 560,180 560,158" fill="url(#dotland)" opacity="0.6" />
              <polygon points="360,30 480,20 520,45 510,80 460,90 400,85 355,75 345,50" fill="url(#dotland)" opacity="0.7" />
              <polygon points="20,50 120,40 150,65 145,110 120,140 80,155 40,140 10,110 8,75" fill="url(#dotland)" opacity="0.55" />
              <polygon points="80,180 140,170 165,195 165,260 140,305 100,315 65,295 50,255 55,210 68,190" fill="url(#dotland)" opacity="0.5" />
              <polygon points="460,240 500,238 520,265 515,310 490,335 460,330 440,305 435,270 445,250" fill="url(#dotland)" opacity="0.55" />
              <polygon points="670,140 730,130 760,150 755,185 720,200 680,190 660,170 662,150" fill="url(#dotland)" opacity="0.5" />
              {/* UAE dot */}
              <g style={{ animation: "pulse 2.4s ease-in-out infinite" }}>
                <circle cx="510" cy="195" r="28" fill="#C63D1B" opacity="0.08" />
                <circle cx="510" cy="195" r="16" fill="#C63D1B" opacity="0.16" />
                <circle cx="510" cy="195" r="7"  fill="#C63D1B" />
                <circle cx="510" cy="195" r="3"  fill="#FAF7F2" />
              </g>
              {/* Europe dot */}
              <g style={{ animation: "pulse 2.4s ease-in-out infinite", animationDelay: "1.2s" }}>
                <circle cx="382" cy="82" r="24" fill="#C63D1B" opacity="0.08" />
                <circle cx="382" cy="82" r="14" fill="#C63D1B" opacity="0.16" />
                <circle cx="382" cy="82" r="6"  fill="#C63D1B" />
                <circle cx="382" cy="82" r="2.5" fill="#FAF7F2" />
              </g>
              {/* Connection arc */}
              <path d="M 382 82 Q 446 40 510 195" stroke="#C63D1B" strokeWidth="1.2" strokeDasharray="5,8" opacity="0.3" fill="none" />
              {/* Labels */}
              <text x="522" y="192" fontFamily="DM Sans,sans-serif" fontWeight="600" fontSize="11" fill="#FAF7F2" opacity="0.65" letterSpacing="0.06em">DUBAI, UAE</text>
              <text x="394" y="79"  fontFamily="DM Sans,sans-serif" fontWeight="600" fontSize="11" fill="#FAF7F2" opacity="0.65" letterSpacing="0.06em">EUROPE</text>
              {/* Bottom fade */}
              <rect x="0" y="310" width="900" height="70" fill="#181210" opacity="0.6" />
            </svg>
          </div>
          <p className="mt-5 text-[0.8125rem] tracking-[0.02em] text-[#4A3C34]">
            Distributed team · Async-first · UAE &amp; Europe · Remote by design
          </p>
        </div>
      </section>

      {/* ── CTA ── */}
      <section id="cta" className="bg-terra px-6 py-24 md:px-16 md:py-28">
        <div className="mx-auto max-w-[1080px] grid gap-[3px] md:grid-cols-2">
          {/* Careers */}
          <div className="rounded-2xl rounded-r-none bg-cream/[0.08] p-13 md:p-[52px]">
            <p className="mb-4 text-[0.6875rem] font-semibold uppercase tracking-[0.12em] text-cream/50">For candidates</p>
            <h2 className="mb-4 text-[clamp(1.75rem,2.5vw,2.25rem)] font-extrabold leading-[1.15] tracking-[-0.03em] text-cream">
              Want to be part of it?
            </h2>
            <p className="mb-8 text-[1rem] leading-[1.65] text-cream/75">
              We are building our founding team. Pre-launch is the best time to join — if you care about craft and want to build something that lasts.
            </p>
            <Link
              href="/careers"
              className="inline-flex items-center gap-2 rounded-[10px] bg-cream px-6 py-[14px] text-[1rem] font-semibold text-ink tracking-[-0.01em] transition-all hover:bg-parchment hover:-translate-y-px"
            >
              See open roles <Arrow />
            </Link>
          </div>
          {/* Contact */}
          <div className="rounded-2xl rounded-l-none border-l border-cream/[0.1] bg-cream/[0.04] p-13 md:p-[52px]">
            <p className="mb-4 text-[0.6875rem] font-semibold uppercase tracking-[0.12em] text-cream/50">For partners &amp; press</p>
            <h2 className="mb-4 text-[clamp(1.75rem,2.5vw,2.25rem)] font-extrabold leading-[1.15] tracking-[-0.03em] text-cream">
              Want to talk?
            </h2>
            <p className="mb-8 text-[1rem] leading-[1.65] text-cream/75">
              Whether you are a potential partner, an investor, or reviewing us for compliance — we respond to every inquiry promptly and transparently.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-[10px] border border-cream/35 px-6 py-[14px] text-[1rem] font-medium text-cream tracking-[-0.01em] transition-all hover:border-cream/80 hover:bg-cream/[0.06]"
            >
              Get in touch <Arrow />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
