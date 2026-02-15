import type { CSSProperties } from "react";
import Image from "next/image";

export function KrumHero() {
  return (
    <section className="px-6 pb-18 pt-14 md:pt-18">
      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[6fr_5fr] md:items-end">
        <div>
          <p className="ui-label mb-4">Product / Krum</p>
          <h1 className="editorial-h1 mb-6 text-platinum">
            A visual system builder, not a <em>diagramming tool</em>
          </h1>
          <p className="max-w-2xl text-[18px] text-platinum/66">
            Krum lets you compose systems from structured blocks. Generate architecture as data. Produce code that implements what you designed—and reject changes that break alignment.
          </p>
        </div>

        <div className="relative">
          <div className="relative overflow-hidden rounded-b-[1.4rem] rounded-t-[8rem] border border-white/10 bg-[#1c1917]">
            <div className="relative aspect-[4/3]">
              <Image
                src="https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=1300&q=80"
                alt="Developer workstation with architecture workflow"
                fill
                sizes="(max-width: 768px) 100vw, 42vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-black/55 via-transparent to-[#255bfc]/30" />
            </div>
          </div>

          <aside
            className="sticky-note absolute -bottom-5 right-4 w-[250px] p-6 md:right-7"
            style={{ "--note-rotation": "4deg" } as CSSProperties}
          >
            <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-[#1c1917]/80">Core Principle</p>
            <h3 className="mt-2 font-[var(--font-display)] text-2xl font-light leading-tight">
              Design. Generate. Enforce.
            </h3>
            <p className="mt-4 border-t border-[#1c1917]/25 pt-3 text-[14px] text-[#1c1917]/82">
              Architecture is the source of truth.
            </p>
          </aside>
        </div>
      </div>
    </section>
  );
}
