import type { Metadata } from "next";
import { PageHeader } from "@/components/sections/PageHeader";
import { ComingSoon } from "@/components/sections/ComingSoon";

export const metadata: Metadata = { title: "Cookie Policy" };

export default function CookiePolicyPage() {
  return (
    <>
      <PageHeader eyebrow="Legal" title="Cookie Policy" />
      <ComingSoon />
    </>
  );
}
