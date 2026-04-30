import type { MetadataRoute } from "next";

const BASE = "https://appsyra.com";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: BASE,                       lastModified: new Date(), changeFrequency: "monthly", priority: 1.0 },
    { url: `${BASE}/about`,            lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/what-we-do`,       lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/careers`,          lastModified: new Date(), changeFrequency: "weekly",  priority: 0.7 },
    { url: `${BASE}/contact`,          lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/legal/privacy`,    lastModified: new Date(), changeFrequency: "yearly",  priority: 0.3 },
    { url: `${BASE}/legal/terms`,      lastModified: new Date(), changeFrequency: "yearly",  priority: 0.3 },
    { url: `${BASE}/legal/cookies`,    lastModified: new Date(), changeFrequency: "yearly",  priority: 0.3 },
  ];
}
