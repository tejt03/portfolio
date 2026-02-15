"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

type Props = {
  open: boolean;
  onClose: () => void;
};

type Status = "idle" | "sending" | "sent" | "error";

// Formspree endpoint
const FORM_ENDPOINT = "https://formspree.io/f/mykdwgqz";

export default function HireMeDrawer({ open, onClose }: Props) {
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (!open) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);

    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [open, onClose]);

  useEffect(() => {
    setStatus("idle");
    setMessage("");
    }, [open]);


  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    setMessage("");

    if (!FORM_ENDPOINT || FORM_ENDPOINT.includes("xxxx")) {
      setStatus("error");
      setMessage(
        "Form is not configured yet. Add your Formspree endpoint in HireMeDrawer.tsx."
      );
      return;
    }

    try {
      const form = e.currentTarget;
      const data = new FormData(form);

      const res = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: data,
      });

      if (res.ok) {
        form.reset();
        setStatus("sent");
        setMessage("Sent. I’ll reply soon.");
      } else {
        setStatus("error");
        setMessage("Failed to send. Please try again in a moment.");
      }
    } catch {
      setStatus("error");
      setMessage("Network error. Please try again.");
    }
  }

  return (
    <AnimatePresence>
      {open ? (
        <motion.div
          className="fixed inset-0 z-9999"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {/* Backdrop */}
          <button
            aria-label="Close"
            onClick={onClose}
            className="absolute inset-0 bg-black/70"
          />

          {/* Drawer */}
          <motion.aside
            className="absolute right-0 top-0 h-full w-full max-w-md border-l border-white/15 bg-[rgba(10,12,18,0.96)] backdrop-blur-xl shadow-[0_20px_70px_rgba(0,0,0,0.75)]"
            initial={{ x: 420 }}
            animate={{ x: 0 }}
            exit={{ x: 420 }}
            transition={{ type: "spring", stiffness: 260, damping: 28 }}
          >
            {/* Header */}
            <div className="sticky top-0 z-10 border-b border-white/10 bg-[rgba(15,19,28,0.96)] px-6 py-5">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-lg font-semibold text-amber-200">
                    Let’s connect
                  </h3>
                  <p className="mt-1 text-sm text-white/80">
                    Please enter the details below and I'll get back asap!
                  </p>
                </div>

                <button
                  onClick={onClose}
                  className="rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm text-white/80 hover:text-white hover:border-white/20 transition"
                >
                  Close
                </button>
              </div>
            </div>

            {/* Body */}
            <div className="px-6 py-6 overflow-y-auto h-[calc(100%-132px)]">
              <form onSubmit={onSubmit} className="space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="text-xs text-white/85">Name</label>
                    <input
                      name="name"
                      required
                      className="mt-2 w-full rounded-xl border border-white/15 bg-white/10 px-3 py-2 text-sm text-white placeholder:text-white/45 outline-none focus:border-amber-400/50"
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label className="text-xs text-white/85">Email</label>
                    <input
                      name="email"
                      type="email"
                      required
                      className="mt-2 w-full rounded-xl border border-white/15 bg-white/10 px-3 py-2 text-sm text-white placeholder:text-white/45 outline-none focus:border-amber-400/50"
                      placeholder="you@company.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs text-white/85">What is this about?</label>
                  <select
                    name="type"
                    required
                    className="mt-2 w-full rounded-xl border border-white/15 bg-[rgba(255,255,255,0.10)] px-3 py-2 text-sm text-white outline-none focus:border-amber-400/50"
                    defaultValue="Full-time role"
                  >
                    <option className="bg-[#0b0f18] text-white">Full-time role</option>
                    <option className="bg-[#0b0f18] text-white">Contract role</option>
                    <option className="bg-[#0b0f18] text-white">Freelance project</option>
                    <option className="bg-[#0b0f18] text-white">General</option>
                    <option className="bg-[#0b0f18] text-white">Other</option>
                  </select>
                </div>

                <div>
                  <label className="text-xs text-white/85">Timeline</label>
                  <select
                    name="timeline"
                    required
                    className="mt-2 w-full rounded-xl border border-white/15 bg-[rgba(255,255,255,0.10)] px-3 py-2 text-sm text-white outline-none focus:border-amber-400/50"
                    defaultValue="ASAP"
                  >
                    <option className="bg-[#0b0f18] text-white">ASAP</option>
                    <option className="bg-[#0b0f18] text-white">1–2 weeks</option>
                    <option className="bg-[#0b0f18] text-white">1–2 months</option>
                    <option className="bg-[#0b0f18] text-white">Flexible</option>
                  </select>
                </div>

                <div>
                  <label className="text-xs text-white/85">Message</label>
                  <textarea
                    name="message"
                    required
                    rows={6}
                    className="mt-2 w-full resize-none rounded-xl border border-white/15 bg-white/10 px-3 py-2 text-sm text-white placeholder:text-white/45 outline-none focus:border-amber-400/50"
                    placeholder="Role details, project scope, links, timeline…"
                  />
                </div>

                <input type="hidden" name="_subject" value="New Hire Me inquiry" />

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className={[
                    "w-full rounded-xl px-4 py-2 text-sm font-medium transition",
                    "border border-amber-400/35 bg-amber-400/12 text-amber-50 hover:bg-amber-400/18",
                    status === "sending" ? "opacity-60 cursor-not-allowed" : "",
                  ].join(" ")}
                >
                  {status === "sending" ? "Sending…" : "Send"}
                </button>

                {message ? (
                  <p
                    className={[
                      "text-sm",
                      status === "sent" ? "text-amber-200/90" : "text-white/80",
                    ].join(" ")}
                  >
                    {message}
                  </p>
                ) : null}
              </form>
            </div>
          </motion.aside>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
