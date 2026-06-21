import type { Metadata } from "next";
import { PageBanner } from "@/components/sections/PageBanner";
import { SolutionsShowcase } from "@/components/sections/SolutionsShowcase";
import { FeatureSplits } from "@/components/sections/FeatureSplits";
import { FeatureGrid } from "@/components/sections/FeatureGrid";
import { CtaSection } from "@/components/sections/CtaSection";
import {
  solutionsHeader,
  solutionCards,
  solutionsBenefits,
  solutionsSplits,
} from "@/content/solutions";

export const metadata: Metadata = { title: "Solutions" };

export default function SolutionsPage() {
  return (
    <>
      <PageBanner
        tone="dark"
        eyebrow={solutionsHeader.eyebrow}
        title={solutionsHeader.title}
        description={solutionsHeader.description}
      />
      <SolutionsShowcase
        eyebrow="Core solutions"
        title="Autonomous aerial operations"
        description="Three integrated solution areas — photography, surveillance, and delivery — powered by the same autonomous platform."
        items={solutionCards}
      />
      <FeatureSplits
        eyebrow="Why Skynole"
        title="Designed for civilian autonomy"
        description="We are the only startup providing cutting-edge autonomous technology for civilian use — designed and developed in the continental United States."
        items={solutionsSplits}
      />
      <FeatureGrid
        eyebrow="Operational advantages"
        title="Faster, safer, more cost-effective"
        items={solutionsBenefits}
        surface="muted"
      />
      <CtaSection />
    </>
  );
}
