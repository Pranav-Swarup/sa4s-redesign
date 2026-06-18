---
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

The **DML** is the front door for all incoming sensor data. Instead of sending all data to one point, it uses a **load balancer** to intelligently distribute the traffic across multiple instances of the `oneM2M` framework. This is the core of the **distributed** approach, preventing bottlenecks and ensuring the system can handle a massive volume of data from thousands of devices simultaneously. Each instance collects and stores data using built-in Common Service Functions (CSF), making the system inherently scalable.

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

To validate their design, the researchers implemented this architecture in the **Smart City Living Lab** at IIIT Hyderabad, a 66-acre campus with 291 active IoT nodes. They simulated various verticals, including water and air quality monitoring, and deployed the system on a stack including `oneM2M`, `Kafka` for data streaming, `Thingsboard` for enhancement, and `Elasticsearch`/`PostgreSQL` for storage.


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
-   An over **800% increase in throughput** and number of requests handled compared to retrieving data directly from the base `oneM2M` layer.
-   A **222% increase in throughput** and a **69% average decrease in latency** compared to a non-distributed setup.


![A line graph comparing the retrieval latency of the existing centralized architecture against the new distributed architecture with Round Robin (RR)
 and Least Connection (LC) load balancing. The distributed architectures show significantly lower and more stable latency as the number of requests increases.](/images/blogpic/scalable_and_interoperable_distributed_architecture_for_iot_in_smart_cities_p5_f1.png)

By using Elasticsearch as a temporary data store, the query response time was drastically reduced, allowing for near-instant access to the latest data.

#### Why This Matters for the Future of Smart Cities

This research provides a powerful and practical blueprint for building the data backbone of future smart cities. By moving from a centralized to a distributed, multi-layered model, cities can build IoT systems that are:
-   **Scalable:** Effortlessly handle an ever-increasing number of devices and users.
-   **High-Performing:** Deliver data with minimal delay, enabling real-time decision-making.
-   **Interoperable:** Break down data silos using standards like `oneM2M`, allowing different systems to communicate seamlessly.
-   **Robust:** Eliminate single points of failure, leading to a more reliable network.

As cities continue to evolve, architectures like this will be essential for turning the vast potential of IoT data into tangible improvements in urban life. The next step, as the authors suggest, could be to evolve this into a microservices-based architecture for even greater flexibility and performance.