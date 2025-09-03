import { useEffect, useState, type RefObject } from "react";

// google search AI
function getVisibleArea(element: HTMLElement | null) {
  if (!element) return null;

  const rect = element.getBoundingClientRect();
  const viewportHeight =
    window.innerHeight || document.documentElement.clientHeight;
  const viewportWidth =
    window.innerWidth || document.documentElement.clientWidth;

  // Calculate intersection coordinates
  const visibleTop = Math.max(0, rect.top);
  const visibleBottom = Math.min(viewportHeight, rect.bottom);
  const visibleLeft = Math.max(0, rect.left);
  const visibleRight = Math.min(viewportWidth, rect.right);

  // Calculate visible dimensions and area
  const visibleHeight = Math.max(0, visibleBottom - visibleTop);
  const visibleWidth = Math.max(0, visibleRight - visibleLeft);
  const visibleArea = visibleWidth * visibleHeight;

  return {
    visibleHeight,
    visibleWidth,
    visibleArea,
    isVisible: visibleHeight > 0 && visibleWidth > 0,
  };
}

export default function NavBar({
  sectionRefs,
}: Readonly<{ sectionRefs: Record<string, RefObject<HTMLElement>> }>) {
  const [activeId, setActiveId] = useState<string | null>("hero");
  const [expandedMenu, setExpandedMenu] = useState<boolean>(false);
  const toggleExpandedMenu = () => setExpandedMenu(!expandedMenu);

  useEffect(() => {
    let ticking = false;

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          let id: string | null = "";
          let max = 0;

          Object.values(sectionRefs).forEach((ref) => {
            const area = getVisibleArea(ref.current)?.visibleArea ?? 0;

            if (area >= max) {
              max = area;
              id = ref.current?.id ?? null;
            }
          });

          setActiveId((prev) => (id && id !== prev ? id : prev));
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll(); // initial check

    return () => window.removeEventListener("scroll", onScroll);
  }, [sectionRefs]);

  const sections: Record<string, string>[] = [
    { label: "home", id: "hero" },
    { label: "about", id: "about" },
    { label: "projects", id: "projects" },
    { label: "contact", id: "contact" },
  ];

  return (
    <nav className="fixed top-8 z-50 block w-full px-4 font-mono select-none sm:px-24 md:px-32 xl:px-64 2xl:px-96">
      <div className="relative mx-auto flex items-center justify-between rounded-xl bg-slate-500/20 px-8 py-4 backdrop-blur-lg">
        {/* Left logo */}
        <div
          className="group flex items-center gap-4"
          onClick={() =>
            document
              .getElementById("hero")
              ?.scrollIntoView({ behavior: "smooth" })
          }
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
