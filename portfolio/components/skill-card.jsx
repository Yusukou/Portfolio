export function SkillCard({ name, icon }) {
  return (
    <div
      className="flex flex-col items-center shadow-lg p-4 rounded-lg hover:shadow-xl transition-shadow duration-300 bg-white">
      <img
        src={icon || "/placeholder.svg"}
        alt={name}
        className="w-12 h-12 md:w-16 md:h-16" />
      <p
        className="mt-3 md:mt-4 text-base md:text-lg font-medium text-gray-700 text-center">{name}</p>
    </div>
  );
}
