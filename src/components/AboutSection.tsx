"use client";

import GlowCard from "@/components/GlowCard";
import { motion } from "framer-motion";
import { fadeUp } from "@/lib/motion";

export default function AboutSection() {
  return (
    <motion.section
      id="about"
      className="mt-16"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={fadeUp}
    >
      <h2 className="mt-2 text-3xl md:text-4xl font-semibold tracking-tight text-white">About</h2>

      <div className="mt-8 grid gap-6 md:grid-cols-2">
        <GlowCard>
          <h3 className="text-lg font-semibold text-white">What I have built</h3>
          <p className="mt-3 text-amber-200/70 leading-relaxed">
            Scalable full-stack systems with secure authentication, clean APIs, and production deployment.
            Shipped reliable AI features that work within real application constraints.
          </p>
        </GlowCard>

        <GlowCard>
          <h3 className="text-lg font-semibold text-white">Strengths</h3>
          <ul className="mt-3 space-y-2 text-sm text-amber-200/70">
            <li><span className="text-amber-300/90">▸</span> Full-stack: Next.js, REACT, REST APIs</li>
            <li><span className="text-amber-300/90">▸</span> Backend Systems: Node.js, REST APIs, authentication</li>
            <li><span className="text-amber-300/90">▸</span> Applied AI: LLM integration, ML projects</li>
            <li><span className="text-amber-300/90">▸</span> Shipping & Reliability: CI/CD & deployment</li>
          </ul>
        </GlowCard>
      </div>
    </motion.section>
  );
}
