"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";

export function Transparency() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="relative px-6 py-32 overflow-hidden">
      {/* Subtle glow */}
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
        <div className="w-[500px] h-[500px] bg-blue-500 opacity-[0.02] rounded-full blur-[90px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-2xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="text-[clamp(1.5rem,4vw,2.4rem)] leading-[1.3] tracking-[0.01em] text-platinum/80 font-[var(--font-display)] mb-2">
            Security is built into the architecture.
          </p>
          <p className="text-[clamp(1.5rem,4vw,2.4rem)] leading-[1.3] tracking-[0.01em] text-platinum/50 font-[var(--font-display)]">
            <em>Not added after deployment.</em>
          </p>
        </motion.div>

        <motion.div
          className="mt-10"
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Link
            href="mailto:security@orydle.com"
            className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-7 py-3.5 text-[15px] font-medium text-platinum backdrop-blur-sm transition-all duration-300 hover:border-white/25 hover:bg-white/10"
          >
            Contact for security details
            <span className="text-platinum/40">→</span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
