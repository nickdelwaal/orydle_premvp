import type { Metadata } from "next";
import { SecurityHero } from "./hero";
import { Principles } from "@/components/security/principles";
import { Transparency } from "@/components/security/transparency";

export const metadata: Metadata = {
  title: "Security - Orydle AI",
  description:
    "Security principles and transparency commitments for Orydle and Krum as the platform evolves toward broader production readiness.",
};

export default function SecurityPage() {
  return (
    <>
      <SecurityHero />
      <Principles />
      <Transparency />
    </>
  );
}
