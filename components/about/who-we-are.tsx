"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import type { ReactNode } from "react";

interface Role {
    title: string;
    focus: string;
    viz: ReactNode;
}

const roles: Role[] = [
    {
        title: "System Architecture",
        focus: "Designing software as structured systems.",
        viz: (
            <svg viewBox="0 0 60 50" className="w-full h-full" fill="none">
                <circle cx="30" cy="12" r="4" stroke="rgba(255,255,255,0.12)" strokeWidth="0.6" fill="rgba(255,255,255,0.02)" />
                <circle cx="14" cy="38" r="3" stroke="rgba(255,255,255,0.1)" strokeWidth="0.6" fill="rgba(255,255,255,0.02)" />
                <circle cx="46" cy="38" r="3" stroke="rgba(255,255,255,0.1)" strokeWidth="0.6" fill="rgba(255,255,255,0.02)" />
                <line x1="30" y1="16" x2="14" y2="35" stroke="rgba(255,255,255,0.06)" strokeWidth="0.5" />
                <line x1="30" y1="16" x2="46" y2="35" stroke="rgba(255,255,255,0.06)" strokeWidth="0.5" />
            </svg>
        ),
    },
    {
        title: "Platform Engineering",
        focus: "Building reliable infrastructure for system-first development.",
        viz: (
            <svg viewBox="0 0 60 50" className="w-full h-full" fill="none">
                <rect x="8" y="8" width="20" height="10" rx="2" stroke="rgba(255,255,255,0.1)" strokeWidth="0.5" fill="rgba(255,255,255,0.02)" />
                <rect x="32" y="8" width="20" height="10" rx="2" stroke="rgba(255,255,255,0.1)" strokeWidth="0.5" fill="rgba(255,255,255,0.02)" />
                <rect x="20" y="32" width="20" height="10" rx="2" stroke="rgba(255,255,255,0.08)" strokeWidth="0.5" fill="rgba(255,255,255,0.02)" />
                <line x1="18" y1="18" x2="30" y2="32" stroke="rgba(255,255,255,0.04)" strokeWidth="0.5" />
                <line x1="42" y1="18" x2="30" y2="32" stroke="rgba(255,255,255,0.04)" strokeWidth="0.5" />
            </svg>
        ),
    },
    {
        title: "AI Systems",
        focus: "Constraining AI with architectural rules for safe assistance.",
        viz: (
            <svg viewBox="0 0 60 50" className="w-full h-full" fill="none">
                <circle cx="30" cy="25" r="14" stroke="rgba(255,255,255,0.06)" strokeWidth="0.5" fill="none" />
                <circle cx="30" cy="25" r="6" stroke="rgba(168,140,255,0.2)" strokeWidth="0.6" fill="rgba(168,140,255,0.03)" />
                <circle cx="30" cy="11" r="2" fill="rgba(96,165,250,0.15)" stroke="rgba(96,165,250,0.25)" strokeWidth="0.4" />
                <circle cx="18" cy="34" r="2" fill="rgba(96,165,250,0.1)" stroke="rgba(96,165,250,0.2)" strokeWidth="0.4" />
                <circle cx="42" cy="34" r="2" fill="rgba(74,222,128,0.1)" stroke="rgba(74,222,128,0.2)" strokeWidth="0.4" />
            </svg>
        ),
    },
    {
        title: "Developer Experience",
        focus: "Making architecture accessible through intuitive interfaces.",
        viz: (
            <svg viewBox="0 0 60 50" className="w-full h-full" fill="none">
                <polyline points="12,30 22,20 32,30" stroke="rgba(255,255,255,0.12)" strokeWidth="0.7" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                <polyline points="28,30 38,20 48,30" stroke="rgba(255,255,255,0.12)" strokeWidth="0.7" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                <line x1="22" y1="36" x2="38" y2="36" stroke="rgba(255,255,255,0.06)" strokeWidth="0.5" />
            </svg>
        ),
    },
];

export function WhoWeAre() {
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
                    <p className="ui-label mb-3">Team</p>
                    <h2 className="editorial-h2 max-w-3xl text-platinum">
                        Who we <em>are</em>
                    </h2>
                </motion.div>

                <motion.div
                    className="grid gap-5 sm:grid-cols-2"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.1 }}
                >
                    {roles.map((r) => (
                        <article
                            key={r.title}
                            className="group relative overflow-hidden rounded-xl border border-white/[0.06] bg-gradient-to-br from-white/[0.02] to-transparent p-6 backdrop-blur-sm transition-all duration-[250ms] ease-out hover:-translate-y-1 hover:border-white/[0.12] hover:shadow-[0_6px_24px_rgba(0,0,0,0.1)]"
                        >
                            {/* Hover diagram */}
                            <div className="absolute right-4 top-4 h-14 w-14 opacity-0 transition-opacity duration-300 group-hover:opacity-100 pointer-events-none">
                                {r.viz}
                            </div>

                            <h3 className="editorial-h3 mb-2 text-[1.1rem] text-platinum/85 tracking-wide">
                                {r.title}
                            </h3>
                            <p className="text-[14px] leading-relaxed text-platinum/50">
                                {r.focus}
                            </p>
                        </article>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
