import type { Metadata } from "next";
import { KrumHero } from "./hero";
import { Philosophy } from "@/components/krum/philosophy";
import { WhatItIs } from "@/components/krum/what-it-is";
import { EngineeringPhilosophy } from "@/components/krum/engineering-philosophy";
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
      <Philosophy />
      <WhatItIs />
      <EngineeringPhilosophy />
      <DevelopmentNotice />
    </>
  );
}
