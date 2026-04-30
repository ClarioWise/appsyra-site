import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Appsyra Privacy Policy — how we collect, use, and protect your personal data.",
};

const EFFECTIVE_DATE = "23 April 2026";
const COMPANY = "Appsyra F.Z.E";
const SITE = "https://appsyra.com";
const COMPANY_ADDRESS = "B.C. 1307467, Ajman Free Zone C1 Building, Ajman Free Zone, Ajman, UAE";
const LEGAL_EMAIL = "legal@appsyra.dev";

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="border-t border-sand py-10">
      <h2 className="mb-5 font-display text-[1.25rem] font-bold tracking-[-0.02em] text-ink">{title}</h2>
      <div className="space-y-4 text-[0.9375rem] leading-[1.75] text-muted">{children}</div>
    </section>
  );
}

export default function PrivacyPage() {
  return (
    <main className="px-6 py-16 md:px-16 md:py-20">
      <div className="mx-auto max-w-[780px]">
        <div className="mb-14">
          <span className="mb-5 inline-flex rounded-full border border-sand px-3 py-1 text-[0.6375rem] font-semibold uppercase tracking-[0.12em] text-subtle">
            Legal
          </span>
          <h1 className="mb-4 font-display text-[clamp(2rem,3.5vw,3rem)] font-extrabold leading-[1.1] tracking-[-0.035em] text-ink">
            Privacy Policy
          </h1>
          <p className="text-[0.875rem] text-subtle">Last updated: {EFFECTIVE_DATE}</p>
        </div>

        <div className="rounded-2xl bg-parchment p-6 text-[0.875rem] leading-[1.65] text-muted mb-10">
          {COMPANY}, registered at {COMPANY_ADDRESS}, operates the Site at {SITE}. This Privacy Policy explains how the company collects, uses, discloses, and safeguards personal information from Site visitors. Questions may be directed to <a href={`mailto:${LEGAL_EMAIL}`} className="font-medium text-cobalt hover:text-terra transition-colors">{LEGAL_EMAIL}</a>.
        </div>

        <Section title="Information Collection and Use">
          <p>
            When visiting the Site, personal information may be processed based on your interactions, choices, and feature usage. The company does not process sensitive personal information. Processing occurs to provide services, improve the Site, communicate with users, prevent fraud, and comply with law — only with a valid legal reason.
          </p>
          <p>
            Email inquiries are gathered, including names, email addresses, and message content, used solely for responding and providing assistance. Correspondence records are maintained for administrative, legal, and business purposes. Personal information is not used for marketing without explicit consent.
          </p>
          <p>
            We may also collect information about how you interact with the Site, including your IP address, browser type, pages visited, and other usage data through cookies and tracking technologies. This information improves Site functionality and personalises the experience. See our <a href="/legal/cookies" className="font-medium text-cobalt hover:text-terra transition-colors">Cookie Policy</a> for details.
          </p>
          <p>
            The company does not knowingly solicit data from children under 16. Discovery of collected data from children under 16 will prompt deletion. Parents aware of such collection should contact <a href={`mailto:${LEGAL_EMAIL}`} className="font-medium text-cobalt hover:text-terra transition-colors">{LEGAL_EMAIL}</a>.
          </p>
        </Section>

        <Section title="Disclosure of Information">
          <p>
            Personal information may be disclosed to third parties including service providers, affiliates, successors, and others necessary for Site operation and service provision. Disclosure also occurs when legally required or to protect rights, property, and safety.
          </p>
        </Section>

        <Section title="Data Security">
          <p>
            Appropriate technical and organisational security measures protect personal information. However, transmission of personal information to and from the Site is at your own risk. Access should occur only within secure environments.
          </p>
        </Section>

        <Section title="Data Transfer">
          <p>
            Data processing may occur outside your country of residence. We use appropriate safeguards — such as standard contractual clauses — where required. Continued use of the Site constitutes acceptance of such transfers.
          </p>
        </Section>

        <Section title="Retention">
          <p>
            Personal information is retained as long as necessary for the purposes for which it was collected, unless a longer retention period is required by law.
          </p>
        </Section>

        <Section title="Your Rights">
          <p>Geographic location determines your applicable rights, which may include:</p>
          <ul className="ml-5 space-y-2 list-disc">
            <li>Right to access — obtain a copy of the personal data we hold about you.</li>
            <li>Right to rectification — correct inaccurate or incomplete data.</li>
            <li>Right to erasure — request deletion of your data in certain circumstances.</li>
            <li>Right to restrict processing — limit how we process your data.</li>
            <li>Right to data portability — receive your data in a structured, machine-readable format.</li>
            <li>Right to object — object to processing based on legitimate interest.</li>
          </ul>
          <p>
            EEA and UK residents may request access, rectification, erasure, restriction, and data portability. To exercise any right, contact us at <a href={`mailto:${LEGAL_EMAIL}`} className="font-medium text-cobalt hover:text-terra transition-colors">{LEGAL_EMAIL}</a>. We will handle requests per applicable data protection laws.
          </p>
          <p>
            Where processing is based on consent, you may withdraw it at any time. This does not affect the lawfulness of processing carried out prior to withdrawal.
          </p>
          <p>
            You may unsubscribe from any marketing communications via email links or by contacting us directly. Service-related messages may continue regardless.
          </p>
        </Section>

        <Section title="California and Virginia Privacy Rights">
          <p>Residents of California and Virginia have the right to:</p>
          <ul className="ml-5 space-y-2 list-disc">
            <li>Know what personal information is collected and processed.</li>
            <li>Know if information is sold, shared, or disclosed and to whom.</li>
            <li>Request correction of inaccurate information.</li>
            <li>Opt out of sales or sharing of personal information.</li>
            <li>Request deletion of personal information (subject to exceptions).</li>
            <li>Access information in a portable format (up to twice per 12 months).</li>
          </ul>
          <p>
            To exercise these rights, email <a href={`mailto:${LEGAL_EMAIL}`} className="font-medium text-cobalt hover:text-terra transition-colors">{LEGAL_EMAIL}</a> with &ldquo;Your California Privacy Rights&rdquo; or &ldquo;Your Virginia Privacy Rights&rdquo; in the subject line, including your name and address. Only complete, properly labelled requests will be processed.
          </p>
        </Section>

        <Section title="Policy Changes">
          <p>
            The company reserves the right to update this policy at any time. Changes become effective upon posting. Continued use of the Site after changes constitutes acceptance of the updated policy.
          </p>
        </Section>

        <Section title="Contact">
          <p>Questions about this Privacy Policy or our data practices should be directed to:</p>
          <address className="not-italic rounded-xl border border-sand bg-parchment p-5 text-[0.875rem] leading-[1.8] text-muted">
            <strong className="font-semibold text-ink">{COMPANY}</strong><br />
            {COMPANY_ADDRESS}<br />
            <a href={`mailto:${LEGAL_EMAIL}`} className="font-medium text-cobalt hover:text-terra transition-colors">{LEGAL_EMAIL}</a>
          </address>
        </Section>
      </div>
    </main>
  );
}
