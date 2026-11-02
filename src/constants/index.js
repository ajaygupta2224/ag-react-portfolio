import project1 from "../assets/projects/images.png";
import project2 from "../assets/projects/peoplefirst.jfif";
import project3 from "../assets/projects/download.jfif";
import project4 from "../assets/projects/project-3.jpg";
import project5 from "../assets/projects/project-2.jpg";
import project6 from "../assets/projects/incident-management.png";
import project7 from "../assets/projects/npm.png";

export const HERO_CONTENT = `Software Engineer with 4+ years of experience building scalable, high-performance enterprise applications across frontend and backend technologies. Strong expertise in Angular, React, TypeScript, JavaScript, RxJS, and NgRx, with hands-on experience in Microfrontend architecture, Module Federation, Golang microservices, Kafka, Redis, and distributed systems supporting 250M+ requests per day.`;

export const ABOUT_TEXT = `Software Engineer with 4+ years of experience building scalable, high-performance enterprise applications across frontend and backend technologies. Strong expertise in Angular, React, TypeScript, JavaScript, RxJS, and NgRx, with experience in Microfrontend architecture, Module Federation, reusable UI components, REST API integration, and frontend performance optimization. Hands-on backend experience with Golang, Node.js, REST APIs, microservices, PostgreSQL, MySQL, Redis, Kafka and ClickHouse, including distributed systems, event-driven architectures, data processing, API security, and performance optimization. Experienced with Docker, Kubernetes, Azure, GCP, and CI/CD, delivering end-to-end features in collaboration with product, QA, and DevOps teams.`;

export const EXPERIENCES = [
  {
    year: "Jun 2022 – Present",
    role: "Software Developer Engineer",
    company: "Jio Platforms Limited",
    description: [
      "Developed scalable enterprise applications across frontend and backend, using Angular, React, TypeScript, JavaScript, RxJS, Golang, REST APIs, PostgreSQL, Redis and kafka.",
      "Designed and implemented modular, responsive, reusable UI components and frontend libraries, along with Microfrontend architecture using Module Federation, enabling independent development and deployment of application modules.",
      "Designed and developed Golang microservices and distributed processing pipelines for high-volume enterprise messaging, leveraging Kafka, Redis, and PostgreSQL to support 250M+ requests per day with low latency and high availability.",
      "Built and integrated RESTful APIs and Strapi CMS collection to support frontend applications, business workflows, real-time dashboards, and analytical reporting, including dynamic SQL queries for large-scale data retrieval.",
      "Implemented backend capabilities including caching, rate limiting, distributed processing, and database-driven services to improve system throughput and reliability.",
      "Strengthened API security through OAuth 2.0, RBAC, request validation, and secure data-handling practices.",
      "Improved application reliability through code refactoring, critical bug resolution, logging, metrics, monitoring, and performance optimization, identifying bottlenecks across application and backend services.",
      "Collaborated with DevOps teams on CI/CD pipelines and Kubernetes-based deployments, supporting automated builds, multi-environment releases, and reliable production rollouts.",
      "Worked closely with product managers, frontend/backend engineers, QA, and DevOps teams to deliver end-to-end features aligned with business requirements and Agile development practices.",
      "Delivered weekly sprint updates and tracked development milestones in Agile development cycles.",
    ],
    technologies: [
      "Angular",
      "React",
      "TypeScript",
      "JavaScript",
      "RxJS",
      "Golang",
      "Node.js",
      "REST APIs",
      "PostgreSQL",
      "Redis",
      "Kafka",
      "ClickHouse",
      "Elasticsearch",
      "Microfrontends",
      "Module Federation",
      "Strapi",
      "Docker",
      "Kubernetes",
      "OAuth 2.0",
      "CI/CD",
    ],
  },
];

export const PROJECTS = [
  {
    title: "JioCX",
    image: project1,
    description: [
      "Currently working at Jio CX, focusing on developing a CPaaS (Communication Platform as a Service) tool.",
      "This tool enables businesses to execute voice call marketing campaigns, delivering promotional offers, product updates, and exclusive deals directly to their customers.",
    ],
    technologies: ["React", "Angular", "TypeScript", "Golang", "Kafka", "Microfrontends", "REST APIs"],
  },
  {
    title: "People First",
    image: project2,
    description: [
      "Enterprise employee management application based on Reliance's internal systems.",
      "Helps professionals manage team tasks, track project progress, and improve transparency and collaboration within the organization.",
    ],
    technologies: ["Angular", "TypeScript", "RxJS", "NgRx", "REST APIs", "Microfrontends"],
  },
  {
    title: "JioFace",
    image: project3,
    description: [
      "JioFace is an AI-powered Face Recognition attendance system designed for automated, secure presence verification.",
      "Leverages REST APIs for seamless integration, utilizes Strapi collections for efficient data management, and implements module federation for enhanced scalability and flexibility.",
    ],
    technologies: ["Angular", "Strapi CMS", "Module Federation", "REST APIs", "TypeScript"],
  },
  {
    title: "Reporting & Billing portal",
    image: project4,
    description: [
      "Developed backend services and REST APIs using Golang to support reporting, billing, and complex CRUD operations.",
      "Integrated PostgreSQL and Elasticsearch to efficiently query and deliver large-scale reports, with automated workflows for streamlined report generation and improved data accuracy.",
    ],
    technologies: ["Golang", "PostgreSQL", "Elasticsearch", "REST APIs", "Microservices", "Docker"],
  },
  {
    title: "BCD Analytics",
    image: project5,
    description: [
      "Designed optimized data pipelines using ClickHouse and PostgreSQL, enabling low-latency analytical queries and efficient storage of high-volume datasets.",
      "Implemented scalable ETL workflows and data modeling strategies that improved reporting accuracy, reduced processing time, and supported data-driven decision making.",
    ],
    technologies: ["ClickHouse", "PostgreSQL", "Golang", "ETL Pipelines", "Data Modeling", "Distributed Systems"],
  },
  {
    title: "Incident Management",
    image: project6,
    description: [
      "A platform application for seamless reporting and investigation of various incidents occurring across various manufacturing locations.",
    ],
    technologies: ["Angular", "TypeScript", "REST APIs", "Bootstrap", "SCSS"],
  },
  {
    title: "Fx Layout npm Package",
    image: project7,
    description: [
      "A custom open-source (ngx-fx-layout) npm library that replicates the functionality of deprecated Angular Flex Layout package to support developers in their current and future use.",
      "Provides a flexible and responsive layout system, allowing developers to design complex UI layouts with ease.",
    ],
    technologies: ["Angular", "TypeScript", "npm", "SCSS", "Open Source"],
  },
];

export const SKILL_CATEGORIES = [
  {
    category: "Frontend",
    skills: ["Angular", "React", "TypeScript", "JavaScript", "HTML5", "CSS3", "SCSS", "Bootstrap", "Tailwind CSS", "Angular Material", "RxJS", "NgRx"],
  },
  {
    category: "Backend",
    skills: ["Golang", "Node.js", "Express.js", "RESTful APIs", "Microservices", "API Development", "Middleware"],
  },
  {
    category: "Databases",
    skills: ["PostgreSQL", "MySQL", "Redis", "ClickHouse", "Elasticsearch"],
  },
  {
    category: "Messaging & Architecture",
    skills: ["Kafka", "Microfrontend Architecture", "Module Federation", "Event-Driven Architecture", "Distributed Systems", "Caching", "Rate Limiting", "Worker Pools"],
  },
  {
    category: "Cloud & DevOps",
    skills: ["Microsoft Azure", "GCP", "Docker", "Kubernetes", "CI/CD", "Azure Pipelines"],
  },
  {
    category: "Security & Performance",
    skills: ["OAuth 2.0", "RBAC", "Request Validation", "Performance Optimization", "Monitoring", "Troubleshooting"],
  },
  {
    category: "Tools & Development",
    skills: ["Git", "GitHub", "GitLab", "Postman", "Strapi", "Visual Studio", "Webpack", "Vite"],
  },
];

export const EDUCATION = [
  {
    degree: "Masters of Technology in Software Systems",
    institution: "Birla Institute of Technology & Science, Pilani, India",
    score: "CGPA: 6.81",
  },
  {
    degree: "Bachelor of Science in Information Technology",
    institution: "Thakur College of Science and Commerce, Mumbai University, India",
    score: "CGPA: 9.3",
  },
  {
    degree: "Science Stream (Class XII)",
    institution: "S.S & L.S Patkar College of Arts & Science, Maharashtra Board, India",
    score: "Aggregate: 72.46%",
  },
];

export const CONTACT = {
  address: "Mumbai, India - 400064",
  phoneNo: "+91-9702067569",
  email: "ajaygupta2224@gmail.com",
};
