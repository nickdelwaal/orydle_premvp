"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import type { ReactNode } from "react";

interface Principle {
  title: string;
  detail: string;
  viz: ReactNode;
}

const principles: Principle[] = [
  {
    title: "Architecture is the system",
    detail:
      "Not documentation. Not diagrams. A formal model that governs your system.",
    viz: (
      <svg viewBox="0 0 80 60" className="w-full h-full" fill="none">
        <circle cx="40" cy="18" r="5" stroke="rgba(255,255,255,0.15)" strokeWidth="0.7" fill="rgba(255,255,255,0.02)" />
        <circle cx="20" cy="45" r="4" stroke="rgba(255,255,255,0.12)" strokeWidth="0.7" fill="rgba(255,255,255,0.02)" />
        <circle cx="60" cy="45" r="4" stroke="rgba(255,255,255,0.12)" strokeWidth="0.7" fill="rgba(255,255,255,0.02)" />
        <line x1="40" y1="23" x2="20" y2="41" stroke="rgba(255,255,255,0.06)" strokeWidth="0.6" />
        <line x1="40" y1="23" x2="60" y2="41" stroke="rgba(255,255,255,0.06)" strokeWidth="0.6" />
        <line x1="20" y1="45" x2="60" y2="45" stroke="rgba(255,255,255,0.04)" strokeWidth="0.6" strokeDasharray="3 2" />
      </svg>
    ),
  },
  {
    title: "Models generate code",
    detail:
      "Structured visual composition can be more precise than code for system design.",
    viz: (
      <svg viewBox="0 0 80 60" className="w-full h-full" fill="none">
        <rect x="10" y="10" width="26" height="12" rx="2" stroke="rgba(255,255,255,0.12)" strokeWidth="0.6" fill="rgba(255,255,255,0.02)" />
        <rect x="44" y="10" width="26" height="12" rx="2" stroke="rgba(255,255,255,0.12)" strokeWidth="0.6" fill="rgba(255,255,255,0.02)" />
        <rect x="27" y="40" width="26" height="12" rx="2" stroke="rgba(255,255,255,0.1)" strokeWidth="0.6" fill="rgba(255,255,255,0.02)" />
        <line x1="23" y1="22" x2="40" y2="40" stroke="rgba(255,255,255,0.05)" strokeWidth="0.6" />
        <line x1="57" y1="22" x2="40" y2="40" stroke="rgba(255,255,255,0.05)" strokeWidth="0.6" />
      </svg>
    ),
  },
  {
    title: "Systems must stay aligned",
    detail:
      "AI assistance is powerful when bounded by architectural rules. Dangerous when unbounded.",
    viz: (
      <svg viewBox="0 0 80 60" className="w-full h-full" fill="none">
        <circle cx="40" cy="30" r="20" stroke="rgba(255,255,255,0.06)" strokeWidth="0.5" fill="none" />
        <circle cx="40" cy="30" r="12" stroke="rgba(255,255,255,0.1)" strokeWidth="0.6" fill="none" />
        <circle cx="40" cy="30" r="4" stroke="rgba(168,140,255,0.3)" strokeWidth="0.7" fill="rgba(168,140,255,0.05)" />
        <circle cx="40" cy="10" r="2.5" fill="rgba(96,165,250,0.15)" stroke="rgba(96,165,250,0.3)" strokeWidth="0.5" />
        <circle cx="23" cy="44" r="2.5" fill="rgba(96,165,250,0.12)" stroke="rgba(96,165,250,0.25)" strokeWidth="0.5" />
        <circle cx="57" cy="44" r="2.5" fill="rgba(74,222,128,0.12)" stroke="rgba(74,222,128,0.25)" strokeWidth="0.5" />
      </svg>
    ),
  },
  {
    title: "Software should evolve safely",
    detail:
      "Systems that stay understood enable faster, safer evolution. Confusion compounds into paralysis.",
    viz: (
      <svg viewBox="0 0 80 60" className="w-full h-full" fill="none">
        <path d="M40 6 L62 18 L62 38 Q62 52 40 56 Q18 52 18 38 L18 18 Z" stroke="rgba(255,255,255,0.1)" strokeWidth="0.7" fill="rgba(255,255,255,0.02)" />
        <line x1="30" y1="30" x2="37" y2="37" stroke="rgba(74,222,128,0.35)" strokeWidth="1" strokeLinecap="round" />
        <line x1="37" y1="37" x2="52" y2="23" stroke="rgba(74,222,128,0.35)" strokeWidth="1" strokeLinecap="round" />
      </svg>
    ),
  },
];

export function Founders() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <motion.div
          className="mb-10 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <p className="ui-label mb-3">Beliefs</p>
          <h2 className="editorial-h2 text-platinum">
            Our <em>principles</em>
          </h2>
        </motion.div>

        <motion.div
          className="grid gap-5 sm:grid-cols-2"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {principles.map((p) => (
            <article
              key={p.title}
              className="group relative overflow-hidden rounded-xl border border-white/[0.06] bg-gradient-to-br from-white/[0.02] to-transparent p-6 backdrop-blur-sm transition-all duration-[250ms] ease-out hover:-translate-y-1 hover:border-white/[0.12] hover:shadow-[0_6px_24px_rgba(0,0,0,0.1)]"
            >
              {/* Hover SVG */}
              <div className="absolute right-4 top-4 h-16 w-16 opacity-0 transition-opacity duration-300 group-hover:opacity-100 pointer-events-none">
                {p.viz}
              </div>

              <h3 className="editorial-h3 mb-2 text-[1.15rem] text-platinum/90 tracking-wide">
                {p.title}
              </h3>
              <p className="text-[14.5px] leading-relaxed text-platinum/50 max-w-[85%]">
                {p.detail}
              </p>

              <div className="mt-5">
                <div className="h-px w-full bg-gradient-to-r from-transparent via-white/[0.03] to-transparent group-hover:via-white/[0.08] transition-all duration-300" />
              </div>
            </article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
