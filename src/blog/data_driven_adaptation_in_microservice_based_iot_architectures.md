---
title: "Smarter IoT: A Data-Driven Architecture for Self-Adapting Microservice Systems"
excerpt: "Modern IoT systems built on microservices are incredibly complex to manage. This paper introduces a novel three-layer architecture that uses machine learning to proactively adapt at the device, microservice, and application levels, ensuring systems remain robust and efficient."
date: "2020-03-16"
author: "Martina De Sanctis, Henry Muccini, Karthik Vaidhyanathan"
category: "Software Architecture"
thumbnail: "/images/blogpic/data_driven_adaptation_in_microservice_based_iot_architectures_p3_f1.png"
---

The Internet of Things (IoT) and **microservice architectures (MSA)** are a natural fit. IoT provides the real-world data, and microservices offer a scalable, flexible way to build the systems that process it. However, this combination introduces significant challenges. How do you manage a system where device resources are constrained, network conditions are variable, user demands are dynamic, and services themselves can fail or become overloaded?

Traditional approaches to **self-adaptation** often fall short. They typically focus on one part of the problem—like the application or the infrastructure—but fail to address the complex, multi-level adaptation needs of a modern IoT system. Researchers from Gran Sasso Science Institute and the University of L'Aquila propose a new solution: a data-driven, self-adaptive architecture that handles uncertainty at every level.

#### The Triple-Layer Challenge of IoT Systems

To understand the problem, consider developing an application for a large public event, like a city-wide science fair. The system needs to provide information on venues, parking, and event booking, using sensors like cameras, beacons, and QR code readers. In this dynamic environment, adaptation challenges arise at three distinct levels:

1.  **Device Level:** A handheld QR code reader used for ticketing has a limited battery. To prolong its life, the system should be smart enough to reduce its data transfer frequency when the battery is low, without manual intervention.
2.  **Microservice Level:** A popular event is announced, and suddenly the "booking" microservice is flooded with requests. The system needs to **proactively** detect this potential overload—perhaps by analyzing camera data on crowd flow—and automatically scale up by adding new instances of the booking service *before* it crashes.
3.  **Application Level:** A user wants to achieve a high-level goal, like "book a ticket for the main exhibition and arrange a taxi to get there." Hard-coding every possible service combination is impossible. The system needs to **reactively** and dynamically compose the right microservices (venue booking + taxi service) to fulfill the user's goal on the fly.

Existing frameworks struggle to manage all three of these concerns in a unified way. This paper introduces an architecture designed specifically for this multi-level challenge.

#### The Solution: A Data-Driven, Multi-Layered Architecture

The proposed architecture is structured into three main layers: **Edge**, **Fog**, and **Cloud**. It intelligently distributes the workload, handling lightweight, time-sensitive tasks closer to the devices and heavyweight analysis in the cloud.


![A high-level overview of the self-adaptive architecture, showing the Edge, Fog, and Cloud layers and their components.](/images/blogpic/data_driven_adaptation_in_microservice_based_iot_architectures_p3_f1.png)


#### #### The Edge and Fog Layers: Handling the Devices

The **Edge Layer** is simply the collection of IoT devices themselves—sensors and actuators. These devices send their sensor data and Quality-of-Service (QoS) data (like battery level and memory consumption) to the Fog Layer.

The **Fog Layer** acts as an intermediary, sitting between the devices and the cloud. Its primary job is to perform lightweight computations and handle **device-level adaptation**. Each `Compute Node` in the fog contains an `Adapter` component. This component uses Machine Learning (ML) models, periodically sent down from the cloud, to predict future device QoS. If the model forecasts a problem (e.g., critical battery drain in the next hour), the Adapter triggers an adaptation plan, such as instructing the device to send data less frequently. This is **proactive adaptation** in action, solving problems before they occur.

#### #### The Cloud Layer: The Brains of the Operation

The Cloud Layer performs the heavyweight computation and manages the system-wide adaptation logic. It is composed of four distinct infrastructure layers.

1.  **Microservice Layer:** This contains the core business logic of the application, implemented as a set of microservices. Critically, it uses a **service-mesh** to monitor the QoS of each service, tracking metrics like traffic, latency, and error rates.

2.  **Management Infrastructure Layer:** This layer is the "actuator" for the microservices. It handles service discovery (routing requests to the correct service instance) and executes adaptation decisions, such as scaling a service up or down.

3.  **Adaptation Infrastructure Layer:** This is the intelligent core of the architecture.
    *   It collects and stores all QoS data from both the Fog Layer (device QoS) and the Management Layer (service QoS) in dedicated data stores.
    *   The **ML Engine** is the key component here. It uses this historical time-series data to train forecasting models, specifically using **LSTM networks** (Long Short-Term Memory), which are excellent for sequence prediction. It creates models to predict the future QoS of both IoT devices and microservices.
    *   The **Context Analyzer** uses these forecast models to look for potential future issues. For example, it might predict that the response time for the booking microservice will exceed its threshold in the next 15 minutes.
    *   The **Decision Maker** then chooses the best adaptation strategy from a predefined set (e.g., "scale microservice," "restart microservice") and passes this decision to the Management Layer for execution.

4.  **Application Infrastructure Layer:** This layer handles **application-level adaptation**.
    *   When a user specifies an abstract goal (like "book an event and transport"), the **User Goal Parser** translates it into a machine-readable format.
    *   The **Service Composer** then acts like a planner. Using the latest QoS data and forecasts from the lower layers, it determines the best combination of available microservices to achieve the user's goal. This dynamically generated workflow is then sent to the user's application, which invokes the necessary services via the API Gateway.

#### Conclusion and Future Outlook

This research presents a comprehensive architecture for building truly **self-adaptive, microservice-based IoT systems**. By blending proactive, ML-driven adaptation at the device and service levels with reactive, goal-driven adaptation at the application level, it offers a robust solution to the complexities of modern distributed systems.

The authors plan to implement this architecture for the science fair use case, using technologies like **Apache Kafka**, **Istio**, **Kubernetes**, and **Keras**. This will allow them to measure its real-world effectiveness in terms of prediction accuracy, energy savings for devices, and the successful achievement of user goals. This work provides a strong blueprint for the next generation of intelligent, resilient IoT systems.