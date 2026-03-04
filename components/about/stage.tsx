"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const statements = [
  "Software is growing faster than architecture can manage.",
  "Systems drift.",
  "Code diverges from design.",
  "Teams lose control.",
];

const conclusion = "System-first development solves this.";

export function Stage() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="relative px-6 pb-28 pt-16 overflow-hidden">
      {/* Subtle bg glow */}
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
        <div className="w-[500px] h-[500px] bg-blue-500 opacity-[0.02] rounded-full blur-[90px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-2xl">
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <p className="ui-label mb-3">Vision</p>
          <h2 className="editorial-h2 text-platinum">
            Why Orydle <em>exists</em>
          </h2>
        </motion.div>

        <div className="space-y-6">
          {statements.map((line, i) => (
            <motion.p
              key={line}
              className="text-[clamp(1.1rem,2.5vw,1.45rem)] leading-[1.5] text-platinum/60"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.5,
                delay: 0.2 + i * 0.12,
                ease: "easeOut",
              }}
            >
              {line}
            </motion.p>
          ))}

          {/* Concluding statement — slightly larger */}
          <motion.p
            className="pt-4 text-[clamp(1.3rem,3vw,1.75rem)] leading-[1.35] font-[var(--font-display)] text-platinum/80 tracking-[0.01em]"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{
              duration: 0.6,
              delay: 0.2 + statements.length * 0.12,
              ease: "easeOut",
            }}
          >
            {conclusion}
          </motion.p>
        </div>
      </div>
    </section>
  );
}
