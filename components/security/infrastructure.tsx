import { SerratedDivider } from "@/components/ui/serrated-divider";

const infraCategories = [
    {
        title: "Hosting",
        items: [
            "Cloud infrastructure with SOC 2 Type II compliance path",
            "Encrypted at rest (AES-256) and in transit (TLS 1.3)",
            "Regular security audits and penetration testing",
        ],
    },
    {
        title: "Backups",
        items: [
            "Automated daily backups with 30-day retention",
            "Point-in-time recovery capabilities",
            "Geographically distributed for resilience",
        ],
    },
    {
        title: "Monitoring",
        items: [
            "Real-time security monitoring",
            "Anomaly detection",
            "Incident response procedures",
        ],
    },
];

export function Infrastructure() {
    return (
        <section className="px-6 py-20">
            <div className="mx-auto max-w-7xl">
                <div className="mb-8">
                    <p className="ui-label mb-3">Systems</p>
                    <h2 className="editorial-h2 max-w-3xl text-platinum">
                        <em>Infrastructure</em>
                    </h2>
                </div>

                <div className="surface-panel relative overflow-hidden p-6 md:p-8">
                    <SerratedDivider className="absolute left-0 right-0 top-0" />

                    <div className="grid gap-4 pt-5 md:grid-cols-3">
                        {infraCategories.map((cat) => (
                            <article key={cat.title} className="surface-card p-6">
                                <h3 className="editorial-h3 mb-4 text-[1.25rem] text-platinum">{cat.title}</h3>
                                <ul className="space-y-3">
                                    {cat.items.map((item) => (
                                        <li key={item} className="flex items-start gap-3 text-[15px] text-platinum/76">
                                            <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-blue-electric" />
                                            <span>{item}</span>
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
