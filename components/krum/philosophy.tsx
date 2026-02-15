import { SerratedDivider } from "@/components/ui/serrated-divider";

export function Philosophy() {
  return (
    <section className="px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8">
          <p className="ui-label mb-3">Philosophy</p>
          <h2 className="editorial-h2 max-w-3xl text-platinum">
            System-first <em>development</em>
          </h2>
        </div>

        <div className="surface-panel relative overflow-hidden p-6 md:p-8">
          <SerratedDivider className="absolute left-0 right-0 top-0" />

          <div className="grid gap-8 pt-5 md:grid-cols-2">
            <div className="surface-card space-y-3 p-6">
              <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-platinum/55">Traditional Flow</p>
              <div className="space-y-2 text-[16px] text-platinum/70">
                <p>→ Write docs</p>
                <p>→ Draw diagrams</p>
                <p>→ Write code</p>
                <p>→ Fix drift</p>
              </div>
            </div>

            <div className="surface-card space-y-3 p-6">
              <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-blue-electric">Krum Flow</p>
              <div className="space-y-2 text-[16px] text-platinum/82">
                <p>→ Design system visually</p>
                <p>→ Generate architecture model</p>
                <p>→ Generate code</p>
                <p>→ Evolve safely</p>
              </div>
            </div>
          </div>

          <div className="mt-6 rounded-2xl border border-blue-electric/30 bg-blue-electric/10 p-5 text-center text-[16px] text-platinum/84">
            The architecture isn&apos;t a drawing. It&apos;s a formal model that governs structure and execution.
          </div>
        </div>
      </div>
    </section>
  );
}
