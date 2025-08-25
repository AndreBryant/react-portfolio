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
  // {
  //   name: "Internal Audit Management System (under DOST Internship)",
  //   duration: "June 2024 - August 2024",
  //   desc: "A Management system being developed during my stay as a Software Developer Intern at DOST under the PROJECT LODI.",
  //   role: "Developer (frontend and backend)",
  //   type: "Internship",
  //   link: "Unavailable",
  // },

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
    role: "Project Manager and Developer",
    type: "Personal Project",
    link: "https://github.com/AndreBryant/midi-spec-webpage",
    isDeployed: "true",
    deploymentLink: "https://andrebryant.github.io/midi-spec-webpage",
  },
];

export const PROJECT_TECHSTACK: string[][] = [
  // ["HTML5", "CSS", "JavaScript", "jQuery", "Laravel", "Bootstrap", "MySQL"],
  ["HTML5", "TailwindCSS", "TypeScript", "SvelteKit", "PixiJS", "CCaptureJS"],

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
  [
    "./assets/emblaze/emblaze-4.png",
    "./assets/emblaze/emblaze-1.png",
    "./assets/emblaze/emblaze-2.png",
    "./assets/emblaze/emblaze-3.png",
    "./assets/emblaze/emblaze-5.png",
    "./assets/emblaze/emblaze-6.png",
  ],
  [
    "./assets/deer/deer-1.png",
    "./assets/deer/deer-2.png",
    "./assets/deer/deer-3.png",
    "./assets/deer/deer-4.png",
    "./assets/deer/deer-5.png",
    "./assets/deer/deer-6.png",
    "./assets/deer/deer-7.png",
    "./assets/deer/deer-8.png",
    "./assets/deer/deer-9.png",
    "./assets/deer/deer-10.png",
    "./assets/deer/deer-11.png",
  ],
  [
    "./assets/subaybay/subaybay-1.png",
    "./assets/subaybay/subaybay-2.png",
    "./assets/subaybay/subaybay-3.png",
    "./assets/subaybay/subaybay-4.png",
    "./assets/subaybay/subaybay-5.png",
    "./assets/subaybay/subaybay-6.png",
    "./assets/subaybay/subaybay-docs-1.png",
    "./assets/subaybay/subaybay-docs-2.png",
  ],
  [
    "./assets/smf/smf-1.png",
    "./assets/smf/smf-2.png",
    "./assets/smf/smf-3.png",
    "./assets/smf/smf-4.png",
    "./assets/smf/smf-5.png",
  ],
];
