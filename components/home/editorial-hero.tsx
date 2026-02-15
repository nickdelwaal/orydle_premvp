import type { CSSProperties } from "react";
import Image from "next/image";
import Link from "next/link";


export function EditorialHero() {
  return (
    <section className="px-6 pb-20 pt-10 md:pb-24 md:pt-16">
      <div className="mx-auto grid max-w-7xl items-end gap-12 md:grid-cols-[5fr_7fr]">
        <div>
          <p className="ui-label mb-5">Orydle AI / System Intelligence</p>
          <h1 className="editorial-h1 mb-6 text-platinum">
            Build systems that stay <span className="editorial-emphasis">understood</span>
          </h1>
          <p className="mb-8 max-w-xl text-[18px] leading-relaxed text-platinum/60">
            Design your architecture visually with Krum. Generate real code. Keep intent, structure, and execution aligned as your system evolves—not just documented, but enforced.
          </p>

          <div className="mb-9 flex flex-wrap items-center gap-4">
            <Link href="/request-access" className="btn-pill-primary px-7 py-3 text-[15px]">
              Request Early Access
            </Link>
            <Link href="#system-tabs" className="btn-pill-ghost px-7 py-3 text-[15px]">
              Explore Workflow
            </Link>
          </div>



        </div>

        <div className="relative">
          <div className="relative min-h-[430px] overflow-hidden rounded-b-[1.5rem] rounded-t-[10rem] border border-white/10 bg-[#1c1917]">
            <Image
              src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1400&q=80"
              alt="System architecture board with connected components"
              fill
              sizes="(max-width: 768px) 100vw, 58vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-black/45 via-transparent to-[#255bfc]/35" />
            <div className="absolute bottom-6 left-6 right-6 rounded-2xl border border-white/15 bg-black/35 p-4 backdrop-blur-md">
              <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-platinum/75">Live Session / Fig. 1A</p>
              <p className="mt-2 text-[15px] text-platinum/90">
                System graph indexed. 43 services, 12 shared boundaries, 6 architectural invariants enforced.
              </p>
            </div>
          </div>

          <aside className="sticky-note absolute -bottom-6 right-4 w-[250px] p-7 md:right-8 md:w-[280px]" style={{ "--note-rotation": "6deg" } as CSSProperties}>
            <p className="mb-2 font-mono text-[10px] uppercase tracking-[0.14em] text-[#1c1917]/80">Note</p>
            <h3 className="mb-3 font-[var(--font-display)] text-2xl font-light leading-tight">
              Modern systems lose clarity by design
            </h3>
            <div className="mt-6 border-t border-[#1c1917]/25 pt-3 text-sm font-medium">
              Architecture diagrams go stale. AI writes code faster than teams understand it. Critical decisions live in Slack threads. As systems grow, the gap between &lsquo;what we built&rsquo; and &lsquo;what we meant to build&rsquo; becomes a business liability. Krum makes architecture the source of truth—not an artifact that drifts.
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}


