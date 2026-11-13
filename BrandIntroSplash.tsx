"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

let introPlayedForDocument = false;

export default function BrandIntroSplash() {
  const [visible, setVisible] = useState(() => !introPlayedForDocument);

  useEffect(() => {
    if (!visible) return;

    introPlayedForDocument = true;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const timeout = window.setTimeout(() => setVisible(false), reduced ? 1800 : 3200);

    return () => window.clearTimeout(timeout);
  }, [visible]);

  if (!visible) return null;

  return <div className="brand-intro-splash" aria-hidden="true" data-intro-duration="3200">
    <Image
      className="brand-intro-backdrop"
      src="/images/brand-intro-fullscreen.jpg"
      alt=""
      fill
      priority
      sizes="100vw"
    />
    <div className="brand-intro-stage">
      <div className="brand-intro-frame brand-intro-frame-primary">
        <Image
          className="brand-intro-art"
          src="/images/brand-intro-primary.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
        />
      </div>
      <div className="brand-intro-frame brand-intro-frame-wide">
        <Image
          className="brand-intro-art"
          src="/images/brand-intro-fullscreen.jpg"
          alt=""
          fill
          priority
          sizes="(max-aspect-ratio: 16/9) 100vw, 178vh"
        />
      </div>
      <span className="brand-intro-accessible-tagline">The Beginning of Every Smile</span>
    </div>
  </div>;
}
