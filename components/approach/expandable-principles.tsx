"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { SerratedDivider } from "@/components/ui/serrated-divider";
import { cn } from "@/lib/utils";

const principles = [
  {
    title: "System-first thinking",
    detail:
      "Before touching code, map services, boundaries, dependencies, and ownership. Understand structure before suggesting changes.",
  },
  {
    title: "Plan before change",
    detail:
      "Propose impact-aware changes first. Encourage human review at decision points instead of rushing directly into generation.",
  },
  {
    title: "Collaboration over automation",
    detail:
      "The objective is stronger engineering judgment. AI should elevate team decisions, not bypass them.",
  },
  {
    title: "Context-aware execution",
    detail:
      "When changes are applied, they should match the architecture, constraints, and conventions of the system.",
  },
];

export function ExpandablePrinciples() {
  const [openIndex, setOpenIndex] = useState<number>(0);

  return (
    <section className="px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8">
          <p className="ui-label mb-3">Core Principles</p>
          <h2 className="editorial-h2 max-w-3xl text-platinum">
            Four rules that keep AI-assisted engineering <em>safe and useful</em>.
          </h2>
        </div>

        <div className="surface-panel relative overflow-hidden p-4 md:p-6">
          <SerratedDivider className="absolute left-0 right-0 top-0" />

          <div className="space-y-3 pt-4">
            {principles.map((item, index) => {
              const isOpen = index === openIndex;

              return (
                <article key={item.title} className={cn("surface-card overflow-hidden", isOpen && "border-blue-electric/45")}> 
                  <button
                    type="button"
                    onClick={() => setOpenIndex((prev) => (prev === index ? -1 : index))}
                    className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                    aria-expanded={isOpen}
                  >
                    <div className="flex items-center gap-4">
                      <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-platinum/55">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <h3 className="editorial-h3 text-[1.45rem] text-platinum">{item.title}</h3>
                    </div>
                    <span className="text-platinum/70">
                      <svg viewBox="0 0 24 24" className={cn("h-5 w-5 transition-transform", isOpen && "rotate-180")} fill="none" stroke="currentColor" strokeWidth="1.8">
                        <path d="m6 9 6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen ? (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        className="border-t border-white/10"
                      >
                        <p className="px-5 py-5 text-[16px] leading-relaxed text-platinum/74">{item.detail}</p>
                      </motion.div>
                    ) : null}
                  </AnimatePresence>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
