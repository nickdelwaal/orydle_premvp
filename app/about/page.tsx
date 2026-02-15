import type { Metadata } from "next";
import { AboutHero } from "./hero";
import { Mission } from "@/components/about/mission";
import { WhatWereBuilding } from "@/components/about/what-were-building";
import { Founders } from "@/components/about/founders";
import { WhoWeAre } from "@/components/about/who-we-are";
import { Stage } from "@/components/about/stage";

export const metadata: Metadata = {
  title: "About - Orydle AI",
  description:
    "We believe architecture should enforce itself. Orydle is building Krum to make structural truth inevitable.",
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <Mission />
      <WhatWereBuilding />
      <Founders />
      <WhoWeAre />
      <Stage />
    </>
  );
}
