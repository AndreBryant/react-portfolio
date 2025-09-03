import type { Dispatch, Ref, SetStateAction } from "react";

import {
  Github,
  ExternalLinkIcon,
  ChevronLeft,
  ChevronRight,
  X,
} from "lucide-react";
import {
  PROJECTS as P,
  PROJECT_TECHSTACK as PT,
  PROJECT_IMG_PATHS as PIP,
} from "../content";
import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

export default function Projects({
  sectionRef,
}: Readonly<{ sectionRef: Ref<HTMLElement> }>) {
  return (
    <section
      ref={sectionRef}
      className="relative -mx-4 flex min-h-screen flex-col gap-24 font-mono"
      id="projects"
    >
      <div className="space-y-16 bg-slate-950/10 px-4 py-16 shadow-xl shadow-black/60 outline outline-slate-50/25 backdrop-blur-[5px] md:rounded-lg lg:px-16">
        <h2 className="text-4xl">PROJECTS</h2>
        <div className="flex flex-col gap-32">
          {P.map((p, i) => {
            const pt = PT[i];
            const pip = PIP[i];
            return (
              <div
                className={`flex flex-col gap-16 ${i % 2 ? "lg:flex-row-reverse" : "lg:flex-row"}`}
                key={i}
              >
                <div className="flex flex-1/2 flex-col gap-8">
                  <ProjectHeader
                    title={p.name}
                    duration={p.duration}
                    type={p.type}
                  />
                  <ProjectBody
                    desc={p.desc}
                    role={p.role}
                    techStack={pt}
                    link={p.link}
                    isDeployed={JSON.parse(p.isDeployed)}
                    deploymentLink={p.deploymentLink}
                  />
                </div>
                <ProjectImage pip={pip} onLeft={i % 2 !== 0} />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function ProjectHeader({
  title,
  duration,
  type,
}: Readonly<{ title: string; duration: string; type: string }>) {
  return (
    <div>
      <div className="flex items-end justify-between gap-4">
        <h2 className="line-clamp-1 w-fit text-4xl font-semibold">{title}</h2>
        <span className="w-fit text-xs opacity-60">{duration}</span>
      </div>
      <div>
        <span className="w-fit text-sm opacity-60">{type}</span>
      </div>
    </div>
  );
}

function ProjectBody({
  desc,
  role,
  techStack,
  link,
  deploymentLink,
  isDeployed,
}: Readonly<{
  desc: string;
  role: string;
  techStack: string[];
  link: string;
  deploymentLink: string;
  isDeployed: boolean;
}>) {
  return (
    <div className="flex flex-col gap-4">
      <div className="min-h-32 space-y-1 text-sm">
        <p className="opacity-60">{desc}</p>
        <p className="font-semibold">
          Role: &nbsp;
          <span className="">{role}</span>
        </p>
      </div>
      <ul className="flex flex-wrap gap-4">
        {techStack.map((tech, i) => (
          <TechBadge tool={tech} key={i} />
        ))}
      </ul>
      <div className="flex flex-wrap gap-4">
        <div>
          <RepoButton link={link} isDeployment={false} />
        </div>
        {isDeployed && (
          <div>
            <RepoButton
              link={link}
              isDeployment={isDeployed}
              deploymentLink={deploymentLink}
            />
          </div>
        )}
      </div>
    </div>
  );
}

function ProjectImage({
  pip,
  onLeft,
}: Readonly<{ pip: string[]; onLeft: boolean }>) {
  const [expanded, setExpanded] = useState(false);
  const popover = <PopoverGallery imgPaths={pip} setExpanded={setExpanded} />;

  return (
    <>
      <div className="relative flex flex-1/2 basis-xl items-center justify-center rounded-xl bg-gradient-to-bl from-violet-600/80 to-fuchsia-600/80 backdrop-blur-lg lg:py-8">
        <div
          className={`group absolute h-64 rounded-xl shadow-2xl shadow-black ${onLeft ? "lg:-translate-x-1/4" : "lg:translate-x-1/4"}`}
          onClick={() => {
            setExpanded(true);
          }}
        >
          <img
            src={pip[0]}
            alt={pip[0]}
            className={`h-64 cursor-pointer rounded-xl outline-2 outline-slate-50/25 transition-all group-hover:outline-slate-50/40 group-hover:brightness-110 lg:w-auto lg:max-w-none`}
          />
          <div
            className={`${onLeft ? "right-4 justify-end" : "left-4 justify-start"} absolute bottom-2 flex w-full opacity-80 select-none group-hover:opacity-100`}
          >
            <p className="rounded-lg bg-black/60 px-2 py-1 text-xs text-slate-50/80 outline outline-slate-50/40 backdrop-blur-sm">
              {pip.length} images
            </p>
          </div>
        </div>
      </div>
      {expanded && createPortal(popover, document.body)}
    </>
  );
}

function PopoverGallery({
  imgPaths,
  setExpanded,
}: Readonly<{
  imgPaths: string[];
  setExpanded: Dispatch<SetStateAction<boolean>>;
}>) {
  const useImageLoaded = () => {
    const [loaded, setLoaded] = useState(false);
    const ref = useRef<HTMLImageElement | null>(null);

    const onLoad = () => {
      setLoaded(true);
    };

    const switchImg = () => {
      setLoaded(false);
    };

    useEffect(() => {
      if (ref.current && ref.current.complete) {
        onLoad();
      }
    }, []);

    return { ref, loaded, onLoad, switchImg };
  };

  const updateIndex = (inc: number) => {
    const newValue = index + inc;

    if (newValue < 0) {
      return;
    }
    if (newValue >= imgPaths.length) {
      return;
    }

    setActiveLeft(newValue !== 0);
    setActiveRight(newValue !== imgPaths.length - 1);
    switchImg();

    setIndex(newValue);
  };

  const [index, setIndex] = useState(0);
  const [activeLeft, setActiveLeft] = useState(false);
  const [activeRight, setActiveRight] = useState(true);
  const { ref, loaded, onLoad, switchImg } = useImageLoaded();

  useEffect(() => {
    const body = document.body;
    const html = document.documentElement;

    body.style.overflowY = "hidden";
    html.style.overflowY = "hidden";

    return () => {
      body.style.overflowY = "";
      html.style.overflowY = "";
    };
  }, []);

  return (
    <div
      className="fixed inset-0 z-10 flex items-center justify-center bg-black/80 select-none"
      onClick={() => setExpanded(false)} // close on background click
    >
      <div
        className="rounded-lg shadow-xl transition-all"
        onClick={(e) => e.stopPropagation()}
      >
        {!loaded && (
          <div className="pointer-events-none fixed top-1/2 left-1/2 -translate-1/2 items-center justify-center">
            <div className="h-8 w-8 animate-spin rounded-full border-4 border-white border-t-transparent" />
          </div>
        )}
        <img
          ref={ref}
          onLoad={onLoad}
          src={imgPaths[index]}
          alt={imgPaths[index]}
          className={`max-h-[80vh] max-w-[80vw] rounded outline-2 outline-slate-50/40 transition-opacity duration-300 ${
            loaded ? "opacity-100" : "opacity-0"
          }`}
        />
      </div>
      <div
        className="fixed inset-8 z-20 flex items-end justify-between lg:items-center"
        onClick={(e) => e.stopPropagation()}
      >
        <div
          className={`z-50 rounded-lg bg-slate-50/10 p-2 text-slate-50 hover:bg-slate-50/20 ${!activeLeft ? "pointer-events-none opacity-60" : "cursor-pointer"}`}
          onClick={() => updateIndex(-1)}
        >
          <ChevronLeft />
        </div>
        <div
          className={`z-50 rounded-lg bg-slate-50/10 p-2 text-slate-50 hover:bg-slate-50/20 ${!activeRight ? "pointer-events-none opacity-60" : "cursor-pointer"}`}
          onClick={() => updateIndex(1)}
        >
          <ChevronRight />
        </div>
      </div>
      <div className="pointer-events-none fixed inset-8 flex items-end justify-center">
        <p className="rounded-lg bg-slate-50/10 px-2 py-1 font-mono text-sm font-thin text-slate-50">
          {index + 1} / {imgPaths.length}
        </p>
      </div>
      <div className="fixed inset-8 z-20 flex h-fit">
        <div className="cursor-pointer rounded-lg bg-slate-50/10 p-2 text-slate-50/60 hover:bg-slate-50/20 hover:text-slate-50">
          <X />
        </div>
      </div>
    </div>
  );
}

// this can be refactored to only use 1 link prop

function RepoButton({
  link,
  isDeployment,
  deploymentLink,
}: Readonly<{ link: string; isDeployment: boolean; deploymentLink?: string }>) {
  const goTo = (link: string) => {
    window.open(isDeployment ? deploymentLink : link, "_blank");
  };

  return (
    <div>
      <span
        onClick={() => {
          goTo(link);
        }}
        className="flex w-max gap-4 rounded-lg bg-slate-50/5 px-4 py-2 hover:cursor-pointer hover:bg-slate-50/10"
      >
        {!isDeployment && (
          <>
            <Github /> <span className="hidden lg:inline">Repository</span>
          </>
        )}
        {isDeployment && (
          <>
            <ExternalLinkIcon />
            <span className="hidden lg:inline">Deployment</span>
          </>
        )}
      </span>
    </div>
  );
}

function TechBadge({ tool }: Readonly<{ tool: string }>) {
  return (
    <span className="w-max cursor-default rounded-lg bg-slate-400/10 px-2 py-1 text-sm hover:bg-slate-400/20">
      {tool}
    </span>
  );
}
