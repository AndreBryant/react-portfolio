export default function Hero() {
  return (
    <section className="relative flex h-screen items-center justify-center">
      <div className="flex h-full w-full items-center justify-center gap-16 bg-black/30 fill-transparent text-slate-50 backdrop-blur-3xl">
        <div className="cursor-default">
          <h1 className="text-4xl font-semibold">Hi! I'm Andre!</h1>
          <p className="text-xl opacity-60 transition-opacity hover:opacity-90">
            I'm a software developer.
          </p>
        </div>

        <div className="">
          <div className="group flex aspect-square h-64 items-center justify-center rounded-lg border border-white/20 bg-black/10 backdrop-blur-xs select-none">
            <p className="text-3xl font-semibold opacity-70 transition-opacity group-hover:opacity-90">
              ദ്ദി(˵ •̀ ᴗ - ˵ ) ✧
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
