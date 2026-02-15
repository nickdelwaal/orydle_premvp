import type { Metadata } from "next";
import { SecurityHero } from "./hero";
import { Principles } from "@/components/security/principles";
import { ArchitectureSecurity } from "@/components/security/architecture-security";
import { AiPrivacy } from "@/components/security/ai-privacy";
import { Infrastructure } from "@/components/security/infrastructure";
import { Transparency } from "@/components/security/transparency";

export const metadata: Metadata = {
  title: "Security - Orydle AI",
  description:
    "Security and trust. How Orydle handles your system data and code with enterprise-grade protection.",
};

export default function SecurityPage() {
  return (
    <>
      <SecurityHero />
      <Principles />
      <ArchitectureSecurity />
      <AiPrivacy />
      <Infrastructure />
      <Transparency />
    </>
  );
}
