import { useEffect, useState } from "react";

export default function NavBar() {
  const [activeId, setActiveId] = useState<string | null>("hero");
  const [expandedMenu, setExpandedMenu] = useState<boolean>(false);
  const toggleExpandedMenu = () => setExpandedMenu(!expandedMenu);

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

  const sections: Record<string, string>[] = [
    { label: "home", id: "hero" },
    { label: "projects", id: "projects" },
    { label: "contact", id: "contact" },
  ];

  return (
    <nav className="fixed top-8 z-50 block w-full px-4 font-mono select-none sm:px-24 xl:px-64">
      <div className="relative mx-auto flex items-center justify-between rounded-xl bg-slate-500/10 px-8 py-4 backdrop-blur-lg">
        {/* Left logo */}
        <div
          className="group flex items-center gap-4"
          onClick={() => document.getElementById("hero")?.scrollIntoView()}
        >
          <div className="cursor-pointer border-r border-slate-50/20 pr-4 text-purple-50 hover:text-purple-400">
            &gt; Andre
          </div>
        </div>

        {/* Right nav */}
        <div className="grow">
          <ul className="hidden justify-end lg:flex [&>span]:px-4">
            {sections.map((s, i) => (
              <NavLink
                elmntId={s.id}
                isActive={activeId === s.id}
                key={i}
                isLast={i === sections.length - 1}
                onClick={null}
              >
                {s.label}
              </NavLink>
            ))}
          </ul>

          {/* Mobile trigger */}
          <div className="flex justify-end lg:hidden">
            <span
              className="cursor-pointer rounded-lg border border-slate-800/5 bg-slate-200/10 px-2 text-rose-400 hover:bg-slate-200/20 hover:text-rose-500"
              onClick={toggleExpandedMenu}
            >
              cd
            </span>
          </div>
        </div>
      </div>

      {/* Mobile dropdown */}
      {expandedMenu && (
        <div className="absolute top-16 right-4 z-50 w-36 rounded-lg bg-slate-500/10 px-4 py-2 text-slate-50 backdrop-blur-lg sm:right-24 lg:hidden xl:right-64">
          <ul className="flex flex-col justify-end gap-1">
            {sections.map((s, i) => (
              <NavLink
                elmntId={s.id}
                isActive={activeId === s.id}
                key={i}
                isLast={true}
                onClick={() => setExpandedMenu(false)}
              >
                {s.label}
              </NavLink>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}

function NavLink({
  children,
  elmntId,
  isActive,
  isLast,
  onClick,
}: Readonly<{
  children: string;
  elmntId: string;
  isActive: boolean;
  isLast: boolean;
  onClick: VoidFunction | null;
}>) {
  return (
    // I wont use anchor tags because they show link at the bottom left when hovering.
    <span
      className={`cursor-pointer text-purple-50 transition-all select-none hover:text-white/90 ${isActive ? "font-bold" : "text-purple-200"} ${!isLast ? "border-r border-slate-50/10" : ""}`}
      onClick={() => {
        document
          .getElementById(elmntId)
          ?.scrollIntoView({ behavior: "smooth" });
        onClick?.();
      }}
    >
      <li>
        {isActive ? (
          <span className="text-emerald-600">./</span>
        ) : (
          <span className="text-rose-400">cd </span>
        )}
        <span
          className={`${isActive ? "text-emerald-600" : "text-purple-200"}`}
        >
          {children}
        </span>
      </li>
    </span>
  );
}
