import React from "react";
import { ArrowRight } from "lucide-react";

type Props = {
  children: React.ReactNode;
  href: string;
  variant?: "primary" | "secondary";
  className?: string;
};

export default function Button({ children, href, variant = "primary", className }: Props) {
  const base =
    "inline-flex items-center gap-2 rounded-2xl px-6 py-3 text-sm font-semibold transition active:scale-[0.98]";

  const styles =
    variant === "primary"
      ? "bg-aura-500 text-ink-950 hover:bg-aura-400"
      : "border border-white/10 bg-ink-900 text-white hover:bg-ink-800";

  return (
    <a href={href} className={`${base} ${styles} ${className ?? ""}`}>
      {children}
      <ArrowRight className="h-4 w-4" />
    </a>
  );
}