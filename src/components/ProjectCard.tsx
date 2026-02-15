"use client";

import { motion } from "framer-motion";
import type { Project } from "@/data/projects";

type Props = {
  project: Project;
  onOpen: (slug: string) => void;
};

export default function ProjectCard({ project, onOpen }: Props) {
  const cover = project.media?.[0];

  return (
    <motion.button
      type="button"
      layoutId={`card-${project.slug}`}
      onClick={() => onOpen(project.slug)}
      className="group w-full h-full text-left"
      whileHover={{ y: -3 }}
      whileTap={{ scale: 0.99 }}
    >
      {/* Outer frame: calm by default, premium on hover */}
      <div className="h-full rounded-2xl p-px bg-linear-to-br from-white/5 via-white/5 to-white/10 group-hover:from-amber-400/30 group-hover:via-white/10 group-hover:to-orange-400/20 transition-colors duration-300">
        {/* Card */}
        <div className="h-full rounded-2xl overflow-hidden border border-white/10 bg-[rgba(255,255,255,0.03)] backdrop-blur-xl shadow-[0_10px_30px_rgba(0,0,0,0.40)] transition-all duration-300 group-hover:-translate-y-1 group-hover:border-amber-400/40 group-hover:shadow-[0_0_28px_rgba(251,191,36,0.22)]">
          {/* Screenshot */}
          <div className="relative">
            <div className="w-full aspect-video bg-black/25 overflow-hidden">
              {cover ? (
                <img
                  src={cover.src}
                  alt={cover.alt}
                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              ) : (
                <div className="h-full w-full flex items-center justify-center text-xs text-white/55">
                  Add a screenshot in projects.ts → media[0]
                </div>
              )}
            </div>

            {/* Overlay for readability */}
            <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-black/70 via-black/15 to-transparent" />
          </div>

          {/* Content */}
          <div className="p-7 flex flex-col">
            <motion.h3
              layoutId={`title-${project.slug}`}
              className="text-lg font-semibold tracking-tight text-amber-200/90"
            >
              {project.title}
            </motion.h3>

            <motion.p
              layoutId={`tagline-${project.slug}`}
              className="mt-2 text-sm text-white/60 leading-relaxed"
            >
              {project.tagline}
            </motion.p>

            {/* Keywords (gold is reserved here) */}
            <div className="mt-4 flex flex-wrap gap-2">
              {project.tech.slice(0, 7).map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-amber-400/25 bg-amber-400/10 px-3 py-1 text-[11px] text-amber-200/90"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.button>
  );
}
