"use client";

import { useState } from "react";
import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { publications } from "../data/publicationsData";
import { responsibilities } from "../data/responsibilitiesData";
import { productions } from "../data/productionsData";
import { pastEvents } from "../data/eventsData";

interface HomePageProps {
  theme: string;
  language: string;
  t: (key: string) => string;
  setCurrentPage: React.Dispatch<React.SetStateAction<any>>;
  setCurrentItem: (item: any) => void;
}

// Get current year for footer
const getCurrentYear = () => new Date().getFullYear();

export function HomePage({
  theme,
  language,
  t,
  setCurrentPage,
  setCurrentItem,
}: HomePageProps) {
  const [showAllResearch, setShowAllResearch] = useState(false);
  const [showAllEvents, setShowAllEvents] = useState(false);
  const [showAllResponsibilities, setShowAllResponsibilities] = useState(false);

  const displayedResearch = showAllResearch
    ? publications
    : publications.slice(0, 5);
  const displayedEvents = showAllEvents ? pastEvents : pastEvents.slice(0, 5);
  const displayedResponsibilities = showAllResponsibilities
    ? responsibilities
    : responsibilities.slice(0, 5);

  return (
    <main role="main" aria-label="Page d'accueil Dr. Houda LECHHEB">
      {/* Header */}
      <header className="text-center mb-6 sm:mb-8">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-semibold mb-2">
          {t("title")}
        </h1>
        <h2 className="text-base sm:text-lg mb-1">{t("subtitle")}</h2>
        <p className="text-base sm:text-lg mb-1">{t("university")}</p>
        <p
          className={`text-sm sm:text-base mb-4 sm:mb-6 ${
            theme === "dark" ? "text-gray-400" : "text-gray-600"
          }`}
        >
          {t("date")}
        </p>

        {/* Academic Links */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-4 sm:mb-6">
          <a
            href="https://scholar.google.com/citations?user=aja0o2YAAAAJ&hl=fr"
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center gap-1 sm:gap-2 px-2 sm:px-3 py-1.5 sm:py-2 rounded-lg border transition-colors text-xs sm:text-sm ${
              theme === "dark"
                ? "border-gray-600 text-gray-300 hover:bg-gray-800"
                : "border-gray-300 text-gray-700 hover:bg-gray-50"
            }`}
          >
            <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4" />
            {t("google_scholar")}
          </a>
          <a
            href="https://orcid.org/0009-0009-1159-2543"
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center gap-1 sm:gap-2 px-2 sm:px-3 py-1.5 sm:py-2 rounded-lg border transition-colors text-xs sm:text-sm ${
              theme === "dark"
                ? "border-gray-600 text-gray-300 hover:bg-gray-800"
                : "border-gray-300 text-gray-700 hover:bg-gray-50"
            }`}
          >
            <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4" />
            {t("orcid")}
          </a>
          <a
            href="https://www.youtube.com/@lechhebhouda"
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center gap-1 sm:gap-2 px-2 sm:px-3 py-1.5 sm:py-2 rounded-lg border transition-colors text-xs sm:text-sm ${
              theme === "dark"
                ? "border-gray-600 text-gray-300 hover:bg-gray-800"
                : "border-gray-300 text-gray-700 hover:bg-gray-50"
            }`}
          >
            <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4" />
            YouTube
          </a>
          <a
            href="https://www.youtube.com/@lechhebhouda"
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center gap-1 sm:gap-2 px-2 sm:px-3 py-1.5 sm:py-2 rounded-lg border transition-colors text-xs sm:text-sm ${
              theme === "dark"
                ? "border-gray-600 text-gray-300 hover:bg-gray-800"
                : "border-gray-300 text-gray-700 hover:bg-gray-50"
            }`}
          >
            <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4" />
            LinkedIn
          </a>
        </div>

        {/* Desktop Navigation */}
        <nav
          className="hidden md:block"
          role="navigation"
          aria-label="Main navigation"
        >
          <div className="flex flex-wrap justify-center gap-3 lg:gap-4 mb-2">
            <Link
              href="#accueil"
              className="text-green-600 hover:underline font-normal text-sm lg:text-base"
            >
              {t("nav_home")}
            </Link>
            <Link
              href="#apropos"
              className="text-green-600 hover:underline font-normal text-sm lg:text-base"
            >
              {t("nav_about")}
            </Link>
            <Link
              href="#responsabilites-pedagogiques"
              className="text-green-600 hover:underline font-normal text-sm lg:text-base"
            >
              {t("nav_teaching")}
            </Link>
            <Link
              href="#production-scientifique"
              className="text-green-600 hover:underline font-normal text-sm lg:text-base"
            >
              {t("nav_production")}
            </Link>
          </div>
          <div className="flex flex-wrap justify-center gap-3 lg:gap-4">
            <Link
              href="#publications-scientifiques"
              className="text-green-600 hover:underline font-normal text-sm lg:text-base"
            >
              {t("nav_research")}
            </Link>
            <Link
              href="#evenements"
              className="text-green-600 hover:underline font-normal text-sm lg:text-base"
            >
              {t("nav_events")}
            </Link>
            <button
              onClick={() => setCurrentPage("contact")}
              className="text-green-600 hover:underline font-normal text-sm lg:text-base"
            >
              {t("nav_contact")}
            </button>
          </div>
        </nav>
      </header>

      {/* Resume Section */}
      <section id="apropos" className="mb-8 sm:mb-12">
        <div className="flex flex-col  sm:flex-row gap-4 sm:gap-8 items-center ">
          <div className="flex-shrink-0">
            <img
              src="/professor-photo.jpg"
              alt="Dr. Houda LECHHEB"
              title="Dr. Houda LECHHEB portrait"
              className="w-24 h-32 sm:w-32 sm:h-40 object-cover border-2 border-gray-400 rounded mx-auto"
            />
          </div>
          <div className="flex-1 text-center sm:text-left">
            <h2 className="text-lg sm:text-xl font-medium mb-3 sm:mb-4">
              {t("resume_title")}
            </h2>
            <p className="text-sm sm:text-base text-justify leading-relaxed font-light">
              {t("resume_text")}
            </p>
          </div>
        </div>
      </section>

      {/* Table of Contents */}
      <nav
        className="mb-6 sm:mb-8"
        role="navigation"
        aria-label="Table of contents"
      >
        <h2 className="text-lg sm:text-xl font-medium mb-3 sm:mb-4">
          {t("toc_title")}
        </h2>
        <div className="text-green-600 space-y-1 text-sm sm:text-base">
          <div>
            <Link href="#domaines" className="hover:underline">
              {t("toc_expertise")}
            </Link>
          </div>
          <div>
            <Link
              href="#responsabilites-pedagogiques"
              className="hover:underline"
            >
              {t("toc_teaching")}
            </Link>
          </div>
          <div>
            <Link href="#production-scientifique" className="hover:underline">
              {t("toc_production")}
            </Link>
          </div>
          <div>
            <Link
              href="#publications-scientifiques"
              className="hover:underline"
            >
              {t("toc_research")}
            </Link>
          </div>
          <div>
            <Link href="#evenements-passes" className="hover:underline">
              {t("toc_events")}
            </Link>
          </div>
          <div>
            <Link href="#contact-info" className="hover:underline">
              {t("toc_contact")}
            </Link>
          </div>
        </div>
      </nav>

      {/* 1. Domaines d'expertise */}
      <section
        id="domaines"
        aria-labelledby="expertise-title"
        className="mb-6 sm:mb-8"
      >
        <h2
          id="expertise-title"
          className="text-lg sm:text-xl font-medium mb-3 sm:mb-4"
        >
          {t("expertise_title")}
        </h2>
        <div className="space-y-2 text-sm sm:text-base">
          <p>{t("expertise_ai")}</p>
          <p>{t("expertise_nlp")}</p>
          <p>{t("expertise_rl")}</p>
          <p>{t("expertise_ethics")}</p>
          <p>{t("expertise_vision")}</p>
        </div>
      </section>

      {/* Section Separator */}
      <div
        className={`border-t my-8 sm:my-12 ${
          theme === "dark" ? "border-gray-700" : "border-gray-300"
        }`}
      />

      {/* 2. Responsabilités Pédagogiques */}
      <section id="responsabilites-pedagogiques" className="mb-6 sm:mb-8">
        <h2 className="text-lg sm:text-xl font-medium mb-3 sm:mb-4">
          {t("teaching_title")}
        </h2>

        {[...responsibilities]
          .sort((a, b) => {
            // Helper to extract the latest end year from a period string
            // Handles multiple periods like "2015 - 2017 | 2020 - 2023"
            const getLatestEndYear = (period: string) => {
              const periods = period.split("|").map((p) => p.trim());
              let maxYear = 0;
              for (const p of periods) {
                const match = p.match(/(\d{4})\s*-\s*(\d{4}|présent|present)/i);
                if (!match) continue;
                let endYear;
                if (match[2].toLowerCase().startsWith("pr")) {
                  endYear = 9999;
                } else {
                  endYear = parseInt(match[2], 10);
                }
                if (endYear > maxYear) maxYear = endYear;
              }
              return maxYear;
            };
            return getLatestEndYear(b.period) - getLatestEndYear(a.period);
          })
          .slice(0, showAllResponsibilities ? responsibilities.length : 5)
          .map((resp) => (
            <div key={resp.id}>
              <div className="mb-4 sm:mb-6">
                <p className="font-medium text-sm sm:text-base">{resp.title}</p>
                <p
                  className={`text-xs sm:text-sm ${
                    theme === "dark" ? "text-gray-400" : "text-gray-600"
                  }`}
                >
                  {resp.period}
                </p>
                <p
                  className={`text-sm sm:text-base mt-1 ${
                    theme === "dark" ? "text-gray-400" : "text-gray-600"
                  }`}
                >
                  {resp.description}
                </p>
              </div>
            </div>
          ))}

        {responsibilities.length > 5 && (
          <div className="text-center mt-6">
            <button
              onClick={() =>
                setShowAllResponsibilities(!showAllResponsibilities)
              }
              className="text-green-600 hover:underline font-medium text-sm sm:text-base"
            >
              {showAllResponsibilities
                ? `${t("show_less")} (5 ${
                    language === "fr" ? "responsabilités" : "responsibilities"
                  })`
                : `${t("show_all")} (${responsibilities.length} ${
                    language === "fr" ? "responsabilités" : "responsibilities"
                  })`}
            </button>
          </div>
        )}
      </section>

      {/* Section Separator */}
      <div
        className={`border-t my-8 sm:my-12 ${
          theme === "dark" ? "border-gray-700" : "border-gray-300"
        }`}
      />

      {/* 3. Production Scientifique */}
      <section id="production-scientifique" className="mb-6 sm:mb-8">
        <h2 className="text-lg sm:text-xl font-medium mb-3 sm:mb-4">
          {t("production_title")}
        </h2>

        {productions.map((prod) => (
          <div key={prod.id} className="mb-4 sm:mb-6">
            <p className="font-medium text-sm sm:text-base">{prod.title}</p>
            <p
              className={`text-sm sm:text-base ${
                theme === "dark" ? "text-gray-300" : "text-gray-700"
              }`}
            >
              {prod.type_prod} ({prod.year})
            </p>
            <p
              className={`mt-1 text-sm sm:text-base ${
                theme === "dark" ? "text-gray-300" : "text-gray-700"
              }`}
            >
              {prod.description}
            </p>
            {prod.isbn && (
              <p
                className={`text-xs sm:text-sm mt-1 ${
                  theme === "dark" ? "text-gray-400" : "text-gray-600"
                }`}
              >
                ISBN/DOI: {prod.isbn}
              </p>
            )}
            <div className="mt-2">
              {prod.link ? (
                <a
                  href={prod.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-600 hover:underline text-sm sm:text-base flex items-center gap-1"
                >
                  <ExternalLink className="w-3 h-3" />
                  {language === "fr"
                    ? "Accéder à la publication"
                    : "Access publication"}
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
                  {language === "fr"
                    ? "Accéder à la publication"
                    : "Access publication"}
                </span>
              )}
            </div>
          </div>
        ))}
      </section>

      {/* Section Separator */}
      <div
        className={`border-t my-8 sm:my-12 ${
          theme === "dark" ? "border-gray-700" : "border-gray-300"
        }`}
      />

      {/* 4. Publications Scientifiques */}
      <section id="publications-scientifiques" className="mb-6 sm:mb-8">
        <h2 className="text-lg sm:text-xl font-medium mb-3 sm:mb-4">
          {t("research_title")}
        </h2>
        <p className="mb-4 sm:mb-6 text-sm sm:text-base">
          {t("research_intro")}
        </p>

        {displayedResearch.map((pub) => (
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
              {pub.tags.map((tag, index) => (
                <span key={index}>{tag}</span>
              ))}
            </div>
            <div className="flex gap-4 mt-2">
              {/* <button
                onClick={() => {
                  setCurrentItem(pub);
                  setCurrentPage("item");
                }}
                className="text-green-600 hover:underline text-sm sm:text-base"
              >
                {t("view_article")}
              </button> */}

              {pub.link ? (
                <a
                  href={pub.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-600 hover:underline text-sm sm:text-base flex items-center gap-1"
                >
                  <ExternalLink className="w-3 h-3" />
                  {language === "fr"
                    ? "Accéder à la publication"
                    : "Access publication"}
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

        {publications.length > 5 && (
          <div className="text-center mt-6">
            <Link
              href="/publications"
              className="text-green-600 hover:underline font-medium text-sm sm:text-base"
            >
              {t("show_all")} ({publications.length}{" "}
              {language === "fr" ? "publications" : "publications"})
            </Link>
          </div>
        )}
      </section>

      {/* Section Separator */}
      <div
        className={`border-t my-8 sm:my-12 ${
          theme === "dark" ? "border-gray-700" : "border-gray-300"
        }`}
      />

      {/* 5. Évènements passés */}
      <section id="evenements-passes" className="mb-6 sm:mb-8">
        <h2 className="text-lg sm:text-xl font-medium mb-3 sm:mb-4">
          {t("events_title")}
        </h2>

        {displayedEvents.map((event) => (
          <div key={event.id} className="mb-4 sm:mb-6">
            <p className="font-medium text-sm sm:text-base">{event.title}</p>
            <p
              className={`text-sm sm:text-base ${
                theme === "dark" ? "text-gray-300" : "text-gray-700"
              }`}
            >
              {event.date}, {event.location}
            </p>
            <p
              className={`mt-1 text-sm sm:text-base ${
                theme === "dark" ? "text-gray-400" : "text-gray-600"
              }`}
            >
              {event.description}
            </p>
            <p
              className={`text-xs sm:text-sm mt-1 font-medium ${
                theme === "dark" ? "text-green-400" : "text-green-600"
              }`}
            >
              {event.role}
            </p>
          </div>
        ))}

        {pastEvents.length > 5 && (
          <div className="text-center mt-6">
            <button
              onClick={() => setShowAllEvents(!showAllEvents)}
              className="text-green-600 hover:underline font-medium text-sm sm:text-base"
            >
              {showAllEvents ? t("show_less") : t("show_all")} (
              {pastEvents.length} {language === "fr" ? "évènements" : "events"})
            </button>
          </div>
        )}
      </section>

      {/* Section Separator */}
      <div
        className={`border-t my-8 sm:my-12 ${
          theme === "dark" ? "border-gray-700" : "border-gray-300"
        }`}
      />

      {/* 6. Informations de contact */}
      <section id="contact-info" className="mb-6 sm:mb-8">
        <h2 className="text-lg sm:text-xl font-medium mb-3 sm:mb-4">
          {t("contact_title")}
        </h2>

        <div className="space-y-2 text-sm sm:text-base">
          <p>
            <strong>{t("email")}</strong> houda.lechheb@uit.ac.ma
          </p>
          <p>
            <strong>{t("office")}</strong>{" "}
            {language === "fr"
              ? "Faculté des Sciences Juridiques, Économiques et Sociales, Université Ibn Tofail"
              : "Faculty of Legal, Economic and Social Sciences, Ibn Tofail University"}
          </p>
          <p>
            <strong>{t("address")}</strong> Rue 2 Villa Anna C ité El Oufir
            Aviation - RABAT
          </p>
          <p>
            <strong>Téléphone:</strong> +212 661 84 93 48
          </p>
        </div>

        <div className="text-green-600 mt-4">
          <button
            onClick={() => setCurrentPage("contact")}
            className="hover:underline text-sm sm:text-base"
          >
            {t("contact_page_title")} →
          </button>
        </div>
      </section>

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
        <p>{t("footer_updated")}</p>
      </footer>
    </main>
  );
}
