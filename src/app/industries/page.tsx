import type { Metadata } from "next";
import { PageBanner } from "@/components/sections/PageBanner";
import { FeatureGrid } from "@/components/sections/FeatureGrid";
import { CtaSection } from "@/components/sections/CtaSection";
import {
  industriesHeader,
  industryHubCards,
  industriesOverview,
} from "@/content/industries";

export const metadata: Metadata = { title: "Industries" };

export default function IndustriesPage() {
  const cards = industryHubCards.map((card) => ({
    title: card.title,
    body: card.body,
    href: card.href,
    image: card.image,
  }));

  return (
    <>
      <PageBanner
        tone="dark"
        eyebrow={industriesHeader.eyebrow}
        title={industriesHeader.title}
        description={industriesHeader.description}
      />
      <FeatureGrid
        eyebrow="What we do best"
        title="Unparalleled value to your sector"
        description="Unleashing the power of autonomous drones across industries — from agriculture to public safety and logistics."
        items={industriesOverview}
        columns={2}
      />
      <FeatureGrid
        eyebrow="Industries"
        title="Explore by sector"
        items={cards}
        columns={2}
        surface="muted"
      />
      <CtaSection
        title="Take flight with us"
        description="Ready to elevate your business? Our autonomous drone services provide innovation, efficiency, and reliability across every sector."
      />
    </>
  );
}
