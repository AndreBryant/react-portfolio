import { useEffect, useState } from "react";
import Hero from "./components/Hero";
import Instructions from "./components/Instructions";
import type { KeyStates } from "./types";

export default function App() {
  const [keyStates, setKeyStates] = useState<KeyStates>({
    ArrowUp: false,
    ArrowDown: false,
  });

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const vh = window.innerHeight;
      const currentScroll = window.scrollY;
      const currentStep = Math.floor(currentScroll / vh);

      // These makes sense. I promise haha
      if (e.key === "ArrowDown" || e.key === " ") {
        const nextScroll = (currentStep + 1) * vh;
        window.scrollTo({ top: nextScroll, behavior: "smooth" });
        setKeyStates((k) => {
          return {
            ...k,
            ArrowDown: true,
          };
        });
        e.preventDefault();
      } else if (e.key === "ArrowUp") {
        const currentDepth = currentStep * vh;
        const prevScroll =
          currentScroll > currentDepth ? currentDepth : currentDepth - vh;
        window.scrollTo({ top: prevScroll, behavior: "smooth" });
        setKeyStates((k) => {
          return {
            ...k,
            ArrowUp: true,
          };
        });
        e.preventDefault();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  });

  useEffect(() => {
    const handleKeyUp = (e: KeyboardEvent) => {
      if (e.key === "ArrowDown") {
        setKeyStates((k) => {
          return {
            ...k,
            ArrowDown: false,
          };
        });
      } else if (e.key === "ArrowUp") {
        setKeyStates((k) => {
          return {
            ...k,
            ArrowUp: false,
          };
        });
      }
    };

    window.addEventListener("keyup", handleKeyUp);
    return () => window.removeEventListener("keyup", handleKeyUp);
  });

  return (
    <div className="relative w-screen">
      {/* HERO: Introduction */}
      <Hero />
      {/* Main Content: About Me (Education, Experience), Relevant Projects _(Academic Projects and Personal Projects) */}
      <div className="h-screen w-full"></div>
      {/* Footer: Contact Form */}
      <div className="h-screen w-full bg-amber-400"></div>
      {/* Instructions */}
      {/* <Instructions keystates={keyStates} /> */}
    </div>
  );
}
