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
  "LeetCode 1700+ Rating",
  "Azure Certified",
];

export const aboutParagraphs = [
  "I'm a Computer Science undergraduate at Vellore Institute of Technology (GPA: 8.99), passionate about building production-grade software that serves real users at scale.",
  "From architecting multi-tenant SaaS platforms to contributing to open-source as a Google Summer of Code 2024 participant, I thrive at the intersection of backend depth and frontend craft.",
  "I've trained 200+ students in cloud technologies and published research on Kubernetes-based LLM deployment. When I'm not coding, I'm grinding LeetCode or winning hackathons.",
];

export const stats = [
  { value: "20K+", label: "Users Served" },
  { value: "850+", label: "LeetCode Problems" },
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
    skills: ["Java", "Python", "JavaScript", "TypeScript", "SQL", "C++"],
  },
  {
    title: "Frameworks",
    skills: ["Next.js", "React.js", "Spring Boot", "FastAPI"],
  },
  {
    title: "Frontend",
    skills: ["TypeScript", "Tailwind CSS", "Redux", "Zustand", "HTML5", "CSS3"],
  },
  {
    title: "Backend",
    skills: [
      "Node.js",
      "REST APIs",
      "GraphQL",
      "Microservices",
      "Kafka",
      "Socket.IO",
    ],
  },
  {
    title: "Databases",
    skills: ["PostgreSQL", "MongoDB", "Redis", "Query Optimization"],
  },
  {
    title: "Tools",
    skills: [
      "Docker",
      "Kubernetes",
      "Terraform",
      "Git",
      "CI/CD",
      "AWS EC2/S3/EKS",
    ],
  },
];

export const experiences = [
  {
    role: "Software Development Intern",
    company: "MyTripGoals",
    period: "Aug 2025 – Present",
    location: "Noida, UP",
    bullets: [
      "Engineered a scalable travel booking platform using React, Node.js, and PostgreSQL — boosted agent productivity by 40%.",
      "Built a modular frontend architecture with TypeScript, Tailwind CSS, and reusable component systems to accelerate feature delivery.",
      "Implemented real-time communication using Socket.IO and Redis pub/sub with horizontal scaling, cutting message latency by 15%.",
      "Integrated RESTful APIs, caching layers, and backend workflows to support scalable booking and payment processing.",
      "Contributed to CI/CD pipelines, peer code reviews, and Jest-based automated testing to improve deployment stability.",
    ],
  },
];

export const projects = [
  {
    icon: "School",
    badge: "SaaS · Production",
    name: "EduCore",
    description:
      "A multi-tenant School ERP SaaS platform powering 40+ modules across multiple schools. Handles 4K+ active users, ₹6L+ transactions, and payment processing with 99.9% success rate.",
    image: "/images/educore_thumbnail.png",
    githubUrl: "https://github.com/palaksingh2309",
    demoUrl: "https://github.com/palaksingh2309", // live demo or project link
    stats: [
      { value: "4K+", label: "active users" },
      { value: "₹6L+", label: "transactions" },
      { value: "99.9%", label: "uptime" },
    ],
    tech: ["Node.js", "TypeScript", "PostgreSQL", "Redis", "Razorpay"],
  },
  {
    icon: "ShieldCheck",
    badge: "Government · Funded",
    name: "SafeSurf",
    description:
      "A real-time mobile content moderation system. Built AI-powered pipelines for instant detection of unsafe media, Android client with Kotlin/Java, and Spring Boot backend with 85%+ test coverage.",
    image: "/images/safesurf_thumbnail.png",
    githubUrl: "https://github.com/palaksingh2309",
    demoUrl: undefined, // no live demo link for mobile app
    stats: [
      { value: "85%+", label: "test coverage" },
      { value: "Real-time", label: "inference" },
    ],
    tech: ["Spring Boot", "TensorFlow", "NLP", "Android", "Java/Kotlin", "JUnit"],
  },
];

export const certifications = [
  {
    title: "Azure Fundamentals (AZ-900)",
    issuer: "Microsoft",
    year: "2024",
    credentialUrl: "https://learn.microsoft.com/en-us/users/palaksingh-455191321/",
    icon: "Cloud",
  },
];

export const achievements = [
  {
    icon: "Code2",
    title: "LeetCode — Top 8%",
    description: "850+ problems solved · Rating 1700+ · 200-day active streak",
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
    icon: "GraduationCap",
    title: "Cloud Community Leader",
    description: "Trained 200+ students across 15 AWS/Azure workshops",
  },
  {
    icon: "Cloud",
    title: "Azure Fundamentals (AZ-900)",
    description:
      "Microsoft certified in cloud fundamentals and Azure services",
  },
  {
    icon: "Package",
    title: "6 Production Apps",
    description:
      "Freelance: SDPL, Plotify, EduCore and more — 20,000+ users served",
  },
  {
    icon: "FileText",
    title: "Research Publications",
    description:
      '3 papers published incl. "Leveraging Kubernetes for LLM Deployment" — IJFMR, Jan 2025',
  },
  {
    icon: "GitBranch",
    title: "Open Source Contributor",
    description:
      "Active contributor to multiple open-source repositories via GSoC and independent work",
  },
];
