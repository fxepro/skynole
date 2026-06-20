import { Container } from "@/components/ui/Container";

/** Banner for utility / sub-pages: eyebrow + title + supporting copy. */
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
        {eyebrow && <p className="eyebrow justify-center">{eyebrow}</p>}
        <h1 className="mt-3 text-4xl sm:text-5xl">{title}</h1>
        {description && (
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-ink-600">
            {description}
          </p>
        )}
      </Container>
    </section>
  );
}
