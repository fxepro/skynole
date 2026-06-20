import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "./SectionHeading";
import { cn } from "@/lib/cn";

export type Feature = {
  title: string;
  body: string;
  image?: { src: string; alt: string };
};

/** Benefits / capabilities grid. Cards optionally carry a media header. */
export function FeatureGrid({
  eyebrow,
  title,
  description,
  items,
  columns = 3,
  surface = "default",
}: {
  eyebrow?: string;
  title?: string;
  description?: string;
  items: Feature[];
  columns?: 2 | 3;
  surface?: "default" | "muted";
}) {
  return (
    <section className={cn("section", surface === "muted" && "bg-surface-muted")}>
      <Container>
        {title && (
          <SectionHeading
            eyebrow={eyebrow}
            title={title}
            description={description}
            className="mb-14"
          />
        )}
        <div
          className={cn(
            "grid gap-8",
            columns === 3 ? "md:grid-cols-3" : "md:grid-cols-2",
          )}
        >
          {items.map((item) => (
            <article key={item.title} className="card flex flex-col">
              {item.image && (
                <div className="relative mb-5 aspect-[3/2] w-full overflow-hidden rounded-xl bg-ink-100">
                  <Image
                    src={item.image.src}
                    alt={item.image.alt}
                    fill
                    sizes="(min-width: 768px) 33vw, 100vw"
                    className="object-cover"
                  />
                </div>
              )}
              <h3 className="text-xl">{item.title}</h3>
              <p className="mt-3 leading-relaxed text-ink-600">{item.body}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
