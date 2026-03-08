import type { Metadata } from "next";
import { ApproachHero } from "./hero";
import { Manifesto } from "@/components/approach/manifesto";
import { SystemFirst } from "@/components/approach/system-first";
import { HowChangesPropagate } from "@/components/approach/how-changes-propagate";
import { CoreNarrative } from "@/components/krum/core-narrative";
import { EnforcementModel } from "@/components/approach/comparison-matrix";
import { ApproachFinalCta } from "@/components/approach/final-cta";

export const metadata: Metadata = {
  title: "Approach - Orydle AI",
  description:
    "How Krum enforces alignment across intent, structure, and execution. The intellectual proof behind system-first development.",
};

export default function ApproachPage() {
  return (
    <>
      <ApproachHero />
      <Manifesto />
      <SystemFirst />
      <HowChangesPropagate />
      <CoreNarrative />
      <EnforcementModel />
      <ApproachFinalCta />
    </>
  );
}
