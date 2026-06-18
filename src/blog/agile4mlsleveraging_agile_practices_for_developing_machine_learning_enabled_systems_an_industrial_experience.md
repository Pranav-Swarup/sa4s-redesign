---
title: "From Silos to Synergy: A Practical Guide to Agile for Machine Learning"
excerpt: "Traditional agile methods often clash with the experimental nature of machine learning. This article breaks down Agile4MLS, an industrial-tested framework that bridges the gap between software and ML teams for faster, more effective development."
date: "2022-10-24"
author: "Karthik Vaidhyanathan, Anish Chandran, Henry Muccini, Regi Roy"
category: "AI/ML"
thumbnail: "/images/blogpic/agile4mlsleveraging_agile_practices_for_developing_machine_learning_enabled_systems_an_industrial_experience_p4_f1.png"
---

The adoption of machine learning (ML) is skyrocketing, but many organizations find that their ML-enabled systems get stuck in development and never see the light of day. A primary reason for this is a fundamental process clash: the structured, predictable world of traditional **agile software (SW) development** often doesn't align with the highly experimental and uncertain nature of **ML development**.

When software teams and ML teams try to work together, they often run into friction. How do you plan a sprint around a model whose performance is unpredictable? How does a software team build a feature that depends on an ML model that doesn't exist yet?

Faced with these exact issues while building a computer vision-based proctoring system called **Proktor**, the team at Founding Minds (FMS) developed a new methodology: **Agile4MLS**. This framework offers a practical, industrial-proven way to leverage agile principles for ML projects without forcing ML engineers into an unnatural workflow.

#### The Core Challenge: A Tale of Two Teams

FMS needed to build and release their Proktor application on a tight schedule. While their SW teams were experts in agile SCRUM, the ML team followed a more iterative, research-driven process. This created three major challenges:

1.  **Rapid Development Pressure:** The tight deadline required a fast, agile approach, but ML's experimental nature often leads to unpredictable timelines.
2.  **Process Mismatch:** The SW team struggled to understand the probabilistic nature of ML components, while the ML team was unfamiliar with agile best practices. This led to collaboration and knowledge gaps.
3.  **Dependency Hell:** Most software features depended on the ML models. If the teams worked in separate silos, the SW team would be constantly waiting for the ML team to release a model API, only for that API to change later due to the experimental nature of ML.

#### The Solution: Introducing Agile4MLS

The team at FMS realized that forcing both teams into a single, rigid process wouldn't work. The key was to keep the teams separate to respect their unique workflows but introduce powerful mechanisms for communication and synchronization. The Agile4MLS process modifies traditional SCRUM at two key levels: sprint planning and team organization.

#### A New Approach to Sprint Planning

In Agile4MLS, the first step is to categorize features into two types: **ML-intensive** (heavily dependent on ML models) and **non-ML-intensive** (standard software features).

While non-ML-intensive features are broken down into traditional user stories, the ML-intensive features are split into two new, ML-friendly artifacts:

*   **Data Stories:** These focus on the data required for an ML model. They define the *goal*, *source*, *type*, and *approximate quantity* of data needed. For example: "As a data store, provide 1,000 images of phones with varying backgrounds to train the object detector." This helps the ML team plan for data collection, preprocessing, and management.
*   **Model Stories:** These focus on the ML model itself. They define the *learning goal*, the *type of learning* to be used, the *data source*, and the *expected accuracy*. For example: "As a learned model, detect smartphones in an image using deep learning with an accuracy of at least 70%."

This separation allows the ML team to think and plan in terms that are natural to them—data and models—rather than trying to force their work into the mold of a traditional user story.

#### Redefining Team Organization with the "2-Sprint Ahead" API

To solve the dependency problem, Agile4MLS introduces two critical concepts: the **demo API** and the **2-sprint ahead** rule.

The ML team works two sprints ahead of the SW team specifically on tasks that require integration. In this time, they conduct initial research and define a **demo API**—a placeholder or mock API that simulates the expected input and output of the final ML model.

This simple but brilliant move decouples the teams. The SW team can immediately start building features against the stable demo API, while the ML team gets the time and flexibility it needs to experiment, train, and perfect the real model that will eventually replace the mock one.

To ensure constant alignment, the process also mandates cross-team meetings:
*   **Daily Stand-ups:** A member of the SW team responsible for model integration attends the ML team's daily stand-up. This ensures the SW team is aware of progress and potential changes.
*   **Weekly Joint Meetings:** All members from both teams, along with key stakeholders like the product owner and architects, meet weekly to review progress, discuss major decisions, and ensure everyone is on the same page.

#### The Agile4MLS Process in Action

The entire workflow is visualized in the diagram below. It shows how high-level epics are broken down, assigned to the appropriate team, and managed through separate but coordinated sprints.


![The sprint planning process of Agile4MLS, showing how epics are broken down into ML-intensive and non-ML-intensive features, which are then processed by separate ML and SW teams working in coordinated sprints.](/images/blogpic/agile4mlsleveraging_agile_practices_for_developing_machine_learning_enabled_systems_an_industrial_experience_p4_f1.png)


#### Did It Work? The Key Takeaways

After developing Proktor in just five months using this method, the team conducted a survey with all 21 members involved. The results and key lessons learned were overwhelmingly positive.

*   **Agile for ML is Possible:** By introducing **data stories** and **model stories**, the process successfully adapted agile principles to the ML workflow. One developer noted, "It helped us to plan, review, change, and adapt better, which in turn helped us to create quality products."
*   **Collaboration is King:** The cross-team meetings were crucial. An SW developer noted that the daily meetings helped them "become more and more aware of the gray areas of ML results, and they started to anticipate the changes that may come."
*   **Uncertainty Can Be Managed:** The **2-sprint ahead** concept and the **demo API** were game-changers. An SW team member said, "Earlier, I always waited for the results from the ML team... In the case of Proktor... The ML development created uncertainty or block for the software team development at no point."
*   **Faster, Better Releases:** The project manager remarked that the development pace was significantly higher than in previous projects, proving that the slowness typically associated with ML development could be overcome.

By respecting the different natures of software and machine learning development while building strong communication bridges, **Agile4MLS** provides a clear and effective roadmap for any organization looking to successfully build and deploy ML-enabled systems.