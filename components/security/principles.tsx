import { SerratedDivider } from "@/components/ui/serrated-divider";

const dataCategories = [
  {
    title: "Your Code",
    items: [
      "Generated code is created locally in your environment",
      "We never store your implementation logic",
      "All code artifacts remain under your control",
    ],
  },
  {
    title: "Your Architecture",
    items: [
      "System models are encrypted at rest and in transit",
      "Stored in isolated, access-controlled environments",
      "You can export and delete your data at any time",
    ],
  },
  {
    title: "Your Intent",
    items: [
      "Requirements and constraints are treated as confidential",
      "Never used for training AI models",
      "Accessible only to your authorized team members",
    ],
  },
];

export function Principles() {
  return (
    <section className="px-6 py-20">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8">
          <p className="ui-label mb-3">Data Handling</p>
          <h2 className="editorial-h2 max-w-3xl text-platinum">
            Data <em>handling</em>
          </h2>
        </div>

        <div className="surface-panel relative overflow-hidden p-6 md:p-8">
          <SerratedDivider className="absolute left-0 right-0 top-0" />

          <div className="grid gap-4 pt-5 md:grid-cols-3">
            {dataCategories.map((cat) => (
              <article key={cat.title} className="surface-card p-6">
                <h3 className="editorial-h3 mb-4 text-[1.25rem] text-platinum">{cat.title}</h3>
                <ul className="space-y-3">
                  {cat.items.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-[15px] text-platinum/76">
                      <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-blue-electric" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
