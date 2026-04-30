"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "./logo";

const LINKS = [
  { href: "/about",      label: "About" },
  { href: "/what-we-do", label: "What we do" },
  { href: "/careers",    label: "Careers" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
    document.body.style.overflow = "";
  }, [pathname]);

  function toggleMenu() {
    const next = !menuOpen;
    setMenuOpen(next);
    document.body.style.overflow = next ? "hidden" : "";
  }

  return (
    <>
      <nav
        aria-label="Main navigation"
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-200 ${
          scrolled ? "bg-cream/95 backdrop-blur-sm shadow-[0_1px_0_#E4D8CB]" : "bg-cream/85 backdrop-blur-sm"
        }`}
      >
        <div className="mx-auto flex h-[68px] max-w-[1280px] items-center justify-between px-6 md:px-12">
          {/* Logo */}
          <Link href="/" aria-label="Appsyra home" className="shrink-0">
            <Logo height={28} />
          </Link>

          {/* Desktop links */}
          <div className="hidden items-center gap-8 md:flex">
            {LINKS.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={`text-[0.9375rem] font-medium tracking-[-0.01em] transition-colors duration-100 ${
                  pathname === href || pathname.startsWith(href + "/")
                    ? "text-terra font-semibold"
                    : "text-ink hover:text-terra"
                }`}
              >
                {label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="rounded-[10px] bg-terra px-[20px] py-[10px] text-[0.9rem] font-semibold text-cream tracking-[-0.01em] transition-all duration-100 hover:bg-[#AC3317] hover:-translate-y-px"
            >
              Get in touch
            </Link>
          </div>

          {/* Hamburger */}
          <button
            className="flex md:hidden items-center justify-center p-1"
            onClick={toggleMenu}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
          >
            <span className="sr-only">{menuOpen ? "Close" : "Menu"}</span>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              {menuOpen ? (
                <>
                  <line x1="4" y1="4" x2="20" y2="20" stroke="#1C1714" strokeWidth="1.8" strokeLinecap="round" />
                  <line x1="20" y1="4" x2="4"  y2="20" stroke="#1C1714" strokeWidth="1.8" strokeLinecap="round" />
                </>
              ) : (
                <>
                  <line x1="3" y1="7"  x2="21" y2="7"  stroke="#1C1714" strokeWidth="1.8" strokeLinecap="round" />
                  <line x1="3" y1="12" x2="21" y2="12" stroke="#1C1714" strokeWidth="1.8" strokeLinecap="round" />
                  <line x1="3" y1="17" x2="21" y2="17" stroke="#1C1714" strokeWidth="1.8" strokeLinecap="round" />
                </>
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile menu overlay */}
      {menuOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Navigation menu"
          className="fixed inset-0 z-40 flex flex-col bg-cream px-10 pt-[100px] pb-10 gap-9 md:hidden"
        >
          {LINKS.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="border-b border-sand pb-6 font-display text-[2rem] font-bold tracking-[-0.025em] text-ink hover:text-terra transition-colors"
            >
              {label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="mt-auto rounded-[10px] bg-terra px-8 py-[18px] text-[1.1rem] font-semibold text-cream text-center hover:bg-[#AC3317] transition-colors"
          >
            Get in touch →
          </Link>
        </div>
      )}
    </>
  );
}
