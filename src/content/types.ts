import type { Feature } from "@/components/sections/FeatureGrid";
import type { Split } from "@/components/sections/FeatureSplits";
import type { SolutionCard } from "@/components/sections/SolutionsShowcase";

export type PageHeaderContent = {
  eyebrow?: string;
  title: string;
  description?: string;
};

export type ContextPageContent = {
  slug: string;
  header: PageHeaderContent;
  intro?: {
    title?: string;
    body: string;
    image?: { src: string; alt: string };
  };
  splits?: Split[];
  benefits?: Feature[];
  highlights?: Feature[];
  related?: SolutionCard[];
};

export type HubCard = {
  title: string;
  body: string;
  href: string;
  image?: { src: string; alt: string };
};
