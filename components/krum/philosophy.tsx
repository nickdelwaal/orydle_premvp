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
    <section id="philosophy" className="px-6 py-12 relative" ref={ref}>
      <div className="mx-auto max-w-5xl relative z-10">

        <motion.div
          className="mb-12 text-center md:text-left"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={slideUp}
        >
          <p className="ui-label mb-3">HOW IT WORKS</p>
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
              <p className="ui-label mb-4 text-platinum/35">Without Krum</p>
              <div className="space-y-3 font-sans text-[16px] text-platinum/60 mt-6">
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
              <p className="ui-label mb-4 text-[#255bfc]/70">With Krum</p>
              <div className="space-y-3 font-sans text-[16px] text-platinum/90 mt-6">
                <p className="flex items-center gap-3"><span className="text-blue-electric/60 text-sm">→</span> Design system visually</p>
                <p className="flex items-center gap-3"><span className="text-blue-electric/60 text-sm">→</span> Generate architecture model</p>
                <p className="flex items-center gap-3"><span className="text-blue-electric/60 text-sm">→</span> Generate code</p>
                <p className="flex items-center gap-3"><span className="text-blue-electric/60 text-sm">→</span> Evolve safely</p>
              </div>
            </motion.div>
          </div>

          <motion.p
            className="mt-2 text-center font-[var(--font-ui)] text-[15px] text-platinum/45"
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={fadeIn}
          >
            The architecture isn&apos;t a drawing. It&apos;s a formal model that governs structure and execution.
          </motion.p>
        </div>

      </div>
    </section>
  );
}
