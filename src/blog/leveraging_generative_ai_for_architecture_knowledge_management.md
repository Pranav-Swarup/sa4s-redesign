---
title: "Unlocking Architectural Wisdom: How Generative AI Can Revolutionize Knowledge Management"
excerpt: "Software architecture decisions are crucial but often poorly documented, leading to 'knowledge vaporization.' This research proposes a new system that uses Generative AI to automatically extract, manage, and query this vital information, making it accessible to the entire team."
date: "2024-06-15"
author: "Rudra Dhar, Karthik Vaidhyanathan, Vasudeva Varma"
category: "AI/ML"
thumbnail: "/images/blogpic/leveraging_generative_ai_for_architecture_knowledge_management_p2_f1.png"
---

Every software project is built on a foundation of architectural decisions. These decisions—about design patterns, quality attributes, and system styles—form the blueprint of the application. This critical information is known as **Architectural Knowledge (AK)**. The process of managing it is called **Architectural Knowledge Management (AKM)**.

While crucial, AKM is often neglected. Knowledge gets scattered across source code, commit messages, wikis, and team chats. Over time, the "why" behind key decisions is lost, a phenomenon the researchers call **knowledge vaporization**. This makes onboarding new developers difficult, hinders maintenance, and complicates future development.

Researchers from IIIT Hyderabad propose a novel solution to this long-standing problem: a system that leverages Generative AI to automate the entire AKM lifecycle, from extraction to retrieval.

#### The Challenge: Taming Scattered Knowledge

Creating an effective AKM system is tough. The challenges include:

*   **Diverse Data Sources:** AK is not in one place. It's in UML diagrams, documentation like **Architectural Decision Records (ADRs)**, source code, and even discussions on online platforms. Extracting and consolidating this is a massive task.
*   **The Need for "World Knowledge":** A system needs more than just project-specific information. It requires generalized knowledge, like an expert architect possesses, to provide rich, contextual answers.
*   **Intuitive Querying:** To be useful, the system must allow users to ask natural questions and get relevant, easy-to-understand answers, potentially including generated diagrams or code snippets.

#### A Two-Phase Approach to Automated AKM

The proposed solution tackles these challenges with a two-phase approach: **Architecture Knowledge Extraction (AKE)** to gather and process information, and **Architecture Knowledge Retrieval (AKR)** to make that information accessible through a smart query interface.


![A high-level diagram showing the two main phases of the proposed system: Architectural Knowledge Extraction and Architectural Knowledge Retrieval.](/images/blogpic/leveraging_generative_ai_for_architecture_knowledge_management_p2_f1.png)


#### Phase 1: Architecture Knowledge Extraction (AKE)

The goal of AKE is to build a comprehensive knowledge base for a given software system. This is a multi-step process that combines information from the project itself with broader knowledge from the outside world.

1.  **Extracting System AK:** The process begins by parsing and analyzing the project's own repository. This includes source code, package structure, and any existing documentation.
2.  **Retrieving World AK:** The system then gathers supplementary information from diverse external sources. This "World AK" can come from other code repositories, academic papers, technical blogs, and even other AI models.
3.  **AK Fusion and Storage:** The core of the AKE phase is the **AK Generator**. It uses Large Language Models (LLMs) and other Generative AI techniques (like image generators) to fuse the system-specific AK with the retrieved World AK. The concepts of **Retrieval Augmented Generation (RAG)** are adapted here for a multi-modal approach. The refined, comprehensive knowledge is then stored in various formats, including textual descriptions, knowledge graphs, and vector databases for future querying.


![A detailed flowchart of the Architecture Knowledge Extraction (AKE)
 process, showing how system knowledge and world knowledge are combined by an AK Generator.](/images/blogpic/leveraging_generative_ai_for_architecture_knowledge_management_p3_f1.png)

For example, the system could analyze the Hadoop GitHub repository, enrich it with knowledge from the AKB website (a repository of architectural knowledge), and produce a complete architectural profile, including design decisions, patterns, and tactics.

#### Phase 2: Architecture Knowledge Retrieval (AKR)

Once the knowledge is extracted and stored, the **Architecture Knowledge Retrieval (AKR)** phase makes it useful. This phase acts as an intelligent Q&A system built on top of the knowledge base.

A key feature is its **role-oriented framework**. The system tailors its responses to the user's role. An architect might receive a high-level overview of design choices, while a developer might get a detailed explanation of a specific component's implementation, and a new team member might get a basic system overview. This ensures the information is not just accurate but also actionable for each user.

#### Initial Validation: Can LLMs Generate Design Decisions?

To validate their approach, the researchers conducted an exploratory study focused on a critical part of AKM: generating **Architectural Decision Records (ADRs)**. An ADR is a short document that captures a single architectural decision, including the context and the final choice.



The team scraped real-world ADRs from various repositories. They fed the "Context" part of an ADR to different LLMs (including GPT and T5-based models) and tasked them with generating the "Decision" part. They tested the models using 0-shot, few-shot, and fine-tuning methods.

The results, measured using metrics like the BERT Score, were promising.


![A bar chart showing the BERT F1 scores for various LLMs in generating architectural decisions, comparing 0-shot, few-shot, and fine-tuned approaches.](/images/blogpic/leveraging_generative_ai_for_architecture_knowledge_management_p4_f1.png)


The findings revealed that:
*   State-of-the-art models like **GPT-4** can generate relevant and accurate design decisions right out of the box (0-shot), though they still fall short of human-level performance.
*   Smaller, more efficient models like **Flan-T5**, when fine-tuned on specific data, can achieve results comparable to much larger models. This is a significant finding, as it suggests that effective, locally-deployable systems are feasible.

#### Conclusion: The Future of AKM is Automated

This research presents a compelling vision for the future of software development, where crucial architectural knowledge is no longer lost or buried in obscure documents. By leveraging the power of Generative AI, the proposed system aims to create a living, accessible, and intelligent repository of architectural wisdom.

While the initial study shows that LLMs have great potential for automating AKM tasks, it also highlights the need for further research to reach human-level proficiency. The ultimate goal is a user-friendly system that simplifies documentation, prevents knowledge vaporization, and empowers teams to make better, more informed decisions.