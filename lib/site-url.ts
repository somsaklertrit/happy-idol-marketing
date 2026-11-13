const PRODUCTION_FALLBACK = "https://happyidol.tech";

export function getSiteUrl(): URL {
  const configured = process.env.NEXT_PUBLIC_SITE_URL?.trim();

  try {
    return new URL(configured || PRODUCTION_FALLBACK);
  } catch {
    return new URL(PRODUCTION_FALLBACK);
  }
}