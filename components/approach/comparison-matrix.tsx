import { SerratedDivider } from "@/components/ui/serrated-divider";

const traditional = [
  "Generate code before understanding architecture",
  "Narrow file-level context",
  "Weak visibility into system impact",
  "Reactive bug chasing after merge",
  "Low confidence under production constraints",
];

const systemFirst = [
  "Map services, boundaries, and dependencies first",
  "Model impact before proposing modifications",
  "Review change plans with humans before execution",
  "Apply context-aware changes tied to architecture",
  "Ship with higher confidence and lower rollback risk",
];

export function ComparisonMatrix() {
  return (
    <section className="px-6 pb-24 pt-14">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 text-center">
          <p className="ui-label mb-3">Comparison</p>
          <h2 className="editorial-h2 text-platinum">
            Prompt-first vs <em>system-first</em> execution.
          </h2>
        </div>

        <div className="surface-panel relative overflow-hidden p-6 md:p-8">
          <SerratedDivider className="absolute left-0 right-0 top-0" />

          <div className="grid gap-6 pt-4 md:grid-cols-2">
            <article className="surface-card p-6">
              <h3 className="editorial-h3 mb-5 text-[1.4rem] text-platinum/85">Traditional Prompt-first</h3>
              <ul className="space-y-3">
                {traditional.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-[16px] text-platinum/65">
                    <span className="mt-[7px] h-2 w-2 shrink-0 rounded-full bg-platinum/45" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>

            <article className="surface-card border-blue-electric/40 p-6">
              <h3 className="editorial-h3 mb-5 text-[1.4rem] text-platinum">Orydle System-first</h3>
              <ul className="space-y-3">
                {systemFirst.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-[16px] text-platinum/82">
                    <span className="mt-[7px] h-2 w-2 shrink-0 rounded-full bg-blue-electric" />
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
