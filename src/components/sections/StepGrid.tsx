import { Container } from "@/components/ui/Container";
import { SectionHeading } from "./SectionHeading";

export type Step = {
  title: string;
  body: string;
};

/** Dark numbered band — commitments / "how it works". High-contrast accent. */
export function StepGrid({
  eyebrow,
  title,
  description,
  steps,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  steps: Step[];
}) {
  return (
    <section className="section bg-ink-900">
      <Container>
        <SectionHeading
          eyebrow={eyebrow}
          title={title}
          description={description}
          align="left"
          tone="light"
          className="mb-14"
        />
        <div className="grid gap-px overflow-hidden rounded-3xl bg-white/10 md:grid-cols-3">
          {steps.map((step, i) => (
            <div key={step.title} className="bg-ink-900 p-8">
              <div className="font-display text-5xl font-bold text-brand-500">
                {String(i + 1).padStart(2, "0")}
              </div>
              <h3 className="mt-6 text-xl text-white">{step.title}</h3>
              <p className="mt-3 leading-relaxed text-ink-300">{step.body}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
