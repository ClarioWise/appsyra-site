import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cookie Policy",
  description: "Appsyra Cookie Policy — how we use cookies and how to manage your preferences.",
};

const EFFECTIVE_DATE = "23 April 2026";
const COMPANY = "Appsyra F.Z.E";
const LEGAL_EMAIL = "legal@appsyra.dev";

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="border-t border-sand py-10">
      <h2 className="mb-5 font-display text-[1.25rem] font-bold tracking-[-0.02em] text-ink">{title}</h2>
      <div className="space-y-4 text-[0.9375rem] leading-[1.75] text-muted">{children}</div>
    </section>
  );
}

const COOKIE_TABLE = [
  {
    name: "appsyra_cookie_consent",
    type: "Essential",
    duration: "1 year",
    purpose: "Stores your cookie consent preference so the banner is not shown on every visit.",
    provider: "Appsyra (first-party)",
  },
  {
    name: "_ga, _ga_*",
    type: "Performance / Analytics",
    duration: "2 years",
    purpose: "Tracks Site usage in aggregated, anonymised form to help us understand how visitors interact with the Site.",
    provider: "Google Analytics",
  },
];

export default function CookiesPage() {
  return (
    <main className="px-6 py-16 md:px-16 md:py-20">
      <div className="mx-auto max-w-[780px]">
        <div className="mb-14">
          <span className="mb-5 inline-flex rounded-full border border-sand px-3 py-1 text-[0.6375rem] font-semibold uppercase tracking-[0.12em] text-subtle">
            Legal
          </span>
          <h1 className="mb-4 font-display text-[clamp(2rem,3.5vw,3rem)] font-extrabold leading-[1.1] tracking-[-0.035em] text-ink">
            Cookie Policy
          </h1>
          <p className="text-[0.875rem] text-subtle">Last updated: {EFFECTIVE_DATE}</p>
        </div>

        <div className="rounded-2xl bg-parchment p-6 text-[0.875rem] leading-[1.65] text-muted mb-10">
          This Cookie Policy explains how {COMPANY} (&ldquo;Appsyra&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;) uses cookies and similar tracking technologies on our website at appsyra.com (the &ldquo;Site&rdquo;).
        </div>

        <Section title="What Are Cookies">
          <p>
            Cookies are small data files placed on your computer or mobile device when you visit a website. They allow the Site to remember information about your visit — such as your preferences or consent choices. Cookies can be &ldquo;session cookies&rdquo; (deleted when you close your browser) or &ldquo;persistent cookies&rdquo; (stored for a defined period).
          </p>
          <p>
            We distinguish between first-party cookies (set directly by Appsyra) and third-party cookies (set by other parties for features such as analytics). Similar technologies include local storage and session storage, which operate in analogous ways.
          </p>
        </Section>

        <Section title="Cookie Types We Use">
          <ul className="ml-5 space-y-3 list-disc">
            <li>
              <strong className="font-semibold text-ink">Essential cookies</strong> — required for the Site to function correctly. These cannot be disabled. They do not require consent under applicable law.
            </li>
            <li>
              <strong className="font-semibold text-ink">Performance / Analytics cookies</strong> — used to understand how visitors interact with the Site in aggregated form. These are only placed if you consent. We use Google Analytics (<span className="font-mono text-[0.8125rem]">_ga</span>) to track usage over a 2-year period.
            </li>
          </ul>
          <p>We do not use advertising cookies or participate in cross-site tracking networks.</p>
        </Section>

        <Section title="Cookies We Use">
          <div className="overflow-x-auto rounded-xl border border-sand">
            <table className="w-full text-[0.8125rem]">
              <thead>
                <tr className="border-b border-sand bg-parchment">
                  <th className="px-4 py-3 text-left font-semibold uppercase tracking-[0.08em] text-subtle">Cookie</th>
                  <th className="px-4 py-3 text-left font-semibold uppercase tracking-[0.08em] text-subtle">Type</th>
                  <th className="px-4 py-3 text-left font-semibold uppercase tracking-[0.08em] text-subtle">Duration</th>
                  <th className="px-4 py-3 text-left font-semibold uppercase tracking-[0.08em] text-subtle">Purpose</th>
                </tr>
              </thead>
              <tbody>
                {COOKIE_TABLE.map(({ name, type, duration, purpose, provider }) => (
                  <tr key={name} className="border-b border-sand last:border-b-0">
                    <td className="px-4 py-4 font-mono text-[0.75rem] text-ink align-top">{name}</td>
                    <td className="px-4 py-4 text-ink align-top whitespace-nowrap">{type}</td>
                    <td className="px-4 py-4 text-muted align-top whitespace-nowrap">{duration}</td>
                    <td className="px-4 py-4 text-muted align-top">
                      {purpose}<br />
                      <span className="text-subtle">{provider}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Section>

        <Section title="User Control">
          <p>
            When you first visit the Site, a cookie banner allows you to accept or decline analytics cookies. Essential cookies cannot be declined as they are required for the Site to operate.
          </p>
          <p>
            You can manage cookies through your browser settings — most browsers allow you to block or delete cookies. Note that blocking essential cookies may affect Site functionality. You can also opt out of targeted advertising via the <a href="https://optout.aboutads.info/" className="font-medium text-cobalt hover:text-terra transition-colors" target="_blank" rel="noopener noreferrer">Digital Advertising Alliance</a> or the <a href="https://www.youronlinechoices.eu/" className="font-medium text-cobalt hover:text-terra transition-colors" target="_blank" rel="noopener noreferrer">European Interactive Digital Advertising Alliance</a>.
          </p>
          <p>
            To reset your cookie preference, clear your browser cookies and revisit the Site — the banner will reappear.
          </p>
        </Section>

        <Section title="Additional Tracking Technologies">
          <p>
            In addition to cookies, we may use web beacons and local storage technologies for analytics and Site functionality purposes. These are subject to the same consent controls described above.
          </p>
        </Section>

        <Section title="Changes to This Policy">
          <p>
            We may update this Cookie Policy from time to time. Changes will be reflected by updating the date at the top of this page. We encourage you to review this policy periodically.
          </p>
        </Section>

        <Section title="Contact">
          <p>For questions about our use of cookies, contact us at:</p>
          <address className="not-italic rounded-xl border border-sand bg-parchment p-5 text-[0.875rem] leading-[1.8] text-muted">
            <strong className="font-semibold text-ink">{COMPANY}</strong><br />
            <a href={`mailto:${LEGAL_EMAIL}`} className="font-medium text-cobalt hover:text-terra transition-colors">{LEGAL_EMAIL}</a>
          </address>
        </Section>
      </div>
    </main>
  );
}
