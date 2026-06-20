import type { Metadata } from "next";
import { PageHeader } from "@/components/sections/PageHeader";
import { ComingSoon } from "@/components/sections/ComingSoon";

export const metadata: Metadata = { title: "Terms of Use" };

export default function TermsOfUsePage() {
  return (
    <>
      <PageHeader eyebrow="Legal" title="Website Terms of Use" />
      <ComingSoon />
    </>
  );
}
