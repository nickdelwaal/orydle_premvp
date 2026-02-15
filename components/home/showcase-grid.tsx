import Image from "next/image";
import { CatalogLabel } from "@/components/ui/catalog-label";
import { cn } from "@/lib/utils";

type ShowcaseItem = {
  id: string;
  title: string;
  figureId: string;
  image: string;
  alt: string;
  offset?: boolean;
};

type ShowcaseItemExtended = ShowcaseItem & { description: string };

const showcaseItems: ShowcaseItemExtended[] = [
  {
    id: "system-builder",
    title: "System Builder Interface",
    description: "Visual composition: services, boundaries, flows designed as structured blocks—not diagrams",
    figureId: "1A",
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&w=900&q=80",
    alt: "System builder interface with connected components",
  },
  {
    id: "architecture-model",
    title: "Architecture Model",
    description: "Formal graph representation: dependencies, ownership, constraints, invariants",
    figureId: "2B",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=900&q=80",
    alt: "Architecture model visualization",
    offset: true,
  },
  {
    id: "generated-structure",
    title: "Generated Structure",
    description: "Real, editable code organized by your architecture—boilerplate, interfaces, connective logic",
    figureId: "3C",
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=900&q=80",
    alt: "Generated code structure view",
  },
  {
    id: "evolution-controls",
    title: "Evolution Controls",
    description: "Safe change management: impact analysis, alignment verification, execution confidence",
    figureId: "4D",
    image: "https://images.unsplash.com/photo-1516116216624-53e697fedbea?auto=format&fit=crop&w=900&q=80",
    alt: "Evolution controls dashboard",
  },
];

export function ShowcaseGrid() {
  return (
    <section className="px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10">
          <p className="ui-label mb-3">Showcase Catalog</p>
          <h2 className="editorial-h2 max-w-3xl text-platinum">
            The system is the truth. Code <em>follows</em>.
          </h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {showcaseItems.map((item) => (
            <article
              key={item.id}
              className={cn(
                "surface-card showcase-card-surface group relative overflow-hidden p-3",
                item.offset && "xl:translate-y-10"
              )}
            >
              <div className="relative aspect-[3/4] overflow-hidden rounded-[18px] border border-white/10">
                <Image
                  src={item.image}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 25vw"
                  className="object-cover grayscale transition-all duration-300 group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" />
                <CatalogLabel figureId={item.figureId} />
              </div>

              <h3 className="mt-4 font-[var(--font-display)] text-[1.35rem] italic leading-tight text-platinum">
                {item.title}
              </h3>
              <p className="mt-2 text-[14px] leading-relaxed text-platinum/55">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
