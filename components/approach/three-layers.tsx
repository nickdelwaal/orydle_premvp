import { SerratedDivider } from "@/components/ui/serrated-divider";

const layers = [
    {
        id: "01",
        name: "Intent",
        description: "What the system is supposed to do",
        items: [
            "Business requirements",
            "Constraints and invariants",
            "Non-functional requirements",
            "Architectural decisions",
        ],
    },
    {
        id: "02",
        name: "Structure",
        description: "How the system is composed",
        items: [
            "Services and boundaries",
            "Data flows and contracts",
            "Component relationships",
            "Dependency rules",
        ],
    },
    {
        id: "03",
        name: "Execution",
        description: "The actual running code",
        items: [
            "Implementation files",
            "Service logic",
            "Infrastructure code",
            "Tests and validations",
        ],
    },
];

export function ThreeLayers() {
    return (
        <section className="px-6 py-20">
            <div className="mx-auto max-w-6xl">
                <div className="mb-8">
                    <p className="ui-label mb-3">Architecture Model</p>
                    <h2 className="editorial-h2 max-w-3xl text-platinum">
                        The three layers of system <em>alignment</em>:
                    </h2>
                </div>

                <div className="surface-panel relative overflow-hidden p-6 md:p-8">
                    <SerratedDivider className="absolute left-0 right-0 top-0" />

                    <div className="grid gap-6 pt-4 md:grid-cols-3">
                        {layers.map((layer) => (
                            <article key={layer.id} className="surface-card p-6">
                                <div className="mb-4 flex items-center gap-3">
                                    <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-[#0f0d0c] font-mono text-[11px] text-blue-electric">
                                        {layer.id}
                                    </span>
                                    <h3 className="editorial-h3 text-[1.35rem] text-platinum">{layer.name}</h3>
                                </div>
                                <p className="mb-4 text-[15px] text-platinum/70">{layer.description}</p>
                                <ul className="space-y-2">
                                    {layer.items.map((item) => (
                                        <li key={item} className="flex items-start gap-2 text-[15px] text-platinum/80">
                                            <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-blue-electric" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </article>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
