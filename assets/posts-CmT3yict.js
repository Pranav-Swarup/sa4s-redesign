import{c as l,r as d,j as h,S as m,a as g,w as u}from"./index-DO5rvytO.js";import{f as p}from"./index-Bx93kj1L.js";/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ge=l("User",[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]]),f=u("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",{variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground hover:bg-destructive/90",outline:"border border-input bg-background hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-10 px-4 py-2",sm:"h-9 rounded-md px-3",lg:"h-11 rounded-md px-8",icon:"h-10 w-10"}},defaultVariants:{variant:"default",size:"default"}}),y=d.forwardRef(({className:t,variant:n,size:e,asChild:a=!1,...i},s)=>{const c=a?m:"button";return h.jsx(c,{className:g(f({variant:n,size:e,className:t})),ref:s,...i})});y.displayName="Button";const v=`---
title: "Architecting the Future: Software Architecture for Machine Learning-Based Systems"
excerpt: "The intersection of software architecture and machine learning presents unique challenges. This blog post delves into existing practices for architecting ML-based systems, identifies key areas needing attention, and explores what lies ahead for the community to better define these practices."
date: "2021-03-16"
author: "Henry Muccini, Karthik Vaidhyanathan"
category: "AI/ML"
thumbnail: "/images/blogpic/2103.07950v2_figure1.png"
---

Modern software systems are awash in data, leading to an increasing reliance on **Artificial Intelligence (AI)** and especially **Machine Learning (ML)** to generate actionable insights. From autonomous vehicles to personalized recommendations, ML-powered applications are transforming industries. However, this marriage of software and data brings forth new architectural challenges.

#### The Problem

Traditional software architecture practices often fall short when applied to ML-based systems. The development practices, deployment strategies, and data quality concerns associated with ML introduce complexities that existing architectural frameworks struggle to address.  Architecting these systems requires careful consideration of data pipelines, algorithm selection, model management, and ethical considerations.

#### The Solution

This research paper explores the software architecture of ML-based systems, focusing on the architectural practices for better developing ML systems. It identifies four key areas that need attention from both ML and software practitioners to define a standard set of practices. The authors also present a case study from the Uffizi Gallery in Italy, where an ML-based system was built to solve queuing challenges.

#### How It Works (Technical Deep Dive)

The authors highlight the differences between traditional software systems and ML-based systems.  The core difference lies in the two distinct subsystems that make up a typical ML-based application:

*   **Machine Learning Subsystem:** This is where data, algorithms, and models reside. Key stakeholders include data scientists, ML developers, and ethics experts. Concerns revolve around model accuracy, data quality, privacy, and fairness.
*   **Software Subsystem:** This encompasses the components, connectors, and interactions that make up the traditional software application. Stakeholders include software developers, database administrators, and testers. Concerns are related to UI design, testing, database choices, availability, fault tolerance, and security.

![High-level view of an ML-based Software System](/images/blogpic/2103.07950v2_figure1.png)

The role of the architect is to bridge these two subsystems and coordinate between teams with vastly different skillsets and concerns. The authors dive deep into four key areas where existing practices are lacking:

1.  **Architecture Framework (AF):** Current frameworks don't adequately support data and algorithms. Novel frameworks are needed to consider ML-specific stakeholders, concerns (ethics, fairness), and viewpoints (learning viewpoint, data viewpoint).
2.  **Architecting Process:** The iterative nature of ML development requires constant communication between software and ML teams. This impacts design, analysis, realization, and representation, leading to a need for better management and documentation of design decisions.
3.  **Self-Adaptive Architecting:**  ML-based systems face unique uncertainties from both software and ML components.  Self-adaptation techniques are needed to handle these uncertainties, including architectural adaptation *by* ML (using ML to predict uncertainties) and architectural adaptation *for* ML (adapting algorithms to improve performance).
4.  **Architecture Evolution:**  ML-based systems are constantly evolving due to new data and better algorithms. Architects need to consider data-induced evolution (changes in data pipelines) and ML algorithm-induced evolution (adapting models for performance or accuracy).

#### Key Results

The paper highlights the need for a new architectural approach that merges the concerns of software engineering with machine learning. The case study at the Uffizi Gallery demonstrates how an ML-based system reduced waiting times. The lessons learned from this experience are generalized to provide a foundation for future research and development in this area.

#### Why It Matters (Implications)

By outlining the challenges and potential solutions in the software architecture of ML-based systems, this research contributes to:

*   **Standardization of practices:**  Establishes a common ground for architecting intelligent systems.
*   **Improved collaboration:** Promotes better understanding and communication between software and ML teams.
*   **More robust systems:**  Facilitates the creation of ML-based systems that are reliable, ethical, and adaptable to changing conditions.

The authors see the future software architect as an "ML-aware software architect," someone who can seamlessly integrate software and machine learning components into a unified system.

#### Conclusion

The integration of machine learning into software systems presents a new set of architectural challenges. This paper sheds light on these challenges and offers a roadmap for developing better architecting practices, emphasizing the need for new frameworks, processes, self-adaptation techniques, and evolution strategies. By addressing these areas, we can build more robust, ethical, and adaptable ML-powered applications that benefit society.
`,w=`---
title: "Enhancing Cultural Experiences with Digital Twins and Indoor Navigation"
excerpt: "Visiting cultural heritage sites can be overwhelming without proper guidance. This research introduces a Digital Object Space Management service (DOSM) that creates digital twins of these sites, enabling navigation, localization, and customized experiences for visitors through IoT and 3D visualization."
date: "2021-08-30"
author: "Karthik Vaidhyanathan, Antonio Bruno, Eleonora Mendola, Filippo Mignosi, Mahyar T. Moghaddam, Henry Muccini, Monica Nesi"
category: "AI/ML"
thumbnail: "/placeholder.svg"
---

Cultural heritage sites are invaluable treasures, attracting millions of visitors each year. However, the experience can sometimes be overwhelming, leaving visitors struggling to find specific exhibits, understand their context, or even navigate the space effectively. Imagine wandering through a vast museum, unsure where to find your favorite artwork or the historical significance of the artifacts around you.

#### The Problem

Traditional cultural heritage sites often lack adequate support for visitors. This includes:

*   **Locating contents of interest:** Difficulty in finding specific exhibits or points of interest.
*   **Discovering information:** Limited access to detailed information about specific items.
*   **Navigation challenges:** Difficulty navigating the site, especially in large or complex spaces.
*   **Personalized Experience:** Creating custom routes based on personal preference.

These limitations can significantly detract from the visitor experience, preventing them from fully appreciating the rich cultural heritage on display.

#### The Solution

Researchers from the University of L'Aquila and the University of Southern Denmark have developed a novel **Digital Object Space Management (DOSM)** service as part of the **VASARI** project (an initiative aimed at creating immersive and inclusive user experiences at cultural heritage sites). This service creates a **digital twin** of a physical cultural site, enhancing the experience for visitors. A digital twin is a digital representation of a physical object or system.

The key benefits include:

*   **3D Visualization:** Generating a detailed 3D model of the site.
*   **Navigation:** Providing real-time location tracking and navigation assistance using **Internet of Things (IoT)** devices.
*   **Localization:** Helping visitors pinpoint their location and find specific exhibits.
*   **Customization:** Allowing staff to easily add and modify information within the digital twin.

#### How It Works (Technical Deep Dive)

The DOSM service works through a combination of three key processes:

1.  **Digital Twin Generation**
    *   **Panoramic Scanning:** Capturing panoramic images of the physical space using a camera, rotating 360 degrees.
    *   **2D to 3D Conversion:** Converting the 2D panoramic images into a 3D representation using technologies like Matterport and e-Building APIs. This involves translating the 2D image coordinates into 3D (x, y, z) coordinates. Imagine taking a flat picture of a room and then using software to "inflate" it into a full 3D model.
    *   **POI Tagging:** Tagging points of interest (**POIs**) and cultural assets on the 3D map using Mattertags, which allows admins to embed more information such as the name and a description of an asset. Each tag contains x,y,z coordinates of the physical asset.

2.  **Navigation and Localization**
    *   **POI Device Mapping:** Associating each cultural asset with an IoT device, such as a **Bluetooth Low Energy (BLE)** beacon.
    *   **Visitor Tracking:** Using signals from the BLE beacons to determine the visitor's position within the site. This involves triangulation techniques to calculate the distance between the visitor and the beacons.
    *   **Path Generation:** Generating a navigation path based on the visitor's location, preferences, and the layout of the site. This involves creating a navigation graph of the site and applying algorithms like Dijkstra's algorithm to find the shortest path.

#### Key Results

The paper focuses on the service's architecture and implementation details rather than specific quantitative results. However, the authors outline several engaging scenarios where the DOSM service can be used:

*   A prospective visitor can use a mobile app to explore a 3D map of the heritage site before their visit, bookmark assets, and read about them.
*   During the visit, the app provides a 3D immersive view of the site, tracks the visitor's real-time location, and generates a navigation path connecting their preferred assets.
*   The app sends notifications when the visitor approaches an asset, providing detailed information.
*   Heritage site administrators/staff can easily manage the digital representation of the site, add/modify/remove cultural assets, and update information.

#### Why It Matters (Implications)

The DOSM service offers several significant implications for the cultural heritage sector:

*   **Enhanced Visitor Experience:** Improved navigation, access to information, and personalized experiences lead to greater visitor satisfaction.
*   **Increased Accessibility:** Digital twins can make cultural heritage sites more accessible to people with disabilities or those who cannot physically visit the site.
*   **Data-Driven Insights:** The collected data can be used to understand visitor behavior and optimize the layout and presentation of exhibits.

Limitations include the cost and complexity of implementing the system, particularly the need for accurate 3D scanning and IoT infrastructure. Future directions include exploring the use of augmented reality (AR) to overlay digital information onto the real-world environment.

#### Conclusion

The Digital Object Space Management (DOSM) service presented in this paper offers a promising approach to enhancing cultural experiences. By leveraging digital twin technology, IoT, and 3D visualization, this service has the potential to transform how visitors interact with cultural heritage sites, making them more accessible, engaging, and informative.
\`\`\`
`,b=`---
title: "Architecture Design for Human-Driven Systems: Balancing Quality of Experience and Quality of Service"
excerpt: "This research addresses the challenge of designing sustainable socio-technical systems by incorporating human behavior into architectural design. They propose a novel approach that combines agent-based social simulation (ABSS) with architectural models, enabling the selection of optimal system configurations that enhance both human Quality of Experience (QoE) and system Quality of Service (QoS)."
date: "2021-09-21"
author: "Mahyar T. Moghaddam, Moamin B. Abughazala, Vittorio Cortellessa, Antinisca Di Marco, Henry Muccini"
category: "Software Engineering"
thumbnail: "/placeholder.svg"
---

Imagine visiting a museum during peak season. The long lines, crowded galleries, and difficulty navigating can negatively impact your experience. Simultaneously, museum staff need to efficiently manage crowds, monitor environmental conditions, and ensure the safety of visitors and artwork. Designing systems that balance these competing requirements is a complex challenge. This paper tackles this problem head-on by proposing a human-oriented architecture design approach for socio-technical systems.

#### The Problem

Traditionally, architectural design decisions are primarily driven by technical considerations, often overlooking the critical role of human behavior and its impact on the overall system's success. There's a need to integrate human characteristics, intentions, and their quality of experience (**QoE**) with the system's goals and quality of service (**QoS**). In essence, how can we build systems that are both technically efficient *and* provide a positive experience for the people interacting with them?

#### The Solution

The researchers propose a comprehensive approach that combines **agent-based modeling (ABM)**, specifically agent-based social simulation (**ABSS**), with architectural models generated through a model-driven engineering approach. This integration allows for simulating various scenarios and system configurations to identify the optimal solution that maximizes both human QoE and system QoS. The core idea is to understand human behavior within the system and use that knowledge to guide architectural design choices.

#### How It Works (Technical Deep Dive)

The methodology consists of four key stages:

1.  **Agent Modeling and Simulation:** This stage focuses on modeling humans and the environment as interacting agents.  ABSS is used to simulate human behavior, capturing aspects like movement, social interactions, and responses to the environment. In the paper, the authors use PedSim for simulating IoT environment and moving agents.
2.  **Agent-IoT Composition:** The simulation results from the first stage are then used to generate data relevant to the Internet of Things (**IoT**) simulation. This step bridges the gap between human behavior and the technical infrastructure.
3.  **IoT Modeling and Simulation:**  Different architectural models and configurations of the IoT system are modeled and simulated using data from the previous stage. The authors utilized their CAPS modeling framework to model software, hardware, and physical space, and CupCarbon to simulate the IoT environment. This allows exploring different hardware/software configurations for the system.  For example, different numbers of sensors in the museum or varying network bandwidth.
4.  **Analysis:** This stage evaluates the IoT simulation results based on pre-defined QoS and QoE goals set by stakeholders. A "trade-off score" is calculated using a utility metric, allowing for identifying the optimal architectural model and configuration that balances QoS and QoE. This score is calculated as: \`ts = Ws * Qs + We * Qe\`, where \`Ws\` and \`We\` are weights given to QoS and QoE respectively, and \`Qs\` and \`Qe\` are piece-wise functions capturing the satisfaction of QoS and QoE goals.

#### Key Results

The approach was applied to a real-world case study: crowd management at the Uffizi Galleries in Florence, Italy. By simulating different scenarios, the researchers were able to identify the optimal architectural model and IoT configuration to improve both the visitor experience (QoE) and the efficiency of the system (QoS). For example, they found that in certain scenarios prioritizing QoE, a configuration with 1 counter at the entrance, 3 counters at the exit, and a mix of 5 cameras and 4 RFID readers in corridors yielded the best results. These findings demonstrate the practical applicability and value of their proposed approach.

#### Why It Matters (Implications)

This research highlights the importance of incorporating human behavior into architectural design for socio-technical systems. By using ABM and ABSS, architects can better understand the impact of different design choices on both system performance and user experience. This approach can be applied to a wide range of applications, including smart cities, healthcare systems, and transportation networks.  The limitation of this work is that it is applied to the Uffizi Galleries crowd management system. In future work, the researchers plan to evolve this approach into a tool to better design socio-technical systems.

#### Conclusion

This paper presents a valuable approach for designing human-centric systems by integrating human behavior modeling with architectural design. The proposed methodology enables architects to make informed decisions that optimize both QoS and QoE, leading to more sustainable and user-friendly systems.

Original Paper Link: http://arxiv.org/ps/2109.10073v1
\`\`\`
`,T=`---
title: "AdaMLS: Towards Self-Adaptive Machine Learning-Enabled Systems with QoS-Aware Model Switching"
excerpt: "Machine Learning-Enabled Systems (MLS) face challenges due to run-time uncertainties affecting Quality of Service (QoS).  AdaMLS introduces a novel self-adaptive approach, utilizing lightweight unsupervised learning for dynamic model switching, ensuring consistent QoS in the face of these uncertainties."
date: "2023-08-19"
author: "Shubham Kulkarni, Arya Marda, Karthik Vaidhyanathan"
category: "AI/ML"
thumbnail: "/images/blogpic/2308.09960v1_main.png"
---

Machine learning (ML) is revolutionizing various aspects of technology, from chatbots to self-driving cars. These advancements have led to the rise of **Machine Learning-Enabled Systems (MLS)**. However, deploying and maintaining these systems in real-world environments presents significant challenges. Let's dive into how researchers are addressing these challenges with a new approach called AdaMLS.

#### The Problem

One of the major hurdles in productionizing MLS is dealing with run-time uncertainties. These uncertainties stem from various sources:
*   **ML Models:** Model performance can fluctuate due to factors like input data quality and algorithm complexity.
*   **Software Components:** Unstable software components can introduce unexpected delays or errors.
*   **Environmental Factors:** Changes in infrastructure cost, energy consumption, or system usage can affect overall performance.

These uncertainties directly impact the **Quality of Service (QoS)**, leading to inconsistent user experiences and potentially system failures. Traditional adaptation techniques often fall short in addressing these complex scenarios in MLS.

#### The Solution

This paper introduces **AdaMLS**, a novel self-adaptation approach designed to manage uncertainties related to ML models.  The core idea is to use multiple models and dynamically switch between them based on QoS requirements. AdaMLS extends the traditional **MAPE-K** (Monitor, Analyze, Plan, Execute, Knowledge) loop for continuous MLS adaptation, ensuring optimal performance in dynamic environments. It leverages **lightweight unsupervised learning** for efficient and accurate model switching.

#### How It Works (Technical Deep Dive)

AdaMLS introduces the concept of an **ML Model Balancer**. This balancer dynamically evaluates and switches between different models, with varying speed and accuracy tradeoffs to optimize the QoS.

Here's a breakdown of how AdaMLS works:

1.  **Monitoring:** AdaMLS continuously monitors model and system parameters, such as processing time, confidence scores, and resource utilization.
2.  **Analyzing:** The system analyzes the monitored data to detect potential QoS violations.  It uses statistical techniques, like **confidence intervals**, to identify significant deviations from expected behavior.
3.  **Planning:** Based on the analysis, AdaMLS determines the best course of action, which might involve switching to a different model. It uses lightweight unsupervised learning (**K-Means clustering**) to group models based on performance attributes. This clustering allows for dynamic switches to select models based on the specific QoS subsets.
4.  **Executing:** AdaMLS executes the chosen adaptation strategy, such as switching to a faster model during high-traffic periods or a more accurate model during quieter periods.
5.  **Knowledge:**  All the monitoring, analysis, planning, and execution steps are recorded in a knowledge base. This knowledge base is used to improve future adaptation decisions.  The Knowledge (K) base is primarily a repository divided into three sections: the Log Repository, the Adaptation Rule Repository, and the System Metrics Repository.  The Log Repository stores system logs, including vital KPIs. The Adaptation Rule Repository houses the CI matrix generated by the LE, acting as a set of adaptation rules for the Planning phase. Lastly, the System Metrics Repository keeps track of various system metrics.

#### Key Results

The researchers evaluated AdaMLS using an object detection system as a prototype. The system was tested in a simulated environment with varying request rates.  The results showed that AdaMLS effectively balances system and model performance. It surpasses both naive strategies and individual models in terms of QoS.

Notably, AdaMLS achieved:

*   Decreased average response time.
*   Reduced the occurrence of penalties associated with response time and confidence.
*   Increased overall utility (a measure of effectiveness and efficiency).

![Utility Function Over Requests processed](/images/blogpic/2308.09960v1_figure3.png)
**Figure 3:** AdaMLS achieves a higher utility over time compared to a naive approach and a single model.

#### Why It Matters (Implications)

AdaMLS represents a significant step towards building truly self-adaptive MLS.  By dynamically switching between models, it can maintain optimal performance in the face of changing conditions. This has several important implications:

*   **Improved Reliability:**  MLS can become more robust and less prone to failures due to unexpected changes.
*   **Enhanced User Experience:**  Users can experience more consistent and reliable service.
*   **Reduced Operational Costs:** By adapting to changing resource availability, MLS can optimize resource utilization and reduce costs.

While AdaMLS shows promising results, there are also limitations to consider:

*   The current implementation focuses on a specific type of ML task (object detection). Further research is needed to evaluate its effectiveness in other domains.
*   The choice of clustering algorithm and adaptation strategies can impact performance. More research is needed to identify the best approaches for different scenarios.

Future directions include exploring a diverse range of learning techniques and model-switching strategies, broadening its application to different domains, and improving the environmental and economic sustainability of MLS.

#### Conclusion

AdaMLS offers a valuable contribution to the field of self-adaptive MLS. By leveraging lightweight unsupervised learning for dynamic model switching, it provides a practical approach for managing run-time uncertainties and ensuring consistent QoS.  This work paves the way for more robust, reliable, and cost-effective MLS deployments in the future.

**Link to the GitHub Repository:** [https://github.com/sa4s-serc/AdaMLS](https://github.com/sa4s-serc/AdaMLS)
`,k=`---
title: "RLabs: Engineering Affordable End-to-End Remote Labs with IoT-Based Retrofitting"
excerpt: "This paper introduces a new low-cost and scalable remote labs (RLabs) solution, built by retrofitting Internet of Things (IoT) components to traditional laboratory equipment. The solution includes two use case experiments - Vanishing Rod and Focal Length - and is qualitatively evaluated against seven non-functional attributes including affordability, portability, and usability."
date: "2024-02-08"
author: "K. S. VISWANADH, A. GUREJA, N. WALCHATWAR, R. AGRAWAL, S. SINHA, S. CHAUDHARI, K. VAIDHYANATHAN, V. CHOPPELLA, P. BHIMALAPURAM, H. KANDATH, and A. HUSSAIN"
category: "Education"
thumbnail: "/images/blogpic/2402.05466v1_main.png"
---

## Introduction
Access to quality education, especially in science and engineering fields, often hinges on hands-on laboratory experience. However, factors like inadequate funding, teacher shortages, and limited resources, particularly in developing countries and rural areas, create significant barriers. This research explores how **remote labs** can democratize access to practical science education.

## The Problem
Traditional remote labs, while offering accessibility advantages, often face scalability issues and high costs, making them difficult to implement widely, especially in resource-constrained environments. The problem this paper addresses is how to create a **low-cost, scalable, portable, and user-friendly remote laboratory solution** that can be easily deployed and accessed in diverse settings.

## The Solution
The research proposes **RLabs**, an end-to-end remote laboratory system based on **IoT-based retrofitting**. This approach involves adapting existing laboratory equipment with inexpensive IoT components to create remote access capabilities. The solution also includes a sophisticated software architecture supporting scalability, hardware compatibility, and automated testing, all designed with cost-effectiveness in mind. The paper introduces the development of two use case experiments (Vanishing Rod and Focal Length), together with a software platform that are qualitatively evaluated against seven NFAs and user feedback.

## How It Works (Technical Deep Dive)
RLabs is built around a few core principles:

1.  **IoT-Based Retrofitting:** Existing lab equipment is enhanced with sensors, actuators, and microcontrollers (like **ESP32** and **Raspberry Pi**) to enable remote control and data acquisition.
2.  **Modular Design:** The hardware setups are designed to be easily assembled and disassembled, promoting portability and allowing for future modifications.
3.  **Software Architecture:** This crucial component features:
    *   A web-based interface for user interaction.
    *   A backend server managing user requests and data.
    *   An interoperability layer facilitating communication between various hardware and software components.
    *   A **Peer-to-Peer (P2P)** video streaming architecture.
    *   Automated testing suite to verify experiment functionality using **Computer Vision (CV)** algorithms.

For example, the **Vanishing Rod experiment** uses stepper motors to control the vertical movement of glass rods in beakers of oil and water. A camera captures the experiment, and the video is streamed to the user via the P2P architecture. Users adjust the rod positions via the web interface, observing the change in visibility of the rods in real-time.

\`![Ray diagram of light entering different surfaces. Visibility of glass rods when dipped in beakers containing water and oil separately](/images/blogpic/2402.05466v1_figure2.png)\`

## Key Results
The research demonstrates several significant outcomes:

*   **Affordability:** The RLabs setups were significantly cheaper to build than traditional remote labs or purchasing new equipment. The miniaturized versions of the Vanishing Rod and Focal Length experiments resulted in cost reductions of 41% and 24%, respectively.
*   **Portability:** Miniaturized designs drastically reduced the weight and volume of the setups, making them easily transportable.
*   **Scalability:** The modular software architecture and the adoption of **P2P** video streaming allowed for efficient scaling of the system to accommodate multiple users.
*   **Usability:** User feedback indicated a positive learning experience, with high scores for ease of use, clarity of streamed results, and content quality (average score 4.34 out of 5).
*   **Automated Testing:** The automated CV system ensures the experiments are operating correctly and identifies any errors which are flagged using github workflows for admin attention.

## Why It Matters (Implications)
RLabs offers a promising approach to address the challenges of providing accessible and affordable science education. By leveraging IoT and open-source technologies, this research demonstrates the feasibility of creating remote labs that are both cost-effective and scalable.

However, some limitations and future directions include:

*   **Network Dependency:** The system relies on stable internet connectivity, which may be a challenge in some areas.
*   **Hardware Limitations:** The current setups are limited to specific experiments. Future work could explore expanding the range of experiments and improving the robustness of the hardware.
*   **Further User Studies:** More extensive user studies across diverse demographics are needed to validate the effectiveness of RLabs as a learning tool.

## Conclusion
The RLabs project presents a viable and impactful solution for enhancing access to laboratory education. By retrofitting existing equipment with IoT components and developing a scalable software platform, this research contributes to the democratization of science education and offers a blueprint for future remote laboratory initiatives.
`,_=`---
title: "SWITCH: A Web Service Exemplar for Evaluating Self-Adaptive ML-Enabled Systems"
excerpt: "Machine Learning-Enabled Systems (MLS) face challenges due to runtime uncertainties, affecting their Quality of Service (QoS). This research introduces SWITCH, an exemplar designed to enhance self-adaptive capabilities in MLS through dynamic model switching at runtime, providing a platform for researchers to explore and refine self-adaptive strategies."
date: "2024-02-13"
author: "Arya Marda, Shubham Kulkarni, Karthik Vaidhyanathan"
category: "AI/ML"
thumbnail: "/images/blogpic/2402.06351v1_main.png"
---

#### Introduction

As Machine Learning-Enabled Systems (MLS) like Google Bard and ChatGPT become increasingly prevalent, the need to maintain their performance under varying conditions is critical. These systems face runtime uncertainties from environmental factors, data drift, and other challenges.  This is where **self-adaptive systems** come into play.

#### The Problem

Traditional self-adaptive systems often fall short when dealing with the complexities of MLS. The data-driven nature of these systems, where performance is heavily reliant on data quality and model accuracy, requires a more nuanced approach.  Specifically, there's a lack of tools and frameworks that allow researchers to easily experiment with and refine self-adaptive strategies tailored for MLS.

#### The Solution

To address this gap, this paper introduces **SWITCH**, an exemplar designed to enhance self-adaptive capabilities in MLS through dynamic model switching at runtime. SWITCH provides an end-to-end platform for handling varying loads, data drifts, and other uncertainties in MLS, with a user-friendly dashboard.

#### How It Works (Technical Deep Dive)

SWITCH is built as a web service and integrates with the **MAPE-K framework** (Monitor, Analyze, Plan, Execute, Knowledge).  Here's a breakdown of the key components:

*   **Managed System:** Handles the core ML processing.
    *   **Image Ingestion Service:** Receives image data from users.
    *   **Image Store:** Queues images for processing using a First-In-First-Out (FIFO) mechanism.
    *   **Data Preprocessor:** Prepares the image data for object detection.
    *   **Model Loader:** Dynamically loads and switches between different ML models based on external inputs.
    *   **Model Repository:** Houses preloaded YOLOv5u models.
    *   **ML Model:** Executes the object detection task using the currently active model.
    *   **Post Processor:** Refines detection results.
    *   **Result Storage:** Transfers processed data to the Elasticsearch-based Data Store.
*   **Frontend:** Provides the user interface for interaction.
    *   **Experiment Manager & Configuration Manager:** Allows users to upload image data, inter-arrival rate files, and MAPE-K files.
    *   **Real-Time Dashboard:**  Provides real-time interactive visualizations of system performance metrics.
*   **Environment Manager:** Simulates real-world API traffic patterns to test the system's adaptability.
*   **Managing System:**  Enables adaptive decision-making of model switching.
    *   **Knowledge:** Contains the Adaptation Rules Repository and the Elasticsearch-based Data Store.

![SWITCH Architecture Diagram](/images/blogpic/2402.06351v1_main.png)

SWITCH offers several **adaptation strategies**, including:

*   **Single Model Strategies:** Running a single YOLOv5u model variant.
*   **NAIVE and Modified NAIVE:** Switches between models based on the incoming rate of images.
*   **AdaMLS:**  Leverages unsupervised learning to select the model offering the highest confidence score while meeting target response times.

#### Key Results

The paper evaluates SWITCH using a case study involving general object detection. Key findings include:

*   AdaMLS, when applied to SWITCH, dynamically switches between models, achieving a balance between speed and accuracy based on real-time demands.
*   The real-time dashboard provides valuable insights into system performance, enabling users to analyze and adjust their adaptation strategies.

#### Why It Matters (Implications)

SWITCH is a valuable tool for the self-adaptation and MLS research community, providing a practical platform for testing, analyzing, and refining self-adaptation strategies. By enabling a hands-on approach to exploring adaptive behaviors in ML systems, SWITCH contributes to the development of more robust and efficient MLS.

The limitations of SWITCH currently include a focus on model switching but future work intends to explore a broader spectrum of MLS tasks.

#### Conclusion

SWITCH is a pioneering tool designed to address the challenges of self-adaptation in MLS. Its flexible architecture, user-friendly interface, and comprehensive dashboard make it a valuable resource for researchers and practitioners looking to enhance the performance and reliability of ML-enabled systems.

Link to the GitHub repository: [https://github.com/sa4s-serc/switch](https://github.com/sa4s-serc/switch)
Link to the official website: [https://tool-switch.github.io](https://tool-switch.github.io)
`,A=`---
title: "Can Large Language Models Generate Architectural Design Decisions? An Exploratory Empirical Study"
excerpt: "Architectural Design Records (ADRs) are crucial for software architecture but often face adoption challenges. This study explores using Large Language Models (LLMs) to generate ADRs, finding that models like GPT-4 excel in zero-shot prompting, and fine-tuned smaller models can achieve comparable results, potentially aiding architects in documenting design decisions."
date: "2024-03-04"
author: "Rudra Dhar, Karthik Vaidhyanathan, Vasudeva Varma"
category: "AI/ML"
thumbnail: "/images/blogpic/2403.01709v1_main.png"
---

Architectural knowledge management (AKM) is crucial for modern software development, ensuring that design decisions are documented and accessible. However, creating and maintaining Architectural Decision Records (ADRs) can be time-consuming and challenging. Recent advancements in Large Language Models (LLMs) offer a potential solution to automate ADR generation, but how effective are they?

#### The Problem

ADRs play a vital role in software development, capturing design context, decisions, and their rationale. This promotes transparency, collaboration, and understanding within teams. Despite their recognized benefits, ADR adoption faces hurdles.  Time constraints, inconsistent adoption, and the sheer effort required to document architectural knowledge (AK) often hinder their widespread use.  This leads to gaps in documentation, hindering future understanding and collaboration.

#### The Solution

This research paper explores the feasibility of using LLMs to generate ADRs, specifically focusing on generating the *decision* component of an ADR from its *context*. The study investigates various approaches, including zero-shot prompting, few-shot prompting, and fine-tuning, using models like GPT and T5.

#### How It Works (Technical Deep Dive)

The study uses three primary approaches to text generation:

*   **Zero-Shot Prompting:** The LLM generates decisions solely based on the context provided, without any prior training on ADR examples.  Imagine giving a chef ingredients and asking them to create a dish without providing a recipe.

*   **Few-Shot Prompting:** The LLM is given a few example ADRs (context-decision pairs) to learn from before generating a decision for the new context. Like showing the chef a couple of successful dishes before asking them to create one of their own.

*   **Fine-Tuning:** The LLM is trained on a dataset of ADRs to specialize in generating decisions from contexts. This is like training the chef extensively in a specific cuisine.

The researchers experimented with different LLMs, including GPT-2, GPT-3, GPT-4, T5, and Flan-T5, varying their sizes and architectures (encoder-decoder vs. decoder-only). The performance of each model was evaluated using various metrics like ROUGE-1, BLEU, METEOR, and **BERTScore** (a metric which leverages **BERT (Bidirectional Encoder Representations from Transformers)** embeddings to assess the quality of text generation).

![Study Design Overview](/images/blogpic/2403.01709v1_main.png)

#### Key Results

The study reveals several interesting findings:

*   **GPT-4 excels in zero-shot prompting:** It generates relevant and accurate design decisions without prior training, showcasing the impressive general knowledge of large models. However, it still falls short of human-level performance.

*   **Few-shot prompting enhances smaller models:** Models like GPT-3.5 can achieve similar outcomes to GPT-4 in a zero-shot setting by leveraging a few examples.

*   **Fine-tuning improves smaller models:** Models such as Flan-T5 can yield comparable results after fine-tuning, making them suitable for organizations with limited resources or strict privacy requirements.

*   **Format Matters:**  Including the term "Architectural Decision Record" in the prompt improves the output format but doesn't necessarily impact the content of the generated decision.

#### Why It Matters (Implications)

This research demonstrates that LLMs have the potential to assist architects in documenting design decisions.  While they may not fully replace human effort, they can significantly reduce the burden and improve the efficiency of ADR creation.  The ability to use smaller, fine-tuned models is particularly important for organizations that need to maintain control over their data and infrastructure.

Limitations of the study include a limited dataset of ADRs and a focus solely on the decision component. Future research should explore generating entire ADRs, integrating contextual information from codebases and design diagrams, and conducting in-vivo experiments with architects in real-world projects.

#### Conclusion

This exploratory study provides promising evidence that LLMs can generate architectural design decisions. By leveraging zero-shot prompting, few-shot learning, and fine-tuning, LLMs can assist architects in documenting their decisions, fostering better collaboration, and preserving valuable architectural knowledge. Further research is needed to achieve human-level performance and address the identified limitations, paving the way for widespread adoption of AI-powered ADR generation.

GitHub Repo: https://github.com/sa4s-serc/ArchAI_ADR
\`\`\``,M=`---
title: "Towards Sustainable MLOps: A Self-Adaptation Approach for Smarter Machine Learning Pipelines"
excerpt: "Machine learning models often struggle to transition from prototype to production due to evolving data and requirements. This research introduces a self-adaptive MLOps architecture that leverages a MAPE-K loop to address sustainability concerns, enhancing performance and efficiency."
date: "2024-04-06"
author: "Hiya Bhatt, Shrikara Arun, Adyansh Kakran, Karthik Vaidhyanathan"
category: "AI/ML"
thumbnail: "/images/blogpic/2404.04572v1_main.png"
---

In today's rapidly evolving technological world, **sustainability** has become a critical consideration, especially for systems powered by **Machine Learning (ML)**. However, many ML models fail to move past the initial prototype phase. This is often due to challenges like fluctuating data, changing demands, and instability in the models themselves.

#### The Problem

Traditional **Machine Learning Operations (MLOps)** aims to solve some of these issues by making ML systems more adaptable and maintainable. MLOps itself faces challenges. These can include:

*   **Environmental impact:** High energy consumption during training and deployment.
*   **Technical maintenance:** Maintaining the ML models and the pipelines that support them is difficult due to the rapid changes in ML.
*   **Economic concerns:** The high costs associated with training, testing, and deploying ML models.

#### The Solution

This research proposes a novel approach: integrating **self-adaptation** into the MLOps architecture. By using principles of self-adaptation through a **MAPE-K (Monitor, Analyze, Plan, Execute, Knowledge) loop**, the system can automatically respond to uncertainties, ultimately improving the sustainability of MLOps pipelines.

#### How It Works (Technical Deep Dive)

The core idea is to build an MLOps system that can automatically adjust itself to maintain its performance and efficiency. This is done through a **MAPE-K loop**, which continuously monitors the system, analyzes potential issues, plans solutions, and executes them. Here's a breakdown:

1.  **Monitor:** The system constantly collects data on its own performance, including metrics like accuracy, response time, and resource usage.

2.  **Analyze:** An **Uncertainty Detector** analyzes collected data to identify anomalies or trends that might indicate underlying issues or uncertainties.

3.  **Plan:** Based on the analysis, the system develops a plan to address the problem. For instance, if the model's accuracy is decreasing, the plan might be to retrain the model with new data.

4.  **Execute:** The system carries out the plan, such as triggering a retraining job or switching to a different model.

5.  **Knowledge:** A knowledge base stores information about past performance, available models, and possible actions. This helps the system make informed decisions about how to adapt.

The system architect defines adaptation boundaries that define the acceptable quality of the system across sustainability dimensions.

![Flow diagram for the approach](/images/blogpic/2404.04572v1_main.png)

#### Key Results

The authors tested their approach in a **Smart City** use case, focusing on predicting **Air Quality Index (AQI)**. The results showed that the self-adaptive MLOps pipeline could maintain a good balance between prediction accuracy and energy consumption.

![Approach](/images/blogpic/2404.04572v1_figure2.png)

Specifically, the self-adaptive system could:

*   Improve **R² score** from 0.90 to 0.94
*   Reduce average CPU consumption by 32%.

![Decision Map for AQI Prediction Pipeline](/images/blogpic/2404.04572v1_figure3.png)

#### Why It Matters (Implications)

This research has significant implications for building more sustainable and reliable ML systems. By incorporating self-adaptation, MLOps pipelines can:

*   Adapt to changing data and requirements automatically.
*   Reduce energy consumption and environmental impact.
*   Improve the overall reliability and maintainability of ML models.

One of the limitations of this study is that it mainly focuses on the technical and environmental aspects of sustainability. Future research could explore the social and economic dimensions in more detail.

![R2 Score & Log of Average CPU Consumption over 10s](/images/blogpic/2404.04572v1_figure4.png)

#### Conclusion

By integrating self-adaptive principles into MLOps through a **MAPE-K loop**, this research offers a path toward building more sustainable ML systems. The system can autonomously respond to uncertainties related to data, model dynamics, and environmental variations. This enables the system to address the sustainability concerns of a given MLOps pipeline.

[Link to the original paper: arXiv:2404.04572](https://arxiv.org/abs/2404.04572)
[Link to the code: https://github.com/sa4s-serc/sustainableMLOps](https://github.com/sa4s-serc/sustainableMLOps)
`,L=`---
title: "Reimagining Self-Adaptation in Software Systems with Large Language Models"
excerpt: "This paper explores using Large Language Models (LLMs) for enhancing the self-adaptation capabilities of software systems. By drawing parallels with human operators, the proposed method uses LLMs to autonomously generate context-aware adaptation strategies, improving system resilience and adaptability."
date: "2024-04-15"
author: "Raghav Donakanti, Prakhar Jain, Shubham Kulkarni, Karthik Vaidhyanathan"
category: "AI/ML"
thumbnail: "/images/blogpic/2404.09866v1_figure1.png"
---

Modern software systems face a barrage of uncertainties, from component failures to unpredictable user demands.  **Self-adaptation**, the ability of a system to adjust its behavior in response to changes in its environment, has emerged as a crucial technique for maintaining **Quality of Service (QoS)**. But traditional self-adaptation methods have limitations, especially in complex and dynamic environments.  Enter **Generative AI (GenAI)**, and specifically **Large Language Models (LLMs)**, which are now opening exciting new possibilities in this field.

#### The Problem

Traditional self-adaptation techniques, including those leveraging Machine Learning (ML), often require extensive training data and struggle to generalize to unseen situations.  While ML has demonstrated promising results, its effectiveness is often constrained by the need for large datasets and a thorough understanding of complex ML principles. This limits the ability of software systems to respond effectively to novel or unanticipated challenges. The existing software system, are they able to dynamically generate new configurations and components?

#### The Solution

This research proposes a novel approach: leveraging the power of LLMs to enhance self-adaptation. The core idea is to empower software systems with the ability to understand their operational state and implement adaptations that align with architectural requirements and environmental changes, much like a human operator would. By integrating LLMs, systems can make more nuanced and context-aware decisions, leading to improved dynamic adaptability and resilience. The innovative framework, **MSE-K** (Monitor, Synthesize, Execute), integrates LLMs into the self-adaptation process.

#### How It Works (Technical Deep Dive)

The proposed architecture conforms to the conceptual model of a self-adaptive system.  It involves two main subsystems: the **Managed System** (the software system being adapted) and the **Managing System** (responsible for the adaptation logic).

The Managing System operates in a loop, similar to the traditional **MAPE-K** (Monitor, Analyze, Plan, Execute, Knowledge) loop, but with a key difference: the *Analyze* and *Plan* phases are combined into a *Synthesize* phase, which leverages the LLM. The process breaks down as follows:

1.  **Monitor:** Collects system logs and QoS metrics (response time, CPU utilization, etc.) from the Managed System. This data forms the **context data (C)**.

2.  **Knowledge/Memory:** Stores various types of knowledge required for adaptation, including:
    *   **Conversation History (H):** Tuples of past context data and adaptation decisions.
    *   **Fine-tuned Models:** A set of LLMs, where each LLM can be tasked with a role and responsibility.
    *   **System Config:** Configurations of the system, such as the number of available compute resources.
    *   **Prompts:** Instructions for the LLM on how to interpret data and generate decisions, including examples of adaptation scenarios.

3.  **Synthesize:** This is where the LLM shines.  It comprises of three major components:
    *   **Prompt Generator:** Integrates the context (C) into the conversation history (H) to create a prompt (P) for the LLM.
    *   **LLM Engine:** Interprets the prompt and generates an adaptation decision (AD).
    *   **Response Parser:** Parses and formats the LLM's response for the Execute phase.

4.  **Execute:** Implements the adaptation decision on the Managed System.
    *   **Verifier:** Verifies the given AD by leveraging formal verification techniques to check quantitative properties on the system.
    *   **Executor:** Executes the verified AD within the managed system by modifying the system configuration or resources.

Essentially, the LLM acts as a smart advisor, taking in system data, recalling past experiences, and suggesting actions to optimize performance.

![Approach showing the different components of the managing system and managed system](/images/blogpic/2404.09866v1_figure1.png)

#### Key Results

The researchers evaluated their approach using **SWIM**, an exemplar system for simulating web infrastructure.  The results showed that the LLM-based adaptation manager was able to maintain stable response times, even under varying workloads, achieving a high utility score.  While not outperforming traditional reactive adaptation managers in raw utility score, the LLM-based approach demonstrated superior stability, avoiding the significant response time spikes seen with the reactive methods.

![Example of C and AD in SWIM showing the context data and actions](/images/blogpic/2404.09866v1_figure2.png)

![Example of PSWIM showing the prompts to the LLM](/images/blogpic/2404.09866v1_figure3.png)

![Results from running the GPT-4 based adaptation manager on SWIM](/images/blogpic/2404.09866v1_figure4.png)

#### Why It Matters (Implications)

This research highlights the transformative potential of LLMs in self-adaptive systems.  By enabling systems to reason and adapt in a more human-like way, LLMs can lead to:

*   **Improved Resilience:** Software can better handle unexpected events and maintain performance.
*   **Increased Efficiency:** Resources can be allocated more effectively, optimizing system performance.
*   **Reduced Human Intervention:** Automation of adaptation decisions reduces the need for manual adjustments.

However, there are also limitations and areas for future research:

*   **Complex Equations:** The model has a limited grasp of complex equations detailing adaptation impacts.
*   **Long Context Challenges:** Managing long conversation histories can be computationally expensive.  Technologies like **MemGPT** might prove useful here.
*   **Hallucination:** LLMs can sometimes generate incorrect or nonsensical responses. Combining LLMs with formal verification techniques is crucial to address this.

#### Conclusion

This work presents a compelling vision for the future of self-adaptive software systems. By harnessing the power of LLMs, we can create more intelligent, resilient, and efficient systems that can adapt to the ever-changing demands of the modern world. The marriage of LLMs and self-adaptation promises to reshape how we engineer software for dynamic and uncertain environments.

[Link to the github repository](https://github.com/Raghav010/llm_selfAdapt)
`,I=`---
title: "EcoMLS: A Self-Adaptive Approach to Green Machine Learning Systems"
excerpt: "Machine Learning-Enabled Systems (MLS) are crucial for technologies like autonomous vehicles, but their energy consumption poses a sustainability challenge. This paper introduces EcoMLS, a self-adaptive approach that optimizes energy efficiency by dynamically switching between ML models at runtime, balancing energy consumption with model confidence for more sustainable machine learning."
date: "2024-04-17"
author: "Meghana Tedla, Shubham Kulkarni, Karthik Vaidhyanathan"
category: "AI/ML"
thumbnail: "/images/blogpic/2404.11411v1_main.png"
---

## Introduction
Artificial Intelligence (AI) is transforming our world, powering everything from autonomous vehicles to smart cities. However, the increasing reliance on **Machine Learning-Enabled Systems (MLS)** comes with a significant environmental cost: substantial energy consumption and high carbon emissions. Balancing technological advancement with environmental preservation is therefore critical.

#### The Problem
Despite growing awareness of the environmental impact of training and deploying machine learning models, the energy demands of **model inference** (the process of using a trained model to make predictions) have been relatively overlooked.  Existing Green AI initiatives primarily focus on optimizing the training phase, leaving a gap in strategies that reduce energy consumption during real-world applications without sacrificing performance.  Moreover, runtime uncertainties can significantly impact model performance and energy consumption, necessitating a dynamic approach.

#### The Solution
This research introduces **EcoMLS**, a self-adaptive approach designed to enhance the sustainability of MLS. EcoMLS builds on the concept of a **Machine Learning Model Balancer**, dynamically switching between different ML models at runtime to optimize energy consumption while maintaining high model confidence.

#### How It Works (Technical Deep Dive)
EcoMLS operates using a **MAPE-K loop**, a control loop commonly used in self-adaptive systems:

1.  **Monitor:**  EcoMLS continuously monitors both model and system energy parameters, tracking metrics like energy consumption and model confidence scores.
2.  **Analyze:** The collected data is analyzed to identify inefficiencies and assess the need for adaptation.  A performance score is calculated for the currently active model, balancing energy consumption and confidence.
3.  **Plan:** Based on the analysis, the system plans an adaptation strategy, deciding whether to switch to a different model to improve energy efficiency or maintain confidence. An e-greedy method is implemented to balance exploitation and exploration of models
4.  **Execute:**  The planned adaptation is executed, typically involving switching to a different ML model.

The **Knowledge** component stores critical data, including real-time logs, base performance rules derived from an initial evaluation, and runtime performance metrics.

![Architecture of EcoMLS](/images/blogpic/2404.11411v1_main.png)

Imagine you're driving an autonomous vehicle (a type of MLS). During daylight hours with clear roads, a smaller, more energy-efficient ML model can accurately detect objects (pedestrians, other cars, etc.). However, at night or in adverse weather, EcoMLS would switch to a larger, more computationally intensive model to maintain a high level of confidence in its detections, ensuring safety.

#### Key Results
The researchers evaluated EcoMLS using an object detection task with **YOLOv5** models of varying sizes and complexities. The results demonstrated that EcoMLS outperforms both naive strategies (e.g., always using the same model) and individual models in terms of energy consumption and confidence score trade-off. EcoMLS achieved a 14% improvement in confidence over the nano model and an 84% reduction in energy consumption compared to the large model.

![Trade-off between energy consumption and the average confidence score of individual models](/images/blogpic/2404.11411v1_main.png)

![Model switching: Naive baselines Vs. EcoMLS](/images/blogpic/2404.11411v1_main.png)

![Trend of energy consumption with processed image requests](/images/blogpic/2404.11411v1_main.png)

#### Why It Matters (Implications)
EcoMLS presents a valuable perspective on enhancing MLS sustainability through intelligent runtime adaptations.  By dynamically adjusting energy consumption and model confidence, EcoMLS paves the way for more energy-efficient and sustainable AI applications. While this research focused on object detection, the approach can potentially be extended to other domains, such as Natural Language Processing (NLP).

The current study focuses on the inference phase, but future work could explore the impact of EcoMLS on the entire ML lifecycle, including training and tuning. More studies regarding hardware conditions like temperature changes may also be needed.

#### Conclusion
EcoMLS offers a promising self-adaptation approach to ensure MLS sustainability by dynamically balancing energy consumption and model confidence.  The results highlight the potential of runtime model switching to achieve significant energy savings without compromising performance, bringing us closer to a future where AI is both powerful and environmentally responsible.
`,S=`---
title: "MOYA: Engineering an LLM-Powered Multi-Agent Framework for Autonomous CloudOps"
excerpt: "Managing cloud operations (CloudOps) is complex, requiring real-time processing of diverse data. This paper introduces MOYA, a multi-agent framework leveraging GenAI and RAG, balancing automation with human control, and addressing the limitations of existing frameworks to improve accuracy, efficiency, and security in CloudOps."
date: "2024-01-23"
author: "Kannan Parthasarathy, Karthik Vaidhyanathan, Rudra Dhar, Venkat Krishnamachari, Basil Muhammed, Adyansh Kakran, Sreemaee Akshathala, Shrikara Arun, Sumant Dubey, Mohan Veerubhotla, Amey Karant"
category: "AI/ML"
thumbnail: "/images/blogpic/2501.08243v1_figure1.png"
---

Cloud computing has revolutionized IT, providing scalable, flexible, and cost-effective resources. As organizations increasingly adopt cloud platforms, managing these environments efficiently becomes crucial. This is where Cloud Operations (CloudOps) comes into play.

#### The Problem

Managing cloud infrastructure is complex and dynamic. Teams face the challenges of diverse data sources, orchestrating multiple processes, and automating routine tasks. Generative models often lack the necessary context, leading to inaccuracies. Initially, MontyCloud's platform struggled with diverse data streams and real-time processing. A monolithic architecture made it difficult to scale and adapt.

#### The Solution

This research introduces **MOYA (Meta Orchestrator Of Your Agents)**, a novel multi-agent framework that leverages **GenAI** and balances autonomy with human control to automate CloudOps. It integrates internal and external systems, optimizing task orchestration, security, and error mitigation while leveraging **Retrieval Augmented Generation (RAG)** to produce accurate and reliable insights.

#### How It Works (Technical Deep Dive)

Imagine MOYA as a team of specialized experts working together to manage your cloud environment. Each expert, or **agent**, is responsible for a specific task, like cost optimization, security monitoring, or compliance checks.

Here's how it works:

1.  **User Query:** A user asks a question, like "What's my cloud spending this month?"
2.  **Request Handler:** The **Request Handler** validates and parses the query.
3.  **Orchestrator:** The **Orchestrator** acts as a project manager, directing the query to the appropriate agents.
4.  **Agent Selector:** The **Agent Selector** uses machine learning to identify the right agent for the task, such as the Cost Agent.
5.  **Agent Invocation:** The **Lifecycle Manager** fetches the **Agent Information** and triggers the identified **Agent**.
6.  **Data Retrieval:** The agent retrieves data from various sources, using internal or external **APIs**.
7.  **LLM Processor**: The **LLM Processor** leverages GenAI to extract and summarize insights from the data.
8.  **Response Generation:** The agent provides a clear and concise response to the user.

![Multiple agents collaborating to process user queries](/images/blogpic/2501.08243v1_figure1.png)

This multi-agent approach offers several advantages:

*   **Specialization:** Each agent focuses on a specific task, leading to increased accuracy and efficiency.
*   **Scalability:** New agents can be added easily to handle new tasks or data sources.
*   **Flexibility:** The framework can adapt to changing cloud environments and user needs.
*   **Extensibility**: The end user can easily deploy specific purpose agents for their internal workflows.
*   **Security:** MOYA uses automated security measures to maintain strict standards of reliability and safety in its interactions.

#### Key Results

The research evaluated MOYA using both automated metrics and human evaluations. The results showed that MOYA:

*   **Improved Accuracy:** Outperformed a traditional monolithic RAG system in metrics focused on semantic alignment.
*   **Reduced Errors:**  Decreased misclassification errors due to targeted routing within individual agents.
*   **Improved Response Time:** Achieved faster response times, despite higher token consumption.

#### Why It Matters (Implications)

MOYA represents a significant advancement in autonomous CloudOps. The multi-agent framework provides a scalable, flexible, and efficient way to manage complex cloud environments.

*   **For Organizations:** MOYA can help reduce operational costs, improve security posture, and ensure compliance.
*   **For MSPs (Managed Service Providers):** The framework enables MSPs to deliver reliable and optimized cloud services at scale.
*   **For the AI Community:** The research highlights the potential of multi-agent systems for solving complex real-world problems.

#### Conclusion

MOYA demonstrates the power of combining GenAI and multi-agent systems to automate and optimize CloudOps. By leveraging specialized agents and RAG, MOYA provides a more accurate, efficient, and flexible approach to managing cloud environments. Future research will focus on extending the framework's capabilities, enhancing inter-agent communication, and broadening its applicability across diverse cloud platforms.
\`\`\``,x=`---
title: "LoCoML: A Low-Code Framework to Streamline ML Inference Pipelines"
excerpt: "Integrating diverse machine learning models into real-world applications is challenging due to varying architectures and technical specifications. LoCoML is a low-code framework that simplifies this integration, enabling seamless communication across diverse language technologies within the Bhashini Project."
date: "2025-01-24"
author: "Kritin Maddireddy, Santhosh Kotekal Methukula, Chandrasekar Sridhar, Karthik Vaidhyanathan"
category: "AI/ML"
thumbnail: "/images/blogpic/2501.14165v1_main.png"
---

### Introduction
Machine learning (ML) is rapidly transforming industries, powering everything from personalized recommendations to automated language translation. However, integrating these **ML models** into real-world applications presents significant engineering challenges. This is especially true when dealing with a diverse range of models developed by different teams, each with its own unique technical specifications. How can we efficiently combine these disparate pieces into a cohesive, high-performing system?

### The Problem
Traditional software engineering approaches often struggle to manage the complexity of connecting heterogeneous ML models. Large, collaborative projects, like the **Bhashini Project** (a large-scale initiative in India aimed at integrating AI-driven language technologies across multiple languages), amplify these limitations. Coordinating multiple, heterogeneous models to achieve accurate, aligned inferences requires a customized solution that existing frameworks often lack. These frameworks may impose limitations in compatibility and scalability, making it challenging to support workflows where independently developed models must work together within a single pipeline.

### The Solution
This paper introduces **LoCoML**, a low-code ML engineering framework designed to simplify the integration of diverse ML models. LoCoML aims to address the challenges of managing and orchestrating ML models in complex workflows by providing flexibility and modularity in creating and managing ML inference pipelines. By abstracting technical complexities and supporting a drag-and-drop interface (as seen in \`![An inference pipeline built using the LoCoML framework](/images/blogpic/2501.14165v1_main.png)\`), LoCoML makes ML integration more accessible to users with varying technical backgrounds.

### How It Works (Technical Deep Dive)
LoCoML revolves around two main components: the **Model Hub** and the **Pipeline Orchestrator**. Let's break down each component:

*   **Model Hub:** This component acts as a repository for ML models. Model Developers can either train models from scratch using the Model Trainer or provide an API to externally deployed models.
*   **Pipeline Orchestrator:** This component is responsible for managing the execution of the pipeline and has the Model Builder. The Model Builder consists of a Graph Builder, which the Pipeline Designer uses to create the graph. The **Pipeline Designer** uses a drag-and-drop interface to create a pipeline. The **Pipeline Validator** ensures that model connections are compatible, maintaining a logical workflow.  \`![The Model Hub](/images/blogpic/2501.14165v1_figure2.png)\`, \`![The Pipeline Orchestrator](/images/blogpic/2501.14165v1_figure3.png)\`, and \`![The Pipeline Builder](/images/blogpic/2501.14165v1_figure4.png)\` visually explains all the functions.

**Adapters** play a crucial role in the Pipeline Orchestrator. An adapter is a specialized node designed to ensure compatibility between nodes, especially when the output format of one model doesn't align with the input requirements of the next. Think of it like a universal translator for data formats, ensuring smooth data flow.

### Key Results
The authors conducted preliminary evaluations to measure the additional overhead introduced by LoCoML on top of the model execution time. The experiments involved Machine Translation (MT) pipelines and Speech Processing pipelines (ASR + TTS).  The results indicate that LoCoML's overhead increases linearly with the number of models, but remains negligible at only 1.8% of the total runtime. This suggests that LoCoML introduces minimal performance impact while effectively managing complex ML pipelines.

\`![Performance Analysis for MT Task](/images/blogpic/2501.14165v1_table1.png)\`

### Why It Matters (Implications)
LoCoML offers a practical solution for connecting multiple ML models in a collaborative environment. Its low-code approach reduces the time and expertise required to develop robust ML systems, making ML technologies more accessible to a broader audience. By providing a unified and adaptable solution, LoCoML addresses the gap in existing platforms that struggle with custom models from external sources.

However, LoCoML currently focuses primarily on inference pipelines. Future work aims to expand its capabilities to support model training and conduct further studies on user experience, usability, and performance.

### Conclusion
LoCoML presents a promising approach to streamline the development of ML inference pipelines. By offering a low-code, user-friendly platform, LoCoML empowers users to connect and control various ML models seamlessly. The preliminary evaluations demonstrate that LoCoML introduces minimal performance impact, making it an efficient and effective solution for managing complex ML pipelines. As the Bhashini Project and similar initiatives continue to evolve, LoCoML can play a crucial role in enabling seamless communication and collaboration across diverse language technologies.

[Link to the research artifact](https://anonymous.4open.science/r/XYZ-Project)
`,E=`---
title: "Towards Safer Skies: A Semi-Automated Approach to Certifying Low-Criticality ML in Airborne Applications"
excerpt: "As Machine Learning (ML) becomes increasingly integrated into aviation, ensuring the safety and reliability of these systems is paramount. This paper introduces a semi-automated certification process for low-criticality ML-enabled airborne applications, addressing the unique challenges posed by ML while adhering to established aviation standards."
date: "2025-01-28"
author: "Chandrasekar Sridhar, Vyakhya Gupta, Prakhar Jain, Karthik Vaidhyanathan"
category: "AI/ML"
thumbnail: "/images/blogpic/2501.17028v1_figure1.png"
---

The skies are getting smarter! As the aviation industry embraces **Machine Learning (ML)**, ensuring the safety and reliability of ML-powered systems becomes essential. But how do we certify these data-driven systems to meet stringent aviation standards?

#### The Problem
Traditional certification processes, like the well-known **DO-178C**, designed for deterministic software, don't quite fit the bill for ML systems. ML systems learn from data, making them probabilistic and dynamic, unlike the rigid, rule-based systems that DO-178C was designed for. This creates gaps in addressing crucial aspects like continuous model validation, data integrity, and performance uncertainty. Scaling these certification processes manually is also resource-intensive and prone to inconsistencies.

#### The Solution
This paper proposes a **semi-automated certification approach** specifically for **low-criticality** ML-enabled systems (MLS) in aviation. In this context, "low-criticality” corresponds to DO-178C Level D, where software failures result in minor failure conditions for the aircraft. This approach focuses on key areas: data and model validation, resilience assessment, and usability assurance. The goal is to integrate manual and automated processes to make certification more efficient and reliable.

#### How It Works (Technical Deep Dive)
The proposed method incorporates the following key components:

*   **Structured Classification:** This guides the certification rigor based on system attributes like criticality, autonomy level, and model complexity.  For example, a system classified as Level D criticality with moderate autonomy and a complex ML model (like a neural network) will require a different level of validation than a simple linear regression model with high human supervision.

*   **Assurance Profile:** This acts as a "nutrition label" for the ML component, summarizing evaluation outcomes into a single confidence measure.  It uses a structured scoring system combining manual reviews and automated checks to provide stakeholders with an intuitive assurance metric.

*   **Human Oversight Integration:**  Acknowledging the limitations of fully automated systems, this approach incorporates human experts in critical decision-making processes, especially when dealing with uncertainty or ambiguous situations.

#### Key Results
The paper presents a case study called "Air Sight", a **YOLOv8**-based object detection system designed to classify military and civilian vehicles in real-time for reconnaissance and surveillance aircraft. By applying their semi-automated approach, the authors demonstrate how existing software certification standards like DO-178C can be extended to accommodate the unique characteristics of ML-based systems. The "Air Sight" case study helps to determine if the system meets the DO-178C Level D compliance criteria.

![Proposed Integrated Certification Process for ML and Non-ML System](/images/blogpic/2501.17028v1_figure1.png)

#### Why It Matters (Implications)
This research provides a practical framework for certifying ML systems in aviation, paving the way for broader adoption of these technologies while ensuring safety and reliability. It also highlights the limitations of current certification standards and offers concrete suggestions for improvement. The paper notes that adaptive ML Systems that continue to learn and evolve during operation introduce further complexities and are not addressed here. Future research includes handling more complicated use-cases in more complex systems.

#### Conclusion
The semi-automated certification approach offers a promising path towards safely integrating ML into aviation. By combining the strengths of both human expertise and automated processes, this research contributes to building confidence in ML-enabled airborne systems, ultimately leading to safer and more efficient air travel.

[Link to GitHub repo (if available): https://github.com/sa4s-serc/MLCert]
\`\`\``,D=`---
title: "Generative AI for Software Architecture: Navigating Applications, Challenges, and Future Directions"
excerpt: "Generative Artificial Intelligence (GenAI) holds immense potential in transforming software architecture. This blog post synthesizes current research, revealing the adoption of GenAI for architectural decision support and reconstruction while highlighting challenges like model precision, ethical concerns, and the need for architecture-specific datasets."
date: "2025-06-27"
author: "Matteo Esposito, Xiaozhou Li, Sergio Moreschini, Noman Ahmad, Tomas Cerny, Karthik Vaidhyanathan, Valentina Lenarduzzi, Davide Taibi"
category: "AI/ML"
thumbnail: "/placeholder.svg"
---

The world of software development is rapidly evolving, and **Generative Artificial Intelligence (GenAI)** is at the forefront of this transformation. As companies strive for increased innovation and efficiency, the application of AI in traditionally human-driven tasks becomes increasingly crucial. While GenAI has demonstrated its capabilities in areas like code generation and software testing, its application in **software architecture** remains an area ripe for exploration and development.

#### The Problem
Software architecture, the blueprint for complex systems, is a critical phase that significantly impacts the quality, maintainability, and scalability of a software product. However, practitioners and researchers continue to grapple with uncertainties regarding the true potential, limitations, and practical benefits of GenAI in architectural tasks. Understanding these aspects is essential to unlock the full potential of GenAI and guide future research efforts.

#### The Solution
This research paper systematically synthesizes the use, rationale, contexts, usability, and future challenges of GenAI in software architecture through a **multivocal literature review (MLR)**. By analyzing both peer-reviewed and gray literature, the study identifies current practices, models, adoption contexts, and reported challenges, extracting key themes via open coding. This provides a comprehensive overview of the existing landscape, highlighting opportunities and challenges in this emerging field.

#### How It Works (Technical Deep Dive)
The study uses an MLR approach, which involves searching for relevant literature from various sources, both academic and non-academic. This includes research papers, industry reports, blog posts, and technical documentation. The search is conducted using specific keywords related to GenAI and software architecture. The identified literature is then analyzed, and key information is extracted using a process called "open coding." This involves identifying recurring themes and patterns in the data. Think of it like sorting through a mountain of LEGO bricks to find common colors and shapes, then grouping them together to build something new. The extracted themes and patterns are then used to answer the research questions. Techniques like **few-shot prompting** and **retrieved-augmented generation (RAG)** are commonly employed to enhance the performance of GenAI models in this context.

#### Key Results
The review identifies significant adoption of GenAI for:

*   **Architectural decision support:** Assisting architects in making informed choices during the design phase.
*   **Architectural reconstruction:** Analyzing existing systems to understand and recreate their architecture.

The **OpenAI GPT** models are the most commonly used, and techniques like few-shot prompting and **retrieved-augmented generation (RAG)** are prevalent. GenAI is primarily applied to the initial stages of the **Software Architecture Life Cycle (SALC)**, such as requirements-to-architecture and architecture-to-code transformations. Monolithic and microservice architectures are the main targets for GenAI applications.

Despite the potential, rigorous testing of GenAI outputs is often missing, and significant challenges remain. These include:

*   **Model precision and hallucinations:** Ensuring accuracy and preventing the generation of nonsensical or false information.
*   **Ethical aspects and privacy issues:** Addressing potential biases and protecting sensitive data.
*   **Lack of architecture-specific datasets:** Improving performance by training models on relevant data.
*   **Absence of sound evaluation frameworks:** Establishing reliable methods for assessing the quality of GenAI outputs.

#### Why It Matters (Implications)
This research has significant implications for both researchers and practitioners. It provides a roadmap for future research directions, emphasizing the need for:

*   Developing general evaluation methodologies to assess the quality of GenAI outputs.
*   Addressing ethical concerns and ensuring precision in GenAI models.
*   Increasing the transparency and explainability of GenAI decision-making.
*   Creating and promoting architecture-specific datasets and benchmarks.
*   Bridging the gap between theoretical possibilities and practical applications.

#### Conclusion
GenAI shows significant promise in transforming software architecture, but several challenges must be addressed to facilitate its broader adoption. By focusing on evaluation methodologies, ethical considerations, transparency, and domain-specific datasets, the research community can pave the way for the successful integration of GenAI into software architecture practices.
\`\`\`
`,P=`---
title: "DRAFT: Guiding Software Architects with LLMs for Architectural Design Decisions"
excerpt: "Architectural Knowledge Management (AKM) is crucial, yet often hampered by manual effort. This paper introduces DRAFT, a novel approach that combines retrieval-augmented generation and fine-tuning to help architects generate Architectural Design Decisions (ADDs) efficiently while addressing privacy and resource concerns."
date: "2025-04-11"
author: "Rudra Dhar, Adyansh Kakran, Amey Karan, Karthik Vaidhyanathan, Vasudeva Varma"
category: "AI/ML"
thumbnail: "/placeholder.svg"
---

## Introduction

In the fast-paced world of software development, making sound architectural decisions is paramount. However, capturing and managing this knowledge – known as **Architectural Knowledge Management (AKM)** – remains a significant challenge. Imagine trying to build a house without blueprints or a clear plan. AKM aims to provide that blueprint for software projects, but how do we effectively capture and share this vital information?

#### The Problem

One popular approach to AKM is using **Architectural Decision Records (ADRs)**. ADRs are lightweight documents that capture important **Architectural Design Decisions (ADDs)** made during a project's lifecycle. While ADRs offer a structured way to document these decisions, their adoption is often limited due to the manual effort required and lack of sufficient tool support.

Simply put, it takes a lot of time and energy to write good ADRs, and current tools aren't making it any easier. Furthermore, using third-party **Large Language Models (LLMs)** raises data privacy concerns, while self-hosting powerful LLMs can be resource-intensive.

#### The Solution

This research paper introduces **Domain-specific Retrieval Augmented Few-shot Tuning (DRAFT)**, a novel approach that leverages the power of LLMs to assist architects in drafting ADDs. DRAFT combines the strengths of three powerful techniques:

*   **Few-shot learning:** Providing LLMs with a few examples to guide their generation.
*   **Retrieval-augmented generation (RAG):** Combining LLMs with an external knowledge base to improve accuracy and relevance.
*   **Fine-tuning:** Adapting a pre-trained LLM to a specific task or domain.

DRAFT operates in two phases: an offline phase for training and an online phase for generating ADDs. The goal is to provide a practical solution that is both effective and efficient, while also addressing privacy and resource constraints.

#### How It Works (Technical Deep Dive)

DRAFT uses a clever combination of techniques to generate high-quality ADDs. Let's break down how it works:

1.  **Offline Phase (Training):**

    *   **Dataset Preparation:** The system collects and cleans a dataset of existing ADRs, extracting the **Context (C)** and **Decision (D)** from each record.
    *   **Vector Database (VDB) Construction:** Each context is converted into a vector embedding using an embedding model. These embeddings are stored in a VDB, allowing for efficient similarity searches.
    *   **Prompt Processing:**  For each ADR in the dataset, DRAFT retrieves similar context-decision pairs from the VDB. These pairs are combined with the original context to create a "few-shot prompt."
    *   **Fine-tuning:** A foundational LLM is fine-tuned using these few-shot prompts, learning to generate ADDs that are relevant to the given context.

    Think of it like teaching a student by showing them examples and then letting them practice.

2.  **Online Phase (Generation):**

    *   **Context Input:** A software architect provides a context describing a design problem.
    *   **Retrieval:** DRAFT retrieves similar ADRs from the VDB based on the provided context.
    *   **Prompting:** A few-shot prompt is created using the retrieved ADRs and the new context.
    *   **Generation:** The fine-tuned LLM uses this prompt to generate a proposed Design Decision.

    This is like the student applying what they learned to solve a new problem, using the examples as guidance.

#### Key Results

The research team evaluated DRAFT against existing approaches on a dataset of 4,911 ADRs and various LLMs. They used both automated metrics and human evaluations. The results showed that DRAFT outperforms all other approaches in effectiveness while maintaining efficiency.

Here are some key highlights:

*   DRAFT achieved significantly higher **BERTScore** compared to baseline methods, indicating improved semantic similarity to the ground truth ADDs.
*   Human evaluators generally rated DRAFT-generated ADDs as being of high quality, although some noted that they could be more detailed.

#### Why It Matters (Implications)

The research has several important implications:

*   **Improved ADR creation:** DRAFT can significantly reduce the manual effort required to create high-quality ADRs, making AKM more accessible to development teams.
*   **Privacy and resource constraints:** DRAFT is designed to work with smaller, fine-tuned LLMs, addressing privacy concerns and reducing the need for expensive hardware.
*   **Potential for continuous improvement:** DRAFT supports continuous improvement by allowing updates to its VDB, ensuring that the system stays up-to-date with the latest architectural knowledge.

However, the results also suggest areas for future work. The study used open-source LLMs so was restricted to the available pre-trained embeddings and architecture size. The responses also tended to be shorter which was perceived negatively by the participants. As such further work is required to validate whether a focus on API LLMs and alternative parameters could improve on those results.

#### Conclusion

DRAFT offers a promising approach to automating ADD generation and improving AKM. By combining retrieval-augmented generation with fine-tuning, DRAFT provides a practical and effective solution that addresses key challenges in the field. This research opens up new possibilities for leveraging LLMs to support software architects and improve the quality of software design decisions.

Original paper and code can be found on [GitHub](https://github.com/sa4s-serc/LLM4ADR).
`,R=`---
title: "Small Models, Big Tasks: Exploring Function Calling with Small Language Models"
excerpt: "Large Language Models (LLMs) excel at function calling, a critical task for automation, but their size poses challenges for resource-constrained environments. This research investigates the potential of Small Language Models (SLMs) for function calling through various techniques, offering insights into their performance and practical applicability."
date: "2025-04-27"
author: "Ishan Kavathekar, Raghav Donakanti, Ponnurangam Kumaraguru, Karthik Vaidhyanathan"
category: "AI/ML"
thumbnail: "/placeholder.svg"
---

## Introduction

In today's digital landscape, **function calling**, the process of converting natural language into structured commands for software execution, is crucial for diverse applications, including information retrieval, software engineering, and automation. Think of it as the translator between human instructions and what computers can understand. This capability allows us to seamlessly interact with machines and automate complex tasks.  However, the leading models are large and computationally expensive, which limits their use in edge computing environments.

## The Problem

**Large Language Models (LLMs)** are adept at function calling, but their computational demands and reliance on cloud infrastructure pose challenges for resource-constrained settings, such as edge devices. These environments require faster response times and lower computational overhead. Therefore, the challenge lies in finding a balance between model size, efficiency, and the ability to accurately perform function calls. **Small Language Models (SLMs)** offer a potential solution but their capabilities in this specific area remain largely unexplored.

## The Solution

This research paper presents an exploratory empirical study on the efficacy of SLMs in generating function calls. The authors evaluate various SLMs across diverse domains using zero-shot, few-shot, and fine-tuning approaches, while also analyzing the impact of prompt injection (PI). Furthermore, they perform experiments on an edge device to assess their performance in terms of latency and memory usage. The finetuned models developed by the authors are being released to allow for further research and applications.

## How It Works (Technical Deep Dive)

The study evaluates five SLMs, selected from the EvalPlus benchmark based on their coding capabilities and parameter size (up to 4 billion). The researchers utilized the Salesforce XLAM Function Calling dataset, a high-quality resource specifically designed for function calling tasks with 60,000 samples across domains such as technology, entertainment, and finance.

The SLMs were tested using three primary inference strategies:

*   **Zero-shot:** The model is prompted directly without any prior examples.
*   **Few-shot:** The model is provided with a few examples of task-answer pairs in the prompt to guide its response.
*   **Fine-tuning:** The model is retrained on task-specific data to improve its performance.

The researchers also investigated **prompt injection (PI)**, a technique where adversarial text is added to the initial prompt to alter the model's output. This was done to assess the robustness of the SLMs to minor perturbations.  For this, non-sensical random characters (alphanumeric, special, and unicode) were appended to the user prompts.

Finally, experiments were conducted on an edge device (Qualcomm QIDK) to evaluate the practical applicability of the SLMs in constrained computational environments.  The GGUF variants of the models were used. **GGUF** is a storage format used for storing and running quantized LLMs efficiently on compute constrained devices.

#### Metrics

To evaluate the SLMs, the researchers introduced five novel metrics:

*   **JSON Parsability:** Measures whether the model's output adheres to a valid JSON structure.
*   **Task Accuracy:** Evaluates the overall correctness of the function calls.
*   **Correct Ratio:** Measures the proportion of data points where the Task Accuracy is exactly 1.
*   **Function Selection Performance (FSP):** Measures the model's ability to select the correct function from a given set of available functions.
*   **Argument Completeness Score (ACS):** Assesses the model's ability to include the necessary argument names in its function calls.
*   **Argument Value Correctness (AVC):** Assesses whether the model assigns the correct values to the arguments.

## Key Results

The study's findings reveal several key insights:

*   SLMs struggle to generate accurate function calls in a zero-shot setting, with most models failing to comply with the given output format.
*   Few-shot learning significantly improves performance for some models, but others still struggle.
*   Fine-tuning enhances performance and robustness against prompt injection attacks for certain models.
*   Edge device deployment shows that specific SLMs, like Deepseek-Coder, offer a good balance between performance, latency, and memory usage.

A central result is that finetuned models perform significantly better than zero-shot and few-shot settings, however, many models continue to have zero values (meaning total failure) even after fine tuning (see Table 2 in the paper).

## Why It Matters (Implications)

This research highlights the potential and limitations of SLMs for function calling. While SLMs can operate efficiently in resource-constrained environments, they require further refinement to improve their accuracy, robustness, and adherence to structured output formats.  

The implication of this research is to facilitate the creation of sustainable software systems through the decomposition of large tasks into smaller, specialized ones. This study opens the door to hybrid deployment strategies (such as edge-cloud collaboration) that reduce latency and maintain robustness.

Future directions include exploring language-specific function call generation, assessing the models' generalizability across different function calling domains, and developing robust defense mechanisms against prompt injection attacks.  There is also an opportunity to develop methods to validate and "clean" the prompt before passing it to the SLM.

## Conclusion

This study provides valuable insights into the capabilities of SLMs for function calling. While challenges remain, the potential benefits of SLMs in terms of efficiency and scalability make them a promising alternative to LLMs in specific applications.  Continued research and development in this area will pave the way for more sustainable and efficient software systems.

[Link to the original paper (if available): [Insert ArXiv Link Here]]
[Link to the code repository (if available): https://github.com/Raghav010/Small-Models-Big-Tasks]
\`\`\`
`,C=`---
title: "Generating Energy-Efficient Code via Large-Language Models – Where are we now?"
excerpt: "We know LLMs can write code quickly, but can they write code that saves energy? A large-scale empirical study compares top AI models against human developers and a green software expert to find out if AI is truly sustainable."
date: "2025-09-12"
author: "Radu Apsan, Vincenzo Stoico, Michel Albonico, Rudra Dhar, Karthik Vaidhyanathan, Ivano Malavolta"
category: "AI/ML"
thumbnail: "/images/blogpic/2509.10099v1_p3_f1.png"
---

#### The Hidden Cost of AI Code
The rapid adoption of **Large Language Models (LLMs)** like ChatGPT and GitHub Copilot has revolutionized how we develop software. However, as we automate code generation, a critical question emerges: is the code being generated energy-efficient? With the rise of **Green AI** and the global focus on sustainability, the environmental footprint of the software we run is more important than ever.

A recent study titled "Generating Energy-Efficient Code via Large-Language Models – Where are we now?" takes a deep dive into this issue. Researchers put six state-of-the-art LLMs to the test to see how their Python code stacks up against both average human developers and specialized **Green software experts**.

![Overview of the study workflow, showing the selection of LLMs, guidelines elicitation, and experiment execution across different hardware.](/images/blogpic/2509.10099v1_p3_f1.png)

#### The Experiment: Models, Hardware, and Prompts
The researchers evaluated 363 different solutions to complex coding problems from the **EvoEval** benchmark. To ensure the results were robust, they tested across three distinct hardware platforms:
*   **Server:** Intel Xeon Silver
*   **PC:** Intel Core i9 with an Nvidia RTX 4070
*   **Raspberry Pi (RPi):** Cortex-A72 (ARM v8)

They compared six popular models, including **GPT-4**, **DeepSeek Coder**, and **Speechless Codellama**, using four different **prompt engineering** techniques: generic "functional" prompts, "energy-efficient" keywords, hardware-specific instructions, and "few-shot" examples.

#### Does AI Outperform Humans?
The results were a mixed bag. When compared to "canonical" (standard human-written) solutions, the LLMs' performance depended heavily on the hardware.

![Energy consumption comparison between canonical (human) and functional (LLM) solutions across Server, PC, and RPi.](/images/blogpic/2509.10099v1_p3_f1.png)

On a standard **PC**, the LLMs actually outperformed human-developed code by about **25%**. However, on **Servers** and **Raspberry Pis**, the humans held the lead, outperforming the AI by **16%** and **3%** respectively. Interestingly, **Speechless Codellama** emerged as the most efficient model for server-side tasks, while **WizardCoder** and **Code Millenials** performed better on smaller devices like the RPi.

#### The Magic of Prompt Engineering?
One might expect that telling an LLM to "be energy efficient" would yield better results. Surprisingly, the study found that **prompt engineering techniques** had a limited and inconsistent impact. 

![Energy consumption on the server for different models using various prompting techniques.](/images/blogpic/2509.10099v1_p3_f1.png)

While specific prompts did change the energy profile of the code, there was no single "silver bullet" prompt that worked across all models and hardware. In some cases, providing specific **green guidelines** actually increased the variability and unpredictability of the energy consumption.

#### The Human Advantage: The Green Expert
The most striking finding of the study was the comparison against a **Green software expert**. The researchers tasked an experienced developer with creating the most energy-efficient solutions possible.

![Energy consumption comparison between the Green expert and various LLM solutions.](/images/blogpic/2509.10099v1_p3_f1.png)

The **Green expert's code** consistently outperformed all LLMs across all platforms by at least **17% to 30%**. This suggests that while LLMs are good at generating functional code, they currently lack the deep reasoning required to optimize for hardware-specific energy constraints.

#### Key Takeaways for Developers
1.  **Context is King:** The energy efficiency of LLM code is **highly context-dependent**. Code that runs efficiently on your laptop might be an "energy vampire" on a server or an IoT device.
2.  **Expertise Still Matters:** We cannot yet rely on AI to write "green" code autonomously. Human expertise in **algorithmic efficiency** and **resource management** remains the gold standard.
3.  **Review LLM Output:** Developers should treat LLM-generated code as a starting point. Use established **green coding guidelines** (like avoiding redundant operations in loops or using high-performance libraries like NumPy correctly) to refine the AI's output.

#### Moving Toward a Greener Future
For LLM vendors, the message is clear: **energy efficiency** needs to become a first-class metric, alongside functional correctness. As we move toward a world where millions of lines of AI-generated code are deployed daily, even small inefficiencies can scale into massive environmental costs.

While AI is a powerful tool, the "Green Expert" isn't going anywhere just yet. For now, the most sustainable way to develop software is a partnership: using AI for speed, but relying on human wisdom to keep our carbon footprint in check.
`,F=`---
title: "POLARIS: Is Multi-Agentic Reasoning the Next Wave in Engineering Self-Adaptive Systems?"
excerpt: "Traditional software adaptation relies on fixed rules that struggle with unpredictable environments. POLARIS introduces an AI-native framework that uses LLM-based agents to reason, verify, and learn from its own adaptation strategies in real-time."
date: "2025-12-07"
author: "Divyansh Pandey, Vyakhya Gupta, Prakhar Singhal, and Karthik Vaidhyanathan"
category: "AI/ML"
thumbnail: "/images/blogpic/2512.04702v2_p4_f1.png"
---


#### The Evolution of Self-Adaptive Systems

In the world of modern software, complexity is the only constant. From massive cloud infrastructures to autonomous cyber-physical systems, software must now manage itself with minimal human intervention. Traditionally, this was achieved through **self-adaptive systems** using feedback loops like the **MAPE-K model** (Monitor, Analyze, Plan, Execute, and Knowledge). 

However, these traditional systems have a major weakness: they are often rule-driven. They excel at managing predictable uncertainties but crumble when faced with "unknown unknowns"—emergent behaviors or novel environments they weren't explicitly programmed to handle. 

Enter **POLARIS** (**P**roactive **O**rchestrated **L**earning for **A**gentic and **R**easoning-driven **I**ntelligent **S**ystems). This new framework marks a shift toward what researchers call **Self-Adaptation 3.0**, where systems don't just react to change; they reason about it and evolve their own adaptation strategies over time.

#### Introducing the POLARIS Framework

POLARIS is built on the idea that intelligence should be a first-class design principle. Instead of a single central controller, it uses a multi-layered architecture of interacting agents.

![The POLARIS Framework architecture showing the interaction between Adaptive Control, Reasoning, and Meta-Learning layers.](/images/blogpic/2512.04702v2_p4_f1.png)

The framework is organized into three distinct layers:

1.  **The Adaptive Control Layer (The Body):** This is the "hands" of the system. It handles real-time monitoring through a **Metric Collector** and executes commands via an **Execution Adapter**. It ensures that the system stays stable during immediate crises.
2.  **The Reasoning and Knowledge Layer (The Mind):** This layer uses **LLM-based agents** to plan and verify strategies. Unlike a fixed rulebook, the **Reasoner Agent** can look at current telemetry, query a **Knowledge Base** of past experiences, and use a **World Model** to simulate "what-if" scenarios before making a move.
3.  **The Meta-Learning Layer (The Wisdom):** This is the "memory" that enables long-term improvement. The **Meta-Learner Agent** periodically analyzes the system's performance, identifies patterns, and updates the Reasoner's logic or thresholds to prevent future issues.

#### How It Works: The Three Loops of Adaptation

POLARIS operates through three nested feedback loops that handle different timescales:

*   **Reactive Stabilization (Immediate):** If the system hits a critical threshold (like a sudden spike in response time), a **Fast Controller** executes a pre-defined, low-latency script to stabilize the system instantly.
*   **Proactive Adaptation (Short-term):** Once the system is stable, the **Reasoner Agent** takes over. It analyzes trends to anticipate future problems, using natural language reasoning to decide on complex actions like scaling servers or adjusting processing fidelity.
*   **Meta-Learning (Long-term):** This loop reflects on past adaptation cycles. If the Meta-Learner notices that the system consistently reacts too late to a specific load pattern, it can proactively lower the safety thresholds to prevent those spikes from happening in the first place.

#### Testing POLARIS: Proven Performance

The researchers evaluated POLARIS across two very different scenarios: **SWIM** (a web application simulator) and **SWITCH** (a machine learning-enabled system).

In the SWIM exemplar, POLARIS achieved a **Total Utility of 5445.48**, outperforming traditional state-of-the-art baselines like Cobra and PLA. More importantly, the ablation studies showed that the combination of the Meta-Learner and the Fast Controller significantly improved both stability and utility over time.


On the SWITCH system—which switches between different AI models to balance speed and accuracy—POLARIS showed even more dramatic efficiency gains:
*   **27.3% lower median response time**
*   **14.9% lower CPU usage**
*   **87.1% reduction in disruptive model switches**

#### Why Multi-Agentic Reasoning Matters

The real power of POLARIS isn't just in using Large Language Models (LLMs); it's in the **orchestration**. By providing the LLM with specialized tools (Knowledge Base, World Model) and a **Verification Agent** as a safety backstop, the framework mitigates common AI issues like hallucinations or inconsistent decision-making.


As shown in the figure above, the Meta-learner acts like an expert systems engineer, constantly refining the "logic" and "heuristics" the system uses to operate.

#### Conclusion: The Future is Agentic

POLARIS represents a significant step toward **Software 3.0**. By moving from passive execution to reasoning-driven adaptation, we can build autonomous systems that are not only more resilient but also capable of learning from their own mistakes. 

As we move toward a future where AI components are integrated into every layer of our software stack, frameworks that can manage the resulting "AI-induced uncertainty" will be essential. POLARIS provides a blueprint for how we can build those intelligent, self-evolving systems of tomorrow.
`,q=`---
title: "SWEnergy: An Empirical Study on Energy Efficiency in Agentic Issue Resolution Frameworks with SLMs"
excerpt: "As we push for local and sustainable AI, Small Language Models (SLMs) seem like a perfect fit for autonomous coding. However, new research reveals a massive efficiency gap: current frameworks often waste energy on 'unproductive reasoning loops,' burning resources without solving problems."
date: "2025-12-11"
author: "Arihant Tripathy, Ch Pavan Harshit, Karthik Vaidhyanathan"
category: "AI/ML"
thumbnail: "/images/blogpic/2512.09543v2_p3_f1.png"
---

#### The Promise and Peril of Local AI Agents

Autonomous agents powered by Large Language Models (LLMs) are transforming software engineering by fixing bugs and resolving GitHub issues independently. However, the heavy reliance on massive, cloud-hosted models creates a sustainability crisis. This has led to a surge of interest in **Small Language Models (SLMs)**—models with a few billion parameters that can run on consumer-grade hardware.

But there is a catch. Most agentic frameworks were designed for the "big brains" of GPT-4 or Claude. When you swap out a giant LLM for a smaller SLM, the system doesn't just get dumber; it becomes remarkably inefficient. A recent study titled **SWEnergy** dives into this "performance-efficiency frontier," revealing that current agent architectures are fundamentally mismatched with the capabilities of smaller models.

![Overall study design showing the major phases of the SWEnergy experiment.](/images/blogpic/2512.09543v2_p3_f1.png)

#### The Experiment: Testing the Limits of SLMs

The researchers evaluated four leading agentic frameworks—**SWE-Agent**, **OpenHands**, **AutoCodeRover**, and **Mini SWE Agent**—paired with two popular SLMs: **Gemma-3 4B** and **Qwen-3 1.7B**. Using the **SWE-bench Verified Mini** benchmark, they measured success rates alongside "hardware-level" metrics like CPU/GPU energy consumption, token usage, and memory.

The goal was simple: Could these lightweight systems actually solve real-world software issues, and at what cost?

#### Key Finding 1: Architecture is the Primary Driver of Energy

The study found a staggering difference in energy consumption across frameworks. Even when using the exact same model (Gemma-3 4B), **AutoCodeRover** consumed **9.4x more energy** on average than **OpenHands**. 

Why the massive gap? It comes down to "chattiness" and runtime. Frameworks that use **ReAct-style prompting** (thought-action-observation loops) often get stuck in repetitive cycles. These "unproductive reasoning loops" burn through tokens and energy without moving the needle on the actual task.


#### Key Finding 2: Energy is Mostly Wasted

Perhaps the most discouraging finding was that the extra energy spent rarely led to success. Across 150 runs, task resolution rates were near zero.
*   **AutoCodeRover** (with Qwen) achieved a measly **4% success rate** but was the most resource-intensive.
*   **OpenHands** was the most efficient but resolved **zero issues**.

The data shows that energy consumption is strongly correlated with **Wall-Clock Duration** (r = 0.89) and **Output Tokens** (r = 0.88). In other words, the longer an agent "thinks" out loud, the more energy it drains, regardless of whether it's actually getting closer to a solution.

#### Why do SLM Agents Fail?

By analyzing the execution logs, the researchers identified distinct failure "signatures" for different architectures. 

1.  **Step Repetition:** Agents often get stuck repeating the same failing command.
2.  **Context Loss:** "Chatty" agents generate so much text that they exceed their own memory (context window), leading to a total collapse of reasoning.
3.  **False Positives:** In a concerning trend, some low-energy runs were marked "successful" by the framework even when they produced syntactically invalid code. Low energy consumption can sometimes mask critical functional failures.


#### Lessons for the Future of Sustainable AI

The researchers conclude that we cannot simply "plug and play" SLMs into frameworks built for LLMs. Current frameworks act as **passive orchestrators**: they provide tools and wait for the model to use them correctly. When the model’s reasoning is weak, this paradigm collapses.

To make local, sustainable AI agents a reality, we need a shift toward **active management**:
*   **SLM-Aware Safeguards:** Frameworks must detect when an agent is stuck in a loop and intervene.
*   **Guided Exploration:** Instead of broad "grep" commands that overwhelm the model, frameworks should curate the information provided to the SLM.
*   **Independent Verification:** Agents shouldn't be allowed to grade their own homework. Robust, external validation layers are required to catch "false positives."

#### Conclusion

The journey toward sustainable software engineering requires more than just smaller models; it requires **smarter frameworks**. By treating a model's limitations as a core design constraint, developers can build the next generation of autonomous agents—ones that are not only effective but also environmentally responsible and accessible for local deployment.
`,z=`---
title: "Beyond Task Completion: An Assessment Framework for Evaluating Agentic AI Systems"
excerpt: "Traditional AI evaluation focuses on whether a task was completed, but agentic systems are far more complex. This new framework introduces four critical pillars—LLM, Memory, Tools, and Environment—to capture the subtle behavioral failures that simple success metrics miss."
date: "2025-12-16"
author: "Sreemaee Akshathala, Bassam Adnan, Mahisha Ramesh, Karthik Vaidhyanathan, Basil Muhammed, Kannan Parthasarathy"
category: "AI/ML"
thumbnail: "/images/blogpic/2512.12791v2_p2_f1.png"
---

The world of Artificial Intelligence is moving fast. We have shifted from simple chatbots to **agentic AI systems**—complex architectures where Large Language Models (LLMs) act as reasoning engines, interacting with memory systems, external tools, and dynamic environments to automate entire workflows.

However, as these systems move from prototypes to production, a glaring problem has emerged: **We don't know how to properly evaluate them.**

In a recent paper, researchers from IIIT-Hyderabad and MontyCloud Inc. argue that our current metrics are failing us. Relying on "task completion" (a simple pass/fail) ignores the non-deterministic nature of AI. An agent might finish a task but violate a security policy, skip a mandatory verification step, or hallucinate a tool parameter along the way.

To solve this, the researchers have proposed a comprehensive **Agent Assessment Framework** designed to look "beyond task completion."

#### The Four Pillars of Agentic AI

To evaluate an agent thoroughly, you have to look at the individual components that make it "agentic." The framework breaks evaluation down into four essential pillars:

1.  **LLM (The Brain):** Evaluates reasoning, **instruction following**, and **safety alignment**. Does the agent respect its system prompt? Does it follow rule-based workflows?
2.  **Memory (The Context):** Evaluates how well the agent stores and retrieves information. This includes **storage consistency** (avoiding duplicate or obsolete info) and **retrieval accuracy** (finding the right needle in the haystack).
3.  **Tools (The Hands):** Focuses on how the agent interacts with the world. This measures **tool selection**, **parameter mapping**, and **sequencing**. Did the agent use the right tool in the right order with the right arguments?
4.  **Environment (The World):** Evaluates the agent within its operational context, including **guardrails** and **resource limitations**.

![Agent Assessment Framework Overview](/images/blogpic/2512.12791v2_p2_f1.png)

#### A Multi-Layered Approach to Analysis

Because agents are non-deterministic, a single test isn't enough. The proposed framework employs three distinct layers of analysis to capture a full picture of agent behavior:

*   **Static Analysis:** Validates the agent's behavior against predefined "gold-standard" specifications. For example, checking if the agent's tool invocation logs match a known-correct sequence.
*   **Dynamic Execution:** Monitors the agent in a live (or sandboxed) environment to detect runtime deviations, such as policy violations or failed error handling.
*   **Judge-based Evaluation:** Uses **LLM-as-a-Judge** or **Agent-as-a-Judge** protocols to qualitatively assess reasoning and safety. This is crucial for capturing "soft" failures that code-based checks might miss.

![Detailed view of Agent Assessment Framework](/images/blogpic/2512.12791v2_p2_f1.png)

#### Real-World Validation: The CloudOps Challenge

The researchers tested their framework on **CloudOps** (Cloud Operations) scenarios—a high-stakes environment where an AI agent might be responsible for provisioning servers or responding to security incidents.

The results were eye-opening. In one scenario (S1: Cost Optimization), the baseline metrics showed the agent was performing well. However, the framework's **Static Analysis** revealed that while the agent completed the task, it only followed the required safety policies **33% of the time**. It was essentially cutting corners to get the job done—a behavior that would be disastrous in a production cloud environment.

In another scenario (S2: Security Incident Response), the agent completed the task (100% success), but the framework detected a **Memory Recall** rate of only **13.1%**. The agent was succeeding by luck or sheer model capability rather than properly utilizing the provided historical context and security logs.

#### The Cost of Certainty

One common concern with advanced evaluation is the cost and time involved. The researchers measured the overhead of their framework and found a distinct trade-off:

*   **LLM-as-a-Judge:** Highly efficient, adding only about $0.06 in cost and 15 seconds of time. This is ideal for continuous monitoring.
*   **Agent-as-a-Judge:** Much more expensive and slower (up to 62x longer), but provides deep, "auditor-level" insights. This is best suited for pre-deployment audits.

![Distribution of input tokens, output tokens, response time, and cost across scenarios](/images/blogpic/2512.12791v2_p2_f1.png)

#### Why This Matters for the Future of AI

As we move toward "Autonomous Clouds" and AI-driven software engineering, the stakes for agent reliability are higher than ever. If we only measure whether an agent "finished the job," we remain blind to the risks it took to get there.

This framework provides a roadmap for both researchers and practitioners to build safer, more predictable agentic systems. By shifting our focus to **behavioral reliability** across the pillars of memory, tools, and reasoning, we can finally move AI agents from experimental prototypes to trusted production partners.

![Evaluation overhead comparison showing (a) cost and (b) time for LLM-as-judge and Agent-as-judge protocols](/images/blogpic/2512.12791v2_p2_f1.png)

For those looking to implement these evaluations, the researchers have made their experiments and results available on **GitHub**, setting a new standard for transparency in agentic AI assessment.
`,O=`---
title: "Architecting AgentOps Needs CHANGE"
excerpt: "Traditional MLOps falls short when AI agents start learning on the job. Discover the CHANGE framework—a new blueprint for architecting reliable, autonomous, and co-evolving Agentic AI systems."
date: "2026-01-10"
author: "Shaunak Biswas, Hiya Bhatt, and Karthik Vaidhyanathan"
category: "AI Engineering"
thumbnail: "/images/blogpic/2601.06456v1_p3_f1.png"
---

#### The Shift from Models to Agents

The world of software is moving fast. We’ve graduated from deterministic code (**DevOps**) to statistical models (**MLOps**) and recently to Large Language Model pipelines (**LLMOps**). But a new challenger has emerged: **Agentic AI**.

Unlike traditional software, AI agents are not fixed at the moment of deployment. They use LLMs as reasoning engines to interpret complex situations, use external tools, and—most importantly—learn from their experiences. This ability to "think, learn, and evolve" creates a massive headache for engineers. How do you maintain a system whose behavior changes every day?

According to a recent paper from researchers at IIIT Hyderabad, the answer isn't just better tools—it's a fundamental shift in architecture. They call this framework **CHANGE**.

#### Why MLOps Isn't Enough for Agents

Traditional operational thinking assumes you can manage a system through versioning and rollbacks. If a model breaks, you revert to the previous version. 

However, **Agentic AI** systems are non-deterministic. Two identical agents might start at the same point but, after handling different customer interactions, develop completely different "personalities" or strategies. Standard metrics like latency or accuracy don't tell you *how* an agent's reasoning is drifting. 

The researchers argue that we need to stop trying to strictly control agents and start enabling a **dynamic co-evolution** between agents, infrastructure, and human oversight.

#### Introducing the CHANGE Framework

To guide this transition, the authors propose **CHANGE**, a conceptual framework consisting of six essential capabilities for any **AgentOps** platform.

![The CHANGE framework illustrated through agent interaction scenarios](/images/blogpic/2601.06456v1_p3_f1.png)

#### 1. Contextualize: Mapping the Agent's Journey
An agent’s behavior is driven by its **experiential history**. **Contextualize** requires the system to record what an agent has learned and when. 
*   **The Scenario:** Imagine Alice, a customer support agent. Over time, she learns that being extra empathetic helps de-escalate angry customers, even if it slightly deviates from strict company scripts. 
*   **The Fix:** Instead of treating this deviation as an error, the system treats it as a versioned "cognitive state" that operators can replay to understand her new strategy.

#### 2. Harmonize: Keeping the Team in Sync
In a multi-agent system, agents often evolve in different directions, leading to conflict.
*   **The Scenario:** Alice (Support) focuses on empathy, while Bob (Logistics) focuses on efficiency. Eventually, their advice to customers starts to clash.
*   **The Fix:** **Harmonize** uses a "behavioral consensus protocol." Agents share summarized reasoning in a **common knowledge space**, allowing the system to detect misalignments early and trigger a coordination step to get everyone back on the same page.

#### 3. Anticipate: Predicting Behavioral Drift
Traditional "model drift" happens when data changes. Agentic drift happens because of the agent's own interactions.
*   **The Capability:** **Anticipate** uses a **digital twin** or "sandbox" environment. When potential drift is detected in the real world, a mirrored version of the agent is tested in the sandbox against extreme scenarios to see how it might fail before it actually does.

#### 4. Negotiate: Balancing Autonomy and Oversight
How much freedom should an agent have? 
*   **The Capability:** **Negotiate** provides a structured way for agents to ask for more autonomy. If Alice encounters a complex refund case not covered by policy, she can request temporary permission to handle it. A human supervisor reviews her reasoning and decides whether to expand her "boundaries of adaptation."

#### 5. Generate: Letting Agents Build Their Own Tools
Sometimes, the tools provided at deployment aren't enough for the tasks an agent discovers.
*   **The Capability:** **Generate** allows agents to propose new tools or processes. These are first tested in a controlled environment for safety and reliability. If they pass, they are integrated into the system’s toolkit, allowing the system to grow organically based on real operational needs.

#### 6. Evolve: Governing the Long-Term Lifecycle
The final piece of the puzzle is managing the transition from one "generation" of an agent to the next.
*   **The Process:** Using **Knowledge Distillation**, the system can take the successful strategies learned by an old agent (Agent v1) and "distill" them into a new version (Agent v2) with updated base policies. This ensures that valuable experience isn't lost when the system is upgraded.

#### A New Call to Action for AI Engineers

The rise of **Agentic AI** means we can no longer specify every behavior at design time. As the paper concludes, the goal isn't to stop agents from changing, but to make that change **observable and well-governed**.

The **CHANGE** framework provides the first steps toward a disciplined **AgentOps** practice. For software architects, the challenge is now clear: we must build systems that don't just execute code, but responsibly manage the evolution of "thinking" machines.
`,B=`---
title: "Meet ArchLearner: The AI That Predicts and Prevents IoT System Failures"
excerpt: "In the sprawling world of IoT, unexpected issues can cripple performance. Researchers have developed ArchLearner, a new tool that uses machine learning to forecast future problems and automatically adapt a system's architecture, ensuring it stays efficient and reliable."
date: "2019-09-09"
author: "Henry Muccini, Karthik Vaidhyanathan"
category: "AI/ML"
thumbnail: "/images/blogpic/3344948.3344962_p2_f1.png"
---

From smart homes to entire smart cities, the Internet of Things (IoT) is becoming deeply woven into our daily lives. But as these systems grow more complex, they also become more fragile. How do you ensure a network of battery-powered sensors doesn't die during a critical event? How do you prevent network-clogging data traffic from slowing the whole system down?

Traditionally, we fix these problems *after* they happen. But what if a system could predict and prevent them automatically? That's the vision behind **ArchLearner**, a new framework that acts like an AI co-pilot for your IoT system, proactively adapting its architecture to keep it running smoothly.

#### The Challenge: Juggling Performance and Resources

In any IoT system, there's a constant tug-of-war over **Quality of Service (QoS)**. You want high accuracy, which often means sending lots of data, but that consumes more energy and network bandwidth. For battery-powered devices, high energy consumption can be a fatal flaw. Researchers from the University of L'Aquila and Gran Sasso Science Institute realized that the key was to move from a reactive to a **proactive** approach, using machine learning to look into the future.

#### Inside ArchLearner: A 5-Layer Engine for Smart Adaptation

ArchLearner is built on an enterprise-grade big data stack, designed to process information in real-time and make intelligent decisions. Its architecture is composed of five distinct layers that work together in a continuous pipeline.


![The 5-layer data pipeline of the ArchLearner framework.](/images/blogpic/3344948.3344962_p2_f1.png)


1.  **Architecture & Simulation:** This is the starting point, where the IoT system's architecture is modeled. The team used an open-source tool called CupCarbon to simulate the system and generate the initial data logs for energy use and data traffic.
2.  **Event Queuing System:** As the system runs, it generates a stream of real-time data. **Apache Kafka**, a tool designed for high-throughput data streaming, queues up these events (like energy logs) to be processed.
3.  **Stream Analytics (The Brains):** This is the heart of ArchLearner. Using **Apache Spark** for real-time data processing, this layer feeds data to a machine learning engine. This engine uses:
    *   **LSTM (Long Short-Term Memory) networks:** A type of neural network perfect for time-series data. It forecasts future energy consumption and data traffic based on current trends.
    *   **Q-Learning:** A reinforcement learning algorithm that acts as the **decision-maker**. Based on the LSTM's forecast, it decides which of the three predefined self-adaptation patterns is the best strategy to apply to avoid future problems.
4.  **Persistence:** The processed data and system states are stored in **Elasticsearch**. This creates a historical record that can be used for visualization and for periodically retraining the machine learning models to make them even smarter.
5.  **Presentation:** Using dashboards in **Kibana** and a custom JavaFX interface, developers can visualize the system's real-time QoS data, monitor the adaptation process, and tweak configurations.

#### ArchLearner in Action: The "Street Science" Festival

To test their framework, the researchers developed an IoT solution for the *Notte dei Ricercatori* (NdR), a city-wide science festival. The system was designed to manage two key services:
*   **Automated Parking:** Using battery-powered mats to count cars at two ad-hoc parking lots.
*   **Automated Venue Control:** Using people counters and RFID readers to manage crowds at three different venues.

The main challenge was that the sensors were battery-powered and could only run for half a day. Swapping batteries during a crowded event would be a logistical nightmare. The system needed to conserve energy while still sending enough data to be useful.


![The architecture of the IoT system for the NdR case study, showing parking and venue control subsystems.](/images/blogpic/3344948.3344962_p2_f1.png)


ArchLearner monitored the system, forecasting when a group of sensors was in danger of high energy use or causing network congestion. When it predicted a problem, the **Q-learning** decision-maker would automatically switch the system to a more efficient operational pattern—for example, reducing the frequency of data transmission from sensors in a low-traffic area.

#### The AI That Learns from Experience

The most powerful aspect of ArchLearner is its ability to learn. The Q-learning algorithm receives a "reward" or "penalty" for each decision it makes. A decision that leads to low energy use and optimal data traffic gets a high reward. A decision that leads to a high-energy state gets a penalty. Over time, the algorithm learns to favor the decisions that lead to the best outcomes, continuously improving the system's efficiency.

#### The Verdict: Impressive Results

The results speak for themselves. By proactively adapting, ArchLearner was able to:
*   **Extend sensor lifetime by approximately two hours** compared to a static configuration.
*   Keep the system's overall data traffic within acceptable thresholds.
*   Improve its energy and data savings over time as the Q-learning model refined its strategy.
*   Perform the entire forecast-and-decide process in a blistering **0.023 seconds** on average, thanks to the efficiency of the pre-trained LSTM models.

By leveraging a powerful combination of forecasting and reinforcement learning, ArchLearner demonstrates a promising future for self-adapting systems. It's a significant step towards creating truly autonomous and resilient IoT architectures that can handle the uncertainties of the real world, not just in theory, but in practice.
`,W=`---
title: "FEAST: A Framework for Architecting Robust Self-Adaptive IoT Systems"
excerpt: "IoT systems face run-time uncertainties, impacting their quality of service. This paper presents FEAST, a framework that guides architects in systematically designing, analyzing, and evaluating different architectural strategies for self-adaptive IoT systems, ultimately improving their resilience and performance."
date: "2022-04-25"
author: "Federico Di Menna, Henry Muccini, Karthik Vaidhyanathan"
category: "Network Systems"
thumbnail: "/images/blogpic/3477314.3507146_main.png"
---

In today's interconnected world, **Internet of Things (IoT)** systems are becoming increasingly prevalent. From smart homes to industrial automation, these systems promise to revolutionize how we interact with our environment. However, the dynamic and unpredictable nature of IoT deployments introduces significant challenges, particularly in ensuring reliable performance and **Quality of Service (QoS)**.

#### The Problem

IoT systems operate in constantly changing environments, facing uncertainties like fluctuating network conditions, device failures, and varying workloads. These uncertainties can negatively impact the QoS, leading to degraded performance or even system failures. Traditional approaches often focus on improving the adaptation logic *within* the managing system, neglecting the impact of the managing system's *own* implementation architecture. The chosen architecture can significantly influence the overall QoS, potentially hindering the effectiveness of adaptations.

#### The Solution

This research introduces **FEAST**, a novel framework designed to empower architects in systematically designing, analyzing, and evaluating different architectural strategies for the managing system of self-adaptive IoT systems. FEAST allows architects to explore various implementation options and select the architecture that best meets the system's adaptation goals and QoS requirements.

#### How It Works (Technical Deep Dive)

FEAST is based on the **Cost-Benefit Analysis Method (CBAM)** and consists of four key stages:

1.  **Define Scenarios:** This stage involves identifying different operational scenarios that the IoT system might encounter. For example, in a smart parking system, scenarios could include peak hours, low occupancy periods, or unexpected events like road closures.  Architects also specify QoS goals for both the managed system and the managing system for each scenario. For instance, a QoS goal for the managed system could be to maintain sensor energy consumption below a certain threshold, while a goal for the managing system could be to minimize adaptation response time.

2.  **Define Architectural Strategies (AS):**  This stage focuses on generating different architectural options for implementing the managing system, considering aspects like component technologies, communication mechanisms, and data storage strategies. The paper proposes three base AS:

    *   **Centralized Connector:** All components communicate through a central component, which acts as the knowledge base. Imagine a central "hub" where all information flows. This can be implemented using a database, cloud storage, or a centralized file system.
    *   **Publish-Subscribe Connector:** Components communicate via topics, allowing for loose coupling and asynchronous communication.  Think of it like subscribing to different channels for information. This can be implemented using message brokers like Apache Kafka.
    *   **Socket Connector:** Components communicate directly through TCP-based socket connections. This is like a direct phone line between each component.

    Architectural Strategies Composition integrates each of these strategies with the IoT system to generate a working prototype.

3.  **Analysis:** This is the core of FEAST, where different architectural strategies are evaluated against the defined scenarios and QoS goals. This involves simulating the IoT system and analyzing performance metrics like energy consumption, response time, and adaptation frequency. The analysis stage incorporates the Cost Utility and Benefit Utility functions. The former is applied to the QoS values extracted from the managing system's execution logs, and the latter is applied to the values obtained from the IoT system's logs.
    CupCarbon IoT simulator is used for these simulations.

4.  **Evaluation:**  In the final stage, the results of the analysis are used to calculate the **Return on Investment (ROI)** for each architectural strategy. The ROI is calculated as the ratio of the benefits achieved by the strategy (e.g., reduced energy consumption) to the costs incurred (e.g., increased response time). The strategy with the highest ROI is considered the optimal choice for implementing the managing system.

#### Key Results

The authors demonstrated the effectiveness of FEAST by applying it to a real-world case study involving a smart event management system. The results showed that the optimal architectural strategy varied depending on the specific scenario and QoS goals. For example, in scenarios with high data intensity, a socket-based connector proved to be the most efficient, while in other scenarios, a centralized connector offered better performance.

#### Why It Matters (Implications)

FEAST provides a systematic and data-driven approach to architecting self-adaptive IoT systems. This can lead to:

*   **Improved QoS:** By selecting the right architectural strategy, FEAST can help ensure that IoT systems maintain optimal performance and reliability, even in dynamic environments.
*   **Reduced Costs:** By considering both costs and benefits, FEAST can help architects make informed decisions that minimize implementation and operational expenses.
*   **Increased Agility:** FEAST enables architects to quickly evaluate different design options and adapt to changing requirements or new technologies.

The authors acknowledge that the generalizability and scalability of FEAST remain as areas for improvement. Their future work aims to address these limitations by applying FEAST to a wider range of systems and incorporating sustainability frameworks.

#### Conclusion

FEAST offers a valuable framework for architects to navigate the complexities of building self-adaptive IoT systems. By systematically evaluating different architectural strategies, FEAST enables the development of more robust, efficient, and resilient IoT solutions that can adapt to the challenges of the real world.

[Link to the original paper (if available)]
[Link to the code repository (if available)]

![FEAST Framework](/images/blogpic/3477314.3507146_figure2.png)

![Centralized connector](/images/blogpic/3477314.3507146_figure3.png)

![Publish Subscribe connector](/images/blogpic/3477314.3507146_figure4.png)

![Socket based connector](/images/blogpic/3477314.3507146_figure5.png)

![Scenario 1 - accumulated Return On Investiment](/images/blogpic/3477314.3507146_figure6.png)

![Scenario 2 - accumulated Return On Investiment](/images/blogpic/3477314.3507146_figure7.png)
`,H=`---
title: "MiLA4U: Building Self-Adapting IoT Apps That Prioritize User Goals"
excerpt: "Tired of rigid apps that force you into a set workflow? Researchers introduce MiLA4U, a novel approach for IoT systems that dynamically adapts to your changing goals. This multi-level system intelligently selects services and manages devices to give you what you want, when you want it, all while saving energy."
date: "2021-11-08"
author: "Martina De Sanctis, Henry Muccini, Karthik Vaidhyanathan"
category: "AI/ML"
thumbnail: "/images/blogpic/3494322.3494329_p3_f1.png"
---

Modern applications, especially in the Internet of Things (IoT) space, are often built using flexible components called microservices. Yet, from a user's perspective, they can feel surprisingly rigid. We've all been there: you're forced to follow a predefined sequence of steps, even if it doesn't match what you actually want to do. The software dictates the workflow, and you, the user, have to adapt.

What if we flipped that script? What if the software could adapt to *you*? That's the core idea behind **MiLA4U (Multi-level Adaptation for You)**, a new approach developed by researchers that makes the user's dynamic goals the central driver of an application's behavior. It’s a shift from a system-centric to a human-centric design, where the application’s workflow is assembled on the fly to meet your needs.

#### The Problem: Static Flows in a Dynamic World

To understand the problem MiLA4U solves, let's look at the motivating case study: a mobile app called "NdR" designed for a large, multi-venue street science fair. The app helps attendees with tasks like booking event tickets, finding parking, checking venue capacity, and getting weather updates.


![High-level architecture of the NdR Application](/images/blogpic/3494322.3494329_p2_f1.png)


A typical, rigidly designed version of this app might force a user into a static flow: \`check availability → book venue → get parking recommendation → check weather\`. But what if a user's decision to attend an outdoor event depends on the weather? They'd want to check the weather *first*. In a conventional app, this isn't possible. The user is stuck adapting to the app's logic.

#### Enter MiLA4U: A Three-Level Adaptation System

MiLA4U introduces a dynamic, multi-level adaptation process that operates across the **user**, **microservice**, and **IoT device** levels. It intelligently monitors the system and makes real-time adjustments to best satisfy the user's goal while optimizing performance and resource usage.


![The overall multi-level adaptation process of MiLA4U](/images/blogpic/3494322.3494329_p3_f1.png)


Let's break down how it works.

#### Level 1: Understanding the User's Goal

At the heart of MiLA4U is a **Goal Model**. Instead of being locked into a single workflow, the user can express what they want to achieve. The system translates this into a formal goal. For example, a user deciding between events might trigger a goal like: \`one_of ['weather_checking', 'parking_recommendation']\`. This tells the system the user wants to accomplish one of those two tasks, and it can break the sequence as soon as one is successfully completed.

A **User Goal Parser** interprets these goals, and a **Service Manager** is responsible for figuring out the best way to achieve them using the available microservices. It supports various control-flow constructs like **\`seq\`** (sequence), **\`and\`**, **\`or\`**, and **\`one_of\`**, allowing for the creation of complex, customized application workflows on the fly.

#### Level 2: Optimizing the Microservices

Once the system knows *what* the user wants, it needs to figure out *how* to do it efficiently. This is where the microservice-level adaptation comes in. An application might have multiple running instances of a single microservice (e.g., several instances of the "parking service" running in different cloud locations).

A component called the **Decision Maker** constantly analyzes **Quality-of-Service (QoS)** data like response time and availability for all microservice instances. It creates a ranked list of the best-performing instances for each task. When the Service Manager needs to call the parking service, it uses this list to select the optimal instance, ensuring the user gets the fastest possible response.

#### Level 3: Smartening Up the IoT Devices

The final layer of intelligence is at the device level. The NdR app relies on data from physical IoT sensors—people counters in venues, smart parking mats, and QR code readers. These devices consume energy every time they transmit data.

The **IoT Adapter** in MiLA4U makes this process more efficient. It monitors how frequently each microservice is being used. For instance, if very few users are currently using the "event booking" service, the adapter can intelligently tell the associated people-counter sensors to reduce their data transmission frequency. This saves significant energy without impacting the user experience, as the high-frequency data isn't needed at that moment. When demand for the booking service picks up, the sensor frequency is automatically increased again.

#### Putting MiLA4U to the Test

The researchers evaluated MiLA4U by comparing it against three baseline approaches in a 5-hour, real-world simulation:

1.  **SN (Static-No-adaptation):** A traditional, rigid app with no adaptation.
2.  **SA (Static-Adaptation):** A rigid app that can still adapt its microservices and IoT devices for QoS.
3.  **DN (Dynamic-No-adaptation):** An app that allows dynamic user goals but selects services randomly without QoS optimization.
4.  **DA (Dynamic-Adaptation):** The full MiLA4U approach.

The results were clear and compelling.


![Charts showing the experimental results of MiLA4U compared to baselines.](/images/blogpic/3494322.3494329_p7_f1.png)


-   **Overall Utility:** MiLA4U (DA) provided a significantly better overall user experience (utility score) compared to all other approaches, as shown in chart (a).
-   **Goal Satisfaction:** It was far more effective at satisfying user goals, with an average goal utility 70% higher than the static approaches and 31% higher than the non-adaptive dynamic one (chart b).
-   **Faster Response:** For complex goals, MiLA4U reduced the average response time by 15-20% compared to the DN approach (chart c).
-   **Energy Savings:** MiLA4U was the most energy-efficient, saving around 20% more energy than the static and non-adaptive dynamic approaches by intelligently managing the IoT sensors (chart d).
-   **Low Overhead:** All this complex, real-time decision-making was achieved with very low computational overhead, proving the approach is both effective and practical.

#### The Future is Adaptive

MiLA4U presents a powerful vision for the future of software. By placing the user's goals at the center and building a multi-level system that can dynamically adapt services and physical devices, it creates applications that are more flexible, efficient, and enjoyable to use. It’s a crucial step towards a world where technology truly works for us, bending to our needs rather than forcing us to bend to its limitations.`,K=`---
title: "Smarter Apps: How Reinforcement Learning Adapts UIs to Your Emotions"
excerpt: "What if your apps could react to your feelings in real-time? Researchers are exploring how systems can adapt their user interface based on your emotions, using a powerful AI technique called reinforcement learning to create a more effective and satisfying user experience."
date: "2023-06-26"
author: "Mina Alipour, Mahyar T. Moghaddam, Karthik Vaidhyanathan, and Mikkel Baun Kjærgaard"
category: "AI/ML"
thumbnail: "/images/blogpic/3565472.3595614_p3_f1.png"
---

Have you ever wished your phone just *knew* what you needed? Can an app react intelligently when you're feeling frustrated, confused, or happy? These questions are at the heart of a fascinating area of research that treats human emotions not as an afterthought, but as a primary input for designing interactive systems.

Ignoring a user's emotional state can lead to clunky, unsatisfying, or even ineffective applications. While developers have tried to create adaptive user interfaces (UIs) before using rule-based or model-based systems, these approaches often fall short. Human behavior is dynamic, irrational, and hard to predict with a simple set of "if-then" rules.

A recent paper from the 2023 UMAP conference proposes a more intelligent solution: using **Model-Free Reinforcement Learning (MFRL)** to create UIs that learn and adapt to a user's emotions in real-time.

#### The Big Idea: An Emotion-Driven Adaptation Engine

The researchers designed a system that continuously learns the best way to change a UI to help users complete their tasks and improve their satisfaction. The approach is built around a continuous feedback loop that monitors emotions, analyzes them, and executes the most effective UI change.

The entire process can be broken down into three main parts:

1.  **Design-time:** Before the app even runs, developers define the building blocks. This includes choosing an **emotion model** (the paper uses Ekman's six basic emotions: joy, sadness, surprise, fear, disgust, and anger) and defining the potential **UI parameters** that can be changed (like font size, color schemes, or pop-up messages).
2.  **Interaction:** This is where the user and the system meet. The primary **sensor** is the device's camera, which captures the user's facial expressions. The **UI** is the canvas where the adaptations are displayed.
3.  **Run-time:** This is the brains of the operation. It uses the well-known **MAPE-K (Monitor, Analyze, Plan, Execute)** control loop. The system monitors the user's face, analyzes the emotion, and uses an MFRL agent to *plan* the best UI adaptation, which is then *executed* on the screen.


![A diagram showing the overall architecture, with Design-time, Run-time, and Interaction layers.](/images/blogpic/3565472.3595614_p3_f1.png)


At the core of this system is a type of MFRL called **Q-learning**. Think of it as a trial-and-error process. An AI "agent" learns by doing. It tries different actions (UI changes) in different states (a combination of the user's emotion and the current UI) and observes the result. Actions that lead to a positive outcome (like arousing a target emotion) receive a "reward," while those that don't are "punished." Over time, the agent builds a "cheat sheet" called a **Q-Table** that tells it the best action to take in any given situation to maximize its total reward.

#### The Case Study: Training for an Emergency

To test their approach in a high-stakes environment, the researchers developed a mobile app called **EvacuationApp**. This app is designed to train people on how to safely and quickly evacuate a hazardous area. This scenario is ideal because emergencies naturally evoke strong emotions.

The app continuously tracks the user's location and, crucially, their facial expressions. Based on the detected emotion, the system intelligently adapts the UI to influence their behavior and guide them to safety more effectively.

The researchers implemented four types of UI adaptations to test:
1.  **Pop-up:** Showing or hiding a dialog box with urgent information.
2.  **Font Size:** Increasing the text size.
3.  **Map Type:** Switching between a satellite view and a street view.
4.  **Background Color:** Changing between a light and dark theme.


![A series of smartphone screens showing the main UI of the EvacuationApp and the four types of adaptations being tested.](/images/blogpic/3565472.3595614_p6_f1.png)


#### The Experiment: Does It Actually Work?

The team conducted experiments with dozens of participants, comparing their MFRL engine against three other conditions:
*   **Sequential Adaptation:** Random UI changes at fixed intervals.
*   **Rule-based Adaptation:** UI changes based on a predefined set of \`if-emotion-then-change-UI\` rules.
*   **No Adaptation:** The standard, static UI.

The results were compelling and answered two key research questions.

**1. What UI changes trigger which emotions?**
The experiments confirmed that specific UI changes reliably aroused target emotions. For instance, increasing the font size tended to trigger **joy**, while showing a pop-up dialog or changing the map view elicited **surprise**.

**2. How effective is MFRL compared to other methods?**
This is where the MFRL approach truly shined.
*   **Arousing Target Emotions:** The MFRL engine was significantly more effective at arousing the target emotions of fear, joy, and surprise compared to the sequential and rule-based methods.
*   **Learning and Improving:** The results showed that the MFRL agent got better over time. After several iterations of learning from user interactions, its performance far outstripped its own earlier versions. This is a key advantage—the system refines itself with use.
*   **Task Completion:** Most importantly, users guided by the final, most-trained MFRL agent had a **significantly higher task completion rate** than those using any other system. They were more successful at following the evacuation route.

#### Key Takeaways for Building Emotion-Aware Systems

This research offers valuable lessons for anyone interested in creating more human-centric technology:

*   **Embrace Individuality:** Humans are diverse. A one-size-fits-all model for behavior is doomed to fail. MFRL's ability to learn and adapt to each individual's reactions is its greatest strength.
*   **Privacy is Paramount:** The system was designed to process facial data locally on the user's device, sending only anonymized emotion data to a server. This is a crucial consideration for any app that gathers personal data.
*   **Don't Be Annoying:** Too many UI changes can be frustrating. The MFRL agent naturally learns to find a balance, making adaptations that are helpful rather than disruptive.
*   **Bootstrap with User Feedback:** The researchers kickstarted the Q-learning process by using an initial survey to create a "first draft" of the Q-Table. This helped the agent make smarter decisions from the very beginning.

By proving that a learning-based approach is more effective than static or rule-based systems, this work paves the way for a new generation of applications that don't just serve us, but truly understand and react to us.`,G=`---
title: "Emoticontrol: Teaching Apps to Read Your Mood and Adapt in Real-Time"
excerpt: "Ever feel like your apps are fighting you, especially when you're stressed? Researchers have developed Emoticontrol, a new system that uses reinforcement learning to read a user's facial emotions and intelligently adapt the user interface on the fly. This breakthrough aims to enhance user experience and performance, particularly in high-stakes scenarios."
date: "2023-06-01"
author: "Mina Alipour, Mahyar T. Moghaddam, Karthik Vaidhyanathan, Mikkel Baun Kjærgaard"
category: "AI/ML"
thumbnail: "/images/blogpic/3593227_p7_f1.png"
---

Imagine you're in a high-stress situation, like trying to navigate an unfamiliar building during an emergency. You pull out your phone, and an app shows you the way out. But the text is small, the map is confusing, and a useless pop-up appears. Your frustration and fear mount, making it even harder to focus. What if, instead, the app could sense your panic? What if it could adapt its interface—enlarging the text, simplifying the map, and providing clear, calming instructions—all in real-time?

This is the future envisioned by a team of researchers from the University of Southern Denmark and IIIT Hyderabad. They've developed **Emoticontrol**, a groundbreaking approach that allows user interfaces (UIs) to adapt based on the user's emotional state. By using a clever form of AI, Emoticontrol aims to create more empathetic, effective, and human-centric software.

#### The Problem with One-Size-Fits-All Interfaces

Most software today treats every user—and every situation—the same. The UI is static, designed with a single, "average" user in mind. While some systems offer manual customization or simple rule-based adaptations (e.g., switching to dark mode at night), they fail to account for the dynamic and complex nature of human emotions.

Human behavior is notoriously difficult to predict or model with a fixed set of rules. An adaptation that helps one person might hinder another. This is especially true in situations that trigger strong emotions, where a poorly designed interface can lead to discomfort, poor performance, or even failure.

#### Enter Emoticontrol: A Smarter, Learning-Based Approach

To overcome these limitations, the researchers turned to **Model-Free Reinforcement Learning (MFRL)**, a type of AI that learns through trial and error. Think of it like training a pet: the AI agent performs an action (a UI change), observes the environment's reaction (the user's emotional response), and receives a reward or a penalty. Over time, it learns which actions lead to the best outcomes.


![A high-level diagram showing how sensor data (emotions)
 and Quality of Service (QoS) data feed into an MFRL engine, which then triggers a UI adaptation.](/images/blogpic/3593227_p2_f1.png)

Emoticontrol is built around the classic **MAPEK control loop** (Monitor, Analyze, Plan, Execute, Knowledge), a well-established concept in self-adaptive systems. Here’s how it works:

1.  **Monitor:** The system uses the device's camera to continuously capture and monitor the user's facial expression.
2.  **Analyze:** It analyzes the video feed to infer the user's emotion (e.g., joy, fear, surprise, anger) using pre-trained models.
3.  **Plan:** This is the core of Emoticontrol. The MFRL engine decides on the optimal UI adaptation based on the user's current emotion and the current state of the interface.
4.  **Execute:** The system applies the chosen adaptation, changing the UI on the screen.

This entire cycle repeats, allowing the system to learn and refine its strategy for each individual user, making the interaction feel personalized and responsive.

#### The Architecture of an Emotion-Aware System

The Emoticontrol approach is divided into two main phases: design-time and run-time.


![A diagram showing the design-time activities (specifying models, designing parameters, creating Q-tables)
 feeding into the run-time MAPEK loop, which interacts with sensors and the UI.](/images/blogpic/3593227_p7_f1.png)

At **design-time**, developers define the building blocks of the adaptive system:
*   **Emotion Models:** The system is built on Ekman's six basic emotions (joy, sadness, surprise, fear, disgust, anger) plus a neutral state.
*   **UI Parameters:** These are the specific elements that can be changed, such as font size, background color, map style, or the visibility of pop-ups.
*   **Baseline Knowledge:** To avoid starting from scratch, the system can be seeded with an initial "best guess" Q-Table (the AI's decision-making guide) based on preliminary user surveys.

At **run-time**, the MAPEK loop takes over. The heart of its "Plan" step is a **Q-learning** algorithm. The system maintains a large table—the **Q-Table**—that maps state-action pairs to reward values.
*   A **state** is a combination of the user's current emotion and the UI's current configuration (e.g., \`State = {emotion: fear, background: light}\`).
*   An **action** is a possible UI change (e.g., \`Action = change_background_to_dark\`).

The system learns to choose the action that it predicts will yield the highest long-term reward, such as moving the user from a state of fear or anger towards a state of joy or neutrality.


![A diagram illustrating the working of the MFRL approach, where the user's emotional state and real-time rewards feed into a Decision Maker that selects an action to adapt the mobile application.](/images/blogpic/3593227_p11_f1.png)


#### Putting Emoticontrol to the Test: The EvacuationApp

To see if their approach worked in the real world, the researchers developed **EvacuationApp**, a mobile app for emergency evacuation training. This was the perfect test case, as it's a scenario where managing user emotions is critical for success.

The app guides users along a route to a safe zone. During the test, the UI would adapt in various ways. The researchers compared three adaptation methods:
1.  **Sequential:** The UI changed randomly every 20 seconds.
2.  **Rule-based:** The UI changed based on a predefined set of "if-then" rules (e.g., "IF user is sad, THEN increase font size").
3.  **MFRL (Emoticontrol):** The UI adapted intelligently using the Q-learning engine.


![A collage of screenshots from the EvacuationApp, showing the main UI and four different types of adaptations: a pop-up message, larger font size, a street view map, and a dark background color.](/images/blogpic/3593227_p15_f1.png)


#### Key Findings: An AI That Learns and Improves

The results from experiments with 51 participants were compelling and answered several key research questions.

##### **1. Different UI changes trigger specific emotions.**
The experiments confirmed that specific UI adaptations could reliably influence emotions. For instance, increasing the font size tended to trigger **joy**, changing the map to a satellite view induced **surprise**, and switching to a dark theme elicited **fear**. This validated the fundamental premise that UI design directly impacts user emotions.

##### **2. Emoticontrol outperforms traditional methods.**
The MFRL approach was significantly more effective than both the sequential and rule-based methods. It excelled at arousing the target emotions and, most importantly, led to a higher **task completion rate**. This is because Emoticontrol continuously learns and improves. After each adaptation, it gets feedback (the user's new emotional state) and updates its strategy, becoming more effective with each iteration.

##### **3. The system is fast and scalable.**
For an adaptive system to be useful, it must be fast. The researchers found that the on-device processing—from sensing an emotion to executing a UI change—took an average of just **66.55 milliseconds**.

To ensure the system could support many users, they designed a scalable cloud backend using AWS services, including load balancers and auto-scaling containers. Performance tests showed that even under heavy load, response times remained well within acceptable limits, proving the architecture is robust.


![A diagram of the cloud-based architecture using AWS, showing a client interacting with a load balancer that directs traffic to frontend, backend, and dashboard containers, which in turn connect to external data sources like Maps API and a MongoDB database.](/images/blogpic/3593227_p18_f1.png)



![A graph showing that the backend response times for various tasks remain low even as the number of requests increases to the 90th percentile.](/images/blogpic/3593227_p24_f1.png)


#### The Future of Empathetic Technology

The Emoticontrol project demonstrates a powerful new direction for human-computer interaction. It proves that it's possible to build systems that are not only intelligent but also emotionally aware. By moving beyond rigid, one-size-fits-all designs, we can create software that works *with* us, adapting to our needs and helping us perform better, especially when it matters most.

While this study focused on an emergency app, the potential applications are vast—from educational software that adapts to a student's frustration, to healthcare apps that respond to a patient's anxiety, to entertainment systems that heighten a user's joy. Emoticontrol offers a glimpse into a future where our technology doesn't just serve us, but truly understands us.
\`\`\``,U=`---
title: "ML-Enabled Service Discovery for Microservice Architecture: A QoS Approach"
excerpt: "Microservice architectures introduce uncertainty that can affect Quality of Service (QoS). This paper presents an ML-enabled service discovery mechanism that combines machine learning and self-adaptation techniques to perform effective service discovery and selection by trading off different QoS attributes."
date: "2024-04-08"
author: "Karthik Vaidhyanathan, Mauro Caporuscio, Stefano Florio, and Henry Muccini"
category: "AI/ML"
thumbnail: "/images/blogpic/3605098.3635942_figure1.png"
---

## Introduction

Microservice architectures have revolutionized software development, offering flexibility and scalability. Their dynamic nature, allowing for services to be added, removed, and updated on the fly, has made them a favorite for modern applications. However, this dynamism introduces a challenge: how to ensure consistent **Quality of Service (QoS)** when the underlying infrastructure is constantly changing?

#### The Problem

The rapid changes in microservice instances (due to scaling, failures, updates, etc.) create uncertainty. This uncertainty makes it difficult to guarantee specific QoS levels, such as response time and energy consumption. Traditional service discovery mechanisms often fail to adapt to these dynamic changes and trade-offs between various QoS attributes.  For example, a service instance might offer a faster response time but consume more energy.  Choosing the right instance becomes a complex balancing act.

#### The Solution

This research proposes a novel **ML-enabled Service Discovery** mechanism to address these challenges. The key idea is to leverage machine learning and self-adaptation techniques to dynamically discover and select microservice instances based on multiple QoS attributes. By combining **deep neural networks** and **reinforcement learning**, the system learns to make intelligent decisions, adapting to the ever-changing environment and optimizing for the desired QoS trade-offs.

#### How It Works (Technical Deep Dive)

The proposed mechanism extends the server-side service discovery pattern using the **MAPE-K (Monitor, Analyze, Plan, Execute, Knowledge)** model.  Let's break down the core components:

*   **API Gateway:** Acts as the entry point for service requests, forwarding them to the appropriate microservice instance.
*   **Service Discovery:** Maintains a registry of available microservice instances and their real-time information.
*   **QoS Monitor:** Continuously collects data on QoS attributes (e.g., response time, energy consumption) using the Docker API. Think of it as the system's "eyes," constantly observing the performance of each microservice.
*   **Machine Learning Engine (MLE):** This is the brain of the system. It uses **Long Short-Term Memory (LSTM)** models to forecast the QoS attributes of microservice instances. LSTM is a type of recurrent neural network particularly good at analyzing time-series data (like the changing performance of a service over time).  The MLE uses a two-phase approach:
    *   **Batch Phase:** Periodically trains the LSTM models using historical QoS data.
    *   **Real-time Phase:** Uses the trained models to predict the expected QoS attributes for each microservice instance.
*   **Service Selector:** Makes the final decision on which microservice instance to use. This is where **Q-Learning**, a reinforcement learning technique, comes in. The Service Selector models the selection process as a Markov Decision Process, learning the optimal policy to choose instances based on desired QoS trade-offs.

The process looks like this: a service consumer (another microservice or user) makes a request, the API Gateway consults the Service Discovery and the MLE provides QoS forecasts. The Service Selector, guided by the Q-Learning algorithm, chooses the "best" instance and then the API Gateway invokes this service. Then the process starts all over again.

#### Key Results

The proposed approach was evaluated using **SockShop**, a state-of-the-art microservice exemplar application. The results demonstrated that the ML-enabled approach achieved a **35% higher effectiveness** in service discovery compared to existing baseline methods (Naive and Round Robin).  The system was able to dynamically adapt and make better choices, particularly when balancing response time and energy consumption.

![SockShop Microservices Interaction](/images/blogpic/3605098.3635942_figure1.png)

_Figure 1: Illustrates the microservices interaction in the SockShop application, highlighting the Payment service being replicated into three instances._

![Platform-provided Service Discovery](/images/blogpic/3605098.3635942_figure2.png)

_Figure 2: Shows the platform-provided Service Discovery architecture, including the Service Registry, Registrar, and Router components._

#### Why It Matters (Implications)

This research has significant implications for the design and management of microservice architectures. By incorporating machine learning into the service discovery process, it's possible to:

*   **Improve QoS:** Deliver more consistent and reliable performance, even in dynamic environments.
*   **Optimize Resource Utilization:** Reduce energy consumption and improve overall efficiency.
*   **Enable Self-Adaptation:** Build systems that can automatically adjust to changing conditions and optimize for desired outcomes.

The authors acknowledge some limitations, including potential scalability issues with machine learning in very large-scale systems and the need for further experimentation in real-world settings. Future work will focus on addressing these limitations and exploring advanced Q-Learning techniques to improve scalability.

#### Conclusion

This paper presents a promising approach to service discovery in microservice architectures. By combining machine learning and self-adaptation, it provides a way to dynamically optimize QoS and adapt to the ever-changing landscape of modern software systems. The proposed ML-enabled Service Discovery mechanism represents a significant step toward building more intelligent and resilient microservice applications.

(Implementation details are available at: [https://github.com/karthikv1392/ML_SD_Tradeoff](https://github.com/karthikv1392/ML_SD_Tradeoff))
\`\`\``,j=`---
title: "From Blueprint to VR: A New Tool for Teaching Software Requirements"
excerpt: "Defining requirements for Virtual Reality can be tricky. Researchers at IIIT Hyderabad developed a novel tool-based experiment to teach students how to effectively elicit and specify requirements for complex VR applications."
date: "2023-12-05"
author: "Sai Anirudh Karre, Karthik Vaidhyanathan, Y. Raghu Reddy"
category: "AI/ML"
thumbnail: ""
---

Building great software starts with understanding what it's supposed to do. This process, known as **requirement elicitation** and **specification**, is a cornerstone of software engineering. But how do you teach this crucial skill, especially for emerging domains like Virtual Reality (VR) where the rules are still being written?

Researchers at IIIT Hyderabad tackled this challenge head-on in a large software engineering course. They designed a unique, tool-based experiment to help students grasp the complexities of defining requirements for VR products.

#### The Classroom Challenge

The experiment took place in a CS300-level Software Engineering course with over 130 students. These students were divided into 28 small teams. While they had been introduced to requirement engineering concepts, most had no prior experience working with VR, making it a perfect testbed for a novel teaching approach.

#### A Two-Phase Assignment for Deeper Learning

The core of the study was a collaborative, team-based assignment split into two distinct, two-week phases.

*   **Phase 1: Crafting the Initial Blueprint**
    Each team was tasked with exploring a VR application and then creating a traditional **Software Requirement Specification (SRS)** document. This document served as their initial, detailed blueprint of the application's features and functions.

*   **Phase 2: Cross-Evaluation with a Specialized Tool**
    Here’s where things got interesting. The SRS documents were randomly swapped among the teams. No team received the document they authored. Each team's new task was to use a specialized tool called **VReqST** to formally elicit and specify the requirements based *only* on the SRS document they received from another team.

#### Introducing VReqST: The Secret Sauce

**VReqST** is a purpose-built requirement specification tool developed by the researchers. It's designed specifically for VR software and is based on a role-based model. It forces students to think about VR applications in a structured way, specifying attributes with high precision in a JSON format. This includes defining:
- **Scenes:** The different environments in the VR world.
- **Articles:** The objects within a scene.
- **Actions-Responses:** What happens when a user interacts with an article.
- **Behaviors of Articles:** How objects act independently.
- **Timeline:** The overall flow and sequence of scenes.

By using **VReqST**, students had to translate the often ambiguous natural language of an SRS document into a structured, machine-readable format, revealing any gaps or vagueness in the original requirements.

#### The Results: A Resounding Success

The experiment yielded impressive results, demonstrating the effectiveness of this hands-on, collaborative approach.

- **Improved Precision:** A remarkable **98%** of the **VReqST** submissions provided more accurate and correctly structured details for scenes and articles than what was found in the original SRS documents.
- **Clearer Logic:** In **91%** of cases, the **VReqST** submissions defined article behaviors and the flow between scenes with greater precision and clarity.
- **Student Confidence:** The impact on students was significant. **87%** reported having high confidence in their ability to elicit and specify VR requirements after the experiment.
- **Enhanced Understanding:** An overwhelming **96%** of students found that the **VReqST** tool helped them understand the VR applications in less time, and **93%** agreed that the cross-evaluation process helped them improve their own requirement-gathering skills.

This experiment proves to be an effective, easy-to-replicate method for teaching the critical, and often difficult, skill of requirement gathering for modern software systems. By combining traditional documentation with a specialized tool and collaborative cross-evaluation, students don't just learn the theory—they experience it firsthand.`,V=`---
title: "SWITCHing Gears: A New Platform for Building Smarter, Self-Adapting AI"
excerpt: "AI systems often struggle to adapt to real-world changes. Researchers have developed SWITCH, an open-source tool that allows AI to dynamically switch models on the fly, balancing speed and accuracy to maintain performance under any condition."
date: "2024-04-15"
author: "Arya Marda, Shubham Kulkarni, Karthik Vaidhyanathan"
category: "AI/ML"
thumbnail: "/images/blogpic/3643915.3644105_p3_f1.png"
---

Modern AI systems, from chatbots to image generators, are incredibly powerful. However, they often operate in a fixed state, struggling to handle the unpredictable nature of the real world. A sudden spike in user traffic or a subtle shift in input data can degrade performance, leading to slow response times and inaccurate results. How can we build **Machine Learning-Enabled Systems (MLS)** that are resilient, responsive, and can adapt on the fly?

Researchers from IIIT Hyderabad have introduced **SWITCH**, a new open-source platform designed to tackle this very problem. It's an "exemplar"—a research playground—that allows engineers and scientists to test and evaluate strategies for making AI systems **self-adaptive**. The core idea is simple yet powerful: enable the system to dynamically switch between different ML models at runtime to optimize its **Quality of Service (QoS)**.

#### The Challenge: Speed vs. Accuracy

In machine learning, there's often a trade-off between a model's speed and its accuracy. A large, complex model might produce highly accurate results but take a long time to process a request. A smaller, "lighter" model might be lightning-fast but less precise.

In a real-world application, neither extreme is ideal all the time. During peak traffic, you need speed to handle the load. During quiet periods, you can afford to use a more powerful model for better results. This is where **dynamic model switching** comes in.

#### Introducing SWITCH: An Architectural Overview

SWITCH is a comprehensive web service designed to simulate these real-world scenarios. It allows researchers to explore how an AI system can intelligently switch between different ML models—in this case, for object detection—based on current operational demands. The architecture is composed of a few key parts that work together.


![The high-level architecture of the SWITCH platform, showing the Frontend, Environment Manager, Managed System, and Managing System.](/images/blogpic/3643915.3644105_p3_f1.png)


*   **Managed System:** This is the core ML service doing the actual work. It receives images, preprocesses them, and runs them through the currently active object detection model (e.g., a variant of **YOLOv5**).
*   **Environment Manager:** This component, featuring a **Load Simulator**, mimics real-world uncertainty. It can send requests to the system at varying rates, simulating everything from a steady trickle of users to a massive, sudden surge in traffic.
*   **Managing System (The "Brain"):** This is where the magic of self-adaptation happens. It uses a classic **MAPE-K (Monitor, Analyze, Plan, Execute, and Knowledge)** loop to make decisions.
    *   **Monitor:** Continuously tracks performance metrics like response time, processing load, and model confidence scores.
    *   **Analyzer:** Examines the monitored data to determine if an adaptation is needed. Is the system getting too slow? Is accuracy dropping?
    *   **Planner:** Decides on a course of action. For example, "The request queue is growing, so we should switch to a faster model."
    *   **Executor:** Implements the plan by telling the Managed System to swap out the current ML model for the newly selected one.
*   **Frontend:** A user-friendly interface where a researcher can configure experiments, upload data, select an adaptation strategy, and monitor results in real-time on an interactive dashboard.


![The user interface of SWITCH, showing options to upload image data, inter-arrival rate files, and select a MAPE-K adaptation strategy.](/images/blogpic/3643915.3644105_p4_f1.png)


#### Putting It to the Test: AdaMLS in Action

To prove its effectiveness, the researchers tested SWITCH using a novel adaptation strategy called **AdaMLS**. They simulated a general object detection task with a fluctuating workload based on real-world web traffic data (from the FIFA98 World Cup logs).

The system had a repository of five different YOLOv5 models, ranging from the tiny \`YOLOv5n\` (nano) to the huge \`YOLOv5x\` (xlarge). The goal was to see if SWITCH, using the AdaMLS strategy, could outperform a static approach (i.e., just using the fast nano model all the time).

The results were compelling. The static "Nano Model" approach was fast, but it detected only 37,829 objects in 10,000 images. The self-adaptive AdaMLS approach, by intelligently switching to more powerful models during lulls in traffic, detected **47,026 objects**—a nearly 25% increase—while still managing the workload effectively.

The graph below clearly shows this adaptive behavior. When the incoming request rate (blue line) spikes, SWITCH immediately shifts to the faster models (\`yolov5n\` or \`yolov5s\`). When the rate drops, it switches to the more accurate models (\`yolov5m\`, \`yolov5l\`, \`yolov5x\`) to maximize detection quality.


![A dual-panel graph showing how SWITCH adapts its model choice in response to a changing incoming request rate over time.](/images/blogpic/3643915.3644105_p5_f1.png)


A key feature of SWITCH is its real-time dashboard, built with Kibana and Elasticsearch, which gives researchers deep insights into the system's performance and decision-making process.


![An excerpt from the SWITCH runtime dashboard, built with Kibana, displaying real-time metrics like model processing time.](/images/blogpic/3643915.3644105_p6_f1.png)


#### Why SWITCH Matters

Existing research tools for self-adaptive systems have primarily focused on traditional software, not the unique, data-driven challenges of ML systems. SWITCH fills this critical gap. It provides a flexible, powerful, and accessible platform for:

1.  **Evaluating Adaptation Strategies:** Researchers can easily implement and compare different strategies (like AdaMLS, or even their own custom logic) in a controlled, realistic environment.
2.  **Understanding Trade-offs:** It makes the complex interplay between speed, accuracy, and resource consumption tangible and observable.
3.  **Advancing Robust AI:** By enabling hands-on experimentation, SWITCH helps accelerate the development of more resilient, efficient, and intelligent AI systems that can thrive in the dynamic real world.

Ultimately, SWITCH is more than just a piece of software; it's a valuable contribution to the research community, paving the way for the next generation of truly adaptive AI.
\`\`\``,Q=`---
title: "Proactive AI: How IoTArchML Teaches Systems to Fix Problems Before They Happen"
excerpt: "Tired of systems that only fix problems after they've already occurred? Discover IoTArchML, a novel framework that uses machine learning to forecast issues in IoT architectures and proactively adapt, creating truly self-learning systems."
date: "2019-03-25"
author: "Henry Muccini, Karthik Vaidhyanathan"
category: "AI/ML"
thumbnail: "/images/blogpic/a_machine_learning_driven_approach_for_proactive_decision_ma_p3_f1.png"
---

In the ever-expanding universe of the Internet of Things (IoT), systems are becoming incredibly complex. From smart homes to industrial sensors, these systems must constantly adapt to changing conditions to maintain their **Quality of Service (QoS)**. Traditionally, this adaptation is **reactive**—a system waits for a problem to occur, like a sudden spike in energy consumption, and then tries to fix it. But what if a system could see the problem coming and act *before* it ever happened?

A 2019 paper by Henry Muccini and Karthik Vaidhyanathan introduces **IoTArchML**, a machine learning-driven framework designed to do just that. It shifts the paradigm from self-adaptive systems that react to problems to **self-learning** systems that proactively prevent them, enabling architectures to learn, predict, and improve over time.

#### The Problem with "After-the-Fact" Fixes

Standard self-adaptive systems operate on a simple principle: monitor, detect a deviation, and then execute a pre-defined fix. This works for predictable scenarios but falls short in the dynamic, heterogeneous world of IoT. The sheer number of interconnected devices, sensors, and data streams makes it nearly impossible to anticipate every potential failure at design time. A reactive approach means the system has already entered a degraded state before a solution is even attempted.

#### A Motivating Example: The Smart Room

To understand the power of proactive adaptation, consider the paper's example of a smart room. The system manages access based on the number of people and controls the windows based on oxygen levels to optimize for energy efficiency.


![A diagram of the smart room system, showing sensors for oxygen and people, a central controller, a database, and actuators for the window and door.](/images/blogpic/a_machine_learning_driven_approach_for_proactive_decision_ma_p2_f1.png)


A reactive system might only adapt when an energy consumption threshold is crossed. For instance, if the oxygen sensor is sending data too frequently, it consumes excess power. The system would only reduce the frequency *after* the energy waste has been flagged.

IoTArchML's approach is different. It would continuously analyze data streams, learn the correlation between sensor activity and energy use, and *forecast* an impending energy spike. Armed with this prediction, it could proactively reduce the sensor's reporting frequency *before* the energy threshold is ever breached, preventing the problem entirely.

#### Introducing IoTArchML: The Proactive Architecture

The IoTArchML framework consists of two main parts:
1.  **The Managed System:** The IoT system itself, with its components, sensors, and QoS requirements.
2.  **The Managing System:** The "brain" of the operation, responsible for analysis, decision-making, and executing adaptations.

The core innovation lies within the Managing System's **Machine Learning Engine**, which operates in two distinct phases.


![A flowchart of the IoTArchML Machine Learning Engine, detailing the build and operational phases.](/images/blogpic/a_machine_learning_driven_approach_for_proactive_decision_ma_p3_f1.png)


#### Phase 1: The Build Phase (Learning from the Past)

Before the system goes live, it needs to learn. In this offline phase, the engine processes historical data to build a predictive model.

1.  **Data Collection & Feature Extraction:** The system gathers extensive logs from every component. A **Feature Extractor** then cleans this data and uses techniques like Singular Value Decomposition (SVD) to identify hidden patterns and dependencies between different metrics (e.g., how message frequency affects power draw).
2.  **Training the "Crystal Ball":** The extracted features are used to train a **Long Short-Term Memory (LSTM)** network. LSTMs are a type of recurrent neural network exceptionally good at understanding patterns in time-series data, making them perfect for forecasting future QoS values based on past behavior.
3.  **Model Evaluation:** The trained LSTM is tested for accuracy. If it's not predictive enough, it's retrained until it becomes a reliable "QoS crystal ball." This trained model becomes the **QoS Predictor**.

#### Phase 2: The Operational Phase (Acting on the Future)

Once deployed, the system enters the operational phase, where it uses its learned knowledge to act proactively.

1.  **Forecasting:** The **QoS Predictor** continuously analyzes real-time data from the IoT system and forecasts future QoS parameters. For example, it might predict a 15% increase in latency in the next five minutes.
2.  **Intelligent Decision-Making:** These forecasts are sent to the **Decision Maker**, which uses **Reinforcement Learning (RL)**, specifically **Q-Learning**, to choose the best adaptation strategy. In simple terms:
    *   **State:** The predicted future state of the system (e.g., "high data traffic imminent").
    *   **Action:** A possible adaptation from a list of options (e.g., "reduce data exchange rate," "increase buffer size").
    *   **Reward:** The Q-Learning algorithm selects the action it believes will yield the best reward, which is the predicted improvement in QoS.
3.  **The Safety Net:** Before any action is taken, it's sent to a **Model Checker**. This component verifies that the proposed adaptation won't violate any critical system-wide goals. If it would cause another problem, the action is rejected (giving a negative reward to the Q-Learning model, helping it learn from its mistake), and another action is considered.

#### A Cycle of Continuous Improvement

This entire process—forecast, decide, verify, act—creates a continuous feedback loop. The system learns from the outcome of every decision it makes. The Q-Learning algorithm constantly updates its internal "knowledge table" based on the actual rewards received, allowing it to make progressively smarter and more effective decisions over time.

This moves beyond simple adaptation into the realm of true self-learning, where the architecture itself becomes more efficient and robust as it operates.

#### Conclusion

IoTArchML presents a compelling vision for the future of adaptive systems. By leveraging the predictive power of LSTMs and the decision-making prowess of reinforcement learning, it enables IoT architectures to anticipate and prevent problems rather than just reacting to them. This proactive stance is crucial for building the resilient, efficient, and truly intelligent systems required by our increasingly connected world.
\`\`\``,N=`---
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

By respecting the different natures of software and machine learning development while building strong communication bridges, **Agile4MLS** provides a clear and effective roadmap for any organization looking to successfully build and deploy ML-enabled systems.`,Y=`---
title: "Building a Digital Twin for Smart Cities: A Deep Dive into the WaterTwin Architecture"
excerpt: "As cities get smarter, managing complex infrastructure like water networks becomes a major challenge. Researchers have developed 'WaterTwin', a Digital Twin architecture that creates a virtual replica of a city's water system for real-time monitoring, simulation, and control."
date: "2024-01-01"
author: "Likhith Kanigolla, Gaurav Pal, Karthik Vaidhyanathan, Deepak Gangadharan, Anuradha Vattem"
category: "IoT"
thumbnail: "/images/blogpic/architecting_digital_twin_for_smart_city_systems_a_case_study_p4_f1.png"
---

As our cities become increasingly connected with **Internet of Things (IoT)** devices, we unlock incredible potential for efficiency and improved quality of life. But this connectivity also introduces significant challenges in monitoring, maintaining, and testing complex urban infrastructure. A single faulty sensor in a water treatment system, for example, could have serious consequences for public health.

To address these issues, researchers are turning to a powerful concept: the **Digital Twin (DT)**. A digital twin is a dynamic, virtual model of a physical asset or system that is updated in real-time with data from its real-world counterpart. This allows city planners and operators to monitor performance, predict failures, and test scenarios in a risk-free virtual environment.

A recent paper from the Smart City Research Centre at IIIT-Hyderabad presents **WaterTwin**, a novel DT architecture designed specifically for managing water quality networks. Let's explore how it works.

#### The Core Challenge: Water Management in a Smart City

Managing a city's water network is a high-stakes task. The paper highlights several key challenges that traditional IoT systems struggle with:

*   **Interoperability:** Smart city systems often use a diverse range of devices and communication protocols, making it difficult to create a unified view of the entire network.
*   **Real-Time Processing:** Data from hundreds of sensors must be processed instantly to detect anomalies like contamination or equipment failure.
*   **Scalability:** The system must be able to handle a growing number of sensors and devices without a drop in performance.
*   **Lack of Fallbacks:** If a sensor fails or reports inaccurate data, many current systems lack the automated safeguards to prevent inadequately treated water from being discharged.

#### The WaterTwin Architecture: A Blueprint for a Smarter System

To tackle these problems, the researchers designed the WaterTwin architecture, a multi-layered system that seamlessly connects the physical water network to its digital counterpart.


![The WaterTwin Architecture diagram showing data flow from IoT nodes through an Interoperability Standard to a Data Lake and the Digital Twin Layer.](/images/blogpic/architecting_digital_twin_for_smart_city_systems_a_case_study_p4_f1.png)


The architecture is built on several key components:

#### Data Collection and Analysis

The foundation of WaterTwin begins with the **IoT Nodes Layer**, where sensors deployed throughout the water network collect real-time data on parameters like Total Dissolved Solids (TDS) and pH levels.

This data is transmitted through a **Communication Layer** (using protocols like Wi-Fi or LoRaWAN) to the crucial **Interoperability Layer**. To solve the problem of device heterogeneity, this layer uses the **oneM2M standard**, a globally recognized protocol that unifies communication. This ensures that data from any device can be understood and aggregated. A **Message Broker** then efficiently distributes this data to the rest of the system, ensuring scalability and a smooth data flow.

All this information is stored in a **Data Lake**, which serves as the central repository for both real-time and historical data, making it available for visualization, analysis, and building predictive models.

#### The Digital Twin Layer: Monitor, Control, and Simulate

This is where the magic happens. The Digital Twin Layer provides the tools to interact with and manage the water network.

*   **Visualization Engine:** This component creates interactive dashboards and maps, allowing operators to monitor key performance indicators and analyze historical trends. It provides a clear, at-a-glance view of the entire network's health.
*   **Actuation Manager:** WaterTwin isn't just for passive monitoring. The Actuation Manager allows operators to take direct action. Based on real-time data and predictive analytics, the system can recommend actions like adjusting a valve or controlling a pump. Authorized users can approve these actions or manually intervene through a web interface, sending commands back to the physical devices.
*   **Simulation Engine:** Perhaps the most powerful feature, the Simulation Engine allows stakeholders to run "what-if" scenarios. By using a virtual model of the network, they can test the impact of adding new sensors, simulate contamination events, or explore different control strategies without any real-world risk.

#### Bringing WaterTwin to Life: A Case Study

To prove their architecture works, the researchers built a physical prototype at the Smart City Living Lab.


![The hardware setup showing three water nodes connected by pipes, along with containers for sand and soil.](/images/blogpic/architecting_digital_twin_for_smart_city_systems_a_case_study_p5_f1.png)


The hardware setup consisted of three water quality nodes built with **ESP32 microcontrollers**, each equipped with TDS and temperature sensors. Solenoids were used to control the flow of water through pipes connecting the nodes.

The software stack leveraged powerful open-source tools, including:
*   **Eclipse OM2M** for the oneM2M interoperability layer.
*   **Apache Kafka** as the high-throughput message broker.
*   **PostgreSQL** and **MongoDB** for the data lake.
*   **React.js** for the user-friendly web interface.

#### Initial Results and Visuals

The team's implementation yielded promising results, demonstrating the system's effectiveness. The user interface provides clear, intuitive control over the system. The **Actuation page** allows users to toggle solenoids (valves) on and off directly, with color-coded icons showing their status.


![The actuation interface showing a diagram of the water network with green (on)
 and red (off) valve controls.](/images/blogpic/architecting_digital_twin_for_smart_city_systems_a_case_study_p7_f1.png)

The **Simulation page** is even more impressive. It displays the physical sensor nodes on a real map and allows users to place virtual sensors or introduce virtual contaminants (like sand or soil) into the system. The model then predicts the impact on water quality down the line.


![The simulation interface showing a map with sensor nodes, pipes, and a pop-up with predicted water quality values.](/images/blogpic/architecting_digital_twin_for_smart_city_systems_a_case_study_p8_f1.png)


Experiments simulating contamination with salt and sand showed the system could accurately track the variance in TDS levels. Crucially, the system was highly responsive, executing a control command (like closing a valve) in approximately **800 milliseconds**.


![A line graph showing the variance of TDS values increasing as more containers of soil and sand are added.](/images/blogpic/architecting_digital_twin_for_smart_city_systems_a_case_study_p8_f1.png)


#### Conclusion and Future Directions

The WaterTwin project successfully demonstrates a scalable and interoperable architecture for building digital twins for smart city systems. By combining real-time monitoring, predictive analytics, and remote control, this approach offers a powerful way to manage complex urban infrastructure efficiently and safely.

The researchers plan to extend this work by applying the architecture to other smart city domains, deploying it in a larger-scale real-world water network, and further refining the machine learning models to improve predictive accuracy. This research provides a solid foundation for the future of smart, resilient, and adaptable cities.
\`\`\`
`,J=`---
title: "DigIT: A Digital Twin Blueprint for Smarter, Traffic-Free Cities"
excerpt: "Imagine a city where traffic flows smoothly, even during rush hour. Researchers have developed DigIT, a powerful Digital Twin architecture that uses AI to predict and prevent congestion, creating a virtual replica of the city's transport network to test solutions before they hit the real world."
date: "2025-01-01"
author: "Hiya Bhatt, Sahil, Karthik Vaidhyanathan, Rahul Biju, Deepak Gangadharan, Ramona Trestian, Purav Shah"
category: "AI/ML"
thumbnail: "/images/blogpic/architecting_digital_twins_for_intelligent_transportation_systems_p5_f1.png"
---

City streets are the arteries of modern life, but they're increasingly clogged. As urban populations grow, traffic congestion becomes more than just an annoyance—it's a major drain on our economy, environment, and time. While **Intelligent Transportation Systems (ITS)** offer promise, they often struggle to keep up with the chaotic, unpredictable nature of real-world traffic.

To tackle this challenge, a team of researchers has designed **DigIT**, a sophisticated platform that creates a **Digital Twin (DT)** of a city's transportation network. Think of it as a highly realistic, real-time simulation—a virtual sandbox where we can predict traffic jams, test solutions like rerouting or changing traffic light timings, and optimize flow without disrupting a single car on the actual road. This paper presents the architecture for \`DigIT\`, a modular and scalable blueprint for building the next generation of smart traffic management systems.

#### The Blueprint: Modeling a Complex System

At the heart of \`DigIT\` is a structured approach to modeling the entire transportation ecosystem. Before building the system, the researchers defined all its moving parts using a **Domain Concept Model (DCM)**. This model acts as a comprehensive blueprint, capturing everything from individual vehicles and pedestrians to communication networks, traffic signals, and even environmental factors like the weather.

This high-level plan, shown below, organizes the system by defining its goals (like improving traffic flow), constraints (like speed limits), and the actions it can take (like rerouting traffic). This ensures that every component of the digital twin works together harmoniously.


![A diagram showing the Sociotechnical DT Specification Meta Language Concepts for ITS, including goals, measures, assumptions, constraints, and actions.](/images/blogpic/architecting_digital_twins_for_intelligent_transportation_systems_p4_f1.png)


#### The DigIT Architecture: A Look Under the Hood

With the blueprint in place, the paper details the operational architecture of the \`DigIT\` platform. It's a multi-layered system designed for real-time data processing, predictive analytics, and automated control.


![The complete architecture of the DigIT platform, showing the flow from physical sensors to the data lake, MLOps pipeline, Digital Twin Manager, and visualization layer.](/images/blogpic/architecting_digital_twins_for_intelligent_transportation_systems_p5_f1.png)


Let's break down the key components:

-   **Sensors & Data Collection:** The system's eyes and ears are **IoT-enabled sensors** (like cameras) deployed at intersections. They capture real-time data on vehicle counts, speed, and congestion levels. This raw data is the lifeblood of the digital twin.

-   **Communication Layer & Data Lake:** Data from the sensors is transmitted through a robust communication network (using 4G/5G, WiFi, etc.) to a central **Data Lake**. Here, the vast amounts of structured and unstructured data are stored, cleaned, and prepared for analysis.

-   **The Digital Twin Manager:** This is the core of the system. It uses the incoming data to maintain a live, virtual replica of the traffic network. It consists of three key parts:
    1.  **Simulator:** Using tools like SUMO (Simulation of Urban MObility), it runs "what-if" scenarios. What happens if there's an accident on a major road? What's the best signal timing for rush hour? The simulator answers these questions virtually.
    2.  **Actuator:** Once the simulator finds an optimal solution, the Actuator puts it into action in the real world. It can dynamically adjust traffic light timings, update digital message signs to suggest new routes, or alert traffic authorities.
    3.  **Code Generator:** This clever component acts as a translator, converting the high-level rules from the DCM into machine-readable instructions that the Simulator and Actuator can understand and execute.

-   **MLOps Pipeline & Model Manager:** To predict traffic flow, \`DigIT\` uses advanced deep learning models like **LSTM** and **BiLSTM**. The **MLOps (Machine Learning Operations) pipeline** automates the entire lifecycle of these models—from training and deployment to monitoring. If a model's predictions start to lose accuracy (a phenomenon known as "drift"), the MLOps pipeline automatically retrains it on new data, ensuring the system remains sharp and adaptive.

-   **Visualization Layer:** This component provides a human-friendly window into the system. Interactive dashboards display real-time traffic conditions, simulation results, and future predictions, allowing traffic managers to monitor the network's health and make informed decisions.

#### Putting DigIT to the Test in the Real World

To prove its effectiveness, the researchers deployed a prototype of the \`DigIT\` system in a real-world setting, using data from sensors installed at busy intersections near the IIIT Hyderabad campus in India.

The deep learning models proved to be highly accurate. They could predict traffic flow for the next time step based on the previous 15 time steps (a total of 75 minutes of data). The graph below shows just how closely the model's predictions aligned with the actual, observed traffic flow.


![A line graph comparing the predicted traffic flow (orange line)
 against the actual traffic flow (blue line) over a full day, showing a close correlation.](/images/blogpic/architecting_digital_twins_for_intelligent_transportation_systems_p8_f1.png)

The system wasn't just accurate; it was also incredibly fast. The models could generate a forecast in just **7 milliseconds**, while a full simulation of a 15-minute interval could be run in **15 seconds**. This speed is crucial for real-time applications where split-second decisions can prevent a traffic jam.

The team developed intuitive dashboards to visualize both the predictive analytics and the simulation outputs.


![The traffic prediction dashboard, showing key performance metrics like prediction accuracy, error rate, and a chart of prediction errors over time.](/images/blogpic/architecting_digital_twins_for_intelligent_transportation_systems_p7_f1.png)



![The simulation dashboard, displaying a traffic map, timelines, speed distributions, and vehicle counts for a simulated traffic scenario.](/images/blogpic/architecting_digital_twins_for_intelligent_transportation_systems_p8_f2.png)


#### Conclusion: Driving into a Smarter Future

The \`DigIT\` platform demonstrates that a well-architected **Digital Twin** is a feasible and powerful solution for modern traffic management. By combining a holistic design model (the DCM), real-time data, predictive AI, and automated workflows (MLOps), this architecture provides a scalable and adaptive blueprint for cities around the world.

While the current implementation focuses on traffic forecasting, the modular design opens the door to future enhancements, such as managing multi-modal transport (including public transit and pedestrians), optimizing communication networks for autonomous vehicles, and creating even more resilient and efficient urban environments. This research paves the way for a future where our cities are not just smart, but truly intelligent.
\`\`\``,X=`---
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

1.  **Zero-Shot Prompting:** Simply giving the model the \`Context\` and asking it to generate the \`Decision\` without any prior examples.
2.  **Few-Shot Prompting:** Providing the model with a couple of complete \`Context\`-\`Decision\` examples in the prompt before giving it the target \`Context\` to work on.
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

The most interesting finding comes from the few-shot results. Here, the researchers found that **GPT-3.5 (\`text-davinci-003\`) with a few-shot prompt achieved the same performance as GPT-4 in the zero-shot setting**.

This is a powerful insight: by providing just a couple of good examples, a smaller, more cost-effective model can match the performance of its more powerful (and expensive) successor. For other models, the results were mixed, with few-shot prompting sometimes even decreasing performance.

**Takeaway:** Few-shot prompting can be a cost-effective strategy to get high-quality results from slightly older or smaller API-based models.

##### Finding 3: The Value of Specialization (Fine-Tuning)

For organizations concerned with data privacy, security, or cost, sending proprietary context to a third-party API is a non-starter. This is where fine-tuning smaller, locally-hostable models comes in.

The study shows that fine-tuning works remarkably well. A fine-tuned **Flan-T5-base** model (with only 248 million parameters) produced results comparable to the massive GPT-4 (0-shot) and GPT-3.5 (few-shot). These smaller models can be run on a company's own servers, mitigating privacy risks.

**Takeaway:** If you need an in-house solution, fine-tuning a smaller model like Flan-T5 offers a viable, high-performance alternative to relying on large, cloud-based LLMs.

#### What Do the Generated Decisions Look Like?

The paper provides concrete examples of the generated text, which clearly illustrates the performance differences. Compared to the actual human-written decision, GPT-4's zero-shot output is relevant and well-structured. The few-shot \`text-davinci-003\` output is also very strong. The fine-tuned \`Flan-T5-small\` model captures the core idea but is less detailed.


![A comparison of the actual human-written decision versus decisions generated by GPT-4 (0-shot)
, text-davinci-003 (few-shot), and Flan-T5 (fine-tuned).](/images/blogpic/can_llms_generate_architectural_design_decisions___an_exploratory_empirical_study_p8_f1.png)

#### Conclusion: Is AI Ready to Be a Software Architect?

Not quite. The study concludes that LLMs, in their current state, cannot be relied upon for fully autonomous ADR generation. They often fail to capture the full context or provide comprehensive reasoning, meaning **human oversight remains essential**.

However, the research clearly demonstrates that LLMs are incredibly powerful **assistants** for this task. They can produce a solid first draft, saving architects time and effort.

The choice of model and method depends on your needs:
*   **For quick assistance with no privacy concerns:** Use GPT-4 (zero-shot) or the more economical GPT-3.5 (few-shot).
*   **For an in-house, privacy-preserving solution:** A fine-tuned model like Flan-T5 is a surprisingly effective and competitive option.

This exploratory study paves the way for future work, including fine-tuning larger models and incorporating more complex context like design diagrams and codebase analysis. While AI may not be taking over the architect's job tomorrow, it's already proving to be a valuable co-pilot.
`,Z=`---
title: "Architecting the Future: Software Architecture and Machine Learning Convergence"
excerpt: "A Dagstuhl Seminar convened experts in software architecture and machine learning to address the increasing integration of ML in software systems. The seminar resulted in a shared vocabulary, key challenges, and a research roadmap for future work in areas such as data-centricity, evolvability, observability, and trustworthiness."
date: "2023-07-23"
author: "Grace A. Lewis, Henry Muccini, Ipek Ozkaya, Karthik Vaidhyanathan, Roland Weiss, Liming Zhu"
category: "AI/ML"
thumbnail: "/placeholder.svg"
---

The world is rapidly embracing **Machine Learning (ML)** to automate tasks, improve decision-making, and create advanced user experiences. However, successfully integrating **ML** into complex software systems is proving to be a significant challenge. This blog post summarizes the key insights and research directions identified at a recent Dagstuhl Seminar focused on the intersection of Software Architecture and Machine Learning.

#### Introduction
Modern software systems are becoming increasingly sophisticated and distributed, demanding meticulous design to guarantee crucial qualities like performance, reliability, and security.  **Software architecture** serves as a blueprint, guiding the development process from high-level design to implementation and operations.  The rise of **ML** presents both opportunities and challenges in this domain.

#### The Problem
While data scientists excel at developing ML models, successfully deploying and maintaining these models within real-world software systems introduces a new set of complexities. These challenges often fall outside the traditional scope of data science expertise, encompassing areas like:
*   Testing
*   Requirements management
*   Software architecture
*   Configuration management

The traditional software development lifecycle struggles to accommodate the unique characteristics of **ML** components, which can exhibit non-deterministic behavior and require continuous monitoring and adaptation.

#### The Solution

The Dagstuhl Seminar 23302, titled "Software Architecture and Machine Learning," brought together researchers and practitioners to address these challenges. The seminar focused on two key themes:

1.  **Software Architecture for ML-enabled Systems (SA4ML):** Developing principles and practices for architecting systems that incorporate ML components.
2.  **Application of ML Techniques for Improved Architecting of Software Systems (ML4SA):** Using ML to enhance the software architecture process itself.

Throughout this blog post, the term **SA&ML** will be used to refer to both SA4ML and ML4SA.

#### How It Works (Technical Deep Dive)

The seminar was structured to encourage collaboration and knowledge sharing. Participants presented lightning talks, engaged in breakout group discussions, and developed a shared research roadmap. Key activities included:

*   **Key Concepts Map:** Creating a visual representation of core concepts related to SA&ML.
*   **Research Challenges Map:** Identifying and categorizing the major challenges in the field.
*   **Working Groups:** Focused discussions on key quality attributes:
    *   **Data Centricity:** Addressing the pivotal role of architectural elements to extract, transform, load, store and share data in ML systems.
    *   **Evolvability:** Ensuring systems can adapt efficiently to changing requirements and environments.
    *   **Observability and Uncertainty:** Understanding how uncertainty impacts system design and implementation.
    *   **Trust and Trustworthiness:** Designing systems that stakeholders can confidently rely on.

#### Key Results

The seminar identified several high-priority research areas to advance the state of the practice in **SA&ML**:

*   **Architectural Design for Data-Centricity:** Defining architectural approaches for effectively managing data in ML-enabled systems. This includes aspects like data acquisition, processing, and ensuring the system can adapt to changing data characteristics.
*   **Evolvability and Adaptability of MLOps Architectures:** Creating architectural designs that enable ML-enabled systems to evolve and adapt, leveraging **Machine Learning Operations (MLOps)** infrastructure. Key challenges involve managing the lifecycle of ML models and ensuring systems can adapt to new requirements.
*   **Uncertainty as a First-Class Concern:** Integrating uncertainty management into the architectural design process. This requires identifying uncertainty sources and developing methods to quantify and mitigate them.
*   **Observability in ML-enabled Systems:** Enhancing system observability to better manage the behavior of ML components.  This includes creating metrics and tools to monitor ML components and system states.
*   **Trust, Trustworthiness, and Ethical Considerations:** Building trustworthiness into ML-enabled systems by designing for ethical considerations, compliance with regulations, and ensuring transparency.
*   **Human-in-the-Loop AI Decision Making:** Architecting systems that effectively incorporate human oversight, particularly in critical decision-making processes.

#### Why It Matters (Implications)

The convergence of software architecture and machine learning is crucial for building robust, reliable, and trustworthy AI-powered systems.  By addressing the challenges identified in this seminar, we can:

*   **Improve the development process:** Streamline the integration of ML into software systems.
*   **Enhance system quality:** Ensure ML-enabled systems meet critical quality attributes like performance, security, and trustworthiness.
*   **Foster innovation:** Enable the development of new and exciting AI-powered applications.

However, limitations exist. Participants acknowledged that the lack of understanding and common definitions is a challenge, plus other key quality attributes may need more attention from the software architecture community.

#### Conclusion

The Dagstuhl Seminar on Software Architecture and Machine Learning provided a valuable forum for researchers and practitioners to collaborate and define the future of this evolving field. The shared vocabulary, key challenges, and research roadmap that emerged from the seminar provide a solid foundation for future work in **SA&ML**, paving the way for more effective and responsible integration of **ML** into software systems.

If you are interested in reading more, the original report can be found at https://www.dagstuhl.de/23302
`,$=`---
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

The **Fog Layer** acts as an intermediary, sitting between the devices and the cloud. Its primary job is to perform lightweight computations and handle **device-level adaptation**. Each \`Compute Node\` in the fog contains an \`Adapter\` component. This component uses Machine Learning (ML) models, periodically sent down from the cloud, to predict future device QoS. If the model forecasts a problem (e.g., critical battery drain in the next hour), the Adapter triggers an adaptation plan, such as instructing the device to send data less frequently. This is **proactive adaptation** in action, solving problems before they occur.

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

The authors plan to implement this architecture for the science fair use case, using technologies like **Apache Kafka**, **Istio**, **Kubernetes**, and **Keras**. This will allow them to measure its real-world effectiveness in terms of prediction accuracy, energy savings for devices, and the successful achievement of user goals. This work provides a strong blueprint for the next generation of intelligent, resilient IoT systems.`,ee=`---
title: "EcoMLS: A Smart System That Puts AI on an Energy Diet"
excerpt: "Artificial Intelligence is powerful but energy-hungry. Researchers have developed EcoMLS, a self-adapting system that dynamically switches ML models at runtime to slash energy use without tanking performance."
date: "2024-06-15"
author: "Meghana Tedla, Shubham Kulkarni, Karthik Vaidhyanathan"
category: "AI/ML"
thumbnail: "/images/blogpic/ecomls_a_self_adaptation_approach_for_architecting_green_ml_enabled_systems_p2_f1.png"
---

Artificial Intelligence is transforming our world, but this progress comes with a hidden cost: a massive energy footprint. While much attention has been paid to the energy required to *train* large AI models, the power consumed during their actual use—the **inference phase**—is a growing environmental concern. How can we build greener AI systems that are both powerful and energy-efficient, especially when their operating conditions are constantly changing?

A team of researchers from IIIT Hyderabad has proposed an elegant solution called **EcoMLS**. It’s a self-adapting framework for **Machine Learning-Enabled Systems (MLS)** that intelligently manages the trade-off between energy consumption and model accuracy. Instead of using a single, static ML model, EcoMLS dynamically switches between different models at runtime, picking the best one for the job to save energy while maintaining high performance.

#### The Core Challenge: The Energy vs. Accuracy Trade-Off

In machine learning, there's often a direct trade-off between a model's performance and its resource consumption. Consider an object detection task. You could use:
*   A small, lightweight model (like YOLOv5n) that is fast and consumes very little energy, but might be less accurate.
*   A large, complex model (like YOLOv5l) that is highly accurate, but demands significant computational power and energy.

Most systems are stuck with one model, forcing a permanent compromise. But what if a system could intelligently switch between them based on real-time needs? This is precisely what EcoMLS is designed to do.

#### Introducing EcoMLS: A Self-Adapting Architecture

EcoMLS uses a classic control loop pattern from autonomic computing called **MAPE-K (Monitor-Analyze-Plan-Execute-Knowledge)** to make its decisions. This architecture allows the system to observe itself and its environment, and then adapt its behavior accordingly.


![The complete architecture of the EcoMLS system, showing the MAPE-K loop interacting with the Managed System.](/images/blogpic/ecomls_a_self_adaptation_approach_for_architecting_green_ml_enabled_systems_p2_f1.png)


The system is built on two key components:

1.  **The Learning Engine:** Before deployment, the Learning Engine benchmarks a set of available ML models (e.g., YOLOv5n, small, medium, and large). It measures their baseline energy consumption, accuracy (confidence score), and processing time. This creates an initial "knowledge base" of each model's capabilities.

2.  **The MAPE-K Runtime Loop:** This is the operational brain of EcoMLS.
    *   **Knowledge:** A central repository that stores the baseline model data, real-time performance logs, and the current adaptation rules.
    *   **Monitor:** This component continuously tracks the live system, measuring the energy being consumed and the confidence score of the currently active model.
    *   **Analyze:** The Analyzer evaluates the data from the Monitor. It calculates a performance score for the current model and determines if it's operating inefficiently (e.g., using too much energy for the accuracy it's delivering). If it detects an issue, it triggers the Planner.
    *   **Plan:** The Planner is the strategist. When triggered, it decides which model to switch to. It considers the current context—is the goal to reduce high energy use or to improve low confidence?—and selects the model that offers the best balance.
    *   **Execute:** This component carries out the Planner's decision by deactivating the current model and loading the newly selected one.

This continuous loop allows EcoMLS to react dynamically to shifting demands, ensuring it's always using the most appropriate model for the job.

#### Putting EcoMLS to the Test

The researchers evaluated EcoMLS using an object detection system that processed 25,000 image requests. They compared its performance against using single, static models (nano, small, medium, large) and three other "naive" adaptive strategies.

#### Finding the Sweet Spot: Balancing Energy and Confidence

The results clearly show that EcoMLS effectively navigates the **energy-accuracy trade-off**. The scatter plots below illustrate this. The first row shows the performance of the individual static models. The second row shows EcoMLS in action. The "Trade-off Line" connects the most efficient model (nano) with the most accurate (large). Points below this line represent a better-than-average deal—getting good accuracy for a low energy cost.


![Scatter plots showing the trade-off between energy and confidence for individual models and for EcoMLS with different exploration rates.](/images/blogpic/ecomls_a_self_adaptation_approach_for_architecting_green_ml_enabled_systems_p5_f1.png)


As seen in the charts, EcoMLS (especially with a low exploration rate, ε = 0.1) keeps most of its operations well below the trade-off line, demonstrating its efficiency. Quantitatively, EcoMLS achieved an **84% reduction in energy consumption** compared to the most accurate 'large' model, while simultaneously delivering a **14% improvement in confidence** over the most energy-efficient 'nano' model.

#### Adaptive in Action: Smart Model Switching

Unlike static systems, EcoMLS is constantly adapting. The timeline below shows how frequently EcoMLS switches models to optimize performance, compared to naive baselines which are far more static. With an exploration setting of ε = 0.1, EcoMLS performed 160 model switches over the 25,000 requests, showing it was continuously responding to runtime conditions.


![Graph showing the active model over time for EcoMLS versus three naive strategies. EcoMLS shows frequent, dynamic switching.](/images/blogpic/ecomls_a_self_adaptation_approach_for_architecting_green_ml_enabled_systems_p5_f2.png)


#### Is the Adaptation Itself Costly?

A key question is whether the overhead of the MAPE-K loop itself consumes the energy it's trying to save. The research shows this is not the case. The adaptation mechanism adds a negligible overhead—the entire MAPE-K loop's energy cost is minimal compared to the savings. For instance, the analysis showed the total energy for EcoMLS to be 4.047 Joules, of which only 1.285 Joules were for the adaptation logic, while the rest was for the model operations. This is a tiny price to pay for the significant overall energy reduction.

The graph below shows the energy consumption over time. EcoMLS consistently maintains a low energy profile, far below the medium and large models, while avoiding the poor accuracy of the nano model.


![A line graph showing the trend of energy consumption over time. EcoMLS maintains a low and stable energy usage compared to static medium and large models.](/images/blogpic/ecomls_a_self_adaptation_approach_for_architecting_green_ml_enabled_systems_p7_f1.png)


#### The Future is Green and Adaptive

**EcoMLS** provides a compelling proof-of-concept that **self-adaptation** is a powerful technique for building sustainable, energy-efficient AI systems. By moving beyond a one-size-fits-all approach, it demonstrates that we can intelligently manage resources at runtime to create "Green AI" that is both practical and effective.

The researchers plan to extend this work to other domains like Natural Language Processing (NLP) and explore its use in edge computing. This research is a valuable contribution to the ongoing effort to make AI not just more powerful, but also more responsible.`,te=`---
title: "EdgeMLBalancer: A Smart AI Co-pilot for Your Phone"
excerpt: "Ever wonder how your phone runs complex AI tasks without grinding to a halt? Researchers have developed EdgeMLBalancer, a self-adaptive system that dynamically switches AI models to perfectly balance performance and efficiency on resource-constrained devices."
date: "2025-01-01"
author: "Akhila Matathammal, Kriti Gupta, Larissa Lavanya, Ananya Vishal Halgatti, Priyanshi Gupta, Karthik Vaidhyanathan"
category: "AI/ML"
thumbnail: "/images/blogpic/edgemlbalancer_a_self_adaptive_approach_for_dynamic_model_switching_on_resource_constrained_edge_devices_p3_f1.png"
---

From real-time navigation to instant photo filters, Artificial Intelligence (AI) is no longer confined to massive data centers; it's running right in our pockets on edge devices like smartphones. But this convenience comes with a major technical challenge: how do you run powerful, computationally hungry AI models on devices with limited battery, memory, and processing power?

Often, developers are forced to make a trade-off. They can use a large, complex model for high accuracy but risk slowing the device down and draining the battery. Or, they can use a lightweight model that's fast and efficient but sacrifices precision. What if a system could intelligently choose the right model for the right moment, adapting on the fly to changing demands?

This is precisely the problem that a new research paper tackles with a solution called **EdgeMLBalancer**, a self-adaptive framework designed to bring smarter resource management to edge AI.

#### The Challenge: A Balancing Act in Dynamic Environments

Imagine a real-time traffic monitoring application running on a smartphone. During rush hour, the camera feed is packed with cars, buses, and pedestrians. Here, you need a highly accurate object detection model to make sense of the chaos. But late at night, with only a few cars on the road, using that same powerful model would be overkill—wasting precious CPU cycles and battery life.


![A sample frame from a real-time object detection application.](/images/blogpic/edgemlbalancer_a_self_adaptive_approach_for_dynamic_model_switching_on_resource_constrained_edge_devices_p2_f1.png)


Existing systems often lack the intelligence to adapt to these fluctuating conditions. They stick with a single, statically chosen model, leading to either poor performance when things get busy or inefficiency when they're quiet.

#### Introducing EdgeMLBalancer: The Smart AI Traffic Cop

EdgeMLBalancer is a self-adaptive system that acts like an intelligent manager for on-device AI models. Instead of relying on a single model, it has access to a collection of them, each with a different trade-off between accuracy and computational cost. Its core job is to continuously monitor the device's performance and the application's needs, dynamically switching to the most suitable model at any given time.

The system is built around a classic control loop for self-adaptive systems known as **MAPE-K (Monitor-Analyze-Plan-Execute-Knowledge)**.


![The high-level architecture of EdgeMLBalancer, showing the MAPE-K loop interacting with the managed system.](/images/blogpic/edgemlbalancer_a_self_adaptive_approach_for_dynamic_model_switching_on_resource_constrained_edge_devices_p3_f1.png)


Here’s a simplified breakdown of how it works:

1.  **Monitor**: It constantly watches key metrics, primarily **CPU usage** (how much processing power is being used) and the model's **confidence score** (a measure of its accuracy).
2.  **Analyze**: It takes this raw data and calculates a "performance score" that evaluates the current model's balance between efficiency and accuracy.
3.  **Plan**: This is the brain of the operation. The Planner uses a clever probabilistic method called the **epsilon-greedy strategy** to decide which model to use next. This strategy strikes a balance between:
    *   **Exploitation**: Sticking with the model that is currently performing the best.
    *   **Exploration**: Occasionally trying out other models, even if they aren't the top performers at the moment. This "exploration" is crucial because a different model might become more effective if the conditions change (e.g., traffic density increases).
4.  **Execute**: This component puts the plan into action, seamlessly deactivating the old model and activating the newly selected one.
5.  **Knowledge**: This is the system's central repository, holding all the available ML models, their performance scores, and logs of past activity to inform future decisions.

By using the epsilon-greedy strategy, EdgeMLBalancer avoids a common pitfall called **model starvation**, where a system over-relies on one "safe" model and never discovers that another might be better. This ensures both robust performance and fairness in how resources are used.

#### Putting EdgeMLBalancer to the Test

To prove its effectiveness, the researchers implemented EdgeMLBalancer in an Android application and tested it on a smartphone analyzing a 30-minute real-time video of Indian traffic. They compared its performance against two other approaches:

1.  **Naive Approach**: Switches models based on simple, predefined thresholds for CPU and accuracy.
2.  **Round Robin with Boosting**: Cycles through models on a schedule, with some adjustments.

The results were compelling and answered three key research questions.

#### The Results: A Clear Winner in Performance and Fairness

**1. Finding the Sweet Spot (Effectiveness)**

EdgeMLBalancer struck the best balance between high accuracy and efficient CPU usage. While the Naive approach suffered from very low accuracy (2.94%) and the Round Robin method was mediocre (10.85%), EdgeMLBalancer achieved a significantly higher average accuracy of **17.36%** while keeping CPU usage under control. It delivered **491% more accuracy** than the Naive method while actually using less CPU.


![A scatter plot showing that the Epsilon-Greedy (EdgeMLBalancer)
 approach achieves high confidence scores across a balanced range of CPU usage compared to other methods.](/images/blogpic/edgemlbalancer_a_self_adaptive_approach_for_dynamic_model_switching_on_resource_constrained_edge_devices_p5_f1.png)

**2. No Model Left Behind (Fairness)**

This is where EdgeMLBalancer truly shined. The Naive and Round Robin methods exhibited extreme **model starvation**. The Naive approach used one model 74% of the time, while Round Robin used its preferred model a staggering 84% of the time, neglecting other potentially useful models.

In contrast, EdgeMLBalancer distributed the workload far more equitably. Its exploration strategy ensured that all available models were given a chance to run, leading to a much more robust and adaptive system.


![Bar charts showing model usage. The Naive and Round Robin (MLFQ)
 approaches heavily favor one model, while the Epsilon (EdgeMLBalancer) approach shows a much more balanced distribution.](/images/blogpic/edgemlbalancer_a_self_adaptive_approach_for_dynamic_model_switching_on_resource_constrained_edge_devices_p6_f2.png)

**3. Quick on Its Feet (Responsiveness)**

The system was also efficient in its decision-making. The average time taken to switch between models was just **0.85 seconds**. This proves that its adaptive mechanism is lightweight enough for real-time applications without introducing noticeable lag.


![A bar chart comparing key metrics, showing EdgeMLBalancer's balanced performance in CPU usage, accuracy, and switching time.](/images/blogpic/edgemlbalancer_a_self_adaptive_approach_for_dynamic_model_switching_on_resource_constrained_edge_devices_p6_f3.png)


#### Why This Matters: The Future of On-Device AI

EdgeMLBalancer provides a powerful blueprint for the next generation of edge AI systems. By moving beyond static configurations and embracing dynamic self-adaptation, it paves the way for applications that are not only powerful but also intelligent about how they use our devices' limited resources.

This research demonstrates that we can achieve a smarter, more sustainable balance between computational efficiency and accuracy. As AI becomes even more integrated into our daily lives, approaches like EdgeMLBalancer will be essential for building robust, high-performance applications that run seamlessly on the devices we use every day.`,ne=`---
title: "Retrofitting the Future of Education: How IoT is Making Remote Labs Accessible for All"
excerpt: "The COVID-19 pandemic highlighted a major gap in education: access to hands-on science labs. Researchers have developed an innovative, low-cost solution called RLabs that retrofits traditional lab equipment with IoT devices, making remote experimentation accessible, scalable, and reliable."
date: "2024-12-26"
author: "Savitha Viswanadh Kandala, Akshit Gureja, Nagesh Walchatwar, Rishabh Agrawal, Shiven Sinha, Sachin Chaudhari, Karthik Vaidhyanathan, Venkatesh Choppella, Prabhakar Bhimalapuram, Harikumar Kandath, Aftab Hussain"
category: "IoT"
thumbnail: "/images/blogpic/engineering_end_to_end_remote_labs_using_iot_based_retrofitting_p11_f1.png"
---

The global shift in education, accelerated by events like the COVID-19 pandemic, exposed a critical vulnerability: the inaccessibility of hands-on laboratory facilities. For science and engineering students, this meant a disruption to the very core of their learning. While remote labs have existed as a concept, they are often expensive and difficult to scale, especially in developing regions.

A team of researchers from the International Institute of Information Technology (IIIT) Hyderabad has tackled this challenge head-on. They've engineered **RLabs**, an end-to-end remote laboratory solution that is affordable, scalable, and portable. By **retrofitting** traditional lab equipment with low-cost Internet of Things (IoT) components, RLabs brings the physical lab experience to any student with an internet connection.

#### The Problem with Traditional Remote Labs

Most remote lab solutions are costly to build and maintain. They often require specialized hardware and powerful central servers to stream video and manage user interactions, creating a high barrier to entry. The RLabs project rethinks this model from the ground up, focusing on a set of key principles: **affordability**, **portability**, **scalability**, and **reliability**.

#### The RLabs Solution: A Smarter Architecture

The power of RLabs lies in its clever software and hardware design. The system is built on a modular architecture that separates the user-facing frontend, the backend server, an interoperability cloud service, and the physical IoT components.


![A diagram showing the four major components of the RLabs platform: Experiment Frontend, Backend, Interoperability Service (Blynk Cloud)
, and the IoT hardware.](/images/blogpic/engineering_end_to_end_remote_labs_using_iot_based_retrofitting_p11_f1.png)

One of the most significant innovations is the use of **Peer-to-Peer (P2P) live video streaming** using **WebRTC**. Instead of routing video through a costly central server, WebRTC creates a direct connection between the camera in the lab and the student's browser. This drastically reduces latency and server load, making the system highly scalable. A user can control an experiment and see the results in near real-time, with a one-way latency of approximately 220 ms.

The execution flow is designed for a seamless user experience. A student logs in, selects an experiment, and the backend verifies that a hardware node is available. Once confirmed, the system establishes the P2P video stream and gives the student control over the experiment.


![A sequence diagram illustrating the communication flow between the user's frontend, the backend server, the Blynk cloud service, and the IoT hardware.](/images/blogpic/engineering_end_to_end_remote_labs_using_iot_based_retrofitting_p12_f1.png)


#### Putting It to the Test: From Vanishing Rods to Focal Lengths

To demonstrate the system's capabilities, the researchers retrofitted and miniaturized two classic high-school physics experiments.

**1. The Vanishing Rod Experiment:**
This experiment demonstrates the concept of refractive index. A glass rod "disappears" when dipped in sunflower oil (which has a similar refractive index) but remains visible in water. The team automated this by using stepper motors to lower the rods into beakers, all controlled remotely by the student.


![The concept behind the vanishing rod experiment, showing how a glass rod is visible in water but not in oil.](/images/blogpic/engineering_end_to_end_remote_labs_using_iot_based_retrofitting_p5_f1.png)


**2. The Focal Length Experiment:**
Here, students determine the focal length of a biconvex lens by moving an object and a screen to form a sharp image. In the RLabs version, stepper motors precisely control the position of the object and screen on an optical bench, allowing students to make accurate measurements from afar.


![A side-view of the retrofitted focal length experiment, showing the object, lens, screen, and stepper motors on an optical bench.](/images/blogpic/engineering_end_to_end_remote_labs_using_iot_based_retrofitting_p11_f1.png)


#### Miniaturization: Making Labs Portable and Affordable

Beyond just retrofitting existing equipment, the team designed miniaturized versions of the experiments using 3D-printed parts and compact electronics like the Raspberry Pi Zero 2 W.



This approach has a massive impact:
- **Cost Reduction:** The miniaturized Vanishing Rod setup is **41% cheaper** than its lab-scale counterpart, and the Focal Length setup is **24% cheaper**.
- **Portability:** The weight of the Vanishing Rod experiment was reduced by a factor of 5.4, and its volume by 12 times. This makes it easy to ship and set up labs anywhere.
- **Easy Assembly:** The modular design, using techniques like V-slot profiles and snap-fit components, allows for quick, tool-minimal assembly, much like IKEA furniture.


![Step-by-step assembly guide for the miniaturized Focal Length experiment.](/images/blogpic/engineering_end_to_end_remote_labs_using_iot_based_retrofitting_p23_f2.png)


#### The Automated Watchdog: Ensuring System Reliability

A remote lab is only useful if it works reliably. Manually checking each experiment every day is impractical. To solve this, the researchers built an **automated testing suite**—a feature missing from most other remote lab systems.

This "watchdog" system periodically emulates a real user. It uses Selenium to log into the platform, select an experiment, and perform actions. At the same time, it uses **Computer Vision (CV)** algorithms to analyze the video stream and verify that the physical hardware is responding correctly.


![Diagram showing the components of the automated testing system, including a WebDriver, OpenCV for image analysis, and a mail handler for alerts.](/images/blogpic/engineering_end_to_end_remote_labs_using_iot_based_retrofitting_p16_f1.png)


For example, in the Focal Length experiment, the CV script:
1.  Performs **background subtraction** to isolate moving parts (the object and screen).
2.  Uses **morphological transformations** to clean up the image.
3.  Tracks the position of the components to ensure the motors moved them the correct distance.

If the system detects a hardware failure or a software bug, it automatically sends an alert to the administrators. This proactive monitoring ensures high availability, with the system reporting an impressive **84% uptime** over four months of continuous operation.

#### Real-World Impact and User Feedback

The RLabs platform was tested by a group of 45 ninth-grade students. The feedback was overwhelmingly positive, with an average score of **4.34 out of 5**. Students found the platform easy to navigate and the experiments highly responsive, confirming its usability and educational effectiveness. The server architecture proved to be lightweight and scalable, handling concurrent users with only a minimal increase in latency and CPU usage.

By combining low-cost IoT retrofitting, a scalable P2P architecture, and a novel automated testing system, RLabs presents a powerful and practical blueprint for the future of science education—one that is more accessible, affordable, and resilient than ever before.
`,ae=`---
title: "The Battle for Smart City IoT: A Performance Showdown of oneM2M Architectures"
excerpt: "Smart cities thrive on connected devices, but seamless communication is a huge challenge. We break down a study that stress-tests three leading oneM2M platforms—Mobius, OM2M, and ACME—revealing a clear performance winner and a crucial lesson for IoT architects."
date: "2024-06-15"
author: "VJS Pranavasri, Leo Francis, Gaurav Pal, Ushasri Mogadali, Anuradha Vattem, Karthik Vaidhyanathan, Deepak Gangadharan"
category: "Network Systems"
thumbnail: "/images/blogpic/exploratory_study_of_onem2m_based_interoperability_architectures_for_iot_a_smart_city_perspective_p3_f1.png"
---

The promise of a "smart city" is built on a simple idea: countless devices, sensors, and systems all working together. But this vision hits a wall called **interoperability**. How do you get devices from different manufacturers, running different software, to speak the same language?

The **oneM2M** standard was created to be the universal translator for the Internet of Things (IoT). It provides a common framework, or service layer, to manage all this communication. However, a standard is just a blueprint. The real-world performance depends entirely on its implementation.

Researchers at the Smart City Research Centre at IIIT Hyderabad decided to put the leading **oneM2M** implementations to the test. They conducted an exploratory study comparing three prominent open-source platforms—**Mobius**, **OM2M**, and **ACME**—to see which one could handle the immense pressure of a large-scale smart city deployment. The results were not just interesting; they were a lesson in software architecture.


![The general oneM2M architecture, showing its three main layers: Application, Service, and Connectivity.](/images/blogpic/exploratory_study_of_onem2m_based_interoperability_architectures_for_iot_a_smart_city_perspective_p3_f1.png)


#### The Contenders: A Look at the Architectures

The study focused on three popular open-source oneM2M platforms, each with a different architectural philosophy.

1.  **OM2M: The Modular Veteran**
    Developed by the Eclipse Foundation, **OM2M** is written in Java and built on a modular OSGi framework. Its strength lies in its exceptional extensibility—you can add or remove functionalities via plugins without rebooting the system. This makes it flexible and adaptable, following well-established software engineering principles.

    
![OM2M's modular architecture, based on Java and the OSGi framework.](/images/blogpic/exploratory_study_of_onem2m_based_interoperability_architectures_for_iot_a_smart_city_perspective_p3_f2.png)


2.  **ACME: The Lightweight Educator**
    **ACME** (Agile Connected-things Management Entity) is a lightweight framework built with Python, Flask, and TinyDB. It's designed primarily for educational and experimental purposes. Its simplicity makes it fantastic for learning oneM2M concepts but, as the study shows, it has limitations for production-grade deployments.

    
![ACME's simple architecture, leveraging Python, Flask, and a TinyDB database.](/images/blogpic/exploratory_study_of_onem2m_based_interoperability_architectures_for_iot_a_smart_city_perspective_p4_f1.png)


3.  **Mobius: The Performance Powerhouse**
    Built on Node.js with a MySQL database, **Mobius** is architected for one thing: performance. Its secret weapon is how it handles concurrency. Instead of a single process, Mobius spawns multiple worker clusters to process requests in parallel. This design choice, as we'll see, gives it a massive advantage under heavy load.

    
![Mobius's architecture, featuring concurrent workers powered by Node.js.](/images/blogpic/exploratory_study_of_onem2m_based_interoperability_architectures_for_iot_a_smart_city_perspective_p4_f2.png)


#### The Grand Challenge: A Smart City Showdown

To ensure a fair and realistic comparison, the researchers leveraged their own Smart City Living Lab, a 66-acre campus with over 370 active IoT nodes. They containerized all three platforms using Docker for a consistent environment and subjected them to a battery of tests using the Locust load-testing tool.

The tests included:
-   **Synthetic Workloads:** Simulating a high-load environment with various request patterns (periodic spikes, gradual increases, and random traffic).
-   **Real-World Emulation:** Replicating the exact data traffic patterns from their production smart city network.
-   **Stress Tests:** Pushing each system to its breaking point by incrementally increasing concurrent users to find its maximum **requests per second (RPS)**.

#### The Results: Performance Under Pressure

Across almost every metric—latency, throughput, and resource utilization—**Mobius** emerged as the undisputed champion.

Under standard synthetic and real-world loads, Mobius consistently delivered the lowest response times. The graphs below show how Mobius (the green line) stays flat and low while the others struggle as the user count increases.


![Comparison of response times across different request patterns. Mobius consistently shows lower latency.](/images/blogpic/exploratory_study_of_onem2m_based_interoperability_architectures_for_iot_a_smart_city_perspective_p6_f1.png)


The most dramatic results came from the **stress tests**. Here, the architectural differences became starkly clear.

-   **POST Requests (Data Insertion):** Mobius handled a staggering **568 RPS**, a **56,700%** improvement over OM2M (1 RPS) and a **3,942%** improvement over ACME (14 RPS).
-   **GET Requests (Data Retrieval):** Mobius achieved **124 RPS**, while OM2M and ACME topped out at 3 and 43 RPS, respectively. Even at these peak loads, Mobius's average latency remained impressively low at just 12ms for GET requests.

The CPU usage statistics tell the same story. Mobius's efficient concurrency model kept its CPU usage significantly lower than its competitors, especially under heavy, spiky loads.


![CPU usage statistics show Mobius is more efficient than ACME and OM2M.](/images/blogpic/exploratory_study_of_onem2m_based_interoperability_architectures_for_iot_a_smart_city_perspective_p7_f1.png)


#### Why Did Mobius Win? The Architectural Deep Dive

The study reveals a fascinating insight: **well-structured, modular code does not always translate to optimal performance.** OM2M follows excellent software design patterns, making it highly maintainable and extensible. However, its architecture seems to have inherent bottlenecks that prevent it from scaling effectively.

Mobius's victory is a direct result of its architecture being purpose-built for high-concurrency I/O, a typical workload in IoT systems. By using a multi-process model based on Node.js, it can handle thousands of simultaneous connections without breaking a sweat. This parallel execution provides a substantial, measurable advantage.

ACME, while performing better than OM2M in some cases, is ultimately held back by its lightweight design and incomplete adherence to the full oneM2M specification.

#### Key Takeaways for IoT Architects

This research offers clear, actionable guidance for anyone building a large-scale IoT system:

1.  **Prioritize Concurrency for Scale:** For demanding IoT applications, choose a platform whose architecture is fundamentally designed for parallel processing. As demonstrated by Mobius, this is the key to handling high throughput and maintaining low latency.
2.  **Match the Tool to the Job:** A highly modular framework like OM2M might be perfect for a system where extensibility is more critical than raw throughput. A simple framework like ACME is an excellent choice for educational projects or small-scale proofs-of-concept.
3.  **Look Beyond Code Elegance:** Clean, modular code is vital for maintainability. But for performance, you must analyze the underlying architectural patterns. How a system manages state, processes, and network connections under load is what truly determines its scalability.

The study concludes by suggesting that future work should explore microservice-based architectures, which could offer an even finer-grained approach to scaling and optimizing individual components of an IoT platform.`,ie=`---
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
`,se=`---
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

While the initial study shows that LLMs have great potential for automating AKM tasks, it also highlights the need for further research to reach human-level proficiency. The ultimate goal is a user-friendly system that simplifies documentation, prevents knowledge vaporization, and empowers teams to make better, more informed decisions.`,oe=`---
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
`,re=`---
title: "POSEIDON: A New Direction in Managing MEC Networks"
excerpt: "Exploring how POSEIDON combines Deep RL with traditional optimization for efficient MEC network management."
date: "2024-10-23"
author: "Research Team"
category: "Network Systems"
thumbnail: "/images/blogpic/poseidon_networks.png"
---

As the Internet of Things (IoT), 5G, and connected devices continue to grow, network infrastructures must keep up with the increasing demand for data processing and real-time responses. Multi-access edge computing (MEC) networks are designed to address this by moving computing resources closer to the "edge" of the network, allowing faster response times. However, managing MEC networks—especially as they scale—comes with significant challenges.

**POSEIDON** is a new framework that combines **Deep Reinforcement Learning (Deep RL)** with traditional optimization techniques to improve how we manage these networks. While still in the early stages, POSEIDON offers a fresh approach to handling some of the key issues facing MEC networks today.

#### The Complexity of MEC Network Management

MEC networks help reduce delays by processing data near the user, avoiding the need to send it to distant cloud servers. This makes them ideal for real-time applications like traffic monitoring, smart home devices, and video streaming. However, as more devices come online, the demands on MEC networks grow, creating new challenges:

1. **Dynamic Workloads**: The number of tasks or requests in a MEC network can vary greatly. For example, a traffic monitoring system may handle a few requests late at night but experience a massive spike during rush hour.
2. **Function Placement**: Deciding which nodes (computers) should run specific applications or functions is key to maintaining efficient operations. The system must decide how many nodes to use and where to place these functions based on real-time demand.
3. **Routing Policy**: When one node becomes overloaded, the system needs to reroute some tasks to other, less busy nodes to balance the workload.

Traditional frameworks like **NEPTUNE** have provided solutions to these problems using **Mixed Integer Linear Programming (MILP)**. NEPTUNE optimizes two main tasks: **function placement** and **routing policy**. It divides the network into small groups of nodes, called communities, and optimizes how tasks are distributed across them.

However, **NEPTUNE's** reliance on MILP presents a significant limitation: **slow decision times**. As the number of nodes and applications increases, the time it takes for NEPTUNE to make decisions grows exponentially. This makes it less practical for real-time environments where workloads can change instantly.

![POSEIDON Network Architecture](/images/blogpic/poseidon_networks.png)


#### How POSEIDON Offers a New Approach

POSEIDON aims to address these limitations by integrating **Deep Reinforcement Learning (Deep RL)** with MILP. In this framework, Deep RL is used to speed up decision-making for function placement, while MILP is applied afterward to fine-tune routing policies.

Using the **Proximal Policy Optimization (PPO)** algorithm, POSEIDON's Deep RL model learns from past experiences, figuring out which function placements work well in different situations. The model can then quickly make decisions about where to place functions, responding to dynamic workloads in real time. This is particularly useful in fast-changing environments like MEC networks, where rapid adaptation is key.

Once the function placement is decided by the Deep RL model, POSEIDON applies MILP to determine the most efficient routing policy, ensuring that overloaded nodes can offload tasks to other nodes in the network.

This combination of Deep RL and MILP provides a more scalable and responsive system compared to traditional approaches like NEPTUNE.

#### POSEIDON vs. NEPTUNE: Key Differences

While both POSEIDON and NEPTUNE address the same core challenges in MEC network management, POSEIDON's use of Deep RL offers several potential advantages:

- **Faster Decision-Making**: POSEIDON’s Deep RL model can make decisions about function placement in constant time, significantly reducing the time it takes to respond to changing network conditions. This makes it well-suited for real-time applications.
- **Scalability**: As the number of nodes and applications grows, NEPTUNE’s performance declines due to the increasing complexity of MILP-based optimization. POSEIDON’s hybrid approach maintains consistent performance, even as the network scales.
- **Comparable Performance**: Initial tests show that POSEIDON delivers results similar to NEPTUNE in terms of network efficiency and workload distribution. However, POSEIDON achieves this with much faster processing times.

#### A Step Forward, but More Research Ahead

While POSEIDON offers promising improvements in MEC network management, it’s still a developing area of research. The integration of Deep RL with traditional optimization methods is relatively new, and more work is needed to fully explore its potential. For example, understanding the trade-offs between decision speed and accuracy in different types of networks will be important as POSEIDON continues to evolve.

However, the early results are encouraging. POSEIDON has demonstrated the ability to scale more effectively than NEPTUNE, making it an interesting direction for future research in MEC networks.

#### Looking Ahead

As IoT and 5G technologies continue to expand, MEC networks will play an increasingly important role in providing real-time services for smart cities, autonomous vehicles, and other data-driven applications. Managing these networks efficiently is critical, and frameworks like POSEIDON offer new tools for tackling the growing complexity of edge computing.

Researchers and developers interested in exploring this area further can access POSEIDON’s source code on [GitHub](https://github.com/sa4s-serc/poseidon), [Link to Paper](https://arxiv.org/abs/2410.11879). Although it’s still early days, POSEIDON offers a glimpse into how AI-driven methods could enhance the future of network management.

POSEIDON represents a step toward more flexible and scalable solutions for managing MEC networks, providing a foundation for future developments in this rapidly evolving field.
`,ce=`---
title: "Smarter Cities, Faster Data: A Scalable Distributed Architecture for IoT"
excerpt: "As cities deploy more IoT devices, traditional data systems struggle to keep up. This post explores a new multi-layered, distributed architecture that boosts data throughput by over 800%, offering a robust and scalable backbone for the smart cities of tomorrow."
date: "2023-10-12"
author: "VJS Pranavasri, Leo Francis, Ushasri Mogadali, Gaurav Pal, SVSLN Surya Suhas Vaddhiparthy, Anuradha Vattem, Karthik Vaidhyanathan, Deepak Gangadharan"
category: "Network Systems"
thumbnail: "/images/blogpic/scalable_and_interoperable_distributed_architecture_for_iot_in_smart_cities_p2_f1.png"
---

As our cities become smarter, they are generating an unprecedented amount of data from countless Internet of Things (IoT) devices—from air quality monitors and traffic sensors to smart water meters. While this data holds the key to more efficient, sustainable, and livable urban environments, it also presents a massive challenge: how can we collect, process, and use this data without the system buckling under the load?

Many current IoT platforms are centralized, creating bottlenecks that hinder performance and scalability. Data often ends up in isolated **silos**, making it difficult to integrate and analyze. Addressing this, researchers from IIIT Hyderabad have proposed a **distributed, multi-layered data platform architecture** designed to be both scalable and interoperable, ensuring our smart cities have a data infrastructure that can grow with them.

#### The Blueprint: A Four-Layer Distributed Architecture

The proposed solution moves away from a single, centralized system to a distributed model built on four distinct layers. This modular design, based on the **oneM2M** standard for interoperability, ensures that each part of the data journey is handled efficiently.


![A high-level diagram showing the four layers of the proposed architecture: Data Monitoring, Data Enhancement, Data Storage, and Data Exchange.](/images/blogpic/scalable_and_interoperable_distributed_architecture_for_iot_in_smart_cities_p2_f1.png)


Let's break down the role of each layer:

#### Layer 1: Data Monitoring Layer (DML)

The **DML** is the front door for all incoming sensor data. Instead of sending all data to one point, it uses a **load balancer** to intelligently distribute the traffic across multiple instances of the \`oneM2M\` framework. This is the core of the **distributed** approach, preventing bottlenecks and ensuring the system can handle a massive volume of data from thousands of devices simultaneously. Each instance collects and stores data using built-in Common Service Functions (CSF), making the system inherently scalable.

#### Layer 2: Data Enhancement Layer (DEnL)

Raw data from sensors is rarely perfect. The **DEnL** acts as a data refinery. It receives data from the DML and performs crucial operations like **data cleansing**, **normalization**, and **aggregation**. For example, it can filter out anomalous readings or convert data into a standard format. This layer, implemented using tools like Thingsboard, shields downstream systems from the complexity of raw data, ensuring they receive clean, consistent, and analysis-ready information.

#### Layer 3: Data Storage Layer (DSL)

Once the data is cleaned and processed, it needs a place to live. The **DSL** uses a clever two-part strategy for efficient storage and retrieval.
-   **Temporary Data Store:** Recent, frequently accessed data is stored in a high-speed database like **Elasticsearch**. This allows applications needing real-time information to get it quickly.
-   **Historical Data Archive:** Older, less-frequently accessed data is moved to a long-term storage solution like **PostgreSQL**.

This multi-tenant approach ensures both speed for current data and reliable retention for historical analysis.

#### Layer 4: Data Exchange Layer (DEL)

The final layer, the **DEL**, provides a secure and robust interface for applications and users to access the data. It includes an **authentication server** to manage user access and a **resource server** with REST APIs for querying the data. This layer ensures that only authorized clients can retrieve data, whether it's the latest real-time information from Elasticsearch or historical trends from PostgreSQL.

#### Putting the Architecture to the Test

To validate their design, the researchers implemented this architecture in the **Smart City Living Lab** at IIIT Hyderabad, a 66-acre campus with 291 active IoT nodes. They simulated various verticals, including water and air quality monitoring, and deployed the system on a stack including \`oneM2M\`, \`Kafka\` for data streaming, \`Thingsboard\` for enhancement, and \`Elasticsearch\`/\`PostgreSQL\` for storage.


![A detailed diagram showing the implementation of the distributed architecture, with data flowing from IoT nodes through a load balancer to oneM2M instances, then through Kafka and Thingsboard to storage and exchange layers.](/images/blogpic/scalable_and_interoperable_distributed_architecture_for_iot_in_smart_cities_p4_f1.png)


A key part of the enhancement layer is the rule chain, which processes incoming data. For example, a rule chain in Thingsboard can parse a JSON payload, assign the correct parameters, and forward the processed data for storage.


![A flowchart illustrating a Thingsboard rule chain, which takes input data, parses it, and routes it for further processing or storage.](/images/blogpic/scalable_and_interoperable_distributed_architecture_for_iot_in_smart_cities_p4_f2.png)


#### The Results: A Monumental Leap in Performance

The performance results speak for themselves, demonstrating significant improvements over a traditional, centralized architecture.

For **data insertion** (sending data from sensors), the distributed system with a Least Connection (LC) load balancer achieved:
-   Up to a **41.23% increase in throughput**.
-   An average **29.19% decrease in latency**.

This means the system can handle more devices sending data more frequently without slowing down.

The most dramatic improvement was seen in **data retrieval**. When clients requested data, the new architecture was staggeringly faster:
-   An over **800% increase in throughput** and number of requests handled compared to retrieving data directly from the base \`oneM2M\` layer.
-   A **222% increase in throughput** and a **69% average decrease in latency** compared to a non-distributed setup.


![A line graph comparing the retrieval latency of the existing centralized architecture against the new distributed architecture with Round Robin (RR)
 and Least Connection (LC) load balancing. The distributed architectures show significantly lower and more stable latency as the number of requests increases.](/images/blogpic/scalable_and_interoperable_distributed_architecture_for_iot_in_smart_cities_p5_f1.png)

By using Elasticsearch as a temporary data store, the query response time was drastically reduced, allowing for near-instant access to the latest data.

#### Why This Matters for the Future of Smart Cities

This research provides a powerful and practical blueprint for building the data backbone of future smart cities. By moving from a centralized to a distributed, multi-layered model, cities can build IoT systems that are:
-   **Scalable:** Effortlessly handle an ever-increasing number of devices and users.
-   **High-Performing:** Deliver data with minimal delay, enabling real-time decision-making.
-   **Interoperable:** Break down data silos using standards like \`oneM2M\`, allowing different systems to communicate seamlessly.
-   **Robust:** Eliminate single points of failure, leading to a more reliable network.

As cities continue to evolve, architectures like this will be essential for turning the vast potential of IoT data into tangible improvements in urban life. The next step, as the authors suggest, could be to evolve this into a microservices-based architecture for even greater flexibility and performance.`,le=`---
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

The future of **software architecture for ML-based systems** lies in creating unified frameworks, processes, and tools that treat intelligent components not as external black boxes but as first-class citizens of the architecture. The role of the software architect will evolve to that of a coordinator who understands both worlds—fluent in both programmatic and probabilistic thinking—and can design systems that are not just built, but are built to learn and evolve.`,de=`---
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

-   **Analyze:** The **Analyzer** determines if an adaptation is necessary. It compares the current system state to the pre-computed CI matrices from the Knowledge base. For instance, if the request rate (\`v\`) suddenly spikes beyond the current model's "safe" operating range, the Analyzer flags a problem.

-   **Plan:** If an adaptation is needed, the **Planner** devises a strategy. It consults the CI matrices to find a list of candidate models that can handle the new, higher request rate. From this list, the **Model Selector** picks the best one (\`m_best\`)—typically the model that offers the highest accuracy while still meeting the speed requirements.

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
`,o=Object.assign({"../blog/2103.07950v2.md":v,"../blog/2109.07900v1.md":w,"../blog/2109.10073v1.md":b,"../blog/2308.09960v1.md":T,"../blog/2402.05466v1.md":k,"../blog/2402.06351v1.md":_,"../blog/2403.01709v1.md":A,"../blog/2404.04572v1.md":M,"../blog/2404.09866v1.md":L,"../blog/2404.11411v1.md":I,"../blog/2501.08243v1.md":S,"../blog/2501.14165v1.md":x,"../blog/2501.17028v1.md":E,"../blog/2503.13310v2.md":D,"../blog/2504.08207v1.md":P,"../blog/2504.19277v1.md":R,"../blog/2509.10099v1.md":C,"../blog/2512.04702v2.md":F,"../blog/2512.09543v2.md":q,"../blog/2512.12791v2.md":z,"../blog/2601.06456v1.md":O,"../blog/3344948.3344962.md":B,"../blog/3477314.3507146.md":W,"../blog/3494322.3494329.md":H,"../blog/3565472.3595614.md":K,"../blog/3593227.md":G,"../blog/3605098.3635942.md":U,"../blog/3617650.3624936.md":j,"../blog/3643915.3644105.md":V,"../blog/a_machine_learning_driven_approach_for_proactive_decision_ma.md":Q,"../blog/agile4mlsleveraging_agile_practices_for_developing_machine_learning_enabled_systems_an_industrial_experience.md":N,"../blog/architecting_digital_twin_for_smart_city_systems_a_case_study.md":Y,"../blog/architecting_digital_twins_for_intelligent_transportation_systems.md":J,"../blog/can_llms_generate_architectural_design_decisions___an_exploratory_empirical_study.md":X,"../blog/dagrep.13.7.166.md":Z,"../blog/data_driven_adaptation_in_microservice_based_iot_architectures.md":$,"../blog/ecomls_a_self_adaptation_approach_for_architecting_green_ml_enabled_systems.md":ee,"../blog/edgemlbalancer_a_self_adaptive_approach_for_dynamic_model_switching_on_resource_constrained_edge_devices.md":te,"../blog/engineering_end_to_end_remote_labs_using_iot_based_retrofitting.md":ne,"../blog/exploratory_study_of_onem2m_based_interoperability_architectures_for_iot_a_smart_city_perspective.md":ae,"../blog/leaf.md":ie,"../blog/leveraging_generative_ai_for_architecture_knowledge_management.md":se,"../blog/leveraging_llms_for_dynamic_iot_systems_generation_through_mixed_initiative_interaction.md":oe,"../blog/poseidon.md":re,"../blog/scalable_and_interoperable_distributed_architecture_for_iot_in_smart_cities.md":ce,"../blog/software_architecture_for_ml_based_systems_what_exists_and_what_lies_ahead.md":le,"../blog/towards_self_adaptive_machine_learning_enabled_systems_through_qos_aware_model_switching.md":de});console.log("Loaded markdown files:",Object.keys(o));const r={};for(const t in o){const n=t.match(/([\\/])([^\\/]+?)(?:\.md)?$/);if(!n)continue;const e=n[2],a=o[t],{attributes:i,body:s}=p(a);r[e]={metadata:i,content:s}}const ue=Object.entries(r).map(([t,n])=>{const e=n.metadata||{};return{slug:t,title:e.title||"Untitled Post",excerpt:e.excerpt||"",date:e.date||new Date().toISOString(),author:e.author||"Unknown Author",category:e.category||"Uncategorized",thumbnail:e.thumbnail}}).sort((t,n)=>new Date(n.date).getTime()-new Date(t.date).getTime());export{y as B,ge as U,ue as a,f as b,r as c};
