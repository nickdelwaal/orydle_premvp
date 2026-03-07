"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export function OriginStory() {
    const ref = useRef<HTMLElement>(null);
    const isInView = useInView(ref, { once: true, margin: "-80px" });

    return (
        <section ref={ref} className="px-6 py-20">
            <div className="mx-auto max-w-2xl">

                {/* Label */}
                <motion.p
                    className="ui-label mb-6"
                    initial={{ opacity: 0, y: 16 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5 }}
                >
                    THE FOUNDING INSIGHT
                </motion.p>

                {/* Prose block */}
                <motion.div
                    className="space-y-6"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.55, delay: 0.1 }}
                >
                    <p className="text-[clamp(1.05rem,1.8vw,1.2rem)] leading-[1.7] text-platinum/65 font-[var(--font-ui)]">
                        Every system we worked on had the same problem. The architecture lived
                        in someone&apos;s head, or in a diagram that was already wrong, or in a
                        document nobody read. The code was the only truth — and the code
                        didn&apos;t explain itself.
                    </p>

                    <p className="text-[clamp(1.05rem,1.8vw,1.2rem)] leading-[1.7] text-platinum/65 font-[var(--font-ui)]">
                        When AI tools arrived, they made it faster to write code — and faster
                        to make architecturally wrong decisions at scale. The gap between what
                        the system was supposed to be and what it actually was grew wider, faster.
                    </p>

                    <p className="text-[clamp(1.05rem,1.8vw,1.2rem)] leading-[1.7] text-platinum/65 font-[var(--font-ui)]">
                        We realized the problem wasn&apos;t tooling. It was that architecture had
                        never been treated as data. As something formal, queryable, enforceable.
                        Krum is our answer to that.
                    </p>
                </motion.div>

                {/* Pull quote */}
                <motion.blockquote
                    className="relative mt-12 border-l-2 border-[#255bfc]/40 pl-6"
                    initial={{ opacity: 0, x: -10 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.3 }}
                >
                    <p className="font-[var(--font-display)] text-[clamp(1.2rem,2.4vw,1.55rem)] font-light leading-[1.4] tracking-[-0.01em] text-platinum/80 italic">
                        &quot;The code is never the truth. The system is.&quot;
                    </p>
                </motion.blockquote>

            </div>
        </section>
    );
}
