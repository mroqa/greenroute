import { cn } from "@/lib/utils";

export function GreenRouteLogo({
  className,
  variant = "dark",
  showWordmark = true,
}: {
  className?: string;
  variant?: "dark" | "light";
  showWordmark?: boolean;
}) {
  const text = variant === "dark" ? "text-foreground" : "text-white";
  return (
    <div className={cn("flex items-center gap-2.5", className)}>
      <LogoMark className="h-9 w-9" />
      {showWordmark && (
        <span
          className={cn(
            "font-display text-xl font-extrabold tracking-tight",
            text,
          )}
        >
          Green<span className="text-primary">Route</span>
        </span>
      )}
    </div>
  );
}

export function LogoMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="gr-mark-bg" x1="0" y1="0" x2="40" y2="40" gradientUnits="userSpaceOnUse">
          <stop stopColor="#16a34a" />
          <stop offset="1" stopColor="#065f3b" />
        </linearGradient>
        <linearGradient id="gr-mark-leaf" x1="12" y1="8" x2="28" y2="32" gradientUnits="userSpaceOnUse">
          <stop stopColor="#bef264" />
          <stop offset="1" stopColor="#4ade80" />
        </linearGradient>
      </defs>
      {/* Rounded square base */}
      <rect x="0" y="0" width="40" height="40" rx="11" fill="url(#gr-mark-bg)" />
      {/* Route arc - subtle path */}
      <path
        d="M8 28 C 12 18, 20 14, 32 14"
        stroke="rgba(255,255,255,0.25)"
        strokeWidth="2"
        strokeLinecap="round"
        strokeDasharray="2 3"
        fill="none"
      />
      {/* Leaf / route marker */}
      <path
        d="M20 10 C 24 14, 26 18, 24 23 C 22 27, 18 28, 14 26 C 12 22, 14 16, 20 10 Z"
        fill="url(#gr-mark-leaf)"
      />
      <circle cx="22" cy="18" r="2.2" fill="#064e3b" />
      {/* Origin pin */}
      <circle cx="8" cy="28" r="2.4" fill="white" />
      <circle cx="8" cy="28" r="1" fill="#065f3b" />
      {/* Destination pin */}
      <circle cx="32" cy="14" r="2.4" fill="white" />
      <circle cx="32" cy="14" r="1" fill="#065f3b" />
    </svg>
  );
}
