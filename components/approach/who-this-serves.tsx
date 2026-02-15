import { SerratedDivider } from "@/components/ui/serrated-divider";

const primaryUsers = [
    "Engineers building complex, multi-service systems",
    "AI-first product teams where speed must not sacrifice clarity",
    "Startups scaling beyond \u2018tribal knowledge\u2019 phase",
];

const secondaryUsers = [
    "Product managers reasoning about system changes",
    "Technical founders aligning teams around shared mental models",
    "Architects designing long-term structure with enforcement",
];

export function WhoThisServes() {
    return (
        <section className="px-6 pb-24 pt-6">
            <div className="mx-auto max-w-6xl">
                <div className="mb-8 text-center">
                    <p className="ui-label mb-3">Audience</p>
                    <h2 className="editorial-h2 text-platinum">
                        Who this <em>serves</em>
                    </h2>
                </div>

                <div className="surface-panel relative overflow-hidden p-6 md:p-8">
                    <SerratedDivider className="absolute left-0 right-0 top-0" />

                    <div className="grid gap-6 pt-4 md:grid-cols-2">
                        <article className="surface-card border-blue-electric/40 p-6">
                            <p className="mb-4 font-mono text-[10px] uppercase tracking-[0.16em] text-blue-electric">
                                Primary Users
                            </p>
                            <ul className="space-y-3">
                                {primaryUsers.map((user) => (
                                    <li key={user} className="flex items-start gap-3 text-[16px] text-platinum/82">
                                        <span className="mt-[7px] h-2 w-2 shrink-0 rounded-full bg-blue-electric" />
                                        <span>{user}</span>
                                    </li>
                                ))}
                            </ul>
                        </article>

                        <article className="surface-card p-6">
                            <p className="mb-4 font-mono text-[10px] uppercase tracking-[0.16em] text-platinum/55">
                                Secondary Users
                            </p>
                            <ul className="space-y-3">
                                {secondaryUsers.map((user) => (
                                    <li key={user} className="flex items-start gap-3 text-[16px] text-platinum/75">
                                        <span className="mt-[7px] h-2 w-2 shrink-0 rounded-full bg-platinum/45" />
                                        <span>{user}</span>
                                    </li>
                                ))}
                            </ul>
                        </article>
                    </div>
                </div>
            </div>
        </section>
    );
}
