import Link from "next/link";

export function EditorialHero() {
  return (
    <section className="px-6 pb-20 pt-10 md:pb-24 md:pt-16">
      <div className="mx-auto flex max-w-7xl items-center gap-10">
        {/* ─── Left column: text ─── */}
        <div className="w-[45%] shrink-0">
          <p className="ui-label mb-5">Orydle AI / System Intelligence</p>
          <h1 className="editorial-h1 mb-6 text-platinum">
            Build systems that stay <span className="editorial-emphasis">understood</span>
          </h1>
          <p className="mb-8 max-w-xl text-[18px] leading-relaxed text-platinum/60">
            Design your architecture visually with Krum. Generate real code. Keep intent,
            structure, and execution aligned as your system evolves—not just documented,
            but enforced.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <Link href="/request-access" className="cta-button">
              Request Early Access
            </Link>
            <Link href="/krum" className="btn-pill-ghost px-7 py-3 text-[15px]">
              Explore Krum
            </Link>
          </div>
        </div>

        {/* ─── Right column: graph ─── */}
        {/*
          The SVG is now transparent (no background rects) and its viewBox
          tightly wraps the graph content — so it scales naturally here
          without any CSS masking tricks needed.
        */}
        <div className="flex flex-1 items-center justify-end">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/orydle-node-graph-v4.svg"
            alt="Orydle system architecture graph"
            fetchPriority="high"
            decoding="async"
            style={{
              width: "100%",
              maxWidth: "760px",
              height: "auto",
              display: "block",
              willChange: "auto",
            }}
          />
        </div>
      </div>
    </section>
  );
}
