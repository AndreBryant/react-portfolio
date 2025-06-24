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
    <section className="relative flex h-screen flex-col gap-8 py-32" id="about">
      <h2 className="text-4xl">About me</h2>

      <div className="flex flex-col gap-8 border px-8 py-4 lg:flex-row">
        <div className="flex flex-1/2 flex-col gap-4">
          <UnorderedList list={educationListContent} header="Education" />
        </div>

        <div className="flex flex-1/2 flex-col gap-4">
          <UnorderedList
            list={experienceListContent}
            header="Organizations / Experience"
          />
        </div>
      </div>
    </section>
  );
}

function ListItem({ li }: { li: LI }) {
  return (
    <li>
      <div>
        <p>
          {li.title} <span>({li.duration})</span>
        </p>
        <ul>
          {li.desc.map((desc, index) => (
            <li key={index}>{desc}</li>
          ))}
        </ul>
      </div>
    </li>
  );
}

function UnorderedList({ list, header }: { list: LI[]; header: string }) {
  return (
    <>
      <h3 className="text-xl">{header}</h3>
      <ul>
        {list.map((li, index) => (
          <ListItem key={index} li={li} />
        ))}
      </ul>
    </>
  );
}
