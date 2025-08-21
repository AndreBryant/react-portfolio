import {
  Github,
  ExternalLinkIcon,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import {
  PROJECTS as P,
  PROJECT_TECHSTACK as PT,
  PROJECT_IMG_PATHS as PIP,
} from "../content";
import { useState } from "react";

export default function Projects() {
  return (
    <section className="font-monoxxx flex flex-col gap-24" id="projects">
      <div className="about-header-animated w-fit cursor-default space-y-2">
        <h2 className="text-4xl text-slate-300 uppercase">Selected Projects</h2>
        <h3 className="font-thin tracking-widest text-slate-300">
          Here are some projects relevant to Software Engineering
        </h3>
      </div>

      <div className="flex flex-col gap-16">
        {P.map((proj, i) => (
          <ProjectItem
            title={proj.name}
            duration={proj.duration}
            desc={proj.desc}
            role={proj.role}
            imgs={PIP[i]}
            techStack={PT[i]}
            link={proj.link}
            reversed={i % 2 === 0}
            isDeployed={JSON.parse(proj.isDeployed)}
            deploymentLink={proj.deploymentLink}
            key={i}
          />
        ))}
      </div>
    </section>
  );
}

function ProjectItem({
  title,
  duration,
  desc,
  role,
  imgs,
  techStack,
  link,
  reversed,
  isDeployed,
  deploymentLink,
}: Readonly<{
  title: string;
  duration: string;
  desc: string;
  role: string;
  imgs: string[];
  techStack: string[];
  link: string;
  reversed: boolean;
  isDeployed: boolean;
  deploymentLink?: string;
}>) {
  return (
    <div
      className={`flex flex-col items-center justify-center gap-8 rounded-lg bg-slate-300/5 px-8 py-8 backdrop-blur-lg lg:h-96 lg:px-0 lg:py-0 ${reversed ? "lg:flex-row lg:pl-16" : "lg:flex-row-reverse lg:pr-16"}`}
    >
      <div className="flex w-full flex-col justify-center gap-4 lg:h-full lg:w-auto lg:flex-1/2">
        <ProjectTitle title={title} duration={duration} />
        <div className="space-y-8">
          <p className="font-thin tracking-widest text-slate-300">{desc}</p>
          <p className="font-thin tracking-widest text-slate-300">
            <span className="font-semibold text-slate-300">Role: </span>
            {role}
          </p>
          <div className="inline-flex flex-wrap gap-2">
            {techStack.map((s: string) => (
              <TechBadge tool={s} />
            ))}
          </div>
          <div className="flex gap-4">
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
      </div>
      <div className="flex h-full w-full items-center lg:w-auto lg:flex-1/2">
        <ImgGallery imgs={imgs} />
      </div>
    </div>
  );
}

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
            <Github /> Visit repository
          </>
        )}
        {isDeployment && (
          <>
            <ExternalLinkIcon />
            View Deployment
          </>
        )}
      </span>
    </div>
  );
}

function TechBadge({ tool }: Readonly<{ tool: string }>) {
  return (
    <span className="w-max cursor-default rounded-lg px-1 py-1 hover:bg-slate-400/20">
      {tool}
    </span>
  );
}

function ProjectTitle({
  title,
  duration,
}: Readonly<{ title: string; duration: string }>) {
  return (
    <div className="space-y-1">
      <div className="flex items-end justify-between">
        <h4 className="text-2xl font-normal text-slate-300">{title}</h4>{" "}
        <span className="font-thin">{duration}</span>
      </div>
      <hr className="opacity-40" />
    </div>
  );
}

function ImgGallery({ imgs }: Readonly<{ imgs: string[] }>) {
  const [index, setIndex] = useState(0);

  function updateIndex(change: 1 | -1) {
    const newIndex = index + change;
    if (newIndex > imgs.length - 1) return;
    if (newIndex < 0) return;

    setIndex(newIndex);
  }
  return (
    <div className="group relative h-full w-full overflow-hidden rounded-lg border border-slate-50/10">
      <img src={imgs[index]} alt="" className="m-auto h-full object-contain" />
      <div className="absolute inset-0 rounded-lg bg-[radial-gradient(circle,transparent_30%,rgba(0,0,0,0.4)_100%)] transition-colors hover:bg-none"></div>
      {/* buttons */}
      <div className="invisible absolute top-1/2 left-0 translate-x-1/2 translate-y-1/2 group-hover:visible">
        <button
          className="rounded-lg text-slate-50 transition hover:bg-slate-50/10"
          onClick={() => updateIndex(-1)}
        >
          <ChevronLeft />
        </button>
      </div>
      <div className="invisible absolute top-1/2 right-8 translate-x-1/2 translate-y-1/2 group-hover:visible">
        <button
          className="rounded-lg text-slate-50 transition hover:bg-slate-50/10"
          onClick={() => updateIndex(1)}
        >
          <ChevronRight />
        </button>
      </div>
    </div>
  );
}
