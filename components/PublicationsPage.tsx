"use client";

import { ArrowLeft, ExternalLink } from "lucide-react";
import { useState } from "react";
import { publications } from "../data/publicationsData";
import { Separator } from "./ui/separator"; // Make sure this is your shadcn Separator

interface PublicationsPageProps {
  theme: string;
  language: string;
  t: (key: string) => string;
  setCurrentPage: (page: string) => void;
  setCurrentItem: (item: any) => void;
}

const getCurrentYear = () => new Date().getFullYear();

export function PublicationsPage({
  theme,
  language,
  t,
  setCurrentPage,
  setCurrentItem,
}: PublicationsPageProps) {
  const [filter, setFilter] = useState<
    "all" | "scopus" | "national" | "international"
  >("all");

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

  // Filter publications by categoryType
  const filteredPublications = (type: string) =>
    type === "all"
      ? publications
      : publications.filter(
          (pub) =>
            pub.categoryType ===
            CATEGORY_TYPES.find((c) => c.key === type)?.value
        );

  const renderPublicationGroup = (pubs: any[], title: string) => (
    <div className="mb-8" key={title}>
      <h3 className="text-lg font-medium mb-4 text-green-600">{title}</h3>
      <div className="space-y-4">
        {pubs.map((pub) => (
          <div key={pub.id} className="mb-4 sm:mb-6">
            <p className="font-medium text-sm sm:text-base">{pub.title}</p>
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
            <div className="flex gap-4 mt-2">
              {pub.link ? (
                <a
                  href={pub.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-600 hover:underline text-sm sm:text-base flex items-center gap-1"
                >
                  <ExternalLink className="w-3 h-3" />
                  {language === "fr" ? "Lien externe" : "External link"}
                </a>
              ) : (
                <span
                  className="text-gray-400 text-sm sm:text-base flex items-center gap-1 cursor-not-allowed select-none"
                  title={
                    language === "fr"
                      ? "Lien externe non disponible"
                      : "External link not available"
                  }
                >
                  <ExternalLink className="w-3 h-3" />
                  {language === "fr" ? "Lien externe" : "External link"}
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <>
      {/* Header */}
      <div className="mb-6 sm:mb-8">
        <div className="flex items-center gap-4 mb-4">
          <button
            onClick={() => setCurrentPage("home")}
            className={`flex items-center gap-2 text-green-600 hover:underline text-sm sm:text-base ${
              theme === "dark" ? "text-green-400" : "text-green-600"
            }`}
            aria-label={t("back_to_home")}
          >
            <ArrowLeft className="w-4 h-4" />
            {t("back_to_home")}
          </button>
          <span
            className={`text-sm ${
              theme === "dark" ? "text-gray-400" : "text-gray-600"
            }`}
          >
            | {t("research_title")}
          </span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-semibold mb-2">
          {t("research_title")}
        </h1>
        <p
          className={`text-sm sm:text-base ${
            theme === "dark" ? "text-gray-400" : "text-gray-600"
          }`}
        >
          {t("university")} -{" "}
          {language === "fr" ? "Toutes les publications" : "All publications"} (
          {publications.length})
        </p>
        {/* Filter Dropdown */}
        <div className="mt-6 flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4">
          <label
            className={`text-sm font-semibold ${
              theme === "dark" ? "text-green-300" : "text-green-700"
            }`}
          >
            <span className="inline-block mr-2 align-middle">
              <svg width="18" height="18" fill="none" viewBox="0 0 24 24">
                <path
                  stroke={theme === "dark" ? "#22c55e" : "#15803d"}
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M7 12h10M10 18h4"
                />
              </svg>
            </span>
            {language === "fr"
              ? "Filtrer par catégorie :"
              : "Filter by category:"}
          </label>
          <div className="relative">
            <select
              value={filter}
              onChange={(e) => setFilter(e.target.value as typeof filter)}
              className={`appearance-none border px-4 py-2 text-sm font-medium transition-colors duration-150
                ${
                  theme === "dark"
                    ? "bg-gray-900 text-green-200 border-green-700 focus:border-green-400"
                    : "bg-white text-green-900 border-green-600 focus:border-green-700"
                }
                shadow-sm focus:outline-none
                rounded-md
                `}
              style={{
                minWidth: 220,
                boxShadow:
                  theme === "dark"
                    ? "0 2px 8px rgba(34,197,94,0.08)"
                    : "0 2px 8px rgba(21,128,61,0.08)",
                fontFamily: "serif",
                letterSpacing: "0.01em",
              }}
            >
              <option value="all">
                {language === "fr" ? "Toutes" : "All"}
              </option>
              {CATEGORY_TYPES.map((cat) => (
                <option key={cat.key} value={cat.key}>
                  {cat.label}
                </option>
              ))}
            </select>
            <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-green-500">
              <svg width="18" height="18" fill="none" viewBox="0 0 24 24">
                <path
                  stroke={theme === "dark" ? "#22c55e" : "#15803d"}
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 9l6 6 6-6"
                />
              </svg>
            </span>
          </div>
        </div>
      </div>

      {/* Publications by Category */}
      <div className="space-y-8">
        {filter === "all"
          ? CATEGORY_TYPES.map((cat, idx) => {
              const pubs = publications.filter(
                (pub) => pub.categoryType === cat.value
              );
              if (pubs.length === 0) return null;
              return (
                <div key={cat.key}>
                  {idx !== 0 && <Separator className="my-6" />}
                  {renderPublicationGroup(pubs, cat.label)}
                </div>
              );
            })
          : renderPublicationGroup(
              filteredPublications(filter),
              CATEGORY_TYPES.find((c) => c.key === filter)?.label || ""
            )}
      </div>

      {/* Footer */}
      <footer
        className={`mt-8 sm:mt-12 pt-6 sm:pt-8 border-t text-center text-xs sm:text-sm ${
          theme === "dark"
            ? "border-gray-700 text-gray-400"
            : "border-gray-300 text-gray-600"
        }`}
      >
        <p>
          © {getCurrentYear()} Dr. Houda LECHHEB. {t("footer_rights")}
        </p>
      </footer>
    </>
  );
}
