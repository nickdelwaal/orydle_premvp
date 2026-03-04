import dynamic from "next/dynamic";
import { EditorialHero } from "@/components/home/editorial-hero";

// Lazy-load below-fold sections — code-split to reduce initial JS bundle
const FolderTabs = dynamic(
  () => import("@/components/home/folder-tabs").then((m) => ({ default: m.FolderTabs }))
);

const ShowcaseCatalogSection = dynamic(
  () => import("@/components/home/showcase-catalog-section")
);

export default function Home() {
  return (
    <>
      {/* Above-fold: render immediately */}
      <EditorialHero />
      {/* Below-fold: lazy loaded JS chunks */}
      <FolderTabs />
      <ShowcaseCatalogSection />
    </>
  );
}

