import { SerratedDivider } from "@/components/ui/serrated-divider";

export function Mission() {
  return (
    <section className="px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8">
          <p className="ui-label mb-3">Mission</p>
          <h2 className="editorial-h2 max-w-3xl text-platinum">
            Software is a living system, not isolated files.
          </h2>
        </div>

        <article className="surface-panel relative overflow-hidden p-8 md:p-10">
          <SerratedDivider className="absolute left-0 right-0 top-0" />
          <div className="grid gap-7 pt-4 md:grid-cols-2">
            <p className="text-[18px] leading-relaxed text-platinum/72">
              Most AI coding tools optimize for generating lines quickly. Real engineering teams need to understand
              service boundaries, hidden dependencies, and operational constraints before they modify anything.
            </p>
            <p className="text-[18px] leading-relaxed text-platinum/72">
              We are building system-aware AI workflows that make reasoning explicit, plans reviewable, and change
              safer for complex production software.
            </p>
          </div>
        </article>
      </div>
    </section>
  );
}
