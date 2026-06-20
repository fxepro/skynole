import type { Metadata } from "next";
import { PageHeader } from "@/components/sections/PageHeader";
import { ComingSoon } from "@/components/sections/ComingSoon";
import { CtaSection } from "@/components/sections/CtaSection";

export const metadata: Metadata = { title: "Solutions" };

export default function SolutionsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Solutions"
        title="Autonomous solutions, end to end"
        description="Aerial photography, drone surveillance, and autonomous delivery — powered by AI for precision and safety."
      />
      <ComingSoon />
      <CtaSection />
    </>
  );
}
