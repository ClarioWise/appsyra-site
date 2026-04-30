import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Appsyra Terms of Service — the terms governing your use of our website.",
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

export default function TermsPage() {
  return (
    <main className="px-6 py-16 md:px-16 md:py-20">
      <div className="mx-auto max-w-[780px]">
        {/* Header */}
        <div className="mb-14">
          <span className="mb-5 inline-flex rounded-full border border-sand px-3 py-1 text-[0.6375rem] font-semibold uppercase tracking-[0.12em] text-subtle">
            Legal
          </span>
          <h1 className="mb-4 font-display text-[clamp(2rem,3.5vw,3rem)] font-extrabold leading-[1.1] tracking-[-0.035em] text-ink">
            Terms of Service
          </h1>
          <p className="text-[0.875rem] text-subtle">Effective date: {EFFECTIVE_DATE}</p>
        </div>

        <div className="rounded-2xl bg-parchment p-6 text-[0.875rem] leading-[1.65] text-muted mb-10">
          These Terms of Service (&ldquo;Terms&rdquo;) govern your access to and use of the website located at appsyra.com (the &ldquo;Site&rdquo;), operated by {COMPANY} (&ldquo;Appsyra&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;). By accessing or using the Site, you agree to be bound by these Terms. If you do not agree, please do not use the Site.
        </div>

        <Section title="1. About Us">
          <p>
            {COMPANY} is a company registered in the Ajman Free Zone, UAE (address: {COMPANY_ADDRESS}). We are a pre-launch mobile lifestyle app company. The Site is our corporate website, intended to provide information about our company and activities.
          </p>
        </Section>

        <Section title="2. Use of the Site">
          <p>
            You may use the Site for lawful purposes only. You agree not to:
          </p>
          <ul className="ml-5 space-y-2 list-disc">
            <li>Use the Site in any way that violates applicable local, national, or international laws or regulations.</li>
            <li>Transmit any unsolicited or unauthorised advertising or promotional material.</li>
            <li>Attempt to gain unauthorised access to any part of the Site or its related systems.</li>
            <li>Use the Site to transmit harmful, offensive, or misleading content.</li>
            <li>Engage in any conduct that could damage, disable, overburden, or impair the Site.</li>
          </ul>
        </Section>

        <Section title="3. Intellectual Property">
          <p>
            All content on this Site — including text, graphics, logos, and code — is the property of {COMPANY} or its content suppliers and is protected by applicable intellectual property laws.
          </p>
          <p>
            You may not reproduce, distribute, modify, or create derivative works of any content from this Site without our prior written consent.
          </p>
        </Section>

        <Section title="4. No Products Currently Available">
          <p>
            Appsyra is a pre-launch company. No mobile applications or other products are currently available for download or purchase. References to future products on this Site are aspirational and describe planned, not existing, functionality. We make no representations or warranties regarding the availability, timing, or features of any future products.
          </p>
        </Section>

        <Section title="5. Disclaimer of Warranties">
          <p>
            The Site is provided &ldquo;as is&rdquo; and &ldquo;as available&rdquo; without warranties of any kind, either express or implied, including but not limited to implied warranties of merchantability, fitness for a particular purpose, or non-infringement.
          </p>
          <p>
            We do not warrant that the Site will be uninterrupted, error-free, or free of harmful components. We reserve the right to modify, suspend, or discontinue the Site at any time without notice.
          </p>
        </Section>

        <Section title="6. Limitation of Liability">
          <p>
            To the fullest extent permitted by applicable law, {COMPANY} and its officers, directors, employees, and agents shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising out of or related to your use of the Site.
          </p>
          <p>
            Our total liability to you for any claim arising out of or related to these Terms or the Site shall not exceed the amount you paid to us in the twelve months preceding the claim (which, for a free website, will be zero).
          </p>
        </Section>

        <Section title="7. Third-Party Links">
          <p>
            The Site may contain links to third-party websites. These links are provided for convenience only. We have no control over the content of those sites and accept no responsibility for them or for any loss or damage that may arise from your use of them.
          </p>
        </Section>

        <Section title="8. Privacy">
          <p>
            Your use of the Site is also governed by our <a href="/legal/privacy" className="font-medium text-cobalt hover:text-terra transition-colors">Privacy Policy</a>, which is incorporated into these Terms by reference.
          </p>
        </Section>

        <Section title="9. Governing Law">
          <p>
            These Terms shall be governed by and construed in accordance with the laws of the UAE, without regard to its conflict of law provisions. Any disputes arising under these Terms shall be subject to the exclusive jurisdiction of the courts of the UAE.
          </p>
        </Section>

        <Section title="10. Changes to These Terms">
          <p>
            We may revise these Terms from time to time. The most current version will always be posted on this page with the effective date. Your continued use of the Site after changes constitutes acceptance of the revised Terms.
          </p>
        </Section>

        <Section title="11. Contact">
          <p>If you have questions about these Terms, contact us at:</p>
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
