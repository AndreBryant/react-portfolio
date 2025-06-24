export default function About() {
  return (
    <section className="relative flex h-screen flex-col py-32" id="about">
      {/* Education */}
      <div className="">
        <h2>Education</h2>
        <ul>
          <li>UPB (2021 - 2025)</li>
          <li>Calamba Science (2019 - 2021)</li>
          <li>DOST SEI JLSS Scholar (2023 - 2025)</li>
        </ul>
      </div>

      {/* Organizations and Experience*/}
      <div className="">
        <h2>Organizations / Experience</h2>
        <ul>
          <li>
            COMSCI@UP.BAG Research Committee Resident Member (2022 - 2025)
          </li>
          <li>
            Software Developer Intern at DOST (June - August 2024) - Under the
            Project LODI
          </li>
        </ul>
      </div>
    </section>
  );
}
