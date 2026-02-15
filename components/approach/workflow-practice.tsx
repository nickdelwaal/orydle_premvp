import { SerratedDivider } from "@/components/ui/serrated-divider";

const steps = [
    {
        id: "01",
        title: "Design",
        intro: "Use Krum\u2019s visual builder to compose system structure",
        items: [
            "Add services, define boundaries",
            "Specify flows and contracts",
            "Attach intent to components",
        ],
    },
    {
        id: "02",
        title: "Generate",
        intro: "System produces formal architecture model",
        items: [
            "Graph of dependencies",
            "Validated against constraints",
            "Becomes queryable source of truth",
        ],
    },
    {
        id: "03",
        title: "Implement",
        intro: "Code generation creates scaffolding",
        items: [
            "Project structure",
            "Interfaces and types",
            "Boilerplate logic",
            "You fill in business logic",
        ],
    },
    {
        id: "04",
        title: "Evolve",
        intro: "Make changes at any layer",
        items: [
            "Visual redesign → code updates",
            "Code refactor → structure validates",
            "Intent shift → propagates through system",
        ],
    },
];

export function WorkflowPractice() {
    return (
        <section className="px-6 pb-24 pt-12">
            <div className="mx-auto max-w-6xl">
                <div className="mb-8 text-center">
                    <p className="ui-label mb-3">In Practice</p>
                    <h2 className="editorial-h2 text-platinum">
                        Workflow in <em>practice</em>
                    </h2>
                </div>

                <div className="surface-panel relative overflow-hidden p-6 md:p-8">
                    <SerratedDivider className="absolute left-0 right-0 top-0" />

                    <ol className="relative space-y-4 pt-4">
                        <div className="absolute bottom-0 left-[22px] top-5 hidden w-px bg-white/12 md:block" aria-hidden="true" />

                        {steps.map((step) => (
                            <li key={step.id} className="surface-card relative grid gap-4 p-5 md:grid-cols-[40px_1fr] md:items-start">
                                <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-[#0f0d0c] font-mono text-[11px] text-blue-electric">
                                    {step.id}
                                </span>
                                <div>
                                    <h3 className="editorial-h3 text-[1.35rem] text-platinum">{step.title}</h3>
                                    <p className="mt-2 text-[15px] text-platinum/70">{step.intro}</p>
                                    <ul className="mt-3 space-y-1.5">
                                        {step.items.map((item) => (
                                            <li key={item} className="flex items-start gap-2 text-[15px] text-platinum/80">
                                                <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-blue-electric" />
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </li>
                        ))}
                    </ol>
                </div>
            </div>
        </section>
    );
}
