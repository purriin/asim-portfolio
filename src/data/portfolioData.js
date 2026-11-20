/**
 * Centralized Portfolio Data Store
 * Single source of truth for Experience, Projects, and Extra Curriculars.
 */

export const portfolioData = [
  // ==========================================
  // EXPERIENCE
  // ==========================================
  {
    id: "experience-vehicle-monitor-corp",
    slug: "vehicle-monitor-corp",
    section: "experience",
    cardName: "Vehicle Monitor Corp.",
    title: "Vehicle Monitor Corp.",
    role: "Artificial Intelligence Engineering Intern",
    organization: "Vehicle Monitor Corp.",
    location: "Toronto, ON",
    date: "Sept 2024 - Sept 2025",
    tags: [
      "Python",
      "PyTorch",
      "Computer Vision",
      "Self-Supervised Learning",
      "Autoencoders",
      "K-Means Clustering",
      "Silhouette Analysis"
    ],
    metrics: [
      "21x CPU Inference Speedup",
      "Up to 40x Projected GPU Speedup",
      "Zero Manual Annotation Clustering"
    ],
    links: [],
    resumeBullets: [
      "Redesigned production object detection pipeline from a two-stage to one-stage architecture, achieving a 21x CPU inference speedup and up to 40x projected speedup with a CUDA-enabled GPU",
      "Deployed a self-supervised convolutional autoencoder stack using masked feature prediction to process large datasets of unlabeled hardware",
      "Engineered custom pipeline to extract the encoder features and apply k-means clustering, using silhouette analysis to automate the classification of hardware components without manual annotation"
    ],
    detailedBreakdown: {
      problemOverview:
        "At Vehicle Monitor Corp., production object detection and hardware component classification were bottlenecked by heavy two-stage inference pipelines operating under strict CPU constraints in production vehicle environments. Furthermore, classifying newly manufactured hardware components required manual human annotation, which created significant data labeling backlogs as new sensor captures scaled.",
      technicalArchitecture:
        "To resolve the inference latency bottleneck, the production object detection pipeline was completely overhauled from a two-stage architecture into an optimized one-stage model. For the unlabelled hardware challenge, a self-supervised convolutional autoencoder stack was deployed utilizing masked feature prediction. The autoencoder was trained to reconstruct masked patches of input hardware images, forcing the encoder to learn robust invariant representations without human supervision.",
      engineeringChallenges:
        "Extracting high-utility features from deep convolutional layers required rigorous dimension management. A custom extraction and post-processing pipeline was engineered to pass latent bottleneck embeddings directly into a high-dimensional k-means clustering engine. Automated silhouette analysis was integrated to dynamically determine optimal cluster boundaries, ensuring high separation and intra-cluster cohesion without requiring pre-defined category counts.",
      impactAndResults:
        "The redesigned one-stage detection pipeline delivered an immediate 21x measured inference speedup on production CPU deployments, with projected scaling up to 40x on CUDA-enabled GPU accelerators. The self-supervised clustering pipeline eliminated manual annotation requirements for incoming hardware datasets, enabling automated classification and streamlined production workflows."
    }
  },

  // ==========================================
  // PROJECTS
  // ==========================================
  {
    id: "project-real-time-image-upscaling",
    slug: "real-time-image-upscaling",
    section: "project",
    cardName: "Real Time Image Upscaling",
    title: "Real Time Image Upscaling",
    role: "Systems Architect and Team Lead",
    organization: "UofT Machine Intelligence Student Team",
    location: "Toronto, ON",
    date: "Sept 2025 - Present",
    tags: [
      "C/C++",
      "CUDA",
      "TensorRT",
      "OpenGL",
      "Shared Memory",
      "Concurrency & Synchronization",
      "GPU Programming"
    ],
    metrics: [
      "Zero-Copy GPU Pipeline",
      "0 PCIe Transfer Overhead",
      "3-Stage Concurrent Architecture"
    ],
    links: [],
    resumeBullets: [
      "Architected a zero-copy GPU pipeline in C++, CUDA, TensorRT, and OpenGL for a real-time video upscaling application, retaining decoded frames entirely in VRAM to eliminate PCIe transfer overhead and maximize throughput",
      "Designed a 3 stage concurrent producer-consumer architecture using shared memory circular buffers and lock-protected synchronization primitives to enable concurrent decoding, inference, and rendering",
      "Implemented sequence-based frame synchronization for TS-Mamba model and fused CUDA preprocessing kernels, eliminating intermediate memory copies and maintaining end-to-end GPU residency throughout the pipeline"
    ],
    detailedBreakdown: {
      problemOverview:
        "High-resolution real-time video upscaling applications frequently suffer from severe frame latency and PCIe bus bottlenecks. In standard multi-library pipelines, frames are continuously copied between Host CPU system memory and GPU VRAM during video decoding, deep neural network super-resolution inference, and graphics rendering, rendering 60+ FPS real-time performance impossible.",
      technicalArchitecture:
        "Architected an end-to-end zero-copy GPU pipeline implemented in C++, CUDA, TensorRT, and OpenGL. Decoded video frames are ingested directly into GPU memory buffers and retained entirely in VRAM across the entire lifecycle. To maximize computational throughput, a 3-stage concurrent producer-consumer pipeline was engineered: Stage 1 decodes incoming video packets; Stage 2 performs super-resolution inference via TensorRT; Stage 3 renders the upscaled frames via an OpenGL shader pipeline.",
      engineeringChallenges:
        "Managing concurrency across three asynchronous GPU-accelerated stages required thread-safe shared memory circular ring buffers paired with condition variables and mutex synchronization primitives. To prevent pipeline stalls and race conditions, sequence-based frame synchronization was implemented specifically tailored for the TS-Mamba state space model. Additionally, custom fused CUDA kernels were written for on-GPU color-space conversion, normalization, and planar reformatting, preventing intermediate VRAM allocations.",
      impactAndResults:
        "Completely eliminated host-to-device and device-to-host PCIe memory copies, achieving full end-to-end GPU residency. The resulting pipeline achieves smooth, low-latency video upscaling at high framerates with zero display tearing and maximum hardware utilization."
    }
  },
  {
    id: "project-agentic-os-harness",
    slug: "operating-system-harness-for-agentic-general-intelligence",
    section: "project",
    cardName: "Operating System Harness for Agentic General Intelligence",
    title: "Operating System Harness for Agentic General Intelligence",
    role: "AI Systems Engineer",
    organization: "Capstone Project",
    location: "Toronto, ON",
    date: "Sept 2025 – Apr 2026",
    tags: [
      "Python",
      "Model Context Protocol (MCP)",
      "LLMs",
      "Agentic AI",
      "Windows APIs",
      "ChromaDB",
      "Retrieval Augmented Generation (RAG)",
      "Agent Skills"
    ],
    metrics: [
      "97.5% Task Success Rate",
      "System-Level MCP Integration",
      "Local Vector Database (ChromaDB)"
    ],
    links: [],
    resumeBullets: [
      "Developed a Windows 10/11 AI assistant software stack, enabling system level LLM execution to automate requests related to file systems, agentic browsing, documents, email, and system settings",
      "Engineered middleware infrastructure using Model Context Protocol (MCP) servers to provide secure, real-time access to system-level Windows APIs and local vector databases (ChromaDB)",
      "Implemented a testing and debugging framework for AI agents and their agent skills/MCP servers, creating single and multi-task tests, improving tool appropriateness and task success rate to 97.5% through iterative testing and fine tuning"
    ],
    detailedBreakdown: null
  },
  {
    id: "project-vehicle-detection-model",
    slug: "vehicle-and-road-infrastructure-detection-model",
    section: "project",
    cardName: "Vehicle and Road Infrastructure Detection Model",
    title: "Vehicle and Road Infrastructure Detection Model",
    role: "Deep Learning Engineer",
    organization: "Deep Learning",
    location: "Toronto, ON",
    date: "June 2023 - Aug 2023",
    tags: [
      "Python",
      "PyTorch",
      "TensorFlow",
      "Object Detection",
      "Computer Vision",
      "Data Science",
      "Transfer Learning"
    ],
    metrics: [
      "+58% Larger F1 Score",
      "17 Object Detection Classes",
      "YOLOv8 Transfer Learning"
    ],
    links: [],
    resumeBullets: [
      "Developed a multi-class object detection model using PyTorch/TensorFlow that classifies and creates bounding boxes around 17 different vehicle and road infrastructure categories",
      "Implemented transfer learning from YOLOv8 image detection model alongside ADAM optimizer with adaptive learning rate, batch normalization, and regularization to achieve a 58% larger F1 score than the baseline OpenCV vehicle detection model",
      "Optimized convergence through iterative hyperparameter tuning that minimizes training, validation, and testing loss"
    ],
    detailedBreakdown: null
  },
  {
    id: "project-gis-for-students",
    slug: "gis-for-students",
    section: "project",
    cardName: "GIS for Students",
    title: "GIS for students",
    role: "Software Engineer",
    organization: "Software Communication and Design",
    location: "Toronto, ON",
    date: "Jan 2023 - Apr 2023",
    tags: [
      "C++",
      "STL",
      "OpenStreetMap",
      "GTK",
      "EZGL",
      "Dijkstra's & A*",
      "2-Opt Optimization"
    ],
    metrics: [
      "A* & 2-Opt Optimization",
      "OpenStreetMap Integration",
      "Interactive GTK/EZGL GUI"
    ],
    links: [],
    resumeBullets: [
      "Collaborated in a team of three to build an interactive C++ geographic information system supporting map exploration, location search, and route planning using OpenStreetMap data",
      "Implemented Dijkstra’s, A*, greedy, and 2-opt algorithms for point-to-point and multi-destination route optimization",
      "Developed an interactive GTK/EZGL interface and used C++ STL data structures to support efficient geographic lookup, rendering, zooming, and navigation"
    ],
    detailedBreakdown: null
  },
  {
    id: "project-bare-metal-de1-soc",
    slug: "bare-metal-hardware-software-interface-de1-soc",
    section: "project",
    cardName: "Bare-Metal Hardware-Software Interface (DE1-SoC)",
    title: "Bare-Metal Hardware-Software Interface (DE1-SoC)",
    role: "Embedded Systems Engineer",
    organization: "Computer Organization",
    location: "Toronto, ON",
    date: "Sept 2023 - Dec 2023",
    tags: [
      "C",
      "ARM Assembly",
      "Memory-Mapped I/O",
      "Bare-Metal",
      "Device Drivers",
      "DE1-SoC",
      "VGA Pipeline"
    ],
    metrics: [
      "Bare-Metal ARM Execution",
      "Double-Buffered Graphics",
      "Zero Display Tearing"
    ],
    links: [],
    resumeBullets: [
      "Developed bare-metal embedded software in C on ARM-based DE1-SoC hardware without operating system support",
      "Implemented memory-mapped device drivers for VGA, push buttons, switches, timers, and input peripherals using direct register manipulation",
      "Designed double-buffered graphics pipeline across SDRAM and on-chip memory to reduce rendering latency and eliminate display tearing",
      "Optimized memory accesses and synchronization with hardware status registers to satisfy strict embedded execution constraints"
    ],
    detailedBreakdown: null
  },

  // ==========================================
  // EXTRA CURRICULARS
  // ==========================================
  {
    id: "extracurricular-mist",
    slug: "uoft-machine-intelligence-student-team",
    section: "extracurricular",
    cardName: "UofT Machine Intelligence Student Team",
    title: "UofT Machine Intelligence Student Team",
    role: "Systems Architect & Team Lead",
    organization: "University of Toronto",
    location: "Toronto, ON",
    date: "Sept 2025 - Present",
    tags: [
      "C/C++",
      "CUDA",
      "AI Systems Architecture",
      "High-Performance Computing"
    ],
    metrics: [
      "Team Leadership",
      "High-Performance GPU Systems"
    ],
    links: [],
    resumeBullets: [
      "Performed research with team on academic papers about the latest image upscaling models and their real-world performance, such as Real-ESRGAN, SWINIR, and Hybrid Attention Transformers.",
      "Created a crash course on Operating Systems and Systems Programming for the team to teach them about processes, threads, concurrency, and concepts related to the application we planned",
      "Architected a zero-copy GPU inference architecture and a concurrent multi-stage producer-consumer pipeline for high-performance real-time video upscaling",
      "Leading a team of student engineers to develop and implement the pipeline for the club's real-time video upscaling application"
    ],
    relatedProjectSlugs: ["real-time-image-upscaling"],
    detailedBreakdown: null
  },
  {
    id: "extracurricular-ece-academic-director",
    slug: "ece-academic-director",
    section: "extracurricular",
    cardName: "ECE Academic Director",
    title: "ECE Academic Director",
    role: "Academic Director",
    organization: "University of Toronto ECE Club",
    location: "Toronto, ON",
    date: "Sept 2022 - April 2023",
    tags: [
      "Academic Leadership",
      "Student Advocacy",
      "Event Coordination",
      "Department Relations"
    ],
    metrics: [
      "4 Cohorts Managed",
      "Magellan 101 Organizer"
    ],
    links: [],
    resumeBullets: [
      "Managed all 4 years of ECE Class Representatives and resolved weekly course and curriculum issues with departmental leadership",
      "Organized and hosted Magellan 101 information sessions to guide upper-year course selections for 2nd year students"
    ],
    detailedBreakdown: null
  },
  {
    id: "extracurricular-ece-class-rep",
    slug: "3rd-and-4th-year-ece-class-representative",
    section: "extracurricular",
    cardName: "3rd & 4th Year ECE Class Representative",
    title: "3rd & 4th Year ECE Class Representative",
    role: "Class Representative & Faculty Council Member",
    organization: "University of Toronto Faculty of Applied Science & Engineering",
    location: "Toronto, ON",
    date: "Sept 2023 - April 2026",
    tags: [
      "Student Advocacy",
      "Faculty Council",
      "Academic Governance",
      "Policy & Curriculum"
    ],
    metrics: [
      "Student Body Representative",
      "Faculty Council Voting Member"
    ],
    links: [],
    resumeBullets: [
      "Advocated for the student body by actively communicating course and examination feedback to professors and the ECE Chair",
      "Participated as a voting member of Faculty Council to represent ECE student interests in academic policy and curriculum decisions"
    ],
    detailedBreakdown: null
  },
  {
    id: "extracurricular-frosh-leedur",
    slug: "frosh-leedur",
    section: "extracurricular",
    cardName: "F!rosh Leedur",
    title: "F!rosh Leedur",
    role: "Orientation Leader & Mentor",
    organization: "University of Toronto Engineering Society",
    location: "Toronto, ON",
    date: "June 2022 - Sept 2022",
    isClickable: true,
    tags: [
      "Mentorship",
      "Student Leadership",
      "Orientation",
      "Skule Spirit"
    ],
    metrics: [
      "First-Year Mentorship",
      "Orientation Team Leader"
    ],
    links: [],
    resumeBullets: [
      "Participated as team Sigma's Fake F!rosh Leedur during Frosh Week 2023 to welcome incoming first-year students",
      "Mentored incoming engineering first-year students to ease their academic transition and cultivate strong community involvement",
      "Led orientation activities to build student engagement and peer connections across disciplines"
    ],
    detailedBreakdown: null
  },
  {
    id: "extracurricular-skule-badminton",
    slug: null,
    section: "extracurricular",
    cardName: "Skule Badminton Club",
    title: "Skule Badminton Club",
    role: "Member",
    organization: "University of Toronto Engineering Society",
    location: "Toronto, ON",
    date: "Sept 2021 - April 2022",
    isClickable: false,
    tags: [
      "Athletics",
      "Community",
      "Campus Recreation"
    ],
    metrics: [],
    links: [],
    resumeBullets: [],
    detailedBreakdown: null
  }
];

/**
 * Helper to fetch item by slug
 */
export function getPortfolioItemBySlug(slug) {
  return portfolioData.find((item) => item.slug === slug);
}

/**
 * Helper to filter by section ('experience', 'project', 'extracurricular')
 */
export function getPortfolioItemsBySection(section) {
  return portfolioData.filter((item) => item.section === section);
}
