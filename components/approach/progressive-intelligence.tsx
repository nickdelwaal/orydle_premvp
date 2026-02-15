"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
        },
    },
};

const itemVariants = {
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

export function ProgressiveIntelligence() {
    const ref = useRef<HTMLElement>(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section ref={ref} className="bg-zinc-950 px-6 py-32">
            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                className="mx-auto max-w-3xl"
            >
                <motion.h2
                    variants={itemVariants}
                    className="mb-8 text-4xl font-bold"
                >
                    Progressive intelligence
                </motion.h2>

                <motion.div variants={containerVariants} className="space-y-6">
                    <motion.p
                        variants={itemVariants}
                        className="text-xl leading-relaxed text-zinc-400"
                    >
                        Krum improves its understanding as systems evolve.
                    </motion.p>

                    <motion.p
                        variants={itemVariants}
                        className="pt-4 text-2xl font-medium text-white"
                    >
                        The goal is not one-off answers, but continuous system awareness.
                    </motion.p>
                </motion.div>
            </motion.div>
        </section>
    );
}
