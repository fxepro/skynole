import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "./SectionHeading";
import { cn } from "@/lib/cn";

export type Split = {
  title: string;
  body: string;
  image: { src: string; alt: string };
};

/**
 * A heading followed by alternating image/text rows. Replaces the
 * uniform card grid with a more editorial, precision-tech rhythm.
 */
export function FeatureSplits({
  eyebrow,
  title,
  description,
  items,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  items: Split[];
}) {
  return (
    <section className="section">
      <Container>
        <SectionHeading
          eyebrow={eyebrow}
          title={title}
          description={description}
          align="left"
          className="mb-16"
        />

        <div className="space-y-20 sm:space-y-28">
          {items.map((item, i) => {
            const reverse = i % 2 === 1;
            return (
              <div
                key={item.title}
                className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16"
              >
                <div
                  className={cn(
                    "relative aspect-[4/3] overflow-hidden rounded-3xl bg-ink-100 ring-1 ring-ink-200",
                    reverse && "lg:order-2",
                  )}
                >
                  <Image
                    src={item.image.src}
                    alt={item.image.alt}
                    fill
                    sizes="(min-width: 1024px) 50vw, 100vw"
                    className="object-cover"
                  />
                </div>
                <div className={cn(reverse && "lg:order-1")}>
                  <div className="font-display text-sm font-semibold text-brand-600">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <h3 className="mt-2 text-2xl sm:text-3xl">{item.title}</h3>
                  <p className="mt-4 text-lg leading-relaxed text-ink-600">
                    {item.body}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
