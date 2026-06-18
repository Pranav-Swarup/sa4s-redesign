---
title: "Automating Architectural Decisions: Do LLMs Make the Cut?"
excerpt: "Software architects spend countless hours documenting design choices. A new study explores if LLMs like GPT-4 can automate this process, comparing zero-shot, few-shot, and fine-tuning methods to see if AI is ready to draft Architecture Decision Records."
date: "2024-05-15"
author: "Rudra Dhar, Karthik Vaidhyanathan, Vasudeva Varma"
category: "AI/ML"
thumbnail: "/images/blogpic/can_llms_generate_architectural_design_decisions___an_exploratory_empirical_study_p4_f1.png"
---

Documenting software architecture is one of those critical tasks that everyone agrees is important but often gets pushed aside. The process is time-consuming, and maintaining consistency is a challenge. A key artifact in this process is the **Architecture Decision Record (ADR)**, a document that captures the "why" behind significant design choices.

Given the recent explosion in the capabilities of Large Language Models (LLMs), a natural question arises: Can we use AI to lighten this documentation load? Can an LLM take the context of a design problem and generate a coherent, accurate ADR?

A recent empirical study by researchers from IIIT Hyderabad dives deep into this question. They explore the feasibility of using models like GPT and T5 to generate ADRs, providing a clear-eyed look at what works, what doesn't, and where the technology is heading.

#### What are Architecture Decision Records (ADRs)?

Before we dive into the experiment, let's quickly recap what an ADR is. An ADR is a short text document that captures a single architectural decision. It typically includes:

*   **Context:** The problem, forces, and constraints at play. What is the issue we need to solve?
*   **Decision:** The chosen solution. What did we decide to do?
*   **Consequences:** The expected outcome of the decision, including trade-offs.

The goal of this study is to see if an LLM can be given the **Context** and successfully generate the corresponding **Decision**.


![An example showing the Context and Decision components of an ADR.](/images/blogpic/can_llms_generate_architectural_design_decisions___an_exploratory_empirical_study_p4_f2.png)


#### The Experiment: Putting LLMs to the Test

The researchers designed a comprehensive study to evaluate different LLMs and prompting strategies. They gathered 95 real-world ADRs from public GitHub repositories and tested a wide range of models, from the massive GPT-4 to smaller, open-source alternatives like Flan-T5.


![A flowchart of the study design, from goal identification to analyzing results.](/images/blogpic/can_llms_generate_architectural_design_decisions___an_exploratory_empirical_study_p4_f1.png)


The core of the experiment involved three popular methods for interacting with LLMs:

1.  **Zero-Shot Prompting:** Simply giving the model the `Context` and asking it to generate the `Decision` without any prior examples.
2.  **Few-Shot Prompting:** Providing the model with a couple of complete `Context`-`Decision` examples in the prompt before giving it the target `Context` to work on.
3.  **Fine-Tuning:** Taking a pre-trained model and further training it on a specific dataset of ADRs to specialize its capabilities for this task.

The quality of the generated text was primarily measured using **BERTScore**, a metric that evaluates semantic similarity rather than just exact word matches, making it well-suited for this kind of task.

#### The Key Findings: How Did the LLMs Perform?

The results, summarized in the chart below, reveal a nuanced picture of the current capabilities of LLMs for this task. The chart shows the BERTScore (F1) for various models, where a higher score is better.


![A bar chart comparing the BERTScore (F1)
 of various LLMs across 0-shot, few-shot, and fine-tuning methods.](/images/blogpic/can_llms_generate_architectural_design_decisions___an_exploratory_empirical_study_p8_f1.png)

##### Finding 1: Out-of-the-Box Performance (Zero-Shot)

In a zero-shot setting, **GPT-4** stands out as the clear winner, generating the most relevant and accurate decisions. It correctly adheres to the ADR format and produces pertinent content. However, even the best-performing model falls short of being able to generate a comprehensive, human-level decision autonomously. Smaller models like the GPT-2 series and T5 struggle significantly in this setting.

**Takeaway:** If you need a quick, out-of-the-box solution and have access to the API, GPT-4 is a solid choice for assisting in ADR generation, but expect to edit the output.

##### Finding 2: The Power of a Few Examples (Few-Shot)

The most interesting finding comes from the few-shot results. Here, the researchers found that **GPT-3.5 (`text-davinci-003`) with a few-shot prompt achieved the same performance as GPT-4 in the zero-shot setting**.

This is a powerful insight: by providing just a couple of good examples, a smaller, more cost-effective model can match the performance of its more powerful (and expensive) successor. For other models, the results were mixed, with few-shot prompting sometimes even decreasing performance.

**Takeaway:** Few-shot prompting can be a cost-effective strategy to get high-quality results from slightly older or smaller API-based models.

##### Finding 3: The Value of Specialization (Fine-Tuning)

For organizations concerned with data privacy, security, or cost, sending proprietary context to a third-party API is a non-starter. This is where fine-tuning smaller, locally-hostable models comes in.

The study shows that fine-tuning works remarkably well. A fine-tuned **Flan-T5-base** model (with only 248 million parameters) produced results comparable to the massive GPT-4 (0-shot) and GPT-3.5 (few-shot). These smaller models can be run on a company's own servers, mitigating privacy risks.

**Takeaway:** If you need an in-house solution, fine-tuning a smaller model like Flan-T5 offers a viable, high-performance alternative to relying on large, cloud-based LLMs.

#### What Do the Generated Decisions Look Like?

The paper provides concrete examples of the generated text, which clearly illustrates the performance differences. Compared to the actual human-written decision, GPT-4's zero-shot output is relevant and well-structured. The few-shot `text-davinci-003` output is also very strong. The fine-tuned `Flan-T5-small` model captures the core idea but is less detailed.


![A comparison of the actual human-written decision versus decisions generated by GPT-4 (0-shot)
, text-davinci-003 (few-shot), and Flan-T5 (fine-tuned).](/images/blogpic/can_llms_generate_architectural_design_decisions___an_exploratory_empirical_study_p8_f1.png)

#### Conclusion: Is AI Ready to Be a Software Architect?

Not quite. The study concludes that LLMs, in their current state, cannot be relied upon for fully autonomous ADR generation. They often fail to capture the full context or provide comprehensive reasoning, meaning **human oversight remains essential**.

However, the research clearly demonstrates that LLMs are incredibly powerful **assistants** for this task. They can produce a solid first draft, saving architects time and effort.

The choice of model and method depends on your needs:
*   **For quick assistance with no privacy concerns:** Use GPT-4 (zero-shot) or the more economical GPT-3.5 (few-shot).
*   **For an in-house, privacy-preserving solution:** A fine-tuned model like Flan-T5 is a surprisingly effective and competitive option.

This exploratory study paves the way for future work, including fine-tuning larger models and incorporating more complex context like design diagrams and codebase analysis. While AI may not be taking over the architect's job tomorrow, it's already proving to be a valuable co-pilot.
