import type { Metadata } from "next";
import { ApproachHero } from "./hero";
import { ExpandablePrinciples } from "@/components/approach/expandable-principles";
import { ComparisonMatrix } from "@/components/approach/comparison-matrix";

export const metadata: Metadata = {
  title: "Approach - Orydle AI",
  description:
    "How Orydle applies system-first thinking, plan-before-change discipline, and collaborative review to AI-assisted engineering.",
};

export default function ApproachPage() {
  return (
    <>
      <ApproachHero />
      <ExpandablePrinciples />
      <ComparisonMatrix />
    </>
  );
}
