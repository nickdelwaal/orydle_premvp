import { SerratedDivider } from "@/components/ui/serrated-divider";

const successMetrics = [
  "New engineers understand systems in hours, not weeks",
  "Architecture accuracy is guaranteed, not aspirational",
  "Generated code is trusted as a starting point",
  "Teams make changes with confidence, not fear",
];

export function Stage() {
  return (
    <section className="px-6 pb-24 pt-6">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8 text-center">
          <p className="ui-label mb-3">Vision</p>
          <h2 className="editorial-h2 text-platinum">
            What success <em>looks like</em>
          </h2>
        </div>

        <div className="surface-panel relative overflow-hidden p-6 md:p-8">
          <SerratedDivider className="absolute left-0 right-0 top-0" />

          <p className="mb-6 pt-5 text-[18px] text-platinum/70">We succeed when:</p>

          <ul className="space-y-3">
            {successMetrics.map((metric) => (
              <li key={metric} className="surface-card flex items-start gap-3 p-5 text-platinum/82">
                <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-blue-electric" />
                <span className="text-[16px]">{metric}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
