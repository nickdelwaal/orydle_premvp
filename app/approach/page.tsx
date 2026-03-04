import type { Metadata } from "next";
import { ApproachHero } from "./hero";
import { AlignmentProblem } from "@/components/approach/expandable-principles";
import { SystemFirst } from "@/components/approach/system-first";
import { Manifesto } from "@/components/approach/manifesto";
import { ThreeLayers } from "@/components/approach/three-layers";
import { EnforcementModel } from "@/components/approach/comparison-matrix";
import { WorkflowPractice } from "@/components/approach/workflow-practice";
import { WorkflowExample } from "@/components/approach/workflow-example";
import { WhoThisServes } from "@/components/approach/who-this-serves";
import { ApproachFinalCta } from "@/components/approach/final-cta";

export const metadata: Metadata = {
  title: "Approach - Orydle AI",
  description:
    "How Krum maintains alignment across intent, structure, and execution layers.",
};

export default function ApproachPage() {
  return (
    <>
      <ApproachHero />
      <AlignmentProblem />
      <SystemFirst />
      <Manifesto />
      <ThreeLayers />
      <EnforcementModel />
      <WorkflowPractice />
      <WorkflowExample />
      <WhoThisServes />
      <ApproachFinalCta />
    </>
  );
}
