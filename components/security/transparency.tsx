import { SerratedDivider } from "@/components/ui/serrated-divider";

const complianceItems = [
  "SOC 2 Type II (in progress)",
  "GDPR compliance for EU customers",
  "Data residency options",
];

export function Transparency() {
  return (
    <section className="px-6 pb-24 pt-8">
      <div className="mx-auto max-w-6xl">
        {/* Compliance */}
        <div className="mb-8 text-center">
          <p className="ui-label mb-3">Standards</p>
          <h2 className="editorial-h2 text-platinum">
            <em>Compliance</em>
          </h2>
        </div>

        <div className="surface-panel relative mb-10 overflow-hidden p-6 md:p-8">
          <SerratedDivider className="absolute left-0 right-0 top-0" />

          <p className="mb-5 pt-4 text-[18px] text-platinum/70">
            We&apos;re building with compliance in mind:
          </p>

          <ul className="space-y-3">
            {complianceItems.map((item) => (
              <li key={item} className="surface-card flex items-start gap-3 p-5 text-[16px] text-platinum/82">
                <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-blue-electric" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <article className="surface-panel relative overflow-hidden p-8 text-center md:p-10">
          <SerratedDivider className="absolute left-0 right-0 top-0" />

          <div className="pt-4">
            <p className="text-[18px] text-platinum/72">
              Security concerns or questions about our practices?
            </p>
            <p className="mt-3 text-[18px] font-semibold text-blue-electric">
              → security@orydle.com
            </p>
          </div>
        </article>
      </div>
    </section>
  );
}
