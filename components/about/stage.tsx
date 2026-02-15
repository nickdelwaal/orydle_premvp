import type { CSSProperties } from "react";
import Link from "next/link";

export function Stage() {
  return (
    <section className="px-6 pb-24 pt-10">
      <div className="mx-auto max-w-4xl">
        <div
          className="sticky-note p-10 md:p-12"
          style={{ "--note-rotation": "1.5deg" } as CSSProperties}
        >
          <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-[#1c1917]/75">Current Stage</p>
          <h2 className="mt-3 font-[var(--font-display)] text-4xl font-light leading-tight md:text-5xl">
            Early development with design-partner teams.
          </h2>
          <p className="mt-5 text-[18px] text-[#1c1917]/86">
            We are validating workflows in real engineering environments before opening access broadly.
          </p>

          <div className="mt-8 border-t border-[#1c1917]/25 pt-4">
            <Link
              href="/request-access"
              className="inline-flex min-h-11 items-center rounded-full bg-[#1c1917] px-7 py-3 text-[15px] font-semibold text-[#e7e5e4] transition-colors hover:bg-black"
            >
              Request Early Access
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
