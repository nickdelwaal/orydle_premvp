import { SerratedDivider } from "@/components/ui/serrated-divider";

const privacyItems = [
    {
        title: "No Training on Your Data",
        detail:
            "Your system models, code, and intent are never used to train AI models\u2014ours or third-party.",
    },
    {
        title: "Constrained AI Usage",
        detail:
            "AI assistance operates within your architectural constraints and cannot access other customers\u2019 patterns.",
    },
    {
        title: "Transparent Processing",
        detail:
            "You can see what data AI components access when making suggestions.",
    },
];

export function AiPrivacy() {
    return (
        <section className="px-6 py-20">
            <div className="mx-auto max-w-7xl">
                <div className="mb-8">
                    <p className="ui-label mb-3">Privacy</p>
                    <h2 className="editorial-h2 max-w-3xl text-platinum">
                        AI and <em>privacy</em>
                    </h2>
                </div>

                <div className="surface-panel relative overflow-hidden p-6 md:p-8">
                    <SerratedDivider className="absolute left-0 right-0 top-0" />

                    <div className="grid gap-4 pt-5 md:grid-cols-3">
                        {privacyItems.map((item) => (
                            <article key={item.title} className="surface-card p-6">
                                <h3 className="editorial-h3 mb-3 text-[1.25rem] text-platinum">{item.title}</h3>
                                <p className="text-[15px] leading-relaxed text-platinum/76">{item.detail}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
