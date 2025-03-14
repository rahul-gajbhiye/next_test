
// File: app/page.js
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="container mx-auto px-20 py-12">
      <section className="flex flex-col md:flex-row items-center justify-between gap-8 mb-16">
      <div className="md:w-1/5 relative">
          <div className="aspect-square relative overflow-hidden rounded-full border-4 border-primary">
            <Image 
              src="/rahul.jpg" 
              alt="Rahul Gajbhiye" 
              fill
              className="object-cover"
            />
          </div>
        </div>
        <div className="md:w-1/2">
          <h1 className="text-4xl font-bold mb-4">Rahul Gajbhiye</h1>
          <h2 className="text-2xl text-primary mb-4">Frontend Developer</h2>
          <p className="text-lg mb-6">
            I build beautiful, responsive web applications with modern technologies.
            Passionate about user experience and clean code.
          </p>
          <div className="flex gap-4">
            <Link 
              href="/resume"
              className="px-6 py-2 text-primary rounded hover:bg-opacity-90 transition"
            >
              View Resume
            </Link>
            <Link 
              href="/projects"
              className="px-6 py-2 text-primary rounded hover:bg-primary hover:bg-opacity-10 transition"
            >
              My Projects
            </Link>
          </div>
        </div>


      </section>

      <section className="mb-16">
        <h2 className="section-heading">About Me</h2>
        <p className="mb-4">
          I'm a frontend developer with 4 years of experience specializing in React and Next.js. 
          I have a passion for creating intuitive, accessible web applications that deliver 
          exceptional user experiences.
        </p>
        <p>
          When I'm not coding, I enjoy hiking, photography, and contributing to open source
          projects. I'm currently based in San Francisco, CA.
        </p>
      </section>

      <section className="mb-16">
        <h2 className="section-heading">Featured Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {['JavaScript', 'React', 'Next.js', 'TypeScript', 'CSS/Sass', 'Tailwind CSS', 'Git', 'UI/UX Design'].map((skill) => (
            <div key={skill} className="p-4 border rounded text-center hover:border-primary hover:text-primary transition">
              {skill}
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="section-heading">Get In Touch</h2>
        <div className="flex gap-6 justify-center md:justify-start">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-3xl hover:text-primary transition">
            Github
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-3xl hover:text-primary transition">
            Linked in
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-3xl hover:text-primary transition">
            TWitter
          </a>
        </div>
      </section>
    </div>
  )
}

