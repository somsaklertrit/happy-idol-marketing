"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState, type MouseEvent } from "react";
import { useLocale, LanguageSwitcher } from "./LocaleProvider";
import { Icon } from "./Icons";

const links = [
  ["Our Story", "/our-story"], ["Collections", "/collections"], ["How It Works", "/how-it-works"],
  ["Packages", "/#packages"], ["FAQ", "/faq"], ["Contact Us", "/#contact"]
] as const;

export default function Header() {
  const { t } = useLocale();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const handleHomeClick = (event: MouseEvent<HTMLAnchorElement>) => {
    setOpen(false);
    if (pathname !== "/") return;
    event.preventDefault();
    window.scrollTo({ top: 0, behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth" });
  };
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    if (!open) return () => { document.body.style.overflow = ""; };
    const onKeyDown = (event: KeyboardEvent) => { if (event.key === "Escape") { setOpen(false); toggleRef.current?.focus(); } };
    document.addEventListener("keydown", onKeyDown);
    return () => { document.removeEventListener("keydown", onKeyDown); document.body.style.overflow = ""; };
  }, [open]);
  return <header className="site-header"><div className="nav-wrap">
    <Link className="brand" href="/" aria-label={t("Back to Home")} title={t("Back to Home")} onClick={handleHomeClick}><Image src="/images/logo.png" alt="" width={48} height={48} priority/><span><b>Happy Idol</b><small>{t("Made for someone special")}</small></span></Link>
    <Link className="home-control" href="/" aria-label={t("Back to Home")} title={t("Back to Home")} onClick={handleHomeClick}><Icon name="home"/><span>{t("Home")}</span></Link>
    <nav className="desktop-nav" aria-label={t("Main navigation")}>{links.map(([label, href]) => <Link key={href} href={href}>{t(label)}</Link>)}</nav>
    <LanguageSwitcher className="desktop-language" />
    <Link className="button button-small desktop-cta start-story-cta" href="/start-your-story" aria-label={t("Start creating your Happy Idol story")}>{t("Start Your Story")} <Icon name="arrow"/></Link>
    <button ref={toggleRef} className="menu-button" onClick={() => setOpen(!open)} aria-expanded={open} aria-controls="mobile-menu" aria-label={t(open ? "Close menu" : "Open menu")}><Icon name={open ? "close" : "menu"}/></button>
  </div><div id="mobile-menu" className={`mobile-menu ${open ? "open" : ""}`} inert={!open} aria-hidden={!open}><nav aria-label={t("Mobile navigation")}>
    {links.map(([label, href]) => <Link key={href} href={href} onClick={() => setOpen(false)}>{t(label)}</Link>)}
    <LanguageSwitcher className="mobile-language" />
    <Link className="button start-story-cta" href="/start-your-story" aria-label={t("Start creating your Happy Idol story")} onClick={() => setOpen(false)}>{t("Start Your Story")} <Icon name="arrow"/></Link>
  </nav></div></header>;
}
