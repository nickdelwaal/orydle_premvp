import { SerratedDivider } from "@/components/ui/serrated-divider";

const philosophyPoints = [
  "Understand how the software system is structured",
  "Identify precise and safe change points",
  "Plan impact-aware modifications with human review",
  "Execute only after architecture-level clarity",
];

export function Philosophy() {
  return (
    <section className="px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8">
          <p className="ui-label mb-3">Philosophy</p>
          <h2 className="editorial-h2 max-w-3xl text-platinum">
            Krum starts with understanding, not immediate generation.
          </h2>
        </div>

        <div className="surface-panel relative overflow-hidden p-6 md:p-8">
          <SerratedDivider className="absolute left-0 right-0 top-0" />

          <ul className="grid gap-4 pt-4 md:grid-cols-2">
            {philosophyPoints.map((point, index) => (
              <li key={point} className="surface-card flex gap-4 p-5">
                <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-blue-electric">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="text-[16px] text-platinum/82">{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
