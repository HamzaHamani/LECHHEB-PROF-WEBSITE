export const siteConfig = {
  name: "Dr. Houda LECHHEB",
  title: "Dr. Houda LECHHEB - Professeure d'Économie | Professor of Economics",
  description:
    "Dr. Houda LECHHEB, Professeure d'Enseignement Supérieur en Économie à l'Université Ibn Tofail. Spécialiste en évaluation d'impact des politiques publiques, économie de la santé et développement économique. Plus de 40 publications scientifiques et recherches académiques dans des revues nationales et internationales indexées.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://houdalechheb.netlify.app",
  ogImage: "/og-image.png",
  author: "Dr. Houda LECHHEB",
  keywords: [
    "Houda LECHHEB",
    "Professeure Économie",
    "Professor Economics",
    "Université Ibn Tofail",
    "Ibn Tofail University",
    "Kénitra",
    "Maroc",
    "Morocco",
    "Recherche économique",
    "Economic research",
    "Publications scientifiques",
    "Évaluation d'impact",
    "Impact evaluation",
    "Politiques publiques",
    "Public policies",
    "Économie de la santé",
    "Health economics",
    "Développement économique",
    "Economic development",
    "Économie monétaire",
    "Monetary economics",
    "Finance",
    "Academic research",
    "Économiste",
    "Economist",
    "AMPP",
    "AMSE",
    "MEEA",
    "Microéconomie",
    "Macroéconomie",
  ],
  locale: "fr_MA",
  alternateLocales: ["en_US", "fr_FR"],
  social: {
    researchgate: "https://www.researchgate.net/profile/Houda-Lechheb",
    googleScholar: "https://scholar.google.com/citations?user=YOUR_ID",
    orcid: "https://orcid.org/YOUR_ORCID_ID",
  },
};

export const generateStructuredData = (page: string = "home") => {
  const baseData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Dr. Houda LECHHEB",
    alternateName: "Houda LECHHEB",
    jobTitle: [
      "Professeure d'Enseignement Supérieur",
      "Professor of Economics",
    ],
    affiliation: {
      "@type": "Organization",
      name: "Université Ibn Tofail",
      alternateName: "Ibn Tofail University",
      url: "https://www.uit.ac.ma/",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Kénitra",
        addressCountry: "MA",
      },
    },
    url: siteConfig.url,
    sameAs: [
      siteConfig.social.researchgate,
      siteConfig.social.googleScholar,
      siteConfig.social.orcid,
    ],
    knowsAbout: [
      "Economics",
      "Économie",
      "Impact Evaluation",
      "Évaluation d'impact",
      "Public Policy",
      "Politiques publiques",
      "Health Economics",
      "Économie de la santé",
      "Development Economics",
      "Économie du développement",
      "Monetary Economics",
      "Économie monétaire",
      "Finance",
      "Academic Research",
      "Recherche académique",
    ],
    alumniOf: {
      "@type": "Organization",
      name: "Université Ibn Tofail",
    },
    worksFor: {
      "@type": "Organization",
      name: "Université Ibn Tofail",
      url: "https://www.uit.ac.ma/",
    },
    memberOf: [
      {
        "@type": "Organization",
        name: "Association Marocaine des Politiques Publiques",
        alternateName: "AMPP",
      },
      {
        "@type": "Organization",
        name: "Association Marocaine des Sciences Économiques",
        alternateName: "AMSE",
      },
      {
        "@type": "Organization",
        name: "Middle East Economic Association",
        alternateName: "MEEA",
      },
    ],
    nationality: "Moroccan",
    workLocation: {
      "@type": "Place",
      name: "Kénitra, Morocco",
    },
  };

  if (page === "publications") {
    return {
      ...baseData,
      "@type": ["Person", "ScholarlyArticle"],
      author: {
        "@type": "Person",
        name: "Dr. Houda LECHHEB",
      },
      about: [
        "Economic research publications",
        "Scientific articles",
        "Academic publications",
        "Publications scientifiques",
      ],
    };
  }

  if (page === "contact") {
    return {
      ...baseData,
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "Academic",
        areaServed: "MA",
        availableLanguage: ["French", "Arabic", "English"],
      },
    };
  }

  return baseData;
};

export const generatePageMetadata = (
  page: string,
  title?: string,
  description?: string,
  keywords?: string[]
) => {
  const baseTitle = title || siteConfig.title;
  const baseDescription = description || siteConfig.description;
  const pageKeywords = keywords
    ? [...siteConfig.keywords, ...keywords]
    : siteConfig.keywords;

  return {
    title: baseTitle,
    description: baseDescription,
    keywords: pageKeywords,
    openGraph: {
      title: baseTitle,
      description: baseDescription,
      url: `${siteConfig.url}${page === "home" ? "" : `/${page}`}`,
      type: "website",
      locale: siteConfig.locale,
      siteName: siteConfig.name,
      images: [
        {
          url: siteConfig.ogImage,
          width: 1200,
          height: 630,
          alt: siteConfig.name,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: baseTitle,
      description: baseDescription,
      images: [siteConfig.ogImage],
    },
    alternates: {
      canonical: `${siteConfig.url}${page === "home" ? "" : `/${page}`}`,
      languages: {
        "fr-MA": `${siteConfig.url}${page === "home" ? "" : `/${page}`}`,
        "en-US": `${siteConfig.url}/en${page === "home" ? "" : `/${page}`}`,
      },
    },
  };
};

export const generatePublicationStructuredData = (publications: any[]) => {
  return publications.map((pub) => ({
    "@context": "https://schema.org",
    "@type": "ScholarlyArticle",
    headline: pub.title,
    author: {
      "@type": "Person",
      name: "Dr. Houda LECHHEB",
    },
    datePublished: `${pub.year}-01-01`,
    publisher: {
      "@type": "Organization",
      name: pub.journal,
    },
    description: pub.description,
    keywords: pub.tags,
    inLanguage: "fr-MA",
    isPartOf: {
      "@type": "Periodical",
      name: pub.journal,
    },
    ...(pub.link && { url: pub.link }),
    ...(pub.isbn && { isbn: pub.isbn }),
  }));
};
