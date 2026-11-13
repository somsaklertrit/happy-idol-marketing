# Happy Idol — Founder Review Status

## Current state
- Workspace: `/opt/data/happy-idol-marketing`
- Verified backup preserved: `/opt/data/happy-idol-marketing-backups/happy-idol-marketing-source-20261022T022010Z.tar.gz`
- Last validation: typecheck PASS (0), ESLint PASS (0), fresh Next.js build PASS (0), 12/12 static pages generated.
- VPS-local preview: `http://127.0.0.1:4174` via tracked standalone process `proc_376fc1705f78`, using `HOSTNAME=127.0.0.1 PORT=4174 node .next/standalone/server.js`. It is loopback-only, not a public review URL.
- Read-only crawl: 10 same-origin href targets and 35 assets checked; zero failures.
- Served CSS matched current `.next/static` exactly: SHA-256 `33e7c6d91afa3608a205c533c38fdf4c9be5d8001535be342cf3feec3a0247b3`.

## Revision priorities
1. Start Your Story hierarchy — complete across header, mobile menu, hero, and final CTA.
2. Premium hero motion — complete with restrained zoom/light/particle motion and reduced-motion CSS.
3. Explore Story hierarchy — complete with a featured editorial card and responsive overrides.
4. Video preview structure — complete; unavailable states shown until approved URLs arrive.
5. Premium Box Set presentation — complete using verified local packaging assets.
6. Punnee & Mum presentation — complete with featured layout and responsive crop.
7. Original logo — verified byte-for-byte against approved Master Assets; unchanged.
8. LINE Official — complete using the established project URL `https://lin.ee/tHYWfoK1`.
9. LINE QR presentation — structure complete; final QR file pending.
10. YouTube, three sample-book videos, and Premium Box video — structure complete; URLs pending.
11. Social/contact hierarchy — consolidated through MediaConnect and footer.
12. Image repetition — audited by source path and SHA-256; no duplicate-content files and no clearly accidental reuse changed. Reuse of logo, metadata hero, packaging, founder, and collection assets is intentional; `collection-family.png` and `founder-origin.png` remain the main visual-repetition review candidates.
13. TH/EN readiness — typed `en | th` locale foundation exists. English remains the complete default; Thai has no approved translation and accurately falls back to English with `lang="en"`. No language switcher is presented.

## Founder inputs still required
- Final LINE QR image/file.
- YouTube Official URL.
- Three approved sample-book video URLs.
- Premium Box Set video URL.
- Final external Story Portal destination.

## Static accessibility/runtime evidence
- Rendered home and `/start-your-story`: HTTP 200, `lang="en"`, one `<main id="main">`, valid skip-link target, and one H1 each.
- Every rendered image has an `alt` attribute; empty alt values are used only on decorative/global imagery (home: 2, Start Your Story: 1).
- Header has menu accessible labels, `aria-expanded`, and `aria-controls`; hero has carousel/slide labels and focus pause hooks.
- Global `:focus-visible` and `.skip-link:focus` styles are present.
- Reduced-motion CSS removes hero image transforms, hides particles, and suppresses nonessential animation.
- MediaConnect renders coming-soon states with no iframes, empty embeds, fake QR image, or misleading playable control.
- Mobile-menu Escape handling is now wired in source: Escape closes an open menu, restores focus to the toggle, and removes its document listener during effect cleanup. Browser behavior remains unexecuted because of the sandbox blocker.

## Browser QA blocker
- Playwright QA launcher: `/opt/data/happy-idol-marketing/.qa-tools/qa-browser.cjs`
- Launch report: `/opt/data/happy-idol-marketing/.qa-tools/results/browser-qa-launch-error.json`
- Chromium with `chromiumSandbox: true` failed with `No usable sandbox!`. No `--no-sandbox` workaround or security/system change was used.
- Responsive screenshots, keyboard behavior, runtime focus order, image crops, and browser console checks remain unexecuted.

## Preserved boundaries
Story Portal TEST/Production, Apps Script/submissions, Production deployment, DNS, firewall, security configuration, and the verified backup were not modified.
