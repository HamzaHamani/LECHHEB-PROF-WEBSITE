"use client";

import type React from "react";

import { ArrowLeft, Send, Mail, MapPin, Clock } from "lucide-react";

interface ContactPageProps {
  theme: string;
  language: string;
  t: (key: string) => string;
  setCurrentPage: (page: string) => void;
}

// Get current year for footer
const getCurrentYear = () => new Date().getFullYear();

export function ContactPage({
  theme,
  language,
  t,
  setCurrentPage,
}: ContactPageProps) {
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
            | {t("contact_page_title")}
          </span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-semibold mb-2">
          {t("contact_page_title")}
        </h1>
        <p
          className={`text-sm sm:text-base ${
            theme === "dark" ? "text-gray-400" : "text-gray-600"
          }`}
        >
          {t("university")} - {t("date")}
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-6 sm:gap-8">
        {/* Contact Information */}
        <div>
          <h2 className="text-lg sm:text-xl font-medium mb-4 sm:mb-6">
            {t("contact_title")}
          </h2>
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <Mail className="w-4 sm:w-5 h-4 sm:h-5 text-green-600 mt-1 flex-shrink-0" />
              <div>
                <p className="font-medium text-sm sm:text-base">{t("email")}</p>
                <p
                  className={`text-sm sm:text-base ${
                    theme === "dark" ? "text-gray-300" : "text-gray-600"
                  }`}
                >
                  houda.lechheb@uit.ac.ma
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <MapPin className="w-4 sm:w-5 h-4 sm:h-5 text-green-600 mt-1 flex-shrink-0" />
              <div>
                <p className="font-medium text-sm sm:text-base">
                  {t("office")}
                </p>
                <p
                  className={`text-sm sm:text-base ${
                    theme === "dark" ? "text-gray-300" : "text-gray-600"
                  }`}
                >
                  {language === "fr"
                    ? "Faculté des Sciences Juridiques, Économiques et Sociales, Université Ibn Tofail"
                    : "Faculty of Legal, Economic and Social Sciences, Ibn Tofail University"}
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <MapPin className="w-4 sm:w-5 h-4 sm:h-5 text-green-600 mt-1 flex-shrink-0" />
              <div>
                <p className="font-medium text-sm sm:text-base">
                  {t("address")}
                </p>
                <p
                  className={`text-sm sm:text-base ${
                    theme === "dark" ? "text-gray-300" : "text-gray-600"
                  }`}
                >
                  Rue 2 Villa Anna Cité El Oufir Aviation - RABAT
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Clock className="w-4 sm:w-5 h-4 sm:h-5 text-green-600 mt-1 flex-shrink-0" />
              <div>
                <p className="font-medium text-sm sm:text-base">Téléphone:</p>
                <p
                  className={`text-sm sm:text-base ${
                    theme === "dark" ? "text-gray-300" : "text-gray-600"
                  }`}
                >
                  +212 661 84 93 48
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div>
          <h2 className="text-lg sm:text-xl font-medium mb-4 sm:mb-6">
            {t("contact_form_title")}
          </h2>
          <div className="space-y-4 sm:space-y-6">
            <div>
              <p
                className={`text-sm sm:text-base mb-4 ${
                  theme === "dark" ? "text-gray-300" : "text-gray-600"
                }`}
              >
                {t("contact_intro_text")}
              </p>
              <button
                onClick={() =>
                  window.open("YOUR_GOOGLE_FORM_LINK_HERE", "_blank")
                }
                className={`w-full flex items-center justify-center gap-2 px-4 sm:px-6 py-3 sm:py-4 rounded-lg font-medium transition-colors text-sm sm:text-base ${
                  theme === "dark"
                    ? "bg-green-700 text-white hover:bg-green-600"
                    : "bg-green-600 text-white hover:bg-green-700"
                }`}
                aria-label={t("contact_button_text")}
              >
                <Send className="w-4 h-4" />
                {t("contact_button_text")}
              </button>
            </div>
          </div>
        </div>
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
