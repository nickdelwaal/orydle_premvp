import type { Metadata } from "next";
import { KrumHero } from "./hero";
import { TheProblem } from "@/components/krum/the-problem";
import { Philosophy } from "@/components/krum/philosophy";
import { EngineeringPhilosophy } from "@/components/krum/engineering-philosophy";
import { Manifesto } from "@/components/krum/manifesto";
import { WhatItIs } from "@/components/krum/what-it-is";
import { WhoItsFor } from "@/components/krum/who-its-for";
import { DevelopmentNotice } from "@/components/krum/development-notice";

export const metadata: Metadata = {
  title: "Krum - Orydle AI",
  description:
    "Krum is a system-first development environment. Design architecture visually, generate real code, enforce alignment automatically.",
};

export default function KrumPage() {
  return (
    <>
      <KrumHero />
      <TheProblem />
      <Philosophy />
      <EngineeringPhilosophy />
      <Manifesto />
      <WhatItIs />
      <WhoItsFor />
      <DevelopmentNotice />
    </>
  );
}
