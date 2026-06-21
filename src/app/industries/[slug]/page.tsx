import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ContextSubPage } from "@/components/sections/ContextSubPage";
import { getIndustryPage, industrySlugs } from "@/content/industries";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return industrySlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const page = getIndustryPage(slug);
  if (!page) return {};
  return { title: page.header.title };
}

export default async function IndustryDetailPage({ params }: Props) {
  const { slug } = await params;
  const page = getIndustryPage(slug);
  if (!page) notFound();

  return <ContextSubPage content={page} />;
}
