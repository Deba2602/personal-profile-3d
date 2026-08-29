export const profile = {
  name: "Debapratim Deka",
  title: "Data Scientist & AI Engineer",
  location: "Bangalore, India",
  email: "debapratimdeka2001@gmail.com",
  phone: "+91 8638454246",
  links: {
    LinkedIn: "https://www.linkedin.com/in/debapratim-deka/",
    GitHub: "https://github.com/Deba2602",
  },
  summary:
    "Data Scientist & AI Engineer with 4+ years of experience architecting and productionizing ML, GenAI, LLM, and Agentic AI solutions across enterprise use cases — specializing in RAG, multi-agent systems, NL-to-SQL, and AI automation.",
};

export const targetRoles = [
  "Data Scientist",
  "Associate Lead Data Scientist",
  "ML Engineer",
  "AI Engineer",
  "Generative AI Engineer",
  "Agentic AI Engineer",
  "LLM Engineer",
  "Applied AI / ML",
];

export const experiences = [
  {
    company: "Sigmoid Analytics",
    location: "Bangalore",
    role: "Associate Lead Data Scientist",
    duration: "Jan 2026 – Present",
    description:
      "Leading AI solution architecture, technical development, and end-to-end delivery of enterprise AI platforms for a US consumer health company.",
    bullets: [
      "Architected and led a 3-member team to productionize an enterprise AI-powered Data Sufficiency platform, owning solution architecture, technical development, stakeholder alignment, and end-to-end delivery across UC Hydration, AI Summary, Entity Resolution, and Scoring services.",
      "Designed and developed an agentic AI framework to extract and enrich enterprise data context including metadata, lineage, KPIs, business definitions, relationships, dimensions, and granularity; built a data-readiness scoring engine mapping business use-case requirements to available data.",
      "Productionized the AI platform using cloud-native engineering practices with containerized services on Kubernetes/AKS, GitHub-based CI/CD, automated deployment, scalability, monitoring, and observability.",
    ],
  },
  {
    company: "Sigmoid Analytics",
    location: "Bangalore",
    role: "Senior Data Scientist",
    duration: "Jan 2025 – Dec 2025",
    description:
      "Led high-impact GenAI initiatives including scientific claims strategy, multi-agent analytics, and AI code generation for consumer health and enterprise clients.",
    bullets: [
      "Curated an Ingredient+Literature Knowledge Base by mining scientific databases and competitor systems, reducing manual sourcing effort by 40%; developed hybrid RAG & CAG with Claims Bracketing and Ingredient Equivalency methodologies, driving a 20% revenue surge.",
      "Architected a multi-agent GenAI analytics platform across 50+ enterprise tables spanning Sales, Finance, and Commercial domains with NL-to-SQL, query validation, KPI extraction, SQL self-correction, dynamic visualization, and domain-aware memory; reduced analysis turnaround by >99% and achieved ~87% chatbot accuracy.",
      "Architected an agentic AI platform converting Figma screenshots and multi-page PDFs into production-ready React TypeScript applications, leveraging LLM routing, UI rule books, multi-page context, and critic–build validation loops; achieved 93% average visual similarity.",
    ],
  },
  {
    company: "Sigmoid Analytics",
    location: "Bangalore",
    role: "Data Scientist",
    duration: "Jan 2024 – Dec 2024",
    description:
      "Worked across GenAI, attribution, and forecasting-oriented product analytics for enterprise clients in consumer health, alcoholic beverages, and food retail.",
    bullets: [
      "Engineered a GenAI pipeline integrating LLM sentiment analysis and social listening, processing 10M+ reviews and accelerating claim generation by 30%; built a claim recommendation assistant using fine-tuned T5, BART, and GPT, achieving 85% accuracy.",
      "Implemented a constraint-based regression model identifying sales depletion drivers across operations, macro trends, and weather data, achieving 89% accuracy across 50 US states.",
      "Developed a GenAI-driven forecasting diagnostic solution using LangChain, LangGraph, ReAct, and FastAPI across 100K+ SKUs, improving diagnostic speed by 65% and accelerating reporting by 60%.",
    ],
  },
  {
    company: "Sigmoid Analytics",
    location: "Bangalore",
    role: "Associate Data Scientist",
    duration: "Jul 2022 – Dec 2023",
    description:
      "Solved large-scale demand forecasting and optimization challenges with strong foundations in statistical modeling, experimentation, and deep feature engineering.",
    bullets: [
      "Constructed scalable forecasting pipelines for 100K+ SKUs using Fourier transforms, Y-lags, and segmentation, boosting performance by 10.6% and achieving 82% system accuracy.",
      "Optimized models using Optuna, Bayesian optimization, and volatility-based diagnostics; developed trend indicators in Databricks pipelines, boosting precision by 40% across high-variance segments.",
      "Developed demand-type-specific models with classification routing and VAR-based pipelines, leveraging inter-SKU dependencies and Granger causality for lag optimization.",
      "Devised a hybrid QLinEx loss function with asymmetric error penalization for constrained forecasting, improving regression fidelity by 15% across volatile product lines.",
    ],
  },
];

export const signatureWork = [
  {
    tag: "Agentic AI & AI Engineering",
    title: "Enterprise AI Platforms",
    description:
      "I architect agentic AI systems that combine multi-agent orchestration, cloud-native infrastructure, and business logic into production-grade platforms.",
    bullets: [
      "AI-powered Data Sufficiency platform with Kubernetes/AKS",
      "Figma-to-React code generation via LLM routing & critic loops",
      "Multi-agent GenAI analytics with NL-to-SQL & self-correction",
    ],
  },
  {
    tag: "LLM + Knowledge Systems",
    title: "Grounded GenAI for Consumer Health",
    description:
      "I combine retrieval, structured evidence, and domain knowledge to move LLM outputs from plausible language to defensible business recommendations.",
    bullets: [
      "Hybrid RAG & CAG architecture with knowledge graph support",
      "Claims interpretation backed by scientific literature",
      "Fine-tuned T5, BART, GPT for domain-specific generation",
    ],
  },
  {
    tag: "Forecasting Intelligence",
    title: "Demand Engines at SKU Scale",
    description:
      "My forecasting work treats demand modeling as a dynamic signal-processing problem where temporal behavior, uncertainty, and business constraints must be modeled together.",
    bullets: [
      "Real-time forecasting across 100K+ SKUs",
      "Custom loss design for constrained scenarios",
      "Feature-rich pipelines with measurable uplift in accuracy",
    ],
  },
  {
    tag: "Decision Analytics",
    title: "Revenue-Linked Business Models",
    description:
      "I build models that do more than score outcomes. They explain levers, expose tradeoffs, and connect prediction quality to commercial impact.",
    bullets: [
      "Pricing, promotion, and media attribution across 50 US states",
      "Constraint-based regression for real-world operations",
      "Interactive outputs for leadership and stakeholder teams",
    ],
  },
];

export const skillGroups = [
  {
    title: "AI / GenAI / LLM",
    description:
      "The generative AI layer powering intelligent applications, agent orchestration, and knowledge-grounded systems.",
    items: [
      "Generative AI",
      "Agentic AI",
      "Multi-Agent Systems",
      "LLMs",
      "RAG",
      "CAG",
      "Prompt Engineering",
      "NL-to-SQL",
      "LLM Orchestration",
      "AI Code Generation",
      "LLM Evaluation",
      "NLP",
      "T5",
      "BART",
      "GPT",
      "Azure OpenAI",
      "LangChain",
      "LangGraph",
      "ReAct",
      "Vector Databases",
      "Graph Databases",
      "Knowledge Graphs",
    ],
  },
  {
    title: "Machine Learning",
    description:
      "The modeling layer spanning classical methods, deep learning, time series, and statistical inference.",
    items: [
      "Supervised & Unsupervised Learning",
      "Deep Learning",
      "Time Series Forecasting",
      "Regression",
      "Classification",
      "Clustering",
      "Feature Engineering",
      "Hyperparameter Optimization",
      "Bayesian Optimization",
      "Statistical Modeling",
      "Causal Analysis",
      "Model Evaluation",
    ],
  },
  {
    title: "AI Engineering / MLOps",
    description:
      "The production infrastructure layer for reliable AI deployment, orchestration, and observability.",
    items: [
      "FastAPI",
      "MLflow",
      "Kubernetes",
      "AKS",
      "Docker",
      "GitHub",
      "GitHub Actions",
      "CI/CD",
      "Helm",
      "Argo CD",
      "Monitoring",
      "Observability",
    ],
  },
  {
    title: "Data Engineering / Cloud",
    description:
      "The data and cloud infrastructure layer for scalable pipelines, governance, and storage.",
    items: [
      "Python",
      "PySpark",
      "SQL",
      "MySQL",
      "PostgreSQL",
      "Snowflake",
      "Databricks",
      "Azure",
      "AWS",
      "Data Pipelines",
      "Metadata Management",
      "Data Lineage",
      "Data Governance",
    ],
  },
  {
    title: "Libraries & Frameworks",
    description:
      "The foundational tools and packages powering analysis, modeling, and visualization workflows.",
    items: [
      "NumPy",
      "Pandas",
      "Scikit-learn",
      "Matplotlib",
      "Seaborn",
      "Plotly",
      "Statsmodels",
      "NLTK",
      "TextBlob",
      "spaCy",
      "TensorFlow",
      "Keras",
    ],
  },
];

export const metrics = [
  { value: "20%", label: "Revenue surge from knowledge-guided claims intelligence" },
  { value: "87%", label: "Chatbot accuracy on multi-agent GenAI analytics platform" },
  { value: "93%", label: "Visual similarity in Figma-to-React AI code generation" },
  { value: "10M+", label: "Reviews processed through GenAI and retrieval pipelines" },
  { value: "100K+", label: "SKUs analyzed across demand forecasting and diagnostics" },
  { value: ">99%", label: "Reduction in analysis turnaround via NL-to-SQL agents" },
];

export const education = {
  school: "National Institute of Technology Silchar",
  degree: "B.Tech, Electrical Engineering",
  duration: "Jul 2018 – Jul 2022",
  score: "CGPA: 9.49",
};

export const awards = {
  title: "Three Consecutive SPOT Awards",
  duration: "Q1 2023 – Q3 2024",
  description:
    "Recognized for excellence in scalable forecasting, GenAI-powered assistants, and delivering innovative, high-impact data science solutions.",
};
