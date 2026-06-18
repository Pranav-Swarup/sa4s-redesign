---
title: "Bridging Two Worlds: The Architectural Blueprint for Modern ML Systems"
excerpt: "Machine learning is more than just an algorithm; it's a fundamental shift in software design. This post dives into the challenges of building robust, scalable ML-powered systems and outlines the new architectural thinking required to bridge the gap between traditional software and data-driven intelligence."
date: "2021-07-07"
author: "Henry Muccini, Karthik Vaidhyanathan"
category: "AI/ML"
thumbnail: "/images/blogpic/software_architecture_for_ml_based_systems_what_exists_and_what_lies_ahead_p2_f1.png"
---

It’s often said that AI is the new electricity. Just as electricity transformed every industry a century ago, artificial intelligence and machine learning (ML) are poised to do the same. But just as harnessing electricity required new infrastructure, grids, and standards, harnessing ML requires a fundamental rethinking of how we build software.

Simply dropping a pre-trained model into an existing application isn't enough. Building a true **ML-based system** introduces a new set of challenges that traditional software architecture practices were never designed to handle. A recent paper by Henry Muccini and Karthik Vaidhyanathan, "Software Architecture for ML-based Systems: What Exists and What Lies Ahead," explores this gap and charts a course for the future.

The core of the problem is that an ML-based system isn't one system; it's two, each with its own language, priorities, and people.

### #### The Two Subsystems in Every ML Application

At a high level, any modern ML-powered application can be viewed as two distinct but interconnected subsystems: a traditional **software subsystem** and a **machine learning subsystem**.


![A high-level view showing the two subsystems—Machine Learning and Software—with their respective stakeholders and concerns, coordinated by a Modern Software Architect.](/images/blogpic/software_architecture_for_ml_based_systems_what_exists_and_what_lies_ahead_p2_f1.png)


1.  **The Software Subsystem:** This is the world of software architects, developers, and testers. They care about components, connectors, APIs, databases, and user interfaces. Their **concerns** revolve around availability, security, fault tolerance, and UI design.
2.  **The Machine Learning Subsystem:** This is the domain of data scientists, ML engineers, and ethics experts. They work with data, algorithms, and models. Their **concerns** are different: model accuracy, data quality, privacy, algorithmic fairness, and model versioning.

The modern software architect sits in the middle, tasked with bridging these two worlds. This challenge became clear to the authors during a project to solve a very tangible problem: the notoriously long queues at the Uffizi Gallery in Florence, Italy.

### #### A Real-World Test: Taming Queues at the Uffizi Gallery

The Uffizi Gallery, one of the world's most famous museums, struggled with visitor queues that could last for hours. The authors' team was tasked with developing an ML-based system to reduce this wait time. The solution involved IoT sensors to monitor crowds, data pipelines for ingestion, and ML models to predict visitor flow and optimize ticketing.

This project was a success, cutting wait times from hours to minutes. But it also exposed the lack of standard practices for architecting such a complex system. The team found themselves navigating uncharted territory, which led them to identify four key areas where our current architectural approach falls short.

### #### The Four Gaps in Architecting for ML

The authors highlight four critical areas that need attention from both researchers and practitioners to create a standard set of practices for building ML systems.

#### 1. We Need New Blueprints: Architecture Frameworks

An **architecture framework** is a set of standard views and conventions used to describe a system's design. Think of classic frameworks like the *4+1 View Model* or the *Zachman Framework*.

*   **What Exists:** These traditional frameworks are excellent for describing software components and their interactions.
*   **What's Missing:** They have no vocabulary for the ML world. They don't account for ML-specific **stakeholders** like Data Scientists or Ethics Experts, nor do they address **concerns** like data quality, model performance, or fairness. We need new viewpoints, such as a *Learning Viewpoint* to describe the ML pipeline and a *Data Viewpoint* to model data flow and transformations.

#### 2. The Process is Broken: Redefining the Architecting Process

The **architecting process** is the "how-to" of creating an architectural solution. This process is fundamentally different for ML systems.

*   **What Exists:** Traditional software development often follows agile methodologies, which are user-centric and focus on delivering features.
*   **What's Missing:** ML development is data-centric and highly experimental. It's an iterative cycle of experimentation, analysis, and model refinement. This creates friction. For example, a design trade-off to improve software performance (like reducing latency) might require using a less accurate ML model, creating a conflict that traditional processes can't easily resolve. We need new methods for analysis, as the probabilistic nature of ML models makes it hard to formally verify system properties.

#### 3. Building Systems That Learn to Adapt: Self-Adaptive Architecting

A **self-adaptive architecture** allows a system to modify itself autonomously to handle uncertainties like resource constraints or component failures. ML introduces a new layer of complexity and opportunity here.

*   **What Exists:** Self-adaptation in traditional software is a well-researched field.
*   **What's Missing:** In ML systems, adaptation flows in two directions:
    1.  **Architectural Adaptation *by* ML:** Using an ML model to drive adaptation in the software subsystem. For instance, an ML model could predict an impending CPU overload and proactively reconfigure the system to handle the load.
    2.  **Architectural Adaptation *for* ML:** The software subsystem must adapt to changes in the ML subsystem. If a new, more accurate but computationally heavier model is deployed, the software components consuming it must adapt to handle its resource demands and latency. The architecture needs to support this dynamic, automated switching between different model versions.

#### 4. Designed for Change: Embracing Architecture Evolution

**Architecture evolution** refers to how an architecture changes over time. For ML systems, evolution is not an occasional event; it's a constant state of being.

*   **What Exists:** Traditional software evolution is often driven by new feature requests or technology updates.
*   **What's Missing:** ML systems are driven by two powerful forces:
    1.  **Data-Induced Evolution:** The data that feeds the system changes over time (a phenomenon known as **data drift**), which can degrade model performance. The architecture must be designed to continuously collect, filter, and process new data to retrain models.
    2.  **ML Algorithm-Induced Evolution:** The choice of the ML algorithm or model itself is a primary driver of the architecture. If the team decides to switch from a simple linear model to a complex deep learning network, the entire data pipeline and serving infrastructure may need to be redesigned.

### #### What Lies Ahead: Towards a Unified Architecture

The separation between the "software subsystem" and the "ML subsystem" is a temporary model to help us understand the current challenges. The ultimate goal is to erase that line.

The future of **software architecture for ML-based systems** lies in creating unified frameworks, processes, and tools that treat intelligent components not as external black boxes but as first-class citizens of the architecture. The role of the software architect will evolve to that of a coordinator who understands both worlds—fluent in both programmatic and probabilistic thinking—and can design systems that are not just built, but are built to learn and evolve.