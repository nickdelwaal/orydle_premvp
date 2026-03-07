"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const scenarios = [
    {
        layer: "Intent Layer",
        number: "01",
        trigger: "You change what the system must do",
        outcomes: [
            "Structure updates to reflect new requirements",
            "Execution scaffolding regenerates to match",
        ],
        rejection: "System flags conflicts and requires resolution before proceeding",
        color: "rgba(168,140,255,0.15)",
        borderColor: "rgba(168,140,255,0.2)",
    },
    {
        layer: "Structure Layer",
        number: "02",
        trigger: "You change how the system is composed",
        outcomes: [
            "Intent validation runs automatically",
            "Execution code updates to match new structure",
        ],
        rejection: "Dependency violations surface immediately with explanation",
        color: "rgba(37,91,252,0.1)",
        borderColor: "rgba(37,91,252,0.2)",
    },
    {
        layer: "Execution Layer",
        number: "03",
        trigger: "You change the running code",
        outcomes: [
            "Structure consistency check runs",
            "Intent alignment is verified",
        ],
        rejection: "Change is rejected with a clear explanation of what it violates",
        color: "rgba(74,222,128,0.06)",
        borderColor: "rgba(74,222,128,0.15)",
    },
];

export function HowChangesPropagate() {
    const ref = useRef<HTMLElement>(null);
    const isInView = useInView(ref, { once: true, margin: "-80px" });

    return (
        <section ref={ref} className="px-6 py-20">
            <div className="mx-auto max-w-5xl">
                {/* Header */}
                <motion.div
                    className="mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5 }}
                >
                    <p className="ui-label mb-3">HOW ALIGNMENT WORKS</p>
                    <h2 className="editorial-h2 max-w-2xl text-platinum">
                        Changes propagate or get <em>rejected</em>
                    </h2>
                    <p className="mt-4 max-w-xl text-[17px] leading-relaxed text-platinum/55">
                        This isn&apos;t CI/CD. This is architectural governance as a first-class system.
                    </p>
                </motion.div>

                {/* Three scenario cards */}
                <div className="grid gap-5 md:grid-cols-3">
                    {scenarios.map((s, i) => (
                        <motion.article
                            key={s.layer}
                            className="group relative flex flex-col overflow-hidden rounded-2xl border bg-[#0a0908]/40 p-6 backdrop-blur-sm transition-all duration-[250ms] ease-out hover:-translate-y-1"
                            style={{ borderColor: s.borderColor }}
                            initial={{ opacity: 0, y: 24 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.5, delay: 0.1 + i * 0.12, ease: "easeOut" }}
                        >
                            {/* Subtle layer color tint on hover */}
                            <div
                                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-2xl"
                                style={{ background: `radial-gradient(ellipse at 50% 0%, ${s.color}, transparent 70%)` }}
                            />

                            {/* Number + layer name */}
                            <div className="relative z-10 mb-5 flex items-center gap-3">
                                <span className="font-mono text-[11px] text-platinum/30">{s.number}</span>
                                <span className="font-mono text-[11px] uppercase tracking-[0.12em] text-platinum/50">
                                    {s.layer}
                                </span>
                            </div>

                            {/* Trigger */}
                            <p className="relative z-10 mb-5 font-[var(--font-display)] text-[1rem] font-light leading-snug text-platinum/75">
                                {s.trigger}
                            </p>

                            {/* Outcomes */}
                            <div className="relative z-10 mb-5 space-y-2">
                                {s.outcomes.map((outcome) => (
                                    <p key={outcome} className="flex items-start gap-2 text-[13.5px] text-platinum/55">
                                        <span className="mt-[5px] shrink-0 text-platinum/30">→</span>
                                        {outcome}
                                    </p>
                                ))}
                            </div>

                            {/* Divider */}
                            <div className="relative z-10 my-4 border-t border-white/6" />

                            {/* Rejection case */}
                            <div className="relative z-10 mt-auto">
                                <p className="mb-1.5 font-mono text-[10px] uppercase tracking-[0.12em] text-platinum/30">
                                    OR
                                </p>
                                <p className="text-[13px] leading-relaxed text-platinum/40 italic font-[var(--font-display)]">
                                    {s.rejection}
                                </p>
                            </div>
                        </motion.article>
                    ))}
                </div>
            </div>
        </section>
    );
}
