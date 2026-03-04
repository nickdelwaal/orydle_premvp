"use client";

import { useRef } from "react";
import { SerratedDivider } from "@/components/ui/serrated-divider";
import { motion, useInView, Variants } from "framer-motion"; const components = [
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
    outro: "The code is real, editable, and yours. We don\u2019t hide complexity\u2014we organize it.",
  },
  {
    title: "AI Assistance",
    items: [
      "Expand intent into structure",
      "Suggest refinements",
      "Generate implementation details",
    ],
    intro: "AI helps you:",
    outro: "But AI is not the source of truth. The system model is. AI suggestions are constrained by architectural rules.",
  },
];

export function EngineeringPhilosophy() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.14,
      },
    },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    },
  };

  const lineVariants: Variants = {
    hidden: { strokeDashoffset: 120, opacity: 0 },
    visible: {
      strokeDashoffset: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: "easeInOut", delay: 0.4 }
    },
  };

  return (
    <section className="px-6 pb-24 pt-12 relative" ref={ref}>
      <div className="mx-auto max-w-6xl relative z-10">

        <motion.div
          className="mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <p className="ui-label mb-3">Core Components</p>
          <h2 className="editorial-h2 text-platinum">
            Four layers of <em>system-first development</em>
          </h2>
        </motion.div>

        <div className="surface-panel relative overflow-visible p-6 md:p-8">
          <SerratedDivider className="absolute left-0 right-0 top-0" />

          {/* SVG Connection Lines Overlay (Visible mostly on Desktop 2x2 grid) */}
          <div className="absolute inset-0 pointer-events-none hidden md:block" aria-hidden="true" style={{ zIndex: -1 }}>
            <svg className="w-full h-full" overflow="visible">
              {/* Card 01 -> 02 (Horizontal Top) */}
              <motion.path
                d="M 25% 150 C 35% 150, 65% 150, 75% 150"
                fill="none"
                stroke="rgba(120,160,255,0.18)"
                strokeWidth="1.5"
                strokeDasharray="120"
                variants={lineVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
              />
              {/* Card 02 -> 03 (Diagonal Right to Left) */}
              <motion.path
                d="M 75% 300 C 65% 350, 35% 450, 25% 480"
                fill="none"
                stroke="rgba(120,160,255,0.18)"
                strokeWidth="1.5"
                strokeDasharray="120"
                variants={lineVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
              />
              {/* Card 03 -> 04 (Horizontal Bottom) */}
              <motion.path
                d="M 25% 580 C 35% 580, 65% 580, 75% 580"
                fill="none"
                stroke="rgba(120,160,255,0.18)"
                strokeWidth="1.5"
                strokeDasharray="120"
                variants={lineVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
              />
              <defs>
                <linearGradient id="line-fade" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="rgba(120,160,255,0)" />
                  <stop offset="50%" stopColor="rgba(120,160,255,0.18)" />
                  <stop offset="100%" stopColor="rgba(120,160,255,0)" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          <motion.div
            className="grid gap-6 pt-4 md:grid-cols-2 relative z-10"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            {components.map((comp, index) => (
              <motion.article
                key={comp.title}
                variants={cardVariants}
                className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent p-6 shadow-lg ring-1 ring-inset ring-white/5 backdrop-blur-md transition-all duration-300 hover:-translate-y-[6px] hover:scale-[1.015] hover:border-blue-electric/20 hover:shadow-[0_16px_40px_rgba(37,91,252,0.15)]"
              >
                {/* Subtle Hover Highlight Inner Glow */}
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-blue-electric/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 pointer-events-none" />

                <div>
                  <div className="mb-5 flex items-center gap-3">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/20 bg-[#0f0d0c] font-mono text-[11px] text-blue-electric shadow-[0_0_15px_rgba(37,91,252,0.1)] group-hover:border-blue-electric/40 group-hover:shadow-[0_0_20px_rgba(37,91,252,0.3)] transition-all duration-300">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <h3 className="editorial-h3 text-[1.35rem] text-platinum tracking-wide">{comp.title}</h3>
                  </div>
                  <p className="mb-4 text-[15px] text-platinum/70 leading-relaxed font-medium">{comp.intro}</p>
                  <ul className="mb-6 space-y-2.5">
                    {comp.items.map((item) => (
                      <li key={item} className="flex items-start gap-3 text-[14.5px] text-platinum/80">
                        <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-blue-electric/80 shadow-[0_0_8px_rgba(37,91,252,0.6)]" />
                        <span className="leading-snug">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <p className="mt-auto border-t border-white/10 pt-4 text-[13.5px] font-medium leading-relaxed text-platinum/50 group-hover:text-platinum/60 transition-colors">
                  {comp.outro}
                </p>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
