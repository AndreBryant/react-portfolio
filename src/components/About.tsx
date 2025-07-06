export default function About() {
  return (
    <section className="relative flex flex-col gap-8" id="about">
      <div className="about-header-animated w-fit cursor-default space-y-2">
        <h2 className="text-4xl text-slate-100 uppercase">Overview</h2>
        <h3 className="font-thin tracking-widest text-slate-100">
          Get to know me
        </h3>
      </div>

      <div className="flex flex-col items-center justify-center gap-16 lg:h-96 lg:flex-row lg:items-start lg:[&>div]:h-full">
        <div className="flex w-full flex-1/3 items-center justify-center border-b border-slate-50/40 py-8">
          <div className="about-me-img flex h-64 w-64 flex-col items-center justify-center bg-purple-100/10">
            <p className="text-4xl font-thin text-purple-50/20">◝(ᵔᗜᵔ)◜</p>
            <p className="text-4xl font-thin text-purple-50/20">img here</p>
          </div>
        </div>
        <div className="flex flex-2/3 flex-col items-center justify-center gap-6 font-thin tracking-widest text-slate-50">
          <div className="space-y-4">
            <h4 className="text-4xl font-normal">About me</h4>
            <hr className="opacity-40" />
          </div>
          <div className="">
            <p>
              Hello, I am{" "}
              <span className="font-normal text-purple-300">Andre Bryant</span>,
              a computer science fresh graduate from the{" "}
              <span className="font-normal text-purple-300">
                University of the Philippines{" "}
              </span>
              and an aspiring professional software developer . I was also a{" "}
              <span className="font-normal text-purple-300">
                DOST-SEI JLSS scholar{" "}
              </span>
              from 2023 - 2025.
              <br />
              <br />I enjoy using modern web frameworks such as{" "}
              <span className="font-normal text-purple-300">
                SvelteKit
              </span> &{" "}
              <span className="font-normal text-purple-300">NextJS</span>, and
              libraries such as{" "}
              <span className="font-normal text-purple-300">p5.js</span> for
              creative coding.
            </p>
          </div>
        </div>
        <div className="w-full flex-1/3 border-t border-slate-50/40 lg:h-full"></div>
      </div>
    </section>
  );
}

// type LI = {
//   title: string;
//   duration: string;
//   desc: string[];
// };

// export default function About() {
//   const educationListContent: LI[] = [
//     {
//       title: "University of the Philippines",
//       duration: "2021-2025",
//       desc: ["Bachelor of Science in Computer Science", "Cum Laude"],
//     },
//     {
//       title: "Calamba City Science Integrated School",
//       duration: "2019-2021",
//       desc: ["STEM", "With Honors"],
//     },
//     {
//       title: "DOST-SEI Scholar",
//       duration: "2023-2025",
//       desc: ["JLSS 2023 Awardee"],
//     },
//   ];

//   const experienceListContent: LI[] = [
//     {
//       title: "COMSCI@UP.BAG Resident Member",
//       duration: "2022-2025",
//       desc: ["Research Committee member"],
//     },
//     {
//       title: "DOST Internship",
//       duration: "June - August 2024",
//       desc: [
//         "Software Developer Intern under the Project LODI",
//         "completed 240 hours",
//       ],
//     },
//   ];

//   return (
//     <section
//       className="relative flex h-screen flex-col gap-8 py-32 sm:px-24 xl:px-64"
//       id="about"
//     >
//       <h2 className="text-4xl">About me</h2>

//       <div className="flex flex-col gap-8 lg:flex-row">
//         <UnorderedList list={educationListContent} header="Education" />
//         <UnorderedList
//           list={experienceListContent}
//           header="Organizations/Experience"
//         />
//       </div>
//     </section>
//   );
// }

// function ListItem({ li }: { li: LI }) {
//   return (
//     <li>
//       <div className="flex flex-col">
//         <div className="flex gap-4 text-slate-50/90">
//           <span>{li.title}</span>
//           <span className="flex grow flex-col justify-center">
//             <hr className="text-white/30" />
//           </span>
//           <span>({li.duration})</span>
//         </div>
//         <ul>
//           {li.desc.map((desc, index) => (
//             <li key={index} className="text-sm text-slate-50/50">
//               {desc}
//             </li>
//           ))}
//         </ul>
//       </div>
//     </li>
//   );
// }

// function UnorderedList({ list, header }: { list: LI[]; header: string }) {
//   return (
//     <div className="flex flex-1/2 flex-col gap-4 rounded-lg border border-white/10 bg-black/10 px-8 py-6 backdrop-blur-md">
//       <h3 className="text-xl">{header}</h3>
//       <hr className="text-white/10" />
//       <ul className="space-y-4">
//         {list.map((li, index) => (
//           <ListItem key={index} li={li} />
//         ))}
//       </ul>
//     </div>
//   );
// }
