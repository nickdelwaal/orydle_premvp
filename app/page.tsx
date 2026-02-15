import { EditorialHero } from "@/components/home/editorial-hero";
import { FolderTabs } from "@/components/home/folder-tabs";
import { ShowcaseGrid } from "@/components/home/showcase-grid";

export default function Home() {
  return (
    <>
      <EditorialHero />
      <FolderTabs />
      <ShowcaseGrid />
    </>
  );
}
