"use client";
import { useState, useEffect } from "react";
import { Moon, Sun, Menu, X } from "lucide-react";
import Link from "next/link";
import { HomePage } from "../components/HomePage";
import { ContactPage } from "../components/ContactPage";
import { PublicationsPage } from "../components/PublicationsPage";
import { generateStructuredData } from "../lib/seo";

type Language = "fr" | "en";
type Theme = "light" | "dark";
type Page = "home" | "contact" | "publications";

interface Translations {
  fr: {
    [key: string]: string;
  };
  en: {
    [key: string]: string;
  };
}

export const translations: Translations = {
  en: {
    title: "Dr. Houda LECHHEB",
    subtitle: "Professor of Higher Education",
    university: "Ibn Tofail University",
    date: "December 2024",
    nav_home: "Home",
    nav_about: "About",
    nav_teaching: "Pedagogical Responsibilities",
    nav_production: "Scientific Production",
    nav_events: "Academic Events",
    nav_research: "Scientific Publications",
    nav_contact: "Contact",
    resume_title: "Resume",
    resume_text:
      "Professor of Higher Education at Ibn Tofail University, I lead the Economics, Finance, Management and Innovation laboratory, specializing in economic sciences and public policies. I am an expert in public policy impact evaluation, Harvard graduate, and a member of the experts of the CNRST (National Center for Scientific and Technical Research) in the fields of health economics, finance, behavioral and development economics. An active member of several professional associations — AMPP (Moroccan Association of Public Policies), AMSE (Moroccan Association of Economic Sciences), and MEEA (Middle East Economic Association) — I have over 12 years of experience in the banking sector and more than 14 years of commitment to scientific research and higher education.",
    toc_title: "Table of Contents",
    toc_expertise: "Areas of Expertise",
    toc_teaching: "Pedagogical Responsibilities",
    toc_production: "Scientific Production",
    toc_research: "Scientific Publications",
    toc_events: "Past Events",
    toc_contact: "Contact Information",
    expertise_title: "1. Areas of Expertise",
    expertise_ai: "Public Policy Impact Evaluation",
    expertise_nlp: "Health Economics",
    expertise_rl: "Development Economics",
    expertise_ethics: "Monetary and Financial Economics",
    expertise_vision: "Management and Quality",
    teaching_title: "2. Pedagogical Responsibilities",
    teaching_intro:
      "Academic and pedagogical responsibilities at Ibn Tofail University (2015-2024).",
    teaching_desc:
      "Program coordination, participation in institutional councils, module responsibility, and doctoral supervision.",
    production_title: "3. Scientific Production",
    production_intro: "Educational books and major scientific contributions.",
    research_title: "4. Scientific Publications",
    research_intro:
      "Publications in indexed national and international journals.",
    recent_publications: "Recent Publications",
    events_title: "5. Scientific Events",
    contact_title: "6. Contact Information",
    email: "Email:",
    office: "Office:",
    address: "Address:",
    office_hours: "Office Hours:",
    view_article: "View Article | PDF",
    footer_rights: "All rights reserved.",
    footer_updated: "Last updated: Privacy Policy",
    contact_page_title: "Contact Form",
    back_to_home: "← Back to Home",
    contact_form_name: "Full Name",
    contact_form_email: "Email Address",
    contact_form_subject: "Subject",
    contact_form_message: "Message",
    contact_form_send: "Send Message",
    article_content: "Article Content",
    pdf_viewer: "PDF Viewer",
    course_materials: "Course Materials",
    download_pdf: "Download PDF",
    view_course: "View Course",
    view_responsibility: "View Details",
    view_production: "View Production",
    menu: "Menu",
    close_menu: "Close menu",
    show_all: "Show All",
    show_less: "Show Less",
    google_scholar: "Google Scholar",
    orcid: "ORCID",
    contact_intro_text:
      "If you have any questions or would like to collaborate with me, please feel free to contact me through the form below:",
    contact_button_text: "Contact Me",
    contact_form_title: "Contact Form",
  },
  fr: {
    title: "Dr. Houda LECHHEB",
    subtitle: "Professeure d'Enseignement Supérieur",
    university: "Université Ibn Tofail",
    date: "Décembre 2024",
    nav_home: "Accueil",
    nav_about: "À Propos",
    nav_teaching: "Responsabilités Pédagogiques",
    nav_production: "Production Scientifique",
    nav_events: "Évènements Académiques",
    nav_research: "Publications Scientifiques",
    nav_contact: "Contact",
    resume_title: "Résumé",
    resume_text:
      "Professeure d’Enseignement Supérieur à l’Université Ibn Tofail, je dirige le laboratoire Economics, Finance, Management and Innovation, avec une spécialisation en sciences économiques et en politiques publiques. Je suis experte en évaluation de l’impact des politiques publiques, diplômée de Harvard, et membre des experts de la  CNRST (Centre National pour la recherche Scientifique et Technique ) dans les domaines de l’économie de la santé la finance, l’économie comportementale et du développement économique. Membre active de plusieurs associations professionnelles — AMPP (Association Marocaine des Politiques Publiques), AMSE (Association Marocaine des Sciences Économiques) et MEEA (Middle East Economic Association)  je cumule plus de 12 ans d’expérience dans le secteur bancaire et plus de 14 ans d’engagement dans  la recherche scientifique et l’enseignement supérieur.",
    toc_title: "Table des matières",
    toc_expertise: "Domaines d'expertise",
    toc_teaching: "Responsabilités Pédagogiques",
    toc_production: "Production Scientifique",
    toc_research: "Publications Scientifiques",
    toc_events: "Évènements passés",
    toc_contact: "Informations de contact",
    expertise_title: "1. Domaines d'expertise",
    expertise_ai: "Évaluation d'Impact des Politiques Publiques",
    expertise_nlp: "Économie de la Santé",
    expertise_rl: "Économie du Développement",
    expertise_ethics: "Économie Monétaire et Financière",
    expertise_vision: "Management et Qualité",
    teaching_title: "2. Responsabilités Pédagogiques",
    teaching_intro:
      "Responsabilités académiques et pédagogiques à l'Université Ibn Tofail (2015-2024).",
    teaching_desc:
      "Coordination de programmes, participation aux conseils d'établissement, responsabilité de modules et encadrement doctoral.",
    production_title: "3. Production Scientifique",
    production_intro:
      "Ouvrages pédagogiques et contributions scientifiques majeures.",
    research_title: "4. Publications Scientifiques",
    research_intro:
      "Publications dans des revues nationales et internationales indexées.",
    recent_publications: "Publications récentes",
    events_title: "5. Événements scientifiques",
    contact_title: "6. Informations de contact",
    email: "Email:",
    office: "Bureau:",
    address: "Adresse:",
    office_hours: "Heures de permanence:",
    view_article: "Voir l'article | PDF",
    footer_rights: "Tous droits réservés.",
    footer_updated: "Dernière mise à jour: Politique de confidentialité",
    contact_page_title: "Formulaire de Contact",
    back_to_home: "← Retour à l'accueil",
    contact_form_name: "Nom complet",
    contact_form_email: "Adresse email",
    contact_form_subject: "Sujet",
    contact_form_message: "Message",
    contact_form_send: "Envoyer le message",
    article_content: "Contenu de l'article",
    pdf_viewer: "Visualiseur PDF",
    course_materials: "Matériel de cours",
    download_pdf: "Télécharger PDF",
    view_course: "Voir le cours",
    view_responsibility: "Voir les détails",
    view_production: "Voir la production",
    menu: "Menu",
    close_menu: "Fermer le menu",
    show_all: "Voir tout",
    show_less: "Voir moins",
    google_scholar: "Google Scholar",
    orcid: "ORCID",
    contact_intro_text:
      "Si vous avez des questions ou souhaitez collaborer avec moi, n'hésitez pas à me contacter via le formulaire ci-dessous :",
    contact_button_text: "Contactez-moi",
    contact_form_title: "Formulaire de Contact",
  },
};

export default function AcademicWebsite() {
  // Initialize with default values to avoid hydration mismatch
  const [language, setLanguage] = useState<Language>("fr");
  const [theme, setTheme] = useState<Theme>("light");
  const [currentPage, setCurrentPage] = useState<Page>("home");
  const [currentItem, setCurrentItem] = useState<any>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  // Load preferences from localStorage after hydration
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") as Theme;
    const savedLanguage = localStorage.getItem("language") as Language;

    if (savedTheme) {
      setTheme(savedTheme);
    }
    if (savedLanguage) {
      setLanguage(savedLanguage);
    }

    setIsLoaded(true);
  }, []);

  // Apply theme to document when theme changes
  useEffect(() => {
    if (isLoaded) {
      document.documentElement.classList.toggle("dark", theme === "dark");
      localStorage.setItem("theme", theme);
    }
  }, [theme, isLoaded]);

  // Save language preference
  useEffect(() => {
    if (isLoaded) {
      localStorage.setItem("language", language);
    }
  }, [language, isLoaded]);
  useEffect(() => {
    localStorage.setItem("language", language);
  }, [language]);

  const t = (key: string) => translations[language][key] || key;

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const toggleLanguage = () => {
    setLanguage(language === "fr" ? "en" : "fr");
  };

  const paperTexture =
    theme === "dark"
      ? "radial-gradient(circle at 20% 50%, rgba(120, 119, 198, 0.03) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(255, 255, 255, 0.02) 0%, transparent 50%), radial-gradient(circle at 40% 80%, rgba(120, 119, 198, 0.02) 0%, transparent 50%)"
      : "radial-gradient(circle at 20% 50%, rgba(120, 119, 198, 0.05) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(0, 0, 0, 0.02) 0%, transparent 50%), radial-gradient(circle at 40% 80%, rgba(120, 119, 198, 0.03) 0%, transparent 50%)";

  const renderPage = () => {
    switch (currentPage) {
      case "contact":
        return (
          <ContactPage
            theme={theme}
            language={language}
            t={t}
            setCurrentPage={(page: string) => setCurrentPage(page as Page)}
          />
        );
      case "publications":
        return (
          <PublicationsPage
            theme={theme}
            language={language}
            t={t}
            setCurrentPage={setCurrentPage}
            setCurrentItem={setCurrentItem}
          />
        );
      default:
        return (
          <HomePage
            theme={theme}
            language={language}
            t={t}
            setCurrentPage={setCurrentPage}
            setCurrentItem={setCurrentItem}
          />
        );
    }
  };

  const structuredData = generateStructuredData("home");

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />
      <div
        className={`min-h-screen transition-colors duration-300 ${
          theme === "dark" ? "text-gray-100" : "text-black"
        }`}
        style={{
          fontFamily:
            '"Times New Roman", "Liberation Serif", "Nimbus Roman No9 L", serif',
          fontWeight: 400,
          backgroundColor: theme === "dark" ? "#111111" : "#ffffff",
          backgroundImage: paperTexture,
        }}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-12">
          {/* Mobile Menu Button */}
          <div className="fixed top-4 left-4 md:hidden z-50">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`w-10 h-10 rounded-full border transition-all duration-300 shadow-lg ${
                theme === "dark"
                  ? "bg-gray-800 border-gray-600 text-gray-200 hover:bg-gray-700 hover:shadow-xl"
                  : "bg-white border-gray-300 text-gray-700 hover:bg-gray-50 hover:shadow-xl"
              }`}
              aria-label={mobileMenuOpen ? t("close_menu") : t("menu")}
            >
              <div className="flex items-center justify-center">
                {mobileMenuOpen ? (
                  <X className="w-4 h-4" />
                ) : (
                  <Menu className="w-4 h-4" />
                )}
              </div>
            </button>
          </div>

          {/* Theme and Language Toggle */}
          <div className="fixed top-4 right-4 flex gap-2 z-50">
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full border transition-all duration-300 shadow-lg ${
                theme === "dark"
                  ? "bg-gray-800 border-gray-600 text-gray-200 hover:bg-gray-700 hover:shadow-xl"
                  : "bg-white border-gray-300 text-gray-700 hover:bg-gray-50 hover:shadow-xl"
              }`}
              title={
                theme === "light"
                  ? "Switch to dark mode"
                  : "Switch to light mode"
              }
              aria-label={
                theme === "light"
                  ? "Switch to dark mode"
                  : "Switch to light mode"
              }
            >
              <div className="flex items-center justify-center">
                {theme === "light" ? (
                  <Moon className="w-3 h-3 sm:w-4 sm:h-4" />
                ) : (
                  <Sun className="w-3 h-3 sm:w-4 sm:h-4" />
                )}
              </div>
            </button>

            {/* Language Toggle */}
            <button
              onClick={toggleLanguage}
              className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full border transition-all duration-300 shadow-lg ${
                theme === "dark"
                  ? "bg-gray-800 border-gray-600 text-gray-200 hover:bg-gray-700 hover:shadow-xl"
                  : "bg-white border-gray-300 text-gray-700 hover:bg-gray-50 hover:shadow-xl"
              }`}
              title={`Switch to ${language === "fr" ? "English" : "French"}`}
              aria-label={`Switch to ${
                language === "fr" ? "English" : "French"
              }`}
            >
              <div className="flex items-center justify-center">
                <span className="text-xs font-bold">
                  {language.toUpperCase()}
                </span>
              </div>
            </button>
          </div>

          {/* Mobile Menu Overlay */}
          {mobileMenuOpen && (
            <div
              className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
              onClick={() => setMobileMenuOpen(false)}
            />
          )}

          {/* Mobile Menu */}
          <div
            className={`fixed top-0 left-0 h-full w-64 transform transition-transform duration-300 ease-in-out z-40 md:hidden ${
              mobileMenuOpen ? "translate-x-0" : "-translate-x-full"
            } ${theme === "dark" ? "bg-gray-900" : "bg-white"} shadow-lg`}
          >
            <div className="p-6 pt-16">
              <nav className="space-y-4">
                <Link
                  href="#accueil"
                  className="block text-green-600 hover:underline font-normal py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {t("nav_home")}
                </Link>
                <Link
                  href="#apropos"
                  className="block text-green-600 hover:underline font-normal py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {t("nav_about")}
                </Link>
                <Link
                  href="#responsabilites-pedagogiques"
                  className="block text-green-600 hover:underline font-normal py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {t("nav_teaching")}
                </Link>
                <Link
                  href="#production-scientifique"
                  className="block text-green-600 hover:underline font-normal py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {t("nav_production")}
                </Link>
                <Link
                  href="#publications-scientifiques"
                  className="block text-green-600 hover:underline font-normal py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {t("nav_research")}
                </Link>
                <Link
                  href="#evenements"
                  className="block text-green-600 hover:underline font-normal py-2 "
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {t("nav_events")}
                </Link>
                <button
                  onClick={() => {
                    setCurrentPage("contact");
                    setMobileMenuOpen(false);
                  }}
                  className="block text-green-600 hover:underline font-normal py-2 text-left w-full"
                >
                  {t("nav_contact")}
                </button>
              </nav>
            </div>
          </div>

          {renderPage()}
        </div>
      </div>
    </>
  );
}
