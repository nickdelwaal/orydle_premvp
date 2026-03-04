import Link from "next/link";

export function StickyNoteCta() {
  return (
    <section className="px-6 pb-24 pt-8">
      <div className="mx-auto max-w-7xl">
        <div className="sticky-note mx-auto max-w-3xl p-10 md:p-12">
          <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-[#1c1917]/75">Pinned Action</p>
          <h2 className="mt-3 font-[var(--font-display)] text-4xl font-light leading-tight md:text-5xl">
            Ready to test Krum on your architecture?
          </h2>
          <p className="mt-4 max-w-2xl text-[18px] text-[#1c1917]/85">
            Join early teams shaping an AI workflow built for complex software systems and production constraints.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/request-access"
              className="cta-button"
            >
              Request Access
            </Link>
            <Link
              href="/krum"
              className="inline-flex items-center rounded-full border border-[#1c1917]/35 px-7 py-3 text-[15px] font-semibold text-[#1c1917] transition-colors hover:bg-[#1c1917]/8"
            >
              Read Product Brief
            </Link>
          </div>

          <div className="mt-8 border-t border-[#1c1917]/25 pt-4 text-sm font-medium text-[#1c1917]/80">
            Access is staged. We prioritize teams with multi-service production systems.
          </div>
        </div>
      </div>
    </section>
  );
}
