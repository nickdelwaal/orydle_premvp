import Image from "next/image";

export function ApproachHero() {
  return (
    <section className="px-6 pb-16 pt-14 md:pt-18">
      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[6fr_5fr] md:items-end">
        <div>
          <p className="ui-label mb-4">Our Approach</p>
          <h1 className="editorial-h1 mb-6 text-platinum">
            How Krum maintains <em>alignment</em>
          </h1>
          <p className="max-w-2xl text-[18px] text-platinum/65">
            Three layers that stay synchronized by design, not by discipline.
          </p>
        </div>

        <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-[#1c1917]">
          <div className="relative aspect-[4/3]">
            <Image
              src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1200&q=80"
              alt="Collaborative engineering workflow session"
              fill
              sizes="(max-width: 768px) 100vw, 42vw"
              className="object-cover grayscale"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-black/55 via-transparent to-[#255bfc]/25" />
          </div>
          <div className="border-t border-white/10 px-5 py-4 text-[14px] text-platinum/72">
            Intent → Structure → Execution. Always aligned.
          </div>
        </div>
      </div>
    </section>
  );
}
