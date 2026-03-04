"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";

/* ── Permission Hierarchy ─────────────────────────────────── */
interface HierarchyNode {
    label: string;
    children?: string[];
}

const hierarchy: HierarchyNode[] = [
    { label: "Organization", children: ["Billing", "Settings", "Members"] },
    { label: "Teams", children: ["Engineering", "Product", "Security"] },
    { label: "Services", children: ["UserSvc", "AuthSvc", "DataSvc"] },
    { label: "Actions", children: ["Read", "Write", "Generate", "Export"] },
];

export function AccessControl() {
    const ref = useRef<HTMLElement>(null);
    const isInView = useInView(ref, { once: true, margin: "-80px" });
    const [expanded, setExpanded] = useState<string | null>(null);

    return (
        <section ref={ref} className="px-6 py-20">
            <div className="mx-auto max-w-6xl">
                <motion.div
                    className="mb-10"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5 }}
                >
                    <p className="ui-label mb-3">Access</p>
                    <h2 className="editorial-h2 max-w-3xl text-platinum">
                        Access <em>control</em>
                    </h2>
                </motion.div>

                <motion.div
                    className="grid gap-8 md:grid-cols-[1fr_1fr] md:items-start"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.1 }}
                >
                    {/* Left: Explanation */}
                    <div className="space-y-5">
                        <div className="rounded-xl border border-white/[0.06] bg-[#0a0908]/40 p-5 backdrop-blur-sm">
                            <p className="text-[15px] leading-relaxed text-platinum/60">
                                Access follows <strong className="text-platinum/80">least privilege</strong> and{" "}
                                <strong className="text-platinum/80">role-based policies</strong>. Every user and
                                service receives only the permissions required for their function — nothing more.
                            </p>
                        </div>
                        <div className="rounded-xl border border-white/[0.06] bg-[#0a0908]/40 p-5 backdrop-blur-sm">
                            <p className="text-[15px] leading-relaxed text-platinum/60">
                                Permissions cascade through a structured hierarchy: from organization-level
                                policies down to individual service actions, ensuring granular control at every
                                layer.
                            </p>
                        </div>
                        <div className="rounded-xl border border-white/[0.06] bg-[#0a0908]/40 p-5 backdrop-blur-sm">
                            <p className="text-[15px] leading-relaxed text-platinum/60">
                                Strong authentication and access controls are essential components of SaaS
                                security. All permission changes are immutably logged for audit compliance.
                            </p>
                        </div>
                    </div>

                    {/* Right: Permission Hierarchy Tree */}
                    <div className="rounded-2xl border border-white/[0.08] bg-gradient-to-b from-[#0e0c0b]/80 to-[#0a0908]/80 p-6 backdrop-blur-sm">
                        <p className="mb-5 font-mono text-[10px] uppercase tracking-[0.16em] text-platinum/35">
                            Permission Hierarchy
                        </p>

                        <div className="relative pl-6">
                            {/* Vertical line */}
                            <div className="absolute left-[7px] top-1 bottom-1 w-px bg-white/[0.06]" />

                            <div className="space-y-4">
                                {hierarchy.map((node, i) => (
                                    <motion.div
                                        key={node.label}
                                        className="relative"
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                                        transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                                    >
                                        {/* Dot */}
                                        <div className="absolute -left-6 top-2.5 flex h-[14px] w-[14px] items-center justify-center">
                                            <div className="h-[6px] w-[6px] rounded-full bg-white/15" />
                                        </div>

                                        {/* Node label */}
                                        <button
                                            onClick={() =>
                                                setExpanded(expanded === node.label ? null : node.label)
                                            }
                                            onMouseEnter={() => setExpanded(node.label)}
                                            className="flex items-center gap-2 text-[14px] font-medium text-platinum/70 transition-colors hover:text-platinum/90"
                                        >
                                            <span>{node.label}</span>
                                            {node.children && (
                                                <span className="text-[10px] text-platinum/30">
                                                    {expanded === node.label ? "−" : "+"}
                                                </span>
                                            )}
                                        </button>

                                        {/* Expanded children */}
                                        <AnimatePresence>
                                            {expanded === node.label && node.children && (
                                                <motion.div
                                                    className="mt-2 ml-4 flex flex-wrap gap-2"
                                                    initial={{ opacity: 0, height: 0 }}
                                                    animate={{ opacity: 1, height: "auto" }}
                                                    exit={{ opacity: 0, height: 0 }}
                                                    transition={{ duration: 0.2 }}
                                                >
                                                    {node.children.map((child) => (
                                                        <span
                                                            key={child}
                                                            className="rounded-md border border-white/[0.06] bg-white/[0.02] px-2.5 py-1 font-mono text-[11px] text-platinum/45"
                                                        >
                                                            {child}
                                                        </span>
                                                    ))}
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
