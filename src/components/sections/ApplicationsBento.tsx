import { Container } from "@/components/ui/Container";
import { SectionHeading } from "./SectionHeading";
import { Icon, type IconName } from "@/components/ui/Icon";
import { cn } from "@/lib/cn";

export type BentoItem = {
  title: string;
  body: string;
  icon: IconName;
};

/**
 * Asymmetric bento grid for applications. The first tile is featured
 * (brand surface, larger span); the rest are clean icon tiles.
 */
export function ApplicationsBento({
  eyebrow,
  title,
  description,
  items,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  items: BentoItem[];
}) {
  return (
    <section className="section">
      <Container>
        <SectionHeading
          eyebrow={eyebrow}
          title={title}
          description={description}
          align="left"
          className="mb-14"
        />
        <div className="grid auto-rows-fr gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item, i) => {
            const featured = i === 0;
            return (
              <article
                key={item.title}
                className={cn(
                  "flex flex-col rounded-3xl p-7 ring-1 transition-shadow hover:shadow-lg",
                  featured
                    ? "bg-brand-600 text-white ring-brand-600 sm:col-span-2 lg:row-span-2"
                    : "bg-white text-ink-900 ring-ink-200",
                )}
              >
                <span
                  className={cn(
                    "inline-grid h-12 w-12 place-items-center rounded-xl",
                    featured ? "bg-white/15 text-white" : "bg-brand-50 text-brand-600",
                  )}
                >
                  <Icon name={item.icon} className="h-6 w-6" />
                </span>
                <h3
                  className={cn(
                    "mt-auto pt-8 text-xl",
                    featured && "text-white sm:text-2xl",
                  )}
                >
                  {item.title}
                </h3>
                <p
                  className={cn(
                    "mt-3 leading-relaxed",
                    featured ? "text-brand-50" : "text-ink-600",
                  )}
                >
                  {item.body}
                </p>
              </article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
