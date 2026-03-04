"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const layers = [
    {
        id: "01",
        name: "Intent Layer",
        description: "What the system is supposed to do",
        items: [
            "Business requirements",
            "Constraints and invariants",
            "Non-functional requirements",
            "Architectural decisions",
        ],
    },
    {
        id: "02",
        name: "Structure Layer",
        description: "How the system is composed",
        items: [
            "Services and boundaries",
            "Data flows and contracts",
            "Component relationships",
            "Dependency rules",
        ],
    },
    {
        id: "03",
        name: "Code Generation",
        description: "The actual running code",
        items: [
            "Implementation files",
            "Service logic",
            "Infrastructure code",
            "Tests and validations",
        ],
    },
    {
        id: "04",
        name: "Evolution Layer",
        description: "How the system adapts over time",
        items: [
            "Change validation",
            "Drift detection",
            "Model synchronization",
            "Continuous enforcement",
        ],
    },
];

function PipelineConnector({ delay }: { delay: number }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-40px" });

    return (
        <div ref={ref} className="flex justify-center py-1">
            <svg width="2" height="40" viewBox="0 0 2 40" className="overflow-visible">
                <motion.line
                    x1="1"
                    y1="0"
                    x2="1"
                    y2="40"
                    stroke="rgba(255,255,255,0.08)"
                    strokeWidth="1.5"
                    strokeDasharray="40"
                    initial={{ strokeDashoffset: 40 }}
                    animate={isInView ? { strokeDashoffset: 0 } : {}}
                    transition={{ duration: 0.6, delay, ease: "easeOut" }}
                />
            </svg>
        </div>
    );
}

function LayerPanel({
    layer,
    index,
}: {
    layer: (typeof layers)[number];
    index: number;
}) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-60px" });
    const delay = index * 0.15;

    return (
        <motion.article
            ref={ref}
            className="group relative overflow-hidden rounded-2xl border border-white/[0.08] bg-[#0a0908]/40 p-6 md:p-8 backdrop-blur-sm shadow-sm transition-all duration-[250ms] ease-out hover:border-white/[0.15] hover:shadow-[0_8px_30px_rgba(0,0,0,0.12)]"
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay, ease: "easeOut" }}
        >
            <div className="flex items-start gap-5">
                {/* Number badge */}
                <div className="relative flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gradient-to-b from-[#1a1816] to-[#0f0d0c] border border-white/5 shadow-inner">
                    <div className="absolute inset-0 rounded-full bg-blue-100 opacity-5 blur-md" />
                    <span className="relative z-10 font-mono text-[11px] text-platinum/70">
                        {layer.id}
                    </span>
                </div>

                <div className="flex-1 min-w-0">
                    <div className="flex items-baseline gap-3 mb-2">
                        <h3 className="editorial-h3 text-[1.25rem] text-platinum/90 tracking-wide">
                            {layer.name}
                        </h3>
                        <span className="text-[13px] text-platinum/35 font-mono hidden sm:inline">
                            — {layer.description}
                        </span>
                    </div>

                    {/* Description on mobile */}
                    <p className="mb-4 text-[14px] text-platinum/50 sm:hidden">
                        {layer.description}
                    </p>

                    <ul className="grid gap-2 sm:grid-cols-2">
                        {layer.items.map((item) => (
                            <li
                                key={item}
                                className="flex items-start gap-2.5 text-[14.5px] text-platinum/65"
                            >
                                <span className="mt-[7px] h-[4px] w-[4px] shrink-0 rounded-full bg-platinum/25" />
                                <span className="leading-snug">{item}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </motion.article>
    );
}

export function ThreeLayers() {
    const ref = useRef<HTMLElement>(null);
    const isInView = useInView(ref, { once: true, margin: "-80px" });

    return (
        <section ref={ref} className="px-6 py-20">
            <div className="mx-auto max-w-3xl">
                {/* Header */}
                <motion.div
                    className="mb-10"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5 }}
                >
                    <p className="ui-label mb-3">Architecture Model</p>
                    <h2 className="editorial-h2 max-w-3xl text-platinum">
                        The four layers of system <em>alignment</em>
                    </h2>
                </motion.div>

                {/* Vertical Pipeline */}
                <div className="space-y-0">
                    {layers.map((layer, index) => (
                        <div key={layer.id}>
                            <LayerPanel layer={layer} index={index} />
                            {index < layers.length - 1 && (
                                <PipelineConnector delay={index * 0.15 + 0.3} />
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
