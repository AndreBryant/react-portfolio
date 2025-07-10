import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import Contact from "./components/Contact";
import Projects from "./components/Projects";

export default function App() {
  return (
    <div className="relative w-screen overflow-y-auto">
      <NavBar />
      <div className="bg-[#131313] text-slate-50 [&>section]:px-4 [&>section]:py-32 [&>section]:sm:px-24 [&>section]:xl:px-64">
        <Hero />
        <Projects />
        <Contact />
      </div>
    </div>
  );
}
