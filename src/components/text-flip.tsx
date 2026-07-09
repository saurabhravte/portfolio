import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";

import { cn } from "@/lib/utils";

/**
 * Cycles through a list of strings with a smooth vertical flip transition.
 * Inspired by chanhdai.com's Text Flip component.
 */
export function TextFlip({
  items,
  interval = 2800,
  className,
}: {
  items: string[];
  interval?: number;
  className?: string;
}) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (items.length <= 1) return;
    const id = setInterval(
      () => setIndex((i) => (i + 1) % items.length),
      interval,
    );
    return () => clearInterval(id);
  }, [items.length, interval]);

  return (
    <span className={cn("relative flex overflow-hidden", className)}>
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={index}
          initial={{ y: "110%", opacity: 0 }}
          animate={{ y: "0%", opacity: 1 }}
          exit={{ y: "-110%", opacity: 0 }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          className="block whitespace-nowrap"
        >
          {items[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}
