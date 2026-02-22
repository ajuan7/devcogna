import type { Metadata } from "next";
import { site } from "./site";

export function createMetadata(opts?: {
  title?: string;
  description?: string;
  path?: string;
}): Metadata {
  const title = opts?.title ? `${opts.title} — ${site.name}` : site.title;
  const description = opts?.description ?? site.description;
  const url = new URL(opts?.path ?? "/", site.url).toString();

  return {
    metadataBase: new URL(site.url),
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      url,
      title,
      description,
      siteName: site.name,
      images: [{ url: "/og.png", width: 1200, height: 630, alt: site.name }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/og.png"],
    },
  };
}