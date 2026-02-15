import { SerratedDivider } from "@/components/ui/serrated-divider";

const capabilities = [
    "Architecture is a formal, queryable model",
    "Visual design generates real structure",
    "Code follows architecture, not the other way around",
    "Changes preserve intent-structure-execution alignment",
];

export function WhatWereBuilding() {
    return (
        <section className="px-6 py-20">
            <div className="mx-auto max-w-6xl">
                <div className="mb-8">
                    <p className="ui-label mb-3">Core Product</p>
                    <h2 className="editorial-h2 max-w-3xl text-platinum">
                        What we&apos;re <em>building</em>
                    </h2>
                </div>

                <div className="surface-panel relative overflow-hidden p-6 md:p-8">
                    <SerratedDivider className="absolute left-0 right-0 top-0" />

                    <div className="space-y-6 pt-5">
                        <p className="text-[18px] text-platinum/70">
                            A system-first development environment where:
                        </p>

                        <ul className="space-y-3">
                            {capabilities.map((item) => (
                                <li key={item} className="surface-card flex items-start gap-3 p-5 text-platinum/82">
                                    <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-blue-electric" />
                                    <span className="text-[16px]">{item}</span>
                                </li>
                            ))}
                        </ul>

                        <div className="rounded-2xl border border-blue-electric/30 bg-blue-electric/10 p-5 text-center text-[16px] text-platinum/84">
                            Not a tool. A new way to build.
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
