import type { MetadataRoute } from "next";
import { siteConfig } from "../lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteConfig.url,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
      alternates: {
        languages: {
          fr: siteConfig.url,
          en: `${siteConfig.url}/en`,
        },
      },
    },
    {
      url: `${siteConfig.url}/publications`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
      alternates: {
        languages: {
          fr: `${siteConfig.url}/publications`,
          en: `${siteConfig.url}/en/publications`,
        },
      },
    },
    {
      url: `${siteConfig.url}/contact`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.5,
      alternates: {
        languages: {
          fr: `${siteConfig.url}/contact`,
          en: `${siteConfig.url}/en/contact`,
        },
      },
    },
  ];
}
