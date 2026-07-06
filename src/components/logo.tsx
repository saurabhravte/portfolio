import { cn } from "@/lib/utils";

export function Logo({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 48 48"
      role="img"
      aria-label="Saurabh Ravte logo"
      className={cn("size-9 text-foreground", className)}
    >
      <rect
        x="1.5"
        y="1.5"
        width="45"
        height="45"
        rx="13"
        fill="currentColor"
      />
      <text
        x="24"
        y="25"
        textAnchor="middle"
        dominantBaseline="central"
        className="fill-background"
        fontSize="20"
        fontWeight="700"
        fontFamily="var(--font-sans)"
        letterSpacing="-0.5"
      >
        SR
      </text>
    </svg>
  );
}
