import { Container } from "@/components/ui/Container";

/** Placeholder body for routes whose full content is not built yet. */
export function ComingSoon({
  message = "This page is being rebuilt. Full content is on the way.",
}: {
  message?: string;
}) {
  return (
    <section className="section">
      <Container>
        <div className="mx-auto max-w-xl rounded-2xl border border-dashed border-ink-300 bg-surface-muted p-12 text-center">
          <p className="eyebrow justify-center">Coming soon</p>
          <p className="mt-4 text-lg leading-relaxed text-ink-600">{message}</p>
        </div>
      </Container>
    </section>
  );
}
