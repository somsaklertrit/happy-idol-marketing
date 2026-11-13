"use client";

import Image from "next/image";
import { Icon } from "./Icons";
import { useLocale } from "./LocaleProvider";
import { externalDestinations } from "@/lib/external-destinations";

export default function MediaConnect() {
  const { t } = useLocale();
  const { lineOfficialUrl, lineQrImageUrl, youtubeOfficialUrl } = externalDestinations;

  return <section className="section media-connect" id="contact" aria-labelledby="media-connect-title">
    <div className="container">
      <header className="section-head center contact-intro">
        <p className="eyebrow">{t("Connect with Happy Idol")}</p>
        <h2 id="media-connect-title">{t("Have a story in mind? Let’s talk.")}</h2>
        <p>{t("Whether you’re choosing a gift, comparing packages, or wondering how your story could come to life, we’re happy to help.")}</p>
      </header>
      <div className="media-connect-grid">
        <article className="media-card line-card">
          <div>
            <p className="media-kicker">LINE Official</p>
            <h3>{t("LINE Official — Happy Idol")}</h3>
            <p>{t("A warm place to ask questions and find the right next step for your story.")}</p>
            {lineOfficialUrl && <a className="button contact-line-cta" href={lineOfficialUrl} target="_blank" rel="noopener noreferrer">{t("Chat on LINE")} <Icon name="arrow"/></a>}
          </div>
          <div className={`qr-stage ${lineQrImageUrl ? "is-ready" : "is-pending"}`} aria-label="LINE Official — Happy Idol QR">
            {lineQrImageUrl ? <Image src={lineQrImageUrl} alt="Happy Idol LINE Official QR code" width={240} height={240} unoptimized/> : <><Icon name="spark"/><span>{t("LINE QR image")}<br/>{t("coming soon")}</span></>}
          </div>
        </article>
        <div className="contact-stack">
          {youtubeOfficialUrl && <a className="media-card youtube-card contact-channel-card" href={youtubeOfficialUrl} target="_blank" rel="noopener noreferrer">
            <div className="media-symbol" aria-hidden="true"><Icon name="book"/></div>
            <p className="media-kicker">YouTube Official</p>
            <h3>Happy Idol Official</h3>
            <p>{t("Watch personalized stories and meaningful gift experiences from Happy Idol.")}</p>
            <span className="text-link">{t("Watch Our Stories")} <Icon name="arrow"/></span>
          </a>}
          <a className="media-card email-card contact-channel-card" href="mailto:tee@happyidol.tech">
            <div className="media-symbol" aria-hidden="true"><Icon name="spark"/></div>
            <p className="media-kicker">Email</p>
            <h3>{t("Email Us")}</h3>
            <span className="contact-email">tee@happyidol.tech</span>
          </a>
        </div>
      </div>
    </div>
  </section>;
}
