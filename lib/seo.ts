export const siteConfig = {
  name: "Dr. Houda LECHHEB",
  title: "Dr. Houda LECHHEB - Professeure d'Économie Ibn Tofail",
  description:
    "Dr. Houda LECHHEB, Professeure d'Économie à l'Université Ibn Tofail. Spécialiste en évaluation des politiques publiques et économie de la santé",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://houdalechheb.com",
  ogImage: "/professor-photo.jpg",
  author: "Dr. Houda LECHHEB",
  keywords: [
    // Name variations - TOP PRIORITY for #1 ranking
    "Houda LECHHEB",
    "LECHHEB Houda",
    "Prof Houda LECHHEB",
    "Professeure Houda LECHHEB",
    "Dr Houda LECHHEB",
    "Houda LECHHEB FEGK",
    "LECHHEB FEGK",
    "FEGK Houda",
    "Houda FEGK",
    "Professor Houda LECHHEB",
    "Docteur Houda LECHHEB",
    "houdalechheb",
    "houda lechheb",
    "lechheb houda",
    "prof houda fegk",
    "lechheb fegk",

    // Academic titles with name
    "Professeure Houda LECHHEB Ibn Tofail",
    "Prof Houda LECHHEB Économie",
    "Dr Houda LECHHEB Université Ibn Tofail",
    "Houda LECHHEB Professeure d'Enseignement Supérieur",
    "Houda LECHHEB Economics Professor",
    "Professor Houda LECHHEB Morocco",

    // Institution combinations
    "Houda LECHHEB Université Ibn Tofail",
    "Houda LECHHEB Ibn Tofail University",
    "LECHHEB Ibn Tofail",
    "Prof Houda Ibn Tofail",
    "Houda LECHHEB FEGK Ibn Tofail",
    "Professeure Économie Ibn Tofail Houda",
    "Ibn Tofail University Houda LECHHEB",
    "Université Ibn Tofail Houda LECHHEB",

    // Core academic keywords
    "Professeure Économie",
    "Professeure d'Enseignement Supérieur",
    "Université Ibn Tofail",
    "FEGK Ibn Tofail",
    "Faculté Sciences Économiques Ibn Tofail",
    "Économie Kénitra",
    "Recherche économique Maroc",
    "Publications scientifiques économie",
    "Évaluation d'impact politiques publiques",
    "Économie de la santé Maroc",
    "Développement économique",
    "Économie monétaire",
    "Économie du développement",
    "Politiques publiques Maroc",
    "Recherche académique économie",

    // English keywords
    "Professor Economics",
    "Ibn Tofail University",
    "Economic research Morocco",
    "Health economics",
    "Public policy evaluation",
    "Impact evaluation",
    "Development economics",
    "Monetary economics",
    "Academic research economics",
    "Economics professor Morocco",

    // Location-based keywords
    "Kénitra",
    "Maroc",
    "Morocco",
    "Université Ibn Tofail Kénitra",
    "Economics Morocco university",

    // Academic associations
    "AMPP",
    "AMSE",
    "MEEA",
    "Association Marocaine Politiques Publiques",
    "Association Marocaine Sciences Économiques",
    "Middle East Economic Association",

    // Academic specializations
    "Microéconomie",
    "Macroéconomie",
    "Microeconomics",
    "Macroeconomics",
    "Finance",
    "Économiste",
    "Economist",
    "Academic publications",
    "Scientific research",
    "University professor",
    "Higher education",
    "Enseignement supérieur",

    // Research topics
    "DSGE models",
    "Fiscal policy",
    "Economic modeling",
    "Modélisation économique",
    "Politique fiscale",
    "Choc fiscal",
    "Economic impact",
    "Impact économique",
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
    alternateName: [
      "Houda LECHHEB",
      "LECHHEB Houda",
      "Prof Houda LECHHEB",
      "Professeure Houda LECHHEB",
      "Dr Houda LECHHEB",
      "Houda LECHHEB FEGK",
      "LECHHEB FEGK",
      "FEGK Houda",
      "Houda FEGK",
      "Professor Houda LECHHEB",
      "Docteur Houda LECHHEB",
    ],
    givenName: "Houda",
    familyName: "LECHHEB",
    additionalName: "FEGK",
    honorificPrefix: ["Dr.", "Prof.", "Professeure"],
    honorificSuffix: "PhD",
    jobTitle: [
      "Professeure d'Enseignement Supérieur",
      "Professor of Economics",
      "Professeure d'Économie",
      "Economics Professor",
      "Prof Économie",
      "Économiste",
    ],
    description:
      "Dr. Houda LECHHEB is a Professor of Economics at Ibn Tofail University, specializing in impact evaluation of public policies, health economics, and economic development. Expert researcher with over 40 scientific publications.",
    disambiguatingDescription:
      "Professor Houda LECHHEB (FEGK) - Leading economist at Université Ibn Tofail, Morocco, specializing in public policy evaluation and health economics research.",
    affiliation: {
      "@type": "Organization",
      name: "Université Ibn Tofail",
      alternateName: ["Ibn Tofail University", "UIT", "جامعة ابن طفيل"],
      url: "https://www.uit.ac.ma/",
      department: {
        "@type": "Organization",
        name: "Faculté des Sciences Économiques et de Gestion",
        alternateName: "FEGK",
      },
      address: {
        "@type": "PostalAddress",
        addressLocality: "Kénitra",
        addressRegion: "Rabat-Salé-Kénitra",
        addressCountry: "MA",
        addressCountryName: "Morocco",
      },
    },
    url: siteConfig.url,
    mainEntityOfPage: siteConfig.url,
    identifier: [
      {
        "@type": "PropertyValue",
        name: "ORCID",
        value: process.env.NEXT_PUBLIC_ORCID_ID,
      },
      {
        "@type": "PropertyValue",
        name: "Google Scholar",
        value: process.env.NEXT_PUBLIC_GOOGLE_SCHOLAR_ID,
      },
    ],
    sameAs: [
      siteConfig.social.researchgate,
      siteConfig.social.googleScholar,
      siteConfig.social.orcid,
      "https://houdalechheb.com",
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

  const pageUrl = `${siteConfig.url}${page === "home" ? "" : `/${page}`}`;

  return {
    title: {
      default: baseTitle,
      template: `%s | ${siteConfig.name}`,
    },
    description: baseDescription,
    keywords: pageKeywords,
    authors: [{ name: siteConfig.author }],
    creator: siteConfig.author,
    publisher: "Université Ibn Tofail",
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    openGraph: {
      type: page === "publications" ? "article" : "website",
      locale: siteConfig.locale,
      alternateLocale: siteConfig.alternateLocales,
      title: baseTitle,
      description: baseDescription,
      url: pageUrl,
      siteName: siteConfig.name,
      images: [
        {
          url: siteConfig.ogImage,
          width: 1200,
          height: 630,
          alt: `${siteConfig.name} - Professeure d'Économie, Université Ibn Tofail`,
          type: "image/jpeg",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: baseTitle,
      description: baseDescription,
      images: [siteConfig.ogImage],
      creator: "@houdalechheb",
      site: "@houdalechheb",
    },
    alternates: {
      canonical: pageUrl,
      languages: {
        "fr-MA": pageUrl,
        "en-US": `${siteConfig.url}/en${page === "home" ? "" : `/${page}`}`,
        "fr-FR": pageUrl,
        "x-default": pageUrl,
      },
    },
    verification: {
      google: process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION,
      bing: process.env.NEXT_PUBLIC_BING_VERIFICATION,
    },
    category: "Education",
    classification: "Academic Profile",
    ...(page === "publications" && {
      other: {
        "DC.type": "Collection",
        "DC.format": "text/html",
        "DC.language": "fr-MA",
        "DC.coverage": "Morocco",
        "DC.rights": "© Dr. Houda LECHHEB",
        citation_author: "Houda LECHHEB",
        citation_author_institution: "Université Ibn Tofail",
      },
    }),
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
