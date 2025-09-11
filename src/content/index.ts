import FILES from "../assets/index";

export const HERO_CONTENT: Record<string, string> = {
  heading: "Hello I'm",
  name: "Andre",
  job: "aspiring software developer",
  intro:
    "fresh Computer Science Graduate from University of the Philippines Baguio and DOST-SEI JLSS Merit 2023 awardee",
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

export const ABOUT = {
  intro:
    "Hello, I am Andre Bryant (he/him), a computer science fresh graduate from the University of the Philippines and an aspiring professional software developer. I was also a DOST-SEI JLSS scholar from 2023 - 2025.",
  likes:
    "I enjoy using modern web frameworks such as SvelteKit & NextJS, and libraries such as p5.js for creative coding.",
  credentials: FILES.DOCUMENTS,
};

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
    name: "Emblaze App",
    duration: "2025 (ongoing)",
    desc: "A browser-based MIDI renderer made with Sveltekit, TailwindCSS, and PixiJS.",
    role: "Developer",
    type: "Personal Project",
    link: "https://github.com/AndreBryant/emblaze-app",
    isDeployed: "true",
    deploymentLink: "https://emblaze-midi.vercel.app",
  },
  {
    name: "My Portfolio Website",
    duration: "June - August 2025",
    desc: "A portfolio website to showcase projects that I am most proud of.",
    role: "Developer/Designer",
    type: "Personal Project",
    link: "https://github.com/AndreBryant/react-portfolio",
    isDeployed: "false",
    deploymentLink: "",
  },
  {
    name: "Deer Game",
    duration: "October - December 2024",
    desc: "A semestral project in CMSC 135 demonstrating networking concepts such as using WebSocket.",
    role: "Developer (frontend and backend)",
    type: "Academic Project",
    link: "https://github.com/AndreBryant/deer-game",
    isDeployed: "false",
    deploymentLink: "",
  },
  {
    name: "UPB SUBAYBAY",
    duration: "February 2024 - May 2025",
    desc: "Internal Request Tracker for the Office of the University Registrar of the University of the Philippines Baguio",
    role: "Project Manager and Developer",
    type: "Academic Project",
    link: "https://github.com/brymer-meneses/Subaybay",
    isDeployed: "false",
    deploymentLink: "",
  },
  {
    name: "SMF Format Spec. 1.1",
    duration: "July 2023",
    desc: "Front-end redesign of the MIDI Spec 1.1 HTML Document by David Back (1999) using vanilla html-css-javascript.",
    role: "Developer",
    type: "Personal Project",
    link: "https://github.com/AndreBryant/midi-spec-webpage",
    isDeployed: "true",
    deploymentLink: "https://andrebryant.github.io/midi-spec-webpage",
  },
];

export const PROJECT_TECHSTACK: string[][] = [
  ["HTML5", "TailwindCSS", "JavaScript", "SvelteKit", "PixiJS", "CCaptureJS"],
  ["HTML5", "TailwindCSS", "CSS", "TypeScript", "ReactJS", "Vite", "P5.js"],
  ["HTML5", "TailwindCSS", "TypeScript", "SvelteKit", "P5.js", "WebSocket"],
  [
    "HTML5",
    "TailwindCSS",
    "TypeScript",
    "SvelteKit",
    "shadcn-svelte",
    "MongoDB",
    "Docker",
  ],
  ["HTML5", "CSS3", "JavaScript"],
];

export const PROJECT_IMG_PATHS: string[][] = [
  FILES.EMBLAZE,
  FILES.PORTFOLIO,
  FILES.DEER,
  FILES.SUBAYBAY,
  FILES.SMF,
];
