"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";

export function FinalCTA() {
    const ref = useRef<HTMLElement>(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section ref={ref} className="py-32">
            <motion.div
                className="mx-auto max-w-4xl px-6 text-center"
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6 }}
            >
                {/* Glass panel container */}
                <div className="glass-panel-strong rounded-3xl px-8 py-16 md:px-16">
                    <h2 className="mb-6 text-4xl font-bold text-white md:text-5xl lg:text-6xl">
                        Ready to see Krum in action?
                    </h2>

                    <p className="mx-auto mb-12 max-w-2xl text-xl text-platinum/70">
                        We are onboarding early teams to help shape the future of AI-assisted
                        engineering.
                    </p>

                    <div className="flex flex-col justify-center gap-4 sm:flex-row">
                        <Link href="/request-access" className="btn-primary rounded-xl px-10 py-5 text-lg">
                            Request Early Access
                        </Link>

                        <Link href="/approach" className="btn-outline rounded-xl px-10 py-5 text-lg">
                            Learn Our Approach
                        </Link>
                    </div>
                </div>
            </motion.div>
        </section>
    );
}
