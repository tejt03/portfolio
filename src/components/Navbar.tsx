"use client";

import { useState } from "react";
import HireMeDrawer from "@/components/TextMeDrawer";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="site-navbar fixed left-0 right-0 top-0 z-50">
        <div className="mx-auto w-full max-w-5xl px-6">
          <div className="mt-4 rounded-2xl border border-white/10 bg-[rgba(15,19,28,0.65)] backdrop-blur-xl shadow-[0_10px_30px_rgba(0,0,0,0.45)]">
            <div className="flex items-center justify-between px-4 py-3">
              <a href="/" className="text-sm font-semibold tracking-wide text-white/90">
                Tej<span className="text-amber-200/90">.Portfolio</span>
              </a>

              <nav className="hidden items-center gap-2 md:flex">
                <a
                  href="/#projects"
                  className="rounded-lg px-3 py-2 text-sm text-white/70 hover:text-white transition"
                >
                  Projects
                </a>
                <a
                  href="/#about"
                  className="rounded-lg px-3 py-2 text-sm text-white/70 hover:text-white transition"
                >
                  About
                </a>
                <a
                  href="/#contact"
                  className="rounded-lg px-3 py-2 text-sm text-white/70 hover:text-white transition"
                >
                  Contact
                </a>
              </nav>

              <button
                onClick={() => setOpen(true)}
                className="rounded-xl border border-amber-400/35 bg-amber-400/12 px-4 py-2 text-sm text-amber-50 hover:bg-amber-400/18 transition"
              >
                Text Me
              </button>
            </div>
          </div>
        </div>
      </div>

      <HireMeDrawer open={open} onClose={() => setOpen(false)} />
    </>
  );
}
