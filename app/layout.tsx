import type React from "react";
import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { siteConfig, generateStructuredData } from "../lib/seo";
import { generateSocialMetaTags } from "../lib/social-meta";

const inter = Inter({ subsets: ["latin"] });

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0f172a" },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  authors: [{ name: siteConfig.author }],
  creator: siteConfig.author,
  publisher: "Université Ibn Tofail",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  // Enhanced meta tags for name-based search optimization
  other: {
    // Name variations for search engines
    author: "Dr. Houda LECHHEB",
    person: "Houda LECHHEB",
    professor: "Houda LECHHEB",
    academic: "Prof Houda LECHHEB",
    researcher: "Dr Houda LECHHEB FEGK",
    economist: "Houda LECHHEB Economics",
    faculty: "Professeure Houda LECHHEB Ibn Tofail",

    // Academic search optimization
    citation_author: "Houda LECHHEB",
    citation_author_institution: "Université Ibn Tofail",
    citation_author_email:
      process.env.NEXT_PUBLIC_CONTACT_EMAIL || "houda.lechheb@uit.ac.ma",
    "DC.creator": "Dr. Houda LECHHEB",
    "DC.contributor": "Houda LECHHEB",
    "DC.subject": "Economics, Public Policy, Health Economics",
    "DC.publisher": "Université Ibn Tofail",

    // Professional identity optimization
    "profile:first_name": "Houda",
    "profile:last_name": "LECHHEB",
    "profile:username": "houdalechheb",
    "article:author": "Dr. Houda LECHHEB",

    // Institution optimization
    institution: "Université Ibn Tofail",
    department: "Faculté des Sciences Économiques et de Gestion",
    location: "Kénitra, Morocco",
    university: "Ibn Tofail University",

    // Search priority tags
    importance: "high",
    priority: "1",
    "canonical-name": "Houda LECHHEB",
    "primary-affiliation": "Université Ibn Tofail",
    "academic-rank": "Professeure d'Enseignement Supérieur",
  },
  openGraph: {
    type: "profile",
    locale: siteConfig.locale,
    alternateLocale: siteConfig.alternateLocales,
    url: siteConfig.url,
    title: siteConfig.title,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} - Professeure d'Économie à l'Université Ibn Tofail`,
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
    creator: "@houdalechheb", // Replace with actual Twitter handle if available
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION || undefined,
    yandex: process.env.NEXT_PUBLIC_YANDEX_VERIFICATION || undefined,
    other: {
      ...(process.env.NEXT_PUBLIC_BING_VERIFICATION && {
        "msvalidate.01": process.env.NEXT_PUBLIC_BING_VERIFICATION,
      }),
    },
  },
  alternates: {
    canonical: siteConfig.url,
    languages: {
      "fr-MA": siteConfig.url,
      "en-US": `${siteConfig.url}/en`,
      "fr-FR": `${siteConfig.url}/fr`,
    },
  },
  category: "Education",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const structuredData = generateStructuredData();

  return (
    <html lang="fr" suppressHydrationWarning>
      <head>
        <link rel="canonical" href={siteConfig.url} />
        <link rel="alternate" hrefLang="fr" href={siteConfig.url} />
        <link rel="alternate" hrefLang="en" href={`${siteConfig.url}/en`} />
        <link rel="alternate" hrefLang="x-default" href={siteConfig.url} />
        <link rel="sitemap" href="/sitemap.xml" />
        <link rel="robots" href="/robots.txt" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />

        {/* Enhanced Social Media Meta Tags */}
        <meta
          property="og:image"
          content={`${siteConfig.url}/professor-photo.jpg`}
        />
        <meta
          property="og:image:secure_url"
          content={`${siteConfig.url}/professor-photo.jpg`}
        />
        <meta property="og:image:type" content="image/jpeg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta
          property="og:image:alt"
          content="Dr. Houda LECHHEB - Professeure d'Économie à l'Université Ibn Tofail"
        />

        {/* Twitter Card Meta Tags */}
        <meta
          name="twitter:image"
          content={`${siteConfig.url}/professor-photo.jpg`}
        />
        <meta
          name="twitter:image:alt"
          content="Dr. Houda LECHHEB - Professeure d'Économie"
        />

        {/* LinkedIn Meta Tags */}
        <meta property="og:image:user_generated" content="false" />

        {/* WhatsApp Meta Tags */}
        <meta
          property="og:image:secure_url"
          content={`${siteConfig.url}/professor-photo.jpg`}
        />

        {/* Discord/Telegram Meta Tags */}
        <meta name="theme-color" content="#16a34a" />

        {/* Pinterest Meta Tags */}
        <meta name="pinterest-rich-pin" content="true" />
        <meta property="og:image:user_generated" content="false" />

        {/* Additional Platform Meta Tags */}
        <meta name="msapplication-TileColor" content="#16a34a" />
        <meta
          name="msapplication-TileImage"
          content={`${siteConfig.url}/professor-photo.jpg`}
        />

        {/* Rich Snippets */}
        <meta itemProp="name" content={siteConfig.title} />
        <meta itemProp="description" content={siteConfig.description} />
        <meta
          itemProp="image"
          content={`${siteConfig.url}/professor-photo.jpg`}
        />

        {/* Academic Search Engines */}
        <meta name="citation_title" content={siteConfig.title} />
        <meta name="citation_author" content="Houda LECHHEB" />
        <meta
          name="citation_author_institution"
          content="Université Ibn Tofail"
        />
        <meta name="citation_publication_date" content="2025" />
        <meta name="citation_language" content="fr" />

        {/* Additional Academic Meta Tags */}
        <meta name="author" content="Dr. Houda LECHHEB" />
        <meta name="profile:first_name" content="Houda" />
        <meta name="profile:last_name" content="LECHHEB" />
        <meta name="profile:username" content="houdalechheb" />
        <meta name="article:author" content="Dr. Houda LECHHEB" />
        <meta name="article:section" content="Economics" />
        <meta
          name="article:tag"
          content="Economics, Health Economics, Public Policy, Development Economics"
        />

        {/* Google Analytics */}
        {process.env.NEXT_PUBLIC_GA_ID && (
          <>
            <script
              async
              src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
            />
            <script
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}', {
                    page_location: window.location.href,
                    page_title: document.title,
                    anonymize_ip: true,
                  });
                `,
              }}
            />
          </>
        )}

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />

        {/* Academic/Research Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "EducationalOrganization",
              name: "Dr. Houda LECHHEB - Academic Research",
              url: siteConfig.url,
              description:
                "Recherche académique en économie, évaluation d'impact et politiques publiques",
              faculty: {
                "@type": "Person",
                name: "Dr. Houda LECHHEB",
                jobTitle: "Professeure d'Enseignement Supérieur",
              },
              parentOrganization: {
                "@type": "Organization",
                name: "Université Ibn Tofail",
                url: "https://www.uit.ac.ma/",
              },
            }),
          }}
        />
      </head>
      <body className={inter.className} suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
