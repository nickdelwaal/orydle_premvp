import { SerratedDivider } from "@/components/ui/serrated-divider";

const components = [
  {
    title: "Visual Builder",
    items: [
      "Services with boundaries",
      "Data flows with contracts",
      "Agent behaviors with constraints",
      "Resources with ownership",
    ],
    intro: "Design systems using structured visual elements:",
    outro: "Not drawings. Structured system objects that become real architecture.",
  },
  {
    title: "System Model",
    items: [
      "Stores your system as queryable data",
      "Understands dependencies and constraints",
      "Acts as single source of truth",
      "Validates changes against architectural rules",
    ],
    intro: "The heart of Krum. A formal graph that:",
    outro: "Every feature reads from or writes to this model.",
  },
  {
    title: "Code Generation",
    items: [
      "Project structure matching your design",
      "Service boundaries and interfaces",
      "Boilerplate and connective logic",
      "Implementation scaffolding",
    ],
    intro: "From the system model, we produce:",
    outro: "The code is real, editable, and yours. We don\u2019t hide complexity\u2014we organize it.",
  },
  {
    title: "AI Assistance",
    items: [
      "Expand intent into structure",
      "Suggest refinements",
      "Generate implementation details",
    ],
    intro: "AI helps you:",
    outro: "But AI is not the source of truth. The system model is. AI suggestions are constrained by architectural rules.",
  },
];

export function EngineeringPhilosophy() {
  return (
    <section className="px-6 pb-24 pt-12">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8 text-center">
          <p className="ui-label mb-3">Core Components</p>
          <h2 className="editorial-h2 text-platinum">
            Four layers of <em>system-first development</em>
          </h2>
        </div>

        <div className="surface-panel relative overflow-hidden p-6 md:p-8">
          <SerratedDivider className="absolute left-0 right-0 top-0" />

          <div className="grid gap-6 pt-4 md:grid-cols-2">
            {components.map((comp, index) => (
              <article key={comp.title} className="surface-card p-6">
                <div className="mb-4 flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-[#0f0d0c] font-mono text-[11px] text-blue-electric">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="editorial-h3 text-[1.35rem] text-platinum">{comp.title}</h3>
                </div>
                <p className="mb-3 text-[15px] text-platinum/70">{comp.intro}</p>
                <ul className="mb-4 space-y-2">
                  {comp.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-[15px] text-platinum/80">
                      <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-blue-electric" />
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="border-t border-white/10 pt-3 text-[14px] text-platinum/60">{comp.outro}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
