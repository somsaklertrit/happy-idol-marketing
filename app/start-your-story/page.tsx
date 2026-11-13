"use client";

import Image from "next/image";
import { Icon } from "@/components/Icons";
import { useLocale } from "@/components/LocaleProvider";
import { externalDestinations } from "@/lib/external-destinations";

const stages = [["01", "Choose the story", "Begin with a feeling, occasion, or story direction that fits them."], ["02", "Tell us about them", "Share who they are, what they love, and the qualities that make them special."], ["03", "Share meaningful details", "Photographs, memories, dreams, and a message from you help make it personal."], ["04", "We create the story", "Happy Idol brings words, artwork, and thoughtful design together."], ["05", "Review and confirm", "Where applicable, you will review the story before the final experience is prepared."], ["06", "Receive the finished experience", "A meaningful story, made especially for someone you love."]] as const;

export default function Start() {
  const { t } = useLocale();
  return <main id="main"><section className="start-hero"><div className="start-bg"><Image src="/images/hero-03-for-someone-you-want-to-see-smile.jpg" alt="" fill priority sizes="100vw"/></div><div className="container start-copy"><p className="eyebrow">{t("Start Your Story")}</p><h1>{t("Begin with someone you want to see smile.")}</h1><p className="lead">{t("You do not need to have every detail ready. A person, a feeling, and a meaningful reason are enough to begin.")}</p></div></section><section className="section"><div className="container start-steps">{stages.map(([number, title, description]) => <article key={number}><span>{number}</span><div><h2>{t(title)}</h2><p>{t(description)}</p></div></article>)}</div></section><section className="section cream"><div className="container ready-panel"><div><p className="eyebrow">{t("A gentle first step")}</p><h2>{t("Tell us who the story is for.")}</h2><p className="lead">{t("Talk with the Happy Idol team in LINE. We will help you understand the right next step before any detailed information is needed.")}</p><p className="privacy-note">{t("Only share information that is relevant to your story. Never send passwords, OTPs, banking passwords, or other unrelated private information.")}</p></div>{externalDestinations.lineOfficialUrl && <a className="button" href={externalDestinations.lineOfficialUrl} target="_blank" rel="noreferrer">{t("Continue in LINE")} <Icon name="arrow"/></a>}</div></section></main>;
}
