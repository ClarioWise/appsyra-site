import Link from "next/link";

const LEGAL_NAV = [
  { href: "/legal/privacy", label: "Privacy Policy" },
  { href: "/legal/terms",   label: "Terms of Service" },
  { href: "/legal/cookies", label: "Cookie Policy" },
];

export default function LegalLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-cream">
      {/* Legal sub-nav */}
      <div className="border-b border-sand bg-cream pt-[68px]">
        <div className="mx-auto max-w-[1080px] flex gap-1 overflow-x-auto px-6 py-4 md:px-12">
          {LEGAL_NAV.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="shrink-0 rounded-full border border-sand px-4 py-1.5 text-[0.8125rem] font-medium text-muted hover:border-ink hover:text-ink transition-colors"
            >
              {label}
            </Link>
          ))}
        </div>
      </div>
      {children}
    </div>
  );
}
