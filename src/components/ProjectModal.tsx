"use client";

import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import type { Project } from "@/data/projects";
import { ChevronRight } from "lucide-react";


type Props = {
  projects: Project[];
  activeSlug: string | null;
  onClose: () => void;
};

export default function ProjectModal({ projects, activeSlug, onClose }: Props) {
  const project = useMemo(
    () => projects.find((p) => p.slug === activeSlug) ?? null,
    [projects, activeSlug]
  );

  const [mediaIndex, setMediaIndex] = useState(0);

  useEffect(() => {
    setMediaIndex(0);
  }, [activeSlug]);

  // ESC to close + lock scroll
  useEffect(() => {
    if (!activeSlug) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);

    const original = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = original;
    };
  }, [activeSlug, onClose]);

  return (
    <AnimatePresence>
      {project ? (
        <motion.div
          className="fixed inset-0 z-9999 flex items-center justify-center px-4 py-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {/* Backdrop */}
          <motion.button
            type="button"
            aria-label="Close modal"
            className="absolute inset-0 bg-black/70"
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          {/* Modal */}
          <motion.div
            layoutId={`card-${project.slug}`}
            className="relative w-full max-w-4xl"
          >
            <div className="rounded-2xl p-px bg-linear-to-br from-amber-400/45 via-white/10 to-orange-400/25">
              <div className="rounded-2xl bg-[rgba(15,19,28,0.92)] backdrop-blur-xl border border-white/10 shadow-[0_20px_70px_rgba(0,0,0,0.70)] overflow-hidden">
                <div className="max-h-[calc(100vh-32px)] overflow-y-auto">
                  <div className="sticky top-0 z-10 bg-[rgba(15,19,28,0.96)] backdrop-blur-xl border-b border-white/10">
                    <div className="p-5 md:p-6">
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <motion.h3
                            layoutId={`title-${project.slug}`}
                            className="text-2xl md:text-3xl font-semibold text-amber-200"
                          >
                            {project.title}
                          </motion.h3>
                          <motion.p
                            layoutId={`tagline-${project.slug}`}
                            className="mt-2 text-white/70"
                          >
                            {project.tagline}
                          </motion.p>
                        </div>

                        <button
                          onClick={onClose}
                          className="rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm text-white/80 hover:text-white hover:border-white/20 transition"
                        >
                          Close
                        </button>
                      </div>

                      <div className="mt-4 flex flex-wrap gap-2">
                        {project.metrics.map((m) => (
                          <span
                            key={m}
                            className="rounded-full border border-amber-400/30 bg-amber-400/12 px-3 py-1 text-sm text-amber-100/95"
                          >
                            {m}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Media */}
                  {project.media && project.media.length > 0 ? (
                    <div className="px-5 md:px-6 pt-5">
                        <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-black/25 group">

                        {/* Image */}
                        <img
                            key={project.media[mediaIndex].src}
                            src={project.media[mediaIndex].src}
                            alt={project.media[mediaIndex].alt}
                            className="max-h-[70vh] w-full object-contain transition-opacity duration-300"
                            loading="lazy"
                        />

                        {/* Right Arrow (only if multiple images) */}
                        {project.media.length > 1 && (
                            <button
                            onClick={() =>
                                setMediaIndex((prev) => (prev + 1) % project.media!.length)
                            }
                            className="
                                absolute right-3 top-1/2 -translate-y-1/2
                                rounded-full border border-white/20 bg-black/50 backdrop-blur-md
                                p-3 text-white/80 hover:text-white hover:border-white/40
                                opacity-0 group-hover:opacity-100 transition
                            "
                            >
                            <ChevronRight size={22} />
                            </button>
                        )}

                        </div>
                    </div>
                    ) : null}

                  {/* Body */}
                  <div className="px-5 md:px-6 py-6">
                    <div className="grid gap-6 md:grid-cols-3">
                      <div className="md:col-span-2">
                        <h4 className="text-sm font-semibold text-white/85">
                          What it does
                        </h4>
                        <ul className="mt-3 space-y-2 text-sm text-white/70">
                          {project.description.map((line) => (
                            <li key={line} className="leading-relaxed">
                              <span className="text-amber-300/90">▸</span> {line}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="text-sm font-semibold text-white/85">
                          Tech stack
                        </h4>
                        <div className="mt-3 flex flex-wrap gap-2">
                          {project.tech.map((t) => (
                            <span
                              key={t}
                              className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/75"
                            >
                              {t}
                            </span>
                          ))}
                        </div>


                          {project.liveUrl ? (
                            <a
                              href={project.liveUrl}
                              target="_blank"
                              rel="noreferrer"
                              className="rounded-xl border border-amber-400/30 bg-amber-400/12 px-4 py-2 text-sm text-amber-50 hover:bg-amber-400/18 transition"
                            >
                              Live Demo
                            </a>
                          ) : null}
                        </div>
                        <p className="mt-4 text-xs text-white/50">
                          Press ESC to close.
                        </p>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
