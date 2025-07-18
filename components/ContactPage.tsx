"use client";

import type React from "react";

import { useState } from "react";
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
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData), // send the current form data
      });

      const data = await response.json();

      if (data.success) {
        alert(
          language === "fr"
            ? "Message envoyé avec succès!"
            : "Message sent successfully!"
        );
        setFormData({ name: "", email: "", subject: "", message: "" }); // reset form
      } else {
        alert(
          language === "fr"
            ? "Échec de l'envoi du message."
            : "Failed to send message."
        );
      }
    } catch (error) {
      alert(
        language === "fr"
          ? "Erreur lors de l'envoi du message."
          : "Error sending message."
      );
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

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
          <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">
                {t("contact_form_name")}
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className={`w-full px-3 sm:px-4 py-2 border rounded-lg text-sm sm:text-base ${
                  theme === "dark"
                    ? "bg-gray-800 border-gray-600 text-gray-200"
                    : "bg-white border-gray-300 text-gray-900"
                }`}
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                {t("contact_form_email")}
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className={`w-full px-3 sm:px-4 py-2 border rounded-lg text-sm sm:text-base ${
                  theme === "dark"
                    ? "bg-gray-800 border-gray-600 text-gray-200"
                    : "bg-white border-gray-300 text-gray-900"
                }`}
              />
            </div>
            <div>
              <label
                htmlFor="subject"
                className="block text-sm font-medium mb-2"
              >
                {t("contact_form_subject")}
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className={`w-full px-3 sm:px-4 py-2 border rounded-lg text-sm sm:text-base ${
                  theme === "dark"
                    ? "bg-gray-800 border-gray-600 text-gray-200"
                    : "bg-white border-gray-300 text-gray-900"
                }`}
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium mb-2"
              >
                {t("contact_form_message")}
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className={`w-full px-3 sm:px-4 py-2 border rounded-lg text-sm sm:text-base ${
                  theme === "dark"
                    ? "bg-gray-800 border-gray-600 text-gray-200"
                    : "bg-white border-gray-300 text-gray-900"
                }`}
              />
            </div>
            <button
              type="submit"
              className={`w-full flex items-center justify-center gap-2 px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-medium transition-colors text-sm sm:text-base ${
                theme === "dark"
                  ? "bg-green-700 text-white hover:bg-green-600"
                  : "bg-green-600 text-white hover:bg-green-700"
              }`}
            >
              <Send className="w-4 h-4" />
              {t("contact_form_send")}
            </button>
          </form>
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
