import type { Metadata } from "next";
import { AboutHero } from "./hero";
import { Mission } from "@/components/about/mission";
import { Founders } from "@/components/about/founders";
import { Stage } from "@/components/about/stage";

export const metadata: Metadata = {
  title: "About - Orydle AI",
  description:
    "Why Orydle is building system-first AI workflows that help engineering teams reason before they change code.",
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <Mission />
      <Founders />
      <Stage />
    </>
  );
}
