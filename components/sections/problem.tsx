"use client";

import { useRef } from "react";
import { motion, useInView, type Variants } from "framer-motion";

const problems = [
    "Single file context",
    "Isolated changes",
    "No system awareness",
    "Breaks on complexity",
];

const realities = [
    "Multiple repositories and services",
    "Shared libraries and platforms",
    "Hidden dependencies and tribal knowledge",
    "Constant change under real constraints",
];

const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
        },
    },
};

const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
            ease: [0.25, 0.1, 0.25, 1] as const,
        },
    },
};

function BlueprintIcon({ type }: { type: "file" | "network" }) {
    if (type === "file") {
        return (
            <svg
                className="h-8 w-8 text-white/60"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.5}
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"
                />
            </svg>
        );
    }
    return (
        <svg
            className="h-8 w-8 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1.5}
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M7.5 21 3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5"
            />
        </svg>
    );
}

export function Problem() {
    const ref = useRef<HTMLElement>(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section id="problem" ref={ref} className="px-6 py-32">
            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                className="mx-auto max-w-7xl"
            >
                {/* Section header */}
                <motion.div variants={itemVariants} className="mb-20 text-center">
                    <h2 className="mb-4 text-4xl font-bold tracking-tight text-white md:text-5xl">
                        Modern software outgrew our tools
                    </h2>
                    <p className="mx-auto max-w-3xl text-lg text-platinum/60">
                        Production systems today are fundamentally different from what AI
                        coding tools were designed for.
                    </p>
                </motion.div>

                {/* Split comparison - Blueprint Style */}
                <div className="mb-20 grid gap-8 md:grid-cols-2">
                    {/* LEFT: Traditional tools */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.6 }}
                        className="blueprint-box rounded-2xl p-10"
                    >
                        <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-xl border-2 border-white/30">
                            <BlueprintIcon type="file" />
                        </div>
                        <h3 className="mb-3 text-2xl font-bold text-white/80">
                            Most AI tools
                        </h3>
                        <p className="mb-8 text-platinum/50">File-level thinking</p>
                        <ul className="space-y-4">
                            {problems.map((item, index) => (
                                <li key={index} className="flex items-start gap-3">
                                    <svg
                                        className="mt-0.5 h-5 w-5 flex-shrink-0 text-white/40"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M6 18 18 6M6 6l12 12"
                                        />
                                    </svg>
                                    <span className="text-platinum/60">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* RIGHT: Production reality - Glass Panel */}
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.6 }}
                        className="glass-panel rounded-2xl p-10"
                    >
                        <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-xl bg-white/10">
                            <BlueprintIcon type="network" />
                        </div>
                        <h3 className="mb-3 text-2xl font-bold text-white">
                            Production reality
                        </h3>
                        <p className="mb-8 text-platinum/70">System-level complexity</p>
                        <ul className="space-y-4">
                            {realities.map((item, index) => (
                                <li key={index} className="flex items-start gap-3">
                                    <div className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-white" />
                                    <span className="text-platinum">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                </div>

                {/* Conclusion - Glass Panel */}
                <motion.div
                    variants={itemVariants}
                    className="text-center"
                >
                    <div className="glass-panel-strong inline-block rounded-2xl px-12 py-8">
                        <p className="max-w-3xl text-2xl font-semibold text-white md:text-3xl">
                            That mismatch is why they fail in production environments.
                        </p>
                    </div>
                </motion.div>
            </motion.div>
        </section>
    );
}
