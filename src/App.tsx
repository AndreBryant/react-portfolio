import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import Contact from "./components/Contact";
import Projects from "./components/Projects";

import { GlobalWrapperStyle, heroSketch3 } from "./components/scripts/p5-bgs";
import { ReactP5Wrapper } from "@p5-wrapper/react";
export default function App() {
  return (
    <div className="relative top-0 z-0 m-0 w-screen border p-0" id="app">
      <NavBar />
      <GlobalWrapperStyle />
      <ReactP5Wrapper sketch={heroSketch3} />
      <div className="bg-[#0d0d0d] text-slate-300 [&>section]:px-4 [&>section]:py-32 [&>section]:sm:px-32 [&>section]:xl:px-96">
        <Hero />
        <Projects />
        <Contact />
      </div>
    </div>
  );
}
