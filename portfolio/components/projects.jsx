import { ProjectCard } from "./project-card"


const projectsData = [
  {
    title: "My twitter",
    description: "Reproduction d’un mini Twitter en 4 semaines à 3 (SQL, PHP, JS) avec publication, follow et fil d’actu",
    image: "assets/Projettwitter.png",
  },
  {
    title: "Puissance 4",
    description: "Création d’un Puissance 4 en 1 semaine en JavaScript : grille dynamique, logique du jeu et détection des gagnants.",
    image: "assets/projetpuissance4.png",
  },
  {
    title: "My meetic",
    description: "Développement solo d’un site de rencontre “Meetic” en 2 semaines avec PHP : inscription, profils, système de like/match.",
    image: "assets/projetmeetic.png",
  },
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
