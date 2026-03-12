import { useEffect } from "react";

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
}

export default function SEO({
  title = "Elite Employee Fleet (E2F) | Your Partner on the Road to Success",
  description = "Elite Employee Fleet (E2F) provides expert talent acquisition, employee transportation, and wellness solutions to build stronger workforces.",
  keywords = "Elite Employee Fleet, E2F, employee transportation, talent acquisition, employee wellness, workforce solutions, fleet management",
  image = "https://e2fgroup.com/E2F.png",
  url = window.location.href,
}: SEOProps) {
  useEffect(() => {
    const titleElement = document.querySelector("title");
    if (titleElement) {
      titleElement.textContent = title;
    }

    const updateMetaTag = (
      name: string,
      content: string,
      isProperty = false,
    ) => {
      const attribute = isProperty ? "property" : "name";
      let meta = document.querySelector(`meta[${attribute}="${name}"]`);

      if (!meta) {
        meta = document.createElement("meta");
        meta.setAttribute(attribute, name);
        document.head.appendChild(meta);
      }

      meta.setAttribute("content", content);
    };

    updateMetaTag("description", description);
    updateMetaTag("keywords", keywords);

    updateMetaTag("og:title", title, true);
    updateMetaTag("og:description", description, true);
    updateMetaTag("og:image", image, true);
    updateMetaTag("og:url", url, true);
    updateMetaTag("og:type", "website", true);

    updateMetaTag("twitter:card", "summary_large_image");
    updateMetaTag("twitter:title", title);
    updateMetaTag("twitter:description", description);
    updateMetaTag("twitter:image", image);
  }, [title, description, keywords, image, url]);

  return null;
}
