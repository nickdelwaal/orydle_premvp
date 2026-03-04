"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import type { ReactNode } from "react";

interface Principle {
  title: string;
  explanation: string;
  viz: ReactNode;
}

const principles: Principle[] = [
  {
    title: "Architecture-defined permissions",
    explanation:
      "Access policies are derived from the system model, not manually configured.",
    viz: (
      <svg viewBox="0 0 80 60" className="w-full h-full" fill="none">
        <circle cx="15" cy="30" r="5" stroke="rgba(255,255,255,0.15)" strokeWidth="0.6" fill="rgba(255,255,255,0.02)" />
        <rect x="30" y="22" width="20" height="16" rx="3" stroke="rgba(96,165,250,0.25)" strokeWidth="0.6" fill="rgba(96,165,250,0.03)" />
        <circle cx="65" cy="30" r="5" stroke="rgba(74,222,128,0.2)" strokeWidth="0.6" fill="rgba(74,222,128,0.03)" />
        <line x1="20" y1="30" x2="30" y2="30" stroke="rgba(255,255,255,0.08)" strokeWidth="0.5" />
        <line x1="50" y1="30" x2="60" y2="30" stroke="rgba(255,255,255,0.08)" strokeWidth="0.5" />
        <text x="40" y="33" textAnchor="middle" className="text-[5px] font-mono" fill="rgba(96,165,250,0.4)">Policy</text>
      </svg>
    ),
  },
  {
    title: "End-to-end encryption",
    explanation:
      "TLS 1.3 in transit and AES-256 at rest. No unencrypted data paths.",
    viz: (
      <svg viewBox="0 0 80 60" className="w-full h-full" fill="none">
        <path d="M40 10 L58 20 L58 38 Q58 50 40 54 Q22 50 22 38 L22 20 Z" stroke="rgba(255,255,255,0.12)" strokeWidth="0.7" fill="rgba(255,255,255,0.02)" />
        <rect x="32" y="26" width="16" height="12" rx="2" stroke="rgba(255,255,255,0.15)" strokeWidth="0.5" fill="rgba(255,255,255,0.02)" />
        <path d="M36 26V22a4 4 0 018 0v4" stroke="rgba(255,255,255,0.12)" strokeWidth="0.5" fill="none" />
      </svg>
    ),
  },
  {
    title: "Auditability by design",
    explanation:
      "Every architecture change, code generation, and access event is logged immutably.",
    viz: (
      <svg viewBox="0 0 80 60" className="w-full h-full" fill="none">
        <rect x="15" y="10" width="50" height="8" rx="1.5" stroke="rgba(255,255,255,0.1)" strokeWidth="0.5" fill="rgba(255,255,255,0.02)" />
        <rect x="15" y="22" width="50" height="8" rx="1.5" stroke="rgba(255,255,255,0.08)" strokeWidth="0.5" fill="rgba(255,255,255,0.015)" />
        <rect x="15" y="34" width="50" height="8" rx="1.5" stroke="rgba(255,255,255,0.06)" strokeWidth="0.5" fill="rgba(255,255,255,0.01)" />
        <rect x="15" y="46" width="50" height="8" rx="1.5" stroke="rgba(255,255,255,0.04)" strokeWidth="0.5" fill="rgba(255,255,255,0.008)" />
      </svg>
    ),
  },
  {
    title: "Least privilege access",
    explanation:
      "Every user and service gets the minimum permissions needed. Nothing more.",
    viz: (
      <svg viewBox="0 0 80 60" className="w-full h-full" fill="none">
        <circle cx="40" cy="15" r="5" stroke="rgba(255,255,255,0.12)" strokeWidth="0.6" fill="rgba(255,255,255,0.02)" />
        <circle cx="22" cy="40" r="4" stroke="rgba(255,255,255,0.1)" strokeWidth="0.5" fill="rgba(255,255,255,0.015)" />
        <circle cx="40" cy="48" r="4" stroke="rgba(255,255,255,0.1)" strokeWidth="0.5" fill="rgba(255,255,255,0.015)" />
        <circle cx="58" cy="40" r="4" stroke="rgba(255,255,255,0.1)" strokeWidth="0.5" fill="rgba(255,255,255,0.015)" />
        <line x1="40" y1="20" x2="22" y2="36" stroke="rgba(255,255,255,0.06)" strokeWidth="0.5" />
        <line x1="40" y1="20" x2="40" y2="44" stroke="rgba(255,255,255,0.06)" strokeWidth="0.5" />
        <line x1="40" y1="20" x2="58" y2="36" stroke="rgba(255,255,255,0.06)" strokeWidth="0.5" />
      </svg>
    ),
  },
];

export function Principles() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <motion.div
          className="mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <p className="ui-label mb-3">Principles</p>
          <h2 className="editorial-h2 max-w-3xl text-platinum">
            Security <em>architecture</em>
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
              <div className="absolute right-4 top-4 h-16 w-16 opacity-0 transition-opacity duration-300 group-hover:opacity-100 pointer-events-none">
                {p.viz}
              </div>

              <h3 className="editorial-h3 mb-2 text-[1.1rem] text-platinum/85 tracking-wide">
                {p.title}
              </h3>
              <p className="text-[14px] leading-relaxed text-platinum/50 max-w-[85%]">
                {p.explanation}
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
