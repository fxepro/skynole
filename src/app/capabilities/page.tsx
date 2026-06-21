import type { Metadata } from "next";
import { PageBanner } from "@/components/sections/PageBanner";
import { FeatureSplits } from "@/components/sections/FeatureSplits";
import { FeatureGrid } from "@/components/sections/FeatureGrid";
import { StepGrid } from "@/components/sections/StepGrid";
import { CtaSection } from "@/components/sections/CtaSection";
import {
  capabilitiesHeader,
  capabilitiesSplits,
  basicCapabilities,
  advancedCapabilities,
  capabilitySteps,
} from "@/content/capabilities";

export const metadata: Metadata = { title: "Capabilities" };

export default function CapabilitiesPage() {
  return (
    <>
      <PageBanner
        tone="dark"
        eyebrow={capabilitiesHeader.eyebrow}
        title={capabilitiesHeader.title}
        description={capabilitiesHeader.description}
      />
      <FeatureSplits
        eyebrow="How are we capable"
        title="Harnessing cutting-edge drone technology"
        items={capabilitiesSplits}
      />
      <FeatureGrid
        eyebrow="Foundation"
        title="Basic capabilities of drones"
        items={basicCapabilities}
        columns={2}
        surface="muted"
      />
      <FeatureGrid
        eyebrow="Advanced"
        title="Advanced capabilities of drones"
        items={advancedCapabilities}
        columns={2}
      />
      <StepGrid
        eyebrow="Our commitment"
        title="A smarter, better-connected community"
        steps={capabilitySteps}
      />
      <CtaSection />
    </>
  );
}
