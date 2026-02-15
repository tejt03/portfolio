"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "@/lib/motion";
import { projects } from "@/data/projects";
import ProjectCard from "@/components/ProjectCard";
import ProjectModal from "@/components/ProjectModal";

export default function ProjectsSection() {
  const [activeSlug, setActiveSlug] = useState<string | null>(null);

  useEffect(() => {
    if (activeSlug) document.body.classList.add("modal-open");
    else document.body.classList.remove("modal-open");

    return () => {
      document.body.classList.remove("modal-open");
    };
  }, [activeSlug]);

  return (
    <>
      <motion.section
        className="mt-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeUp}
      >
        <div className="flex items-end justify-between gap-6">
          <div>
            <h2 className="mt-2 text-3xl md:text-4xl font-semibold tracking-tight text-white">
              Projects
            </h2>
          </div>

          <a
            href="/projects"
            className="text-sm text-white/65 hover:text-white transition"
          >
            View all →
          </a>
        </div>

        <motion.div
          className="mt-8 grid gap-6 md:grid-cols-2"
          variants={staggerContainer}
        >
          {projects.map((p) => (
            <motion.div key={p.slug} variants={fadeUp} className="h-full">
              <ProjectCard project={p} onOpen={setActiveSlug} />
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      <ProjectModal
        projects={projects}
        activeSlug={activeSlug}
        onClose={() => setActiveSlug(null)}
      />
    </>
  );
}
