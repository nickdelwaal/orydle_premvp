"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

/* ── Data Flow Nodes ────────────────────────────────────── */
const flowNodes = [
    { cx: 100, cy: 30, label: "Client" },
    { cx: 100, cy: 95, label: "TLS 1.3" },
    { cx: 100, cy: 160, label: "Services" },
    { cx: 100, cy: 225, label: "AES-256" },
];

const flowEdges = [
    { x1: 100, y1: 42, x2: 100, y2: 83 },
    { x1: 100, y1: 107, x2: 100, y2: 148 },
    { x1: 100, y1: 172, x2: 100, y2: 213 },
];

const explanations = [
    "All data transmitted between clients and Orydle services is encrypted end-to-end using TLS 1.3.",
    "System models are stored in isolated, access-controlled environments with AES-256 encryption at rest.",
    "Generated code is created in your local environment. We never store your implementation logic.",
    "You retain full control over your data — export or delete at any time.",
];

export function ArchitectureSecurity() {
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
                    <p className="ui-label mb-3">Protection</p>
                    <h2 className="editorial-h2 max-w-3xl text-platinum">
                        Data <em>protection</em>
                    </h2>
                </motion.div>

                <motion.div
                    className="grid gap-8 md:grid-cols-[1fr_220px] md:items-start"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.1 }}
                >
                    {/* Left: Explanation */}
                    <div className="space-y-4">
                        {explanations.map((text, i) => (
                            <motion.div
                                key={text}
                                className="rounded-xl border border-white/[0.06] bg-[#0a0908]/40 p-5 backdrop-blur-sm"
                                initial={{ opacity: 0, y: 20 }}
                                animate={isInView ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.5, delay: 0.15 + i * 0.1 }}
                            >
                                <p className="text-[14.5px] leading-relaxed text-platinum/60">
                                    {text}
                                </p>
                            </motion.div>
                        ))}
                    </div>

                    {/* Right: Data Flow Diagram */}
                    <motion.div
                        className="rounded-2xl border border-white/[0.08] bg-gradient-to-b from-[#0e0c0b]/80 to-[#0a0908]/80 p-4 backdrop-blur-sm"
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.5, delay: 0.15 }}
                    >
                        <svg viewBox="0 0 200 260" className="w-full" fill="none">
                            {/* Edges */}
                            {flowEdges.map((e, i) => (
                                <g key={`fe-${i}`}>
                                    <motion.line
                                        x1={e.x1} y1={e.y1} x2={e.x2} y2={e.y2}
                                        stroke="rgba(255,255,255,0.08)"
                                        strokeWidth="1"
                                        strokeDasharray="60"
                                        initial={{ strokeDashoffset: 60 }}
                                        animate={isInView ? { strokeDashoffset: 0 } : {}}
                                        transition={{ duration: 0.7, delay: 0.4 + i * 0.15, ease: "easeOut" }}
                                    />
                                    {/* Animated data packet */}
                                    <circle r="2" fill="rgba(96,165,250,0.5)">
                                        <animateMotion
                                            dur="2s"
                                            repeatCount="indefinite"
                                            begin={`${i * 0.5}s`}
                                            path={`M${e.x1},${e.y1} L${e.x2},${e.y2}`}
                                        />
                                    </circle>
                                </g>
                            ))}

                            {/* Nodes */}
                            {flowNodes.map((n, i) => (
                                <g key={n.label}>
                                    <motion.rect
                                        x={n.cx - 32} y={n.cy - 12}
                                        width="64" height="24" rx="6"
                                        fill={i === 1 || i === 3 ? "rgba(96,165,250,0.04)" : "rgba(255,255,255,0.02)"}
                                        stroke={i === 1 || i === 3 ? "rgba(96,165,250,0.2)" : "rgba(255,255,255,0.1)"}
                                        strokeWidth="0.8"
                                        initial={{ opacity: 0, scale: 0.7 }}
                                        animate={isInView ? { opacity: 1, scale: 1 } : {}}
                                        transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                                    />
                                    <motion.text
                                        x={n.cx} y={n.cy + 4}
                                        textAnchor="middle"
                                        className="text-[8px] font-mono"
                                        fill={i === 1 || i === 3 ? "rgba(96,165,250,0.5)" : "rgba(255,255,255,0.4)"}
                                        initial={{ opacity: 0 }}
                                        animate={isInView ? { opacity: 1 } : {}}
                                        transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
                                    >
                                        {n.label}
                                    </motion.text>
                                </g>
                            ))}
                        </svg>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
