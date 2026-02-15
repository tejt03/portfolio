"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "@/lib/motion";
import { projects } from "@/data/projects";
import ProjectCard from "@/components/ProjectCard";
import ProjectModal from "@/components/ProjectModal";
import NeonButton from "@/components/NeonButton";

export default function ProjectsPage() {
  const [activeSlug, setActiveSlug] = useState<string | null>(null);

  return (
    <>
      <main className="px-6">
        <div className="mx-auto w-full max-w-5xl py-10">
          <motion.div initial="hidden" animate="visible" variants={fadeUp}>
            <h1 className="mt-2 text-4xl font-bold tracking-tight text-white">
              Projects
            </h1>
            <p className="mt-3 max-w-2xl text-amber-200 leading-relaxed">
              Click any project to expand details, metrics, and screenshots.
            </p>

            <div className="mt-6">
              <NeonButton href="/" variant="secondary">
                ← Back
              </NeonButton>
            </div>
          </motion.div>

          <motion.div
            className="mt-10 grid gap-6 md:grid-cols-2"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            {projects.map((p) => (
              <motion.div key={p.slug} variants={fadeUp} className="h-full">
                <ProjectCard project={p} onOpen={setActiveSlug} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </main>

      <ProjectModal
        projects={projects}
        activeSlug={activeSlug}
        onClose={() => setActiveSlug(null)}
      />
    </>
  );
}
