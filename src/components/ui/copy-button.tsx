import { useCallback, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Check, Copy, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type CopyState = "idle" | "success" | "error";

type CopyButtonProps = {
  /** Text to copy, or a function returning it. */
  text: string | (() => string | Promise<string>);
  idleIcon?: React.ReactNode;
  doneIcon?: React.ReactNode;
  errorIcon?: React.ReactNode;
  onCopySuccess?: (text: string) => void;
  onCopyError?: (error: unknown) => void;
  className?: string;
  children?: React.ReactNode;
} & Omit<React.ComponentProps<typeof Button>, "children" | "onCopy">;

/**
 * Copy text to clipboard with animated icon feedback + light haptics.
 * Modeled on chanhdai.com/components/copy-button.
 */
export function CopyButton({
  text,
  idleIcon = <Copy />,
  doneIcon = <Check />,
  errorIcon = <X />,
  onCopySuccess,
  onCopyError,
  className,
  children,
  variant = "outline",
  size = children ? "default" : "icon",
  ...props
}: CopyButtonProps) {
  const [state, setState] = useState<CopyState>("idle");
  const timeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  const copy = useCallback(async () => {
    if (timeout.current) clearTimeout(timeout.current);
    try {
      const value = typeof text === "function" ? await text() : text;
      await navigator.clipboard.writeText(value);
      setState("success");
      // Haptic confirmation on supported devices.
      navigator.vibrate?.(12);
      onCopySuccess?.(value);
    } catch (error) {
      setState("error");
      navigator.vibrate?.([8, 40, 8]);
      onCopyError?.(error);
    }
    timeout.current = setTimeout(() => setState("idle"), 1600);
  }, [text, onCopySuccess, onCopyError]);

  const icon =
    state === "success" ? doneIcon : state === "error" ? errorIcon : idleIcon;

  return (
    <Button
      type="button"
      variant={variant}
      size={size}
      onClick={copy}
      data-state={state}
      aria-label="Copy to clipboard"
      className={cn(
        "data-[state=success]:text-brand data-[state=error]:text-destructive",
        className,
      )}
      {...props}
    >
      <span className="relative inline-flex size-4 items-center justify-center">
        <AnimatePresence mode="wait" initial={false}>
          <motion.span
            key={state}
            initial={{ scale: 0.4, opacity: 0, rotate: -30 }}
            animate={{ scale: 1, opacity: 1, rotate: 0 }}
            exit={{ scale: 0.4, opacity: 0, rotate: 30 }}
            transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-0 inline-flex items-center justify-center [&_svg]:size-4"
          >
            {icon}
          </motion.span>
        </AnimatePresence>
      </span>
      {children}
    </Button>
  );
}
