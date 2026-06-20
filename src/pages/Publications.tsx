import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ExternalLink, Download } from 'lucide-react';
import { useEffect, useState } from "react";
import * as bibtexParse from "bibtex-parse-js";
import { publicUrl } from "@/lib/utils";

/** Maps citation key → public-relative PDF path */
const PDF_MAP: Record<string, string> = {
  // 2026
  "DBLP:journals/jss/EspositoLMACVLT26":       "papers/date_unavailable/1-s2.0-S0164121225002766-main.pdf",
  "DBLP:journals/software/VaidhyanathanT26":    "papers/2026/Agentic_AI.pdf",
  "DBLP:journals/software/Vaidhyanathan26":     "papers/2026/From_AI.pdf",
  "DBLP:journals/software/SinghalBVMHKKC26":   "papers/2026/LEAF.pdf",
  "DBLP:journals/software/Vaidhyanathan26a":    "papers/2026/The_Agentic_Shift_A.pdf",
  "DBLP:journals/corr/abs-2601-06456":          "papers/2026/Architecting_AgentOps_Needs_CHANGE.pdf",
  "DBLP:journals/corr/abs-2601-11926":          "papers/2026/Harmonica_A.pdf",
  "DBLP:journals/corr/abs-2601-14132":          "papers/2026/Toward_self-coding_information_systems.pdf",
  "DBLP:journals/corr/abs-2602-03632":          "papers/2026/CALM.pdf",
  "DBLP:journals/corr/abs-2602-04445":          "papers/2026/AgenticAKM_Enroute_to_Agentic_Architecture_Knowledge_Management.pdf",
  "DBLP:journals/corr/abs-2509-10099":          "papers/2025/Generating_Energy-Efficient_Code_via_Large-Language_Models_-_Where_are_we_now.pdf",
  "DBLP:journals/corr/abs-2512-04702":          "papers/2025/POLARIS.pdf",
  "DBLP:journals/corr/abs-2512-09543":          "papers/2025/SWEnergy_An_Empirical_Study_on_Energy_Efficiency_in_Agentic_Issue_Resolution_Fra.pdf",
  "DBLP:journals/corr/abs-2512-12791":          "papers/2025/Beyond_Task_Completion_An_Assessment_Framework_for_Evaluating_Agentic_AI.pdf",
  // 2025
  "DBLP:journals/access/KandalaGWASCVCBKH25":   "papers/2025/Engineering_End-to-End_Remote_Labs_Using_IoT-Based_Retrofitting.pdf",
  "DBLP:conf/cain/MaddireddyMSV25":             "papers/2025/LoCoML_A.pdf",
  "DBLP:conf/cain/SridharGJV25":                "papers/2025/Approach_Towards_Semi-Automated_Certification_of_Low_Criticality_ML-Enabled_Airb.pdf",
  "DBLP:conf/cain/ParthasarathyVDKKAAKMDV25":   "papers/2025/Engineering_LLM.pdf",
  "DBLP:conf/ease/KavathekarDKV25":             "papers/2025/Small_Models_Big_Tasks_An_Exploratory_Empirical_Study_on_Small_Language_Models_f.pdf",
  "DBLP:conf/ecsa/BhattBRV25":                  "papers/2025/HarmonE_A.pdf",
  "DBLP:conf/icsa/ArunTV25":                    "papers/2025/LLMs_for_Generation_of_Architectural_Components_An_Exploratory_Empirical_Study_i.pdf",
  "DBLP:conf/icsa/Bhatt0VBGTS25":              "papers/2025/Architecting_Digital_Twins_for_Intelligent_Transportation_Systems.pdf",
  "DBLP:conf/icsa/AdnanMSVSS25":               "papers/2025/Leveraging_LLMs_for_Dynamic_IoT_Systems_Generation_through_Mixed-Initiative_Inte.pdf",
  "DBLP:conf/icsa/MatathammalGLHG25":           "papers/2025/EdgeMLBalancer_A.pdf",
  "DBLP:journals/corr/abs-2504-08207":          "papers/2025/DRAFT-ing_Architectural_Design_Decisions_using_LLMs.pdf",
  "DBLP:journals/corr/abs-2506-01774":          "papers/2025/Greening_AI-enabled_Systems_with_Software_Engineering_A.pdf",
  "DBLP:journals/corr/abs-2508-06243":          "papers/2025/SCAR.pdf",
  "DBLP:journals/corr/abs-2510-02810":          "papers/2025/Dissecting_Transformers_A.pdf",
  "DBLP:journals/corr/abs-2511-23009":          "papers/2025/APDT.pdf",
  // 2024
  "DBLP:conf/icsa/PranavasriFPMVVG24":          "papers/2024/Exploratory_Study_of_oneM2M-Based_Interoperability_Architectures_for_IoT_A.pdf",
  "DBLP:conf/icsa/DharVV24":                    "papers/2024/Can_LLMs_Generate_Architectural_Design_Decisions_-_An_Exploratory_Empirical_Stud.pdf",
  "DBLP:conf/icsa/DharVV24a":                   "papers/2024/Leveraging_Generative_AI.pdf",
  "DBLP:conf/icsa/DonakantiJKV24":              "papers/2024/Reimagining_Self-Adaptation_in_the_Age_of_Large_Language_Models.pdf",
  "DBLP:conf/icsa/BhattAKV24":                  "papers/2024/Towards_Architecting_Sustainable_MLOps_A.pdf",
  "DBLP:conf/icsa/TedlaKV24":                   "papers/2024/EcoMLS_A.pdf",
  "DBLP:conf/icsa/KanigollaPVGV24":             "papers/2024/Architecting_Digital_Twin_for_Smart_City_Systems_A.pdf",
  "DBLP:conf/icsoc/JainSPQV24":                 "papers/2024/POSEIDON.pdf",
  "DBLP:conf/sac/VaidhyanathanCF24":            "papers/date_unavailable/3605098.3635942.pdf",
  "DBLP:conf/seams/MardaKV24":                  "papers/2024/SWITCH.pdf",
  // 2023
  "DBLP:journals/pacmhci/AlipourMVK23":         "papers/date_unavailable/3593227.pdf",
  "DBLP:conf/comped/KarreVR23":                 "papers/date_unavailable/3617650.3624936.pdf",
  "DBLP:conf/kbse/KulkarniMV23":                "papers/2023/Towards_Self-Adaptive_Machine_Learning-Enabled_Systems_Through_QoS-Aware_Model_S.pdf",
  "DBLP:conf/um/AlipourMVK23":                  "papers/date_unavailable/3565472.3595614.pdf",
  "DBLP:conf/wf-iot/GurejaACVC23":              "papers/2023/Software_Architecture_for_Multi-User_Multiplexing_to_Enhance_Scalability_in_IoT-.pdf",
  "DBLP:conf/wf-iot/PranavasriFMPVVVG23":       "papers/2023/Scalable_and_Interoperable_Distributed_Architecture_for_IoT_in_Smart_Cities.pdf",
  "DBLP:journals/dagstuhl-reports/LewisMOVW023":"papers/date_unavailable/DagRep.13.7.166.pdf",
  // 2022
  "DBLP:journals/software/VaidhyanathanCM22":   "papers/2022/Agile4MLS_-_Leveraging_Agile_Practices_for_Developing_Machine_Learning-Enabled_S.pdf",
  "DBLP:conf/sac/MennaMV22":                    "papers/date_unavailable/3477314.3507146.pdf",
  // 2021
  "DBLP:conf/ecsa/AbughazalaMMV21":             "papers/2021/Architecture_Design_for_Human-Driven_Systems.pdf",
  "DBLP:conf/icse-wain/MucciniV21":             "papers/2021/Software_Architecture_for_ML-based_Systems_What_Exists_and_What_Lies_Ahead.pdf",
  "DBLP:conf/iot/SanctisMV21":                  "papers/date_unavailable/3494322.3494329.pdf",
  "DBLP:journals/corr/abs-2109-07900":          "papers/2021/A_Service_for_Supporting_Digital_and_Immersive_Cultural_Experiences.pdf",
  "DBLP:journals/corr/abs-2109-10073":          "papers/2021/Architecture_Design_for_Human-Driven_Systems.pdf",
  "DBLP:journals/corr/abs-2103-07950":          "papers/2021/Software_Architecture_for_ML-based_Systems_What_Exists_and_What_Lies_Ahead.pdf",
  // 2020
  "DBLP:conf/icsa/CamaraMV20":                  "papers/2020/Quantitative_Verification-Aided_Machine_Learning_A.pdf",
  "DBLP:conf/icsa/SanctisMV20":                 "papers/2020/Data-driven_Adaptation_in_Microservice-based_IoT_Architectures.pdf",
  "DBLP:conf/smartcomp/MucciniV20":             "papers/2020/Leveraging_Machine_Learning_Techniques_for_Architecting_Self-Adaptive_IoT_System.pdf",
  // 2019
  "DBLP:conf/ecsa/MucciniV19":                  "papers/date_unavailable/3344948.3344962.pdf",
  "DBLP:conf/icsa/MucciniV19":                  "papers/2019/A_Machine_Learning-Driven_Approach_for_Proactive_Decision_Making_in_Adaptive_Arc.pdf",
};

interface Publication {
  id: string;
  authors: string[];
  title: string;
  venue: string;
  volume?: string;
  year: number;
  pages?: string;
  doi: string;
  publisher?: string;
  isbn?: string;
}

interface YearlyPublications {
  year: number;
  papers: Publication[];
}

function parseAuthors(rawAuthorString: string): string[] {
  return rawAuthorString
    .split(" and ")
    .map(a => a.trim())
    .filter(a => a.length > 0);
}

function decodeLatex(str: string): string {
  if (!str) return "";

  // Normalize double backslashes (e.g., \\')
  str = str.replace(/\\\\/g, "\\");

  // Extensive LaTeX accent map
  const accentMap: Record<string, string> = {
    // Umlaut / Diaeresis
    '\\"a': "ä", '\\"e': "ë", '\\"i': "ï", '\\"o': "ö", '\\"u': "ü",
    '\\"A': "Ä", '\\"E': "Ë", '\\"I': "Ï", '\\"O': "Ö", '\\"U': "Ü",

    // Acute
    "\\'a": "á", "\\'e": "é", "\\'i": "í", "\\'o": "ó", "\\'u": "ú",
    "\\'A": "Á", "\\'E": "É", "\\'I": "Í", "\\'O": "Ó", "\\'U": "Ú",
    "\\'y": "ý", "\\'Y": "Ý",

    // Grave
    "\\`a": "à", "\\`e": "è", "\\`i": "ì", "\\`o": "ò", "\\`u": "ù",
    "\\`A": "À", "\\`E": "È", "\\`I": "Ì", "\\`O": "Ò", "\\`U": "Ù",

    // Circumflex
    "\\^a": "â", "\\^e": "ê", "\\^i": "î", "\\^o": "ô", "\\^u": "û",
    "\\^A": "Â", "\\^E": "Ê", "\\^I": "Î", "\\^O": "Ô", "\\^U": "Û",

    // Tilde
    "\\~a": "ã", "\\~n": "ñ", "\\~o": "õ",
    "\\~A": "Ã", "\\~N": "Ñ", "\\~O": "Õ",

    // Cedilla
    "\\c{c}": "ç", "\\c{C}": "Ç",

    // Caron / Hacek
    "\\v{c}": "č", "\\v{s}": "š", "\\v{z}": "ž",
    "\\v{C}": "Č", "\\v{S}": "Š", "\\v{Z}": "Ž",

    // Ring
    "\\r{a}": "å", "\\r{A}": "Å",

    // Dot
    "\\.z": "ż", "\\.Z": "Ż",

    // Ligatures and special letters
    "{\\ae}": "æ", "{\\AE}": "Æ",
    "{\\oe}": "œ", "{\\OE}": "Œ",
    "{\\o}": "ø", "{\\O}": "Ø",
    "\\ss": "ß",
    // "\\l": "ł", "\\L": "Ł",

    // Common macros
    "\\&": "&",
    "\\%": "%",
  };

  for (const [latex, char] of Object.entries(accentMap)) {
    str = str.replace(new RegExp(latex, "g"), char);
  }

  // Handle nested forms like {\'{a}} or {\~{n}}
  str = str.replace(/\{\\['`"^~vckr]\{([a-zA-Z])\}\}/g, (_, l) => l.normalize("NFC"));

  // Remove math macros like \(\mathscr{H}\)
  str = str.replace(/\\\([^\)]*\\\)/g, "");
  str = str.replace(/\\\[[^\]]*\\\]/g, "");
  str = str.replace(/\\mathscr\{?([A-Za-z])\}?/g, "$1");
  str = str.replace(/\\mathbb\{?([A-Za-z])\}?/g, "$1");

  // Remove text styling
  str = str.replace(/\\text(it|bf)\{([^}]*)\}/g, "$2");

  // Remove remaining LaTeX commands (safe fallback)
  str = str.replace(/\\[a-zA-Z]+\{([^}]*)\}/g, "$1");
  str = str.replace(/\\[a-zA-Z]+/g, "");

  // Remove unneeded braces
  str = str.replace(/[{}]/g, "");

  // Normalize whitespace
  str = str.replace(/\s+/g, " ").trim();

  return str;
}

/**
 * Venue overrides for papers whose DBLP entry only has "CoRR" or an empty venue,
 * but have actually been accepted at a conference/journal.
 * Keyed by citation key from dblp.bib.
 */
const VENUE_OVERRIDES: Record<string, { venue: string; year?: number }> = {
  "DBLP:journals/corr/abs-2601-06456": { venue: "CAIN 2026", year: 2026 },
  "DBLP:journals/corr/abs-2601-11926": { venue: "SEAMS 2026 Artifact Track", year: 2026 },
  "DBLP:journals/corr/abs-2601-14132": { venue: 'ICSE 2026 Track "Software Architecture BoF"', year: 2026 },
  "DBLP:journals/corr/abs-2602-03632": { venue: "SEAMS 2026", year: 2026 },
  "DBLP:journals/corr/abs-2602-04445": { venue: "AGENT 2026", year: 2026 },
  "DBLP:journals/corr/abs-2501-17028": { venue: "CAIN 2025", year: 2025 },
  "DBLP:journals/corr/abs-2503-13310": { venue: "Journal of Systems and Software (Preprint)", year: 2025 },
  "DBLP:journals/corr/abs-2504-08207": { venue: "Journal of Systems and Software (Preprint)", year: 2025 },
  "DBLP:journals/corr/abs-2505-13693": { venue: "ECSA 2025", year: 2025 },
  "DBLP:journals/corr/abs-2506-01774": { venue: 'The "Greening AI with Software Engineering" workshop (CECAM/Lorentz Center)', year: 2025 },
  "DBLP:journals/corr/abs-2509-10099": { venue: "ICSE 2026 (Rio de Janeiro)", year: 2026 },
  "DBLP:journals/corr/abs-2512-04702": { venue: "SEAMS 2026", year: 2026 },
  "DBLP:journals/corr/abs-2512-09543": { venue: "AGENT 2026 (ICSE 2026 workshop)", year: 2026 },
  "DBLP:journals/corr/abs-2512-12791": { venue: "AGENT 2026 (ICSE 2026 workshop)", year: 2026 },
};

/** Title fixups for known typos in DBLP BibTeX data. */
const TITLE_FIXUPS: Record<string, string> = {
  "DBLP:journals/corr/abs-2601-14132": "Toward Self-coding Information Systems",
};

function parseBibContent(bibContent: string): YearlyPublications[] {
  const parsed = bibtexParse.toJSON(bibContent);
  const map: Record<number, Publication[]> = {};
  // Map: normalizedTitle -> { pub, isPreprint, yearKey }
  const seenTitles = new Map<
    string,
    { pub: Publication; isPreprint: boolean; yearKey: number }
  >();

  for (const entry of parsed) {
    const fields = entry.entryTags;
    let year = parseInt(fields.year, 10);
    if (isNaN(year)) continue;

    const citationKey: string = entry.citationKey;
    let rawTitle = decodeLatex(fields.title || "");
    if (TITLE_FIXUPS[citationKey]) rawTitle = TITLE_FIXUPS[citationKey];

    const normalizedTitle = rawTitle.toLowerCase().replace(/[^a-z0-9]/g, "");
    if (!normalizedTitle) continue;

    const rawVenue = fields.journal || fields.booktitle || "";
    const isCoRR = rawVenue.trim() === "CoRR" || rawVenue.trim() === "";
    const override = VENUE_OVERRIDES[citationKey];

    let venue: string;
    if (override) {
      venue = override.venue;
      if (override.year) year = override.year;
    } else if (isCoRR) {
      venue = "arXiv preprint";
    } else {
      venue = decodeLatex(rawVenue);
    }

    const publication: Publication = {
      id: citationKey,
      authors: parseAuthors(decodeLatex(fields.author || "")),
      title: rawTitle,
      venue,
      volume: isCoRR && !override ? "" : decodeLatex(fields.volume || ""),
      year,
      pages: decodeLatex(fields.pages || ""),
      doi: decodeLatex(fields.doi || ""),
      publisher: decodeLatex(fields.publisher || ""),
      isbn: decodeLatex(fields.isbn || ""),
    };

    // Fuzzy key: strip version suffixes for better dedup
    const fuzzyKey = normalizedTitle.replace(/version[0-9]+/g, "");
    const isPreprint = isCoRR && !override;

    const existing = seenTitles.get(fuzzyKey);
    if (existing) {
      // Prefer the non-preprint version
      if (existing.isPreprint && !isPreprint) {
        const bucket = map[existing.yearKey];
        if (bucket) {
          const idx = bucket.indexOf(existing.pub);
          if (idx !== -1) bucket.splice(idx, 1);
        }
      } else {
        continue;
      }
    }

    seenTitles.set(fuzzyKey, { pub: publication, isPreprint, yearKey: year });
    if (!map[year]) map[year] = [];
    map[year].push(publication);
  }

  return Object.entries(map)
    .map(([year, papers]) => ({
      year: Number(year),
      papers,
    }))
    .sort((a, b) => b.year - a.year);
}

const conferences = [
  { name: 'ICSA 2024', logo: '/images/publications/icsa24.jpeg' },
  { name: 'ICSA 2025', logo: '/images/publications/icsa25.jpg' },
  { name: 'ICSE 2024', logo: '/images/publications/icse24.png' },
  { name: 'ICSE 2026', logo: '/images/publications/icse2026_banner.png' },
  { name: 'SEAMS', logo: '/images/publications/seams24.png' },
  { name: 'Software', logo: '/images/publications/software-logo-black-700x223.png' },
  { name: 'WF-IoT', logo: '/images/publications/wfiot.png' },
];

const Publications = () => {
  const [publicationsByYear, setPublicationsByYear] = useState<YearlyPublications[]>([]);

  useEffect(() => {
    const loadBibtex = async () => {
      try {
        const res = await fetch(`${import.meta.env.BASE_URL}dblp.bib`); // served from /public/dblp.bib
        if (!res.ok) throw new Error("Failed to load .bib file");
        console.log("Fetched .bib file successfully");

        const bibContent = await res.text();
        const result = parseBibContent(bibContent);
        setPublicationsByYear(result);
      } catch (err: any) {
        console.error("Error loading publications:", err.message);
      }
    };

    loadBibtex();
  }, []);

  return (
    <div className="min-h-screen bg-[#FAF7F2]">

      {/* Header */}
      <div className="bg-[#0C2118] border-b border-[#1C4030] py-16 text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold text-[#EDE8DF]">Publications</h1>
          <p className="mt-3 text-[#8DB8A2]">
            Research contributions published in leading conferences and journals in software engineering and computing.
          </p>
        </div>
      </div>

      {/* Conference banner */}
      <div className="py-6 bg-[#F0EBE1] border-b border-[#D8D2C4]">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center gap-8 flex-wrap">
            {conferences.map((conference) => (
              <div key={conference.name} className="flex-shrink-0">
                <img
                  src={publicUrl(conference.logo)}
                  alt={conference.name}
                  className="h-10 w-auto transition-transform duration-150 hover:scale-110"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Publications by year */}
      <div className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <Accordion type="multiple" className="space-y-4">
            {publicationsByYear.map((yearData) => (
              <AccordionItem
                key={yearData.year}
                value={yearData.year.toString()}
                className="border border-[#D8D2C4] rounded-xl overflow-hidden data-[state=open]:border-[#2D6A4F]"
              >
                <AccordionTrigger className="group px-6 py-4 hover:no-underline bg-[#FAF7F2] hover:bg-[#F0EBE1] data-[state=open]:bg-[#1F4A30] data-[state=open]:hover:bg-[#2D6A4F]">
                  <div className="flex items-center justify-between w-full">
                    <h2 className="text-xl font-bold text-[#1A1710] group-data-[state=open]:text-[#EDE8DF]">{yearData.year}</h2>
                    <span className="text-xs text-[#6B6455] mr-4 group-data-[state=open]:text-[#8DB8A2]">
                      {yearData.papers.length} publication{yearData.papers.length !== 1 ? 's' : ''}
                    </span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-4 pb-6 bg-[#F0EBE1]">
                  <ul className="space-y-3 pt-3">
                    {yearData.papers.map((paper) => {
                      const pdfPath = PDF_MAP[paper.id];
                      const doiUrl = paper.doi
                        ? (paper.doi.startsWith("http") ? paper.doi : `https://doi.org/${paper.doi}`)
                        : null;
                      return (
                        <li key={paper.id} className="bg-[#FAF7F2] border border-[#D8D2C4] rounded-lg p-4">
                          <p className="text-sm font-semibold text-[#1A1710] leading-snug mb-1">
                            {paper.title}
                          </p>
                          <p className="text-xs text-[#6B6455] mb-1">
                            {paper.authors.join(', ')}
                          </p>
                          <p className="text-xs text-[#2D6A4F] font-medium mb-3">
                            <em>{paper.venue}</em>
                            {paper.volume && `, vol. ${paper.volume}`}
                            {paper.pages && `, pp. ${paper.pages}`}
                            {' · '}{paper.year}
                          </p>
                          <div className="flex items-center gap-2">
                            {doiUrl && (
                              <a
                                href={doiUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-medium bg-[#1F4A30] text-[#C4DDD1] hover:bg-[#2D6A4F] transition-colors duration-150"
                              >
                                <ExternalLink size={11} />
                                DOI
                              </a>
                            )}
                            {pdfPath && (
                              <a
                                href={publicUrl(pdfPath)}
                                target="_blank"
                                rel="noopener noreferrer"
                                download
                                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-medium border border-[#2D6A4F] text-[#2D6A4F] hover:bg-[#2D6A4F] hover:text-white transition-colors duration-150"
                              >
                                <Download size={11} />
                                PDF
                              </a>
                            )}
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default Publications;
