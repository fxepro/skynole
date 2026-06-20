import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import type { NavItem } from "@/config/navigation";

type HeroProps = {
  eyebrow?: string;
  title: string;
  body: string;
  primaryCta?: NavItem;
  secondaryCta?: NavItem;
};

/**
 * Image-free hero — typographic with a CSS-only gradient backdrop.
 * No large asset to download, so it renders and paints instantly.
 */
export function Hero({
  eyebrow,
  title,
  body,
  primaryCta,
  secondaryCta,
}: HeroProps) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-brand-50 to-white">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-brand-200/40 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-24 top-32 h-72 w-72 rounded-full bg-accent-400/20 blur-3xl"
      />

      <Container className="relative py-24 text-center sm:py-32">
        <div className="mx-auto max-w-3xl">
          {eyebrow && <p className="eyebrow justify-center">{eyebrow}</p>}
          <h1 className="mt-5 text-4xl font-bold leading-[1.08] sm:text-6xl">
            {title}
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-ink-600">
            {body}
          </p>
          {(primaryCta || secondaryCta) && (
            <div className="mt-9 flex flex-wrap justify-center gap-4">
              {primaryCta && (
                <Button href={primaryCta.href}>{primaryCta.label}</Button>
              )}
              {secondaryCta && (
                <Button href={secondaryCta.href} variant="ghost">
                  {secondaryCta.label}
                </Button>
              )}
            </div>
          )}
        </div>
      </Container>
    </section>
  );
}
