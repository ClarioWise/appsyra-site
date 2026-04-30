"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const STORAGE_KEY = "appsyra_cookie_consent";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (!stored) setVisible(true);
    } catch {
      // localStorage unavailable (SSR, private mode)
    }
  }, []);

  function accept() {
    try { localStorage.setItem(STORAGE_KEY, "accepted"); } catch {}
    setVisible(false);
  }

  function decline() {
    try { localStorage.setItem(STORAGE_KEY, "declined"); } catch {}
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-label="Cookie consent"
      className="fixed bottom-0 inset-x-0 z-50 border-t border-sand bg-cream/95 backdrop-blur-sm px-6 py-5 md:px-12"
    >
      <div className="mx-auto flex max-w-[1280px] flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-[0.875rem] leading-relaxed text-muted max-w-xl">
          We use cookies to ensure our website functions correctly and to understand how it is used.
          We do not use third-party advertising cookies.{" "}
          <Link href="/legal/cookies" className="font-medium text-ink underline underline-offset-2 hover:text-terra transition-colors">
            Cookie Policy
          </Link>
        </p>
        <div className="flex shrink-0 gap-3">
          <button
            onClick={decline}
            className="rounded-lg border border-sand px-4 py-2 text-[0.875rem] font-medium text-muted hover:border-muted transition-colors"
          >
            Decline
          </button>
          <button
            onClick={accept}
            className="rounded-lg bg-terra px-4 py-2 text-[0.875rem] font-semibold text-cream hover:bg-[#AC3317] transition-colors"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
}
