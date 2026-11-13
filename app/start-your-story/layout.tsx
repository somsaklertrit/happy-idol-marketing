import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Start Your Story",
  description: "Begin a meaningful personalized story for someone you want to see smile.",
  alternates: { canonical: "/start-your-story" },
  openGraph: {
    title: "Start Your Story | Happy Idol",
    description: "Begin a meaningful personalized story for someone you want to see smile.",
    type: "website",
    url: "/start-your-story",
    images: [{ url: "/images/hero-03-for-someone-you-want-to-see-smile.jpg", alt: "A personalized story made for someone special" }]
  }
};

export default function StartYourStoryLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}