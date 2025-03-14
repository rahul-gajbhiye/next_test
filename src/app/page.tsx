
// File: app/page.js
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="container mx-auto px-20 py-12">
      <section className="flex flex-col md:flex-row items-center justify-center gap-8">
        <div className="md:w-[30%] relative">
          <div className="aspect-square relative overflow-hidden rounded-full border-4 border-primary">
            <Image
              src="/rahul.jpg"
              alt="Rahul Gajbhiye"
              fill
              className="object-cover"
            />
          </div>
        </div>
        <div className="md:w-[40%]">
          <h1 className="text-7xl font-bold mb-5">Hello</h1>
          <h2 className="text-xl font-bold mb-2">A Bit About Me</h2>

          <p className='text-justify'>
            I build responsive web applications with modern technologies.
            Passionate about user experience and clean code. I have a passion for creating intuitive, accessible web applications that deliver
            exceptional user experiences. When I'm not coding, I enjoy gaming, badminton, and contributing to open source
            projects. I'm currently working at OZ Sports, Nagpur.
          </p>
          <div className="flex gap-4 mt-4">
            <Link
              href="/resume"
              className="w-30 h-30 border font-bold border-primary text-primary rounded-full flex items-center justify-center hover:bg-opacity-90 transition bg-amber-200"
              >
              View Resume
            </Link>
            <Link
              href="/projects"
              className="w-30 h-30 border font-bold border-primary text-primary rounded-full flex items-center justify-center hover:bg-opacity-90 transition bg-rose-200"
              >
              My Projects
            </Link>
            <Link
              href="/contact"
              className="w-30 h-30 border font-bold border-primary text-primary rounded-full flex items-center justify-center hover:bg-opacity-90 transition bg-blue-200"
              >
              Contact Me
            </Link>
          </div>
        </div>
      </section>
      {/* <section className="mb-16">
        <h2 className="section-heading">Featured Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {['JavaScript', 'React', 'Next.js', 'TypeScript', 'CSS/Sass', 'Tailwind CSS', 'Git', 'UI/UX Design'].map((skill) => (
            <div key={skill} className="p-4 border rounded text-center hover:border-primary hover:text-primary transition">
              {skill}
            </div>
          ))}
        </div>
      </section> */}
    </div>
  )
}

