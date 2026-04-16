function ProjectCard({ project }) {
  return (
    <div className="bg-gray-800 rounded-xl p-4">
      <h3 className="text-lg font-semibold">{project.title}</h3>
      <p className="text-gray-400">{project.desc}</p>
      <p className="text-blue-400 text-sm">{project.tech}</p>
    </div>
  );
}

export default ProjectCard;