import { SkillCard } from "./skill-card"


const skillsData = [
  { name: "HTML", icon: "assets/html.svg"},
  { name: "Css", icon: "assets/css.svg"},
  { name: "Next.js", icon: "assets/next-js.svg" },
  { name: "React.js", icon: "assets/react.svg" },
  { name: "Git/GitHub", icon: "assets/github.svg" },
  { name: "Docker", icon: "assets/docker.svg" },
  { name: "JS", icon: "assets/javascript.png"},
  { name: "Mysql", icon: "assets/mysql.svg"},
  { name: "Sass", icon: "assets/sass.svg"},
  { name: "Tailwind", icon: "assets/talwind.png"}

]

export default function Skills() {
  return (
    <div id="Languages" className="py-16 md:py-20 bg-white shadow-lg">
      <div className="container mx-auto px-4">
        <h2
          className="text-3xl md:text-4xl font-bold text-center mb-8 md:mb-10 text-gray-800">Mes Compétences</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 md:gap-8">
          {skillsData.map((skill, index) => (
            <SkillCard key={index} name={skill.name} icon={skill.icon} />
          ))}
        </div>
      </div>
    </div>
  );
}
