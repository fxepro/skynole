import type { Metadata } from "next";
import { PageHeader } from "@/components/sections/PageHeader";
import { ProseDocument } from "@/components/sections/ProseDocument";
import { cookiePolicy } from "@/content/legal/cookie-policy";

export const metadata: Metadata = { title: "Cookie Policy" };

export default function CookiePolicyPage() {
  return (
    <>
      <PageHeader eyebrow={cookiePolicy.eyebrow} title={cookiePolicy.title} />
      <ProseDocument document={cookiePolicy} />
    </>
  );
}
