"use client"

import { ArrowLeft, Download, FileText, Eye } from "lucide-react"

interface ArticlePageProps {
  theme: string
  language: string
  t: (key: string) => string
  setCurrentPage: (page: string) => void
  article: {
    id: string
    title: string
    description: string
    tags: string[]
    type: "text" | "pdf"
    content?: string
    pdfUrl?: string
  } | null
}

export function ArticlePage({ theme, language, t, setCurrentPage, article }: ArticlePageProps) {
  if (!article) {
    return (
      <div className="text-center py-12">
        <p className={`text-lg ${theme === "dark" ? "text-gray-400" : "text-gray-600"}`}>
          {language === "fr" ? "Article non trouvé" : "Article not found"}
        </p>
        <button onClick={() => setCurrentPage("home")} className="mt-4 text-green-600 hover:underline">
          {t("back_to_home")}
        </button>
      </div>
    )
  }

  return (
    <>
      {/* Header */}
      <div className="mb-8">
        <button
          onClick={() => setCurrentPage("home")}
          className={`flex items-center gap-2 mb-6 text-green-600 hover:underline ${
            theme === "dark" ? "text-green-400" : "text-green-600"
          }`}
        >
          <ArrowLeft className="w-4 h-4" />
          {t("back_to_home")}
        </button>

        {/* Article Header Info */}
        <div
          className={`p-6 border rounded-lg mb-8 ${
            theme === "dark" ? "bg-gray-900 border-gray-700" : "bg-green-50 border-green-200"
          }`}
        >
          <h1 className="text-2xl font-semibold mb-3">{article.title}</h1>
          <p className={`mb-4 ${theme === "dark" ? "text-gray-300" : "text-gray-700"}`}>{article.description}</p>
          <div className="flex flex-wrap gap-2 mb-4">
            {article.tags.map((tag, index) => (
              <span
                key={index}
                className={`px-3 py-1 text-sm rounded-full ${
                  theme === "dark" ? "bg-green-800 text-green-200" : "bg-green-200 text-green-800"
                }`}
              >
                {tag}
              </span>
            ))}
          </div>

          {article.type === "pdf" && article.pdfUrl && (
            <div className="flex gap-4">
              <a
                href={article.pdfUrl}
                download
                className={`flex items-center gap-2 px-4 py-2 rounded-lg border transition-colors ${
                  theme === "dark"
                    ? "border-gray-600 text-gray-300 hover:bg-gray-800"
                    : "border-gray-300 text-gray-700 hover:bg-gray-50"
                }`}
              >
                <Download className="w-4 h-4" />
                {t("download_pdf")}
              </a>
            </div>
          )}
        </div>
      </div>

      {/* Content Sections */}
      <div className="grid gap-8">
        {article.type === "text" ? (
          /* Text Content Section */
          <div>
            <h2 className="text-xl font-medium mb-6 flex items-center gap-2">
              <FileText className="w-5 h-5 text-green-600" />
              {t("article_content")}
            </h2>
            <div
              className={`p-6 border rounded-lg min-h-[400px] ${
                theme === "dark" ? "bg-gray-900 border-gray-700" : "bg-white border-gray-300"
              }`}
            >
              {article.content ? (
                <div className="prose max-w-none">
                  <div dangerouslySetInnerHTML={{ __html: article.content.replace(/\n/g, "<br>") }} />
                </div>
              ) : (
                <div className={`text-center py-12 ${theme === "dark" ? "text-gray-400" : "text-gray-500"}`}>
                  <FileText className="w-12 h-12 mx-auto mb-4 opacity-50" />
                  <p className="text-lg mb-2">
                    {language === "fr" ? "Contenu de l'article à venir" : "Article content coming soon"}
                  </p>
                  <p className="text-sm">
                    {language === "fr"
                      ? "Le contenu de cet article sera ajouté prochainement."
                      : "The content for this article will be added soon."}
                  </p>
                </div>
              )}
            </div>
          </div>
        ) : (
          /* PDF Viewer Section */
          <div>
            <h2 className="text-xl font-medium mb-6 flex items-center gap-2">
              <Eye className="w-5 h-5 text-green-600" />
              {t("pdf_viewer")}
            </h2>
            <div
              className={`border rounded-lg overflow-hidden ${
                theme === "dark" ? "border-gray-700" : "border-gray-300"
              }`}
            >
              {article.pdfUrl ? (
                <iframe src={article.pdfUrl} className="w-full h-[800px]" title={article.title} />
              ) : (
                <div
                  className={`text-center py-12 ${theme === "dark" ? "text-gray-400 bg-gray-900" : "text-gray-500 bg-gray-50"}`}
                >
                  <Eye className="w-12 h-12 mx-auto mb-4 opacity-50" />
                  <p className="text-lg mb-2">{language === "fr" ? "PDF non disponible" : "PDF not available"}</p>
                  <p className="text-sm">
                    {language === "fr"
                      ? "Le fichier PDF sera disponible prochainement."
                      : "The PDF file will be available soon."}
                  </p>
                </div>
              )}
            </div>
          </div>
        )}
      </div>

      {/* Footer */}
      <footer
        className={`mt-12 pt-8 border-t text-center text-sm ${
          theme === "dark" ? "border-gray-700 text-gray-400" : "border-gray-300 text-gray-600"
        }`}
      >
        <p>© 2024 Dr. Jean Dupont. {t("footer_rights")}</p>
      </footer>
    </>
  )
}
