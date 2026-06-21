import type { Metadata } from "next";
import { PageBanner } from "@/components/sections/PageBanner";
import { MediaSplit } from "@/components/sections/MediaSplit";
import { FeatureGrid } from "@/components/sections/FeatureGrid";
import { CtaSection } from "@/components/sections/CtaSection";
import {
  companyHeader,
  companyIntro,
  companyMission,
  companyValues,
} from "@/content/company";

export const metadata: Metadata = { title: "Company" };

export default function CompanyPage() {
  return (
    <>
      <PageBanner
        tone="dark"
        eyebrow={companyHeader.eyebrow}
        title={companyHeader.title}
        description={companyHeader.description}
      />
      <MediaSplit
        title={companyIntro.title}
        body={companyIntro.body}
        image={companyIntro.image}
      />
      <FeatureGrid
        eyebrow="Our mission"
        title="Advanced drone solutions for every industry"
        items={companyMission}
        columns={2}
        surface="muted"
      />
      <FeatureGrid
        eyebrow="How we deliver"
        title="Precision, integration, and innovation"
        items={companyValues}
        columns={2}
      />
      <CtaSection title="Let us help you" />
    </>
  );
}
