import Link from "next/link";
import { ScrollFadeIn } from "@/components/ui/scroll-fade-in";

export function DevelopmentNotice() {
  return (
    <section className="px-6 pb-32 pt-8">
      <ScrollFadeIn>
        <div className="mx-auto max-w-2xl text-center">
          <p className="ui-label mb-4">EARLY ACCESS</p>
          <h2 className="editorial-h2 text-platinum">
            Krum is in <em>private development.</em>
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-[17px] leading-relaxed text-platinum/60">
            We&apos;re onboarding a limited set of teams working on multi-service production systems. We review every application personally.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link href="/request-access" className="cta-button">
              Request Early Access
            </Link>
            <Link href="/approach" className="btn-pill-ghost px-7 py-3 text-[15px]">
              Read the Approach
            </Link>
          </div>
        </div>
      </ScrollFadeIn>
    </section>
  );
}
