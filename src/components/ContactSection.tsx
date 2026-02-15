"use client";

import GlowCard from "@/components/GlowCard";
import NeonButton from "@/components/NeonButton";
import { motion } from "framer-motion";
import { fadeUp } from "@/lib/motion";

export default function ContactSection() {
  return (
    <motion.section
      id="contact"
      className="mt-16 pb-24"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={fadeUp}
    >
      <h2 className="mt-2 text-3xl md:text-4xl font-semibold tracking-tight text-white">Contact</h2>

      <div className="mt-8">
        <GlowCard>
          <p className="text-white/70 leading-relaxed">
            I'm always open for a conversation. Reach out to me! 
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <NeonButton href="mailto:tejtilekar@gmail.com" external variant="primary">
              Email
            </NeonButton>
            <NeonButton href="https://www.linkedin.com/in/tejtilekar" external>
              LinkedIn
            </NeonButton>
            <NeonButton href="https://github.com/tejt03" external>
              GitHub
            </NeonButton>
          </div>
        </GlowCard>
      </div>
    </motion.section>
  );
}
