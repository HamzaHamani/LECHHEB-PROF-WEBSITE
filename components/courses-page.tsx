"use client"

import { ArrowLeft, BookOpen, Download, Play, FileText, Users, Clock } from "lucide-react"

interface CoursesPageProps {
  theme: string
  language: string
  t: (key: string) => string
  setCurrentPage: (page: string) => void
}

export function CoursesPage({ theme, language, t, setCurrentPage }: CoursesPageProps) {
  const courses = [
    {
      id: 1,
      title: language === "fr" ? "Intelligence Artificielle - Master 1" : "Artificial Intelligence - Master's 1",
      code: "INFO-M1-AI",
      semester: language === "fr" ? "Semestre 1" : "Semester 1",
      credits: 6,
      students: 45,
      description:
        language === "fr"
          ? "Introduction aux concepts fondamentaux de l'intelligence artificielle, algorithmes de recherche, représentation des connaissances et systèmes experts."
          : "Introduction to fundamental concepts of artificial intelligence, search algorithms, knowledge representation and expert systems.",
      topics:
        language === "fr"
          ? ["Algorithmes de recherche", "Logique propositionnelle", "Systèmes experts", "Planification"]
          : ["Search algorithms", "Propositional logic", "Expert systems", "Planning"],
      materials: [
        {
          type: "slides",
          name: language === "fr" ? "Cours 1: Introduction à l'IA" : "Lecture 1: Introduction to AI",
          url: "#",
        },
        {
          type: "video",
          name: language === "fr" ? "Vidéo: Algorithmes de recherche" : "Video: Search Algorithms",
          url: "#",
        },
        {
          type: "assignment",
          name: language === "fr" ? "TP 1: Implémentation A*" : "Lab 1: A* Implementation",
          url: "#",
        },
        { type: "document", name: language === "fr" ? "Syllabus du cours" : "Course Syllabus", url: "#" },
      ],
    },
    {
      id: 2,
      title: language === "fr" ? "Apprentissage Profond - Master 2" : "Deep Learning - Master's 2",
      code: "INFO-M2-DL",
      semester: language === "fr" ? "Semestre 1" : "Semester 1",
      credits: 8,
      students: 32,
      description:
        language === "fr"
          ? "Cours avancé sur les réseaux de neurones profonds, leur architecture, entraînement et applications dans divers domaines."
          : "Advanced course on deep neural networks, their architecture, training and applications in various domains.",
      topics:
        language === "fr"
          ? ["Réseaux de neurones", "Convolution", "RNN et LSTM", "Transformers", "Applications"]
          : ["Neural Networks", "Convolution", "RNN and LSTM", "Transformers", "Applications"],
      materials: [
        {
          type: "slides",
          name:
            language === "fr"
              ? "Cours 1: Fondements des réseaux de neurones"
              : "Lecture 1: Neural Network Fundamentals",
          url: "#",
        },
        { type: "video", name: language === "fr" ? "Vidéo: Rétropropagation" : "Video: Backpropagation", url: "#" },
        {
          type: "assignment",
          name: language === "fr" ? "Projet: Classification d'images" : "Project: Image Classification",
          url: "#",
        },
        { type: "document", name: language === "fr" ? "Ressources supplémentaires" : "Additional Resources", url: "#" },
      ],
    },
    {
      id: 3,
      title: language === "fr" ? "Éthique de l'IA - Master 2" : "AI Ethics - Master's 2",
      code: "INFO-M2-ETHICS",
      semester: language === "fr" ? "Semestre 2" : "Semester 2",
      credits: 4,
      students: 28,
      description:
        language === "fr"
          ? "Exploration des implications éthiques, sociales et légales du développement et de l'utilisation de l'intelligence artificielle."
          : "Exploration of ethical, social and legal implications of artificial intelligence development and use.",
      topics:
        language === "fr"
          ? ["Biais algorithmiques", "Transparence", "Responsabilité", "Gouvernance", "Impact social"]
          : ["Algorithmic bias", "Transparency", "Accountability", "Governance", "Social impact"],
      materials: [
        {
          type: "slides",
          name: language === "fr" ? "Cours 1: Introduction à l'éthique IA" : "Lecture 1: Introduction to AI Ethics",
          url: "#",
        },
        { type: "video", name: language === "fr" ? "Conférence: Biais dans l'IA" : "Conference: Bias in AI", url: "#" },
        {
          type: "assignment",
          name: language === "fr" ? "Étude de cas: Algorithmes de recrutement" : "Case Study: Recruitment Algorithms",
          url: "#",
        },
        { type: "document", name: language === "fr" ? "Lectures recommandées" : "Recommended Readings", url: "#" },
      ],
    },
  ]

  const getIconForMaterialType = (type: string) => {
    switch (type) {
      case "slides":
        return <FileText className="w-4 h-4" />
      case "video":
        return <Play className="w-4 h-4" />
      case "assignment":
        return <BookOpen className="w-4 h-4" />
      case "document":
        return <Download className="w-4 h-4" />
      default:
        return <FileText className="w-4 h-4" />
    }
  }

  return (
    <>
      {/* Header */}
      <div className="mb-8">
        <button
          onClick={() => setCurrentPage("home")}
          className={`flex items-center gap-2 mb-4 text-green-600 hover:underline ${
            theme === "dark" ? "text-green-400" : "text-green-600"
          }`}
        >
          <ArrowLeft className="w-4 h-4" />
          {t("back_to_home")}
        </button>
        <h1 className="text-3xl font-semibold mb-2">{t("courses_page_title")}</h1>
        <p className={`text-base ${theme === "dark" ? "text-gray-400" : "text-gray-600"}`}>
          {t("university")} - {language === "fr" ? "Année académique 2023-2024" : "Academic Year 2023-2024"}
        </p>
      </div>

      {/* Courses List */}
      <div className="space-y-8">
        {courses.map((course) => (
          <div
            key={course.id}
            className={`border rounded-lg overflow-hidden ${
              theme === "dark" ? "bg-gray-900 border-gray-700" : "bg-white border-gray-300"
            }`}
          >
            {/* Course Header */}
            <div
              className={`p-6 border-b ${
                theme === "dark" ? "border-gray-700 bg-gray-800" : "border-gray-200 bg-green-50"
              }`}
            >
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h2 className="text-xl font-semibold mb-2">{course.title}</h2>
                  <div className="flex flex-wrap gap-4 text-sm">
                    <span className={`flex items-center gap-1 ${theme === "dark" ? "text-gray-300" : "text-gray-600"}`}>
                      <BookOpen className="w-4 h-4" />
                      {course.code}
                    </span>
                    <span className={`flex items-center gap-1 ${theme === "dark" ? "text-gray-300" : "text-gray-600"}`}>
                      <Clock className="w-4 h-4" />
                      {course.semester}
                    </span>
                    <span className={`flex items-center gap-1 ${theme === "dark" ? "text-gray-300" : "text-gray-600"}`}>
                      <Users className="w-4 h-4" />
                      {course.students} {language === "fr" ? "étudiants" : "students"}
                    </span>
                  </div>
                </div>
                <div
                  className={`px-3 py-1 rounded-full text-sm font-medium ${
                    theme === "dark" ? "bg-green-800 text-green-200" : "bg-green-200 text-green-800"
                  }`}
                >
                  {course.credits} {language === "fr" ? "crédits" : "credits"}
                </div>
              </div>
              <p className={`mb-4 ${theme === "dark" ? "text-gray-300" : "text-gray-700"}`}>{course.description}</p>
              <div>
                <h4 className="font-medium mb-2">{language === "fr" ? "Sujets couverts:" : "Topics covered:"}</h4>
                <div className="flex flex-wrap gap-2">
                  {course.topics.map((topic, index) => (
                    <span
                      key={index}
                      className={`px-2 py-1 text-xs rounded ${
                        theme === "dark" ? "bg-gray-700 text-gray-300" : "bg-gray-200 text-gray-700"
                      }`}
                    >
                      {topic}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Course Materials */}
            <div className="p-6">
              <h3 className="text-lg font-medium mb-4 flex items-center gap-2">
                <Download className="w-5 h-5 text-green-600" />
                {t("course_materials")}
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                {course.materials.map((material, index) => (
                  <div
                    key={index}
                    className={`p-4 border rounded-lg hover:shadow-md transition-shadow ${
                      theme === "dark" ? "border-gray-700 hover:bg-gray-800" : "border-gray-200 hover:bg-gray-50"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className="text-green-600">{getIconForMaterialType(material.type)}</div>
                      <div className="flex-1">
                        <p className="font-medium">{material.name}</p>
                        <p className={`text-sm ${theme === "dark" ? "text-gray-400" : "text-gray-600"}`}>
                          {material.type === "slides" && (language === "fr" ? "Présentation" : "Slides")}
                          {material.type === "video" && (language === "fr" ? "Vidéo" : "Video")}
                          {material.type === "assignment" && (language === "fr" ? "Travail pratique" : "Assignment")}
                          {material.type === "document" && (language === "fr" ? "Document" : "Document")}
                        </p>
                      </div>
                      <button className="text-green-600 hover:text-green-700">
                        <Download className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
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
