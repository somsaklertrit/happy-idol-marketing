export type ExternalDestinations = {
  lineOfficialUrl: string | null;
  lineQrImageUrl: string | null;
  youtubeOfficialUrl: string | null;
  sampleBookVideoUrls: readonly [string | null, string | null, string | null];
  premiumBoxVideoUrl: string | null;
  storyPortalUrl: string | null;
};

// Founder-supplied destinations stay null until they are confirmed.
// Components must render an unavailable state rather than a placeholder link.
export const externalDestinations: ExternalDestinations = {
  lineOfficialUrl: "https://lin.ee/tHYWfoK1",
  lineQrImageUrl: "/images/line-official-qr.jpg",
  youtubeOfficialUrl: "https://www.youtube.com/@HappyIdolOfficial",
  sampleBookVideoUrls: [null, null, null],
  premiumBoxVideoUrl: null,
  storyPortalUrl: null,
};
