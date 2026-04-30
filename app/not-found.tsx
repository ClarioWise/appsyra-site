import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center px-6 text-center">
      <p className="mb-4 font-display text-[4rem] font-extrabold tracking-[-0.05em] text-sand">404</p>
      <h1 className="mb-4 font-display text-[1.5rem] font-bold tracking-[-0.03em] text-ink">Page not found</h1>
      <p className="mb-8 max-w-[320px] text-[1rem] leading-relaxed text-muted">
        The page you are looking for doesn&apos;t exist or has been moved.
      </p>
      <Link
        href="/"
        className="inline-flex items-center gap-2 rounded-[10px] bg-terra px-6 py-[14px] text-[1rem] font-semibold text-cream tracking-[-0.01em] transition-all hover:bg-[#AC3317] hover:-translate-y-px"
      >
        Back to home
      </Link>
    </div>
  );
}
