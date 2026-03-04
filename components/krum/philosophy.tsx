"use client";

import { useRef } from "react";
import { motion, useInView, Variants } from "framer-motion";

export function Philosophy() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const slideUp: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } }
  };

  const slideRight: Variants = {
    hidden: { opacity: 0, x: -40 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" as const, delay: 0.12 } }
  };

  const slideLeft: Variants = {
    hidden: { opacity: 0, x: 40 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" as const, delay: 0.24 } }
  };

  const fadeIn: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.6, ease: "easeOut" as const, delay: 0.36 } }
  };

  return (
    <section className="px-6 py-20 relative" ref={ref}>
      <div className="mx-auto max-w-5xl relative z-10">

        <motion.div
          className="mb-12 text-center md:text-left"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={slideUp}
        >
          <p className="ui-label mb-3">Philosophy</p>
          <h2 className="editorial-h2 max-w-3xl text-platinum">
            System-first <em>development</em>
          </h2>
        </motion.div>

        <div className="flex flex-col gap-10">
          {/* Card Container */}
          <div className="grid gap-6 md:grid-cols-2">
            {/* Traditional Flow Card */}
            <motion.div
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent p-8 shadow-lg ring-1 ring-inset ring-white/5 backdrop-blur-md transition-all duration-300 hover:-translate-y-1.5 hover:border-white/20 hover:shadow-[0_16px_40px_rgba(0,0,0,0.3)]"
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={slideRight}
            >
              <h3 className="mb-6 font-[var(--font-display)] text-[22px] font-light tracking-wide text-platinum/70">
                Traditional Flow
              </h3>
              <div className="space-y-3 font-sans text-[16px] text-platinum/60">
                <p className="flex items-center gap-3"><span className="text-white/20 text-sm">→</span> Write docs</p>
                <p className="flex items-center gap-3"><span className="text-white/20 text-sm">→</span> Draw diagrams</p>
                <p className="flex items-center gap-3"><span className="text-white/20 text-sm">→</span> Write code</p>
                <p className="flex items-center gap-3"><span className="text-white/20 text-sm">→</span> Fix drift</p>
              </div>
            </motion.div>

            {/* Krum Flow Card */}
            <motion.div
              className="group relative overflow-hidden rounded-2xl border border-blue-electric/30 bg-gradient-to-br from-blue-electric/10 to-transparent p-8 shadow-lg ring-1 ring-inset ring-blue-electric/20 backdrop-blur-md transition-all duration-300 hover:-translate-y-1.5 hover:border-blue-electric/50 hover:shadow-[0_16px_40px_rgba(37,91,252,0.15)]"
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={slideLeft}
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-blue-electric/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <h3 className="mb-6 font-[var(--font-display)] text-[22px] font-light tracking-wide text-blue-electric">
                Krum Flow
              </h3>
              <div className="space-y-3 font-sans text-[16px] text-platinum/90">
                <p className="flex items-center gap-3"><span className="text-blue-electric/60 text-sm">→</span> Design system visually</p>
                <p className="flex items-center gap-3"><span className="text-blue-electric/60 text-sm">→</span> Generate architecture model</p>
                <p className="flex items-center gap-3"><span className="text-blue-electric/60 text-sm">→</span> Generate code</p>
                <p className="flex items-center gap-3"><span className="text-blue-electric/60 text-sm">→</span> Evolve safely</p>
              </div>
            </motion.div>
          </div>

          {/* Statement Panel */}
          <motion.div
            className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-transparent px-8 py-10 text-center shadow-[0_8px_32px_rgba(0,0,0,0.3)] backdrop-blur-md"
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={fadeIn}
          >
            <div className="absolute -inset-[1px] -z-10 rounded-2xl border border-white/10 opacity-50 shadow-[0_0_15px_rgba(255,255,255,0.05)]" />
            <div className="absolute left-1/2 top-1/2 -z-20 h-full w-3/4 -translate-x-1/2 -translate-y-1/2 bg-blue-electric/5 blur-3xl" />

            <p className="mx-auto max-w-3xl text-[17px] font-medium tracking-wide text-platinum/90 md:text-[19px] md:leading-relaxed">
              The architecture isn&apos;t a drawing. It&apos;s a formal model that governs structure and execution.
            </p>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
