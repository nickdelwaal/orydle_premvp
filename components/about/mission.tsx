import { SerratedDivider } from "@/components/ui/serrated-divider";

const driftCauses = [
  "Slow onboarding (weeks to understand codebases)",
  "Risky changes (unknown blast radius)",
  "AI confusion (tools optimize locally, break globally)",
  "Team misalignment (everyone has different mental models)",
];

export function Mission() {
  return (
    <section className="px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8">
          <p className="ui-label mb-3">Our Thesis</p>
          <h2 className="editorial-h2 max-w-3xl text-platinum">
            The architectural drift <em>problem</em>
          </h2>
        </div>

        <article className="surface-panel relative overflow-hidden p-8 md:p-10">
          <SerratedDivider className="absolute left-0 right-0 top-0" />

          <div className="space-y-6 pt-4">
            <p className="text-[18px] leading-relaxed text-platinum/72">
              Modern development has a structural flaw:
            </p>

            <div className="grid gap-6 md:grid-cols-2">
              <div className="surface-card p-6">
                <p className="mb-2 font-mono text-[10px] uppercase tracking-[0.16em] text-blue-electric">First-class</p>
                <p className="text-[16px] text-platinum/82">
                  <strong className="text-platinum">Code</strong> is first-class. You can compile it, run it, test it, deploy it.
                </p>
              </div>
              <div className="surface-card p-6">
                <p className="mb-2 font-mono text-[10px] uppercase tracking-[0.16em] text-platinum/55">Second-class</p>
                <p className="text-[16px] text-platinum/70">
                  <strong className="text-platinum/85">Architecture</strong> is second-class. It lives in docs, diagrams, and tribal knowledge. It drifts. It goes stale. It becomes fiction.
                </p>
              </div>
            </div>

            <div>
              <p className="mb-4 text-[16px] text-platinum/70">This causes:</p>
              <ul className="space-y-3">
                {driftCauses.map((cause) => (
                  <li key={cause} className="surface-card flex items-start gap-3 p-4 text-[16px] text-platinum/82">
                    <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-blue-electric" />
                    <span>{cause}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl border border-blue-electric/30 bg-blue-electric/10 p-5 text-center text-[16px] text-platinum/84">
              Our solution: Make architecture first-class data.
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
