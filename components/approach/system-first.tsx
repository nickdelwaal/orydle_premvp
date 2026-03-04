"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

/* ── Principle Cards Data ──────────────────────────────────── */
const principles = [
    {
        title: "System is truth",
        description:
            "The system model is the single source of truth. Everything else is derived.",
        // Dependency graph mini-viz
        viz: (
            <svg viewBox="0 0 100 80" className="w-full h-full" fill="none">
                <circle cx="50" cy="20" r="6" stroke="rgba(255,255,255,0.2)" strokeWidth="1" fill="rgba(255,255,255,0.03)" />
                <circle cx="25" cy="55" r="5" stroke="rgba(255,255,255,0.15)" strokeWidth="1" fill="rgba(255,255,255,0.02)" />
                <circle cx="75" cy="55" r="5" stroke="rgba(255,255,255,0.15)" strokeWidth="1" fill="rgba(255,255,255,0.02)" />
                <circle cx="50" cy="70" r="4" stroke="rgba(255,255,255,0.12)" strokeWidth="1" fill="rgba(255,255,255,0.02)" />
                <line x1="50" y1="26" x2="25" y2="50" stroke="rgba(255,255,255,0.08)" strokeWidth="0.8" />
                <line x1="50" y1="26" x2="75" y2="50" stroke="rgba(255,255,255,0.08)" strokeWidth="0.8" />
                <line x1="25" y1="60" x2="50" y2="66" stroke="rgba(255,255,255,0.06)" strokeWidth="0.8" />
                <line x1="75" y1="60" x2="50" y2="66" stroke="rgba(255,255,255,0.06)" strokeWidth="0.8" />
            </svg>
        ),
    },
    {
        title: "Architecture is data",
        description:
            "Your architecture is a queryable, structured graph — not a diagram on a wall.",
        // Node structure mini-viz
        viz: (
            <svg viewBox="0 0 100 80" className="w-full h-full" fill="none">
                <rect x="10" y="10" width="35" height="14" rx="3" stroke="rgba(255,255,255,0.15)" strokeWidth="0.8" fill="rgba(255,255,255,0.02)" />
                <rect x="55" y="10" width="35" height="14" rx="3" stroke="rgba(255,255,255,0.15)" strokeWidth="0.8" fill="rgba(255,255,255,0.02)" />
                <rect x="10" y="35" width="35" height="14" rx="3" stroke="rgba(255,255,255,0.12)" strokeWidth="0.8" fill="rgba(255,255,255,0.02)" />
                <rect x="55" y="35" width="35" height="14" rx="3" stroke="rgba(255,255,255,0.12)" strokeWidth="0.8" fill="rgba(255,255,255,0.02)" />
                <rect x="32" y="58" width="36" height="14" rx="3" stroke="rgba(255,255,255,0.1)" strokeWidth="0.8" fill="rgba(255,255,255,0.02)" />
                <line x1="27" y1="24" x2="27" y2="35" stroke="rgba(255,255,255,0.06)" strokeWidth="0.8" />
                <line x1="72" y1="24" x2="72" y2="35" stroke="rgba(255,255,255,0.06)" strokeWidth="0.8" />
                <line x1="27" y1="49" x2="50" y2="58" stroke="rgba(255,255,255,0.05)" strokeWidth="0.8" />
                <line x1="72" y1="49" x2="50" y2="58" stroke="rgba(255,255,255,0.05)" strokeWidth="0.8" />
            </svg>
        ),
    },
    {
        title: "Code follows model",
        description:
            "Code is generated from the system model. Structure comes before syntax.",
        // Architecture tree mini-viz
        viz: (
            <svg viewBox="0 0 100 80" className="w-full h-full" fill="none">
                <circle cx="50" cy="12" r="5" stroke="rgba(255,255,255,0.18)" strokeWidth="0.8" fill="rgba(255,255,255,0.03)" />
                <circle cx="25" cy="40" r="4" stroke="rgba(255,255,255,0.14)" strokeWidth="0.8" fill="rgba(255,255,255,0.02)" />
                <circle cx="75" cy="40" r="4" stroke="rgba(255,255,255,0.14)" strokeWidth="0.8" fill="rgba(255,255,255,0.02)" />
                <circle cx="12" cy="65" r="3" stroke="rgba(255,255,255,0.1)" strokeWidth="0.8" fill="rgba(255,255,255,0.02)" />
                <circle cx="38" cy="65" r="3" stroke="rgba(255,255,255,0.1)" strokeWidth="0.8" fill="rgba(255,255,255,0.02)" />
                <circle cx="62" cy="65" r="3" stroke="rgba(255,255,255,0.1)" strokeWidth="0.8" fill="rgba(255,255,255,0.02)" />
                <circle cx="88" cy="65" r="3" stroke="rgba(255,255,255,0.1)" strokeWidth="0.8" fill="rgba(255,255,255,0.02)" />
                <line x1="50" y1="17" x2="25" y2="36" stroke="rgba(255,255,255,0.07)" strokeWidth="0.8" />
                <line x1="50" y1="17" x2="75" y2="36" stroke="rgba(255,255,255,0.07)" strokeWidth="0.8" />
                <line x1="25" y1="44" x2="12" y2="62" stroke="rgba(255,255,255,0.05)" strokeWidth="0.8" />
                <line x1="25" y1="44" x2="38" y2="62" stroke="rgba(255,255,255,0.05)" strokeWidth="0.8" />
                <line x1="75" y1="44" x2="62" y2="62" stroke="rgba(255,255,255,0.05)" strokeWidth="0.8" />
                <line x1="75" y1="44" x2="88" y2="62" stroke="rgba(255,255,255,0.05)" strokeWidth="0.8" />
            </svg>
        ),
    },
    {
        title: "Alignment is enforced",
        description:
            "Validation rules baked into the model ensure code never diverges from intent.",
        // Constraint/shield mini-viz
        viz: (
            <svg viewBox="0 0 100 80" className="w-full h-full" fill="none">
                <path d="M50 8 L80 22 L80 48 Q80 68 50 75 Q20 68 20 48 L20 22 Z" stroke="rgba(255,255,255,0.12)" strokeWidth="0.8" fill="rgba(255,255,255,0.02)" />
                <line x1="35" y1="38" x2="47" y2="50" stroke="rgba(255,255,255,0.18)" strokeWidth="1.2" strokeLinecap="round" />
                <line x1="47" y1="50" x2="67" y2="30" stroke="rgba(255,255,255,0.18)" strokeWidth="1.2" strokeLinecap="round" />
                <circle cx="50" cy="40" r="18" stroke="rgba(255,255,255,0.05)" strokeWidth="0.6" fill="none" />
            </svg>
        ),
    },
];

export function SystemFirst() {
    const ref = useRef<HTMLElement>(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section ref={ref} className="px-6 py-24">
            <div className="mx-auto max-w-6xl">
                {/* Header */}
                <motion.div
                    className="mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5 }}
                >
                    <p className="ui-label mb-3">Philosophy</p>
                    <h2 className="editorial-h2 max-w-3xl text-platinum">
                        System-first, not <em>prompt-first</em>
                    </h2>
                    <p className="mt-4 max-w-2xl text-[18px] leading-relaxed text-platinum/60">
                        Most tools start with a prompt. We start with the system. These
                        principles define how Krum thinks.
                    </p>
                </motion.div>

                {/* Principle Cards Grid */}
                <motion.div
                    className="grid gap-5 sm:grid-cols-2"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.1 }}
                >
                    {principles.map((p) => (
                        <article
                            key={p.title}
                            className="group relative flex flex-col overflow-hidden rounded-2xl border border-white/[0.08] bg-[#0a0908]/40 p-6 backdrop-blur-sm transition-all duration-[250ms] ease-out hover:-translate-y-1 hover:border-white/[0.15] hover:shadow-[0_8px_30px_rgba(0,0,0,0.12)]"
                        >
                            {/* Hover visualization overlay */}
                            <div className="absolute right-4 top-4 h-20 w-20 opacity-0 transition-opacity duration-300 group-hover:opacity-100 pointer-events-none">
                                {p.viz}
                            </div>

                            <h3 className="editorial-h3 mb-3 text-[1.2rem] text-platinum/90 tracking-wide">
                                {p.title}
                            </h3>

                            <p className="text-[15px] leading-relaxed text-platinum/55 font-normal">
                                {p.description}
                            </p>

                            {/* Subtle bottom accent line on hover */}
                            <div className="mt-auto pt-5">
                                <div className="h-px w-full bg-gradient-to-r from-transparent via-white/[0.04] to-transparent group-hover:via-white/[0.1] transition-all duration-300" />
                            </div>
                        </article>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
