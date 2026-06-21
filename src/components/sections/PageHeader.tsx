import { Container } from "@/components/ui/Container";

/** Utility page banner — contact, legal, forms (light surface). */
export function PageHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
}) {
  return (
    <section className="border-b border-ink-200 bg-gradient-to-b from-brand-50 to-white">
      <Container className="py-20 text-center sm:py-24">
        {eyebrow && (
          <p className="inline-flex items-center justify-center gap-2 text-sm font-semibold uppercase tracking-[0.18em] text-brand-600">
            {eyebrow}
          </p>
        )}
        <h1 className="mt-3 font-display text-4xl font-semibold tracking-tight text-ink-900 sm:text-5xl">
          {title}
        </h1>
        {description && (
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-ink-600">
            {description}
          </p>
        )}
      </Container>
    </section>
  );
}
