import { Container } from "@/components/ui/Container";
import { PageBanner } from "./PageBanner";
import { FeatureGrid } from "./FeatureGrid";
import { FeatureSplits } from "./FeatureSplits";
import { MediaSplit } from "./MediaSplit";
import { SolutionsShowcase } from "./SolutionsShowcase";
import { CtaSection } from "./CtaSection";
import type { ContextPageContent } from "@/content/types";

/** Standard layout for solution and industry detail pages. */
export function ContextSubPage({ content }: { content: ContextPageContent }) {
  const { header, intro, splits, benefits, highlights, related } = content;

  return (
    <>
      <PageBanner
        tone="light"
        eyebrow={header.eyebrow}
        title={header.title}
        description={header.description}
      />

      {intro?.image && (
        <MediaSplit
          title={intro.title}
          body={intro.body}
          image={intro.image}
        />
      )}

      {intro && !intro.image && (
        <section className="section">
          <Container>
            <div className="mx-auto max-w-3xl">
              {intro.title && (
                <h2 className="text-2xl sm:text-3xl">{intro.title}</h2>
              )}
              <p className="mt-4 text-lg leading-relaxed text-ink-600">
                {intro.body}
              </p>
            </div>
          </Container>
        </section>
      )}

      {splits && splits.length > 0 && (
        <FeatureSplits
          eyebrow="What we do"
          title="Built for precision and autonomy"
          items={splits}
        />
      )}

      {benefits && benefits.length > 0 && (
        <FeatureGrid
          eyebrow="The benefits"
          title="What you gain"
          items={benefits}
          columns={2}
          surface="muted"
        />
      )}

      {highlights && highlights.length > 0 && (
        <FeatureGrid
          eyebrow="What you need, when you need it"
          title="Ready on command"
          items={highlights}
        />
      )}

      {related && related.length > 0 && (
        <SolutionsShowcase
          eyebrow="More solutions"
          title="Looking for more solutions?"
          items={related}
        />
      )}

      <CtaSection />
    </>
  );
}
