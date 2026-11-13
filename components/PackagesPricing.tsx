"use client";

import { Icon } from "@/components/Icons";
import { useLocale } from "@/components/LocaleProvider";
import { packagesContent } from "@/data/packages";
import { externalDestinations } from "@/lib/external-destinations";

export default function PackagesPricing() {
  const { locale } = useLocale();
  const pick = (value: { readonly en: string; readonly th: string }) => value[locale];
  const pickList = (value: { readonly en: readonly string[]; readonly th: readonly string[] }) => value[locale];
  const { heading, labels, packages, revisionPolicy, addons, production, flow } = packagesContent;
  const lineUrl = externalDestinations.lineOfficialUrl;

  return (
    <section className="section pricing-section" id="packages" aria-labelledby="packages-title">
      <div className="container">
        <header className="section-head center pricing-heading">
          <p className="eyebrow">{pick(heading.eyebrow)}</p>
          <h2 id="packages-title">{pick(heading.title)}</h2>
          <p>{pick(heading.intro)}</p>
        </header>

        <div className="pricing-grid">
          {packages.map((item) => (
            <article className={`pricing-card ${item.featured ? "pricing-card-featured" : ""}`} key={item.id}>
              <div className="pricing-card-topline">
                <span className="pricing-number">{item.number}</span>
                <span className="pricing-badge">{pick(labels.badge)}</span>
              </div>
              <h3>{item.name}</h3>
              <p className="pricing-tagline">{pick(item.tagline)}</p>
              <div className="pricing-price" aria-label={`${pick(labels.launchPrice)} ${item.launchPrice}`}>
                <span><small>{pick(labels.normalPrice)}</small><del>{item.normalPrice}</del></span>
                <strong><small>{pick(labels.launchPrice)}</small>{item.launchPrice}</strong>
              </div>
              <div className="pricing-includes">
                <h4>{pick(labels.includes)}</h4>
                <ul>{pickList(item.inclusions).map((inclusion) => <li key={inclusion}>{inclusion}</li>)}</ul>
              </div>
              <div className="pricing-best-for">
                <span>{pick(labels.bestFor)}</span>
                <p>{pick(item.bestFor)}</p>
              </div>
              {lineUrl ? (
                <a className="button pricing-cta" href={lineUrl} target="_blank" rel="noopener noreferrer">
                  {pick(item.cta)} <Icon name="arrow" />
                </a>
              ) : (
                <span className="button pricing-cta" aria-disabled="true">{pick(item.cta)}</span>
              )}
            </article>
          ))}
        </div>

        <aside className="revision-policy" aria-labelledby="revision-policy-title">
          <h3 id="revision-policy-title">{pick(revisionPolicy.title)}</h3>
          <div>{pickList(revisionPolicy.paragraphs).map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div>
        </aside>

        <section className="pricing-detail-block pricing-addons" aria-labelledby="addons-title">
          <div className="pricing-detail-heading"><span>+</span><h3 id="addons-title">{pick(addons.title)}</h3></div>
          <dl>{addons.items.map((item) => <div key={pick(item.name)}><dt>{pick(item.name)}</dt><dd>{pick(item.price)}</dd></div>)}</dl>
        </section>

        <section className="pricing-detail-block" aria-labelledby="production-title">
          <div className="pricing-detail-heading"><span>○</span><h3 id="production-title">{pick(production.title)}</h3></div>
          <dl className="production-grid">{production.items.map((item) => <div key={pick(item.label)}><dt>{pick(item.label)}</dt><dd>{pick(item.value)}</dd></div>)}</dl>
        </section>

        <section className="pricing-flow" aria-labelledby="pricing-flow-title">
          <header><p className="eyebrow" id="pricing-flow-title">{pick(flow.eyebrow)}</p></header>
          <ol>{flow.steps.map((step, index) => <li key={pick(step.title)}><span>{String(index + 1).padStart(2, "0")}</span><h3>{pick(step.title)}</h3><p>{pick(step.text)}</p></li>)}</ol>
        </section>
      </div>
    </section>
  );
}
