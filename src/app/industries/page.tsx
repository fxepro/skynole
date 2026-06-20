import type { Metadata } from "next";
import { PageHeader } from "@/components/sections/PageHeader";
import { ComingSoon } from "@/components/sections/ComingSoon";
import { CtaSection } from "@/components/sections/CtaSection";

export const metadata: Metadata = { title: "Industries" };

export default function IndustriesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Industries"
        title="Autonomous drones across every sector"
        description="From agriculture and energy to public safety, logistics, and environmental conservation."
      />
      <ComingSoon />
      <CtaSection />
    </>
  );
}
