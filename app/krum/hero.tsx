"use client";

import { motion } from "framer-motion";

export function KrumHero() {
  return (
    <section className="px-6 pb-18 pt-14 md:pt-18 overflow-hidden">
      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[6fr_5fr] md:items-center">
        {/* Left Column: Text & CTA */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="z-10"
        >
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="ui-label mb-4"
          >
            Product / Krum
          </motion.p>
          <h1 className="editorial-h1 mb-6 text-platinum">
            A visual system builder, not a <em>diagramming tool</em>
          </h1>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-2xl text-[18px] text-platinum/66"
          >
            Krum lets you compose systems from structured blocks. Generate architecture as data. Produce code that implements what you designed—and reject changes that break alignment.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-8"
          >
            {/* Keeping placeholder for buttons incase the user adds them later as per "CTA buttons" requirement, though currently missing in the original file */}
          </motion.div>
        </motion.div>

        {/* Right Column: Animated System SVG */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          className="relative flex justify-center lg:justify-end"
        >
          {/* Glassmorphic Container with Glow */}
          <div className="relative flex aspect-square w-full max-w-[500px] items-center justify-center rounded-xl border border-white/10 bg-black/40 p-10 shadow-[0_8px_32px_rgba(0,0,0,0.5)] backdrop-blur-xl">
            {/* Subtle background glow */}
            <div className="absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-electric/20 blur-[80px]" />

            {/* The SVG Image with continuous floating animation */}
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
              className="relative z-10 w-full"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/orydle-node-graph-v4.svg"
                alt="System Architecture Graph"
                className="w-full h-auto drop-shadow-lg"
                loading="lazy"
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
