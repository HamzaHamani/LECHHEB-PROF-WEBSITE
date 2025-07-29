import { generatePageMetadata } from "../../lib/seo";

export const metadata = generatePageMetadata(
  "publications",
  "Publications Scientifiques - Dr. Houda LECHHEB | Économie",
  "Découvrez les publications de Dr. Houda LECHHEB : articles, chapitres, études sur l'économie, la santé et les politiques publiques.",
  [
    "Les pandémies entre exigences de santé publiques et contraintes économiques, 'La vie à l’ère du CORONAVIRUS 'COVID-19' ?'",
    "Les effets macroéconomiques du choc fiscal au Maroc : Une analyse DSGE",
    "Économie informelle et mobilisation fiscale au Maroc : Les effets modérateurs de la pression fiscale et de la corruption",
    "Sustainable Agriculture and Islamic Finance: Cultivating Prosperity and Values",
    "Awqaf-led green finance: a technical know-how",
    "La Sensibilisation à l'entrepreneuriat : Une lecture théorique",
    "Impact Assessment of RAMed Medical Health Insurance on Access to Healthcare Using Instrumental Approach",
    "COVID-19 au Maroc : situation sanitaro-épidemiologique et actions de l'État",
    "Territorial attractiveness, trade liberalization, and pollution: evidence from Morocco between 1975 and 2015",
    "PPT à travers une revue compréhensive de la littérature : approche historique, conceptuelle et théorique",
    "L'impact du parrainage de la CGEM comme acteur de la Diplomatie économique marocaine sur les investissements en Afrique : une analyse empirique",
    "Investissements directs étrangers et pollution au Maroc: analyse asymétrique via le modèle NARDL",
    "Évaluation d'impact de l'accès aux microcrédits sur la pauvreté au Maroc : Analyse par la méthode de PSM et de l'IPTW",
    "Effect of Moroccan Health Insurance on Individual’s Healthcare Utilization and Expenditures: A Hicket Model",
    "Economic Growth, Poverty and Income Inequality: What Implications for Lower and Middle Income Countries in the Era of Globalization",
    "The Determinants of Poverty in Moroccan Rural Area: Analysis by the Microeconomic Approach",
    "How Management Remains Expanding Its Theoretical Roots To Evolve Serenely",
    "Understanding The Whys And The Wherefores Of Managerial Innovation In Morocco",
    "Sectoral water footprint dynamics: An input–output structural decomposition analysis for Morocco",
    "The Appropriation of the Agile Approach in Public Sector: Modeling the Achievement of Good Governance",
    "Co-construction of a New Management Approach in a Public Research Funding Agency through the Contextualization of Agile Thinking",
    "A DSGE model approach to examining the impact of the Russian–Ukrainian War and oil shocks on the Moroccan economy",
    "Dépenses et utilisation de soins de santé: Une revue de littérature théorique et empirique",
    "Evaluation d’Impact : Revue de Littérature",
    "Agile: A Digital Start for Yet Another Retroversion of Management Foresight Its Past, Through Factors of Its Emergence, Its Present Reflected by Its Principals: A Manner to Apprehend Its Future",
    "Health Insurance for the Poor: Impact Assessment of Morocco's Remed Plan on Healthcare Consumption Using a Household Panel Survey Data",
    "When the Pandemic Makes Us Aware of the Importance of Agility",
    "The Future of Economic Growth Rate in the Modern Economy: Impact of Global Warming, Resources and Energy Constraints",
    "Modeling Cryptocurrency Market Dynamics Using Sentiment Analysis and Shannon Entropy",
    "La Politique Budgétaire Face à la Crise Sanitaire : Une Simulation Utilisant un Modèle Hybride DSGE SIR",

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
    "Morocco university economics",
  ]
);

export default function PublicationsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div>{children}</div>;
}
