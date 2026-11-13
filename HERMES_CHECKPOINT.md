# Happy Idol Marketing — Hermes Checkpoint

PROJECT:
/opt/data/happy-idol-marketing

CURRENT VERIFIED STATE:
- TH/EN bilingual marketing site works with English default and persistent locale selection.
- Hero is now an exact 5-slide carousel with manual controls, 6-second autoplay, looping, and the approved premium motion.
- Hero slides 1–4 remain in their established order and unchanged; the fifth slide uses the latest Founder-supplied magical-book JPEG.
- Every active Hero asset was installed byte-for-byte from its approved source; no image was regenerated, converted, or recompressed.
- Founder-approved Hero sparkles, supporting particles, breathing, glow, haze, timing, layout, and responsive behavior remain unchanged.
- Header now includes a subtle outline Home icon + localized `Home` / `หน้าแรก` control beside the existing logo. Both the logo and control return from internal pages to `/`, and smoothly scroll to the top when already on Home.
- Homepage example-card YouTube links remain connected for Begood’s Big Dream, Adventure Worlds, Family Legacy / The Golden Legacy of Punnee, and Princess Shilynn.
- Premium Box Set CTA remains connected to the approved Box Set YouTube video.
- The refined `Connect with Happy Idol` contact area and footer remain verified with LINE Official, YouTube Official, email, and TH/EN copy.
- Official `Family Motif.mp3` is installed locally as `/public/audio/family-motif.mp3` and exposed through a small bilingual `Sound On / Sound Off` control.
- Background music is ON by default whenever browser policy permits: it attempts audible autoplay once, otherwise starts from the visitor's first normal pointer/touch/click/keyboard interaction. It plays at 22% volume with a 1.8-second fade, preserves one stream across internal navigation, temporarily pauses before YouTube or while hidden, then gently resumes after video/tab return when previously active. An explicit Sound Off is stored separately for the current browser session and prevents every automatic restart.
- The Founder-supplied official LINE QR is installed byte-for-byte as `/public/images/line-official-qr.jpg` and displayed in the Contact / LINE card.
- `happyidol.tech` is not exposed as a primary public CTA; Story Portal remains untouched.
- Story Portal, Story Portal TEST/Production, Google Apps Script, Google Sheets/Drive workflows, DNS, firewall, and Production remain untouched.
- Permanent Telegram rule is active: for every long-running Happy Idol task, send one concise completion notification after verification, or one immediate blocker notification when Founder action is genuinely required; never include secrets, send progress spam, or treat a notification as authorization for protected actions.
- Permanent Telegram route is explicit: Happy Idol tasks run under `happyidol-line`, but completion/blocker notifications must use `hermes -p default send --to telegram`. Do not duplicate or migrate Telegram credentials into `happyidol-line`.

FINAL HERO MAPPING:
1. `hero-01-walk-into-your-story.jpg` → Walk Into Your Story.
2. `hero-02-family-reading.png` → Every family has a story.
3. `hero-03-princess-story.png` → For someone you want to see smile.
4. `hero-04-a-story-made-just-for-them.jpg` → A story made just for them.
5. `hero-05-happy-idol-magical-book.jpg` → Latest Founder-supplied Happy Idol magical-book artwork with the existing normal overlay structure.

LATEST VERIFICATION:
- Responsive Story Image QA round 1 completed with no website source change required. Our Story hero and Family Story portrait already use centered `object-fit: contain`, preserve their 16:9 and 2:3 ratios, decode successfully, and show complete faces, books, hands, bodies, and story composition.
- Fresh-build browser QA passed at 375×812, 390×844, 430×932, tablet 900×900, and desktop 1280×900 with no horizontal overflow, stretching, or destructive cropping. Typecheck, ESLint, fresh build, standalone packaging, local/public HTTP, and real-browser rendering: PASS.
- Fresh standalone Marketing TEST preview: `http://127.0.0.1:57529/` via session `proc_57f235baa1dd`; public temporary TEST preview: `https://sub-peripheral-fly-breed.trycloudflare.com/` via session `proc_691e56cf2c8a`. Story Portal, Production, DNS, and firewall remain untouched.
- Restored the unchanged production-style Marketing TEST server after the prior origin process stopped: local session `proc_43008d6b6f49` on `127.0.0.1:4184`; local and existing public Quick Tunnel both returned HTTP 200. No source files, Story Portal, or Production were changed.
- Implemented YouTube Return Music Resume v2 in `components/BackgroundMusic.tsx` with three explicit session states: `userMuted`, `musicWasPlayingBeforeExternal`, and `resumePending`. Component mount/pageshow preserves pending return state, playback position is restored where practical, successful play clears pending state, rejected play keeps it pending, and first pointer/touch/click/keyboard interaction remains armed even if a browser emits no reliable return event.
- TEST-only audio diagnostics were compiled into this TEST build with `NEXT_PUBLIC_HAPPY_IDOL_AUDIO_DEBUG=true`; logs cover YouTube click, document hidden/visible, focus, pageshow, and play Promise success/failure with only non-sensitive audio-state values. A normal non-debug build excludes these logs.
- Desktop new-tab/close-tab-equivalent return, visibility return, focus return, pageshow initialization, browser Back with policy fallback, mobile 390×844 rejected-auto-resume then first-touch resume, explicit Sound Off persistence, and three consecutive video-return cycles all passed. Sound UI and actual playback agree (`Sound On` while active, `Sound Off` while muted/paused); exactly one audio element remained. Targeted RED→GREEN assertion, typecheck, ESLint, fresh debug-enabled TEST build, and local HTTP 200: PASS.
- Current production-style Marketing TEST preview: `http://127.0.0.1:4184/` via session `proc_3fec58a06c6d`. Story Portal and Production remain untouched.
- Fixed the targeted music return state in `components/BackgroundMusic.tsx`: explicit user mute and temporary system/video pause are separate. YouTube, hidden-tab, blur, pagehide/pageshow, focus, visibility return, and browser Back flows use a session-scoped resume intention plus playback position; successful resume clears the temporary state, while rejected autoplay keeps it pending for the next normal interaction.
- Browser QA passed: desktop YouTube pause → return resumed the same stream and preserved position; explicit Sound Off remained off through video/tab return; ordinary tab switch resumed; browser Back preserved position and resumed on the policy fallback interaction; 390×844 mobile blocked automatic return and then resumed on first touch. All flows kept exactly one audio element with no overlap. Targeted RED→GREEN assertion, typecheck, ESLint, fresh build, and local HTTP 200: PASS.
- Current production-style Marketing TEST preview: `http://127.0.0.1:4184/` via session `proc_023b649e4310`. Story Portal and Production remain untouched.
- Updated only `components/BackgroundMusic.tsx` for default-on music behavior using the unchanged `/audio/family-motif.mp3`: one policy-compliant autoplay attempt, temporary first-interaction fallback listeners (`pointerdown`, `touchstart`, `click`, `keydown`) removed after success, 22% target volume, 1.8-second fades, and exactly one persistent audio element.
- Real-browser QA confirmed blocked autoplay produces one attempt and first interaction starts playback; desktop pointer and keyboard fallback, 390×844 mobile first-touch fallback, Sound Off fade/pause, session-scoped Off persistence across reload, single-node internal navigation continuity without track reset, YouTube fade/pause, hidden-tab pause, gentle visible-tab resume, and no resume after explicit Off. Targeted RED→GREEN assertion, typecheck, ESLint, fresh production build, and local HTTP 200: PASS.
- Current production-style Marketing TEST preview: `http://127.0.0.1:4184/` via session `proc_d2aadbcfb46b`. Story Portal and Production remain untouched.
- Standardized story-led and emotional editorial image presentation with reusable `.story-media` full-frame behavior. Homepage Heart of Happy Idol, Family Story portraits, Stories with Meaning panels, Our Story family image, and `/stories` editorial images now use centered `object-fit:contain` with asset-specific aspect ratios; mobile story frames use the existing 19px page margins and no crop-forcing fixed heights.
- Desktop 1280, tablet 900, and mobile 390×844 browser QA confirmed full faces, books, hands, and key compositions, matching frame ratios, no distortion, and no horizontal overflow. Our Story hero remains full-frame and its source bytes remain unchanged. Targeted RED→GREEN assertion, typecheck, ESLint, fresh build, local HTTP, and existing public tunnel HTTP: PASS.
- Current production-style Marketing TEST preview: `http://127.0.0.1:4184/` via session `proc_fed15a5fad1c`; HTTP 200. Story Portal and Production remain untouched.
- Fixed only the Our Story hero image presentation: `/images/founder-origin.png` now renders at its complete intrinsic 1672×941 ratio using responsive `width:100%`, `height:auto`, centered `object-fit:contain`, with the former fixed hero height removed only for this page. The image bytes remain unchanged (SHA-256 `179d27c259eca41a4b61ff3279e2fe907bae6b773626b5b27e8f021b6183e34d`).
- Desktop 1280, tablet 900, and mobile 390×844 browser QA confirmed the complete frame, matching source/render ratios, no distortion, and no horizontal overflow. Targeted RED→GREEN assertion, typecheck, ESLint, fresh build, local HTTP, and existing public tunnel HTTP: PASS.
- Current production-style Marketing TEST preview: `http://127.0.0.1:4184/our-story` via session `proc_d2d6c0597183`; HTTP 200. Story Portal and Production remain untouched.
- Refined only Intro Splash using both new Founder references byte-for-byte: portrait primary `/images/brand-intro-primary.jpg` (SHA-256 `39e8cac70258753e57e5261af1ef632e69c7bbc92325be5e798f66f84ef7359a`) and landscape full-screen `/images/brand-intro-fullscreen.jpg` (SHA-256 `d26234dd7db64d99369bed67679cd67b01bcfcf801dba527cf8e42b14f038f4b`). The prior intro asset remains unchanged.
- Normal timing is exactly 3.2 seconds: 0.5-second fade in, 2.2-second fully visible/readable hold, and 0.5-second dissolve. Mobile portrait uses the large-logo 9:16 primary composition over the softly blurred full-screen reference; desktop uses the complete 16:9 full-screen composition. Both preserve aspect ratio with `contain`, and the backdrop fills via `cover` with no cream bands, important crop, stretch, or overflow.
- Reduced motion is a simple 1.8-second fade with frame animation disabled. Protected Hero/Header/BackgroundMusic/How It Works hashes and pre/post desktop/mobile Hero geometry remain unchanged. Targeted RED→GREEN assertion, typecheck, ESLint, fresh build, navigation, transition, local/public HTTP, desktop and 390×844 mobile browser QA: PASS.
- Current production-style Marketing TEST preview: `http://127.0.0.1:4184/` via session `proc_582bbaf52fa3`; HTTP 200. Public temporary TEST preview `https://specifics-benjamin-appendix-alive.trycloudflare.com/`; HTTP 200. Story Portal and Production remain untouched.
- Refined only the existing Intro Splash component and its scoped `.brand-intro-*` styles: normal duration is exactly 2.65 seconds, tagline is fully revealed at 1.45 seconds, held clearly for 0.85 seconds, then dissolved from 2.30–2.65 seconds.
- Mobile and desktop now use the unchanged exact intro asset as a sharp centered 16:9 `contain` foreground over a softly enlarged/blurred `cover` backdrop. Masked foreground edges blend continuously into the full `100vw × 100dvh` overlay with no hard cream bands, logo/tagline crop, stretch, distortion, or page overflow.
- Reduced motion remains a simple 1.5-second fade with no frame scale or gold sweep. Protected Hero/Header/BackgroundMusic/How It Works/Start Your Story hashes and pre/post desktop/mobile Hero geometry are unchanged. Targeted RED→GREEN assertion, typecheck, ESLint, fresh build, navigation, transition, local/public HTTP, desktop and 390×844 mobile browser QA: PASS.
- Current production-style Marketing TEST preview: `http://127.0.0.1:4184/` via session `proc_b40e80c09144`; HTTP 200. Public temporary TEST preview `https://specifics-benjamin-appendix-alive.trycloudflare.com/`; HTTP 200. Story Portal and Production remain untouched.
- Added the homepage-only premium brand intro using the exact Founder-supplied `/images/brand-intro-splash.jpg` (SHA-256 `6181a3c333cd173c5723c17bcc0cc5ea7ec080af00dc9e579fb73851398042e8`). The 1.65-second warm reveal, 96%→100% scale, single soft-gold sweep, delayed baked-in tagline reveal, short hold, and dissolve leave Hero Slide 1 loaded underneath.
- Intro plays on initial homepage load/refresh and does not replay during normal client-side navigation. Reduced motion uses a 650ms fade with scale/sweep disabled. Targeted RED→GREEN assertion, desktop/mobile centering, transition, navigation, five Hero controls, audio/menu presence, no overflow, typecheck, ESLint, and fresh production build: PASS.
- Current production-style Marketing TEST preview: `http://127.0.0.1:4184/` via session `proc_69cdf1848490`; HTTP 200. Public temporary TEST preview `https://specifics-benjamin-appendix-alive.trycloudflare.com/`; HTTP 200. Story Portal and Production remain untouched.
- Replaced the expired public TEST tunnel with `https://specifics-benjamin-appendix-alive.trycloudflare.com/` via session `proc_edb3a09f083e`. Local/public HTTP 200 and a real 390×844 mobile browser load with five Hero controls and no horizontal overflow: PASS. Website code, Story Portal, and Production were unchanged.
- Restored a fresh Cloudflare Quick Tunnel for the unchanged current TEST build: `https://jets-detect-valued-agenda.trycloudflare.com/` via session `proc_d7ccc04fe321`. Local and public HTTP both returned 200, and public real-browser QA loaded the homepage with all five Hero controls and no horizontal overflow.
- Added the clear Home cue by wiring the existing localized Home label/icon styles into `Header.tsx`; logo and Home control share the same localized `Back to Home` / `กลับหน้าแรก` accessible action.
- Desktop and 390×844 mobile QA passed in EN/TH: internal-page return, Home-page smooth scroll-to-top, 42px mobile target, menu open/close behavior, no header overlap, and no horizontal overflow. Targeted RED→GREEN assertion, typecheck, ESLint, and fresh production build: PASS.
- Current production-style Marketing TEST preview: `http://127.0.0.1:4184/` via session `proc_6339ac01a27c`; HTTP 200. Story Portal and Production remain untouched.
- Replaced only the active Hero Slide 5 artwork with the latest Founder-supplied `/images/hero-05-happy-idol-magical-book.jpg`, byte-for-byte identical to attachment `/opt/data/cache/images/img_19a183f60038.jpg` (SHA-256 `ce913317363b7d4aedab5af9352afd95656c692112667c44d5ef6800fbacc6e1`).
- Slides 1–4 retained their exact files, order, and pre-task SHA-256 hashes. `app/page.tsx` and all three How It Works image hashes are unchanged; Story Portal and Production remain untouched.
- Targeted RED→GREEN assertion, typecheck, ESLint, fresh production build, local/public exact asset bytes, five controls, 390×844 mobile framing/no overflow, TH/EN controls, audio control presence, and Slide 5→1 autoplay loop: PASS.
- Current production-style Marketing TEST preview: `http://127.0.0.1:4184/` via session `proc_7b163fab5710`; HTTP 200. Public temporary TEST preview: `https://cottage-juan-pairs-accounting.trycloudflare.com/`; HTTP 200.
- Added only Hero slide 5 as `/images/hero-05-happy-idol-magical-book.png`, byte-for-byte identical to the approved attachment (SHA-256 `92953d6eb515e788e780360d3ae5be616a3935ff7b1b8d0f49d63067f7648168`). Slides 1–4 retain their exact files, order, and verified hashes.
- Updated autoplay from 7 seconds to 6 seconds for the five-slide sequence and made the counter derive from `slides.length`. Added slide-5 breathing motion using the existing fourth-slide keyframes; no existing motion was changed.
- Targeted RED→GREEN assertion, typecheck, ESLint, fresh production build, local HTTP and exact public bytes, five controls/assets, manual navigation, slide 5→1 autoplay loop, desktop/tablet/mobile framing, EN/TH, no overflow, and Sound On/Off at volume `0.22`: PASS. How It Works, Story Portal, and Production remain unchanged.
- Current production-style Marketing TEST preview: `http://127.0.0.1:4184/` via session `proc_d365d26e3e84`; HTTP 200.
- Replaced only Hero slides 2 and 3 with the Founder-supplied PNG assets: `/images/hero-02-family-reading.png` and `/images/hero-03-princess-story.png`. Hero slides 1 and 4, the four-slide order, overlays, controls, seven-second autoplay, motion, links, audio behavior, and TH/EN behavior remain preserved.
- Replaced the homepage How It Works teaser artwork with the exact supplied `/images/how-it-works-teaser.png`. The full 1672×941 composition uses `object-fit: contain`, has no duplicate visible card copy, and keeps the existing `/how-it-works` navigation and EN/TH detailed-page switching.
- Exact source-to-installed bytes for all three new assets: PASS. Targeted RED→GREEN assertion, typecheck, ESLint, fresh production build, local HTTP/assets, desktop Hero slides 1–4, desktop/mobile teaser layout, click navigation, EN→TH→EN destination switching, and 390×844 mobile overflow: PASS.
- Current production-style Marketing TEST preview: `http://127.0.0.1:4184/` via session `proc_e14bd899f270`; HTTP 200. Story Portal, Google Apps Script, DNS, firewall, and Production remain untouched.
- Verified the `default` profile owns the working Telegram bot and configured Home Channel while `happyidol-line` remains the task profile. `hermes -p default send --list telegram` found the Founder DM target.
- Direct default-profile routing test returned `success: true` with Telegram message ID `107`; no Telegram credentials were copied, migrated, printed, or changed.
- Updated only `.hermes.md` and this checkpoint with the permanent explicit-default notification route. Website source, Story Portal, Production, DNS, and firewall remain unchanged.
- Added both approved language-specific How It Works assets without regeneration: EN `/images/how-it-works-en.png` (SHA-256 `b41478885c30ad68bdd8ee3806e727ff8b3c73430574a2473c2380cec340d44e`) and TH `/images/how-it-works-th.png` (SHA-256 `76bf1912fb3e241fef4393984f257d86b1243657101a2cb88d1d5410de98a48d`). Removed the obsolete duplicate EN filename.
- The existing LocaleProvider now selects exactly one infographic in the same How It Works visual: EN→English and TH→Thai, switching immediately in place without reload or a second language system. EN→TH→EN browser rendering and localized accessible names: PASS.
- Full-frame centered `object-fit: contain` presentation remains unchanged. Desktop 1280, tablet 900, and mobile 390×844 all preserve the full asset with no overflow or distortion; one image is present at all times.
- Optional lightbox was intentionally skipped to avoid unnecessary interaction/code because the existing full-frame responsive presentation is clean and readable.
- Locale infographic assertion followed RED→GREEN. Typecheck, ESLint, production build, public HTTP, exact public bytes for both assets, desktop, tablet, mobile, and TH/EN switching: PASS.
- Hero Carousel, Packages, background music, Start Your Story, and Contact component hashes remain unchanged. Story Portal, Google Apps Script, DNS, firewall, and Production remain untouched.
- Re-verified the only newly attached approved image, the official LINE QR, already installed in the existing Contact / LINE section; no website code or asset replacement was required.
- Local source and installed public asset remain byte-for-byte identical at SHA-256 `a84e07ed509def9b07187cf2e4f7e1bcd7359bb797fb1abbbd941d35e472aed1`.
- Current public desktop QA: original 720×720 image renders full-frame at 174×174 inside a 210×210 white stage with 17px padding; current mobile QA: 170×170 inside a 204×204 stage with 16px padding.
- Both viewports use `object-fit: contain`, centered 1:1 geometry, no cropping/zoom/effects/overlays, no horizontal overflow, and the direct LINE CTA remains prioritized. EN/TH contact behavior: PASS.
- No-code-change policy applied: the current typecheck, ESLint, and production build remain PASS from the immediately preceding verified build; they were not redundantly rerun.
- Rebalanced the homepage Hero CTA hierarchy: primary `Explore Happy Idol ↓` / `ค้นพบ Happy Idol ↓` scrolls to the existing four-card Story Worlds examples at `#story-examples`; secondary `Start Your Story` / `เริ่มสร้างเรื่องราว` retains `/start-your-story`.
- Added the bilingual bottom-center `Scroll to discover ↓` / `เลื่อนลงเพื่อค้นพบเรื่องราว ↓` cue, with gentle motion and verified `prefers-reduced-motion` behavior (`animation: none`, document smooth scrolling disabled).
- Desktop/tablet Hero now uses an approximately 90vh composition so the next value section is visibly revealed; desktop 1280×720 and tablet 900×800 both showed the next section without CTA overlap or horizontal overflow. Mobile 390×844 remained clean, with both CTAs, cue, value section, and no overflow.
- Explore CTA and cue both reached `#story-examples` with the target at 78px below the sticky header. Top-navigation and mobile-menu Start Your Story shortcuts remain unchanged.
- Hero autoplay advanced slide 1→2 after seven seconds; 9 sparkles, 16 dust particles, all four approved Hero assets, motion layers, motion debug support, and manual controls remain preserved.
- Homepage-discovery assertion: verified RED failure before implementation, then PASS. Typecheck, ESLint, production build, public HTTP, desktop/tablet/mobile, EN/TH, keyboard-link semantics, and reduced-motion QA: PASS.
- Made each of the four homepage Story Worlds images a keyboard-accessible secure new-tab link to the same approved YouTube destination as its CTA, with a subtle premium play indicator, 2% hover/focus zoom, and visible focus treatment.
- Updated CTA labels to `Watch Story Preview` / `ชมตัวอย่างเรื่องราว` for Begood, Family Legacy, and Princess Shilynn; retained `Watch Animation` and added the approved Thai `ชมแอนิเมชัน` for Adventure Worlds.
- Story-card assertion: verified RED failure before implementation, then PASS. Typecheck, ESLint, and production build: PASS.
- Desktop and 390×844 mobile browser QA verified all eight image/CTA links, labels, secure attributes, accessible image names, 350×290 mobile tap areas, unchanged image sources, and no horizontal overflow.
- Real-pointer browser QA proved both image and CTA clicks stop active music from volume `0.22` to paused/volume `0` before navigation and never auto-resume. Hero, Packages, Premium Box Set, Start Your Story, exact LINE QR, and Story Portal boundary remained unchanged.
- Updated only the homepage Premium Box Set CTA label to `Watch Premium Box Set` / `ชมตัวอย่าง Premium Box Set`; destination remains the Founder-approved `https://youtu.be/kSzmfEedNog?si=bS5YobahPO731vWJ` with `target="_blank"` and `rel="noopener noreferrer"`.
- Premium Box CTA assertion: verified RED failure before implementation, then PASS. Typecheck, ESLint, and production build: PASS.
- Real-pointer browser QA proved music playing at volume `0.22` pauses to volume `0` before the YouTube CTA proceeds, and remains paused without auto-resume. Desktop and 390×844 mobile EN/TH labels, destination, secure external-link attributes, layout, and no overflow: PASS.
- Premium Box images, all other collection/video links, Hero, Packages data, background-music component, and exact official LINE QR asset remained unchanged.
- Installed the exact Founder-supplied official LINE QR (SHA-256 `a84e07ed509def9b07187cf2e4f7e1bcd7359bb797fb1abbbd941d35e472aed1`) without regeneration, conversion, recoloring, cropping, or optimization.
- Desktop QR renders square at 174×174 px inside a 210×210 white stage; mobile renders square at 170×170 px inside a 204×204 stage, with the direct Chat on LINE button prioritized above it.
- Desktop and 390×844 mobile browser QA: original 720×720 image loaded directly, `object-fit: contain`, 1:1 aspect ratio, sufficient quiet space, no overlay/effect over the QR, no horizontal overflow, and visually clear/scannable presentation.
- Official LINE QR assertion, typecheck, ESLint, and production build: PASS. Protected Hero Carousel, background music, and Start Your Story hashes remained unchanged.
- Completed and verified the in-progress clickable-contact task: added bilingual `Contact Us` / `ติดต่อเรา` navigation to `/#contact`; LINE, YouTube Official, and email channels are real keyboard-accessible links, with the footer destinations preserved.
- Desktop and 390×844 mobile browser QA: Contact Us navigation reaches `#contact`, mobile menu closes, LINE opens `https://lin.ee/tHYWfoK1`, YouTube opens `https://www.youtube.com/@HappyIdolOfficial`, email uses `mailto:tee@happyidol.tech`, and no horizontal overflow is present.
- Contact assertion, typecheck, ESLint, and production build: PASS. Protected Hero Carousel, background music, and Start Your Story hashes remained unchanged.
- Added the bilingual homepage `Packages & Pricing` section immediately before FAQ with centralized package data, two approved package cards, revision policy, compact add-ons, production/delivery details, and the four-step customer flow.
- Main navigation order is now Our Story → Collections → How It Works → Packages → FAQ; desktop and mobile Packages links navigate to `/#packages` and close the mobile menu correctly.
- Digital price `฿890 → ฿690`, Premium price `฿2,490 → ฿1,990`, Digital 1 revision round, Premium up to 2 rounds, all six add-ons, and shipping `฿120`: PASS in English and Thai.
- Package CTAs open the confirmed LINE Official destination `https://lin.ee/tHYWfoK1` in a new tab; no public Story Portal link, payment gateway, or checkout infrastructure was created.
- Packages requirement assertion: verified RED failure before implementation, then PASS. Typecheck, ESLint, and production build: PASS.
- Desktop and 390×844 mobile browser QA: premium editorial layout, correct prices/copy, no overflow, navigation, TH/EN, audio control, and public TEST preview: PASS.
- Protected Hero Carousel, background-music component, Start Your Story page, and external destinations retained their pre-task SHA-256 hashes; all existing YouTube destinations remained present.
- `/start-your-story/` now uses the approved clean Hero Slide 3 asset `/images/hero-03-for-someone-you-want-to-see-smile.jpg`; the old `/images/hero-03.png` artwork with baked-in navigation and obsolete UI is no longer referenced by that page.
- Targeted Start Your Story asset assertion: verified RED failure before implementation, then PASS.
- Desktop and 390×844 mobile browser QA: clean artwork loaded, one real HTML header only, readable heading/body, balanced family composition, no horizontal overflow, TH/EN and Sound On/Off preserved.
- Homepage `app/page.tsx`, `HeroCarousel.tsx`, `BackgroundMusic.tsx`, and `i18n.ts` hashes remained unchanged; homepage retained all four approved Hero images and one active slide.
- Background-music requirement assertion: verified RED failure before implementation, then PASS.
- Official audio asset copied byte-for-byte (SHA-256 `1a60757dab7f1cb6b40d5e1d83fd1495aac4c54512788503485840d5eff6feb3`); measured duration approximately 52 seconds.
- Initial silent load, 22% volume, 1.8-second fade-in/out, smooth loop transition, Sound On/Off, all five YouTube auto-pause paths, hidden-document pause, and no auto-resume: PASS.
- Desktop and 390×844 mobile audio control, keyboard semantics, accessible label, TH/EN labels, no horizontal overflow: PASS.
- Hero autoplay advanced from slide 1 to slide 2 during final audio QA; approved Hero behavior remains preserved.
- Princess Shilynn lower-left story card keeps the original `character-princess.jpeg` asset (SHA-256 `68d4a0f0639b4258e50a248d7abfa3ed9baba7cb7ad85a71455a2fa16bdcae7b`) and now uses card-specific `object-fit: contain` / centered framing.
- Targeted framing test: verified RED failure before implementation, then PASS.
- TYPECHECK, ESLINT, and BUILD: PASS.
- Desktop and 390×844 mobile browser QA: full head, face, dress, and castle visible; card dimensions, overlay, text, rounded corners, and responsive layout preserved.
- TH/EN story-card copy rendered correctly; the other two story-card image sources remained unchanged.
- Telegram completion notification was attempted, but the active Hermes profile reported that Telegram is not configured; no notification was delivered.
- Targeted Hero mapping test: verified RED failure before implementation, then PASS.
- All four project assets exactly match the corresponding ZIP bytes by direct equality and SHA-256 verification.
- TYPECHECK: PASS (`npm run typecheck`).
- ESLINT: PASS (`npm run lint`).
- BUILD: PASS (`npm run build`).
- Local production-style TEST preview: http://127.0.0.1:4184 via session `proc_6fbc3cf0b651` — RUNNING, HTTP 200.
- Public TEST preview opened successfully in a real browser — PASS.
- Desktop: all four final Hero images loaded, no horizontal overflow, visual layout PASS.
- Full autoplay loop observed in live browser: `1 → 2 → 3 → 4 → 1` — PASS.
- Manual controls mapped each requested image to the correct slide/title — PASS.
- Hero motion layers remain active: 9 sparkles (`memorySparkle`) and 16 particles (`goldenDust`) — PASS.
- TH/EN switching rendered the Hero correctly — PASS.
- Mobile viewport 390×844: responsive layout, all four slide controls/images, no horizontal overflow — PASS.

PUBLIC PREVIEW:
- URL: https://specifics-benjamin-appendix-alive.trycloudflare.com/
- Tunnel session: `proc_edb3a09f083e` — RUNNING.
- Tunnel origin: http://127.0.0.1:4184.
- Cloudflare Quick Tunnel is temporary and has no uptime guarantee.

FILES CHANGED:
- /opt/data/happy-idol-marketing/public/images/brand-intro-primary.jpg
- /opt/data/happy-idol-marketing/public/images/brand-intro-fullscreen.jpg
- /opt/data/happy-idol-marketing/components/BrandIntroSplash.tsx
- /opt/data/happy-idol-marketing/public/images/brand-intro-splash.jpg
- /opt/data/happy-idol-marketing/tests/brand-intro-splash-requirements.mjs
- /opt/data/happy-idol-marketing/public/images/hero-05-happy-idol-magical-book.jpg
- /opt/data/happy-idol-marketing/public/images/hero-05-happy-idol-magical-book.png
- /opt/data/happy-idol-marketing/public/images/hero-02-family-reading.png
- /opt/data/happy-idol-marketing/public/images/hero-03-princess-story.png
- /opt/data/happy-idol-marketing/public/images/how-it-works-teaser.png
- /opt/data/happy-idol-marketing/public/images/hero-01-walk-into-your-story.jpg
- /opt/data/happy-idol-marketing/public/images/hero-02-every-family-has-a-story.jpg
- /opt/data/happy-idol-marketing/public/images/hero-03-for-someone-you-want-to-see-smile.jpg
- /opt/data/happy-idol-marketing/public/images/hero-04-a-story-made-just-for-them.jpg
- /opt/data/happy-idol-marketing/components/HeroCarousel.tsx
- /opt/data/happy-idol-marketing/HERMES_CHECKPOINT.md
- /opt/data/happy-idol-marketing/.hermes.md
- /opt/data/happy-idol-marketing/app/page.tsx
- /opt/data/happy-idol-marketing/app/globals.css
- /opt/data/happy-idol-marketing/app/layout.tsx
- /opt/data/happy-idol-marketing/components/BackgroundMusic.tsx
- /opt/data/happy-idol-marketing/lib/i18n.ts
- /opt/data/happy-idol-marketing/public/audio/family-motif.mp3
- /opt/data/happy-idol-marketing/app/start-your-story/page.tsx
- /opt/data/happy-idol-marketing/components/PackagesPricing.tsx
- /opt/data/happy-idol-marketing/data/packages.ts
- /opt/data/happy-idol-marketing/components/Header.tsx
- /opt/data/happy-idol-marketing/components/MediaConnect.tsx
- /opt/data/happy-idol-marketing/public/images/line-official-qr.jpg
- /opt/data/happy-idol-marketing/lib/external-destinations.ts

PRODUCTION READINESS STAGE 1:
- Configured `.env.production` and `lib/site-url.ts` for `https://happyidol.tech`; production metadata artifacts contain no `http://localhost:3000`, `127.0.0.1`, or `trycloudflare.com` references.
- Added route-specific canonical and Open Graph URLs for all eight Marketing routes while preserving page titles, descriptions, layouts, TH/EN behavior, and `storyPortalUrl: null`.
- Added deterministic standalone packaging through `scripts/package-standalone.mjs`; `.next/standalone/.next/static` and `.next/standalone/public` are packaged before release creation.
- Created immutable TEST/pre-deployment release `/opt/data/happy-idol-marketing-releases/releases/20261027T140909Z`, manifest marked `NOT ACTIVATED`, and fresh 0600 source backup `/opt/data/happy-idol-marketing-backups/happy-idol-marketing-source-20261027T140909Z.tar.gz`.
- Added `docs/PRODUCTION_ROLLBACK.md` without creating or activating `current`/`previous` symlinks. All eight routes, CSS, JavaScript, optimized images, local assets, sitemap, and robots passed through the standalone release on temporary loopback QA.
- Targeted RED→GREEN assertions, typecheck, ESLint, fresh production build, artifact reference scan, desktop/mobile standalone QA, and independent re-review: PASS. Production, DNS, Nginx, Story Portal, Google Apps Script, Cloudflare configuration, and public Portal destination remain unchanged.
- Restored the existing Marketing TEST origin on `127.0.0.1:4184`; local and unchanged public TEST tunnel returned HTTP 200.

AI SUPERVISOR FOUNDATION:
- AI Supervisor foundation prepared.
- Autonomous execution is NOT enabled yet.
- No API credentials configured.
- No cron/webhook automation enabled.

AI SUPERVISOR STEP 2:
- AI Supervisor Step 2 completed.
- Local deterministic decision engine prepared.
- Autonomous execution remains DISABLED.
- External AI/API remains DISABLED.
- No cron/webhook enabled.

AI SUPERVISOR STEP 3:
- AI Supervisor Step 3 completed.
- Next-command draft generator prepared.
- Generated commands are NOT automatically sent.
- Human review remains required.
- Autonomous execution remains DISABLED.
- External AI/API remains DISABLED.
- Cron/webhook remains DISABLED.

AI SUPERVISOR STEP 4:
- AI Supervisor Step 4 completed.
- Controlled one-round Hermes auto-dispatch tested.
- Hard safety gate enabled.
- Duplicate dispatch protection enabled.
- Step 4 continuous autonomous loop was disabled; Step 5 later superseded this only with a bounded manual-start TEST-safe loop.
- Maximum automatic dispatch per Step 4 invocation was 1.
- Production/DNS/Story Portal protected actions remain approval-gated.
- No external AI/API credentials added.

AI SUPERVISOR STEP 5:
- AI Supervisor Step 5 completed.
- Controlled autonomous TEST-safe loop prepared and verified.
- Maximum autonomous rounds: 5; Round 6 is blocked.
- Manual start is required; no boot/Desktop auto-start is enabled.
- Manual STOP control is available through `supervisor/STOP` and is checked before every dispatch and retry.
- Per-round hard safety scans, exact task/round/workspace/action identity, workspace confinement, duplicate-loop locking, persistent duplicate-command protection, one controlled provider retry, fail-closed report parsing, and sensitive-data omission are enabled.
- Production, DNS, Firewall, Story Portal in all environments, Google Apps Script, submission workflows, credentials, payments, destructive actions, permission changes, outside-workspace paths, and external transfer commands remain approval-gated or blocked.
- External Supervisor AI/API was not added. No new API key or recurring cost was added.
- No cron or webhook was enabled.
- Supervisor Python compilation and all 58 automated tests passed.
- Final safe control test completed in 2 rounds; the first real autonomous task `Responsive Story Image QA and Fix` completed in 1 round.
- First real task result: Our Story and Family Story responsive images passed at 375px, 390px, 430px, tablet, and desktop; no website source change was required; typecheck, ESLint, and fresh build passed.

V5 DEPLOYMENT-CAPABILITY PREPARATION:
- Completed fail-closed preparation artifact `happy-idol-marketing-deployment-capability-v5-20261106T015458Z`.
- Final delivery: `/opt/data/happy-idol-marketing-deployment-capability-v5-20261106T015458Z`.
- Final archive: `/opt/data/happy-idol-marketing-deployment-capability-v5-20261106T015458Z.tar.gz`.
- Final archive SHA-256: `2fcc8f2520bed71a4d1bea3f594b3503561a482c28989692d4db560f4cc051d3`.
- Final `SHA256SUMS.txt` SHA-256: `75fe0d82a68f459f5c19e20644b396c53b145b1ba9d7fc8661403f584ec2fd05`.
- Local strict suite: 25/25 PASS; exact delivery/archive verifier: PASS; independent final security review: PASS with no findings.
- Artifact status remains `PREPARED_FAIL_CLOSED / NOT INSTALLABLE / NOT INSTALLED / NOT ACTIVATED`.
- Gate 1–3 remain `PREPARED_NOT_EXECUTED`; Gate 4 remains `BLOCKED_PORTAL_MIGRATION_REQUIRED`.
- Production authorization and Marketing deployment remain false. No Host install, Nginx reload, service start, cutover, Portal mutation, webhook POST, or customer-data read occurred.
- Portal apex service worker/cache and unresolved draft handling require a separately approved Portal migration preparation before an executable deployment-capability revision can be designed safely.

STORY PORTAL MIGRATION READ-ONLY PREPARATION:
- Completed final preparation artifact `happy-idol-story-portal-migration-preparation-v3-20261106T072335Z` under the separately approved read-only discovery/planning scope.
- Final delivery: `/opt/data/happy-idol-story-portal-migration-preparation-v3-20261106T072335Z`.
- Final archive: `/opt/data/happy-idol-story-portal-migration-preparation-v3-20261106T072335Z.tar.gz`.
- Final archive SHA-256: `34d30af802a62c378de04bd46f21bfc71c68dce636af2e974845ffee48f63445`.
- Final `SHA256SUMS.txt` SHA-256: `1c5e96ba65b8340c0b84603084900bafe893f5fe1062c5541fa31f78668f9681`.
- Delivery contains 22 regular files. Local strict suite: 15/15 PASS; preparation validator: PASS; exact delivery/archive verifier: PASS; deterministic reproduction: PASS.
- Independent final security re-review: PASS with no findings; all 54/54 independent observation-policy mutations were rejected.
- Status remains `PREPARED_READ_ONLY / NOT_INSTALLABLE / NOT_INSTALLED / NOT_ACTIVATED / PRODUCTION_UNCHANGED / PORTAL_MIGRATION_NOT_AUTHORIZED / MARKETING_CUTOVER_BLOCKED`.
- Verified: apex and Portal share the same eight-file static root; current Service Worker/draft state is origin-bound; photos are not serialized; LINE routes remain a protected exact contract; Portal rollback remains independent from Marketing rollback.
- Fail-closed blockers remain: no current immutable backup/restore drill, shared root not separated, Apps Script/source/dependency inventory unverified, backend E2E not authorized/executed, draft disposition pending, controlled-client retirement test not executed, `www` origin state pending, observation not started, rollback not rehearsed, and Marketing cutover not authorized.
- Proposed observation policy is not authority: named human owner is pending; phases are 24-hour Portal parallel, 168-hour retirement tail, and 24-hour post-migration with exact zero-drift thresholds and defined rollback triggers.
- No Host file, Portal content, Nginx, DNS, service, Service Worker, backend, customer record, Production route, or Marketing deployment was changed. No form submission, upload, webhook POST, installer, activation, or cutover occurred.
- Superseded preparation archives `ff106d66993d5043963b3c964de5ede96d027a4821492057d3fb0feaf6eb341a` (v1) and `cb39e2a1f7ad195e32a20bc19d4f830e87c89dd59ec8ec58753ff2b260b6cc2a` (v2) must not be used.
- Telegram completion was attempted once after verification; the CLI timed out after 300 seconds without structured API acceptance. Delivery state is `UNKNOWN`; no retry was made to prevent a possible duplicate.

CURRENT NEXT TASK:
- Await separate Founder authorization for the Portal-specific immutable backup and isolated restore-drill phase. That future phase must remain independent from Marketing cutover and must not change live routing, Nginx, DNS, Service Worker, Portal content, backend data, or Production service state without additional explicit authorization.
- Do not export or install Marketing v5 or Portal preparation v3 as executable capability: both are evidence/contract artifacts and intentionally contain no installer or activation path.
- Do not deploy Production without explicit approval.

SAFETY:
- Never modify Story Portal or Story Portal TEST/Production.
- Never modify Google Apps Script, Sheets/Drive submission workflows, DNS, or firewall without explicit approval.
- Never deploy Production without explicit approval.
