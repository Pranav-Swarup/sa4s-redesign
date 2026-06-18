---
title: "Never Settle: How AdaMLS Teaches AI Systems to Adapt by Switching Models on the Fly"
excerpt: "Modern AI systems often struggle to maintain performance under real-world pressures. Discover AdaMLS, a groundbreaking approach that allows systems to dynamically switch between different AI models, ensuring optimal speed and accuracy no matter the workload."
date: "2023-09-11"
author: "Shubham Kulkarni, Arya Marda, Karthik Vaidhyanathan"
category: "AI/ML"
thumbnail: "/images/blogpic/towards_self_adaptive_machine_learning_enabled_systems_through_qos_aware_model_switching_p4_f1.png"
---

Machine Learning-Enabled Systems (MLS) are becoming the backbone of modern technology, from AI assistants like ChatGPT to sophisticated image recognition services. However, a major hurdle prevents many of these powerful systems from reaching production: they are often brittle. Their performance, or **Quality of Service (QoS)**, can plummet when faced with the unpredictable nature of the real world, such as sudden spikes in user traffic or shifts in data patterns.

Imagine a self-driving car's object detection system. In quiet suburban streets, it needs maximum accuracy to spot pedestrians. But on a high-speed highway, it needs to process information incredibly fast. A single AI model can't be the best at both. This is the classic trade-off between accuracy and speed.

What if a system could intelligently switch between different models—one optimized for accuracy, another for speed—depending on the immediate situation? This is the core idea behind **AdaMLS**, a novel self-adaptation framework presented at the 2023 IEEE/ACM International Conference on Automated Software Engineering. AdaMLS creates a new kind of "ML Model Balancer" that ensures consistent QoS by dynamically switching models to meet real-time demands.

#### The Core Problem: The Speed vs. Accuracy Trade-Off

In machine learning, there's rarely a one-size-fits-all solution. Consider the popular YOLOv5 family of object detection models:
- **YOLOv5n ('nano')**: A small, lightweight model. It's incredibly fast (e.g., 45ms processing time) but has lower accuracy (28 mAP).
- **YOLOv5x ('extra-large')**: A massive, powerful model. It's highly accurate (50.7 mAP) but much slower (766ms processing time).

Deploying just the 'nano' model might fail to detect crucial objects during low-traffic periods, while using the 'extra-large' model could cause dangerous delays and system overload during high-traffic surges. AdaMLS is designed to get the best of both worlds.

#### Introducing AdaMLS: The Architecture of Adaptation

AdaMLS is built upon the well-established **MAPE-K (Monitor-Analyze-Plan-Execute over a Knowledge base)** loop, a standard for creating self-adaptive systems. It cleverly extends this loop to handle the unique challenges of MLS. The system operates in two key phases: an offline learning phase and a runtime adaptation phase.


![The architecture of the AdaMLS system, showing the Learning Engine and the runtime MAPE-K loop.](/images/blogpic/towards_self_adaptive_machine_learning_enabled_systems_through_qos_aware_model_switching_p4_f1.png)


#### Phase 1: The Learning Engine - Doing the Homework Offline

Before the system ever goes live, the **Learning Engine** prepares it for the chaos of the real world.

1.  **Benchmark Models:** It takes a pool of available ML models (e.g., YOLOv5n, YOLOv5s, YOLOv5m, etc.) and runs them on a standard evaluation dataset. It collects detailed performance metrics for each, including accuracy, processing time, and resource consumption.

2.  **Unsupervised Clustering:** This is where AdaMLS gets really smart. It uses **K-Means clustering**, a type of unsupervised learning, to group the test data based on performance attributes like processing time. This helps the system understand that certain types of images are "easy" to process while others are "hard," and it learns how each model behaves on these different clusters.

3.  **Create Adaptation Rules:** Based on this analysis, the engine generates **Confidence Interval (CI) matrices**. These matrices are essentially a cheat sheet, providing statistically likely performance ranges (for metrics like response time and accuracy) for every model on every data cluster. This becomes the **Knowledge** base for the runtime system, allowing it to make informed predictions about how a model switch will impact performance.

#### Phase 2: The MAPE-K Loop - Adapting on the Fly

Once the system is deployed, the MAPE-K loop runs continuously to manage performance.

-   **Monitor:** The system constantly watches vital signs like the incoming request rate, actual system response time, and the confidence score (accuracy) of the current model's predictions.

-   **Analyze:** The **Analyzer** determines if an adaptation is necessary. It compares the current system state to the pre-computed CI matrices from the Knowledge base. For instance, if the request rate (`v`) suddenly spikes beyond the current model's "safe" operating range, the Analyzer flags a problem.

-   **Plan:** If an adaptation is needed, the **Planner** devises a strategy. It consults the CI matrices to find a list of candidate models that can handle the new, higher request rate. From this list, the **Model Selector** picks the best one (`m_best`)—typically the model that offers the highest accuracy while still meeting the speed requirements.

-   **Execute:** The **Executor** carries out the plan. If the Planner has chosen a new model, the Executor seamlessly switches the active ML model. If no switch is needed, the system continues with the current model. This entire loop ensures the system remains autonomous and responsive to changing conditions.

#### Putting AdaMLS to the Test

The researchers evaluated AdaMLS in an object detection system designed to handle a "FIFA98 situation"—a classic benchmark for simulating massive, fluctuating web traffic. They compared AdaMLS against two baselines:
1.  A **static approach** using a single model (YOLOv5n).
2.  A **naive switching approach** that switches models based on simple, hard-coded traffic thresholds.

The results clearly demonstrated the superiority of AdaMLS. As the chart below shows, the naive approach switches models infrequently and somewhat arbitrarily. In contrast, AdaMLS makes hundreds of fine-grained adjustments, constantly optimizing its model choice based on the real-time workload.


![A comparison of model switching behavior between the Naive approach and the AdaMLS approach, showing AdaMLS makes far more frequent and dynamic switches.](/images/blogpic/towards_self_adaptive_machine_learning_enabled_systems_through_qos_aware_model_switching_p4_f1.png)


To quantify success, the team used a **utility metric** that combines penalties for slow response times and low confidence scores. A higher utility score means better overall QoS. Here, AdaMLS was the clear winner.


![A graph showing the cumulative utility score over time. AdaMLS achieves a significantly higher utility score compared to both the Naive approach and the single Nano model.](/images/blogpic/towards_self_adaptive_machine_learning_enabled_systems_through_qos_aware_model_switching_p4_f2.png)


By intelligently balancing speed and accuracy, AdaMLS achieved an overall utility score far surpassing the other methods. Notably, it improved utility by **39%** compared to using the fast-but-less-accurate YOLOv5n model alone, proving its ability to effectively integrate different metrics for an optimal outcome.

#### Why This Matters: The Future of Robust AI

AdaMLS offers a powerful blueprint for engineering the next generation of **Machine Learning-Enabled Systems**. It shows that we don't have to settle for a single, compromised ML model. By building systems with self-adaptation capabilities, we can create AI that is more resilient, efficient, and reliable in production.

This work paves the way for systems that can carry a versatile toolkit of models and automatically select the right one for the job at any given moment, revolutionizing how we deploy AI in mission-critical domains.
