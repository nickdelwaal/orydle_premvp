"use client";

import { useRef } from "react";
import { motion, useInView, type Variants } from "framer-motion";

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

const traditionalSteps = [
    { label: "Prompt", style: "default" as const },
    { label: "Code", style: "default" as const },
    { label: "❌ Breaks", style: "error" as const },
];

const krumSteps = [
    { label: "Map", style: "default" as const },
    { label: "Plan", style: "default" as const },
    { label: "Review", style: "default" as const },
    { label: "Change", style: "default" as const },
    { label: "✓ Ships", style: "success" as const },
];

function ArrowIcon() {
    return (
        <svg
            className="h-5 w-5 text-white/40"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
        >
            <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
    );
}

function WorkflowStep({
    label,
    style,
}: {
    label: string;
    style: "default" | "error" | "success";
}) {
    const styleClasses = {
        default: "blueprint-box text-platinum/80 hover:bg-white/5",
        error: "border-white/30 bg-white/5 text-platinum/60",
        success: "bg-platinum text-blue-electric font-bold shadow-lg shadow-white/20",
    };

    return (
        <motion.div
            className={`rounded-xl px-5 py-3 text-sm transition-all ${styleClasses[style]}`}
            whileHover={style === "default" ? { y: -2, scale: 1.02 } : undefined}
        >
            {label}
        </motion.div>
    );
}

// Blueprint System Map with pulsing lines
function SystemMap() {
    return (
        <div className="relative mx-auto max-w-md">
            {/* Central API Gateway */}
            <motion.div
                className="blueprint-box mx-auto mb-8 w-fit rounded-xl px-8 py-4 text-center"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
            >
                <span className="text-sm font-medium text-white">API Gateway</span>
            </motion.div>

            {/* Connecting lines with pulse animation */}
            <div className="flex justify-center gap-4">
                <div className="h-8 w-px animate-pulse-flow bg-white/40" />
                <div className="h-8 w-px animate-pulse-flow bg-white/40" style={{ animationDelay: "0.3s" }} />
                <div className="h-8 w-px animate-pulse-flow bg-white/40" style={{ animationDelay: "0.6s" }} />
            </div>

            {/* Services */}
            <div className="mt-4 flex justify-center gap-4">
                {["Auth", "Users", "Data"].map((service, i) => (
                    <motion.div
                        key={service}
                        className="blueprint-box rounded-lg px-4 py-2 text-xs text-platinum/70"
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                    >
                        {service}
                    </motion.div>
                ))}
            </div>
        </div>
    );
}

export function ProductTease() {
    const ref = useRef<HTMLElement>(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section ref={ref} className="px-6 py-32">
            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                className="mx-auto max-w-7xl"
            >
                {/* Section header */}
                <motion.div variants={itemVariants} className="mb-16 text-center">
                    <h2 className="mb-6 text-4xl font-bold tracking-tight text-white md:text-5xl">
                        Introducing Krum
                    </h2>
                    <p className="mx-auto max-w-3xl text-lg text-platinum/60">
                        Krum does not just write code. It reasons about your system first,
                        then helps you make changes that actually work.
                    </p>
                </motion.div>

                {/* Blueprint System Map */}
                <motion.div variants={itemVariants} className="mb-20">
                    <div className="glass-panel mx-auto max-w-2xl rounded-2xl p-8">
                        <div className="mb-6 text-center text-xs font-semibold uppercase tracking-widest text-platinum/50">
                            Blueprint Mode
                        </div>
                        <SystemMap />
                    </div>
                </motion.div>

                {/* Workflow comparison */}
                <motion.div variants={itemVariants} className="mx-auto max-w-5xl space-y-12">
                    {/* Traditional workflow */}
                    <div className="relative">
                        <div className="mb-6 text-sm font-medium uppercase tracking-wider text-platinum/40">
                            Traditional AI Workflow
                        </div>
                        <div className="flex flex-wrap items-center gap-3 text-sm">
                            {traditionalSteps.map((step, index) => (
                                <div key={index} className="flex items-center gap-3">
                                    <WorkflowStep label={step.label} style={step.style} />
                                    {index < traditionalSteps.length - 1 && <ArrowIcon />}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Krum workflow */}
                    <motion.div
                        className="relative"
                        initial={{ opacity: 0, y: 30 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ delay: 0.3 }}
                    >
                        <div className="mb-6 text-sm font-semibold uppercase tracking-wider text-platinum/70">
                            Krum Workflow
                        </div>
                        <div className="flex flex-wrap items-center gap-3 text-sm">
                            {krumSteps.map((step, index) => (
                                <div key={index} className="flex items-center gap-3">
                                    <WorkflowStep label={step.label} style={step.style} />
                                    {index < krumSteps.length - 1 && <ArrowIcon />}
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </motion.div>

                {/* CTA */}
                <motion.div variants={itemVariants} className="mt-16 text-center">
                    <a
                        href="/krum"
                        className="inline-flex items-center gap-2 font-semibold text-platinum/70 transition-colors hover:text-white"
                    >
                        Learn more about Krum
                        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </a>
                </motion.div>
            </motion.div>
        </section>
    );
}

