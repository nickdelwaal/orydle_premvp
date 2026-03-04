"use client";

import Link from "next/link";
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

const targetTeams = [
    {
        title: "Large or growing codebases",
        icon: "📦",
        description: "Systems that have evolved beyond single-file changes",
    },
    {
        title: "Multi-repo or service-based systems",
        icon: "🔗",
        description: "Microservices, distributed architectures, shared libraries",
    },
    {
        title: "Production software with real users",
        icon: "🚀",
        description: "Where mistakes have real consequences",
    },
];

export function WhoItsFor() {
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
                        Built for teams working on:
                    </h2>
                </motion.div>

                {/* Team cards - Glass Panels */}
                <div className="mb-16 grid gap-8 md:grid-cols-3">
                    {targetTeams.map((team, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 40 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            whileHover={{ y: -8, scale: 1.02 }}
                            className="glass-panel rounded-2xl p-8 transition-all"
                        >
                            <div className="mb-6 text-5xl">{team.icon}</div>
                            <h3 className="mb-3 text-xl font-bold text-white">
                                {team.title}
                            </h3>
                            <p className="leading-relaxed text-platinum/60">
                                {team.description}
                            </p>
                        </motion.div>
                    ))}
                </div>

                {/* CTA */}
                <motion.div variants={itemVariants} className="text-center">
                    <Link href="/request-access" className="cta-button">
                        Request Early Access
                    </Link>
                </motion.div>
            </motion.div>
        </section>
    );
}
