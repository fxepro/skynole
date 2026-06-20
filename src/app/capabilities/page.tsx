import type { Metadata } from "next";
import { PageHeader } from "@/components/sections/PageHeader";
import { ComingSoon } from "@/components/sections/ComingSoon";
import { CtaSection } from "@/components/sections/CtaSection";

export const metadata: Metadata = { title: "Capabilities" };

export default function CapabilitiesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Capabilities"
        title="Unleashing the power of aerial drones"
        description="LIDAR mapping, thermal imaging, 5G connectivity, AI object tracking, swarm intelligence, and more."
      />
      <ComingSoon />
      <CtaSection />
    </>
  );
}
