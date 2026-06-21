import type { Metadata } from "next";
import { PageBanner } from "@/components/sections/PageBanner";
import { SolutionsShowcase } from "@/components/sections/SolutionsShowcase";
import { FeatureSplits } from "@/components/sections/FeatureSplits";
import { CtaSection } from "@/components/sections/CtaSection";
import {
  dronesHeader,
  dronePlatformCards,
  droneSplits,
} from "@/content/drones";

export const metadata: Metadata = { title: "Drones" };

export default function DronesPage() {
  return (
    <>
      <PageBanner
        tone="dark"
        eyebrow={dronesHeader.eyebrow}
        title={dronesHeader.title}
        description={dronesHeader.description}
      />
      <SolutionsShowcase
        eyebrow="Platforms"
        title="Three solution areas, one autonomous platform"
        description="Each drone design is optimized for photography, surveillance, or delivery — with shared autonomy, precision, and scalability."
        items={dronePlatformCards}
      />
      <FeatureSplits
        eyebrow="Engineering"
        title="Built for precision and autonomy"
        items={droneSplits}
      />
      <CtaSection />
    </>
  );
}
