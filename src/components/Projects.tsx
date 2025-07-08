import { Github } from "lucide-react";

export default function Projects() {
  return (
    <section className="flex flex-col gap-8" id="projects">
      <div className="about-header-animated w-fit cursor-default space-y-2">
        <h2 className="text-4xl text-slate-100 uppercase">Selected Projects</h2>
        <h3 className="font-thin tracking-widest text-slate-100">
          Here are some projects relevant to Softaware Engineering
        </h3>
      </div>

      <ProjectItem
        title="UPB Subaybay"
        techStack={["SvelteKit", "TailwindCSS", "Shadcn-svelte", "MongoDB"]}
        link="https://google.com"
      />
    </section>
  );
}

function RepoButton({ link }: Readonly<{ link: string }>) {
  const goTo = (link: string) => {
    window.open(link, "_blank");
  };

  return (
    <div>
      <span
        onClick={() => {
          goTo(link);
        }}
        className="flex w-max gap-4 rounded-full border border-slate-50/20 bg-slate-50/5 px-4 py-2 hover:cursor-pointer hover:border-slate-50/30 hover:bg-slate-50/10"
      >
        <Github /> Visit repository
      </span>
    </div>
  );
}

function TechBadge({ tool }: Readonly<{ tool: string }>) {
  return <span className="w-max px-1 py-1">{tool}</span>;
}

function ProjectTitle({ title }: Readonly<{ title: string }>) {
  return (
    <div className="space-y-2">
      <h4 className="text-2xl font-normal">{title}</h4>
      <hr className="opacity-40" />
    </div>
  );
}

function ProjectItem({
  title,
  techStack,
  link,
}: Readonly<{ title: string; techStack: string[]; link: string }>) {
  return (
    <div className="flex flex-col-reverse items-center justify-center gap-16 lg:h-96 lg:flex-row lg:items-start lg:[&>div]:h-full">
      <div className="flex flex-1/2 flex-col justify-center gap-4">
        <ProjectTitle title={title} />
        <div className="space-y-8">
          <p className="font-thin tracking-widest text-slate-100">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis
            nemo maxime ipsum pariatur possimus architecto cumque sed qui
            assumenda. Laboriosam officia possimus, sapiente corporis veritatis
            eius illo enim cum soluta.
          </p>
          <div className="inline-flex gap-2">
            {techStack.map((s: string) => (
              <TechBadge tool={s} />
            ))}
          </div>
          <RepoButton link={link} />
        </div>
      </div>
      <div className="h-max w-full flex-1/2 border border-white/10"></div>
    </div>
  );
}
