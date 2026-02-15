"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const planningPoints = [
    "Propose structured plans",
    "Surface assumptions",
    "Allow human validation",
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
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

export function PlanBeforeChange() {
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
                    Plan before change
                </motion.h2>

                <motion.div variants={containerVariants} className="space-y-6">
                    <motion.p
                        variants={itemVariants}
                        className="text-xl leading-relaxed text-zinc-400"
                    >
                        In real teams, changes are planned, reviewed, and discussed.
                    </motion.p>

                    <motion.p
                        variants={itemVariants}
                        className="text-xl leading-relaxed text-zinc-400"
                    >
                        Krum follows the same philosophy:
                    </motion.p>

                    <motion.ul
                        variants={containerVariants}
                        className="space-y-2 border-l-2 border-zinc-800 pl-6"
                    >
                        {planningPoints.map((item, index) => (
                            <motion.li
                                key={index}
                                variants={itemVariants}
                                className="text-lg text-zinc-300"
                            >
                                {item}
                            </motion.li>
                        ))}
                    </motion.ul>

                    <motion.p
                        variants={itemVariants}
                        className="pt-4 text-xl leading-relaxed text-zinc-400"
                    >
                        This reduces surprise and improves trust.
                    </motion.p>
                </motion.div>
            </motion.div>
        </section>
    );
}
