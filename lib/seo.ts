import type { Metadata } from "next";

const baseUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://edterranova.vercel.app";

export function generatePageMetadata({
  title,
  description,
  path = "",
}: {
  title: string;
  description: string;
  path?: string;
}): Metadata {
  const fullTitle = `${title} | Especialidades Dentales Terranova Guadalajara`;
  const url = `${baseUrl}${path}`;

  return {
    title: fullTitle,
    description,
    robots: { index: false, follow: false },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: "Especialidades Dentales Terranova",
      locale: "es_MX",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
    },
    alternates: {
      canonical: url,
    },
  };
}
