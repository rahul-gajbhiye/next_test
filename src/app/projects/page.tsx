
// File: app/projects/page.js
import Image from 'next/image'

const projects = [
  {
    id: 1,
    title: "E-commerce Platform",
    description: "A full-featured e-commerce platform built with Next.js and Stripe integration.",
    image: "/projects/ecommerce.jpg",
    tags: ["Next.js", "Stripe", "TailwindCSS", "MongoDB"],
    github: "https://github.com",
    live: "https://example.com"
  },
  {
    id: 2,
    title: "Task Management App",
    description: "A drag-and-drop task management application with team collaboration features.",
    image: "/projects/taskapp.jpg",
    tags: ["React", "Firebase", "Redux", "Styled Components"],
    github: "https://github.com",
    live: "https://example.com"
  },
  {
    id: 3,
    title: "Weather Dashboard",
    description: "A weather dashboard that displays current and forecasted weather data from multiple APIs.",
    image: "/projects/weather.jpg",
    tags: ["JavaScript", "OpenWeather API", "Chart.js", "CSS Grid"],
    github: "https://github.com",
    live: "https://example.com"
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
            
            <div className="p-6">
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
                  href={project.live} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-primary hover:underline"
                >
                  Link for Live Demo
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
