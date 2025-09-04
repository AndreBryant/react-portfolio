import { type Ref } from "react";
import { ABOUT } from "../content";
import SABLAY from "../assets/sablay_cropped.png";

export default function About({
  sectionRef,
}: Readonly<{ sectionRef: Ref<HTMLElement> }>) {
  return (
    <section
      ref={sectionRef}
      className="relative -mx-8 flex min-h-fit flex-col gap-8 bg-black/20 font-mono shadow-xl shadow-black/60 outline outline-slate-400/20 backdrop-blur-sm lg:py-16! lg:pb-32!"
      id="about"
    >
      <div className="about-header-animated w-fit cursor-default">
        <h2 className="text-4xl text-slate-100/80 uppercase">Overview</h2>
      </div>

      <div className="flex flex-col items-center justify-center gap-16 lg:h-96 lg:flex-row lg:items-start lg:[&>div]:h-full">
        <div className="flex w-full flex-1/3 items-center justify-center border-b border-slate-50/20 py-8">
          <div className="flex h-96 items-end overflow-hidden rounded-b-full border-b lg:mb-32">
            <div className="flex h-64 w-64 flex-col items-center justify-center rounded-full bg-gradient-to-bl from-red-950/80 to-amber-400/80 shadow-2xl shadow-amber-300 select-none">
              <img
                src={SABLAY}
                alt=""
                className="object-cover shadow-black/80 transition"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-2/3 flex-col items-center justify-center gap-6 font-thin tracking-widest text-slate-50">
          <div className="space-y-4">
            <h4 className="text-salte-50/80 text-4xl">About me</h4>
            <hr className="opacity-20" />
          </div>
          <div className="space-y-4">
            <p className="text-sm tracking-tight text-slate-50/70">
              {ABOUT.intro}
            </p>
            <p className="text-sm tracking-tight text-slate-50/70">
              {ABOUT.likes}
            </p>
          </div>
        </div>
        <div className="w-full flex-1/3 border-t border-slate-50/20 lg:h-full">
          <div className="mt-8 flex w-full gap-8 lg:flex-col">
            <div className="flex items-end gap-4">
              <a
                href={ABOUT.credentials.CV}
                download="ANDRE_BAGALSO_CV"
                target="_blank"
              >
                <button className="cursor-pointer rounded-lg bg-slate-50/10 px-2 py-1 text-slate-50/70 outline outline-slate-50/10 hover:bg-slate-50/20 hover:text-slate-50/90 hover:outline-slate-50/20">
                  <span className="text-sm tracking-widest">CV</span>
                </button>
              </a>
              <span className="text-xs opacity-40">
                last updated Aug. 26, 2025
              </span>
            </div>
            <div className="flex items-end gap-4">
              <a
                href={ABOUT.credentials.RESUME}
                download="ANDRE_BAGALSO_RESUME"
                target="_blank"
              >
                <button className="cursor-pointer rounded-lg bg-slate-50/10 px-2 py-1 text-slate-50/70 outline outline-slate-50/10 hover:bg-slate-50/20 hover:text-slate-50/90 hover:outline-slate-50/20">
                  <span className="text-sm tracking-widest">résumé</span>
                </button>
              </a>
              <span className="text-xs opacity-40">
                last updated Aug. 26, 2025
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
