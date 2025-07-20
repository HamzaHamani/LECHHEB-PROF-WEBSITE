import type { Metadata } from "next";
import { generatePageMetadata } from "../../lib/seo";

export const metadata: Metadata = generatePageMetadata(
  "publications",
  "Publications Scientifiques | Dr. Houda LECHHEB",
  "Publications scientifiques et articles de recherche du Dr. Houda LECHHEB. Articles dans des revues spécialisées nationales et internationales, ouvrages collectifs et communications académiques en économie.",
  [
    "publications scientifiques",
    "articles économie",
    "recherche académique",
    "revues spécialisées",
    "publications Houda LECHHEB",
    "articles scopus",
    "revues nationales",
    "articles internationaux indexés",
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
