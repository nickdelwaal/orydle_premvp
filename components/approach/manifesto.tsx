"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const lines = [
    "Architecture is not documentation.",
    "Architecture is the system.",
    "",
    "Code does not define structure.",
    "Structure defines code.",
    "",
    "Alignment is not a process.",
    "Alignment is enforced.",
];

export function Manifesto() {
    const ref = useRef<HTMLElement>(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section ref={ref} className="relative px-6 py-32 overflow-hidden">
            {/* Subtle animated background gradient */}
            <div className="absolute inset-0 pointer-events-none">
                <motion.div
                    className="absolute inset-0"
                    style={{
                        background:
                            "radial-gradient(ellipse 60% 50% at 50% 50%, rgba(168,140,255,0.03) 0%, transparent 70%)",
                    }}
                    animate={{
                        opacity: [0.4, 0.8, 0.4],
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />
            </div>

            <div className="relative z-10 mx-auto max-w-3xl text-center">
                {lines.map((line, i) => {
                    if (line === "") {
                        return <div key={`spacer-${i}`} className="h-8" />;
                    }

                    return (
                        <motion.p
                            key={line}
                            className="text-[clamp(1.5rem,4vw,2.5rem)] leading-[1.3] tracking-[0.01em] text-platinum/80 font-[var(--font-display)]"
                            initial={{ opacity: 0, y: 14 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{
                                duration: 0.6,
                                delay: i * 0.1,
                                ease: "easeOut",
                            }}
                        >
                            {line}
                        </motion.p>
                    );
                })}
            </div>
        </section>
    );
}
