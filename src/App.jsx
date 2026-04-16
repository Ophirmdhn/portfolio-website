import ProjectCard from "./components/ProjectCard";
import projects from "./data/projects";

function App() {
  return (
    <div className="bg-white text-black min-h-screen">
      
      <header className="max-w-5xl mx-auto px-6 py-10 flex justify-between">
        <h1 className="text-lg font-semibold">Ophi Ramadhan</h1>
        <nav className="space-x-6 text-sm text-gray-600">
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>
    
      <section className="max-w-5xl mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold leading-tight">
          Fullstack Mobile Developer
        </h2>
        <p className="text-gray-500 mt-2 max-w-md">
          Membangun aplikasi mobile dan backend system yang scalable dan efisien.
        </p>
      </section>
      
      {/* <section id="projects" className="max-w-5xl mx-auto px-6 py-10">
        <h3 className="text-xl font-semibold mb-6">Selected Projects</h3>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((p, i) => (
            <ProjectCard key={i} project={p} />
          ))}
        </div>
      </section> */}
      
      <section id="contact" className="max-w-5xl mx-auto px-6 py-24">
        <h3 className="text-xl font-semibold">Contact</h3>
        <p className="text-gray-500 mt-2">ophiramadhan18@email.com</p>
      </section>

    </div>
  );
}

export default App;