import { SerratedDivider } from "@/components/ui/serrated-divider";

const notItems = [
  "Not a drag-and-drop website builder",
  "Not a low-code toy",
  "Not a diagramming or whiteboarding app",
  "Not a black-box AI code generator",
];

export function WhatItIs() {
  return (
    <section className="px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8 text-center">
          <p className="ui-label mb-3">Positioning</p>
          <h2 className="editorial-h2 text-platinum">
            What we&apos;re <em>NOT</em> building
          </h2>
        </div>

        <div className="surface-panel relative overflow-hidden p-6 md:p-8">
          <SerratedDivider className="absolute left-0 right-0 top-0" />

          <p className="mb-6 pt-5 font-mono text-[10px] uppercase tracking-[0.16em] text-platinum/55">
            Critical for positioning
          </p>

          <div className="space-y-3">
            {notItems.map((item) => (
              <div key={item} className="surface-card flex items-center gap-3 p-5">
                <span className="text-[18px] text-red-400">✕</span>
                <span className="text-[16px] text-platinum/75">{item}</span>
              </div>
            ))}
          </div>

          <div className="mt-6 rounded-2xl border border-blue-electric/30 bg-blue-electric/10 p-5 text-center">
            <span className="mr-2 text-[18px] text-blue-electric">✓</span>
            <span className="text-[16px] text-platinum/84">
              A system-first development environment where architecture is data, not documentation.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
