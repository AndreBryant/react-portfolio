import { useEffect, useState } from "react";

export default function NavBar() {
  const [activeId, setActiveId] = useState<string | null>("hero");

  useEffect(() => {
    const sections = ["hero", "about", "projects", "contact"];
    const sectionElements = sections
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];

    const observer = new IntersectionObserver(
      (entries) => {
        let mostVisible = null;

        for (const entry of entries) {
          if (entry.isIntersecting && sections.includes(entry.target.id)) {
            if (
              !mostVisible ||
              entry.intersectionRatio > mostVisible.intersectionRatio
            ) {
              mostVisible = entry;
            }
          }
        }

        if (mostVisible) {
          setActiveId(`${mostVisible.target.id}`);
        }
      },
      {
        root: null,
        threshold: 0.5,
      },
    );

    sectionElements.forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <nav className="fixed top-0 z-50 flex h-32 w-full items-center justify-between p-16 text-white backdrop-blur-xs select-none sm:px-24 xl:px-64">
      <div
        className="group flex items-center gap-4"
        onClick={() => document.getElementById("hero")?.scrollIntoView()}
      >
        <div
          className="cursor-default rounded-full border border-white/20 px-2 py-1 transition-transform group-hover:border-white/90 group-hover:font-semibold"
          title="I dont know how to make logo or brand identity yet. Sorry"
        >
          <span className="font-mono text-white/70">T_,T</span>
        </div>

        {/* <span className="-translate-x-full opacity-0 transition-opacity group-hover:block group-hover:translate-x-0 group-hover:opacity-100"> */}
        <span className="hidden group-hover:text-lg group-hover:font-bold lg:block">
          My Portfolio
        </span>
      </div>
      <div>
        <ul className="flex gap-8">
          <NavLink elmntId="hero" isActive={activeId === "hero"}>
            Home
          </NavLink>
          <NavLink elmntId="about" isActive={activeId === "about"}>
            About
          </NavLink>
          <NavLink elmntId="projects" isActive={activeId === "projects"}>
            Projects
          </NavLink>
          <NavLink elmntId="contact" isActive={activeId === "contact"}>
            Contact
          </NavLink>
        </ul>
      </div>
    </nav>
  );
}

function NavLink({
  children,
  elmntId,
  isActive,
}: Readonly<{ children: string; elmntId: string; isActive: boolean }>) {
  return (
    // I wont use anchor tags because they show link at the bottom left when hovering.
    <span
      className={`cursor-pointer text-white/70 transition-all select-none hover:text-white/90 ${isActive ? "text-white/90 underline underline-offset-2" : "text-white/70"}`}
      onClick={() => {
        document
          .getElementById(elmntId)
          ?.scrollIntoView({ behavior: "smooth" });
      }}
    >
      <li>{children}</li>
    </span>
  );
}
