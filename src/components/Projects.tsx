import {
  Github,
  ExternalLinkIcon,
  // ChevronLeft,
  // ChevronRight,
} from "lucide-react";
import {
  PROJECTS as P,
  PROJECT_TECHSTACK as PT,
  PROJECT_IMG_PATHS as PIP,
} from "../content";
// import { useState } from "react";

export default function Projects() {
  return (
    <section
      className="relative -mx-4 flex min-h-screen flex-col gap-24 font-mono"
      id="projects"
    >
      <div className="space-y-16 bg-slate-950/10 px-4 py-16 outline outline-slate-50/25 backdrop-blur-[5px] md:rounded-lg lg:px-16">
        <h2 className="text-4xl">PROJECTS</h2>
        <div className="flex flex-col gap-32">
          {P.map((p, i) => {
            const pt = PT[i];
            const pip = PIP[i][0];

            return (
              <div
                className={`flex flex-col gap-16 ${i % 2 ? "lg:flex-row-reverse" : "lg:flex-row"}`}
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
                    link={p.Link}
                    isDeployed={JSON.parse(p.isDeployed)}
                    deploymentLink={p.deploymentLink}
                  />
                </div>
                <ProjectImage src={pip} onLeft={i % 2 !== 0} />
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
        <h2 className="w-fit text-4xl font-semibold">{title}</h2>
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
  src,
  onLeft,
}: Readonly<{ src: string; onLeft: boolean }>) {
  return (
    <div className="relative flex flex-1/2 basis-xl items-center justify-center rounded-xl bg-gradient-to-bl from-violet-600/80 to-fuchsia-600/80 backdrop-blur-lg lg:py-8">
      <div
        className={`absolute h-64 rounded-xl shadow-2xl shadow-black ${onLeft ? "lg:-translate-x-1/4" : "lg:translate-x-1/4"}`}
        // ${onLeft ? "lg:-translate-x-16" : "lg:translate-x-16"}
      >
        <img
          src={src}
          alt={src}
          className={`h-64 rounded-xl outline-2 outline-slate-50/25 lg:w-auto lg:max-w-none`}
        />
      </div>
    </div>
  );
}

// function ImgGallery({ imgs }: Readonly<{ imgs: string[] }>) {
//   const [index, setIndex] = useState(0);
//   const [atStart, setAtStart] = useState(true);
//   const [atEnd, setAtEnd] = useState(false);

//   function updateIndex(change: 1 | -1) {
//     const newIndex = index + change;
//     if (newIndex > imgs.length - 1) return;
//     if (newIndex < 0) return;

//     setIndex(newIndex);

//     setAtStart(newIndex === 0);
//     setAtEnd(newIndex === imgs.length - 1);
//   }
//   return (
//     <div className="group relative h-96 w-full overflow-hidden rounded-lg border border-slate-50/10 lg:h-full">
//       <img src={imgs[index]} alt="" className="m-auto h-full object-contain" />
//       <div className="absolute inset-0 rounded-lg bg-[radial-gradient(circle,transparent_30%,rgba(0,0,0,0.4)_100%)] transition-colors hover:bg-none"></div>
//       {/* buttons */}
//       <div className="invisible absolute top-1/2 left-0 translate-x-1/2 translate-y-1/2 group-hover:visible">
//         <button
//           disabled={atStart}
//           className={`rounded-lg transition ${atStart ? "text-slate-50/50" : "text-slate-50 hover:bg-slate-50/10"}`}
//           onClick={() => updateIndex(-1)}
//         >
//           <ChevronLeft />
//         </button>
//       </div>
//       <div className="invisible absolute top-1/2 right-8 translate-x-1/2 translate-y-1/2 group-hover:visible">
//         <button
//           disabled={atEnd}
//           className={`rounded-lg transition ${atEnd ? "text-slate-50/50" : "text-slate-50 hover:bg-slate-50/10"}`}
//           onClick={() => updateIndex(1)}
//         >
//           <ChevronRight />
//         </button>
//       </div>
//     </div>
//   );
// }

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
