export default function NavBar() {
  return (
    <nav className="fixed top-0 z-50 flex h-32 w-full items-center justify-between px-24 text-white backdrop-blur-xs xl:px-64">
      <div
        className="cursor-default rounded-full border border-white/60 bg-black/20 px-2 py-1 transition-transform hover:border-white/90 hover:font-semibold"
        title="I dont know how to make logo or brand identity yet. Sorry"
      >
        <span className="font-mono">T_,T</span>
      </div>
      <div>
        <ul className="flex gap-8">
          <NavLink targetHref="/#about" isActive={false}>
            About Me
          </NavLink>
          <NavLink targetHref="/#projects" isActive={true}>
            Projects
          </NavLink>
          <NavLink targetHref="/#contact" isActive={false}>
            Contact Me
          </NavLink>
        </ul>
      </div>
    </nav>
  );
}
function NavLink({
  children,
  targetHref,
  isActive,
}: Readonly<{ children: string; targetHref: string; isActive: boolean }>) {
  return (
    // I wont use anchor tags because they show link at the bottom left when hovering.
    <span
      className={`cursor-pointer text-white/70 transition-opacity select-none hover:text-white/90 ${isActive ? "text-white/90 underline underline-offset-2" : "text-white/70"}`}
      onClick={() => {
        window.location.href = targetHref;
      }}
    >
      <li>{children}</li>
    </span>
  );
}
