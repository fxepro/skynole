import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/cn";

/** Image + prose split — editorial layout for about and detail pages. */
export function MediaSplit({
  title,
  body,
  image,
  reverse = false,
  surface = "default",
}: {
  title?: string;
  body: string;
  image: { src: string; alt: string };
  reverse?: boolean;
  surface?: "default" | "muted";
}) {
  return (
    <section
      className={cn("section", surface === "muted" && "bg-surface-muted")}
    >
      <Container>
        <div
          className={cn(
            "grid items-center gap-10 lg:grid-cols-2 lg:gap-16",
            reverse && "lg:[&>div:first-child]:order-2",
          )}
        >
          <div
            className={cn(
              "relative aspect-[4/3] overflow-hidden rounded-3xl bg-ink-100 ring-1 ring-ink-200",
              reverse && "lg:order-2",
            )}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
          <div className={cn(reverse && "lg:order-1")}>
            {title && <h2 className="text-3xl sm:text-4xl">{title}</h2>}
            <p className="mt-4 text-lg leading-relaxed text-ink-600">{body}</p>
          </div>
        </div>
      </Container>
    </section>
  );
}
