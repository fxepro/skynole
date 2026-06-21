import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ContextSubPage } from "@/components/sections/ContextSubPage";
import {
  getSolutionPage,
  solutionSlugs,
} from "@/content/solutions";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return solutionSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const page = getSolutionPage(slug);
  if (!page) return {};
  return { title: page.header.title };
}

export default async function SolutionDetailPage({ params }: Props) {
  const { slug } = await params;
  const page = getSolutionPage(slug);
  if (!page) notFound();

  return <ContextSubPage content={page} />;
}
