import type {MetadataRoute} from "next";
import {getSiteUrl} from "@/lib/site-url";

const routes=['','/our-story','/collections','/how-it-works','/gift-guide','/stories','/faq','/start-your-story'];

export default function sitemap():MetadataRoute.Sitemap {
  const siteUrl=getSiteUrl();
  return routes.map(route=>({url:new URL(route || '/',siteUrl).toString(),lastModified:new Date(),changeFrequency:route===''?'weekly':'monthly',priority:route===''?1:.8}));
}
