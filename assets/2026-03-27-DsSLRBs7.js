const e=`---
date: "27 March 2026"
headline: "SA4S Research on LLM-based Architecture View Generation Accepted at ICSA 2026"
sourceUrl: "https://www.linkedin.com/feed/update/urn:li:activity:7443330507452583937"
---

![Post Image](https://media.licdn.com/dms/image/v2/D5622AQFMAyYYtN5WbQ/feedshare-shrink_800/B56Z0wFpbAKEAc-/0/1774628281157?e=2147483647&v=beta&t=Y2ObJhXMOko9u3ak-4Hdd_DINPf97xN4ghb81I1HrsU)

The **SA4S research group** has announced the acceptance of its paper at the **International Conference on Software Architecture (ICSA) 2026**, to be held in Amsterdam. The study explores the current capabilities of Large Language Models (LLMs) in automating the generation of software architecture views from source code.

### 🔬 Research Focus: Evaluating LLMs in Architecture

The paper, titled "**LLM-based Automated Architecture View Generation: Where Are We Now?**", provides a comprehensive evaluation of automated architectural documentation. The research team, including **Sathvika Miryala**, **Rudra Dhar**, and **Karthik Vaidhyanathan**, conducted an extensive study involving:

*   **Repository Analysis:** An investigation of **340 open-source repositories**.
*   **Configuration Testing:** Exploration of 13 different configurations involving various LLMs, prompting strategies, and agentic frameworks.
*   **Large-scale Evaluation:** The generation and assessment of **4,137 architecture views**.

The findings suggest that while LLMs can generate syntactically valid views, they frequently struggle with architectural abstraction. The study revealed that general-purpose agents often fall short for specific architectural tasks, whereas domain-specific approaches show significant promise.

### 🚀 Introducing ArchView

As a key contribution, the group developed **ArchView**, an agentic approach tailored for architectural reasoning. ArchView combines repository-aware reasoning with iterative generation and validation to improve the detail and clarity of architectural views.

The work was led by **Sathvika Miryala**, with **Rudra Dhar** contributing as part of his ongoing PhD research into leveraging Generative AI for Architecture Knowledge Management. This publication is one of three papers from the SA4S group accepted at ICSA 2026, highlighting the group's continued contributions to the intersection of **Software Architecture** and **Agentic AI**.
`;export{e as default};
