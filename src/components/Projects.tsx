import { Github, ExternalLinkIcon } from "lucide-react";
import {
  PROJECTS as P,
  PROJECT_TECHSTACK as PT,
  PROJECT_IMG_PATHS as PIP,
} from "../content";

export default function Projects() {
  return (
    <section className="font-monoxxx flex flex-col gap-8" id="projects">
      <div className="about-header-animated w-fit cursor-default space-y-2">
        <h2 className="text-4xl text-slate-100 uppercase">Selected Projects</h2>
        <h3 className="font-thin tracking-widest text-slate-100">
          Here are some projects relevant to Softaware Engineering
        </h3>
      </div>

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
        />
      ))}
    </section>
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
        className="flex w-max gap-4 rounded-lg bg-slate-50/5 px-4 py-2 hover:cursor-pointer hover:border-slate-50/30 hover:bg-slate-50/10"
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
    <div className="space-y-2">
      <div className="flex items-end justify-between">
        <h4 className="text-2xl font-normal">{title}</h4>{" "}
        <span className="font-thin">{duration}</span>
      </div>
      <hr className="opacity-40" />
    </div>
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
      className={`flex flex-col items-center justify-center gap-16 pb-16 lg:h-96 ${reversed ? "lg:flex-row" : "lg:flex-row-reverse"} lg:items-start lg:[&>div]:h-full`}
    >
      <div className="flex flex-1/2 flex-col justify-center gap-4">
        <ProjectTitle title={title} duration={duration} />
        <div className="space-y-8">
          <p className="font-thin tracking-widest text-slate-100">{desc}</p>
          <p className="font-thin tracking-widest text-slate-100">
            <span className="font-semibold text-slate-100">Role: </span>
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
      <div className="flex w-full flex-1/2 items-center rounded-lg border border-white/10 lg:h-max">
        <div>
          <img src={imgs[0]} alt="" className="rounded-lg" />
        </div>
      </div>
    </div>
  );
}
