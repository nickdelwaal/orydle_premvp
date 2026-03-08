"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const problems = [
    "Architecture docs go stale within weeks.",
    "Engineers guess at system boundaries.",
    "AI writes syntactically correct but architecturally wrong code.",
];

export function TheProblem() {
    const ref = useRef<HTMLElement>(null);
    const isInView = useInView(ref, { once: true, margin: "-80px" });

    return (
        <section id="the-problem" ref={ref} className="px-6 py-20">
            <div className="mx-auto max-w-5xl">

                <motion.p
                    className="ui-label mb-6"
                    initial={{ opacity: 0, y: 12 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5 }}
                >
                    THE PROBLEM
                </motion.p>

                {/* Three problem lines */}
                <div className="space-y-4 mb-12">
                    {problems.map((line, i) => (
                        <motion.p
                            key={line}
                            className="font-[var(--font-display)] text-[clamp(1.3rem,2.6vw,1.75rem)] font-light leading-[1.3] text-platinum/60 italic"
                            initial={{ opacity: 0, x: -20 }}
                            animate={isInView ? { opacity: 1, x: 0 } : {}}
                            transition={{ duration: 0.55, delay: i * 0.12 }}
                        >
                            {line}
                        </motion.p>
                    ))}
                </div>

                {/* Conclusion line */}
                <motion.div
                    className="border-l-2 border-[#255bfc]/60 pl-6"
                    initial={{ opacity: 0, x: -10 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.45 }}
                >
                    <p className="font-[var(--font-ui)] text-[clamp(0.85rem,1.4vw,1rem)] font-semibold uppercase tracking-[0.14em] text-platinum/90">
                        The problem isn't missing documentation —<br />
                        it's the absence of enforced structural truth.
                    </p>
                </motion.div>

            </div>
        </section>
    );
}
