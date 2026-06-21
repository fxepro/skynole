import type { Metadata } from "next";
import { PageHeader } from "@/components/sections/PageHeader";
import { ContactSection } from "@/components/sections/ContactSection";

export const metadata: Metadata = { title: "Contact" };

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Let's get started"
        description="Tell us about your mission and we'll be in touch."
      />
      <ContactSection />
    </>
  );
}
