import { MetadataRoute } from "next";
import { servicios } from "@/content/servicios";

const baseUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://edterranova.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const servicioUrls = servicios.map((s) => ({
    url: `${baseUrl}/servicios/${s.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [
    {
      url: baseUrl,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/servicios`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/nosotros`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    },
    {
      url: `${baseUrl}/galeria`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.5,
    },
    {
      url: `${baseUrl}/contacto`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.9,
    },
    ...servicioUrls,
  ];
}
