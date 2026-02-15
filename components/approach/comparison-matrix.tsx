import { SerratedDivider } from "@/components/ui/serrated-divider";

const scenarios = [
  {
    trigger: "When you change the Intent Layer:",
    outcomes: [
      "Structure updates to match",
      "Execution scaffolding regenerates",
    ],
    fallback: "System flags conflicts and requires resolution",
  },
  {
    trigger: "When you change the Structure Layer:",
    outcomes: [
      "Intent validation runs",
      "Execution code updates",
    ],
    fallback: "Dependency violations surface immediately",
  },
  {
    trigger: "When you change the Execution Layer:",
    outcomes: [
      "Structure consistency check runs",
      "Intent alignment verified",
    ],
    fallback: "Change is rejected with explanation",
  },
];

export function EnforcementModel() {
  return (
    <section className="px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8 text-center">
          <p className="ui-label mb-3">Enforcement</p>
          <h2 className="editorial-h2 text-platinum">
            Changes propagate or get <em>rejected</em>
          </h2>
        </div>

        <div className="surface-panel relative overflow-hidden p-6 md:p-8">
          <SerratedDivider className="absolute left-0 right-0 top-0" />

          <div className="grid gap-6 pt-4 md:grid-cols-3">
            {scenarios.map((scenario) => (
              <article key={scenario.trigger} className="surface-card p-6">
                <p className="mb-4 font-mono text-[11px] uppercase tracking-[0.16em] text-blue-electric">
                  {scenario.trigger}
                </p>
                <div className="space-y-2">
                  {scenario.outcomes.map((outcome) => (
                    <p key={outcome} className="flex items-start gap-2 text-[15px] text-platinum/80">
                      <span className="shrink-0 text-platinum/50">→</span>
                      {outcome}
                    </p>
                  ))}
                  <p className="flex items-start gap-2 text-[15px] text-platinum/60">
                    <span className="shrink-0 text-platinum/50">→</span>
                    <span>OR: {scenario.fallback}</span>
                  </p>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-6 rounded-2xl border border-blue-electric/30 bg-blue-electric/10 p-5 text-center text-[16px] text-platinum/84">
            This isn&apos;t CI/CD. This is architectural governance as a first-class system.
          </div>
        </div>
      </div>
    </section>
  );
}
