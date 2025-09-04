import { type Ref } from "react";
import { ABOUT } from "../content";
// import CV from "/assets/cv-resume/cv.pdf";
// import RESUME from "/assets/cv-resume/resume.pdf";

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
          <div className="about-me-imgxxx flex h-64 w-64 flex-col items-center justify-center rounded-full bg-gradient-to-bl from-violet-600/80 to-fuchsia-600/80">
            <p className="text-4xl font-thin text-purple-50/20">◝(ᵔᗜᵔ)◜</p>
            <p className="text-4xl font-thin text-purple-50/20">img here</p>
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
