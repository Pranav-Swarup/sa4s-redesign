const e=`---
date: "22 February 2026"
headline: "CALM: Self-Adaptive SLM Orchestration Accepted at SEAMS 2026"
sourceUrl: "https://www.linkedin.com/feed/update/urn:li:activity:7431368154003623936"
---

![Post Image](https://media.licdn.com/dms/image/v2/D5622AQEKou1Zsqshxw/feedshare-shrink_800/B56ZyGF9ISKkAg-/0/1771776234555?e=2147483647&v=beta&t=sXjePmQA3aVmjFRG6TIk0lm5xgFEJnXwJl55xcoOR5s)

The SA4S research group has achieved a significant milestone with the acceptance of their latest research paper, [**CALM: A Self-Adaptive Orchestration Approach for QoS-Aware Routing in Small Language Model based Systems**](https://lnkd.in/gZG7xkZC), at **SEAMS 2026**, the International Conference on Software Engineering for Adaptive and Self-Managing Systems.

The work, led by IIIT Hyderabad undergraduate honors students **Divyansh Pandey** and **Hemang Jain** along with **Karthik Vaidhyanathan**, explores sustainable alternatives to Large Language Models (LLMs) by utilizing fleets of Small Language Models (SLMs).

### 🔬 What is CALM?

CALM introduces a self-adaptive orchestration framework that avoids the environmental and computational costs of massive models by intelligently managing smaller, domain-specific ones. Key features include:

*   **Semantic Routing:** Directs queries to the most relevant SLM based on semantic similarity.
*   **Intelligent Scheduling:** Manages GPU contention using advanced scheduling techniques like FIFO and shortest-time-first.
*   **Memory Management:** Implements efficient caching strategies (e.g., LRU) for model subsets.
*   **Dynamic Adaptation:** Continuously monitors latency, energy, and confidence to adapt routing decisions in real-time.

### 📊 Performance and Sustainability Impact

Compared to traditional single LLM baselines, CALM demonstrates significant improvements in both performance and sustainability:

*   ⚡ **40–50% lower latency**
*   🔋 **50–60% lower energy consumption**
*   💾 **Up to 45% lower VRAM usage**
*   📈 **Higher domain-specific confidence**

This research highlights that performance in modern AI systems is as much about orchestration and architecture as it is about model size. By focusing on smart scheduling and memory management, CALM offers a practical, sustainable approach for production-ready AI systems in domains such as healthcare, finance, and legal services.

[**Read the paper**](https://lnkd.in/gZG7xkZC) | [**Access the code**](https://lnkd.in/gdEDUprM)
`;export{e as default};
