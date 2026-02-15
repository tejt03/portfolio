"use client";

import GlowCard from "@/components/GlowCard";
import ProjectsSection from "@/components/ProjectsSection";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import NeonButton from "@/components/NeonButton";
import { motion, type Variants } from "framer-motion";

const pageStagger: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.14,
      delayChildren: 0.08,
    },
  },
};

const sectionFade: Variants = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function Home() {
  return (
    <motion.main
      className="min-h-screen px-6"
      initial="hidden"
      animate="visible"
      variants={pageStagger}
    >
      <div className="mx-auto w-full max-w-5xl py-16">
        {/* HERO */}
        <motion.div variants={sectionFade}>
          <GlowCard>
            <div className="flex items-center gap-2 text-xs tracking-wide uppercase text-white/70">
              <span>Software Engineer</span>
              <span className="h-1 w-1 rounded-full bg-amber-300/70" />
              <span>Full-Stack & Backend</span>
              <span className="h-1 w-1 rounded-full bg-amber-300/70" />
              <span>Applied AI</span>
            </div>

            <h1 className="mt-2 text-5xl md:text-5x1 font-semibold tracking-tight text-white">
              Tej Tilekar
            </h1>

            <p className="mt-4 max-w-2x2 text-amber-200/80 text-base leading-relaxed">
              I’m a Software Engineer focused on building reliable systems and turning ideas into production software.
              <br />
              I’m actively seeking full-time roles where I can design and ship scalable features, contribute to real products, and grow through ownership in production environments.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <NeonButton href="/projects" variant="primary">
                View Projects
              </NeonButton>

              <NeonButton href="https://github.com/tejt03" external>
                GitHub
              </NeonButton>

              <NeonButton href="https://www.linkedin.com/in/tejtilekar" external>
                LinkedIn
              </NeonButton>

              <NeonButton href="mailto:tejtilekar@gmail.com" external>
                Email
              </NeonButton>
            </div>
          </GlowCard>
        </motion.div>

        {/* PROJECTS */}
        <motion.div variants={sectionFade} id="projects" className="mt-28 md:mt-36">
          <ProjectsSection />
        </motion.div>

        {/* ABOUT */}
        <motion.div variants={sectionFade} className="mt-28 md:mt-36">
          <AboutSection />
        </motion.div>

        {/* CONTACT */}
        <motion.div variants={sectionFade} className="mt-28 md:mt-36">
          <ContactSection />
        </motion.div>
      </div>
    </motion.main>
  );
}
