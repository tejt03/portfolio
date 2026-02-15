"use client";

import * as React from "react";
import Link from "next/link";

type NeonButtonProps = {
  children: React.ReactNode;
  href: string;
  variant?: "primary" | "secondary";
  external?: boolean;
  className?: string;
};

export default function NeonButton({
  children,
  href,
  variant = "secondary",
  external = false,
  className = "",
}: NeonButtonProps) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-xl px-4 py-2 text-sm " +
    "transition duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-300/40";

  const primary =
    "relative text-amber-50 " +
    "bg-gradient-to-r from-amber-400/22 to-orange-400/14 " +
    "border border-amber-400/35 hover:border-amber-300/55 " +
    "shadow-[0_0_0_1px_rgba(245,158,11,0.14)] " +
    "hover:shadow-[0_0_0_1px_rgba(245,158,11,0.22),0_10px_30px_rgba(0,0,0,0.45)]";

  const secondary =
    "relative text-white/85 bg-white/5 border border-white/10 " +
    "hover:border-white/20 hover:bg-white/8";

  const shine =
    "before:absolute before:inset-0 before:rounded-xl before:opacity-0 " +
    "before:bg-[radial-gradient(420px_120px_at_50%_0%,rgba(245,158,11,0.22),transparent_60%)] " +
    "hover:before:opacity-100 before:transition before:duration-300";

  const cls = [base, shine, variant === "primary" ? primary : secondary, className]
    .filter(Boolean)
    .join(" ");

  if (external) {
    return (
      <a href={href} target="_blank" rel="noreferrer" className={cls}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={cls}>
      {children}
    </Link>
  );
}
