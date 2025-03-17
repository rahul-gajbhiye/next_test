
// File: app/projects/page.js
import Image from 'next/image'

const projects = [
  {
    id: 1,
    title: "react-calculator",
    description: "A simple calculator app built for quick and accurate calculations. A user-friendly calculator with a sleek interface and smooth functionality.",
    image: "/calculator.jpg",
    tags: ["react.js", "TailwindCSS"],
    github: "https://github.com/rahul-gajbhiye/react-calculator",
    try: "https://rahul-gajbhiye.github.io/react-calculator/"
  }
]

export default function Projects() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8 text-center">My Projects</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div key={project.id} className="border rounded-lg overflow-hidden hover:shadow-lg transition">
            <div className="relative h-48">
              <Image 
                src={project.image} 
                alt={project.title}
                fill
                className="object-cover"
              />
            </div>
            
            <div className="p-6 bg-blue-100">
              <h3 className="text-xl font-bold mb-2">{project.title}</h3>
              <p className="mb-4">{project.description}</p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag) => (
                  <span key={tag} className="px-2 py-1 bg-primary bg-opacity-10 text-primary text-sm rounded">
                    {tag}
                  </span>
                ))}
              </div>
              
              <div className="flex justify-between">
                <a 
                  href={project.github} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-primary hover:underline"
                >
                  Github Code
                </a>
                <a 
                  href={project.try} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-primary hover:underline"
                >
                  Live Demo
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
