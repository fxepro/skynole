import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { callbackCta } from "@/config/ctas";
import type { NavItem } from "@/config/navigation";

/** End-of-page conversion band. Defaults to the site-wide "call back" CTA. */
export function CtaSection({
  title = "Let's get started",
  description = "Our services are available 24/7/365, ready to engage on command.",
  cta = callbackCta,
}: {
  title?: string;
  description?: string;
  cta?: NavItem;
}) {
  return (
    <section className="section">
      <Container>
        <div className="relative overflow-hidden rounded-3xl bg-ink-900 px-8 py-16 text-center sm:px-16">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -left-20 -top-20 h-72 w-72 rounded-full bg-brand-600/30 blur-3xl"
          />
          <div className="relative mx-auto max-w-2xl">
            <h2 className="text-3xl text-white sm:text-4xl">{title}</h2>
            <p className="mt-4 text-lg text-ink-300">{description}</p>
            <div className="mt-8 flex justify-center">
              <Button href={cta.href}>{cta.label}</Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
