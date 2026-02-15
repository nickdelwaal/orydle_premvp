"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const collaborationPoints = [
    "Shared understanding",
    "Consistent system context",
    "Repeatable workflows",
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

export function Collaboration() {
    const ref = useRef<HTMLElement>(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section ref={ref} className="px-6 py-32">
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
                    Designed for collaboration
                </motion.h2>

                <motion.div variants={containerVariants} className="space-y-6">
                    <motion.p
                        variants={itemVariants}
                        className="text-xl leading-relaxed text-zinc-400"
                    >
                        Krum is built for teams, not individuals:
                    </motion.p>

                    <motion.ul
                        variants={containerVariants}
                        className="space-y-2 border-l-2 border-zinc-800 pl-6"
                    >
                        {collaborationPoints.map((item, index) => (
                            <motion.li
                                key={index}
                                variants={itemVariants}
                                className="text-lg text-zinc-300"
                            >
                                {item}
                            </motion.li>
                        ))}
                    </motion.ul>
                </motion.div>
            </motion.div>
        </section>
    );
}
