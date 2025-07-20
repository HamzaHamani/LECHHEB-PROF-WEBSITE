import type React from "react";
import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { siteConfig, generateStructuredData } from "../lib/seo";

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
  openGraph: {
    type: "website",
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
        alt: siteConfig.name,
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
