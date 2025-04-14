export function ProjectCard({ title, description, image }) {
  return (
    <div
      className="flex flex-col bg-white rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 h-full">
      <div className="relative pt-[60%] w-full">
        <img
          src={image || "/placeholder.svg"}
          alt={title}
          className="absolute top-0 left-0 w-full h-full object-cover rounded-t-lg" />
      </div>
      <div className="p-5 flex-grow">
        <h3 className="text-lg md:text-xl font-medium text-gray-800">{title}</h3>
        <p className="text-sm md:text-base text-gray-600 mt-2">{description}</p>
      </div>
    </div>
  );
}
