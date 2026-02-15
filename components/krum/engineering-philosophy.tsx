import { SerratedDivider } from "@/components/ui/serrated-divider";

const steps = [
  {
    title: "Map the system",
    detail: "Identify components, dependencies, owners, and service boundaries before touching code.",
  },
  {
    title: "Locate change points",
    detail: "Find where modifications should happen and model potential impact across interfaces.",
  },
  {
    title: "Review the plan",
    detail: "Surface assumptions and validate proposed changes with humans before execution.",
  },
  {
    title: "Execute with context",
    detail: "Apply implementation steps that align with existing architecture and operational constraints.",
  },
];

export function EngineeringPhilosophy() {
  return (
    <section className="px-6 pb-24 pt-12">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8 text-center">
          <p className="ui-label mb-3">How It Works</p>
          <h2 className="editorial-h2 text-platinum">
            Engineering flow that mirrors real <em>production practice</em>.
          </h2>
        </div>

        <div className="surface-panel relative overflow-hidden p-6 md:p-8">
          <SerratedDivider className="absolute left-0 right-0 top-0" />

          <ol className="relative space-y-4 pt-4">
            <div className="absolute bottom-0 left-[22px] top-5 hidden w-px bg-white/12 md:block" aria-hidden="true" />

            {steps.map((step, index) => (
              <li key={step.title} className="surface-card relative grid gap-4 p-5 md:grid-cols-[40px_1fr] md:items-start">
                <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-[#0f0d0c] font-mono text-[11px] text-blue-electric">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="editorial-h3 text-[1.35rem] text-platinum">{step.title}</h3>
                  <p className="mt-2 text-[16px] text-platinum/76">{step.detail}</p>
                </div>
              </li>
            ))}
          </ol>

          <div className="mt-6 rounded-2xl border border-blue-electric/30 bg-blue-electric/10 p-5 text-center text-[16px] text-platinum/84">
            Result: fewer blind changes, faster reviews, and stronger confidence at merge time.
          </div>
        </div>
      </div>
    </section>
  );
}
