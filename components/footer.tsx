import Link from "next/link";
import Logo from "./logo";

const COMPANY_LINKS = [
  { href: "/about",      label: "About" },
  { href: "/what-we-do", label: "What we do" },
  { href: "/careers",    label: "Careers" },
  { href: "/contact",    label: "Contact" },
];

const LEGAL_LINKS = [
  { href: "/legal/privacy", label: "Privacy Policy" },
  { href: "/legal/terms",   label: "Terms of Service" },
  { href: "/legal/cookies", label: "Cookie Policy" },
];

export default function Footer() {
  return (
    <footer className="bg-ink">
      {/* Top section */}
      <div className="mx-auto max-w-[1280px] border-b border-[#2E2520] px-6 md:px-12 py-16">
        <div className="flex flex-col gap-12 md:flex-row md:justify-between md:items-start">
          {/* Logo + tagline */}
          <div className="shrink-0">
            <Link href="/" aria-label="Appsyra home" className="mb-4 inline-block">
              <Logo height={32} scheme="dark" />
            </Link>
            <p className="mt-4 max-w-xs text-[0.875rem] leading-relaxed text-[#5A4A42]">
              Building mobile lifestyle apps for global audiences. Pre-launch.
            </p>
          </div>

          {/* Nav columns */}
          <div className="flex gap-12 md:gap-16">
            <div className="flex flex-col gap-3">
              <p className="mb-1 text-[0.6875rem] font-semibold uppercase tracking-[0.1em] text-[#5A4A42]">
                Company
              </p>
              {COMPANY_LINKS.map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  className="text-[0.9rem] text-subtle hover:text-cream transition-colors duration-100"
                >
                  {label}
                </Link>
              ))}
            </div>
            <div className="flex flex-col gap-3">
              <p className="mb-1 text-[0.6875rem] font-semibold uppercase tracking-[0.1em] text-[#5A4A42]">
                Legal
              </p>
              {LEGAL_LINKS.map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  className="text-[0.9rem] text-subtle hover:text-cream transition-colors duration-100"
                >
                  {label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom / legal block */}
      <div className="mx-auto max-w-[1280px] px-6 md:px-12 py-8 flex flex-col gap-3 md:flex-row md:justify-between md:items-start flex-wrap">
        <div className="flex flex-col gap-1.5">
          <p className="text-[0.8125rem] leading-relaxed text-[#5A4A42]">
            <strong className="font-semibold text-[#7A6A62]">Appsyra FZE LLC</strong>
            {" · "}[BUILDING_CODE], Ajman Media City, Ajman Free Zone, UAE
          </p>
          <p className="text-[0.8125rem] text-[#4A3C34]">
            License No.{" "}[LICENSE_NUMBER]
            {" · "}Registered [DD.MM.YYYY]
          </p>
          <p className="text-[0.8125rem] text-[#4A3C34]">
            <a
              href="mailto:legal@appsyra.com"
              className="text-[#5A4A42] hover:text-subtle transition-colors"
            >
              legal@appsyra.com
            </a>
            {" · "}
            <a
              href="mailto:support@appsyra.com"
              className="text-[#5A4A42] hover:text-subtle transition-colors"
            >
              support@appsyra.com
            </a>
          </p>
        </div>
        <p className="text-[0.8125rem] text-[#4A3C34] md:text-right">
          © {new Date().getFullYear()} Appsyra FZE LLC. All rights reserved.
          <br className="hidden md:block" />
          {" "}All products pre-launch.
        </p>
      </div>
    </footer>
  );
}
