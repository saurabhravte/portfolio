import { motion } from "motion/react";

import { cn } from "@/lib/utils";

const RED = "#e11b22";
const profileImg = "/profile.png";

/** Small decorative QR-style block (purely aesthetic). */
function QrCode({ className }: { className?: string }) {
  const cells = 9;
  // Deterministic pseudo-random pattern so it stays stable across renders.
  const filled = (r: number, c: number) => {
    const finderTL = r < 3 && c < 3;
    const finderTR = r < 3 && c > cells - 4;
    const finderBL = r > cells - 4 && c < 3;
    if (finderTL || finderTR || finderBL) {
      const inTL =
        r < 3 && c < 3 ? r === 0 || r === 2 || c === 0 || c === 2 : false;
      const inTR =
        r < 3 && c > cells - 4
          ? r === 0 || r === 2 || c === cells - 3 || c === cells - 1
          : false;
      const inBL =
        r > cells - 4 && c < 3
          ? r === cells - 3 || r === cells - 1 || c === 0 || c === 2
          : false;
      return inTL || inTR || inBL;
    }
    return (r * 7 + c * 13 + r * c * 3) % 3 === 0;
  };

  return (
    <div
      className={cn("grid bg-white p-0.5", className)}
      style={{ gridTemplateColumns: `repeat(${cells}, 1fr)` }}
      aria-hidden
    >
      {Array.from({ length: cells * cells }).map((_, i) => {
        const r = Math.floor(i / cells);
        const c = i % cells;
        return (
          <span
            key={i}
            className="aspect-square"
            style={{ background: filled(r, c) ? "#0a0a0a" : "transparent" }}
          />
        );
      })}
    </div>
  );
}

export function IdCard({ className }: { className?: string }) {
  return (
    <motion.div
      className={cn("pointer-events-none select-none", className)}
      style={{ transformOrigin: "top center" }}
      initial={{ rotate: -3 }}
      animate={{ rotate: [-3, 3, -3] }}
      transition={{ duration: 5, ease: "easeInOut", repeat: Infinity }}
    >
      {/* Lanyard straps */}
      <div className="relative mx-auto flex h-16 w-24 items-start justify-center">
        <div
          className="absolute left-1/2 top-0 h-16 w-4 -translate-x-1/2 origin-top rotate-[-18deg] rounded-sm"
          style={{ background: `linear-gradient(180deg, ${RED}, #a5131a)` }}
        />
        <div
          className="absolute left-1/2 top-0 h-16 w-4 -translate-x-1/2 origin-top rotate-18 rounded-sm"
          style={{ background: `linear-gradient(180deg, ${RED}, #a5131a)` }}
        />
        {/* Metal clip */}
        <div className="absolute bottom-0 left-1/2 z-10 h-5 w-3 -translate-x-1/2 rounded-b-sm rounded-t-md bg-linear-to-b from-zinc-300 to-zinc-500 shadow" />
      </div>

      {/* Card body */}
      <div
        className="relative -mt-2 w-44 overflow-hidden rounded-2xl border border-black/40 shadow-2xl"
        style={{
          background: "linear-gradient(160deg, #1c1c1c 0%, #0a0a0a 75%)",
        }}
      >
        {/* Lanyard hole (shows the page behind it, so it follows the theme) */}
        <div className="mx-auto mt-2 h-2.5 w-12 rounded-full border border-zinc-600 bg-background" />

        {/* Red chevron accents */}
        <div className="absolute right-0 top-14 flex flex-col items-end gap-1.5">
          <span className="h-1.5 w-7" style={{ background: RED }} />
          <span className="h-1.5 w-5" style={{ background: RED }} />
          <span className="h-1.5 w-3.5" style={{ background: RED }} />
        </div>

        {/* Profile photo */}
        <div className="mt-3 flex justify-center">
          <div
            className="size-24 overflow-hidden rounded-full border-2"
            style={{ borderColor: RED }}
          >
            <img
              src={profileImg}
              alt="Saurabh Ravte"
              className="size-full object-cover"
            />
          </div>
        </div>

        {/* Full name below photo */}
        <div className="mt-3 px-3 text-center">
          <span className="text-lg font-extrabold tracking-tight text-white">
            Saurabh Ravte
          </span>
        </div>

        {/* Red title band */}
        <div className="mt-3" style={{ background: RED }}>
          <div className="px-3 py-2">
            <p className="text-[11px] font-semibold uppercase leading-tight tracking-wide text-white">
              Full Stack Developer
            </p>
            <p className="mt-0.5 text-[11px] font-semibold uppercase tracking-wide text-white/90">
              Mobile Developer
            </p>
          </div>
        </div>

        {/* Footer: id + QR */}
        <div className="flex items-end justify-between bg-black px-3 py-2">
          <span className="font-mono text-[8px] leading-tight text-zinc-500">
            ID · 1621
            <br />
            DEV / SR
          </span>
          <QrCode className="size-9 rounded-[3px]" />
        </div>
      </div>
    </motion.div>
  );
}
