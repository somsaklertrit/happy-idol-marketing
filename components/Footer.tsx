"use client";

import Image from "next/image";
import Link from "next/link";
import { externalDestinations } from "@/lib/external-destinations";
import { useLocale } from "./LocaleProvider";

export default function Footer() {
  const { t } = useLocale();
  return <footer className="footer"><div className="footer-glow"/><div className="container footer-grid"><div><Image className="footer-logo" src="/images/logo.png" width={72} height={72} alt="Happy Idol"/><p className="footer-tagline">{t("Made for someone special")}</p><p className="serif footer-line">{t("Because everyone has someone")}<br/>{t("they want to see smile.")}</p></div><div><h3>{t("Explore")}</h3><Link href="/our-story">{t("Our Story")}</Link><Link href="/collections">{t("Collections")}</Link><Link href="/how-it-works">{t("How It Works")}</Link><Link href="/gift-guide">{t("Gift Guide")}</Link></div><div><h3>{t("Continue")}</h3><Link href="/stories">{t("Stories")}</Link><Link href="/faq">{t("FAQ")}</Link><Link href="/start-your-story">{t("Start Your Story")}</Link></div><div><h3>{t("Connect")}</h3>{externalDestinations.lineOfficialUrl && <a href={externalDestinations.lineOfficialUrl} target="_blank" rel="noopener noreferrer">LINE Official — Happy Idol</a>}{externalDestinations.youtubeOfficialUrl && <a href={externalDestinations.youtubeOfficialUrl} target="_blank" rel="noopener noreferrer">YouTube — Happy Idol Official</a>}<a href="mailto:tee@happyidol.tech">tee@happyidol.tech</a></div></div><div className="container footer-bottom"><span>© {new Date().getFullYear()} Happy Idol</span><span>{t("Family-founded. Created with heart.")}</span></div></footer>;
}
