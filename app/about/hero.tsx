import Image from "next/image";

export function AboutHero() {
  return (
    <section className="px-6 pb-16 pt-14 md:pt-18">
      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[6fr_5fr] md:items-end">
        <div>
          <p className="ui-label mb-4">About Orydle</p>
          <h1 className="editorial-h1 mb-6 text-platinum">
            We believe architecture should <em>enforce itself</em>
          </h1>
          <p className="max-w-2xl text-[18px] text-platinum/65">
            Orydle exists because growing systems lose clarity by default. We&apos;re building Krum to make structural truth inevitable, not aspirational.
          </p>
        </div>

        <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-[#1c1917]">
          <div className="relative aspect-[4/3]">
            <Image
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80"
              alt="Engineering team discussing architecture"
              fill
              sizes="(max-width: 768px) 100vw, 42vw"
              className="object-cover grayscale"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-black/55 via-transparent to-[#255bfc]/20" />
          </div>
          <div className="border-t border-white/10 px-5 py-4 text-[14px] text-platinum/72">
            Making structural truth inevitable.
          </div>
        </div>
      </div>
    </section>
  );
}
