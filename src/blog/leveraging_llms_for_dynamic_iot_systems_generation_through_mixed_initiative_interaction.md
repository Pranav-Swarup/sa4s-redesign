---
title: "From Vague Ideas to Smart Actions: AI-Powered IoT Systems That Adapt to You"
excerpt: "Imagine your smart city assistant not just answering questions, but building custom apps for you in real-time. This research introduces a new framework where users and AI collaborate to create personalized IoT solutions, turning a simple request into a dynamic, purpose-built system."
date: "2025-01-01"
author: "Bassam Adnan, Sathvika Miryala, Aneesh Sambu, Karthik Vaidhyanathan, Martina De Sanctis, Romina Spalazzese"
category: "AI/ML"
thumbnail: "/images/showcases/sas_llm_query.png"
---

The promise of the Internet of Things (IoT) has always been a world that seamlessly adapts to our needs. Yet, today's smart systems often feel rigid. They operate from a fixed menu of services, struggling when our goals are vague, change on a whim, or require something entirely new. What if, instead of just using a smart system, we could collaborate with it to create the exact solution we need, right when we need it?

A new research paper from the 2025 IEEE International Conference on Software Architecture Companion (ICSA-C) explores this very idea. It presents a system that leverages **Large Language Models (LLMs)** to realize the **IoT-Together paradigm**—a framework where humans and AI engage in a **Mixed-Initiative Interaction (MII)** to dynamically build and adapt IoT applications.

#### The Problem with Pre-Defined Plans

Let's consider a common scenario: a tourist arrives in a new city with a simple goal: "I have 3 hours to explore Hyderabad's old charm." Existing systems might offer a static list of popular sites. But what if the tourist gets hungry? Or wants to avoid crowds? Or is interested in something specific, like street food? The system quickly reaches its limits.

The core challenge is that user needs are dynamic and context-dependent. A truly smart system shouldn't just respond; it should understand, clarify, and adapt.

#### A Smarter Conversation: The Three-Pass Dialogue

To solve this, the researchers designed a system that engages the user in a collaborative dialogue. Instead of a single command-and-response, the system uses an LLM-powered **three-pass dialogue framework** to progressively understand and refine the user's goals.


![A diagram showing a three-step conversation between a tourist and a travel guide AI, starting with a vague request and ending with a concrete, personalized plan.](/images/showcases/sas_llm_query.png)


1.  **Pass 1: Contextual Awareness:** The system first gathers all relevant context. This includes the user's query, time constraints, location, and real-time environmental data from IoT sensors (like weather, traffic, and crowd density).
2.  **Pass 2: Goal Formulation and Refinement:** Based on the initial context, the LLM generates hypotheses about the user's potential goals and asks clarifying questions. In our example, it suggests visiting Charminar and Laad Bazaar. When the tourist mentions they're hungry, the system refines its goal to include finding food and asks about dietary preferences.
3.  **Pass 3: Goal Verification and Confirmation:** Once the goals are clear, the system proposes a final, curated set of services—like a restaurant finder and a historical information service—along with a concrete plan. The user gives the final "okay," and the system proceeds to build the application.

#### Under the Hood: An Architecture for Dynamic Generation

This dynamic interaction is powered by a novel software architecture that integrates several key components.


![High-level architecture diagram of the system showing user interaction, goal management, knowledge management, and backend generation components.](/images/showcases/sas_llm_query.png)


-   **Goal Management:** This is the "brain" of the operation, powered by an LLM. It manages the three-pass dialogue to interpret user queries and identify the required services.
-   **Knowledge Management:** A central repository that stores all system data: sensor feeds, service descriptions, database schemas, and user context. It's the system's memory.
-   **Backend Generation:** This is where the real magic happens. If a user's request requires a service that doesn't exist yet (e.g., "show me the real-time crowd levels at these historical sites"), this component uses an LLM to *dynamically write and deploy the code for that new service*. It uses existing data schemas and service descriptions as a blueprint.
-   **Intelligent User Interface (IUI) Generator:** Once all necessary services (both existing and newly created) are identified, this component assembles them into a simple, functional web application and provides the user with a URL.

#### Putting It to the Test: Does It Really Work?

The researchers conducted a rigorous evaluation using a multi-agent simulation and a user study with 15 participants. They tested several LLMs, including GPT-4o-mini, DeepSeek-V2.5, and CodeQwen1.5-7B.

The results were promising:
-   **High Effectiveness:** The system successfully identified user needs and generated appropriate services. GPT-4o-mini and DeepSeek-V2.5 demonstrated strong performance in both understanding user goals and generating correct code.
-   **Dynamic Adaptation:** The system proved it could dynamically generate and seamlessly integrate new services on demand, a crucial step beyond traditional, static IoT frameworks.
-   **User Satisfaction:** Participants in the user study rated the system highly for accuracy, relevance, and overall experience, with 67% of interactions involving complex, multi-service requests.

However, the study also highlighted a key challenge: **efficiency**. The system relies on providing the LLM with extensive context (all available services, schemas, conversation history). As the number of services grows, the number of input tokens required for processing increases significantly, which impacts both cost and latency.


![A line graph showing that as more services are added to the system, the number of input tokens required for processing increases significantly for different LLM models.](/images/showcases/sas_llm_query.png)


This finding points to a critical area for future work: optimizing context management to make these powerful systems more efficient and scalable.

#### The Future is Collaborative

This research marks a significant step toward more intelligent and user-centric IoT systems. By shifting from a rigid, command-based model to a collaborative, mixed-initiative dialogue, we can create environments that don't just respond to us but truly work *with* us. The ability to dynamically generate new functionalities on the fly opens up a future where technology can finally keep pace with the complexity and spontaneity of human needs.
