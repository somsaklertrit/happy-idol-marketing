"use client";

import Image from "next/image";
import Link from "next/link";
import { Icon } from "./Icons";
import { useLocale } from "./LocaleProvider";
import { collections, steps, faqs } from "@/data/site";
import { pageData, type SecondarySlug } from "@/data/pages";

export default function SecondaryPage({ slug }: { slug: SecondarySlug }) {
  const { locale, t } = useLocale();
  const page = pageData[slug];
  const pageImage = slug === "how-it-works" ? (locale === "th" ? "/images/how-it-works-th.png" : "/images/how-it-works-en.png") : page.image;
  return <main id="main"><section className="page-hero"><div className="container page-hero-grid"><div><p className="eyebrow">{t(page.eyebrow)}</p><h1>{t(page.title)}</h1><p className="lead">{t(page.intro)}</p></div><div className={`page-hero-image ${slug === "how-it-works" ? "page-hero-infographic" : ""} ${slug === "our-story" ? "page-hero-full-image" : ""}`}>{slug === "our-story" ? <Image src={pageImage} alt="" width={1672} height={941} priority sizes="(max-width:800px) 100vw, 50vw"/> : <Image src={pageImage} alt={slug === "how-it-works" ? (locale === "th" ? "ขั้นตอนการสร้างเรื่องราวเฉพาะบุคคล 8 ขั้นตอน" : "How It Works — 8-step personalized story journey") : ""} fill priority sizes="(max-width:800px) 100vw, 50vw"/>}</div></div></section>
    {slug === "our-story" && <OurStory/>}{slug === "collections" && <Collections/>}{slug === "how-it-works" && <How/>}{slug === "gift-guide" && <GiftGuide/>}{slug === "stories" && <Stories/>}{slug === "faq" && <Faq/>}<PageCta/></main>;
}

function OurStory() {
  const { t } = useLocale();
  return <><section className="section"><div className="container article-grid"><div><p className="eyebrow">{t("A different kind of beginning")}</p><h2>{t("Helping a child discover who they may already have the potential to become.")}</h2></div><div className="prose"><p>{t("Growing up, Tee experienced a highly controlled environment with limited freedom to explore his interests and build confidence through encouragement.")}</p><p>{t("As he grew older, he began to understand how mindset, self-belief, creativity, opportunity, and the environment around a child can influence their future.")}</p><p>{t("When he became a father, he chose another approach. Begood grew up with praise, reasoning, art, music, technology, learning, generosity, and space to explore.")}</p></div></div></section><section className="section cream"><div className="container split-grid"><div className="split-image editorial-image story-media story-media-family-portrait"><Image src="/images/founder-family.png" alt="" fill sizes="(max-width:800px) 100vw, 45vw"/></div><div className="split-copy"><p className="eyebrow">{t("The ritual that changed everything")}</p><h2>{t("It began at bedtime.")}</h2><p>{t("Ordinary children’s books did not always carry the exact message Tee wanted to give his son. So he began making stories himself.")}</p><p>{t("Those stories became Begood’s Big Dream. And that experience became Happy Idol.")}</p><blockquote>{t("Stories can help someone feel seen. Loved. Encouraged. Remembered. Celebrated.")}</blockquote></div></div></section></>;
}

function Collections() {
  const { t } = useLocale();
  return <section className="section"><div className="container collection-grid full">{collections.map((collection) => <article className="collection-card" key={collection.slug}><div className={`collection-image ${collection.fit === "contain" ? "contain" : ""}`}><Image src={collection.image} alt="" fill sizes="(max-width:700px) 100vw, (max-width:1100px) 50vw, 33vw"/></div><div className="collection-content"><small>{t(collection.tag)}</small><h2>{t(collection.title)}</h2><p>{t(collection.description)}</p><Link href="/start-your-story">{t("Imagine your story")} <Icon name="arrow"/></Link></div></article>)}</div><p className="availability-note container">{t("Collections are creative starting points. The Happy Idol team will confirm the most suitable direction and availability for your story.")}</p></section>;
}

function How() {
  const { t } = useLocale();
  return <section className="section"><div className="container"><ol className="journey">{steps.map((step, index) => <li key={step.n}><div><span>{step.n}</span><Icon name={index === 0 ? "heart" : index === 1 ? "spark" : index === 2 ? "book" : index === 3 ? "gift" : "star"}/></div><section><p className="eyebrow">{t("Step")} {step.n}</p><h2>{t(step.title)}</h2><p className="lead">{t(step.text)}</p>{index === 1 && <p>{t("We listen for the personal details that make the recipient unmistakably themselves.")}</p>}{index === 2 && <p>{t("Writing, illustration, design, and personal moments are brought together into one coherent world.")}</p>}</section></li>)}</ol></div></section>;
}

function GiftGuide() {
  const { t } = useLocale();
  const groups = [["By recipient", ["Child", "Partner", "Parent", "Grandparent", "Family", "Friend"]], ["By occasion", ["Birthday", "Anniversary", "Milestone", "Graduation", "Mother’s Day", "Father’s Day", "Family celebration", "Just because"]], ["By story", ["Dreams", "Adventure", "Memory", "Family legacy", "Fantasy", "Personal journey"]]] as const;
  return <><section className="section"><div className="container gift-grid">{groups.map(([title, items]) => <article key={title}><Icon name={title === "By recipient" ? "family" : title === "By occasion" ? "gift" : "book"}/><h2>{t(title)}</h2><div>{items.map((item) => <span key={item}>{t(item)}</span>)}</div></article>)}</div></section><section className="section cream"><div className="container packaging-grid"><div className="packaging-copy"><p className="eyebrow">{t("A gift-ready experience")}</p><h2>{t("The presentation supports the story.")}</h2><p className="lead">{t("Premium packaging can make the first moment feel special, while the personalized story remains at the heart of everything.")}</p></div><div className="packaging-image"><Image src="/images/packaging-set.png" alt="" fill sizes="(max-width:800px) 100vw, 50vw"/></div></div></section></>;
}

function Stories() {
  const { t } = useLocale();
  const stories = [["The story that started it all", "Begood’s Big Dream grew from a father’s wish to offer his son a message of confidence and possibility.", "/images/collection-begood.png"], ["A life designed with intention", "Family legacy stories can honor the values, choices, and love that travel through generations.", "/images/collection-legacy.png"], ["When memories become a world", "Photographs, traditions, and everyday moments can become the chapters of a story worth keeping.", "/images/collection-family.png"]] as const;
  return <section className="section"><div className="container editorial-list">{stories.map(([title, description, image], index) => <article key={title}><div className={`editorial-list-image story-media ${index === 0 ? "story-media-three-two" : index === 1 ? "story-media-square" : "story-media-landscape"}`}><Image src={image} alt="" fill sizes="(max-width:800px) 100vw, 50vw"/></div><div><p className="eyebrow">{t("Story")} {String(index + 1).padStart(2, "0")}</p><h2>{t(title)}</h2><p className="lead">{t(description)}</p></div></article>)}</div></section>;
}

function Faq() {
  const { t } = useLocale();
  return <section className="section"><div className="container narrow faq-list">{faqs.map(([question, answer]) => <details key={question}><summary>{t(question)}<span>+</span></summary><p>{t(answer)}</p></details>)}</div></section>;
}

function PageCta() {
  const { t } = useLocale();
  return <section className="page-cta"><div className="container"><Icon name="spark"/><p className="eyebrow">{t("One person. One feeling. One story.")}</p><h2>{t("Ready to begin something meaningful?")}</h2><Link className="button" href="/start-your-story">{t("Start Your Story")} <Icon name="arrow"/></Link></div></section>;
}
