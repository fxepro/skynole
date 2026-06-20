import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "./SectionHeading";
import { Icon } from "@/components/ui/Icon";

export type SolutionCard = {
  title: string;
  blurb: string;
  href: string;
  image: { src: string; alt: string };
};

/** Large media cards for the three core solutions — image, label, hover lift. */
export function SolutionsShowcase({
  eyebrow,
  title,
  description,
  items,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  items: SolutionCard[];
}) {
  return (
    <section className="section bg-surface-muted">
      <Container>
        <SectionHeading
          eyebrow={eyebrow}
          title={title}
          description={description}
          align="left"
          className="mb-14"
        />
        <div className="grid gap-6 md:grid-cols-3">
          {items.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className="group relative flex flex-col overflow-hidden rounded-3xl bg-white ring-1 ring-ink-200 transition-shadow hover:shadow-xl"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-gradient-to-br from-brand-50 to-ink-100">
                <Image
                  src={item.image.src}
                  alt={item.image.alt}
                  fill
                  sizes="(min-width: 768px) 33vw, 100vw"
                  className="object-contain p-6 transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-xl">{item.title}</h3>
                <p className="mt-2 flex-1 leading-relaxed text-ink-600">
                  {item.blurb}
                </p>
                <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-brand-600">
                  Learn more
                  <Icon
                    name="arrow"
                    className="h-4 w-4 transition-transform group-hover:translate-x-1"
                  />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
