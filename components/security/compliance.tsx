"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const badges = [
    {
        name: "SOC 2",
        explanation: "Service Organization Control audit for security, availability, and confidentiality.",
    },
    {
        name: "GDPR",
        explanation: "Full compliance with EU data protection regulations and data residency options.",
    },
    {
        name: "ISO 27001",
        explanation: "International standard for information security management systems.",
    },
];

export function Compliance() {
    const ref = useRef<HTMLElement>(null);
    const isInView = useInView(ref, { once: true, margin: "-80px" });

    return (
        <section ref={ref} className="px-6 py-20">
            <div className="mx-auto max-w-4xl">
                <motion.div
                    className="mb-10 text-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5 }}
                >
                    <p className="ui-label mb-3">Standards</p>
                    <h2 className="editorial-h2 text-platinum">
                        <em>Compliance</em>
                    </h2>
                </motion.div>

                <motion.div
                    className="flex flex-col sm:flex-row gap-5 justify-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.1 }}
                >
                    {badges.map((b) => (
                        <div
                            key={b.name}
                            className="flex-1 rounded-xl border border-white/[0.08] bg-[#0a0908]/40 p-6 text-center backdrop-blur-sm"
                        >
                            <p className="mb-3 font-mono text-[22px] font-semibold tracking-wider text-platinum/70">
                                {b.name}
                            </p>
                            <p className="text-[13px] leading-relaxed text-platinum/40">
                                {b.explanation}
                            </p>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
