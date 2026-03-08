import type { Metadata } from "next";
import { KrumHero } from "./krum/hero";
import { TheProblem } from "@/components/krum/the-problem";
import { Philosophy } from "@/components/krum/philosophy";
import { EngineeringPhilosophy } from "@/components/krum/engineering-philosophy";
import { CoreNarrative } from "@/components/krum/core-narrative";
import { WhatItIs } from "@/components/krum/what-it-is";
import { DevelopmentNotice } from "@/components/krum/development-notice";

export const metadata: Metadata = {
  title: "Krum - Orydle AI",
  description:
    "Krum is an AI workspace for mapping software systems, planning impact-aware changes, and executing with production confidence.",
};

export default function KrumPage() {
  return (
    <>
      <KrumHero />
      <TheProblem />
      <Philosophy />
      <EngineeringPhilosophy />
      <CoreNarrative />
      <WhatItIs />
      <DevelopmentNotice />
    </>
  );
}
