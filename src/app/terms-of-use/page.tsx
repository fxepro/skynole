import type { Metadata } from "next";
import { PageHeader } from "@/components/sections/PageHeader";
import { ProseDocument } from "@/components/sections/ProseDocument";
import { termsOfUse } from "@/content/legal/terms-of-use";

export const metadata: Metadata = { title: "Terms of Use" };

export default function TermsOfUsePage() {
  return (
    <>
      <PageHeader eyebrow={termsOfUse.eyebrow} title={termsOfUse.title} />
      <ProseDocument document={termsOfUse} />
    </>
  );
}
