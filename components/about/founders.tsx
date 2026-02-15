import Image from "next/image";

const founders = [
  {
    name: "Founding Team",
    role: "Systems Engineers",
    image:
      "https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=900&q=80",
    note: "Background across platform architecture, developer tooling, and reliability engineering.",
  },
  {
    name: "Product & Research",
    role: "AI + Workflow Design",
    image:
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=900&q=80",
    note: "Focused on human-in-the-loop reasoning and decision-first AI collaboration.",
  },
];

export function Founders() {
  return (
    <section className="px-6 py-20">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 text-center">
          <p className="ui-label mb-3">Team</p>
          <h2 className="editorial-h2 text-platinum">
            Built by people who have operated <em>complex systems</em>.
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {founders.map((item) => (
            <article key={item.name} className="surface-card overflow-hidden">
              <div className="relative aspect-[4/3]">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover grayscale"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/15 to-transparent" />
              </div>
              <div className="p-6">
                <h3 className="editorial-h3 text-platinum">{item.name}</h3>
                <p className="mt-1 text-[14px] uppercase tracking-[0.12em] text-platinum/55">{item.role}</p>
                <p className="mt-4 text-[16px] text-platinum/72">{item.note}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
