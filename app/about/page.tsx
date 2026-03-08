import type { Metadata } from "next";
import { AboutHero } from "./hero";
import { OriginStory } from "@/components/about/origin-story";
import { Mission } from "@/components/about/mission";
import { ProductCredibility } from "@/components/about/product-credibility";
import { AboutManifesto } from "@/components/about/about-manifesto";

export const metadata: Metadata = {
  title: "About - Orydle AI",
  description:
    "We got tired of systems no one could understand. Orydle is building Krum to make structural truth inevitable.",
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <OriginStory />
      <Mission />
      <ProductCredibility />
      <AboutManifesto />
    </>
  );
}
