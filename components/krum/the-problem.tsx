"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const problemLines = [
    "Architecture docs go stale within weeks.",
    "Engineers guess at system boundaries.",
    "AI writes syntactically correct but architecturally wrong code.",
];

export function TheProblem() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-80px" });

    return (
        <section ref={ref} className="px-6 py-16 md:py-24">
            <div className="mx-auto max-w-3xl">
                <div className="space-y-0">
                    {problemLines.map((line, i) => (
                        <motion.p
                            key={line}
                            className="border-b border-white/8 py-6 font-[var(--font-display)] text-[clamp(1.1rem,2.2vw,1.5rem)] font-light tracking-[-0.01em] text-platinum/55 last:border-b-0"
                            initial={{ opacity: 0, y: 16 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.55, delay: i * 0.12, ease: "easeOut" }}
                        >
                            {line}
                        </motion.p>
                    ))}
                </div>
                <motion.p
                    className="mt-8 font-[var(--font-ui)] text-[14px] uppercase tracking-[0.12em] text-[#255bfc]"
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ duration: 0.5, delay: 0.45 }}
                >
                    The problem isn&apos;t missing documentation — it&apos;s the absence of enforced structural truth.
                </motion.p>
            </div>
        </section>
    );
}
