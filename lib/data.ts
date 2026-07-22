export const siteConfig = {
  name: "Palak Singh",
  role: "Software Engineer & Full-Stack Developer",
  tagline:
    "Building scalable systems, beautiful interfaces, and real-world solutions — from SaaS platforms to government-funded apps, all powered by curiosity and clean code.",
  email: "palak.singhhh23@gmail.com",
  phone: "+91 70049 93499",
  phoneHref: "tel:+917004993499",
  resume: "/images/Resume.pdf",
  photo: "/images/myphoto.png",
  socials: {
    linkedin: "https://www.linkedin.com/in/palak-singh-455191321/",
    github: "https://github.com/palaksingh2309",
    leetcode: "https://leetcode.com/u/palaksingh2004/",
  },
};

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Achievements", href: "#achievements" },
  { label: "Contact", href: "#contact" },
];

export const heroBadges = [
  "Google Summer of Code 2024",
  "5× Hackathon Winner",
  "LeetCode 1500+ Rating",
  "GCP & Azure Certified",
];

export const aboutParagraphs = [
  "I'm a Computer Science undergraduate at Vellore Institute of Technology (GPA: 8.99), passionate about building production-grade software that serves real users at scale.",
  "From architecting multi-tenant SaaS platforms to contributing to open-source as a Google Summer of Code 2024 participant, I thrive at the intersection of backend depth and frontend craft.",
  "I've trained 200+ students in cloud technologies and published research on Kubernetes-based LLM deployment. When I'm not coding, I'm grinding LeetCode or winning hackathons.",
];

export const stats = [
  { value: "20K+", label: "Users Served" },
  { value: "500+", label: "LeetCode Problems" },
  { value: "6", label: "Production Apps" },
  { value: "5×", label: "Hackathon Wins" },
];

export const highlights = [
  {
    icon: "GraduationCap",
    title: "VIT Bhopal — B.Tech CS",
    description:
      "Sept 2023 – May 2027 · GPA 8.99 · Coursework in DSA, OS, DBMS, Networks",
  },
  {
    icon: "FlaskConical",
    title: "Research Published",
    description:
      '3 papers including "Leveraging Kubernetes for LLM Deployment" in IJFMR (Jan 2025)',
  },
  {
    icon: "Cloud",
    title: "Cloud Community Leader",
    description:
      "Delivered 15+ AWS/Azure workshops, trained 200+ students in cloud fundamentals",
  },
  {
    icon: "Globe",
    title: "Google Summer of Code 2024",
    description:
      "Selected as contributor — Top 2% globally — contributing to open-source projects",
  },
];

export const skillGroups = [
  {
    title: "Languages",
    skills: ["Python", "Java", "JavaScript", "TypeScript", "SQL"],
  },
  {
    title: "Backend",
    skills: ["Django", "FastAPI", "Flask", "Node.js", "REST APIs", "GraphQL"],
  },
  {
    title: "AI & LLMs",
    skills: [
      "OpenAI API",
      "LangChain",
      "RAG Pipelines",
      "Vector Databases",
      "AI Agents",
    ],
  },
  {
    title: "Databases",
    skills: ["PostgreSQL", "MongoDB", "Redis"],
  },
  {
    title: "Scraping & Data",
    skills: ["BeautifulSoup", "Scrapy", "Playwright"],
  },
  {
    title: "Cloud & Tools",
    skills: [
      "AWS",
      "Docker",
      "Kubernetes",
      "Git",
      "CI/CD",
      "Async Programming",
    ],
  },
];

export const experiences = [
  {
    role: "Full Stack Developer Intern",
    company: "EaseHawk Technologies",
    period: "Apr 2026 – Present",
    location: "Gurugram, UP",
    bullets: [
      "Developing MoxSend, an AI-powered cold email outreach platform serving over 5,000 active users using Node.js, TypeScript, and Redis.",
      "Designed and implemented scalable RESTful APIs, background task queues, and data caching strategies to ensure high platform responsiveness.",
      "Engineered core modules for multi-tenant campaign management, automated AI-driven responses, email scheduling, and transactional delivery flows.",
      "Deployed and configured containerized production workloads on AWS, optimizing for high availability, security compliance, and cost efficiency.",
    ],
  },
  {
    role: "Software Engineer Intern",
    company: "MyTripGoal",
    period: "Aug 2025 – March 2026",
    location: "Noida, UP",
    bullets: [
      "Built robust and high-performing Python backend services and travel-booking REST APIs utilizing FastAPI and Node.js.",
      "Created intelligent automation workflows with LangChain, OpenAI APIs, and vector embeddings to streamline itinerary generation and support queries.",
      "Optimized Postgres database schemas, implemented Redis caching layers, and engineered asynchronous task queues to scale the system to 10K+ users.",
      "Secured transaction logic and payment API integrations, ensuring highly reliable booking processing across travel operations.",
    ],
  },
];

export const projects = [
  {
    icon: "School",
    badge: "SaaS · Production",
    name: "EduNage AI",
    description:
      "Built scalable backend services using Node.js, FastAPI, PostgreSQL, and Redis for 4K+ active users. Built secure REST APIs, asynchronous notification workflows, and AI-assisted automation modules for attendance, fee management, and academic operations across multi-tenant school environments.",
    image: "/images/educore_thumbnail.png",
    githubUrl: "https://github.com/palaksingh2309",
    demoUrl: "https://github.com/palaksingh2309", // live demo or project link
    stats: [
      { value: "4K+", label: "active users" },
      { value: "2,500+", label: "transactions" },
      { value: "45%", label: "API speedup" },
    ],
    tech: ["Node.js", "FastAPI", "PostgreSQL", "Redis", "Razorpay"],
  },
  {
    icon: "ShieldCheck",
    badge: "AI · Moderation",
    name: "SafeSurf AI",
    description:
      "Built real-time AI moderation backend using Python, FastAPI, and NLP models to detect unsafe content. Developed intelligent moderation pipelines processing structured and unstructured multimedia data using OpenCV, vector embeddings, and asynchronous processing for scalable low-latency classification workflows.",
    image: "/images/safesurf_thumbnail.png",
    githubUrl: "https://github.com/palaksingh2309",
    demoUrl: undefined, // no live demo link for mobile app
    stats: [
      { value: "90%+", label: "accuracy" },
      { value: "Real-time", label: "moderation" },
    ],
    tech: [
      "Python",
      "FastAPI",
      "NLP",
      "OpenCV",
      "TensorFlow",
      "Asynchronous Processing",
    ],
  },
];

export const certifications: {
  title: string;
  issuer: string;
  year: string;
  credentialUrl?: string;
  icon: string;
}[] = [
  {
    title: "Azure Fundamentals (AZ-900)",
    issuer: "Microsoft",
    year: "2024",
    icon: "Cloud",
  },
];

export const achievements = [
  {
    icon: "Code2",
    title: "Competitive Programming",
    description:
      "Solved 500+ problems on LeetCode · Rating 1500+ (Top 8%) · 200-day active streak",
  },
  {
    icon: "Trophy",
    title: "5× Hackathon Winner",
    description:
      "CodeVerse, HackByte, Cisco Codeathon, Hack4Health, MP Police Cyber Security",
  },
  {
    icon: "Globe",
    title: "Google Summer of Code 2024",
    description:
      "Selected as contributor — Top 2% globally — open-source contributions",
  },
  {
    icon: "Cloud",
    title: "Cloud & AI Certifications",
    description:
      "Azure Fundamentals · Google Cloud Generative AI · MLOps Certifications",
  },
  {
    icon: "Package",
    title: "Freelance Experience",
    description:
      "Delivered 6 production applications (SDPL, Plotify, EduNage) serving 20,000+ users",
  },
  {
    icon: "FileText",
    title: "Research Publications",
    description:
      'Published 3 papers including "Leveraging Kubernetes for LLM Deployment" in IJFMR (Jan 2025)',
  },
];
