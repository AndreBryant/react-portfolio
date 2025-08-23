import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import Contact from "./components/Contact";
import Projects from "./components/Projects";

export default function App() {
  return (
    <div className="relative top-0 z-0 m-0 w-screen border p-0" id="app">
      <NavBar />
      <div className="bg-[#0d0d0d] text-slate-300 [&>section]:px-4 [&>section]:py-32 [&>section]:sm:px-24 [&>section]:xl:px-64">
        <Hero />
        <Projects />
        <Contact />
      </div>
    </div>
  );
}
