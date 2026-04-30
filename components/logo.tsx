type LogoVariant = "horizontal" | "stacked" | "mark";
type LogoScheme = "default" | "dark" | "cobalt" | "terra";

interface LogoProps {
  variant?: LogoVariant;
  scheme?: LogoScheme;
  height?: number;
  className?: string;
}

const SCHEMES = {
  default: { badge: "#C63D1B", mark: "#FAF7F2", markFill: "#C63D1B", text: "#1C1714", accent: "#C63D1B", divider: "#E4D8CB" },
  dark:    { badge: "#C63D1B", mark: "#FAF7F2", markFill: "#C63D1B", text: "#FAF7F2", accent: "#C63D1B", divider: "#3A2E28" },
  cobalt:  { badge: "#FAF7F2", mark: "#C63D1B", markFill: "#FAF7F2", text: "#FAF7F2", accent: "#FAF7F2", divider: "rgba(250,247,242,0.2)" },
  terra:   { badge: "#FAF7F2", mark: "#C63D1B", markFill: "#FAF7F2", text: "#FAF7F2", accent: "#FAF7F2", divider: "rgba(250,247,242,0.2)" },
};

/* The Sigil mark — terracotta badge with reversed-out A */
function SigilMark({ c, w, h }: { c: typeof SCHEMES["default"]; w: number; h: number }) {
  const rx = Math.round(h * 0.19);
  return (
    <svg viewBox="0 0 82 62" fill="none" xmlns="http://www.w3.org/2000/svg" width={w} height={h}>
      <rect width="82" height="62" rx={rx} fill={c.badge} />
      <polygon points="23,8 33,8 19,54 9,54" fill={c.mark} />
      <polygon points="38,8 48,8 60,54 50,54" fill={c.mark} />
      <rect x="15" y="34" width="44" height="8" fill={c.mark} />
      <polygon points="33,8 38,8 44,34 26,34" fill={c.markFill} />
    </svg>
  );
}

export default function Logo({ variant = "horizontal", scheme = "default", height = 32, className }: LogoProps) {
  const c = SCHEMES[scheme];
  const badgeH = height;
  const badgeW = Math.round(badgeH * (82 / 62));
  const fontSize = Math.round(badgeH * 0.68);

  if (variant === "mark") {
    return (
      <span className={className} aria-label="Appsyra logo mark">
        <SigilMark c={c} w={badgeW} h={badgeH} />
      </span>
    );
  }

  if (variant === "stacked") {
    const wordH = Math.round(badgeH * 0.52);
    return (
      <span className={`inline-flex flex-col items-center gap-[0.35em] ${className ?? ""}`} aria-label="Appsyra">
        <SigilMark c={c} w={badgeW} h={badgeH} />
        <svg viewBox="0 0 220 30" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: "auto", height: wordH }}>
          <text x="0" y="24" fontFamily="Syne,sans-serif" fontWeight="700" fontSize="28" letterSpacing="-0.7" fill={c.accent}>A</text>
          <text x="19" y="24" fontFamily="Syne,sans-serif" fontWeight="700" fontSize="28" letterSpacing="-0.7" fill={c.text}>ppsyra</text>
        </svg>
      </span>
    );
  }

  /* horizontal (default) */
  const totalW = badgeW + 18 + 8 + Math.round(fontSize * 4.8);
  return (
    <svg
      viewBox={`0 0 ${totalW} ${badgeH}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ height: badgeH, width: "auto" }}
      className={className}
      aria-label="Appsyra"
      role="img"
    >
      {/* Badge mark */}
      <rect width={badgeW} height={badgeH} rx={Math.round(badgeH * 0.19)} fill={c.badge} />
      <polygon
        points={`${badgeW * 0.28},${badgeH * 0.13} ${badgeW * 0.4},${badgeH * 0.13} ${badgeW * 0.23},${badgeH * 0.87} ${badgeW * 0.11},${badgeH * 0.87}`}
        fill={c.mark}
      />
      <polygon
        points={`${badgeW * 0.46},${badgeH * 0.13} ${badgeW * 0.585},${badgeH * 0.13} ${badgeW * 0.73},${badgeH * 0.87} ${badgeW * 0.61},${badgeH * 0.87}`}
        fill={c.mark}
      />
      <rect x={badgeW * 0.183} y={badgeH * 0.548} width={badgeW * 0.537} height={badgeH * 0.129} fill={c.mark} />
      <polygon
        points={`${badgeW * 0.4},${badgeH * 0.13} ${badgeW * 0.46},${badgeH * 0.13} ${badgeW * 0.537},${badgeH * 0.548} ${badgeW * 0.317},${badgeH * 0.548}`}
        fill={c.markFill}
      />
      {/* Divider */}
      <line x1={badgeW + 18} y1={badgeH * 0.16} x2={badgeW + 18} y2={badgeH * 0.87} stroke={c.divider} strokeWidth="1.5" />
      {/* Wordmark */}
      <text
        x={badgeW + 34}
        y={badgeH * 0.82}
        fontFamily="Syne,sans-serif"
        fontWeight="700"
        fontSize={fontSize}
        letterSpacing="-0.025em"
        fill={c.accent}
      >
        A
      </text>
      <text
        x={badgeW + 34 + Math.round(fontSize * 0.595)}
        y={badgeH * 0.82}
        fontFamily="Syne,sans-serif"
        fontWeight="700"
        fontSize={fontSize}
        letterSpacing="-0.025em"
        fill={c.text}
      >
        ppsyra
      </text>
    </svg>
  );
}
