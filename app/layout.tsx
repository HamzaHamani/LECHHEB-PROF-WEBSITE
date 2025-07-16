import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ScrollTop from "@/lib/Scrolltop";

const inter = Inter({ subsets: ["latin"] });

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://dr-asamejd.com";

export const metadata: Metadata = {
  title:
    "Dr. asamejd - Professeur en Sciences Informatiques | University of Paris",
  description:
    "Professeur en Sciences Informatiques à l'Université de Paris, spécialisé en intelligence artificielle et apprentissage automatique. Expert en IA, recherche et enseignement.",
  keywords: [
    "Dr. asamejd",
    "Professeur Sciences Informatiques",
    "Intelligence Artificielle",
    "Apprentissage Automatique",
    "Université de Paris",
    "Recherche IA",
    "Machine Learning",
    "Deep Learning",
    "AI Ethics",
    "Computer Science Professor",
  ],
  authors: [{ name: "Dr. asamejd" }],
  creator: "Dr. asamejd",
  publisher: "Université de Paris",
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
    type: "website",
    locale: "fr_FR",
    alternateLocale: "en_US",
    url: siteUrl,
    title: "Dr. asamejd - Professeur en Sciences Informatiques",
    description:
      "Expert en Intelligence Artificielle et Apprentissage Automatique à l'Université de Paris. Recherche, enseignement et publications en IA.",
    siteName: "Dr. asamejd - Academic Website",
    images: [
      {
        url: `${siteUrl}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "Dr. asamejd - Professeur en Sciences Informatiques",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dr. asamejd - Professeur en Sciences Informatiques",
    description:
      "Expert en Intelligence Artificielle et Apprentissage Automatique à l'Université de Paris.",
    images: [`${siteUrl}/og-image.jpg`],
  },

  alternates: {
    canonical: siteUrl,
    languages: {
      fr: `${siteUrl}`,
      en: `${siteUrl}?lang=en`,
    },
  },
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
    yahoo: "your-yahoo-verification-code",
  },
  generator: "v0.dev",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <head>
        <link rel="canonical" href={siteUrl} />
        <link rel="alternate" hrefLang="fr" href={siteUrl} />
        <link rel="alternate" hrefLang="en" href={`${siteUrl}?lang=en`} />
        <link rel="alternate" hrefLang="x-default" href={siteUrl} />

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Dr. asamejd",
              jobTitle: "Professeur en Sciences Informatiques",
              worksFor: {
                "@type": "Organization",
                name: "Université de Paris",
              },
              url: siteUrl,
              sameAs: [`${siteUrl}`],
              knowsAbout: [
                "Intelligence Artificielle",
                "Apprentissage Automatique",
                "Deep Learning",
                "Éthique de l'IA",
                "Traitement du Langage Naturel",
              ],
              alumniOf: "Université de Paris",
              address: {
                "@type": "PostalAddress",
                streetAddress: "5 Rue Thomas Mann",
                addressLocality: "Paris",
                postalCode: "75013",
                addressCountry: "FR",
              },
              email: "jean.dupont@univ-paris.fr",
            }),
          }}
        />

        {/* Academic/Research Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "EducationalOrganization",
              name: "Dr. asamejd - Academic Research",
              url: siteUrl,
              description:
                "Recherche académique en Intelligence Artificielle et Apprentissage Automatique",
              faculty: {
                "@type": "Person",
                name: "Dr. asamejd",
                jobTitle: "Professeur",
              },
            }),
          }}
        />
      </head>
      <body className={inter.className}>
        <ScrollTop />
        {children}
      </body>
    </html>
  );
}
