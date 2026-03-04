"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";

const ctaNodes = [
    { cx: 120, cy: 50 },
    { cx: 200, cy: 25 },
    { cx: 280, cy: 50 },
    { cx: 80, cy: 105 },
    { cx: 200, cy: 90 },
    { cx: 320, cy: 105 },
];

const ctaEdges = [
    [0, 4], [1, 4], [2, 4], [3, 4], [5, 4],
    [0, 1], [1, 2], [3, 0], [2, 5],
];

export function AboutFinalCta() {
    const ref = useRef<HTMLElement>(null);
    const isInView = useInView(ref, { once: true, margin: "-80px" });

    const nodesDone = 0.5;
    const edgesDone = nodesDone + 0.8;
    const ctaDelay = edgesDone + 0.25;

    return (
        <section ref={ref} className="relative px-6 py-32 overflow-hidden">
            <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
                <div className="w-[600px] h-[600px] bg-blue-500 opacity-[0.02] rounded-full blur-[100px]" />
            </div>

            <div className="relative z-10 mx-auto max-w-2xl flex flex-col items-center">
                {/* Architecture graph */}
                <svg viewBox="0 0 400 130" className="w-full max-w-md mb-12" fill="none">
                    {ctaEdges.map(([fi, ti], i) => {
                        const from = ctaNodes[fi];
                        const to = ctaNodes[ti];
                        return (
                            <motion.line
                                key={`e-${i}`}
                                x1={from.cx} y1={from.cy} x2={to.cx} y2={to.cy}
                                stroke="rgba(255,255,255,0.06)"
                                strokeWidth="0.8"
                                strokeDasharray="100"
                                initial={{ strokeDashoffset: 100, opacity: 0 }}
                                animate={isInView ? { strokeDashoffset: 0, opacity: 1 } : {}}
                                transition={{ duration: 0.7, delay: nodesDone + i * 0.07, ease: "easeOut" }}
                            />
                        );
                    })}

                    {ctaNodes.map((node, i) => (
                        <motion.circle
                            key={`n-${i}`}
                            cx={node.cx} cy={node.cy}
                            r={i === 4 ? 8 : 5}
                            fill={i === 4 ? "rgba(168,140,255,0.08)" : "rgba(255,255,255,0.03)"}
                            stroke={i === 4 ? "rgba(168,140,255,0.3)" : "rgba(255,255,255,0.12)"}
                            strokeWidth="0.8"
                            initial={{ opacity: 0, scale: 0.5 }}
                            animate={isInView ? { opacity: 1, scale: 1 } : {}}
                            transition={{ duration: 0.4, delay: 0.1 + i * 0.07, ease: "easeOut" }}
                        />
                    ))}
                </svg>

                {/* CTA Text */}
                <motion.div
                    className="text-center mb-8"
                    initial={{ opacity: 0, y: 14 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: ctaDelay }}
                >
                    <p className="text-[clamp(1.6rem,3.5vw,2.2rem)] leading-[1.35] tracking-[0.01em] text-platinum/80 font-[var(--font-display)]">
                        Build software as systems.<br />
                        <em>Not codebases.</em>
                    </p>
                </motion.div>

                {/* Button */}
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: ctaDelay + 0.2 }}
                >
                    <Link
                        href="/request-access"
                        className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-7 py-3.5 text-[15px] font-medium text-platinum backdrop-blur-sm transition-all duration-300 hover:border-white/25 hover:bg-white/10"
                    >
                        Request Access
                        <span className="text-platinum/40">→</span>
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}
