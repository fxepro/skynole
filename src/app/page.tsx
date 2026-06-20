import { Hero } from "@/components/sections/Hero";
import { StatBar } from "@/components/sections/StatBar";
import { FeatureGrid } from "@/components/sections/FeatureGrid";
import { CtaSection } from "@/components/sections/CtaSection";
import { homeContent } from "@/content/home";
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

      <FeatureGrid
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
      />

      <CtaSection />
    </>
  );
}
