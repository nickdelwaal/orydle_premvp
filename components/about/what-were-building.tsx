"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const stages = [
    { label: "Visual Builder", description: "Compose services and flows visually" },
    { label: "System Model", description: "Formal, validated architecture graph" },
    { label: "Code Generation", description: "Scaffolding, interfaces, and structure" },
    { label: "AI Evolution", description: "Constrained AI that respects the model" },
];

function PipelineConnector({ delay }: { delay: number }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-40px" });

    return (
        <div ref={ref} className="flex justify-center py-1">
            <svg width="2" height="36" viewBox="0 0 2 36" className="overflow-visible">
                <motion.line
                    x1="1" y1="0" x2="1" y2="36"
                    stroke="rgba(255,255,255,0.08)"
                    strokeWidth="1.5"
                    strokeDasharray="36"
                    initial={{ strokeDashoffset: 36 }}
                    animate={isInView ? { strokeDashoffset: 0 } : {}}
                    transition={{ duration: 0.6, delay, ease: "easeOut" }}
                />
            </svg>
        </div>
    );
}

export function WhatWereBuilding() {
    const ref = useRef<HTMLElement>(null);
    const isInView = useInView(ref, { once: true, margin: "-80px" });

    return (
        <section ref={ref} className="px-6 py-20">
            <div className="mx-auto max-w-2xl">
                <motion.div
                    className="mb-10"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5 }}
                >
                    <p className="ui-label mb-3">Core Product</p>
                    <h2 className="editorial-h2 max-w-3xl text-platinum">
                        What we&apos;re <em>building</em>
                    </h2>
                </motion.div>

                <div className="space-y-0">
                    {stages.map((stage, i) => (
                        <div key={stage.label}>
                            <motion.div
                                className="rounded-2xl border border-white/[0.08] bg-[#0a0908]/40 p-5 md:p-6 backdrop-blur-sm"
                                initial={{ opacity: 0, y: 30 }}
                                animate={isInView ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.5, delay: 0.15 + i * 0.12, ease: "easeOut" }}
                            >
                                <div className="flex items-center gap-4">
                                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gradient-to-b from-[#1a1816] to-[#0f0d0c] border border-white/5">
                                        <span className="font-mono text-[10px] text-platinum/60">
                                            {String(i + 1).padStart(2, "0")}
                                        </span>
                                    </div>
                                    <div>
                                        <h3 className="editorial-h3 text-[1.1rem] text-platinum/85 tracking-wide">
                                            {stage.label}
                                        </h3>
                                        <p className="text-[13.5px] text-platinum/45 mt-0.5">
                                            {stage.description}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>

                            {i < stages.length - 1 && (
                                <PipelineConnector delay={0.2 + i * 0.12} />
                            )}
                        </div>
                    ))}
                </div>

                <motion.div
                    className="mt-8 rounded-xl border border-blue-400/15 bg-blue-400/[0.04] p-4 text-center text-[14px] text-platinum/55"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.7 }}
                >
                    Not a tool. A new way to build.
                </motion.div>
            </div>
        </section>
    );
}
