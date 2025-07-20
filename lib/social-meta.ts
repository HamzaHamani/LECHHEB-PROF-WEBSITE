import { siteConfig } from "./seo";

// Enhanced social media meta tags for all platforms
export const generateSocialMetaTags = (
  title?: string,
  description?: string,
  imagePath?: string,
  pageUrl?: string
) => {
  const socialTitle = title || siteConfig.title;
  const socialDescription = description || siteConfig.description;
  const socialImage = imagePath || "/professor-photo.jpg";
  const socialUrl = pageUrl || siteConfig.url;
  const fullImageUrl = `${siteConfig.url}${socialImage}`;

  return {
    // Open Graph (Facebook, LinkedIn, WhatsApp, etc.)
    "og:title": socialTitle,
    "og:description": socialDescription,
    "og:image": fullImageUrl,
    "og:image:secure_url": fullImageUrl,
    "og:image:type": "image/jpeg",
    "og:image:width": "1200",
    "og:image:height": "630",
    "og:image:alt":
      "Dr. Houda LECHHEB - Professeure d'Économie à l'Université Ibn Tofail",
    "og:url": socialUrl,
    "og:type": "profile",
    "og:locale": "fr_MA",
    "og:site_name": siteConfig.name,

    // Twitter/X
    "twitter:card": "summary_large_image",
    "twitter:title": socialTitle,
    "twitter:description": socialDescription,
    "twitter:image": fullImageUrl,
    "twitter:image:alt": "Dr. Houda LECHHEB - Professeure d'Économie",
    "twitter:creator": "@houdalechheb",
    "twitter:site": "@houdalechheb",

    // LinkedIn specific
    "linkedin:owner": "Dr. Houda LECHHEB",

    // Discord/Telegram
    "theme-color": "#16a34a",

    // Pinterest
    "pinterest-rich-pin": "true",

    // Academic specific
    citation_author: "Houda LECHHEB",
    citation_author_institution: "Université Ibn Tofail",
    citation_author_email: "houda.lechheb@uit.ac.ma",

    // Professional profile
    "profile:first_name": "Houda",
    "profile:last_name": "LECHHEB",
    "profile:username": "houdalechheb",
    "profile:gender": "female",

    // Article specific (for publications)
    "article:author": "Dr. Houda LECHHEB",
    "article:section": "Economics",
    "article:tag":
      "Economics, Health Economics, Public Policy, Development Economics",

    // Schema.org microdata
    "itemprop:name": socialTitle,
    "itemprop:description": socialDescription,
    "itemprop:image": fullImageUrl,
  };
};

// Generate platform-specific sharing URLs
export const generateSharingUrls = (
  url: string,
  title: string,
  description: string
) => {
  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);
  const encodedDescription = encodeURIComponent(description);
  const imageUrl = encodeURIComponent(`${siteConfig.url}/professor-photo.jpg`);

  return {
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
    twitter: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
    whatsapp: `https://wa.me/?text=${encodedTitle}%20${encodedUrl}`,
    telegram: `https://t.me/share/url?url=${encodedUrl}&text=${encodedTitle}`,
    reddit: `https://reddit.com/submit?url=${encodedUrl}&title=${encodedTitle}`,
    email: `mailto:?subject=${encodedTitle}&body=${encodedDescription}%0A%0A${encodedUrl}`,
    pinterest: `https://pinterest.com/pin/create/button/?url=${encodedUrl}&media=${imageUrl}&description=${encodedDescription}`,
  };
};
