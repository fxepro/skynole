import type { Metadata } from "next";
import { PageHeader } from "@/components/sections/PageHeader";
import { ComingSoon } from "@/components/sections/ComingSoon";

export const metadata: Metadata = { title: "Contact" };

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Let's get started"
        description="Tell us about your mission and we'll be in touch. A working contact form is coming soon."
      />
      <ComingSoon message="The contact form is being wired up. In the meantime, email us at contact@skynole.com." />
    </>
  );
}
