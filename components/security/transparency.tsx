import { SerratedDivider } from "@/components/ui/serrated-divider";

export function Transparency() {
  return (
    <section className="px-6 pb-24 pt-8">
      <div className="mx-auto max-w-5xl">
        <article className="surface-panel relative overflow-hidden p-8 md:p-10">
          <SerratedDivider className="absolute left-0 right-0 top-0" />

          <div className="grid gap-5 pt-4 md:grid-cols-[auto_1fr] md:items-start">
            <div className="flex h-12 w-12 items-center justify-center rounded-full border border-blue-electric/35 bg-blue-electric/14 text-blue-electric">
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
                <path d="M12 3l7 4v5c0 5-3.2 7.9-7 9-3.8-1.1-7-4-7-9V7l7-4Z" strokeLinecap="round" strokeLinejoin="round" />
                <path d="m9.2 12.4 1.8 1.8 3.7-3.9" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>

            <div>
              <p className="ui-label mb-2">Transparency Note</p>
              <h2 className="editorial-h3 text-[1.7rem] text-platinum">
                Security posture is evolving with each release stage.
              </h2>
              <p className="mt-4 text-[17px] leading-relaxed text-platinum/74">
                Krum is pre-MVP and not positioned as a finished enterprise security product today. We are actively
                hardening controls, documenting boundaries, and validating the model with early teams before broader rollout.
              </p>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
