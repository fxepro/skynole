import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "./SectionHeading";
import { Icon } from "@/components/ui/Icon";
import { cn } from "@/lib/cn";

export type Feature = {
  title: string;
  body: string;
  image?: { src: string; alt: string };
  href?: string;
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
          {items.map((item) => {
            const inner = (
              <>
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
                {item.href && (
                  <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-brand-600">
                    Learn more
                    <Icon name="arrow" className="h-4 w-4" />
                  </span>
                )}
              </>
            );

            if (item.href) {
              return (
                <Link
                  key={item.title}
                  href={item.href}
                  className="card group flex flex-col transition-shadow hover:shadow-lg"
                >
                  {inner}
                </Link>
              );
            }

            return (
              <article key={item.title} className="card flex flex-col">
                {inner}
              </article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
