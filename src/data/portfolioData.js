export const personalInfo = {
  name: "Shyamaprasad M. S.",
  role: "Data Engineer // GCP & PySpark",
  company: "Tata Consultancy Services (TCS)",
  client: "American Express Client — GenAI Project",
  location: "Bengaluru, India",
  email: "sshyamaprasadms@gmail.com",
  phone: "+91 6238531297",
  linkedin: "https://www.linkedin.com/in/shyamaprasad-ms-309950233",
  github: "https://github.com/Shyam107",
  summary:
    "Data Engineer / Python Developer with professional experience at Tata Consultancy Services, supporting data engineering work for an American Express client GenAI project. Hands-on experience with Python, SQL, PySpark, Google Cloud Platform, BigQuery, Dataproc, Cloud Storage, and Apache Airflow. Experienced in developing and maintaining data pipelines, building and consolidating Airflow DAGs, writing unit tests with Pytest and mocks, improving code coverage, and supporting data quality and production workflows. Strong academic record with an MCA (9.44 CGPA; 5th Rank, Kerala Technical University) and BCA (4th Rank, Kerala University).",
  metrics: [
    { label: "Unit Test Coverage (cs2dr_data_pull.py)", value: "98.5%", icon: "ShieldCheck", color: "emerald" },
    { label: "MCA CGPA • 5th Rank (KTU)", value: "9.44/10", icon: "Award", color: "cyan" },
    { label: "BCA Score • 4th Rank (KU)", value: "84.6%", icon: "Medal", color: "blue" },
    { label: "Core Domains (Cloud, PySpark, DAGs)", value: "6+", icon: "Layers", color: "purple" }
  ]
};

export const headlineRoles = [
  "Data Engineer",
  "Python Developer",
  "PySpark Pipeline Engineer",
  "Google Cloud (BigQuery, Dataproc, GCS)",
  "Apache Airflow DAG Architect",
  "Pytest Quality Engineer (98.5% Coverage)"
];

export const skillsData = [
  // Programming
  { name: "Python", category: "Programming", icon: "Code2", badge: "Core Primary", context: "Data engineering pipelines, Pytest suites & backend ML apps at TCS" },
  { name: "SQL", category: "Programming", icon: "Database", badge: "Core Primary", context: "BigQuery queries, configuration table updates & data validation" },
  { name: "PySpark", category: "Programming", icon: "Flame", badge: "Big Data", context: "Distributed data ingestion, transformation & validation workflows" },
  { name: "Java", category: "Programming", icon: "Coffee", badge: "OOP", context: "Object-oriented programming & academic software engineering" },
  { name: "C", category: "Programming", icon: "Terminal", badge: "Systems", context: "Foundational algorithms & procedural programming" },
  { name: "C++", category: "Programming", icon: "Cpu", badge: "OOP", context: "Data structures & object-oriented systems programming" },

  // Cloud & Data
  { name: "Google Cloud Platform (GCP)", category: "Cloud & Data", icon: "Cloud", badge: "Cloud Infrastructure", context: "Enterprise cloud ecosystem for American Express GenAI project" },
  { name: "BigQuery", category: "Cloud & Data", icon: "Server", badge: "Cloud Warehouse", context: "Analytical SQL queries, config table updates & dataset management" },
  { name: "Google Cloud Storage (GCS)", category: "Cloud & Data", icon: "HardDrive", badge: "Data Lake", context: "Staging and storage layer for pipeline ingestion & artifacts" },
  { name: "Dataproc", category: "Cloud & Data", icon: "Network", badge: "Managed Spark", context: "Running scalable PySpark data-processing workloads on GCP" },
  { name: "Pub/Sub", category: "Cloud & Data", icon: "Radio", badge: "Messaging", context: "Event-driven stream ingestion & asynchronous workflow triggers" },

  // Data Engineering
  { name: "Data Ingestion", category: "Data Engineering", icon: "DownloadCloud", badge: "Pipeline Stage", context: "Automated ingestion workflows including cs2dr_data_pull.py" },
  { name: "ETL / Data Pipelines", category: "Data Engineering", icon: "GitMerge", badge: "Architecture", context: "End-to-end extraction, transformation & loading for GenAI workflows" },
  { name: "Data Transformation", category: "Data Engineering", icon: "Shuffle", badge: "Processing", context: "PySpark & Python variance logic for CECL & IFRS9 modules" },
  { name: "Data Validation", category: "Data Engineering", icon: "ShieldCheck", badge: "Quality Assurance", context: "Availability checks, schema verification & production data quality" },
  { name: "SQL Development", category: "Data Engineering", icon: "Table2", badge: "Query Optimization", context: "Writing & maintaining production SQL scripts in BigQuery" },

  // Orchestration
  { name: "Apache Airflow", category: "Orchestration", icon: "Wind", badge: "Workflow Engine", context: "Authoring, consolidating & monitoring production DAG workflows" },
  { name: "DAG Development", category: "Orchestration", icon: "GitBranch", badge: "Configurable DAGs", context: "Consolidated US & international CCAR availability check DAGs" },
  { name: "Scheduling", category: "Orchestration", icon: "Clock", badge: "Automation", context: "Automated interval & SLA-driven pipeline execution" },
  { name: "Task Dependencies", category: "Orchestration", icon: "Share2", badge: "Graph Logic", context: "Designing upstream/downstream task topologies without duplication" },
  { name: "Workflow Monitoring", category: "Orchestration", icon: "Activity", badge: "Production Ops", context: "DAG debugging, log analysis & production incident resolution" },

  // Testing & Quality
  { name: "Pytest", category: "Testing & Quality", icon: "CheckCircle2", badge: "98.5% Coverage", context: "Unit test framework used to achieve 98.5% coverage on cs2dr_data_pull.py" },
  { name: "Unit Testing", category: "Testing & Quality", icon: "TestTube2", badge: "Reliability", context: "Testing CECL, IFRS9 variance modules & ingestion components" },
  { name: "Mocking", category: "Testing & Quality", icon: "CopyCheck", badge: "Test Isolation", context: "Simulating external cloud & database dependencies during testing" },
  { name: "Patching", category: "Testing & Quality", icon: "Wrench", badge: "unittest.mock", context: "Dynamic runtime object replacement for isolated pipeline unit tests" },
  { name: "Test Coverage", category: "Testing & Quality", icon: "Percent", badge: "98.5% Milestone", context: "Measurable code quality enhancement across Python modules" },
  { name: "Debugging", category: "Testing & Quality", icon: "Bug", badge: "Troubleshooting", context: "Root-cause analysis across Airflow DAGs, PySpark jobs & SQL" },
  { name: "Code Refactoring", category: "Testing & Quality", icon: "Sparkles", badge: "Clean Code", context: "Eliminating duplicated DAG logic & raising clean Pull Requests" },

  // Web & Database
  { name: "HTML", category: "Web & Database", icon: "Layout", badge: "Frontend", context: "Structuring user interfaces for ML & management web apps" },
  { name: "CSS", category: "Web & Database", icon: "Palette", badge: "Styling", context: "Responsive layouts & styling for academic web portals" },
  { name: "MySQL", category: "Web & Database", icon: "Database", badge: "Relational DB", context: "Relational schema design & query management for web applications" }
];

export const experienceData = [
  {
    tag: "Engineering",
    badgeColor: "cyan",
    icon: "Cpu",
    title: "American Express Client — GenAI Project Engineering",
    text: "Working on a GenAI project for the American Express client, contributing to data engineering and pipeline-related development and support."
  },
  {
    tag: "Engineering",
    badgeColor: "blue",
    icon: "Flame",
    title: "Python & PySpark Data Processing Pipelines",
    text: "Developed and maintained Python/PySpark data-processing components and workflows involving data ingestion, transformation, and validation."
  },
  {
    tag: "Testing",
    badgeColor: "emerald",
    icon: "ShieldCheck",
    title: "98.5% Unit Test Coverage on cs2dr_data_pull.py",
    text: "Created unit tests using Pytest, mocks, and patching; improved test coverage of cs2dr_data_pull.py to 98.5%."
  },
  {
    tag: "Testing",
    badgeColor: "emerald",
    icon: "GitPullRequest",
    title: "CECL & IFRS9 Variance Module Testing",
    text: "Added and maintained tests for CECL and IFRS9 variance modules and raised pull requests for code changes."
  },
  {
    tag: "Orchestration",
    badgeColor: "purple",
    icon: "GitMerge",
    title: "Configurable CCAR Availability Check DAG Consolidation",
    text: "Consolidated US and international CCAR availability check DAGs into a single configurable DAG to reduce duplicated workflow logic."
  },
  {
    tag: "Cloud",
    badgeColor: "amber",
    icon: "Cloud",
    title: "Google Cloud Platform, BigQuery & DAG Operations",
    text: "Worked with Google Cloud services and BigQuery, including SQL queries and updates to data/configuration tables; supported DAG monitoring and debugging."
  }
];

export const pipelineNodes = [
  {
    id: 0,
    stage: "STAGE 01",
    badge: "STAGE 01 // INGESTION & CLOUD STORAGE",
    icon: "DownloadCloud",
    name: "Data Ingestion & GCS",
    subtext: "cs2dr_data_pull.py • Pub/Sub",
    tech: "Python • GCS • Pub/Sub • cs2dr_data_pull.py",
    title: "Data Ingestion & cs2dr_data_pull.py Workflow",
    desc: "Developed and maintained Python/PySpark data-ingestion components for the American Express GenAI project. Created comprehensive unit tests using Pytest, mocks, and patching—improving the test coverage of cs2dr_data_pull.py to 98.5%.",
    line1: '> task_id: "cs2dr_data_pull_ingestion"',
    line2: '> pytest_coverage: 98.5% (Mocks & Patching)',
    line3: '> target_env: "GCP_GenAI_AmEx_Pipeline"',
    initialStatus: "Ready / Validated"
  },
  {
    id: 1,
    stage: "STAGE 02",
    badge: "STAGE 02 // PYSPARK & DATAPROC ETL",
    icon: "Flame",
    name: "PySpark / Dataproc ETL",
    subtext: "CECL & IFRS9 Variance",
    tech: "PySpark • Dataproc • Python • Data Transformation",
    title: "Distributed Transformation & Variance Modules",
    desc: "Engineered scalable Python and PySpark transformation workflows executing on GCP Dataproc. Added and maintained unit tests for CECL and IFRS9 variance modules and raised pull requests for production code changes.",
    line1: '> spark_job: "cecl_ifrs9_variance_transform.py"',
    line2: '> cluster: "gcp-dataproc-etl-worker"',
    line3: '> validation_status: "SCHEMA_AND_VARIANCE_VERIFIED"',
    initialStatus: "Click to inspect"
  },
  {
    id: 2,
    stage: "STAGE 03",
    badge: "STAGE 03 // PYTEST QUALITY GATE",
    icon: "CheckCircle2",
    name: "Pytest Validation Gate",
    subtext: "98.5% Coverage • Mocks",
    tech: "Pytest • Unit Testing • Mocking • Patching",
    title: "Automated Unit Testing & 98.5% Coverage Gate",
    desc: "Implemented isolated unit test suites utilizing Pytest, mocking, and patching so cloud and database calls are deterministically verified before deployment, elevating cs2dr_data_pull.py coverage to 98.5%.",
    line1: '> cmd: "pytest --cov=cs2dr_data_pull tests/"',
    line2: '> result: "PASSED | Coverage: 98.5%"',
    line3: '> modules: ["cs2dr_data_pull", "CECL", "IFRS9"]',
    initialStatus: "98.5% Unit Tested"
  },
  {
    id: 3,
    stage: "STAGE 04",
    badge: "STAGE 04 // AIRFLOW & BIGQUERY WAREHOUSE",
    icon: "Database",
    name: "BigQuery & Consolidated DAG",
    subtext: "US & Intl CCAR DAG",
    tech: "Apache Airflow • BigQuery • SQL • Config Tables",
    title: "Consolidated CCAR DAG & BigQuery Analytics",
    desc: "Consolidated separate US and international CCAR availability check DAGs into a single configurable Apache Airflow DAG to eliminate duplicated workflow logic. Executed BigQuery SQL queries and configuration table updates.",
    line1: '> dag_id: "ccar_consolidated_availability_dag"',
    line2: '> regions: ["US", "INTERNATIONAL"] # Configurable',
    line3: '> sink: "bigquery://amex_genai.config_and_data_tables"',
    initialStatus: "Production Active"
  }
];

export const projectsData = [
  {
    id: 0,
    title: "Auto Claims Evaluator – Damage Score Analysis using ML and AI",
    category: "ML & AI",
    icon: "Car",
    accent: "cyan",
    stack: ["Python", "Machine Learning", "AI", "HTML", "CSS"],
    description: "Built an academic web application using Python for the backend and HTML/CSS for the frontend, applying machine learning and AI concepts to support vehicle-damage assessment in auto-claims evaluation.",
    highlights: [
      "Designed a Python backend integrating machine learning and AI concepts to evaluate vehicle damage severity.",
      "Built an intuitive HTML/CSS frontend interface for uploading and reviewing auto-claim damage scores.",
      "Streamlined the decision-support workflow for vehicle insurance claim assessment."
    ]
  },
  {
    id: 1,
    title: "Online Payment Fraud Detection Using Machine Learning",
    category: "ML & AI",
    icon: "ShieldAlert",
    accent: "emerald",
    stack: ["Python", "Machine Learning", "HTML", "CSS"],
    description: "Developed an academic project using Python and HTML/CSS to explore machine-learning-based identification of potentially fraudulent online payment transactions.",
    highlights: [
      "Implemented classification and anomaly-detection workflows in Python to flag suspicious online payment patterns.",
      "Created a clean HTML/CSS web dashboard for transaction input and fraud risk visualization.",
      "Focused on reducing false positives while identifying high-risk digital payment anomalies."
    ]
  },
  {
    id: 2,
    title: "Agroculture",
    category: "Web & Workflow",
    icon: "Sprout",
    accent: "amber",
    stack: ["Web Application", "HTML", "CSS", "Database"],
    description: "Created a web application intended to help agricultural officers and users access information about crops, fertilizers, irrigation, and pesticides.",
    highlights: [
      "Centralized agricultural knowledge base covering crop lifecycle, fertilizers, irrigation schedules, and pesticide usage.",
      "Designed role-friendly views for both agricultural officers and farmers/users.",
      "Structured database-backed records for rapid retrieval of seasonal farming guidance."
    ]
  },
  {
    id: 3,
    title: "Health Office Management System",
    category: "Web & Workflow",
    icon: "HeartPulse",
    accent: "blue",
    stack: ["Web Application", "Workflow Automation", "HTML", "CSS"],
    description: "Developed a web-based application to automate selected services and workflows in a health office.",
    highlights: [
      "Digitized routine administrative workflows and service requests inside a public/local health office.",
      "Reduced manual paperwork by providing structured web forms and status tracking.",
      "Engineered with clean HTML/CSS interfaces for staff usability and service efficiency."
    ]
  }
];

export const educationData = [
  {
    degree: "Master of Computer Applications (MCA)",
    period: "2022 – 2024",
    institution: "Lourdes Matha College of Science and Technology, Kuttichal",
    rank: "5th Rank • Kerala Technical University (KTU)",
    score: "9.44 / 10",
    scoreType: "Cumulative GPA",
    progress: 94.4,
    color: "cyan"
  },
  {
    degree: "Bachelor of Computer Applications (BCA)",
    period: "2019 – 2022",
    institution: "Christ Nagar College, Maranalloor",
    rank: "4th Rank • Kerala University (KU)",
    score: "84.6%",
    scoreType: "Aggregate Score",
    progress: 84.6,
    color: "blue"
  }
];

export const certificationsData = [
  {
    title: "NPTEL SWAYAM – Internet of Things",
    score: "85%",
    issuer: "NPTEL SWAYAM",
    description: "Certified in IoT architecture, sensors, and connected systems."
  },
  {
    title: "NPTEL SWAYAM – Cloud Computing",
    score: "65%",
    issuer: "NPTEL SWAYAM",
    description: "Foundations of distributed cloud infrastructure and virtualization."
  },
  {
    title: "Python Programming Workshop",
    score: "Completed",
    issuer: "Technical Workshop",
    description: "Hands-on workshop participation in Python programming."
  }
];

export const publicationsData = [
  {
    title: "Artificial Intelligence in Agriculture",
    subtitle: "International Conference / Journal Certificate",
    icon: "FileCheck2"
  },
  {
    title: "Artificial Intelligence in the Medical Field",
    subtitle: "International Conference / Journal Certificate",
    icon: "FileCheck2"
  },
  {
    title: "Disaster Management System using IoT",
    subtitle: "International Conference / Journal Certificate",
    icon: "FileCheck2"
  }
];

export const leadershipData = [
  {
    role: "Elected Sports Secretary & MCA Representative",
    badge: "College Union • 2023",
    institution: "Lourdes Matha College of Science and Technology",
    description: "Represented MCA students and coordinated campus-wide athletics programs and sports tournaments."
  },
  {
    role: "Student Convener — MCA Fest",
    badge: "Versismo 2K23",
    institution: "Department of Computer Applications",
    description: "Directed planning, student committees, and execution for the departmental technical & cultural fest Versismo 2K23."
  }
];

