import { SerratedDivider } from "@/components/ui/serrated-divider";

const accessControlItems = [
    "View system architecture",
    "Modify structure",
    "Generate code",
    "Export data",
];

const auditItems = [
    "Architecture changes",
    "Code generation events",
    "Access patterns",
    "Permission modifications",
];

export function ArchitectureSecurity() {
    return (
        <section className="px-6 py-20">
            <div className="mx-auto max-w-7xl">
                <div className="mb-8">
                    <p className="ui-label mb-3">Protection</p>
                    <h2 className="editorial-h2 max-w-3xl text-platinum">
                        Architecture <em>security</em>
                    </h2>
                </div>

                <div className="surface-panel relative overflow-hidden p-6 md:p-8">
                    <SerratedDivider className="absolute left-0 right-0 top-0" />

                    <div className="grid gap-4 pt-5 md:grid-cols-3">
                        {/* Model Isolation */}
                        <article className="surface-card p-6">
                            <h3 className="editorial-h3 mb-4 text-[1.25rem] text-platinum">Model Isolation</h3>
                            <p className="text-[15px] leading-relaxed text-platinum/76">
                                Each system model is isolated in its own namespace. No cross-contamination between organizations.
                            </p>
                        </article>

                        {/* Access Controls */}
                        <article className="surface-card p-6">
                            <h3 className="editorial-h3 mb-4 text-[1.25rem] text-platinum">Access Controls</h3>
                            <p className="mb-3 text-[15px] text-platinum/76">Role-based permissions govern who can:</p>
                            <ul className="space-y-2">
                                {accessControlItems.map((item) => (
                                    <li key={item} className="flex items-start gap-3 text-[15px] text-platinum/76">
                                        <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-blue-electric" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </article>

                        {/* Audit Logging */}
                        <article className="surface-card p-6">
                            <h3 className="editorial-h3 mb-4 text-[1.25rem] text-platinum">Audit Logging</h3>
                            <p className="mb-3 text-[15px] text-platinum/76">Complete audit trail of:</p>
                            <ul className="space-y-2">
                                {auditItems.map((item) => (
                                    <li key={item} className="flex items-start gap-3 text-[15px] text-platinum/76">
                                        <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-blue-electric" />
                                        <span>{item}</span>
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
