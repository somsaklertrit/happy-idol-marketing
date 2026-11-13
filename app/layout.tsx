import type { Metadata, Viewport } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BackgroundMusic from "@/components/BackgroundMusic";
import { LocaleProvider, LocalizedSkipLink } from "@/components/LocaleProvider";
import { getSiteUrl } from "@/lib/site-url";

const siteUrl = getSiteUrl();

export const metadata: Metadata = {
  metadataBase: siteUrl,
  title: { default: "Happy Idol — Stories Made for Someone Special", template: "%s | Happy Idol" },
  description: "Turn love, memories, and dreams into a personalized story and meaningful keepsake made especially for someone you love.",
  applicationName: "Happy Idol",
  alternates: { canonical: "/" },
  openGraph: { title: "Happy Idol — Walk Into Your Story", description: "Because everyone has someone they want to see smile.", type: "website", url: "/", images: [{ url: "/images/hero-01.png", width: 1536, height: 1024, alt: "A family walking into a magical story world" }] },
  twitter: { card: "summary_large_image", title: "Happy Idol", description: "Personalized stories and meaningful keepsakes.", images: ["/images/hero-01.png"] },
  icons: { icon: "/images/logo-circle.png", apple: "/images/logo.png" }
};
export const viewport: Viewport = { themeColor: "#FFF8EC", colorScheme: "light" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en" suppressHydrationWarning><body><LocaleProvider><LocalizedShell>{children}</LocalizedShell></LocaleProvider></body></html>;
}

function LocalizedShell({ children }: { children: React.ReactNode }) {
  return <><LocalizedSkipLink/><Header />{children}<Footer /><BackgroundMusic /></>;
}
