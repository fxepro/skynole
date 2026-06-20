import type { Metadata } from "next";
import { PageHeader } from "@/components/sections/PageHeader";
import { ComingSoon } from "@/components/sections/ComingSoon";
import { CtaSection } from "@/components/sections/CtaSection";

export const metadata: Metadata = { title: "Company" };

export default function CompanyPage() {
  return (
    <>
      <PageHeader
        eyebrow="Company"
        title="Cutting-edge drone solutions, made in the USA"
        description="Connectedness and real-time information are our corporate responsibility and obligation to society."
      />
      <ComingSoon />
      <CtaSection />
    </>
  );
}
