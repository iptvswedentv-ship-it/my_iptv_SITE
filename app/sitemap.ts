import { getAllPages } from "@/lib/data-utils";
import type { MetadataRoute } from "next";

const SITE_URL = "https://besteriptv.shop";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = getAllPages();
  const today = new Date().toISOString().split("T")[0];

  // Static pages
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: SITE_URL,
      lastModified: today,
      changeFrequency: "daily",
      priority: 1.0,
    },
    {
      url: `${SITE_URL}/agb`,
      lastModified: today,
      changeFrequency: "monthly",
      priority: 0.3,
    },
    {
      url: `${SITE_URL}/datenschutz`,
      lastModified: today,
      changeFrequency: "monthly",
      priority: 0.3,
    },
    {
      url: `${SITE_URL}/dmca`,
      lastModified: today,
      changeFrequency: "monthly",
      priority: 0.3,
    },
  ];

  // Dynamic slug pages from JSON (prefixed with /cities/)
  const dynamicPages: MetadataRoute.Sitemap = pages
    .filter((page) => page.Slug)
    .map((page) => ({
      url: `${SITE_URL}/cities/${page.Slug}`,
      lastModified: today,
      changeFrequency: "weekly" as const,
      priority: 0.8,
    }));

  return [...staticPages, ...dynamicPages];
}
