import Link from "next/link";

export function RequestAccessSuccess() {
  return (
    <section className="flex min-h-[55vh] items-center justify-center px-6 pb-24">
      <div className="surface-panel mx-auto max-w-xl p-8 text-center md:p-10">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-blue-electric/35 bg-blue-electric/14 text-blue-electric">
          <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.9">
            <path d="m4.5 12.75 6 6 9-13.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>

        <h2 className="editorial-h2 mt-5 text-[2.2rem] text-platinum">Request received.</h2>
        <p className="mx-auto mt-3 max-w-md text-[17px] text-platinum/68">
          We will review your details and reach out if there is a fit for the current cohort.
        </p>

        <div className="mt-8">
          <Link href="/" className="btn-pill-ghost min-h-11 px-7 py-3 text-[15px]">
            Return Home
          </Link>
        </div>
      </div>
    </section>
  );
}
