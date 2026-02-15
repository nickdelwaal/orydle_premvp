import type { Metadata } from "next";
import { ApproachHero } from "./hero";
import { AlignmentProblem } from "@/components/approach/expandable-principles";
import { ThreeLayers } from "@/components/approach/three-layers";
import { EnforcementModel } from "@/components/approach/comparison-matrix";
import { WorkflowPractice } from "@/components/approach/workflow-practice";
import { WhoThisServes } from "@/components/approach/who-this-serves";

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
      <ThreeLayers />
      <EnforcementModel />
      <WorkflowPractice />
      <WhoThisServes />
    </>
  );
}
