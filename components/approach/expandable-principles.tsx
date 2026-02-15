import { SerratedDivider } from "@/components/ui/serrated-divider";

const degradePoints = [
  "Architecture docs go stale within weeks",
  "Engineers guess at system boundaries",
  "AI tools write syntactically correct but architecturally wrong code",
  "Onboarding takes weeks because 'the code is the documentation'",
];

export function AlignmentProblem() {
  return (
    <section className="px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8">
          <p className="ui-label mb-3">The Alignment Problem</p>
          <h2 className="editorial-h2 max-w-3xl text-platinum">
            Why systems <em>degrade</em>
          </h2>
        </div>

        <div className="surface-panel relative overflow-hidden p-6 md:p-8">
          <SerratedDivider className="absolute left-0 right-0 top-0" />

          <p className="mb-6 pt-5 text-[18px] text-platinum/70">As codebases grow:</p>

          <ul className="space-y-3">
            {degradePoints.map((point) => (
              <li key={point} className="surface-card flex items-start gap-3 p-5 text-platinum/82">
                <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-blue-electric" />
                <span className="text-[16px]">{point}</span>
              </li>
            ))}
          </ul>

          <div className="mt-6 rounded-2xl border border-blue-electric/30 bg-blue-electric/10 p-5 text-center text-[16px] text-platinum/84">
            The problem isn&apos;t lack of documentation. It&apos;s lack of enforced structural truth.
          </div>
        </div>
      </div>
    </section>
  );
}
