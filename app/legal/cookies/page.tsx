import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cookie Policy",
  description: "Appsyra Cookie Policy — how we use cookies and how to manage your preferences.",
};

const EFFECTIVE_DATE = "[DD Month YYYY]";
const COMPANY = "Appsyra FZE LLC";
const LEGAL_EMAIL = "legal@appsyra.com";

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
    type: "Strictly necessary",
    duration: "1 year",
    purpose: "Stores your cookie consent preference so the banner is not shown on every visit.",
    provider: "Appsyra (first-party)",
  },
  {
    name: "_vercel_analytics",
    type: "Analytics",
    duration: "Session",
    purpose: "Aggregated, anonymised analytics about Site usage. No cross-site tracking. No personal identifiers.",
    provider: "Vercel (first-party analytics)",
  },
];

export default function CookiesPage() {
  return (
    <main className="px-6 py-16 md:px-16 md:py-20">
      <div className="mx-auto max-w-[780px]">
        {/* Header */}
        <div className="mb-14">
          <span className="mb-5 inline-flex rounded-full border border-sand px-3 py-1 text-[0.6375rem] font-semibold uppercase tracking-[0.12em] text-subtle">
            Legal
          </span>
          <h1 className="mb-4 font-display text-[clamp(2rem,3.5vw,3rem)] font-extrabold leading-[1.1] tracking-[-0.035em] text-ink">
            Cookie Policy
          </h1>
          <p className="text-[0.875rem] text-subtle">Effective date: {EFFECTIVE_DATE}</p>
        </div>

        <div className="rounded-2xl bg-parchment p-6 text-[0.875rem] leading-[1.65] text-muted mb-10">
          This Cookie Policy explains how {COMPANY} (&ldquo;Appsyra&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;) uses cookies and similar technologies on our website at appsyra.com (the &ldquo;Site&rdquo;).
        </div>

        <Section title="1. What Are Cookies">
          <p>
            Cookies are small text files placed on your device when you visit a website. They allow the website to remember information about your visit, such as your preferences or consent choices. Cookies can be &ldquo;session cookies&rdquo; (deleted when you close your browser) or &ldquo;persistent cookies&rdquo; (stored for a defined period).
          </p>
          <p>
            Similar technologies include local storage and session storage, which operate in analogous ways.
          </p>
        </Section>

        <Section title="2. How We Use Cookies">
          <p>We use cookies for two purposes:</p>
          <ul className="ml-5 space-y-2 list-disc">
            <li><strong className="font-semibold text-ink">Strictly necessary:</strong> Required for the Site to function. These cookies cannot be disabled — without them, core features of the Site will not work. These do not require consent under applicable law.</li>
            <li><strong className="font-semibold text-ink">Analytics:</strong> Used to understand how visitors interact with the Site in aggregated, anonymised form. These cookies are only placed if you consent. We do not use advertising cookies or cross-site tracking.</li>
          </ul>
        </Section>

        <Section title="3. Cookies We Use">
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

        <Section title="4. Your Choices">
          <p>
            When you first visit our Site, you will be shown a cookie banner that allows you to accept or decline analytics cookies. Strictly necessary cookies cannot be declined as they are required for the Site to work.
          </p>
          <p>
            You can change your preference at any time by clearing your browser cookies and revisiting the Site, which will show the banner again.
          </p>
          <p>
            You can also control cookies through your browser settings. Most browsers allow you to block or delete cookies. Note that blocking strictly necessary cookies may affect Site functionality. For information on managing cookies in your browser, refer to your browser&apos;s documentation.
          </p>
        </Section>

        <Section title="5. Third-Party Cookies">
          <p>
            We do not use third-party advertising cookies. Any analytics data we collect is processed with privacy by design — no personal identifiers are sent to third parties, and we do not participate in cross-site tracking networks.
          </p>
        </Section>

        <Section title="6. Changes to This Policy">
          <p>
            We may update this Cookie Policy from time to time. Changes will be reflected by updating the effective date above.
          </p>
        </Section>

        <Section title="7. Contact">
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
