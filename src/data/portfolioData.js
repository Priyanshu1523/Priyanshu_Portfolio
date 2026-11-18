export const PERSONAL_INFO = {
  name: "Priyanshu Chauhan",
  title: "Software Developer | Full Stack & ERP Developer",
  location: "Gujarat, India",
  email: "chauhanpriyanshu011@gmail.com",
  linkedin: "https://www.linkedin.com/in/priyanshu-chauhan-54110a227/",
  github: "https://github.com/priyanshu-chauhan",
  availability: "Available for Freelance Projects & Full-Time Opportunities",
  tagline: "Building Digital Experiences. Engineering Smarter Businesses.",
  bio: "I build scalable web applications, intelligent business solutions and custom ERP systems that turn complex ideas into practical digital products.",
  aboutDetailed: [
    "I'm Priyanshu Chauhan, a Software Developer specializing in full-stack development and ERP solutions.",
    "I work across modern web technologies, business automation and database-driven applications. My experience includes developing responsive web applications, integrating REST APIs, implementing ERP solutions and building custom business workflows.",
    "I enjoy understanding real business requirements and converting them into reliable, scalable digital solutions."
  ],
  stats: [
    { label: "Years of Engineering Experience", value: "3+" },
    { label: "Enterprise & Web Projects", value: "18+" },
    { label: "Core Technologies Mastered", value: "15+" },
    { label: "Client & System Reliability", value: "99.9%" }
  ]
};

export const SERVICES = [
  {
    id: "01",
    title: "FULL-STACK DEVELOPMENT",
    subtitle: "High-performance web applications with seamless UX and rock-solid architecture.",
    tags: ["React.js", "Node.js", "Express.js", "REST APIs", "Modern Database Architecture"],
    description: "Architecting responsive, performant digital platforms from the ground up. Combining clean frontend component architecture with robust backend systems to deliver intuitive user interfaces backed by scalable server engines.",
    deliverables: [
      "Responsive web applications",
      "React.js single-page applications",
      "Node.js and Express.js backend services",
      "RESTful & GraphQL API development",
      "Database-driven web platforms",
      "State management & reactive data flows"
    ],
    accent: "#D6C29A"
  },
  {
    id: "02",
    title: "ERP IMPLEMENTATION",
    subtitle: "Tailored Odoo & ERPNext systems designed to power enterprise business operations.",
    tags: ["Odoo", "ERPNext", "Frappe", "Custom Modules", "Business Workflows"],
    description: "End-to-end ERP engineering that centralizes business logic, reduces operational overhead, and drives organizational efficiency across all corporate departments.",
    deliverables: [
      "Odoo implementation & customization",
      "ERPNext / Frappe framework solutions",
      "Custom business modules & custom fields",
      "Automated business workflow pipelines",
      "Dynamic reports and custom QWeb/print formats",
      "Sales, Purchase, Inventory, Accounting, CRM and HR modules"
    ],
    accent: "#135843"
  },
  {
    id: "03",
    title: "BACKEND & INTEGRATIONS",
    subtitle: "Robust server logic, resilient APIs, and reliable data synchronization.",
    tags: ["Python", "PostgreSQL", "MySQL", "REST / JSON-RPC", "Data Migration"],
    description: "Engineering secure backend architectures, high-concurrency microservices, and multi-platform data integrations that keep disparate software ecosystems unified.",
    deliverables: [
      "Python development (FastAPI, Flask, Django)",
      "REST & JSON-RPC API architecture",
      "PostgreSQL, MySQL, MariaDB & MongoDB optimization",
      "Third-party webhook & API integrations",
      "Legacy data migration, cleanup & validation",
      "Authentication, RBAC and system security"
    ],
    accent: "#D6C29A"
  },
  {
    id: "04",
    title: "AUTOMATION & AI",
    subtitle: "Intelligent automation pipelines and AI workflows that eliminate manual friction.",
    tags: ["AI Workflows", "Process Automation", "System Integrations", "Custom Scripting"],
    description: "Leveraging modern AI APIs and event-driven automation to transform repetitive corporate processes into self-driving, intelligent digital pipelines.",
    deliverables: [
      "AI-powered document processing & OCR workflows",
      "End-to-end business process automation",
      "Intelligent CRM & customer support integrations",
      "Automated data validation & anomaly alerts",
      "Scheduled background jobs and batch processing",
      "Custom business workflow solutions"
    ],
    accent: "#135843"
  }
];

export const TECH_STACK = {
  FRONTEND: [
    { name: "React.js", category: "Library", level: "Core", desc: "Component architecture, hooks, performance" },
    { name: "JavaScript ES6+", category: "Language", level: "Proficient", desc: "Asynchronous programming, closures, DOM" },
    { name: "HTML5 & Semantic Web", category: "Markup", level: "Expert", desc: "SEO-friendly, accessible markup standards" },
    { name: "CSS3 & Modern Layouts", category: "Styling", level: "Expert", desc: "Flexbox, Grid, CSS animations" },
    { name: "Tailwind CSS", category: "Framework", level: "Core", desc: "Utility-first design, custom design tokens" }
  ],
  BACKEND: [
    { name: "Python", category: "Language", level: "Core", desc: "Scripting, enterprise logic, automation" },
    { name: "Node.js", category: "Runtime", level: "Core", desc: "Event-driven asynchronous services" },
    { name: "Express.js", category: "Framework", level: "Proficient", desc: "Microservices and RESTful API endpoints" },
    { name: "Odoo Backend", category: "Enterprise", level: "Core", desc: "ORM, business controllers, security rules" },
    { name: "PHP", category: "Language", level: "Familiar", desc: "Backend web integrations & legacy systems" }
  ],
  DATABASE: [
    { name: "PostgreSQL", category: "Relational", level: "Core", desc: "Complex relational schemas, ACID transactions" },
    { name: "MySQL", category: "Relational", level: "Proficient", desc: "Indexing, normalization, query optimization" },
    { name: "MariaDB", category: "Relational", level: "Proficient", desc: "ERPNext database engine configuration" },
    { name: "MongoDB", category: "NoSQL", level: "Proficient", desc: "Document storage, flexible aggregations" }
  ],
  ERP: [
    { name: "Odoo", category: "Platform", level: "Core", desc: "Enterprise modules, workflows, community & enterprise" },
    { name: "ERPNext", category: "Platform", level: "Core", desc: "Doctypes, client scripts, server scripts" },
    { name: "Frappe Framework", category: "Framework", level: "Core", desc: "Full-stack Python & JS web framework" },
    { name: "XML Architecture", category: "Configuration", level: "Core", desc: "Views, actions, menus, data files" },
    { name: "QWeb & Reports", category: "Templating", level: "Proficient", desc: "Custom PDF print formats & web templates" },
    { name: "OWL (Odoo Web Library)", category: "Frontend", level: "Proficient", desc: "Reactive UI components for modern Odoo" }
  ],
  TOOLS: [
    { name: "Git", category: "VCS", level: "Core", desc: "Branching workflows, rebasing, code reviews" },
    { name: "GitHub", category: "Platform", level: "Core", desc: "CI/CD actions, version management" },
    { name: "Docker", category: "DevOps", level: "Proficient", desc: "Containerized deployment, multi-stage builds" },
    { name: "Linux / Ubuntu Server", category: "OS", level: "Proficient", desc: "Server configuration, systemd services, Nginx" },
    { name: "Postman", category: "Testing", level: "Expert", desc: "API testing, automated collection runners" }
  ]
};

export const EXPERIENCES = [
  {
    company: "Self-Employed",
    role: "ERP & Full Stack Developer (Freelance)",
    period: "January 2025 – Present",
    status: "Active",
    location: "Remote / Gujarat, India",
    summary: "Independent Full Stack & ERP Developer helping businesses streamline operations, eliminate manual bottlenecks, and deploy tailored digital solutions.",
    responsibilities: [
      "Architect and implement custom Odoo and ERPNext deployments tailored to industry-specific requirements.",
      "Develop custom ERP modules, reports, print formats, and automated inventory and financial workflows.",
      "Build high-performance web applications and client dashboards using React.js and Node.js.",
      "Implement AI-powered workflow automation to parse invoices and sync transactions directly with ERP ledgers.",
      "Lead end-to-end requirement analysis, client consultative calls, deployment, and ongoing production support."
    ],
    skills: ["Odoo", "ERPNext", "React.js", "Python", "PostgreSQL", "AI Workflows", "API Design"]
  },
  {
    company: "Indrashil University",
    role: "Web Developer",
    period: "June 2024 – June 2026",
    status: "Ongoing",
    location: "Gujarat, India",
    summary: "Driving university web application development, internal digital modules, and platform optimization.",
    responsibilities: [
      "Developed responsive, accessible web pages and academic application features across key university portals.",
      "Built and integrated robust REST APIs connecting administrative dashboards to secure relational databases.",
      "Developed database-driven modules for academic tracking, event registration, and administrative workflows.",
      "Significantly improved web performance, reduced page load times, and resolved critical production bugs.",
      "Collaborated directly with university department heads and administrative teams to fulfill technical requirements.",
      "Maintained clean, modular codebases using strict Git version control and collaborative pull requests."
    ],
    skills: ["React.js", "Node.js", "REST APIs", "PostgreSQL", "Database Design", "Performance Tuning"]
  },
  {
    company: "Bhaskaracharya Institute for Space Applications and Geo-informatics (BISAG-N)",
    role: "Web Developer",
    period: "June 2024 – September 2024",
    status: "Completed",
    location: "Gandhinagar, Gujarat, India",
    summary: "Contributed to high-stakes national geospatial and data quality assessment platforms at a premier government institute.",
    responsibilities: [
      "Contributed to a mission-critical web platform designed for geospatial data quality assessment and standardization.",
      "Engineered user-friendly, responsive interfaces enabling researchers and analysts to inspect complex datasets.",
      "Integrated backend logic and data validation rules ensuring strict data integrity and schema compliance.",
      "Collaborated on workflow improvements that accelerated multi-layer geospatial data verification cycles."
    ],
    skills: ["Web Platforms", "Data Validation", "Backend Integration", "Geospatial UI", "System Optimization"]
  },
  {
    company: "Micro Pebbles Coding Solution",
    role: "Website Development and Designing Intern",
    period: "June 2023 – July 2023",
    status: "Completed",
    location: "Gujarat, India",
    summary: "Intensive internship focused on modern web design, responsive frontend engineering, and client deliverables.",
    responsibilities: [
      "Designed and coded responsive website layouts and interactive UI components.",
      "Assisted in frontend bug resolution and cross-browser compatibility testing.",
      "Collaborated with senior designers to implement modern typography, color palettes, and responsive grids."
    ],
    skills: ["Frontend Development", "UI/UX Design", "HTML5/CSS3", "JavaScript", "Responsive Design"]
  }
];

export const EDUCATION = {
  institution: "Indrashil University",
  degree: "Bachelor of Technology (B.Tech)",
  field: "Computer Science and Engineering",
  period: "2021 – 2025",
  location: "Gujarat, India",
  highlights: [
    "Core curriculum in Data Structures, Algorithms, Database Management Systems, Computer Networks, and Software Engineering.",
    "Active contributor to university technical projects, web portals, and software development initiatives.",
    "Strong theoretical and applied foundation across full-stack systems architecture and enterprise technologies."
  ]
};

export const WORKFLOW_STEPS = [
  {
    step: "01",
    title: "DISCOVER",
    phase: "Needs Analysis & Scope",
    description: "Understand the client's business requirements, operational challenges, objectives, and key success metrics before writing a single line of code.",
    points: [
      "Detailed requirement discovery sessions",
      "Process mapping & bottleneck identification",
      "System integration feasibility study",
      "Clear deliverables & scope definition"
    ]
  },
  {
    step: "02",
    title: "PLAN",
    phase: "Architecture & Design",
    description: "Define the technical roadmap, data schemas, architecture choices, and security considerations to ensure long-term scalability.",
    points: [
      "Database schema & data flow modeling",
      "Tech stack & framework selection",
      "API contracts & UI wireframe alignment",
      "Milestone breakdown & delivery timeline"
    ]
  },
  {
    step: "03",
    title: "DEVELOP",
    phase: "Execution & Iteration",
    description: "Build clean, maintainable, modular code with test-driven validation, regular code reviews, and iterative client check-ins.",
    points: [
      "Modular frontend & backend development",
      "ERP custom module coding & QWeb formatting",
      "RESTful API & third-party integrations",
      "Rigorous quality assurance & edge-case testing"
    ]
  },
  {
    step: "04",
    title: "DELIVER & SUPPORT",
    phase: "Deployment & Scaling",
    description: "Deploy the final solution to production, verify performance under real-world conditions, and provide continuous technical support.",
    points: [
      "Production deployment & server configuration",
      "User documentation & administrative training",
      "Post-launch monitoring & performance tuning",
      "Long-term support & ongoing feature upgrades"
    ]
  }
];
