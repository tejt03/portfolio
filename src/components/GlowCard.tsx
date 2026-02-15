import * as React from "react";

type GlowCardProps = {
  children: React.ReactNode;
  className?: string;
};

export default function GlowCard({ children, className = "" }: GlowCardProps) {
  return (
    <div
      className={[
        "relative rounded-2xl p-px",
        "bg-linear-to-br from-amber-400/35 via-white/10 to-orange-400/20",
        "transition duration-300 hover:from-amber-400/55 hover:to-orange-400/35",
        className,
      ].join(" ")}
    >
      <div
        className={[
          "relative rounded-2xl p-6",
          "bg-[rgba(15,19,28,0.72)] backdrop-blur-xl",
          "border border-white/10",
          "shadow-[0_10px_30px_rgba(0,0,0,0.45)]",
          "transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_0_1px_rgba(245,158,11,0.18),0_14px_40px_rgba(0,0,0,0.55)]",
        ].join(" ")}
      >

        <div
          className="pointer-events-none absolute -top-24 -right-24 h-56 w-56 rounded-full bg-amber-400/12 blur-3xl"
          aria-hidden="true"
        />
        {children}
      </div>
    </div>
  );
}
