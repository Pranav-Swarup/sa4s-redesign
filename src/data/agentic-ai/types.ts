export type AgenticLifecyclePhase =
  | "Requirements"
  | "Design"
  | "Development"
  | "Testing"
  | "Deployment"
  | "Maintenance";

export interface AgenticLink {
  label: string;
  href: string;
  external?: boolean;
}

export interface AgenticLifecycleItem {
  title: string;
  venue: string;
  note: string;
  phase: AgenticLifecyclePhase;
  links: AgenticLink[];
}

export interface AgenticHighlightItem {
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  links: AgenticLink[];
}

export interface LifecycleMapNode {
  id: string;
  title: string;
  venue: string;
  phase: AgenticLifecyclePhase;
  extraPhases?: AgenticLifecyclePhase[];
  collab?: boolean;
  links: AgenticLink[];
}

export interface AgenticMilestone {
  date: string;
  headline: string;
  description: string;
  links: AgenticLink[];
}
