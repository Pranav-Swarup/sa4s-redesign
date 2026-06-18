import {
  AgenticHighlightItem,
  AgenticLifecycleItem,
  AgenticMilestone,
  LifecycleMapNode,
} from "./types";

export const agenticHero = {
  title: "Agentic AI at SA4S",
  description:
    "This page centralizes the SA4S group's work in Agentic AI across the software lifecycle. It brings together the research map from the shared image, ongoing projects, talks, publications, and key milestones that were previously scattered across multiple pages.",
  image: "/images/agentic_ai.png",
  imageAlt: "Lifecycle map of SA4S explorations in GenAI and software engineering",
};

const publicationLinks = {
  canLlmsGenerateAdr: {
    label: "Publication",
    href: "https://arxiv.org/abs/2403.01709",
    external: true,
  },
  leveragingGenAiAkm: {
    label: "Publication",
    href: "https://doi.org/10.1109/ICSA-C63560.2024.00034",
    external: true,
  },
  selfAdaptationLlms: {
    label: "Publication",
    href: "https://arxiv.org/abs/2404.09866",
    external: true,
  },
  moya: {
    label: "Publication",
    href: "https://arxiv.org/abs/2501.08243",
    external: true,
  },
  serverless: {
    label: "Publication",
    href: "https://arxiv.org/abs/2502.02539",
    external: true,
  },
  draft: {
    label: "Publication",
    href: "https://arxiv.org/abs/2504.08207",
    external: true,
  },
  functionCalling: {
    label: "Publication",
    href: "https://arxiv.org/abs/2504.19277",
    external: true,
  },
  energyCode: {
    label: "Publication",
    href: "https://arxiv.org/abs/2509.10099",
    external: true,
  },
  polaris: {
    label: "Publication",
    href: "https://arxiv.org/abs/2512.04702",
    external: true,
  },
  swenergy: {
    label: "Publication",
    href: "https://arxiv.org/abs/2512.09543",
    external: true,
  },
  assessmentFramework: {
    label: "Publication",
    href: "https://arxiv.org/abs/2512.12791",
    external: true,
  },
  change: {
    label: "Publication",
    href: "https://arxiv.org/abs/2601.06456",
    external: true,
  },
  selfCoding: {
    label: "Publication",
    href: "https://arxiv.org/abs/2601.14132",
    external: true,
  },
  agenticAkm: {
    label: "Publication",
    href: "https://arxiv.org/abs/2602.04445",
    external: true,
  },
  calm: {
    label: "Publication",
    href: "https://arxiv.org/abs/2602.03632",
    external: true,
  },
  agentsMicro: {
    label: "Publication",
    href: "https://arxiv.org/abs/2603.09004",
    external: true,
  },
  archView: {
    label: "Publication",
    href: "https://arxiv.org/abs/2603.21178",
    external: true,
  },
  adrContextEase: {
    label: "Publication",
    href: "https://arxiv.org/abs/2604.03826",
    external: true,
  },
  studyAgentic: {
    label: "Publication",
    href: "https://doi.org/10.1109/MS.2025.3622209",
    external: true,
  },
} as const;

const newsLinks = {
  generic: {
    label: "News",
    href: "/news",
  },
  energyCode: {
    label: "LinkedIn",
    href: "https://www.linkedin.com/feed/update/urn:li:activity:7344776886121615360",
    external: true,
  },
  assessmentFramework: {
    label: "LinkedIn",
    href: "https://www.linkedin.com/feed/update/urn:li:activity:7413590723851268096",
    external: true,
  },
  change: {
    label: "LinkedIn",
    href: "https://www.linkedin.com/posts/karthikv1392_cain2026-sa4s-serc-ugcPost-7417749499089059840-ULP9",
    external: true,
  },
  calm: {
    label: "LinkedIn",
    href: "https://www.linkedin.com/feed/update/urn:li:activity:7431368154003623936",
    external: true,
  },
  genai4seKeynote: {
    label: "LinkedIn",
    href: "https://www.linkedin.com/feed/update/urn:li:activity:7430437644821770240",
    external: true,
  },
  vibeCoding: {
    label: "LinkedIn",
    href: "https://www.linkedin.com/feed/update/urn:li:activity:7444772730756816896",
    external: true,
  },
  archView: {
    label: "LinkedIn",
    href: "https://www.linkedin.com/feed/update/urn:li:activity:7443330507452583937",
    external: true,
  },
} as const;

export const lifecycleMapNodes: LifecycleMapNode[] = [
  // Maintenance (left column)
  {
    id: "change",
    title: "CHANGE Framework for AgentOps",
    venue: "CAIN 2026",
    phase: "Maintenance",
    links: [
      publicationLinks.change,
      newsLinks.change,
      { label: "Blog", href: "/blogs/2601.06456v1" },
      newsLinks.generic,
    ],
  },
  {
    id: "calm",
    title:
      "Self-adaptation approach for QoS routing in Small Language Model based Systems",
    venue: "SEAMS 2026",
    phase: "Maintenance",
    links: [publicationLinks.calm, newsLinks.calm, newsLinks.generic],
  },
  {
    id: "polaris",
    title: "Multi-agentic reasoning for self-adaptation",
    venue: "SEAMS 2026",
    phase: "Maintenance",
    links: [
      publicationLinks.polaris,
      { label: "Blog", href: "/blogs/2512.04702v2" },
    ],
  },
  {
    id: "moya",
    title: "Autonomous CloudOps (Multi-agent)",
    venue: "CAIN 2025",
    phase: "Maintenance",
    links: [
      publicationLinks.moya,
      { label: "Blog", href: "/blogs/2501.08243v1" },
      newsLinks.generic,
    ],
  },
  {
    id: "sa-llm",
    title: "Self-adaptation using Large Language Models",
    venue: "ICSA 2024",
    phase: "Maintenance",
    links: [
      publicationLinks.selfAdaptationLlms,
      { label: "Blog", href: "/blogs/2404.09866v1" },
    ],
  },
  // Requirements (top-center)
  {
    id: "monoliths",
    title: "LLMs for migrating from Monoliths to Microservices",
    venue: "ICSA 2026",
    phase: "Design",
    collab: true,
    links: [newsLinks.generic],
  },
  {
    id: "archview",
    title: "Architecture Views from Source code",
    venue: "ICSA 2025",
    phase: "Requirements",
    extraPhases: ["Design"],
    links: [publicationLinks.archView, newsLinks.archView, newsLinks.generic],
  },
  // Design (top)
  {
    id: "enroute-akm",
    title: "Enroute to Agentic Architecture Knowledge Management",
    venue: "AGENT 2026",
    phase: "Design",
    links: [
      publicationLinks.agenticAkm,
      {
        label: "Blog",
        href: "/blogs/leveraging_generative_ai_for_architecture_knowledge_management",
      },
    ],
  },
  {
    id: "adr-context",
    title: "Evaluation of Context required for Generating ADRs",
    venue: "ICSA 2024, EASE 2026",
    phase: "Design",
    collab: true,
    links: [
      publicationLinks.canLlmsGenerateAdr,
      publicationLinks.adrContextEase,
      {
        label: "Blog",
        href: "/blogs/can_llms_generate_architectural_design_decisions___an_exploratory_empirical_study",
      },
    ],
  },
  // Development (right)
  {
    id: "self-coding",
    title: "Architecting self-coding Information Systems",
    venue: "ICSE 2026",
    phase: "Design",
    collab: true,
    links: [publicationLinks.selfCoding, newsLinks.generic],
  },
  {
    id: "serverless",
    title: "Automated generation of serverless functions",
    venue: "ICSA 2025",
    phase: "Development",
    links: [publicationLinks.serverless, newsLinks.generic],
  },
  {
    id: "study-agentic",
    title: "Study across Agentic AI Frameworks",
    venue: "IEEE Software 2026",
    phase: "Development",
    links: [publicationLinks.studyAgentic, newsLinks.generic],
  },
  {
    id: "agentic-akm",
    title: "Agentic Approach to Architecture Knowledge Management",
    venue: "AGENT 2026",
    phase: "Development",
    links: [publicationLinks.agenticAkm, newsLinks.generic],
  },
  {
    id: "agents-micro",
    title: "Agents for generating Microservices",
    venue: "ICSA 2026",
    phase: "Development",
    collab: true,
    links: [publicationLinks.agentsMicro, newsLinks.generic],
  },
  {
    id: "energy-code",
    title: "Energy Efficiency of code generated by LLMs",
    venue: "ICSE 2026",
    phase: "Development",
    collab: true,
    links: [publicationLinks.energyCode, newsLinks.energyCode, newsLinks.generic],
  },
  {
    id: "fn-call",
    title: "Function calling Using Small Language Models",
    venue: "EASE 2025",
    phase: "Development",
    collab: true,
    links: [
      publicationLinks.functionCalling,
      { label: "Blog", href: "/blogs/2504.19277v1" },
    ],
  },
  // Testing (bottom)
  {
    id: "agent-assess",
    title: "Agent Assessment Framework",
    venue: "AGENT 2026",
    phase: "Testing",
    links: [
      publicationLinks.assessmentFramework,
      { label: "Blog", href: "/blogs/2512.12791v2" },
      newsLinks.assessmentFramework,
      newsLinks.generic,
    ],
  },
  {
    id: "swenergy",
    title:
      "SWEnergy: Energy efficiency of Agentic Frameworks for code resolution",
    venue: "AGENT 2026",
    phase: "Development",
    links: [
      publicationLinks.swenergy,
      { label: "Blog", href: "/blogs/2512.09543v2" },
    ],
  },
  // Deployment (bottom)
  {
    id: "iaac",
    title: "Generating IaaC",
    venue: "ISEC 2026",
    phase: "Deployment",
    collab: true,
    links: [newsLinks.generic],
  },
  {
    id: "auto-deploy",
    title: "Automated development and deployment of services",
    venue: "ICSA-C 2025",
    phase: "Deployment",
    links: [newsLinks.generic],
  },
];

export const lifecycleExplorations: AgenticLifecycleItem[] = [
  {
    title: "LLM-based Automated Architecture View Generation: Where Are We Now?",
    venue: "ICSA 2026",
    note: "Accepted work on automated architecture view generation from source code, sourced from the March 27, 2026 news entry.",
    phase: "Requirements",
    links: [newsLinks.archView, newsLinks.generic],
  },
  {
    title: "Can LLMs Generate Architectural Design Decisions? - An Exploratory Empirical Study",
    venue: "ICSA 2024",
    note: "Foundational study on generating architectural design decisions from context.",
    phase: "Requirements",
    links: [
      publicationLinks.canLlmsGenerateAdr,
      {
        label: "Blog",
        href: "/blogs/can_llms_generate_architectural_design_decisions___an_exploratory_empirical_study",
      },
    ],
  },
  {
    title: "DRAFT-ing Architectural Design Decisions using LLMs",
    venue: "CoRR / arXiv 2025",
    note: "Follow-on ADR work using retrieval and tuning to improve architectural decision generation.",
    phase: "Design",
    links: [
      publicationLinks.draft,
      { label: "Blog", href: "/blogs/2504.08207v1" },
    ],
  },
  {
    title: "Leveraging Generative AI for Architecture Knowledge Management",
    venue: "ICSA 2024 Companion",
    note: "Architecture knowledge management line grounded in the ICSA 2024 companion paper.",
    phase: "Design",
    links: [
      publicationLinks.leveragingGenAiAkm,
      {
        label: "Blog",
        href: "/blogs/leveraging_generative_ai_for_architecture_knowledge_management",
      },
    ],
  },
  {
    title: "Generating Energy-Efficient Code via LLMs",
    venue: "ICSE 2026",
    note: "Accepted work on whether LLM-generated code meets energy-efficiency goals.",
    phase: "Development",
    links: [publicationLinks.energyCode, newsLinks.energyCode, newsLinks.generic],
  },
  {
    title: "Small Models, Big Tasks: An Exploratory Empirical Study on Small Language Models for Function Calling",
    venue: "CoRR / arXiv 2025",
    note: "Examines lightweight model choices for structured tool use and function calling.",
    phase: "Development",
    links: [
      publicationLinks.functionCalling,
      { label: "Blog", href: "/blogs/2504.19277v1" },
    ],
  },
  {
    title: "SWEnergy: An Empirical Study on Energy Efficiency in Agentic Issue Resolution Frameworks with SLMs",
    venue: "2026 preprint",
    note: "Evaluates sustainability and efficiency trade-offs in agentic issue resolution.",
    phase: "Testing",
    links: [
      publicationLinks.swenergy,
      { label: "Blog", href: "/blogs/2512.09543v2" },
    ],
  },
  {
    title: "Beyond Task Completion: An Assessment Framework for Evaluating Agentic AI Systems",
    venue: "AGENT 2026",
    note: "Introduces a system-level evaluation framework across LLM, memory, tools, and environment.",
    phase: "Testing",
    links: [
      publicationLinks.assessmentFramework,
      { label: "Blog", href: "/blogs/2512.12791v2" },
      newsLinks.assessmentFramework,
      newsLinks.generic,
    ],
  },
  {
    title: "Engineering LLM Powered Multi-agent Framework for Autonomous CloudOps",
    venue: "CAIN 2025 / CoRR 2025",
    note: "CloudOps line on multi-agent orchestration with human control in the loop.",
    phase: "Maintenance",
    links: [
      publicationLinks.moya,
      newsLinks.generic,
      { label: "Blog", href: "/blogs/2501.08243v1" },
    ],
  },
  {
    title: "Reimagining Self-Adaptation in the Age of Large Language Models",
    venue: "ICSA 2024 Companion",
    note: "Early work connecting LLM reasoning with self-adaptive software systems.",
    phase: "Maintenance",
    links: [
      publicationLinks.selfAdaptationLlms,
      { label: "Blog", href: "/blogs/2404.09866v1" },
    ],
  },
  {
    title: "Architecting AgentOps Needs CHANGE",
    venue: "CAIN 2026",
    note: "Proposes an AgentOps architecture lens for systems that evolve after deployment.",
    phase: "Maintenance",
    links: [
      publicationLinks.change,
      newsLinks.change,
      newsLinks.generic,
      { label: "Blog", href: "/blogs/2601.06456v1" },
    ],
  },
  {
    title: "CALM: Self-Adaptive SLM Orchestration",
    venue: "SEAMS 2026",
    note: "Accepted work on QoS-aware routing and orchestration across fleets of small language models.",
    phase: "Maintenance",
    links: [newsLinks.calm, newsLinks.generic],
  },
  {
    title: "POLARIS: Is Multi-Agentic Reasoning the Next Wave in Engineering Self-Adaptive Systems?",
    venue: "2026 preprint",
    note: "Introduces a layered reasoning architecture for self-adaptive systems.",
    phase: "Maintenance",
    links: [
      publicationLinks.polaris,
      { label: "Blog", href: "/blogs/2512.04702v2" },
    ],
  },
];

export const projectHighlights: AgenticHighlightItem[] = [
  {
    title: "LLM4ADR",
    subtitle: "Architecture decision support",
    description:
      "A research line focused on generating and improving architectural design decisions and ADRs with LLMs.",
    tags: ["project", "ADR", "architecture"],
    links: [{ label: "Projects", href: "/work" }],
  },
  {
    title: "LLM Powered Autonomous CloudOps",
    subtitle: "Multi-agent operations with MontyCloud",
    description:
      "The CloudOps line studies agentic automation for security checks, compliance, assessment, and operational recommendations.",
    tags: ["project", "CloudOps", "multi-agent"],
    links: [{ label: "Projects", href: "/work" }],
  },
  {
    title: "SAS_llm_query",
    subtitle: "Mixed-initiative IoT service generation",
    description:
      "A showcase on co-creating adaptive IoT microservices through dialogue-driven generation and scaffolding.",
    tags: ["showcase", "microservices", "demo"],
    links: [{ label: "Showcase", href: "/showcases" }],
  },
  {
    title: "ArchView",
    subtitle: "Repository-aware architecture reasoning",
    description:
      "An agentic approach for generating clearer architecture views from source repositories and iterative validation.",
    tags: ["architecture", "views", "ICSA 2026"],
    links: [newsLinks.archView, newsLinks.generic],
  },
  {
    title: "Architecting Agentic AI Systems",
    subtitle: "Emerging foundational project direction",
    description:
      "This theme appears across current student work and fellowships, especially around architecture, governance, and evaluation.",
    tags: ["project direction", "fellowship", "architecture"],
    links: [newsLinks.generic],
  },
];

export const talkHighlights: AgenticHighlightItem[] = [
  {
    title: "Engineering Agentic AI: From Concepts to Practice",
    subtitle: "NASSCOM Tech Developer Confluence 2025",
    description:
      "A practical talk on moving from core concepts to engineering and operating real-world agentic systems.",
    tags: ["talk", "industry", "practice"],
    links: [{ label: "News", href: "/news" }],
  },
  {
    title: "NASSCOM talk on engineering Agentic AI",
    subtitle: "Milestone · 8 August 2025",
    description:
      "This marked a stronger outward-facing articulation of the group's concepts-to-practice narrative.",
    tags: ["milestone", "industry", "outreach"],
    links: [newsLinks.generic],
  },
  {
    title: "Architecting AI-Enabled Systems: From ML to Agentic AI",
    subtitle: "ECSA 2025 tutorial",
    description:
      "A tutorial spanning ML-enabled systems, LLMs for software architecture, and architecting multi-agent systems.",
    tags: ["tutorial", "ECSA", "architecture"],
    links: [{ label: "News", href: "/news" }],
  },
  {
    title: "When Control Shifts: Software Architecture in the Age of Agentic AI",
    subtitle: "GenAI4SE Workshop 2026 keynote",
    description:
      "A keynote on how architectural thinking changes when autonomy shifts from deterministic logic to agents.",
    tags: ["keynote", "GenAI4SE", "software architecture"],
    links: [newsLinks.genai4seKeynote, newsLinks.generic],
  },
  {
    title: "Vibe Coding: What is the 'vibe' really?",
    subtitle: "TechForward series",
    description:
      "A public-facing talk connecting generative AI, agentic AI, and the changing practice of software engineering.",
    tags: ["talk", "outreach", "software engineering"],
    links: [newsLinks.vibeCoding, newsLinks.generic],
  },
];

export const publicationHighlights: AgenticHighlightItem[] = [
  {
    title: "Can LLMs Generate Architectural Design Decisions?",
    subtitle: "Foundational ADR generation study",
    description:
      "An early empirical study examining whether LLMs can draft architecture decision records from context.",
    tags: ["publication", "ADR", "LLM"],
    links: [
      publicationLinks.canLlmsGenerateAdr,
      {
        label: "Blog",
        href: "/blogs/can_llms_generate_architectural_design_decisions___an_exploratory_empirical_study",
      },
    ],
  },
  {
    title: "DRAFT: Guiding Software Architects with LLMs for Architectural Design Decisions",
    subtitle: "Retrieval-augmented architectural decision support",
    description:
      "Combines retrieval, few-shot prompting, and tuning to improve ADD generation quality and privacy.",
    tags: ["publication", "architecture", "RAG"],
    links: [
      publicationLinks.draft,
      { label: "Blog", href: "/blogs/2504.08207v1" },
    ],
  },
  {
    title: "Engineering LLM Powered Multi-agent Framework for Autonomous CloudOps",
    subtitle: "Agentic operations",
    description:
      "A multi-agent framework for cloud operations that balances automation with control and observability.",
    tags: ["publication", "CloudOps", "multi-agent"],
    links: [
      publicationLinks.moya,
      { label: "Blog", href: "/blogs/2501.08243v1" },
    ],
  },
  {
    title: "Beyond Task Completion",
    subtitle: "Evaluation for agentic systems",
    description:
      "Frames agent evaluation beyond success rates, covering reasoning, memory, tools, and environment interactions.",
    tags: ["publication", "evaluation", "AGENT 2026"],
    links: [
      publicationLinks.assessmentFramework,
      { label: "Blog", href: "/blogs/2512.12791v2" },
    ],
  },
  {
    title: "SWEnergy",
    subtitle: "Sustainability in agentic issue resolution",
    description:
      "Shows how framework design can waste energy when smaller models are used in agentic loops.",
    tags: ["publication", "energy", "SLM"],
    links: [
      publicationLinks.swenergy,
      { label: "Blog", href: "/blogs/2512.09543v2" },
    ],
  },
  {
    title: "POLARIS",
    subtitle: "Reasoning-driven self-adaptation preprint",
    description:
      "Pushes self-adaptive systems toward multi-agentic reasoning and layered control loops.",
    tags: ["publication", "self-adaptation", "SEAMS 2026"],
    links: [
      publicationLinks.polaris,
      { label: "Blog", href: "/blogs/2512.04702v2" },
    ],
  },
  {
    title: "MOYA selected as a CAIN 2025 best paper candidate",
    subtitle: "Milestone · 28 February 2025",
    description:
      "The autonomous CloudOps line became an early flagship result for SA4S's agentic systems work.",
    tags: ["milestone", "best paper", "CAIN 2025"],
    links: [publicationLinks.moya, newsLinks.generic],
  },
];

export const agenticMilestones: AgenticMilestone[] = [
  {
    date: "28 February 2025",
    headline: "MOYA selected as a CAIN 2025 best paper candidate",
    description:
      "The autonomous CloudOps line became an early flagship result for SA4S's agentic systems work.",
    links: [newsLinks.generic],
  },
  {
    date: "8 August 2025",
    headline: "NASSCOM talk on engineering Agentic AI",
    description:
      "This marked a stronger outward-facing articulation of the group's concepts-to-practice narrative.",
    links: [newsLinks.generic],
  },
  {
    date: "4 January 2026",
    headline: "Agentic AI assessment framework accepted at AGENT 2026",
    description:
      "Evaluation became a major strand alongside architecture and deployment concerns.",
    links: [newsLinks.assessmentFramework, newsLinks.generic],
  },
  {
    date: "8 February 2026",
    headline: "CHANGE accepted at CAIN 2026",
    description:
      "AgentOps and lifecycle governance became explicit research themes for post-deployment systems.",
    links: [newsLinks.change, newsLinks.generic],
  },
  {
    date: "22 February 2026",
    headline: "CALM accepted at SEAMS 2026",
    description:
      "The SLM orchestration line became an explicit part of the group’s agentic and self-adaptive systems work.",
    links: [newsLinks.calm, newsLinks.generic],
  },
  {
    date: "27 March 2026",
    headline: "Architecture view generation accepted at ICSA 2026",
    description:
      "The architecture reasoning line expanded into repository-aware, agentic architectural documentation.",
    links: [newsLinks.archView, newsLinks.generic],
  },
];
