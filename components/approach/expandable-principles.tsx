"use client";

import { useRef } from "react";
import { SerratedDivider } from "@/components/ui/serrated-divider";
import { motion, useInView } from "framer-motion";

const traditionalSteps = [
  "Write docs",
  "Draw diagrams",
  "Write code",
  "Fix drift",
];

const krumSteps = [
  "Design system visually",
  "Generate architecture model",
  "Generate code",
  "Enforce alignment",
];

const degradePoints = [
  "Architecture docs go stale within weeks",
  "Engineers guess at system boundaries",
  "AI tools write syntactically correct but architecturally wrong code",
  "Onboarding takes weeks because 'the code is the documentation'",
];

export function AlignmentProblem() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="px-6 py-20" ref={ref}>
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <p className="ui-label mb-3">The Alignment Problem</p>
          <h2 className="editorial-h2 max-w-3xl text-platinum">
            Why systems <em>degrade</em>
          </h2>
        </motion.div>

        {/* Problem Points */}
        <motion.div
          className="surface-panel relative overflow-hidden p-6 md:p-8 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <SerratedDivider className="absolute left-0 right-0 top-0" />
          <p className="mb-6 pt-5 text-[18px] text-platinum/70">
            As codebases grow:
          </p>
          <ul className="space-y-3">
            {degradePoints.map((point) => (
              <li
                key={point}
                className="surface-card flex items-start gap-3 p-5 text-platinum/82"
              >
                <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-blue-electric" />
                <span className="text-[16px]">{point}</span>
              </li>
            ))}
          </ul>
          <div className="mt-6 rounded-2xl border border-blue-electric/30 bg-blue-electric/10 p-5 text-center text-[16px] text-platinum/84">
            The problem isn&apos;t lack of documentation. It&apos;s lack of
            enforced structural truth.
          </div>
        </motion.div>

        {/* Split-Screen Comparison */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <p className="ui-label mb-6 text-center">The Contrast</p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2">
          {/* Traditional Workflow Column */}
          <motion.div
            className="relative overflow-hidden rounded-2xl border border-white/[0.08] bg-[#0a0908]/50 p-6 backdrop-blur-sm"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.25 }}
          >
            <h3 className="editorial-h3 mb-8 text-[1.15rem] text-platinum/60">
              Traditional Workflow
            </h3>

            <div className="relative pl-6">
              {/* Vertical line */}
              <div className="absolute left-[7px] top-2 bottom-2 w-px bg-white/[0.06]" />

              <div className="space-y-6">
                {traditionalSteps.map((step, i) => (
                  <motion.div
                    key={step}
                    className="relative flex items-center gap-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.4 + i * 0.12 }}
                  >
                    {/* Dot on timeline */}
                    <div className="absolute -left-6 flex h-[15px] w-[15px] items-center justify-center">
                      <div className="h-[7px] w-[7px] rounded-full bg-white/20" />
                    </div>

                    <div className="rounded-xl border border-white/[0.05] bg-white/[0.02] px-4 py-3 text-[15px] text-platinum/50 w-full">
                      {step}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Result indicator */}
            <div className="mt-8 rounded-xl border border-red-500/10 bg-red-500/[0.04] px-4 py-3 text-center text-[13px] font-mono text-red-400/50">
              ↻ Cycle repeats. Drift accumulates.
            </div>
          </motion.div>

          {/* Krum Workflow Column */}
          <motion.div
            className="relative overflow-hidden rounded-2xl border border-white/[0.08] bg-gradient-to-b from-[#0d0c0a]/60 to-[#0a0908]/60 p-6 backdrop-blur-sm"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h3 className="editorial-h3 mb-8 text-[1.15rem] text-platinum/80">
              Krum Workflow
            </h3>

            <div className="relative pl-6">
              {/* Vertical line — slightly brighter */}
              <div className="absolute left-[7px] top-2 bottom-2 w-px bg-blue-400/[0.12]" />

              <div className="space-y-6">
                {krumSteps.map((step, i) => (
                  <motion.div
                    key={step}
                    className="relative flex items-center gap-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.45 + i * 0.12 }}
                  >
                    {/* Dot on timeline — accent */}
                    <div className="absolute -left-6 flex h-[15px] w-[15px] items-center justify-center">
                      <div className="h-[7px] w-[7px] rounded-full bg-blue-400/50 shadow-[0_0_6px_rgba(96,165,250,0.3)]" />
                    </div>

                    <div className="rounded-xl border border-blue-400/[0.08] bg-blue-400/[0.03] px-4 py-3 text-[15px] text-platinum/70 w-full">
                      {step}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Result indicator */}
            <div className="mt-8 rounded-xl border border-blue-400/15 bg-blue-400/[0.05] px-4 py-3 text-center text-[13px] font-mono text-blue-300/50">
              → System enforces alignment. Always.
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
