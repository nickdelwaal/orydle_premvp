"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export function KrumHero() {
  return (
    <section id="hero" className="px-6 pb-18 pt-14 md:pt-18 overflow-hidden">
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
            KRUM — SYSTEM INTELLIGENCE
          </motion.p>
          <h1 className="editorial-h1 mb-6 text-platinum">
            The system is the <em>source of truth</em>. Code follows.
          </h1>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-lg text-[18px] text-platinum/66"
          >
            Design your architecture visually. Generate real code. Enforce alignment across intent, structure, and execution — automatically.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-8 flex flex-row gap-3"
          >
            <Link href="/request-access" className="cta-button">
              Request Early Access
            </Link>
            <Link href="#philosophy" className="btn-pill-ghost px-7 py-3 text-[15px]">
              See how it works ↓
            </Link>
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
          <div className="relative flex aspect-square w-full max-w-[500px] items-center justify-center rounded-2xl border border-white/10 bg-black/40 p-10 shadow-[0_8px_48px_rgba(0,0,0,0.6)] backdrop-blur-xl">
            {/* Animated border ring */}
            <motion.div
              className="absolute pointer-events-none"
              style={{ inset: "-1px", borderRadius: "inherit", border: "1px solid rgba(37,91,252,0.0)" }}
              animate={{ borderColor: ["rgba(37,91,252,0.0)", "rgba(37,91,252,0.3)", "rgba(37,91,252,0.0)"] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />
            {/* Subtle background glows */}
            <div className="absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-electric/25 blur-[100px]" />
            <div className="absolute bottom-10 right-10 h-40 w-40 rounded-full bg-blue-electric/10 blur-[60px]" />

            {/* The SVG Image with continuous floating animation */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ repeat: Infinity, duration: 7, ease: "easeInOut" }}
              className="relative z-10 w-full"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/orydle-node-graph-v4.svg"
                alt="System Architecture Graph"
                className="w-full h-auto drop-shadow-lg"
                style={{ filter: "drop-shadow(0 0 20px rgba(37,91,252,0.2))" }}
                loading="lazy"
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
