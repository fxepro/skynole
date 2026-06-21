import type { Metadata } from "next";
import { PageHeader } from "@/components/sections/PageHeader";
import { ProseDocument } from "@/components/sections/ProseDocument";
import { privacyPolicy } from "@/content/legal/privacy-policy";

export const metadata: Metadata = { title: "Privacy Policy" };

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHeader eyebrow={privacyPolicy.eyebrow} title={privacyPolicy.title} />
      <ProseDocument document={privacyPolicy} />
    </>
  );
}
