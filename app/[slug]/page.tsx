import type { Metadata } from "next";
import { notFound } from "next/navigation";
import SecondaryPage from "@/components/SecondaryPage";
import { pageData, type SecondarySlug } from "@/data/pages";

export function generateStaticParams() {
  return Object.keys(pageData).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const page = pageData[slug as SecondarySlug];
  if (!page) return {};

  const routePath = `/${slug}`;
  return {
    title: page.title,
    description: page.intro,
    alternates: { canonical: routePath },
    openGraph: {
      title: page.title,
      description: page.intro,
      type: "website",
      url: routePath,
      images: [{ url: "/images/hero-01.png", width: 1536, height: 1024, alt: "A family walking into a magical story world" }]
    }
  };
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  if (!(slug in pageData)) notFound();
  return <SecondaryPage slug={slug as SecondarySlug}/>;
}
