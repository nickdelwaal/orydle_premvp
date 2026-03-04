"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const practices = [
    {
        title: "Threat modeling",
        explanation: "Architecture-level threat analysis before every major feature.",
        detail: "We identify attack surfaces at the system model level, ensuring threats are mitigated before code is generated.",
    },
    {
        title: "Automated vulnerability scanning",
        explanation: "Continuous scanning of dependencies and infrastructure.",
        detail: "Every build is checked against known vulnerability databases. Critical issues block deployment automatically.",
    },
    {
        title: "Security reviews",
        explanation: "Peer-reviewed security checks on all architecture changes.",
        detail: "Changes to access controls, data flows, and encryption boundaries require explicit security sign-off.",
    },
    {
        title: "Penetration testing",
        explanation: "Regular third-party assessments of platform security.",
        detail: "External security teams test our defenses. Findings are tracked to resolution with full transparency.",
    },
];

export function SecureDevelopment() {
    const ref = useRef<HTMLElement>(null);
    const isInView = useInView(ref, { once: true, margin: "-80px" });

    return (
        <section ref={ref} className="px-6 py-20">
            <div className="mx-auto max-w-6xl">
                <motion.div
                    className="mb-10"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5 }}
                >
                    <p className="ui-label mb-3">Process</p>
                    <h2 className="editorial-h2 max-w-3xl text-platinum">
                        Secure <em>development</em>
                    </h2>
                </motion.div>

                <motion.div
                    className="grid gap-5 sm:grid-cols-2"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.1 }}
                >
                    {practices.map((p) => (
                        <article
                            key={p.title}
                            className="group relative overflow-hidden rounded-xl border border-white/[0.06] bg-gradient-to-br from-white/[0.02] to-transparent p-6 backdrop-blur-sm transition-all duration-[250ms] ease-out hover:-translate-y-1 hover:border-white/[0.12]"
                        >
                            <h3 className="editorial-h3 mb-2 text-[1.1rem] text-platinum/85 tracking-wide">
                                {p.title}
                            </h3>
                            <p className="text-[14px] leading-relaxed text-platinum/50">
                                {p.explanation}
                            </p>

                            {/* Hover detail */}
                            <div className="mt-3 max-h-0 overflow-hidden opacity-0 transition-all duration-300 group-hover:max-h-24 group-hover:opacity-100">
                                <p className="text-[13px] leading-relaxed text-platinum/35 border-t border-white/[0.04] pt-3">
                                    {p.detail}
                                </p>
                            </div>
                        </article>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
