"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const milestones = [
  {
    phase: "Phase 01",
    title: "Problem discovered",
    description:
      "Architecture lived in docs and diagrams that drifted within weeks. Code was first-class — architecture was fiction.",
  },
  {
    phase: "Phase 02",
    title: "Architecture prototype built",
    description:
      "We built a formal system model that represents architecture as queryable, validated data — not documentation.",
  },
  {
    phase: "Phase 03",
    title: "Orydle platform created",
    description:
      "Krum was born: a visual builder backed by a system graph that generates real code and enforces alignment continuously.",
  },
];

export function Mission() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="px-6 py-20">
      <div className="mx-auto max-w-3xl">
        {/* Header */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <p className="ui-label mb-3">Our Thesis</p>
          <h2 className="editorial-h2 max-w-3xl text-platinum">
            How the <em>idea</em> evolved
          </h2>
        </motion.div>

        {/* Vertical Timeline */}
        <div className="relative pl-8 md:pl-10">
          {/* Animated vertical line */}
          <div className="absolute left-[11px] top-2 bottom-2 w-px overflow-hidden">
            <motion.div
              className="w-full bg-gradient-to-b from-white/[0.1] via-white/[0.06] to-transparent"
              initial={{ height: "0%" }}
              animate={isInView ? { height: "100%" } : {}}
              transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
            />
          </div>

          <div className="space-y-10">
            {milestones.map((m, i) => (
              <motion.div
                key={m.title}
                className="relative"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.5,
                  delay: 0.3 + i * 0.12,
                  ease: "easeOut",
                }}
              >
                {/* Circular marker */}
                <div className="absolute -left-8 md:-left-10 top-1 flex h-[22px] w-[22px] items-center justify-center">
                  <div className="h-[9px] w-[9px] rounded-full border border-white/15 bg-[#0f0d0c] shadow-[0_0_6px_rgba(255,255,255,0.04)]" />
                </div>

                {/* Content */}
                <div className="rounded-xl border border-white/[0.06] bg-[#0a0908]/40 p-5 backdrop-blur-sm">
                  <span className="mb-2 inline-block font-mono text-[10px] uppercase tracking-[0.16em] text-platinum/35">
                    {m.phase}
                  </span>
                  <h3 className="editorial-h3 mb-2 text-[1.15rem] text-platinum/85 tracking-wide">
                    {m.title}
                  </h3>
                  <p className="text-[14.5px] leading-relaxed text-platinum/50 font-normal">
                    {m.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
