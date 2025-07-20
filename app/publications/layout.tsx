import type { Metadata } from "next";
import { generatePageMetadata } from "../../lib/seo";

export const metadata: Metadata = generatePageMetadata(
  "publications",
  "Publications Scientifiques - Dr. Houda LECHHEB | Articles de Recherche Économique",
  "Découvrez les publications scientifiques de Dr. Houda LECHHEB, Professeure d'Économie à l'Université Ibn Tofail. Plus de 40 articles de recherche dans des revues internationales indexées Scopus, revues nationales spécialisées RSN, et chapitres d'ouvrages. Spécialités: évaluation d'impact des politiques publiques, économie de la santé, développement économique, modélisation DSGE.",
  [
    // French academic keywords
    "publications Houda LECHHEB",
    "articles scientifiques économie",
    "recherche économique Maroc",
    "publications Scopus économie",
    "articles RSN économie Maroc",
    "revues spécialisées économie",
    "économie santé publications",
    "politiques publiques recherche",
    "développement économique articles",
    "modélisation DSGE",
    "choc fiscal Maroc",
    "évaluation impact",
    
    // English academic keywords  
    "Houda LECHHEB publications",
    "economics research papers",
    "Scopus indexed articles economics",
    "health economics research",
    "public policy evaluation papers",
    "development economics articles",
    "Morocco economics research",
    "Ibn Tofail University publications",
    "academic publications economics",
    "scientific articles economics",
    
    // Academic databases
    "Google Scholar",
    "ResearchGate",
    "ORCID",
    "Scopus",
    "Web of Science",
    
    // Institution keywords
    "Université Ibn Tofail recherche",
    "Ibn Tofail University research",
    "Kénitra université publications",
    "Morocco university economics"
  ]
);

// This file only exports metadata
export default function PublicationsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div>{children}</div>;
}
