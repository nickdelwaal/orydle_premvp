"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import type { ReactNode } from "react";

interface Step {
    label: string;
    description: string;
    icon: ReactNode;
}

const steps: Step[] = [
    {
        label: "Detection",
        description: "Real-time monitoring identifies anomalies and potential threats.",
        icon: (
            <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <circle cx="12" cy="12" r="3" />
                <line x1="12" y1="2" x2="12" y2="5" />
                <line x1="12" y1="19" x2="12" y2="22" />
            </svg>
        ),
    },
    {
        label: "Analysis",
        description: "Security team assesses severity, scope, and potential impact.",
        icon: (
            <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
        ),
    },
    {
        label: "Response",
        description: "Containment and mitigation executed according to runbooks.",
        icon: (
            <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
            </svg>
        ),
    },
    {
        label: "Recovery",
        description: "System restored, root cause documented, defenses strengthened.",
        icon: (
            <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="23 4 23 10 17 10" />
                <path d="M20.49 15a9 9 0 11-2.12-9.36L23 10" />
            </svg>
        ),
    },
];

export function IncidentResponse() {
    const ref = useRef<HTMLElement>(null);
    const isInView = useInView(ref, { once: true, margin: "-80px" });

    return (
        <section ref={ref} className="px-6 py-20">
            <div className="mx-auto max-w-5xl">
                <motion.div
                    className="mb-10"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5 }}
                >
                    <p className="ui-label mb-3">Response</p>
                    <h2 className="editorial-h2 max-w-3xl text-platinum">
                        Incident <em>response</em>
                    </h2>
                </motion.div>

                <div className="relative flex flex-col md:flex-row md:gap-0">
                    {steps.map((step, i) => (
                        <div key={step.label} className="flex flex-1 flex-col md:flex-row md:items-start">
                            <motion.div
                                className="flex flex-col items-center text-center flex-1"
                                initial={{ opacity: 0, y: 20 }}
                                animate={isInView ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.5, delay: 0.15 + i * 0.12 }}
                            >
                                <div className="flex h-11 w-11 items-center justify-center rounded-full border border-white/[0.08] bg-[#0a0908]/60 text-platinum/50 mb-4 backdrop-blur-sm">
                                    {step.icon}
                                </div>
                                <span className="mb-1.5 font-mono text-[10px] text-platinum/30 tracking-widest">
                                    {String(i + 1).padStart(2, "0")}
                                </span>
                                <h3 className="mb-1 text-[15px] font-medium text-platinum/80 tracking-wide">
                                    {step.label}
                                </h3>
                                <p className="max-w-[170px] text-[13px] leading-relaxed text-platinum/40">
                                    {step.description}
                                </p>
                            </motion.div>

                            {i < steps.length - 1 && (
                                <motion.div
                                    className="hidden md:flex items-center justify-center self-start mt-5 px-1"
                                    initial={{ opacity: 0 }}
                                    animate={isInView ? { opacity: 1 } : {}}
                                    transition={{ duration: 0.4, delay: 0.3 + i * 0.12 }}
                                >
                                    <svg width="36" height="2" viewBox="0 0 36 2" className="text-white/[0.08]">
                                        <line x1="0" y1="1" x2="36" y2="1" stroke="currentColor" strokeWidth="1" strokeDasharray="4 3" />
                                    </svg>
                                </motion.div>
                            )}

                            {i < steps.length - 1 && (
                                <motion.div
                                    className="flex md:hidden justify-center py-3"
                                    initial={{ opacity: 0 }}
                                    animate={isInView ? { opacity: 1 } : {}}
                                    transition={{ duration: 0.4, delay: 0.3 + i * 0.12 }}
                                >
                                    <svg width="2" height="20" viewBox="0 0 2 20">
                                        <line x1="1" y1="0" x2="1" y2="20" stroke="rgba(255,255,255,0.06)" strokeWidth="1" strokeDasharray="4 3" />
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
