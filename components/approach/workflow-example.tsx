"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import type { ReactNode } from "react";

/* ── Step Data ───────────────────────────────────────────── */
interface Step {
    label: string;
    description: string;
    icon: ReactNode;
}

const steps: Step[] = [
    {
        label: "Design system",
        description: "Compose services, boundaries, and flows visually.",
        icon: (
            <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="3" width="7" height="7" rx="1" />
                <rect x="14" y="3" width="7" height="7" rx="1" />
                <rect x="3" y="14" width="7" height="7" rx="1" />
                <rect x="14" y="14" width="7" height="7" rx="1" />
            </svg>
        ),
    },
    {
        label: "Generate architecture",
        description: "System model forms a validated dependency graph.",
        icon: (
            <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="5" r="3" />
                <circle cx="5" cy="19" r="3" />
                <circle cx="19" cy="19" r="3" />
                <line x1="12" y1="8" x2="5" y2="16" />
                <line x1="12" y1="8" x2="19" y2="16" />
            </svg>
        ),
    },
    {
        label: "Generate code",
        description: "Scaffolding, interfaces, and structure — ready to extend.",
        icon: (
            <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="16 18 22 12 16 6" />
                <polyline points="8 6 2 12 8 18" />
                <line x1="14" y1="4" x2="10" y2="20" />
            </svg>
        ),
    },
    {
        label: "Validate changes",
        description: "Every edit is checked against the system model.",
        icon: (
            <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2l7 4v6c0 5.25-3.5 9.74-7 11-3.5-1.26-7-5.75-7-11V6l7-4z" />
                <polyline points="9 12 11 14 15 10" />
            </svg>
        ),
    },
];

export function WorkflowExample() {
    const ref = useRef<HTMLElement>(null);
    const isInView = useInView(ref, { once: true, margin: "-80px" });

    return (
        <section ref={ref} className="px-6 py-20">
            <div className="mx-auto max-w-5xl">
                {/* Header */}
                <motion.div
                    className="mb-12 text-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5 }}
                >
                    <p className="ui-label mb-3">In Practice</p>
                    <h2 className="editorial-h2 text-platinum">
                        Workflow <em>example</em>
                    </h2>
                </motion.div>

                {/* Horizontal Timeline */}
                <div className="relative flex flex-col md:flex-row md:items-start md:gap-0">
                    {steps.map((step, i) => (
                        <div key={step.label} className="flex flex-1 flex-col md:flex-row md:items-start">
                            {/* Step card */}
                            <motion.div
                                className="flex flex-col items-center text-center flex-1"
                                initial={{ opacity: 0, y: 20 }}
                                animate={isInView ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.5, delay: 0.15 + i * 0.12 }}
                            >
                                {/* Icon circle */}
                                <div className="flex h-12 w-12 items-center justify-center rounded-full border border-white/[0.08] bg-[#0a0908]/60 text-platinum/60 mb-4 backdrop-blur-sm">
                                    {step.icon}
                                </div>

                                {/* Number */}
                                <span className="mb-2 font-mono text-[10px] text-platinum/30 tracking-widest">
                                    {String(i + 1).padStart(2, "0")}
                                </span>

                                {/* Label */}
                                <h3 className="mb-1.5 text-[15px] font-medium text-platinum/85 tracking-wide">
                                    {step.label}
                                </h3>

                                {/* Description */}
                                <p className="max-w-[180px] text-[13px] leading-relaxed text-platinum/45 font-normal">
                                    {step.description}
                                </p>
                            </motion.div>

                            {/* Connector line (not after last step) */}
                            {i < steps.length - 1 && (
                                <motion.div
                                    className="hidden md:flex items-center justify-center self-start mt-6 px-1"
                                    initial={{ opacity: 0 }}
                                    animate={isInView ? { opacity: 1 } : {}}
                                    transition={{ duration: 0.4, delay: 0.3 + i * 0.12 }}
                                >
                                    <svg width="40" height="2" viewBox="0 0 40 2" className="text-white/[0.08]">
                                        <line x1="0" y1="1" x2="40" y2="1" stroke="currentColor" strokeWidth="1" strokeDasharray="4 3" />
                                    </svg>
                                </motion.div>
                            )}

                            {/* Mobile vertical connector */}
                            {i < steps.length - 1 && (
                                <motion.div
                                    className="flex md:hidden justify-center py-3"
                                    initial={{ opacity: 0 }}
                                    animate={isInView ? { opacity: 1 } : {}}
                                    transition={{ duration: 0.4, delay: 0.3 + i * 0.12 }}
                                >
                                    <svg width="2" height="24" viewBox="0 0 2 24">
                                        <line x1="1" y1="0" x2="1" y2="24" stroke="rgba(255,255,255,0.06)" strokeWidth="1" strokeDasharray="4 3" />
                                    </svg>
                                </motion.div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
