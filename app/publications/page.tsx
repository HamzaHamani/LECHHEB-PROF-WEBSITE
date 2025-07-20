"use client";
import { useState, useEffect } from "react";
import { ExternalLink, ArrowLeft } from "lucide-react";
import {
  generateStructuredData,
  generatePublicationStructuredData,
} from "../../lib/seo";
import { publications } from "../../data/publicationsData";
import Link from "next/link";

const translations = {
  fr: {
    title: "Dr. Houda LECHHEB",
    subtitle: "Professeure d'Enseignement Supérieur",
    university: "Université Ibn Tofail",
    research_title: "Publications Scientifiques",
    footer_rights: "Tous droits réservés.",
    back_to_home: "← Retour à l'accueil",
    filter_by_category: "Filtrer par catégorie :",
    all_categories: "Toutes les catégories",
    external_link: "Lien externe",
    total_publications: "publications au total",
  },
  en: {
    title: "Dr. Houda LECHHEB",
    subtitle: "Professor of Higher Education",
    university: "Ibn Tofail University",
    research_title: "Scientific Publications",
    footer_rights: "All rights reserved.",
    back_to_home: "← Back to Home",
    filter_by_category: "Filter by category:",
    all_categories: "All categories",
    external_link: "External link",
    total_publications: "total publications",
  },
};

export default function PublicationsPage() {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [language, setLanguage] = useState<"fr" | "en">("fr");
  const [filter, setFilter] = useState<
    "all" | "ouvrages" | "national" | "scopus" | "international"
  >("all");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") as "light" | "dark" | null;
    const savedLanguage = localStorage.getItem("language") as
      | "fr"
      | "en"
      | null;

    if (savedTheme) setTheme(savedTheme);
    if (savedLanguage) setLanguage(savedLanguage);

    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);

  const t = (key: string): string => {
    return (
      translations[language][
        key as keyof (typeof translations)[typeof language]
      ] || key
    );
  };

  const CATEGORY_TYPES = [
    {
      key: "ouvrages",
      value: "Articles d'Ouvrages",
      label: language === "fr" ? "Articles d'Ouvrages" : "Book Chapters",
    },
    {
      key: "national",
      value: "Articles scientifiques dans des revues spécialisées nationales",
      label:
        language === "fr"
          ? "Articles scientifiques dans des RSN"
          : "National Scientific Journals",
    },
    {
      key: "scopus",
      value: "Articles Internationaux Indexés Scopus",
      label:
        language === "fr"
          ? "Articles internationaux indéxés Scopus"
          : "International Indexed Scopus Articles",
    },
    {
      key: "international",
      value: "Articles Internationaux Indexés",
      label:
        language === "fr"
          ? "Articles Internationaux Indexés"
          : "International Indexed Articles",
    },
  ];

  const filteredPublications = () => {
    if (filter === "all") return publications;
    const selectedCategory = CATEGORY_TYPES.find((c) => c.key === filter);
    return publications.filter(
      (pub) => pub.categoryType === selectedCategory?.value
    );
  };

  const structuredData = generateStructuredData("publications");
  const publicationsStructuredData =
    generatePublicationStructuredData(publications);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": publicationsStructuredData,
          }),
        }}
      />

      <div
        className={`min-h-screen ${
          theme === "dark"
            ? "bg-gray-950 text-gray-100"
            : "bg-white text-gray-900"
        }`}
        style={{
          fontFamily:
            '"Times New Roman", "Liberation Serif", "Nimbus Roman No9 L", serif',
        }}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-12">
          {/* Header */}
          <header className="text-center mb-8">
            <h1 className="text-3xl lg:text-4xl font-semibold mb-2 text-black dark:text-white">
              {t("title")}
            </h1>
            <h2 className="text-lg mb-2 text-gray-700 dark:text-gray-300">
              {t("subtitle")}
            </h2>
            <p className="text-lg mb-4 text-gray-700 dark:text-gray-300">
              {t("university")}
            </p>
          </header>

          {/* Navigation */}
          <div className="mb-8">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-green-600 hover:text-green-700 dark:text-green-400 dark:hover:text-green-300 text-base font-medium"
            >
              <ArrowLeft className="w-4 h-4" />
              {t("back_to_home")}
            </Link>
          </div>

          {/* Page Title and Info */}
          <div className="mb-8">
            <h1 className="text-2xl sm:text-3xl font-semibold mb-4 text-black dark:text-white">
              {t("research_title")}
            </h1>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              {publications.length} {t("total_publications")}
            </p>

            {/* Filter */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <label className="text-sm font-semibold text-green-700 dark:text-green-300">
                {t("filter_by_category")}
              </label>
              <select
                value={filter}
                onChange={(e) => setFilter(e.target.value as typeof filter)}
                className="px-4 py-2 border rounded-md text-sm font-medium bg-white dark:bg-gray-800 border-green-600 dark:border-green-400 text-green-900 dark:text-green-200 focus:outline-none focus:ring-2 focus:ring-green-500"
              >
                <option value="all">{t("all_categories")}</option>
                {CATEGORY_TYPES.map((cat) => (
                  <option key={cat.key} value={cat.key}>
                    {cat.label}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Publications Content */}
          <div className="space-y-8">
            {filter === "all" ? (
              // Show all publications grouped by category
              CATEGORY_TYPES.map((category) => {
                const categoryPubs = publications.filter(
                  (pub) => pub.categoryType === category.value
                );
                if (categoryPubs.length === 0) return null;

                return (
                  <div key={category.key} className="mb-8">
                    <h3 className="text-lg font-medium mb-4 text-green-600 dark:text-green-400">
                      {category.label} ({categoryPubs.length})
                    </h3>
                    <div className="space-y-4">
                      {categoryPubs.map((pub) => (
                        <div key={pub.id} className="mb-4 sm:mb-6">
                          <p className="font-medium text-sm sm:text-base text-black dark:text-white">
                            {pub.title}
                          </p>
                          <p
                            className={`text-sm sm:text-base ${
                              theme === "dark"
                                ? "text-gray-300"
                                : "text-gray-700"
                            }`}
                          >
                            {pub.authors} ({pub.year}) - <em>{pub.journal}</em>
                          </p>
                          <p
                            className={`mt-1 text-sm sm:text-base ${
                              theme === "dark"
                                ? "text-gray-300"
                                : "text-gray-700"
                            }`}
                          >
                            {pub.shortDescription || pub.description}
                          </p>
                          <div
                            className={`flex flex-wrap gap-2 sm:gap-4 text-xs sm:text-sm mt-2 ${
                              theme === "dark"
                                ? "text-gray-400"
                                : "text-gray-600"
                            }`}
                          >
                            {pub.tags.map((tag: string, index: number) => (
                              <span key={`${tag}-${index}`}>{tag}</span>
                            ))}
                          </div>
                          {pub.link && (
                            <div className="flex gap-4 mt-2">
                              <a
                                href={pub.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-green-600 dark:text-green-400 hover:underline text-sm sm:text-base flex items-center gap-1"
                              >
                                <ExternalLink className="w-3 h-3" />
                                {t("external_link")}
                              </a>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })
            ) : (
              // Show filtered publications
              <div className="mb-8">
                <h3 className="text-lg font-medium mb-4 text-green-600 dark:text-green-400">
                  {CATEGORY_TYPES.find((c) => c.key === filter)?.label} (
                  {filteredPublications().length})
                </h3>
                <div className="space-y-4">
                  {filteredPublications().map((pub) => (
                    <div key={pub.id} className="mb-4 sm:mb-6">
                      <p className="font-medium text-sm sm:text-base text-black dark:text-white">
                        {pub.title}
                      </p>
                      <p
                        className={`text-sm sm:text-base ${
                          theme === "dark" ? "text-gray-300" : "text-gray-700"
                        }`}
                      >
                        {pub.authors} ({pub.year}) - <em>{pub.journal}</em>
                      </p>
                      <p
                        className={`mt-1 text-sm sm:text-base ${
                          theme === "dark" ? "text-gray-300" : "text-gray-700"
                        }`}
                      >
                        {pub.shortDescription || pub.description}
                      </p>
                      <div
                        className={`flex flex-wrap gap-2 sm:gap-4 text-xs sm:text-sm mt-2 ${
                          theme === "dark" ? "text-gray-400" : "text-gray-600"
                        }`}
                      >
                        {pub.tags.map((tag: string, index: number) => (
                          <span key={`${tag}-${index}`}>{tag}</span>
                        ))}
                      </div>
                      {pub.link && (
                        <div className="flex gap-4 mt-2">
                          <a
                            href={pub.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-green-600 dark:text-green-400 hover:underline text-sm sm:text-base flex items-center gap-1"
                          >
                            <ExternalLink className="w-3 h-3" />
                            {t("external_link")}
                          </a>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Footer */}
          <footer className="mt-16 pt-8 border-t border-gray-200 dark:border-gray-700 text-center">
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              © {new Date().getFullYear()} Dr. Houda LECHHEB.{" "}
              {t("footer_rights")}
            </p>
          </footer>
        </div>
      </div>
    </>
  );
}
