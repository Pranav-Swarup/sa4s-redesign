const e=`---
date: "14 June 2026"
headline: "SA4S Research Group Advances ADR Automation through Context Engineering at EASE 2026"
sourceUrl: "https://www.linkedin.com/feed/update/urn:li:activity:7471975736984289281"
---

![Post Image](https://media.licdn.com/dms/image/v2/D5622AQHuyPMGh3-KLA/feedshare-shrink_800/B56Z7HKVWZGoAc-/0/1781457835650?e=2147483647&v=beta&t=-YjZBqeKlhHq92s1krkw78r9_uPLbS0OyRpfpNk69S0)

The **SA4S research group** at IIIT Hyderabad presented its latest research on software architecture documentation at the **International Conference on Evaluation and Assessment in Software Engineering (EASE) 2026**. 

The study, titled "[**Context Matters: Evaluating Context Strategies for Automated ADR Generation Using LLMs**](https://www.linkedin.com/feed/update/urn:li:activity:7471975736984289281)," was led by SA4S members **Aviral Gupta** and **Rudra Dhar**, under the supervision of **Karthik Vaidhyanathan**. The research addresses the practical challenges of maintaining Architecture Decision Records (ADRs), which are vital for tracking technology choices, trade-offs, and constraints but are often difficult for teams to document consistently.

### 🔬 Research Scope: Optimizing Architectural Memory

The research focused on how context engineering—specifically the amount and type of architectural history provided to Large Language Models (LLMs)—affects the quality of automated ADR generation. The team evaluated several context strategies, including:

*   Complete ADR history versus no prior context.
*   Foundational early-stage ADRs versus recent records.
*   Retrieval-based strategies for relevant architectural decisions.

### 📊 Key Findings

The study revealed that for effective ADR automation, the quality and relevance of context are more important than the size of the model:

*   **Context Efficiency:** While architectural history improves generation, more context is not always better. A small window of 3–5 recent ADRs was found to be highly effective.
*   **Noise Reduction:** Providing a full history can introduce noise and increase computational costs without significant quality improvements.
*   **Retrieval Benefits:** Retrieval-based methods are particularly effective when architectural decisions are cross-cutting rather than strictly sequential.
*   **Model Performance:** Smaller, locally deployable models can perform effectively for architectural knowledge management when grounded with the appropriate context.

### 🚀 Implications for Software Architecture

The findings suggest a shift in focus for software architecture tooling. Instead of relying solely on massive language models, the key to effective ADR automation lies in sophisticated context engineering. By providing models with the "right architectural memory" at the right time, practitioners can better manage architectural knowledge and maintain more accurate records of system evolution.
`;export{e as default};
