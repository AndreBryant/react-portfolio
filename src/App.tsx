import { useEffect } from "react";
import Hero from "./components/Hero";

import About from "./components/About";
import NavBar from "./components/NavBar";
import Contact from "./components/Contact";

export default function App() {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const vh = window.innerHeight;
      const currentScroll = window.scrollY;
      const currentStep = Math.floor(currentScroll / vh);

      // These makes sense. I promise haha
      if (e.key === "ArrowDown" || e.key === " ") {
        const nextScroll = (currentStep + 1) * vh;
        window.scrollTo({ top: nextScroll, behavior: "smooth" });
        e.preventDefault();
      } else if (e.key === "ArrowUp") {
        const currentDepth = currentStep * vh;
        const prevScroll =
          currentScroll > currentDepth ? currentDepth : currentDepth - vh;
        window.scrollTo({ top: prevScroll, behavior: "smooth" });
        e.preventDefault();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  });

  return (
    <div className="relative w-screen overflow-y-auto">
      <NavBar />
      {/* sm:px-24 xl:px-64 */}
      <div className="bg-[#010101] text-slate-50">
        {/* HERO: Introduction */}
        <Hero />

        {/* Main Content: About Me (Education, Experience), Relevant Projects _(Academic Projects and Personal Projects) */}
        <About />
        <section className="h-screen py-32" id="projects">
          Projects
        </section>

        {/* Footer: Contact Form */}
        <Contact />
      </div>
    </div>
  );
}
