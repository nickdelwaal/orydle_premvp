"use client";
import { ScrollFadeIn } from "@/components/ui/scroll-fade-in";

const audience = [
    {
        title: "Multi-service engineering teams",
        body: "Building complex systems where boundaries matter and drift kills velocity.",
    },
    {
        title: "AI-first product teams",
        body: "Where AI writes code — and you need a way to ensure it stays architecturally correct.",
    },
    {
        title: "Scaling startups",
        body: "Past the point where everyone knows the system in their head. Before the point where it's too late to enforce structure.",
    },
];

export function WhoItsFor() {
    return (
        <section className="px-6 py-16">
            <div className="mx-auto max-w-5xl">
                <ScrollFadeIn>
                    <p className="ui-label mb-3 text-center">WHO KRUM IS FOR</p>
                    <h2 className="editorial-h2 mb-12 text-center text-platinum">
                        Built for engineers who <em>think in systems</em>
                    </h2>
                </ScrollFadeIn>

                <div className="grid gap-4 md:grid-cols-3">
                    {audience.map((item, i) => (
                        <ScrollFadeIn key={item.title} delay={i * 0.1}>
                            <article className="group h-full rounded-2xl border border-white/8 bg-gradient-to-b from-[#1c1917]/60 to-[#0c0a09]/40 p-7 transition-all duration-300 hover:-translate-y-1 hover:border-white/16 hover:shadow-[0_8px_32px_rgba(0,0,0,0.3)]">
                                <h3 className="editorial-h3 mb-3 text-[1.1rem] text-platinum/85 leading-snug">
                                    {item.title}
                                </h3>
                                <p className="text-[14.5px] leading-relaxed text-platinum/50">
                                    {item.body}
                                </p>
                            </article>
                        </ScrollFadeIn>
                    ))}
                </div>
            </div>
        </section>
    );
}
