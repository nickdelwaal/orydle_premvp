import { SerratedDivider } from "@/components/ui/serrated-divider";

const principles = [
  "Code and repository context are treated as sensitive by default",
  "Least-privilege access and explicit intent for operations",
  "Strong separation across environments and execution boundaries",
  "Clear data handling and reviewability at workflow checkpoints",
  "Security decisions documented alongside implementation context",
  "Design-partner feedback loops for hardening before broad rollout",
];

export function Principles() {
  return (
    <section className="px-6 py-20">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8">
          <p className="ui-label mb-3">Principles</p>
          <h2 className="editorial-h2 max-w-3xl text-platinum">
            Security expectations set at the <em>foundation layer</em>.
          </h2>
        </div>

        <div className="surface-panel relative overflow-hidden p-6 md:p-8">
          <SerratedDivider className="absolute left-0 right-0 top-0" />

          <div className="grid gap-4 pt-5 md:grid-cols-2">
            {principles.map((item, index) => (
              <article key={item} className="surface-card flex gap-4 p-5">
                <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-blue-electric">
                  P{String(index + 1).padStart(2, "0")}
                </span>
                <p className="text-[16px] text-platinum/82">{item}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
