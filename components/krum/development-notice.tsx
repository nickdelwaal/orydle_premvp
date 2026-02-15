import Link from "next/link";

export function DevelopmentNotice() {
  return (
    <section className="px-6 pb-24 pt-6">
      <div className="mx-auto max-w-4xl">
        <article className="surface-panel p-8 text-center md:p-10">
          <p className="ui-label mb-3">Availability</p>
          <h2 className="editorial-h2 text-platinum">Krum is currently in private development.</h2>
          <p className="mx-auto mt-4 max-w-2xl text-[17px] text-platinum/70">
            We are onboarding a limited set of teams to refine architecture workflows and planning loops before broader access.
          </p>

          <div className="mt-8 flex justify-center">
            <Link href="/request-access" className="btn-pill-primary min-h-11 px-7 py-3 text-[15px]">
              Request Early Access
            </Link>
          </div>
        </article>
      </div>
    </section>
  );
}
