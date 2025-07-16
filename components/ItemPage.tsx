"use client";

import { ArrowLeft, FileText, Download, ExternalLink } from "lucide-react";

interface ItemPageProps {
  theme: string;
  language: string;
  t: (key: string) => string;
  setCurrentPage: React.Dispatch<React.SetStateAction<any>>;
  item: any;
}

// Get current year for footer
const getCurrentYear = () => new Date().getFullYear();

export function ItemPage({
  theme,
  language,
  t,
  setCurrentPage,
  item,
}: ItemPageProps) {
  if (!item) {
    return (
      <div className="text-center py-12">
        <p
          className={`text-base sm:text-lg ${
            theme === "dark" ? "text-gray-400" : "text-gray-600"
          }`}
        >
          {language === "fr" ? "Élément non trouvé" : "Item not found"}
        </p>
        <button
          onClick={() => setCurrentPage("home")}
          className="mt-4 text-green-600 hover:underline text-sm sm:text-base"
        >
          {t("back_to_home")}
        </button>
      </div>
    );
  }

  return (
    <>
      {/* Header */}
      <div className="mb-6 sm:mb-8">
        <div className="flex items-center gap-4 mb-4 sm:mb-6">
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
            |{" "}
            {language === "fr"
              ? "Détails de la publication"
              : "Publication details"}
          </span>
        </div>

        {/* Item Header Info */}
        <div
          className="p-4 sm:p-6 border rounded-lg mb-6 sm:mb-8"
          style={{
            backgroundColor: theme === "dark" ? "#333333" : "#f9fafb",
            borderColor: theme === "dark" ? "#4b5563" : "#d1d5db",
          }}
        >
          <h1 className="text-xl sm:text-2xl font-semibold mb-3">
            {item.title}
          </h1>

          {/* Publication specific info */}
          {item.type === "publication" && (
            <>
              <p
                className={`mb-2 text-sm sm:text-base ${
                  theme === "dark" ? "text-gray-300" : "text-gray-700"
                }`}
              >
                {item.authors} ({item.year})
              </p>
              <p
                className={`mb-4 italic text-sm sm:text-base ${
                  theme === "dark" ? "text-gray-400" : "text-gray-600"
                }`}
              >
                {item.journal}
              </p>
              {item.issn && (
                <p
                  className={`mb-2 text-xs sm:text-sm ${
                    theme === "dark" ? "text-gray-400" : "text-gray-600"
                  }`}
                >
                  ISSN: {item.issn}
                </p>
              )}
              {item.category && (
                <p
                  className={`mb-4 text-xs sm:text-sm ${
                    theme === "dark" ? "text-gray-400" : "text-gray-600"
                  }`}
                >
                  Catégorie:{" "}
                  {item.category === "scopus"
                    ? "Scopus"
                    : item.category === "national"
                    ? "Nationale"
                    : "Internationale"}
                </p>
              )}
              <div className="flex flex-wrap gap-2 mb-4">
                {item.tags.map((tag: string, index: number) => (
                  <span
                    key={index}
                    className={`px-2 sm:px-3 py-1 text-xs sm:text-sm rounded-full ${
                      theme === "dark"
                        ? "bg-green-800 text-green-200"
                        : "bg-green-200 text-green-800"
                    }`}
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex flex-wrap gap-4">
                {item.hasPdf && item.pdfUrl && (
                  <a
                    href={item.pdfUrl}
                    download
                    className={`flex items-center gap-2 px-3 sm:px-4 py-2 rounded-lg border transition-colors text-sm sm:text-base ${
                      theme === "dark"
                        ? "border-gray-600 text-gray-300 hover:bg-gray-800"
                        : "border-gray-300 text-gray-700 hover:bg-gray-50"
                    }`}
                    aria-label={t("download_pdf")}
                  >
                    <Download className="w-4 h-4" />
                    {t("download_pdf")}
                  </a>
                )}
                {item.link && (
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-2 px-3 sm:px-4 py-2 rounded-lg border transition-colors text-sm sm:text-base ${
                      theme === "dark"
                        ? "border-gray-600 text-gray-300 hover:bg-gray-800"
                        : "border-gray-300 text-gray-700 hover:bg-gray-50"
                    }`}
                  >
                    <ExternalLink className="w-4 h-4" />
                    {language === "fr"
                      ? "Accéder à la publication"
                      : "Access publication"}
                  </a>
                )}
              </div>
            </>
          )}

          {/* Responsibility specific info */}
          {item.type === "responsibility" && (
            <>
              <p
                className={`mb-2 text-sm sm:text-base ${
                  theme === "dark" ? "text-gray-400" : "text-gray-600"
                }`}
              >
                {item.period}
              </p>
              <p
                className={`mb-4 text-sm sm:text-base ${
                  theme === "dark" ? "text-gray-300" : "text-gray-700"
                }`}
              >
                {item.description}
              </p>
              <div className="space-y-2">
                <h3 className="font-medium text-sm sm:text-base">
                  {language === "fr"
                    ? "Détails des responsabilités:"
                    : "Responsibility details:"}
                </h3>
                <ul className="list-disc list-inside space-y-1">
                  {item.details.map((detail: string, index: number) => (
                    <li
                      key={index}
                      className={`text-sm sm:text-base ${
                        theme === "dark" ? "text-gray-300" : "text-gray-700"
                      }`}
                    >
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            </>
          )}

          {/* Production specific info */}
          {item.type === "production" && (
            <>
              <p
                className={`mb-2 text-sm sm:text-base ${
                  theme === "dark" ? "text-gray-400" : "text-gray-600"
                }`}
              >
                {item.type_prod} ({item.year})
              </p>
              <p
                className={`mb-4 text-sm sm:text-base ${
                  theme === "dark" ? "text-gray-300" : "text-gray-700"
                }`}
              >
                {item.description}
              </p>
              {item.isbn && (
                <p
                  className={`text-xs sm:text-sm ${
                    theme === "dark" ? "text-gray-400" : "text-gray-600"
                  }`}
                >
                  ISBN/DOI: {item.isbn}
                </p>
              )}
            </>
          )}
        </div>
      </div>

      {/* Content Section */}
      <main className="grid gap-6 sm:gap-8">
        <div>
          <h2 className="text-xl font-medium mb-6 flex items-center gap-2">
            <FileText className="w-5 h-5 text-green-600" />
            {language === "fr" ? "Résumé détaillé" : "Detailed Abstract"}
          </h2>
          <div
            className="p-6 border rounded-lg min-h-[400px]"
            style={{
              backgroundColor: theme === "dark" ? "#333333" : "#ffffff",
              borderColor: theme === "dark" ? "#4b5563" : "#d1d5db",
            }}
          >
            {item.description ? (
              <div className="prose max-w-none">
                <p
                  className={`text-base leading-relaxed ${
                    theme === "dark" ? "text-gray-300" : "text-gray-700"
                  }`}
                >
                  {item.description}
                </p>
                {item.type === "publication" && (
                  <div className="mt-6 space-y-4">
                    <h3
                      className={`text-lg font-medium ${
                        theme === "dark" ? "text-gray-200" : "text-gray-800"
                      }`}
                    >
                      {language === "fr"
                        ? "Informations supplémentaires"
                        : "Additional Information"}
                    </h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <h4
                          className={`font-medium mb-2 ${
                            theme === "dark" ? "text-gray-300" : "text-gray-700"
                          }`}
                        >
                          {language === "fr" ? "Méthodologie" : "Methodology"}
                        </h4>
                        <p
                          className={`text-sm ${
                            theme === "dark" ? "text-gray-400" : "text-gray-600"
                          }`}
                        >
                          {language === "fr"
                            ? "Cette recherche utilise des méthodes quantitatives et qualitatives appropriées au domaine d'étude."
                            : "This research employs quantitative and qualitative methods appropriate to the field of study."}
                        </p>
                      </div>
                      <div>
                        <h4
                          className={`font-medium mb-2 ${
                            theme === "dark" ? "text-gray-300" : "text-gray-700"
                          }`}
                        >
                          {language === "fr" ? "Contribution" : "Contribution"}
                        </h4>
                        <p
                          className={`text-sm ${
                            theme === "dark" ? "text-gray-400" : "text-gray-600"
                          }`}
                        >
                          {language === "fr"
                            ? "Cette étude contribue significativement à l'avancement des connaissances dans le domaine."
                            : "This study contributes significantly to the advancement of knowledge in the field."}
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <div
                className={`text-center py-8 sm:py-12 ${
                  theme === "dark" ? "text-gray-400" : "text-gray-500"
                }`}
              >
                <FileText className="w-8 sm:w-12 h-8 sm:h-12 mx-auto mb-4 opacity-50" />
                <p className="text-base sm:text-lg mb-2">
                  {language === "fr"
                    ? "Contenu détaillé à venir"
                    : "Detailed content coming soon"}
                </p>
                <p className="text-xs sm:text-sm">
                  {language === "fr"
                    ? "Le contenu détaillé sera ajouté prochainement."
                    : "Detailed content will be added soon."}
                </p>
              </div>
            )}
          </div>
        </div>
      </main>

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
