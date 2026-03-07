"use client";

import { useRef } from "react";
import { SerratedDivider } from "@/components/ui/serrated-divider";
import { motion, useInView, Variants } from "framer-motion";

const components = [
  {
    title: "Visual Builder",
    intro: "Design services, boundaries, data flows, and agent behaviors as structured visual objects — not drawings.",
    outro: "Structured system objects that become real architecture.",
  },
  {
    title: "System Model",
    intro: "A formal graph storing your architecture as queryable data. Single source of truth. Every feature reads from it or writes to it.",
    outro: "Validates all changes against your architectural rules.",
  },
  {
    title: "Code Generation",
    intro: "Project structure, service interfaces, and connective logic generated directly from your model.",
    outro: "Real, editable code. We organize complexity — we don&apos;t hide it.",
  },
  {
    title: "AI Assistance",
    intro: "AI expands intent into structure and suggests refinements — but only within your architectural constraints.",
    outro: "AI is not the source of truth. The system model is.",
  },
];

export function EngineeringPhilosophy() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const fadeUp: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" as const },
    },
  };

  const containerFadeUp: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" as const, delay: 0.1 },
    },
  };

  return (
    <section className="px-6 py-16 relative" ref={ref}>
      <div className="mx-auto max-w-6xl relative z-10">
        {/* Heading */}
        <motion.div
          className="mb-12 text-center"
          variants={fadeUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <p className="ui-label mb-3">WHAT&apos;S INSIDE KRUM</p>
          <h2 className="editorial-h2 text-platinum">
            Four components. <em>One coherent system.</em>
          </h2>
        </motion.div>

        {/* Softer Architectural Surface Container */}
        <motion.div
          className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-[#161413] to-[#0f0d0c] p-6 lg:p-10 shadow-[inset_0_1px_1px_rgba(255,255,255,0.02)]"
          variants={containerFadeUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <SerratedDivider className="absolute left-0 right-0 top-0 opacity-50" />

          {/* Faint radial lighting inside container */}
          <div className="absolute inset-0 z-0 pointer-events-none flex items-center justify-center overflow-hidden">
            <div className="w-[800px] h-[800px] bg-white opacity-[0.015] rounded-full blur-[100px]" />
          </div>

          {/* Card Grid */}
          <div className="grid gap-6 pt-4 md:grid-cols-2 relative z-10">
            {components.map((comp, index) => (
              <article
                key={comp.title}
                className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-white/[0.08] bg-[#0a0908]/40 p-6 shadow-sm backdrop-blur-sm transition-all duration-[250ms] ease-out hover:-translate-y-1 hover:border-blue-electric/20 hover:shadow-[0_8px_30px_rgba(37,91,252,0.08)]"
              >
                <div>
                  <div className="mb-5 flex items-center gap-4">
                    {/* Number Badge */}
                    <div className="relative flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-b from-[#1a1816] to-[#0f0d0c] border border-white/5 shadow-inner">
                      <div className="absolute inset-0 rounded-full bg-blue-100 opacity-5 blur-md" />
                      <span className="relative z-10 font-mono text-[11px] text-platinum/70">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </div>
                    <h3 className="editorial-h3 text-[1.35rem] text-platinum/90 tracking-wide">
                      {comp.title}
                    </h3>
                  </div>
                  <p className="mb-8 text-[15px] text-platinum/60 leading-relaxed font-normal">
                    {comp.intro}
                  </p>
                </div>
                <p className="mt-auto border-t border-white/5 pt-4 text-[13.5px] font-normal leading-relaxed text-platinum/40 group-hover:text-platinum/50 transition-colors duration-[250ms]">
                  {comp.outro}
                </p>
              </article>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
