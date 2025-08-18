export const HERO_CONTENT: Record<string, string> = {
  heading: "Hello I'm",
  name: "Andre",
  job: "aspiring software developer",
  // job: "please give me job",
};
export const SKILLS = [
  "HTML5",
  "CSS3",
  "JavaScript",
  "TypeScript",
  "SvelteKit",
  "ReactJS",
  "TailwindCSS",
];

export const EDUCATION: Record<string, string>[] = [
  {
    name: "University of the Philippines - Baguio",
    duration: "2021 - 2025",
    notes: "BS Computer Science (cum laude)",
  },
  {
    name: "DOST-SEI JLSS Scholar",
    duration: "2023 - 2025",
    notes: "Scholarship under the Junior Level Science Scholarship program.",
  },
  {
    name: "Calamba City Science Integrated School",
    duration: "2019 - 2021",
    notes: "STEM Track (graduated with honors)",
  },
];

export const PROJECTS: Record<string, string>[] = [
  {
    name: "Internal Audit Management System (under DOST Internship)",
    duration: "June 2024 - August 2024",
    desc: "A Management system being developed during my stay as a Software Developer Intern at DOST under the PROJECT LODI.",
    role: "Developer (frontend and backend)",
    type: "Internship",
    link: "Unavailable",
  },
  {
    name: "UPB SUBAYBAY",
    duration: "February 2024 - May 2025",
    desc: "Internal Request Tracker for the Office of the University Registrar of the University of the Philippines Baguio",
    role: "Project Manager and Developer",
    type: "Academic Project",
    link: "",
  },
  {
    name: "Deer Game",
    duration: "October - December 2024",
    desc: "A semestral project in CMSC 135 demonstrating networking concepts such as using WebSocket.",
    role: "Developer (frontend and backend)",
    type: "Academic Project",
    link: "",
  },
  {
    name: "Emblaze App",
    duration: "2025 (ongoing)",
    desc: "A browser based MIDI renderer made with Sveltekit, TailwindCSS, and PIXIJS.",
    role: "Developer",
    type: "Personal Project",
    link: "",
  },
];

export const PROJECT_TECHSTACK: string[][] = [
  ["HTML5", "CSS", "JavaScript", "jQuery", "Laravel", "Bootstrap", "MySQL"],
  [
    "HTML5",
    "TypeScript",
    "SvelteKit",
    "TailwindCSS",
    "shadcn-svelte",
    "MongoDB",
    "Docker",
  ],
  ["HTML5", "TailwindCSS", "P5.js", "WebSocket", "SvelteKit"],
  ["HTML5", "TailwindCSS", "PIXIJS", "CCaptureJS"],
];

export const PROJECT_IMG_PATHS: string[][] = [
  ["./iams1.png", "iams2.png"],
  ["./subaybay1.png", "./subaybay2.png"],
  ["./deer1.png", "./deer2.png"],
  ["./emblaze1.png", "emblaze2.png"],
];
