import type { Metadata } from "next";
import { PageHeader } from "@/components/sections/PageHeader";
import { ComingSoon } from "@/components/sections/ComingSoon";
import { CtaSection } from "@/components/sections/CtaSection";

export const metadata: Metadata = { title: "Drones" };

export default function DronesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Drones"
        title="Three designs, built for autonomy"
        description="Customizable, scalable drone platforms engineered for precision, safety, and real-time intelligence."
      />
      <ComingSoon />
      <CtaSection />
    </>
  );
}
