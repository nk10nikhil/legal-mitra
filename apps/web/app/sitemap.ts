import type { MetadataRoute } from "next";

const routes = [
  "",
  "/about",
  "/architecture",
  "/platform",
  "/ai-system",
  "/security",
  "/governance",
  "/developers",
  "/documentation",
  "/contact",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `https://legalmitra.in${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: route === "" ? 1 : 0.7,
  }));
}
