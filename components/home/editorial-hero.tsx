import type { CSSProperties } from "react";
import Image from "next/image";
import Link from "next/link";

const avatarImages = [
  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=160&q=80",
  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=160&q=80",
  "https://images.unsplash.com/photo-1521119989659-a83eee488004?auto=format&fit=crop&w=160&q=80",
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=160&q=80",
];

export function EditorialHero() {
  return (
    <section className="px-6 pb-20 pt-10 md:pb-24 md:pt-16">
      <div className="mx-auto grid max-w-7xl items-end gap-12 md:grid-cols-[5fr_7fr]">
        <div>
          <p className="ui-label mb-5">Orydle AI / System Intelligence</p>
          <h1 className="editorial-h1 mb-6 text-platinum">
            AI for <span className="editorial-emphasis">software systems</span>, not just snippets.
          </h1>
          <p className="mb-8 max-w-xl text-[18px] leading-relaxed text-platinum/60">
            We help engineering teams map architecture, review impact, and ship changes that fit real
            production boundaries. Krum starts with understanding before generation.
          </p>

          <div className="mb-9 flex flex-wrap items-center gap-4">
            <Link href="/request-access" className="btn-pill-primary px-7 py-3 text-[15px]">
              Request Early Access
            </Link>
            <Link href="#system-tabs" className="btn-pill-ghost px-7 py-3 text-[15px]">
              Explore Workflow
            </Link>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex -space-x-3">
              {avatarImages.map((avatar, index) => (
                <div
                  key={avatar}
                  className="relative h-10 w-10 overflow-hidden rounded-full border border-white/25"
                  style={{ zIndex: avatarImages.length - index }}
                >
                  <Image
                    src={avatar}
                    alt="Engineering team member"
                    fill
                    sizes="40px"
                    className="object-cover grayscale"
                    style={{ opacity: 0.7 }}
                  />
                </div>
              ))}
            </div>
            <p className="text-[14px] text-platinum/60">
              Trusted by teams shipping across multi-service platforms.
            </p>
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
                Dependency map indexed. 43 services, 12 shared boundaries, 6 critical change paths.
              </p>
            </div>
          </div>

          <aside className="sticky-note absolute -bottom-6 right-4 w-[250px] p-7 md:right-8 md:w-[280px]" style={{ "--note-rotation": "6deg" } as CSSProperties}>
            <p className="mb-2 font-mono text-[10px] uppercase tracking-[0.14em] text-[#1c1917]/80">Note</p>
            <h3 className="mb-3 font-[var(--font-display)] text-2xl font-light leading-tight">
              Start with map. Then ship.
            </h3>
            <div className="mt-6 border-t border-[#1c1917]/25 pt-3 text-sm font-medium">
              Krum workflow protects production confidence.
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}


