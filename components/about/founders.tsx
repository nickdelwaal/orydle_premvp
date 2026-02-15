import { SerratedDivider } from "@/components/ui/serrated-divider";

const principles = [
  {
    title: "Architecture is Data",
    detail: "Not documentation. Not diagrams. A formal model that governs your system.",
  },
  {
    title: "Visual \u2260 Toy",
    detail: "Structured visual composition can be more precise than code for system design.",
  },
  {
    title: "AI is Constrained",
    detail: "AI assistance is powerful when bounded by architectural rules. Dangerous when unbounded.",
  },
  {
    title: "Clarity Compounds",
    detail: "Systems that stay understood enable faster, safer evolution. Confusion compounds into paralysis.",
  },
  {
    title: "Generated Code is Real",
    detail: "We produce editable, production-ready code. You own it. We organize it.",
  },
];

export function Founders() {
  return (
    <section className="px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8 text-center">
          <p className="ui-label mb-3">Beliefs</p>
          <h2 className="editorial-h2 text-platinum">
            Our <em>principles</em>
          </h2>
        </div>

        <div className="surface-panel relative overflow-hidden p-6 md:p-8">
          <SerratedDivider className="absolute left-0 right-0 top-0" />

          <div className="space-y-3 pt-4">
            {principles.map((item, index) => (
              <article key={item.title} className="surface-card flex gap-4 p-5">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/20 bg-[#0f0d0c] font-mono text-[11px] text-blue-electric">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="editorial-h3 text-[1.25rem] text-platinum">{item.title}</h3>
                  <p className="mt-2 text-[16px] text-platinum/72">{item.detail}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
