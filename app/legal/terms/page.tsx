import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Appsyra Terms of Service — the terms governing your use of our website.",
};

const EFFECTIVE_DATE = "23 April 2026";
const COMPANY = "Appsyra F.Z.E";
const SITE_URL = "https://appsyra.com";
const COMPANY_ADDRESS = "B.C. 1307467, Ajman Free Zone C1 Building, Ajman Free Zone, Ajman, UAE";
const SUPPORT_EMAIL = "support@appsyra.dev";
const LEGAL_EMAIL = "legal@appsyra.dev";

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
        <div className="mb-14">
          <span className="mb-5 inline-flex rounded-full border border-sand px-3 py-1 text-[0.6375rem] font-semibold uppercase tracking-[0.12em] text-subtle">
            Legal
          </span>
          <h1 className="mb-4 font-display text-[clamp(2rem,3.5vw,3rem)] font-extrabold leading-[1.1] tracking-[-0.035em] text-ink">
            Terms of Service
          </h1>
          <p className="text-[0.875rem] text-subtle">Last updated: {EFFECTIVE_DATE}</p>
        </div>

        <div className="rounded-2xl bg-parchment p-6 text-[0.875rem] leading-[1.65] text-muted mb-10">
          Welcome to Appsyra. This legally binding agreement exists between {COMPANY} (registered at {COMPANY_ADDRESS}) and all individuals accessing the Site at {SITE_URL}. By accessing the Site, you agree to be bound by these Terms and our <a href="/legal/privacy" className="font-medium text-cobalt hover:text-terra transition-colors">Privacy Policy</a>. If you do not agree, please do not use the Site. The company reserves the right to modify these Terms at any time — changes are effective upon posting, and continued use constitutes acceptance.
        </div>

        <Section title="Use of the Site">
          <p>Users must be at least 16 years old. The Site is intended for lawful purposes only.</p>
          <ul className="ml-5 space-y-2 list-disc">
            <li>Use the Site lawfully and in compliance with all applicable laws and regulations.</li>
            <li>Do not engage in activities that disrupt or impair Site functionality.</li>
            <li>Do not attempt to gain unauthorised access to any part of the Site or its systems.</li>
            <li>Do not transmit unsolicited advertising, harmful content, or misleading information.</li>
          </ul>
          <p>
            The company reserves the right to modify, suspend, or terminate access to the Site without notice.
          </p>
        </Section>

        <Section title="Intellectual Property Rights">
          <p>
            The Site and all its contents — including text, graphics, logos, images, and code — are owned by {COMPANY} or its licensors and are protected by applicable intellectual property laws. Users may access the Site for personal, non-commercial purposes only.
          </p>
          <p>
            Any other use — including reproduction, distribution, or creation of derivative works — requires prior written consent from {COMPANY}.
          </p>
        </Section>

        <Section title="Submissions">
          <p>
            Questions, comments, suggestions, or other information submitted to the company become its non-confidential property. The company may use submissions freely without acknowledgment or compensation. Users warrant that submissions are original and do not infringe third-party rights.
          </p>
        </Section>

        <Section title="Third-Party Websites and Content">
          <p>
            The Site may contain links to external websites. Users should review the applicable terms and privacy practices of those sites. The company assumes no responsibility for third-party content, products, or services, and users hold the company harmless from any harm arising from their use.
          </p>
        </Section>

        <Section title="Disclaimer of Warranties">
          <p>
            The Site is provided &ldquo;as is&rdquo; and &ldquo;as available&rdquo; without warranties of any kind, either express or implied, including but not limited to warranties of merchantability, fitness for a particular purpose, or non-infringement.
          </p>
          <p>
            The company makes no guarantees regarding uninterrupted service, error-free operation, or freedom from harmful components.
          </p>
        </Section>

        <Section title="Limitation of Liability">
          <p>
            To the fullest extent permitted by applicable law, {COMPANY} and its officers, directors, employees, and agents shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising out of or related to your use of the Site.
          </p>
        </Section>

        <Section title="Modifications and Interruptions">
          <p>
            The company reserves the right to change Site contents, modify, or discontinue services without notice. The company cannot guarantee continuous availability due to maintenance or technical issues and assumes no liability for interruptions or discontinuances.
          </p>
        </Section>

        <Section title="Governing Law">
          <p>
            <strong className="font-semibold text-ink">For EU/UK residents:</strong> English law governs these Terms (excluding conflict-of-law rules). Disputes require 30 days of informal negotiation before escalation. Unresolved disputes are referred to the London Court of International Arbitration with a single arbitrator.
          </p>
          <p>
            <strong className="font-semibold text-ink">For US and other residents:</strong> California law governs these Terms. After 30 days of negotiation, disputes are resolved through binding arbitration under the American Arbitration Association in California. Both parties waive the right to participate in class action lawsuits.
          </p>
        </Section>

        <Section title="Changes to Terms">
          <p>
            The company reserves the right to modify these Terms at any time. Changes become effective immediately upon posting. Continued use of the Site after changes constitutes acceptance of the revised Terms.
          </p>
        </Section>

        <Section title="Contact">
          <p>For questions about these Terms, contact us at:</p>
          <address className="not-italic rounded-xl border border-sand bg-parchment p-5 text-[0.875rem] leading-[1.8] text-muted">
            <strong className="font-semibold text-ink">{COMPANY}</strong><br />
            {COMPANY_ADDRESS}<br />
            General: <a href={`mailto:${SUPPORT_EMAIL}`} className="font-medium text-cobalt hover:text-terra transition-colors">{SUPPORT_EMAIL}</a><br />
            Legal: <a href={`mailto:${LEGAL_EMAIL}`} className="font-medium text-cobalt hover:text-terra transition-colors">{LEGAL_EMAIL}</a>
          </address>
        </Section>
      </div>
    </main>
  );
}
