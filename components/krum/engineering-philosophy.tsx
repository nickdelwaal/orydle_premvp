"use client";

import { useRef } from "react";
import { SerratedDivider } from "@/components/ui/serrated-divider";
import { motion, useInView, Variants } from "framer-motion";

const components = [
  {
    title: "Visual Builder",
    items: [
      "Services with boundaries",
      "Data flows with contracts",
      "Agent behaviors with constraints",
      "Resources with ownership",
    ],
    intro: "Design systems using structured visual elements:",
    outro: "Not drawings. Structured system objects that become real architecture.",
  },
  {
    title: "System Model",
    items: [
      "Stores your system as queryable data",
      "Understands dependencies and constraints",
      "Acts as single source of truth",
      "Validates changes against architectural rules",
    ],
    intro: "The heart of Krum. A formal graph that:",
    outro: "Every feature reads from or writes to this model.",
  },
  {
    title: "Code Generation",
    items: [
      "Project structure matching your design",
      "Service boundaries and interfaces",
      "Boilerplate and connective logic",
      "Implementation scaffolding",
    ],
    intro: "From the system model, we produce:",
    outro:
      "The code is real, editable, and yours. We don\u2019t hide complexity\u2014we organize it.",
  },
  {
    title: "AI Assistance",
    items: [
      "Expand intent into structure",
      "Suggest refinements",
      "Generate implementation details",
    ],
    intro: "AI helps you:",
    outro:
      "But AI is not the source of truth. The system model is. AI suggestions are constrained by architectural rules.",
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
    <section className="px-6 pb-24 pt-12 relative" ref={ref}>
      <div className="mx-auto max-w-6xl relative z-10">
        {/* Heading */}
        <motion.div
          className="mb-12 text-center"
          variants={fadeUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <p className="ui-label mb-3">Core Components</p>
          <h2 className="editorial-h2 text-platinum">
            Four layers of <em>system-first development</em>
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
                className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-white/[0.08] bg-[#0a0908]/40 p-6 shadow-sm backdrop-blur-sm transition-all duration-[250ms] ease-out hover:-translate-y-1 hover:border-white/[0.15] hover:shadow-[0_8px_30px_rgba(0,0,0,0.12)]"
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
                  <p className="mb-4 text-[15px] text-platinum/60 leading-relaxed font-normal">
                    {comp.intro}
                  </p>
                  <ul className="mb-6 space-y-2.5">
                    {comp.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-3 text-[14.5px] text-platinum/75"
                      >
                        <span className="mt-[7px] h-[4px] w-[4px] shrink-0 rounded-full bg-platinum/30" />
                        <span className="leading-snug">{item}</span>
                      </li>
                    ))}
                  </ul>
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
