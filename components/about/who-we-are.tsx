import { SerratedDivider } from "@/components/ui/serrated-divider";

const painPoints = [
    "Architecture diagrams that lie",
    "Onboarding that takes months",
    "Changes blocked by fear of unknown consequences",
    "AI tools that accelerate chaos",
];

export function WhoWeAre() {
    return (
        <section className="px-6 py-20">
            <div className="mx-auto max-w-6xl">
                <div className="mb-8">
                    <p className="ui-label mb-3">Team</p>
                    <h2 className="editorial-h2 max-w-3xl text-platinum">
                        Who we <em>are</em>
                    </h2>
                </div>

                <div className="surface-panel relative overflow-hidden p-8 md:p-10">
                    <SerratedDivider className="absolute left-0 right-0 top-0" />

                    <div className="space-y-6 pt-4">
                        <p className="text-[18px] leading-relaxed text-platinum/72">
                            We&apos;re engineers who&apos;ve scaled systems and watched them degrade into confusion. We&apos;ve seen:
                        </p>

                        <ul className="grid gap-3 md:grid-cols-2">
                            {painPoints.map((point) => (
                                <li key={point} className="surface-card flex items-start gap-3 p-5 text-[16px] text-platinum/82">
                                    <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-blue-electric" />
                                    <span>{point}</span>
                                </li>
                            ))}
                        </ul>

                        <p className="text-[18px] leading-relaxed text-platinum/72">
                            We&apos;re building Krum because the alternative&mdash;living with architectural drift as inevitable&mdash;is unacceptable.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
