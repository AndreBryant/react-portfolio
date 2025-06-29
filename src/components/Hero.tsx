import { ArrowDown, ArrowUp } from "lucide-react";

export default function Hero() {
  return (
    <section
      className="relative flex h-screen items-center justify-center select-none"
      id="hero"
    >
      <div className="absolute flex h-full w-full flex-col-reverse items-center justify-start gap-8 pb-16">
        <div className="flex items-center gap-2 text-white/20 peer-hover:text-white/30">
          Press
          <span className="rounded-lg border border-white/15 bg-black/20 p-0.5">
            <ArrowDown />
          </span>
          or{" "}
          <span className="rounded-lg border border-white/15 bg-black/20 p-0.5">
            <ArrowUp />
          </span>
          buttons to navigate or scroll...
        </div>
      </div>

      <div className="flex h-full w-full flex-col-reverse items-center justify-center gap-16 md:flex-row">
        <div className="cursor-default md:flex-3/5">
          <h1 className="text-4xl font-semibold">Hi! I'm Andre.</h1>
          <p className="text-xl opacity-70 transition-opacity hover:opacity-90">
            Welcome! I'm a software developer, and this is a{" "}
            <strong>temporary</strong> version of my portfolio. A more complete
            experience is on the way — stay tuned!
          </p>
        </div>

        <div className="md:flex-2/5">
          <div className="group flex aspect-square h-64 items-center justify-center rounded-lg border border-white/20 bg-black/10 backdrop-blur-xs">
            <p className="text-3xl font-semibold opacity-70 transition-opacity group-hover:opacity-90">
              ദ്ദി(˵ •̀ ᴗ - ˵ ) ✧
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
