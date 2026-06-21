import { Hero } from "@/components/sections/Hero";
import { StatBar } from "@/components/sections/StatBar";
import { SolutionsShowcase } from "@/components/sections/SolutionsShowcase";
import { FeatureSplits } from "@/components/sections/FeatureSplits";
import { FeatureGrid } from "@/components/sections/FeatureGrid";
import { CtaSection } from "@/components/sections/CtaSection";
import { homeContent } from "@/content/home";
import { solutionCards } from "@/content/solutions";
import { primaryCta, secondaryCta } from "@/config/ctas";

export default function HomePage() {
  const { hero, stats, benefits, future, applications } = homeContent;

  return (
    <>
      <Hero
        eyebrow={hero.eyebrow}
        title={hero.title}
        body={hero.body}
        primaryCta={primaryCta}
        secondaryCta={secondaryCta}
      />

      <StatBar stats={stats} />

      <SolutionsShowcase
        eyebrow="Solutions"
        title="Autonomous aerial photography, surveillance, and delivery"
        description="Three core solution areas powered by the same intelligent autonomous platform — built in the United States."
        items={solutionCards}
      />

      <FeatureSplits
        eyebrow={benefits.eyebrow}
        title={benefits.title}
        items={benefits.items}
      />

      <FeatureGrid
        eyebrow={future.eyebrow}
        title={future.title}
        items={future.items}
        surface="muted"
      />

      <FeatureGrid
        eyebrow={applications.eyebrow}
        title={applications.title}
        description={applications.description}
        items={applications.items}
        columns={2}
      />

      <CtaSection />
    </>
  );
}
