import { SerratedDivider } from "@/components/ui/serrated-divider";
import { ScrollFadeIn } from "@/components/ui/scroll-fade-in";

const rows = [
  { not: "A diagramming tool", is: "Architecture as data" },
  { not: "A low-code toy", is: "Code that follows structure" },
  { not: "A black-box AI generator", is: "AI constrained by your model" },
  { not: "Documentation software", is: "Enforced structural truth" },
];

export function WhatItIs() {
  return (
    <section className="px-6 py-16">
      <div className="mx-auto max-w-3xl">
        <ScrollFadeIn>
          <p className="ui-label mb-3 text-center">WHAT KRUM IS NOT</p>
          <h2 className="editorial-h2 mb-10 text-center text-platinum">
            Built to replace <em>the wrong tools</em>
          </h2>
        </ScrollFadeIn>

        <ScrollFadeIn delay={0.1}>
          <div className="surface-panel relative overflow-hidden">
            <SerratedDivider className="absolute left-0 right-0 top-0" />

            {/* Column headers */}
            <div className="grid grid-cols-2 gap-px pt-8">
              <div className="px-6 pb-3">
                <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-platinum/30">Not this</span>
              </div>
              <div className="px-6 pb-3">
                <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-[#255bfc]/70">This</span>
              </div>
            </div>

            {/* Divider */}
            <div className="mx-6 border-t border-white/8" />

            {/* Rows */}
            <div className="flex flex-col">
              {rows.map((row) => (
                <div
                  key={row.not}
                  className="group grid grid-cols-2 gap-px transition-colors duration-200 hover:bg-white/[0.02]"
                >
                  <div className="flex items-center gap-3 px-6 py-4 border-b border-white/6">
                    <span className="text-[14px] text-red-400/60">✕</span>
                    <span className="text-[15px] text-platinum/45 line-through decoration-platinum/20">{row.not}</span>
                  </div>
                  <div className="flex items-center gap-3 px-6 py-4 border-b border-white/6 border-l border-l-white/6">
                    <span className="text-[14px] text-[#255bfc]">✓</span>
                    <span className="text-[15px] text-platinum/80 font-medium">{row.is}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </ScrollFadeIn>
      </div>
    </section>
  );
}
