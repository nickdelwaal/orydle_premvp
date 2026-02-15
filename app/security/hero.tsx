import Image from "next/image";

export function SecurityHero() {
  return (
    <section className="px-6 pb-16 pt-14 md:pt-18">
      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[6fr_5fr] md:items-end">
        <div>
          <p className="ui-label mb-4">Security</p>
          <h1 className="editorial-h1 mb-6 text-platinum">
            Security and <em>trust</em>
          </h1>
          <p className="max-w-2xl text-[18px] text-platinum/65">
            How we handle your system data and code.
          </p>
        </div>

        <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-[#1c1917]">
          <div className="relative aspect-[4/3]">
            <Image
              src="https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1200&q=80"
              alt="Security monitoring interface"
              fill
              sizes="(max-width: 768px) 100vw, 42vw"
              className="object-cover grayscale"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-black/60 via-transparent to-[#255bfc]/25" />
          </div>
          <div className="border-t border-white/10 px-5 py-4 text-[14px] text-platinum/72">
            Your data, your control.
          </div>
        </div>
      </div>
    </section>
  );
}
