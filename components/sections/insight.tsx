"use client";

import { useRef } from "react";
import { motion, useInView, type Variants } from "framer-motion";
import CountUp from "react-countup";

const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
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

const stats = [
    {
        value: 60,
        suffix: "%",
        label: "of dev time spent understanding existing code",
    },
    {
        value: 80,
        suffix: "%",
        label: "of bugs from misunderstanding system boundaries",
    },
    {
        value: 2,
        suffix: "x",
        label: "faster onboarding with system understanding",
    },
];

function StatCard({
    value,
    suffix,
    label,
    isInView,
    index,
}: {
    value: number;
    suffix: string;
    label: string;
    isInView: boolean;
    index: number;
}) {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            whileHover={{ scale: 1.03, y: -4 }}
            className="glass-panel rounded-2xl p-8 text-center transition-all"
        >
            <div className="mb-3 text-5xl font-bold text-white md:text-6xl">
                {isInView ? (
                    <CountUp end={value} duration={2.5} suffix={suffix} />
                ) : (
                    <span>0{suffix}</span>
                )}
            </div>
            <p className="text-sm leading-relaxed text-platinum/60">{label}</p>
        </motion.div>
    );
}

export function Insight() {
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
                {/* Main insight */}
                <motion.h2
                    variants={itemVariants}
                    className="mb-6 text-center text-3xl font-bold leading-tight tracking-tight text-white md:text-4xl lg:text-5xl"
                >
                    The real bottleneck is not writing code —
                    <br className="hidden md:block" />
                    <span className="text-platinum/70">it is understanding the system.</span>
                </motion.h2>

                <motion.p
                    variants={itemVariants}
                    className="mx-auto mb-16 max-w-3xl text-center text-lg text-platinum/60"
                >
                    Engineering teams spend more time reading, navigating, and reasoning about code than actually writing it. The best tools should amplify understanding, not just output.
                </motion.p>

                {/* Stat cards - Glass Panels */}
                <div className="grid gap-8 md:grid-cols-3">
                    {stats.map((stat, index) => (
                        <StatCard
                            key={index}
                            value={stat.value}
                            suffix={stat.suffix}
                            label={stat.label}
                            isInView={isInView}
                            index={index}
                        />
                    ))}
                </div>
            </motion.div>
        </section>
    );
}

