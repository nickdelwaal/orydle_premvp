"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export function ProductCredibility() {
    const ref = useRef<HTMLElement>(null);
    const isInView = useInView(ref, { once: true, margin: "-80px" });

    return (
        <section ref={ref} className="px-6 py-20">
            <div className="mx-auto max-w-6xl">
                <motion.div
                    className="mb-10 text-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5 }}
                >
                    <p className="ui-label mb-3">System Artifacts</p>
                    <h2 className="editorial-h2 text-platinum">
                        Real output from <em>Krum</em>
                    </h2>
                </motion.div>

                <motion.div
                    className="grid gap-5 md:grid-cols-3"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.1 }}
                >
                    {/* Panel 1: Architecture Model Preview */}
                    <div className="group rounded-xl border border-white/[0.06] bg-[#0a0908]/60 p-5 backdrop-blur-sm transition-all duration-[250ms] hover:scale-[1.02] hover:border-white/[0.12] hover:shadow-[0_6px_24px_rgba(0,0,0,0.12)]">
                        <p className="mb-4 font-mono text-[10px] uppercase tracking-[0.16em] text-platinum/40">
                            Architecture Model
                        </p>
                        <svg viewBox="0 0 200 120" className="w-full" fill="none">
                            <rect x="10" y="10" width="60" height="20" rx="4" stroke="rgba(255,255,255,0.1)" strokeWidth="0.8" fill="rgba(255,255,255,0.02)" />
                            <text x="40" y="23" textAnchor="middle" className="text-[7px] font-mono" fill="rgba(255,255,255,0.35)">UserService</text>
                            <rect x="130" y="10" width="60" height="20" rx="4" stroke="rgba(255,255,255,0.1)" strokeWidth="0.8" fill="rgba(255,255,255,0.02)" />
                            <text x="160" y="23" textAnchor="middle" className="text-[7px] font-mono" fill="rgba(255,255,255,0.35)">AuthService</text>
                            <rect x="10" y="50" width="60" height="20" rx="4" stroke="rgba(255,255,255,0.08)" strokeWidth="0.8" fill="rgba(255,255,255,0.02)" />
                            <text x="40" y="63" textAnchor="middle" className="text-[7px] font-mono" fill="rgba(255,255,255,0.3)">DataLayer</text>
                            <rect x="130" y="50" width="60" height="20" rx="4" stroke="rgba(255,255,255,0.08)" strokeWidth="0.8" fill="rgba(255,255,255,0.02)" />
                            <text x="160" y="63" textAnchor="middle" className="text-[7px] font-mono" fill="rgba(255,255,255,0.3)">EventBus</text>
                            <rect x="70" y="90" width="60" height="20" rx="4" stroke="rgba(96,165,250,0.15)" strokeWidth="0.8" fill="rgba(96,165,250,0.03)" />
                            <text x="100" y="103" textAnchor="middle" className="text-[7px] font-mono" fill="rgba(96,165,250,0.45)">Gateway</text>
                            <line x1="40" y1="30" x2="40" y2="50" stroke="rgba(255,255,255,0.05)" strokeWidth="0.6" />
                            <line x1="160" y1="30" x2="160" y2="50" stroke="rgba(255,255,255,0.05)" strokeWidth="0.6" />
                            <line x1="40" y1="70" x2="100" y2="90" stroke="rgba(255,255,255,0.04)" strokeWidth="0.6" />
                            <line x1="160" y1="70" x2="100" y2="90" stroke="rgba(255,255,255,0.04)" strokeWidth="0.6" />
                        </svg>
                    </div>

                    {/* Panel 2: Generated Code Snippet */}
                    <div className="group rounded-xl border border-white/[0.06] bg-[#0a0908]/60 p-5 backdrop-blur-sm transition-all duration-[250ms] hover:scale-[1.02] hover:border-white/[0.12] hover:shadow-[0_6px_24px_rgba(0,0,0,0.12)]">
                        <p className="mb-4 font-mono text-[10px] uppercase tracking-[0.16em] text-platinum/40">
                            Generated Code
                        </p>
                        <div className="rounded-lg bg-[#060504] p-4 font-mono text-[11px] leading-[1.6] text-platinum/50 overflow-hidden">
                            <p><span className="text-purple-400/60">export interface</span> <span className="text-blue-300/60">UserService</span> {"{"}</p>
                            <p className="pl-4"><span className="text-platinum/35">getUser</span>(id: <span className="text-green-400/50">string</span>): User;</p>
                            <p className="pl-4"><span className="text-platinum/35">validate</span>(token: <span className="text-green-400/50">string</span>): <span className="text-green-400/50">boolean</span>;</p>
                            <p>{"}"}</p>
                            <p className="mt-2 text-platinum/25">// auto-generated from system model</p>
                        </div>
                    </div>

                    {/* Panel 3: System Dependency Graph */}
                    <div className="group rounded-xl border border-white/[0.06] bg-[#0a0908]/60 p-5 backdrop-blur-sm transition-all duration-[250ms] hover:scale-[1.02] hover:border-white/[0.12] hover:shadow-[0_6px_24px_rgba(0,0,0,0.12)]">
                        <p className="mb-4 font-mono text-[10px] uppercase tracking-[0.16em] text-platinum/40">
                            Dependency Graph
                        </p>
                        <svg viewBox="0 0 200 120" className="w-full" fill="none">
                            <circle cx="100" cy="30" r="10" stroke="rgba(168,140,255,0.25)" strokeWidth="0.8" fill="rgba(168,140,255,0.04)" />
                            <text x="100" y="33" textAnchor="middle" className="text-[6px] font-mono" fill="rgba(168,140,255,0.5)">Core</text>
                            <circle cx="40" cy="70" r="8" stroke="rgba(96,165,250,0.2)" strokeWidth="0.7" fill="rgba(96,165,250,0.03)" />
                            <text x="40" y="73" textAnchor="middle" className="text-[5px] font-mono" fill="rgba(96,165,250,0.4)">Auth</text>
                            <circle cx="100" cy="90" r="8" stroke="rgba(96,165,250,0.2)" strokeWidth="0.7" fill="rgba(96,165,250,0.03)" />
                            <text x="100" y="93" textAnchor="middle" className="text-[5px] font-mono" fill="rgba(96,165,250,0.4)">Data</text>
                            <circle cx="160" cy="70" r="8" stroke="rgba(74,222,128,0.2)" strokeWidth="0.7" fill="rgba(74,222,128,0.03)" />
                            <text x="160" y="73" textAnchor="middle" className="text-[5px] font-mono" fill="rgba(74,222,128,0.4)">API</text>
                            <line x1="100" y1="40" x2="40" y2="62" stroke="rgba(255,255,255,0.06)" strokeWidth="0.6" />
                            <line x1="100" y1="40" x2="160" y2="62" stroke="rgba(255,255,255,0.06)" strokeWidth="0.6" />
                            <line x1="100" y1="40" x2="100" y2="82" stroke="rgba(255,255,255,0.05)" strokeWidth="0.6" />
                            <line x1="40" y1="78" x2="100" y2="82" stroke="rgba(255,255,255,0.04)" strokeWidth="0.5" strokeDasharray="3 2" />
                            <line x1="160" y1="78" x2="100" y2="82" stroke="rgba(255,255,255,0.04)" strokeWidth="0.5" strokeDasharray="3 2" />
                        </svg>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
