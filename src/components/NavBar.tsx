import { useEffect, useState } from "react";

export default function NavBar() {
  const [activeId, setActiveId] = useState<string | null>("hero");

  useEffect(() => {
    const sections = ["hero", "projects", "contact"];
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
    <nav className="fixed top-8 z-50 block w-full px-4 sm:px-24 xl:px-64">
      <div className="mx-auto flex items-center justify-between rounded-xl bg-slate-500/10 px-8 py-4 backdrop-blur-lg">
        <div
          className="group flex items-center gap-4"
          onClick={() => document.getElementById("hero")?.scrollIntoView()}
        >
          <div
            className="cursor-default font-mono font-thin text-purple-50"
            title="I dont know how to make logo or brand identity yet. Sorry"
          >
            &gt; Andre
          </div>

          {/* <span className="-translate-x-full opacity-0 transition-opacity group-hover:block group-hover:translate-x-0 group-hover:opacity-100"> */}
          {/* <span className="hidden group-hover:text-lg group-hover:font-bold lg:block">
          My Portfolio
          </span> */}
        </div>
        <div className="grow">
          <ul className="flex justify-end gap-8 font-mono">
            <NavLink elmntId="hero" isActive={activeId === "hero"}>
              {activeId === "hero" ? "home" : "cd home"}
            </NavLink>
            <NavLink elmntId="projects" isActive={activeId === "projects"}>
              {activeId === "projects" ? "projects" : "cd projects"}
            </NavLink>
            <NavLink elmntId="contact" isActive={activeId === "contact"}>
              {activeId === "contact" ? "contact" : "cd contact"}
            </NavLink>
          </ul>
        </div>
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
