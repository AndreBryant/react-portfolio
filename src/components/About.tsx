type LI = {
  title: string;
  duration: string;
  desc: string[];
};

export default function About() {
  const educationListContent: LI[] = [
    {
      title: "University of the Philippines",
      duration: "2021-2025",
      desc: ["Bachelor of Science in Computer Science", "Cum Laude"],
    },
    {
      title: "Calamba City Science Integrated School",
      duration: "2019-2021",
      desc: ["STEM", "With Honors"],
    },
    {
      title: "DOST-SEI Scholar",
      duration: "2023-2025",
      desc: ["JLSS 2023 Awardee"],
    },
  ];

  const experienceListContent: LI[] = [
    {
      title: "COMSCI@UP.BAG Resident Member",
      duration: "2022-2025",
      desc: ["Research Committee member"],
    },
    {
      title: "DOST Internship",
      duration: "June - August 2024",
      desc: [
        "Software Developer Intern under the Project LODI",
        "completed 240 hours",
      ],
    },
  ];

  return (
    <section
      className="relative flex h-screen flex-col gap-8 py-32 sm:px-24 xl:px-64"
      id="about"
    >
      <h2 className="text-4xl">About me</h2>

      <div className="flex flex-col gap-8 lg:flex-row">
        <UnorderedList list={educationListContent} header="Education" />
        <UnorderedList
          list={experienceListContent}
          header="Organizations/Experience"
        />
      </div>
    </section>
  );
}

function ListItem({ li }: { li: LI }) {
  return (
    <li>
      <div className="flex flex-col">
        <div className="flex gap-4 text-slate-50/90">
          <span>{li.title}</span>
          <span className="flex grow flex-col justify-center">
            <hr className="text-white/30" />
          </span>
          <span>({li.duration})</span>
        </div>
        <ul>
          {li.desc.map((desc, index) => (
            <li key={index} className="text-sm text-slate-50/50">
              {desc}
            </li>
          ))}
        </ul>
      </div>
    </li>
  );
}

function UnorderedList({ list, header }: { list: LI[]; header: string }) {
  return (
    <div className="flex flex-1/2 flex-col gap-4 rounded-lg border border-white/10 bg-black/10 px-8 py-6 backdrop-blur-md">
      <h3 className="text-xl">{header}</h3>
      <hr className="text-white/10" />
      <ul className="space-y-4">
        {list.map((li, index) => (
          <ListItem key={index} li={li} />
        ))}
      </ul>
    </div>
  );
}
