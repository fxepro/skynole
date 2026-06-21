import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { site } from "@/config/site";
import { callbackCta } from "@/config/ctas";

/** Contact utility block — email, hours, and CTA from site config. */
export function ContactSection() {
  return (
    <section className="section bg-surface-muted">
      <Container>
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <h2 className="text-3xl sm:text-4xl">Let&apos;s get started</h2>
            <p className="mt-4 text-lg leading-relaxed text-ink-600">
              Tell us about your mission and we&apos;ll be in touch. Our team is
              available to discuss aerial photography, surveillance, and
              delivery solutions tailored to your needs.
            </p>
            <div className="mt-8">
              <Button href={callbackCta.href}>{callbackCta.label}</Button>
            </div>
          </div>
          <div className="card space-y-8">
            <div>
              <h3 className="text-lg font-semibold text-ink-900">Email us</h3>
              <a
                href={`mailto:${site.email}`}
                className="mt-2 text-lg text-brand-600 hover:text-brand-700"
              >
                {site.email}
              </a>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-ink-900">Call us</h3>
              <p className="mt-2 text-ink-600">{site.hours.weekday}</p>
              <p className="text-ink-600">{site.hours.weekend}</p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
