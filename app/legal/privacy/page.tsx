import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Appsyra Privacy Policy — how we collect, use, and protect your personal data.",
};

const EFFECTIVE_DATE = "[DD Month YYYY]";
const COMPANY = "Appsyra FZE LLC";
const COMPANY_ADDRESS = "[BUILDING_CODE], Ajman Media City, Ajman Free Zone, Ajman, UAE";
const LEGAL_EMAIL = "legal@appsyra.com";

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
        {/* Header */}
        <div className="mb-14">
          <span className="mb-5 inline-flex rounded-full border border-sand px-3 py-1 text-[0.6375rem] font-semibold uppercase tracking-[0.12em] text-subtle">
            Legal
          </span>
          <h1 className="mb-4 font-display text-[clamp(2rem,3.5vw,3rem)] font-extrabold leading-[1.1] tracking-[-0.035em] text-ink">
            Privacy Policy
          </h1>
          <p className="text-[0.875rem] text-subtle">Effective date: {EFFECTIVE_DATE}</p>
        </div>

        <div className="rounded-2xl bg-parchment p-6 text-[0.875rem] leading-[1.65] text-muted mb-10">
          This Privacy Policy explains how {COMPANY} (&ldquo;Appsyra&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;) collects, uses, stores, and protects personal data when you visit our website at appsyra.com (the &ldquo;Site&rdquo;). Please read it carefully.
        </div>

        <Section title="1. Who We Are">
          <p>
            {COMPANY} is a company registered in the Ajman Free Zone, UAE. Our registered address is {COMPANY_ADDRESS}. For data protection matters, you can contact us at <a href={`mailto:${LEGAL_EMAIL}`} className="font-medium text-cobalt hover:text-terra transition-colors">{LEGAL_EMAIL}</a>.
          </p>
          <p>
            We are the data controller for personal data collected through this Site.
          </p>
        </Section>

        <Section title="2. What Data We Collect">
          <p>We collect the following categories of personal data:</p>
          <ul className="ml-5 space-y-2 list-disc">
            <li><strong className="font-semibold text-ink">Contact data:</strong> name and email address when you contact us via email.</li>
            <li><strong className="font-semibold text-ink">Usage data:</strong> pages visited, time spent, referring URL, browser type, and device type — collected through privacy-respecting analytics (no cross-site tracking).</li>
            <li><strong className="font-semibold text-ink">Cookie data:</strong> your cookie consent preference, stored locally in your browser.</li>
          </ul>
          <p>We do not collect sensitive personal data (such as health, financial, or biometric data) through this Site.</p>
        </Section>

        <Section title="3. How We Use Your Data">
          <p>We use the data we collect for the following purposes:</p>
          <ul className="ml-5 space-y-2 list-disc">
            <li>To respond to inquiries you send us by email (lawful basis: legitimate interest / contract performance).</li>
            <li>To understand how our Site is used and to improve it (lawful basis: legitimate interest).</li>
            <li>To comply with legal obligations, including regulatory and compliance requests (lawful basis: legal obligation).</li>
          </ul>
          <p>We do not use your data for automated decision-making or profiling.</p>
        </Section>

        <Section title="4. Cookies">
          <p>
            This Site uses strictly necessary cookies to function correctly. If you consent, we also use analytics cookies to understand Site usage. We do not use advertising or third-party tracking cookies.
          </p>
          <p>
            You can manage your cookie preferences at any time through our cookie banner or by clearing your browser cookies. See our <a href="/legal/cookies" className="font-medium text-cobalt hover:text-terra transition-colors">Cookie Policy</a> for full details.
          </p>
        </Section>

        <Section title="5. Data Sharing">
          <p>We do not sell, rent, or trade your personal data to third parties. We may share data with:</p>
          <ul className="ml-5 space-y-2 list-disc">
            <li><strong className="font-semibold text-ink">Service providers:</strong> companies that help us operate our Site (such as hosting providers), subject to data processing agreements.</li>
            <li><strong className="font-semibold text-ink">Legal authorities:</strong> where required by applicable law, court order, or regulatory request.</li>
          </ul>
          <p>Any third-party processors are required to handle your data in accordance with applicable data protection law.</p>
        </Section>

        <Section title="6. International Data Transfers">
          <p>
            Our Site is hosted and operated from the UAE. If you are located in the European Economic Area (EEA) or another jurisdiction with data transfer restrictions, please be aware that your data may be processed outside your country of residence. We take appropriate measures to ensure adequate protection of your data in such cases.
          </p>
        </Section>

        <Section title="7. Data Retention">
          <p>
            We retain personal data only as long as necessary for the purpose for which it was collected, or as required by law. Email correspondence is retained for a maximum of 3 years from the date of last contact, unless a longer period is required for legal or compliance purposes.
          </p>
        </Section>

        <Section title="8. Your Rights">
          <p>Depending on your jurisdiction, you may have the following rights regarding your personal data:</p>
          <ul className="ml-5 space-y-2 list-disc">
            <li>Right to access — obtain a copy of the personal data we hold about you.</li>
            <li>Right to rectification — correct inaccurate or incomplete data.</li>
            <li>Right to erasure — request deletion of your data in certain circumstances.</li>
            <li>Right to restrict processing — limit how we process your data.</li>
            <li>Right to data portability — receive your data in a structured, machine-readable format.</li>
            <li>Right to object — object to processing based on legitimate interest.</li>
            <li>Right to withdraw consent — where processing is based on consent.</li>
          </ul>
          <p>
            To exercise any of these rights, contact us at <a href={`mailto:${LEGAL_EMAIL}`} className="font-medium text-cobalt hover:text-terra transition-colors">{LEGAL_EMAIL}</a>. We will respond within 30 days.
          </p>
        </Section>

        <Section title="9. Security">
          <p>
            We take appropriate technical and organisational measures to protect your personal data against unauthorised access, disclosure, alteration, or destruction. However, no transmission of data over the internet is entirely secure, and we cannot guarantee the security of data you transmit to us.
          </p>
        </Section>

        <Section title="10. Children">
          <p>
            This Site is not directed at children under the age of 16. We do not knowingly collect personal data from children. If you believe we have inadvertently collected data from a child, please contact us at <a href={`mailto:${LEGAL_EMAIL}`} className="font-medium text-cobalt hover:text-terra transition-colors">{LEGAL_EMAIL}</a> and we will delete it promptly.
          </p>
        </Section>

        <Section title="11. Changes to This Policy">
          <p>
            We may update this Privacy Policy from time to time. When we do, we will update the effective date above. Material changes will be communicated through appropriate channels. Your continued use of the Site after changes constitutes acceptance of the updated policy.
          </p>
        </Section>

        <Section title="12. Contact">
          <p>
            For any questions about this Privacy Policy or our data practices, contact us at:
          </p>
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
