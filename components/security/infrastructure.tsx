"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

/* ── Infrastructure Diagram Nodes ────────────────────────── */
const infraNodes = [
    { cx: 180, cy: 30, w: 80, h: 24, label: "Load Balancer", color: "96,165,250" },
    { cx: 80, cy: 100, w: 70, h: 24, label: "App Svc A", color: "255,255,255" },
    { cx: 180, cy: 100, w: 70, h: 24, label: "App Svc B", color: "255,255,255" },
    { cx: 280, cy: 100, w: 70, h: 24, label: "App Svc C", color: "255,255,255" },
    { cx: 130, cy: 175, w: 70, h: 24, label: "Database", color: "74,222,128" },
    { cx: 230, cy: 175, w: 70, h: 24, label: "DB Replica", color: "74,222,128" },
    { cx: 320, cy: 140, w: 60, h: 22, label: "Monitor", color: "168,140,255" },
];

const infraEdges = [
    { f: 0, t: 1 }, { f: 0, t: 2 }, { f: 0, t: 3 },
    { f: 1, t: 4 }, { f: 2, t: 4 }, { f: 2, t: 5 }, { f: 3, t: 5 },
];

const labels = [
    { x: 32, y: 68, text: "isolated services" },
    { x: 95, y: 210, text: "automated backups" },
    { x: 290, y: 170, text: "continuous monitoring" },
];

export function Infrastructure() {
    const ref = useRef<HTMLElement>(null);
    const isInView = useInView(ref, { once: true, margin: "-80px" });

    return (
        <section ref={ref} className="px-6 py-20">
            <div className="mx-auto max-w-4xl">
                <motion.div
                    className="mb-10"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5 }}
                >
                    <p className="ui-label mb-3">Systems</p>
                    <h2 className="editorial-h2 max-w-3xl text-platinum">
                        <em>Infrastructure</em> security
                    </h2>
                </motion.div>

                <motion.div
                    className="rounded-2xl border border-white/[0.08] bg-gradient-to-b from-[#0e0c0b]/80 to-[#0a0908]/80 p-6 md:p-8 backdrop-blur-sm"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.1 }}
                >
                    <svg viewBox="0 0 380 230" className="w-full" fill="none">
                        {/* Network boundary */}
                        <motion.rect
                            x="30" y="15" width="270" height="205" rx="12"
                            stroke="rgba(255,255,255,0.04)"
                            strokeWidth="0.8"
                            strokeDasharray="6 4"
                            fill="none"
                            initial={{ opacity: 0 }}
                            animate={isInView ? { opacity: 1 } : {}}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        />

                        {/* Edges */}
                        {infraEdges.map((e, i) => {
                            const from = infraNodes[e.f];
                            const to = infraNodes[e.t];
                            return (
                                <motion.line
                                    key={`ie-${i}`}
                                    x1={from.cx} y1={from.cy + from.h / 2}
                                    x2={to.cx} y2={to.cy - to.h / 2}
                                    stroke="rgba(255,255,255,0.06)"
                                    strokeWidth="0.8"
                                    strokeDasharray="80"
                                    initial={{ strokeDashoffset: 80, opacity: 0 }}
                                    animate={isInView ? { strokeDashoffset: 0, opacity: 1 } : {}}
                                    transition={{ duration: 0.6, delay: 0.5 + i * 0.07, ease: "easeOut" }}
                                />
                            );
                        })}

                        {/* Nodes */}
                        {infraNodes.map((n, i) => (
                            <g key={n.label}>
                                <motion.rect
                                    x={n.cx - n.w / 2} y={n.cy - n.h / 2}
                                    width={n.w} height={n.h} rx="5"
                                    fill={`rgba(${n.color},0.03)`}
                                    stroke={`rgba(${n.color},0.15)`}
                                    strokeWidth="0.8"
                                    initial={{ opacity: 0, scale: 0.7 }}
                                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                                    transition={{ duration: 0.4, delay: 0.25 + i * 0.08 }}
                                />
                                <motion.text
                                    x={n.cx} y={n.cy + 3.5}
                                    textAnchor="middle"
                                    className="text-[7px] font-mono"
                                    fill={`rgba(${n.color},0.45)`}
                                    initial={{ opacity: 0 }}
                                    animate={isInView ? { opacity: 1 } : {}}
                                    transition={{ duration: 0.3, delay: 0.35 + i * 0.08 }}
                                >
                                    {n.label}
                                </motion.text>
                            </g>
                        ))}

                        {/* Labels */}
                        {labels.map((l, i) => (
                            <motion.text
                                key={l.text}
                                x={l.x} y={l.y}
                                className="text-[6px] font-mono"
                                fill="rgba(255,255,255,0.2)"
                                initial={{ opacity: 0 }}
                                animate={isInView ? { opacity: 1 } : {}}
                                transition={{ duration: 0.4, delay: 0.8 + i * 0.1 }}
                            >
                                {l.text}
                            </motion.text>
                        ))}
                    </svg>
                </motion.div>
            </div>
        </section>
    );
}
