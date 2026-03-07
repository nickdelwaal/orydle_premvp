"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const lines = [
    { text: "Architecture is not documentation.", style: "text-platinum/40" },
    { text: "Architecture is the system.", style: "text-platinum/90 font-light" },
    { text: "", style: "" },
    { text: "Code does not define structure.", style: "text-platinum/40" },
    { text: "Structure defines code.", style: "text-platinum/90" },
    { text: "", style: "" },
    { text: "Alignment is not a process.", style: "text-platinum/40" },
    { text: "Alignment is enforced.", style: "text-[#255bfc] text-[1.05em]" },
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
                            "radial-gradient(ellipse 60% 50% at 50% 50%, rgba(37,91,252,0.04) 0%, transparent 70%)",
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
                <p className="ui-label mb-12">THE KRUM PHILOSOPHY</p>
                {lines.map((line, i) => {
                    if (line.text === "") {
                        return <div key={`spacer-${i}`} className="h-8" />;
                    }

                    return (
                        <motion.p
                            key={line.text}
                            className={`text-[clamp(1.5rem,4vw,2.5rem)] leading-[1.3] tracking-[0.01em] font-[var(--font-display)] ${line.style}`}
                            initial={{ opacity: 0, y: 14 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{
                                duration: 0.6,
                                delay: i * 0.1,
                                ease: "easeOut",
                            }}
                        >
                            {line.text}
                        </motion.p>
                    );
                })}
            </div>
        </section>
    );
}
