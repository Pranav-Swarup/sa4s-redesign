---
title: "LEAF: A Layered Emission Assessment Framework for Cloud Deployments"
excerpt: "Introducing LEAF, a formal framework for quantifying the carbon footprint of cloud deployments. Accepted in IEEE Software Special Issue: Green, Clean, Software Sustainability."
date: "2025-12-20"
author: "Prakhar Singhal, Shaunak Biswas, Akhila Matathammal, Karthik Vaidhyanathan"
category: "Sustainable Computing"
thumbnail: "/images/blogpic/leaf_framework.png"
---

We are excited to introduce **LEAF (Layered Emission Assessment Framework)**, a new approach to estimating the carbon footprint of cloud applications before deployment.

<img src="/images/blogpic/leaf_framework.png" alt="LEAF Framework Overview" style="width: 100%; border-radius: 8px; margin-bottom: 2rem;" />

### The Challenge
As cloud computing continues to grow, so does its environmental impact. However, estimating the energy consumption and carbon emissions of complex cloud architectures *before* they are deployed remains a significant challenge. Existing tools often rely on post-deployment monitoring or simplistic estimates.

### Our Solution
LEAF proposes a formal method for quantifying the carbon footprint of cloud deployments using **Infrastructure as Code (IaC)**. By integrating a layered framework with **Petri net simulations**, LEAF allows developers to evaluate energy consumption and carbon emissions during the design phase.

Key features include:
*   **IaC Integration**: works directly with Terraform configurations.
*   **Layered Framework**: separates resource definitions, energy models, and workload simulations.
*   **Petri Net Simulation**: models token flows through the infrastructure to estimate latency and energy usage.

### Case Study
We demonstrated LEAF's capabilities by modeling a serverless application on **Google Cloud Platform (GCP)**, incorporating components like Cloud API Gateway, Cloud Functions, and Cloud SQL. The simulation provided detailed estimations for latency, energy consumption, and carbon emissions, helping to identify "hotspots" in the architecture.

Read the full paper on [TechRxiv](https://www.techrxiv.org/users/936505/articles/1306787-leaf-a-layered-emission-assessment-framework-for-cloud-deployments).
