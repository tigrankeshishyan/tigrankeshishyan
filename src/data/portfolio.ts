export interface Experience {
  company: string;
  role: string;
  location?: string;
  startDate: string;
  endDate: string;
  highlights: string[];
  technologies?: string[];
}

export interface Language {
  name: string;
  level: string;
}

export const experiences: Experience[] = [
  {
    company: "High Sky Technologies",
    role: "Senior Software Engineer",
    location: "Dubai",
    startDate: "2023-05",
    endDate: "Present",
    highlights: [
      "Refactored and optimized codebase for improved performance",
      "Transitioned architecture to a Monorepo to manage multiple applications efficiently",
      "Enhanced code quality with automated testing and CI workflows"
    ],
    technologies: ["TypeScript", "React.js", "Vite", "Jest", "ESLint"]
  },
  {
    company: "EPAM Systems",
    role: "Senior Software Engineer",
    location: "Poland, Krakow",
    startDate: "2021-02",
    endDate: "2024-09",
    highlights: [
      "Led UI development; consultations with client/BA/PO; created tasks for UI devs",
      "Improved code quality and processes across teams",
      "Mentored developers; certified interviewer globally",
      "Tutor of web programming (React.js courses)"
    ],
    technologies: ["React.js", "GraphQL", "TypeScript", "Micro Frontend"]
  },
  {
    company: "Armenian National Music (ANM)",
    role: "Co-Founder, CEO",
    location: "Armenia",
    startDate: "2013-05",
    endDate: "Present",
    highlights: [
      "Digital collection of Armenian music recordings; thousands restored/digitalized",
      "Digitalized thousands of pages of sheet music; aims full digitization of composers' works",
      "Website: anmmedia.am"
    ],
    technologies: []
  },
  {
    company: "Wylling LLC",
    role: "Co-Founder, CEO",
    location: "Armenia",
    startDate: "2020-09",
    endDate: "2022-03",
    highlights: [
      "Online ticket sales platform for events in Armenia",
      "Website: wylling.com"
    ],
    technologies: []
  },
  {
    company: "Dark Matter",
    role: "Senior Front-end Engineer",
    location: "Armenia",
    startDate: "2018-11",
    endDate: "2020-12",
    highlights: [
      "Automated governmental processes (\"Get Married\", \"Drive a Car\", etc.)",
      "MariaDB + microservices; React on FE; Node.js + Docker on BE"
    ],
    technologies: ["React", "Node.js", "Docker", "MariaDB"]
  },
  {
    company: "XYB",
    role: "Senior Front-end Engineer (contract)",
    location: "Armenia",
    startDate: "2018-05",
    endDate: "2018-10",
    highlights: [
      "Solved code quality/performance issues; rendering improvements"
    ],
    technologies: ["TypeScript", "MobX", "React", "Cypress", "Jest"]
  },
  {
    company: "ApolloBytes",
    role: "Senior Front-end Engineer, Team Lead, Scrum Master",
    location: "Armenia",
    startDate: "2016-11",
    endDate: "2018-11",
    highlights: [
      "Built HR management tool; analytics with graphs/charts; massive data",
      "Agile; team leadership responsibilities"
    ],
    technologies: ["React", "Redux", "Flow", "Webpack", "Material-UI"]
  },
  {
    company: "Microsoft Innovation Center of Armenia",
    role: "Tutor of web programming",
    location: "Armenia",
    startDate: "2016-11",
    endDate: "2017-06",
    highlights: [
      "Taught HTML/CSS/JS + React; multiple student groups"
    ],
    technologies: ["React", "HTML", "CSS", "JavaScript"]
  },
  {
    company: "PicsArt",
    role: "Junior AngularJS Developer",
    location: "Armenia",
    startDate: "2016-05",
    endDate: "2016-12",
    highlights: [
      "Analytics dashboard with graphs/tables; real-time via socket.io"
    ],
    technologies: ["AngularJS", "Highcharts", "socket.io", "Gulp"]
  },
  {
    company: "TreeScale",
    role: "Junior ReactJS Developer",
    location: "Armenia",
    startDate: "2016-03",
    endDate: "2016-05",
    highlights: [
      "React SSR, Gulp, Node.js"
    ],
    technologies: ["React", "Node.js", "Gulp"]
  }
];

export const languages: Language[] = [
  { name: "Armenian", level: "Native" },
  { name: "English", level: "Advanced" },
  { name: "Russian", level: "Advanced" },
  { name: "Polish", level: "Intermediate" }
];

export const contactInfo = {
  name: "Tigran Keshishyan",
  title: "Senior Software Engineer",
  email: "tigrankeshishyan1@gmail.com",
  linkedin: "https://linkedin.com/in/tigran-keshishyan",
  github: "https://github.com/tigrankeshishyan"
};
