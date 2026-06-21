import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/cn";

/**
 * Catalog hub and context sub-page banner.
 * Dark tone for section hubs; light tone for detail sub-pages (design standard).
 */
export function PageBanner({
  eyebrow,
  title,
  description,
  tone = "dark",
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  tone?: "dark" | "light";
}) {
  const isDark = tone === "dark";

  return (
    <section
      className={cn(
        isDark
          ? "bg-ink-900 text-white"
          : "border-b border-ink-200 bg-gradient-to-b from-brand-50 to-white",
      )}
    >
      <Container className="py-20 text-center sm:py-24">
        {eyebrow && (
          <p
            className={cn(
              "inline-flex items-center justify-center gap-2 text-sm font-semibold uppercase tracking-[0.18em]",
              isDark ? "text-brand-300" : "text-brand-600",
            )}
          >
            {eyebrow}
          </p>
        )}
        <h1
          className={cn(
            "mt-3 font-display text-4xl font-semibold tracking-tight sm:text-5xl",
            isDark ? "!text-white" : "text-ink-900",
          )}
        >
          {title}
        </h1>
        {description && (
          <p
            className={cn(
              "mx-auto mt-5 max-w-2xl text-lg leading-relaxed",
              isDark ? "text-ink-300" : "text-ink-600",
            )}
          >
            {description}
          </p>
        )}
      </Container>
    </section>
  );
}
