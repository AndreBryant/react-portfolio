import { useRef } from "react";

import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import About from "./components/About";
import Contact from "./components/Contact";
import Projects from "./components/Projects";

import { GlobalWrapperStyle, heroSketch3 } from "./components/scripts/p5-bgs";
import { ReactP5Wrapper } from "@p5-wrapper/react";

export default function App() {
  const heroRef = useRef<HTMLElement | null>(null);
  const aboutRef = useRef<HTMLElement | null>(null);
  const projectsRef = useRef<HTMLElement | null>(null);
  const contactRef = useRef<HTMLElement | null>(null);

  return (
    <div className="relative top-0 z-0 m-0 w-screen border p-0" id="app">
      <NavBar
        sectionRefs={{
          hero: heroRef,
          about: aboutRef,
          projects: projectsRef,
          contact: contactRef,
        }}
      />
      <GlobalWrapperStyle />
      <ReactP5Wrapper sketch={heroSketch3} />
      <main className="bg-[#0d0d0d] text-slate-300 [&>section]:px-4 [&>section]:py-32 [&>section]:md:px-32 [&>section]:xl:px-64 [&>section]:2xl:px-96 [&>section:is(#about)]:px-16 [&>section:is(#about)]:md:px-32 [&>section:is(#about)]:xl:px-64 [&>section:is(#about)]:2xl:px-96">
        <Hero sectionRef={heroRef} />
        <About sectionRef={aboutRef} />
        <Projects sectionRef={projectsRef} />
        <Contact sectionRef={contactRef} />
      </main>
    </div>
  );
}
