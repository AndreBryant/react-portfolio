import { ArrowDown } from "lucide-react";

export default function Hero() {
  const scrollWindow = () => {
    window.scrollTo({ top: window.innerHeight, behavior: "smooth" });
  };

  return (
    <section className="relative flex h-screen items-center justify-center select-none">
      <div className="flex h-full w-full items-center justify-center gap-16">
        <div className="cursor-default">
          <h1 className="text-4xl font-semibold">Hi! I'm Andre!</h1>
          <p className="text-xl opacity-60 transition-opacity hover:opacity-90">
            I'm a software developer.
          </p>
        </div>

        <div className="">
          <div className="group flex aspect-square h-64 items-center justify-center rounded-lg border border-white/20 bg-black/10 backdrop-blur-xs">
            <p className="text-3xl font-semibold opacity-70 transition-opacity group-hover:opacity-90">
              ദ്ദി(˵ •̀ ᴗ - ˵ ) ✧
            </p>
          </div>
        </div>

        <div className="absolute flex h-full w-full flex-col-reverse items-center justify-start gap-8 pb-16">
          <button
            className="peer rounded-full border border-white/20 p-2 text-white/60 transition-all hover:bg-white/20 hover:p-3 hover:text-white/90"
            onClick={scrollWindow}
          >
            <ArrowDown />
          </button>
          <span className="text-white/10 peer-hover:text-white/30">
            Click to go to next section...
          </span>
        </div>
      </div>
    </section>
  );
}
