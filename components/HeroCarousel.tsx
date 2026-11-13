"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState, useSyncExternalStore, type CSSProperties } from "react";
import { Icon } from "./Icons";
import { useLocale } from "./LocaleProvider";

const slides = [
  { image: "/images/hero-01-walk-into-your-story.jpg", title: "Walk Into Your Story.", kicker: "Made for someone special", body: "Every family has a story worth remembering. We turn your moments, memories, and love into a timeless keepsake.", pos: "66% 30%", alt: "A family walking together toward a glowing story world" },
  { image: "/images/hero-02-family-reading.png", title: "Every family has a story.", kicker: "Stories that bring us closer", body: "Because everyone has someone they want to see smile.", pos: "50% 50%", alt: "A family sharing a personalized storybook" },
  { image: "/images/hero-03-princess-story.png", title: "For someone you want to see smile.", kicker: "A gift filled with meaning", body: "A personalized storybook that becomes a treasured memory.", pos: "68% 50%", alt: "A child reading her personalized princess story" },
  { image: "/images/hero-04-a-story-made-just-for-them.jpg", title: "A story made just for them.", kicker: "Personal in every detail", body: "A magical keepsake that celebrates who they are, what they love, and the dreams they carry.", pos: "65% 45%", alt: "A child hugging a personalized Happy Idol book" },
  { image: "/images/hero-05-happy-idol-magical-book.jpg", title: "A story made just for them.", kicker: "Personal in every detail", body: "A magical keepsake that celebrates who they are, what they love, and the dreams they carry.", pos: "65% 50%", alt: "A glowing magical family world emerging from an open Happy Idol book" }
] as const;

const dust = [
  [9, 74, 4, -3, 12], [17, 43, 5, -9, 15], [26, 81, 3, -6, 13], [34, 22, 4, -12, 16],
  [43, 68, 6, -4, 14], [52, 88, 4, -15, 16], [61, 27, 5, -7, 12], [69, 76, 4, -11, 15],
  [77, 17, 4, -2, 12], [84, 59, 5, -14, 15], [91, 32, 4, -8, 13], [95, 83, 6, -5, 16],
  [5, 26, 4, -13, 14], [73, 92, 5, -10, 12], [21, 91, 3, -6, 11], [88, 12, 4, -4, 13]
] as const;

const sparkles = [
  [13, 31, 7, -1.1, 2.6], [37, 77, 9, -2.6, 3.4], [63, 19, 7, -.4, 3.8],
  [81, 67, 8, -1.8, 2.9], [93, 38, 11, -3.2, 4], [55, 84, 7, -.9, 3.2],
  [24, 58, 6, -2.1, 2.3], [72, 9, 12, -2.9, 3.9], [96, 83, 8, -.7, 3.1]
] as const;

function HeroTitle({ text }: { text: string }) {
  const lastSpace = text.lastIndexOf(" ");
  return <>{text.slice(0, lastSpace + 1)}<em>{text.slice(lastSpace + 1)}</em></>;
}

function HeroAtmosphere() {
  return <div className="hero-atmosphere" aria-hidden="true">
    <div className="hero-golden-light"><span/><span/></div>
    <div className="hero-haze"/>
    <div className="hero-dust">{dust.map(([left, top, size, delay, duration], index) => <span key={index} style={{ left: `${left}%`, top: `${top}%`, width: size, height: size, animationDelay: `${delay}s`, animationDuration: `${duration}s` } as CSSProperties}/>)}</div>
    <div className="hero-sparkles">{sparkles.map(([left, top, size, delay, duration], index) => <span key={index} style={{ left: `${left}%`, top: `${top}%`, width: size, height: size, animationDelay: `${delay}s`, animationDuration: `${duration}s` } as CSSProperties}/>)}</div>
  </div>;
}

const subscribeToLocation = () => () => {};
const getMotionDebugSnapshot = () => new URLSearchParams(window.location.search).get("motionDebug") === "1";

export default function HeroCarousel() {
  const { t, locale } = useLocale();
  const [active, setActive] = useState(0);
  const motionDebug = useSyncExternalStore(subscribeToLocation, getMotionDebugSnapshot, () => false);
  useEffect(() => {
    if (motionDebug) return;
    const mq = matchMedia("(prefers-reduced-motion: reduce)");
    if (mq.matches) return;
    const id = setInterval(() => setActive((value) => (value + 1) % slides.length), 6000);
    return () => clearInterval(id);
  }, [motionDebug]);
  const slide = slides[active];
  return <section className={`hero ${motionDebug ? "motion-debug" : ""}`} aria-roledescription="carousel" aria-label={t("Happy Idol stories")}>
    <div className="container hero-inner"><div className="hero-copy" key={`copy-${active}`}><p className="eyebrow"><Icon name="spark"/> {t(slide.kicker)}</p><h1><HeroTitle text={t(slide.title)}/></h1><p className="hero-body">{t(slide.body)}</p><div className="hero-actions"><Link className="button hero-explore-cta" href="#story-examples">{locale === "th" ? "ค้นพบ Happy Idol" : "Explore Happy Idol"} <span className="hero-cta-down" aria-hidden="true">↓</span></Link><Link className="button hero-secondary-cta" href="/start-your-story" aria-label={t("Start creating your Happy Idol story")}>{locale === "th" ? "เริ่มสร้างเรื่องราว" : "Start Your Story"} <Icon name="arrow"/></Link></div></div>
    <div className={`hero-art hero-slide-${active + 1}`} aria-live="polite">{slides.map((item, index) => <Image key={item.image} className={`hero-slide-image hero-motion-${index + 1} ${index === active ? "active" : ""}`} src={item.image} alt={item.alt} fill priority={index === 0} sizes="(max-width: 760px) 100vw, 58vw" style={{ objectPosition: item.pos }}/>) }<HeroAtmosphere/><div className="hero-veil"/><span className="story-note">{t("Your story begins here")}</span>{motionDebug && <span className="motion-debug-label">MOTION DEBUG ACTIVE</span>}</div></div>
    <div className="hero-controls container"><div>{slides.map((_, index) => <button key={index} className={index === active ? "active" : ""} onClick={() => setActive(index)} aria-label={`${t("Show slide")} ${index + 1}`} aria-current={index === active ? "true" : undefined}><span/></button>)}</div><span>{String(active + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}</span></div>
    <Link className="hero-scroll-cue" href="#story-examples">{t("Scroll to discover")} <span aria-hidden="true">↓</span></Link>
  </section>;
}
