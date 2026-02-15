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

const showcaseItems: ShowcaseItem[] = [
  {
    id: "architecture-map",
    title: "Service Topology Snapshot",
    figureId: "1A",
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&w=900&q=80",
    alt: "Software architecture map on screen",
  },
  {
    id: "change-plan",
    title: "Impact Planning Board",
    figureId: "2B",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=900&q=80",
    alt: "Team reviewing a technical change plan",
    offset: true,
  },
  {
    id: "review-loop",
    title: "Review Gate Session",
    figureId: "3C",
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=900&q=80",
    alt: "Engineers collaborating on reviews",
  },
  {
    id: "deployment-window",
    title: "Release Window Control",
    figureId: "4D",
    image: "https://images.unsplash.com/photo-1516116216624-53e697fedbea?auto=format&fit=crop&w=900&q=80",
    alt: "Operations dashboard during release window",
  },
];

export function ShowcaseGrid() {
  return (
    <section className="px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10">
          <p className="ui-label mb-3">Showcase Catalog</p>
          <h2 className="editorial-h2 max-w-3xl text-platinum">
            Visual artifacts from a system-first <em>engineering loop</em>.
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
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
