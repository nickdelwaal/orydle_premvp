import type { Metadata } from "next";
import { RequestAccessIntro } from "@/components/request-access/intro";
import { RequestAccessForm } from "@/components/request-access/form";

export const metadata: Metadata = {
  title: "Request Access - Orydle AI",
  description:
    "Apply for early access to Krum if your team is working with complex, production software systems.",
};

export default function RequestAccessPage() {
  return (
    <>
      <RequestAccessIntro />
      <RequestAccessForm />
    </>
  );
}
