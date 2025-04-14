import { ProjectCard } from "./project-card"

// Vous pouvez facilement ajouter ou supprimer des projets ici
const projectsData = [
  {
    title: "My spotify",
    description: "Reproduction de spotify.",
    image: "assets/Projettwitter.png",
  },
  {
    title: "Puissance 4",
    description: "Creation d'un puissance 4.",
    image: "assets/projetpuissance4.png",
  },
  {
    title: "My meetic",
    description: "Création de mon site de rencontre.",
    image: "assets/projetmeetic.png",
  },
  // Ajoutez facilement d'autres projets ici
]

export default function Projects() {
  return (
    <div id="projets" className="bg-[#191919] py-16 md:py-20 shadow-lg">
      <div className="container mx-auto px-4">
        <h2
          className="text-3xl md:text-4xl font-bold text-center mb-8 md:mb-10 text-amber-50">Mes Projets</h2>
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
          {projectsData.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              image={project.image} />
          ))}
        </div>
      </div>
    </div>
  );
}
