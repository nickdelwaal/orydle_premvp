"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import type { ReactNode } from "react";

/* ── Outcome Data ────────────────────────────────────────── */
interface Outcome {
    headline: string;
    explanation: string;
    viz: ReactNode;
}

const outcomes: Outcome[] = [
    {
        headline: "Deterministic architecture",
        explanation:
            "Every system change produces predictable, validated structural output — no surprise side effects.",
        viz: (
            <svg viewBox="0 0 80 60" className="w-full h-full" fill="none">
                <circle cx="40" cy="15" r="5" stroke="rgba(255,255,255,0.18)" strokeWidth="0.8" fill="rgba(255,255,255,0.03)" />
                <circle cx="20" cy="45" r="4" stroke="rgba(255,255,255,0.14)" strokeWidth="0.8" fill="rgba(255,255,255,0.02)" />
                <circle cx="60" cy="45" r="4" stroke="rgba(255,255,255,0.14)" strokeWidth="0.8" fill="rgba(255,255,255,0.02)" />
                <line x1="40" y1="20" x2="20" y2="41" stroke="rgba(255,255,255,0.08)" strokeWidth="0.7" />
                <line x1="40" y1="20" x2="60" y2="41" stroke="rgba(255,255,255,0.08)" strokeWidth="0.7" />
                <line x1="20" y1="45" x2="60" y2="45" stroke="rgba(255,255,255,0.05)" strokeWidth="0.7" strokeDasharray="3 2" />
            </svg>
        ),
    },
    {
        headline: "Safe refactoring",
        explanation:
            "Every structural edit is validated against the system model before it reaches code.",
        viz: (
            <svg viewBox="0 0 80 60" className="w-full h-full" fill="none">
                <path d="M40 5 L65 18 L65 38 Q65 52 40 57 Q15 52 15 38 L15 18 Z" stroke="rgba(255,255,255,0.12)" strokeWidth="0.8" fill="rgba(255,255,255,0.02)" />
                <line x1="28" y1="30" x2="36" y2="38" stroke="rgba(74,222,128,0.4)" strokeWidth="1.2" strokeLinecap="round" />
                <line x1="36" y1="38" x2="54" y2="22" stroke="rgba(74,222,128,0.4)" strokeWidth="1.2" strokeLinecap="round" />
            </svg>
        ),
    },
    {
        headline: "Architecture as data",
        explanation:
            "Your system structure is a queryable graph — search it, validate it, generate from it.",
        viz: (
            <svg viewBox="0 0 80 60" className="w-full h-full" fill="none">
                <rect x="8" y="8" width="28" height="10" rx="2" stroke="rgba(255,255,255,0.13)" strokeWidth="0.7" fill="rgba(255,255,255,0.02)" />
                <rect x="44" y="8" width="28" height="10" rx="2" stroke="rgba(255,255,255,0.13)" strokeWidth="0.7" fill="rgba(255,255,255,0.02)" />
                <rect x="8" y="26" width="28" height="10" rx="2" stroke="rgba(255,255,255,0.1)" strokeWidth="0.7" fill="rgba(255,255,255,0.02)" />
                <rect x="44" y="26" width="28" height="10" rx="2" stroke="rgba(255,255,255,0.1)" strokeWidth="0.7" fill="rgba(255,255,255,0.02)" />
                <rect x="26" y="44" width="28" height="10" rx="2" stroke="rgba(255,255,255,0.08)" strokeWidth="0.7" fill="rgba(255,255,255,0.02)" />
                <line x1="22" y1="18" x2="22" y2="26" stroke="rgba(255,255,255,0.06)" strokeWidth="0.6" />
                <line x1="58" y1="18" x2="58" y2="26" stroke="rgba(255,255,255,0.06)" strokeWidth="0.6" />
                <line x1="22" y1="36" x2="40" y2="44" stroke="rgba(255,255,255,0.04)" strokeWidth="0.6" />
                <line x1="58" y1="36" x2="40" y2="44" stroke="rgba(255,255,255,0.04)" strokeWidth="0.6" />
            </svg>
        ),
    },
    {
        headline: "Continuous alignment",
        explanation:
            "Intent, structure, and code stay synchronized — not by discipline, but by design.",
        viz: (
            <svg viewBox="0 0 80 60" className="w-full h-full" fill="none">
                <circle cx="40" cy="30" r="22" stroke="rgba(255,255,255,0.06)" strokeWidth="0.6" fill="none" />
                <circle cx="40" cy="30" r="14" stroke="rgba(255,255,255,0.1)" strokeWidth="0.7" fill="none" />
                <circle cx="40" cy="30" r="5" stroke="rgba(168,140,255,0.35)" strokeWidth="0.8" fill="rgba(168,140,255,0.06)" />
                <circle cx="40" cy="8" r="3" stroke="rgba(96,165,250,0.35)" strokeWidth="0.7" fill="rgba(96,165,250,0.06)" />
                <circle cx="20" cy="44" r="3" stroke="rgba(96,165,250,0.3)" strokeWidth="0.7" fill="rgba(96,165,250,0.05)" />
                <circle cx="60" cy="44" r="3" stroke="rgba(74,222,128,0.3)" strokeWidth="0.7" fill="rgba(74,222,128,0.05)" />
                <line x1="40" y1="11" x2="40" y2="25" stroke="rgba(255,255,255,0.06)" strokeWidth="0.6" />
                <line x1="23" y1="42" x2="35" y2="33" stroke="rgba(255,255,255,0.06)" strokeWidth="0.6" />
                <line x1="57" y1="42" x2="45" y2="33" stroke="rgba(255,255,255,0.06)" strokeWidth="0.6" />
            </svg>
        ),
    },
];

export function WorkflowPractice() {
    const ref = useRef<HTMLElement>(null);
    const isInView = useInView(ref, { once: true, margin: "-80px" });

    return (
        <section ref={ref} className="px-6 pb-24 pt-12">
            <div className="mx-auto max-w-6xl">
                {/* Header */}
                <motion.div
                    className="mb-10 text-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5 }}
                >
                    <p className="ui-label mb-3">Outcomes</p>
                    <h2 className="editorial-h2 text-platinum">
                        What this <em>enables</em>
                    </h2>
                </motion.div>

                {/* 2×2 Outcome Grid */}
                <motion.div
                    className="grid gap-5 sm:grid-cols-2"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.1 }}
                >
                    {outcomes.map((o) => (
                        <article
                            key={o.headline}
                            className="group relative overflow-hidden rounded-xl border border-white/[0.06] bg-gradient-to-br from-white/[0.02] to-transparent p-6 backdrop-blur-sm transition-all duration-[250ms] ease-out hover:-translate-y-1 hover:border-white/[0.12] hover:shadow-[0_6px_24px_rgba(0,0,0,0.1)]"
                        >
                            {/* Hover SVG visualization */}
                            <div className="absolute right-4 top-4 h-16 w-16 opacity-0 transition-opacity duration-300 group-hover:opacity-100 pointer-events-none">
                                {o.viz}
                            </div>

                            <h3 className="editorial-h3 mb-2 text-[1.15rem] text-platinum/90 tracking-wide">
                                {o.headline}
                            </h3>
                            <p className="text-[14.5px] leading-relaxed text-platinum/50 font-normal max-w-[85%]">
                                {o.explanation}
                            </p>

                            {/* Bottom accent */}
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
