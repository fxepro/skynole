import type { Metadata } from "next";
import { PageHeader } from "@/components/sections/PageHeader";
import { ComingSoon } from "@/components/sections/ComingSoon";

export const metadata: Metadata = { title: "Privacy Policy" };

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHeader eyebrow="Legal" title="Privacy Policy" />
      <ComingSoon />
    </>
  );
}
