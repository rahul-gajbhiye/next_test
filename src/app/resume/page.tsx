
// File: app/resume/page.js
export default function Resume() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8 text-center">My Resume</h1>
      
      <section className="mb-10">
        <h2 className="section-heading">Work Experience</h2>
        
        <div className="mb-6">
          <h3 className="text-xl font-semibold">Senior Frontend Developer</h3>
          <p className="text-primary">TechCorp Inc. • 2022 - Present</p>
          <ul className="list-disc ml-5 mt-2">
            <li>Led the development of the company's flagship product using Next.js and TypeScript</li>
            <li>Improved site performance by 40% through code optimization and lazy loading strategies</li>
            <li>Mentored junior developers and conducted code reviews</li>
          </ul>
        </div>
        
        <div className="mb-6">
          <h3 className="text-xl font-semibold">Frontend Developer</h3>
          <p className="text-primary">WebSolutions • 2020 - 2022</p>
          <ul className="list-disc ml-5 mt-2">
            <li>Developed responsive web applications using React and Redux</li>
            <li>Collaborated with designers to implement pixel-perfect UI components</li>
            <li>Integrated RESTful APIs and implemented state management solutions</li>
          </ul>
        </div>
      </section>
      
      <section className="mb-10">
        <h2 className="section-heading">Education</h2>
        
        <div className="mb-6">
          <h3 className="text-xl font-semibold">Bachelor of Science in Computer Science</h3>
          <p className="text-primary">University of Technology • 2016 - 2020</p>
          <p className="mt-2">Graduated with honors. Focused on web development and user experience design.</p>
        </div>
      </section>
      
      <section className="mb-10">
        <h2 className="section-heading">Skills</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h3 className="text-lg font-semibold mb-2">Technical Skills</h3>
            <ul className="list-disc ml-5">
              <li>JavaScript/TypeScript</li>
              <li>React.js & Next.js</li>
              <li>HTML5 & CSS3/Sass</li>
              <li>Redux & Context API</li>
              <li>Tailwind CSS & Material UI</li>
              <li>Git & GitHub</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-2">Soft Skills</h3>
            <ul className="list-disc ml-5">
              <li>Project Management</li>
              <li>Team Leadership</li>
              <li>Problem Solving</li>
              <li>Communication</li>
              <li>Time Management</li>
              <li>Attention to Detail</li>
            </ul>
          </div>
        </div>
      </section>
      
      <section>
        <h2 className="section-heading">Certifications</h2>
        
        <div className="mb-4">
          <h3 className="text-lg font-semibold">Advanced React and Redux</h3>
          <p className="text-primary">Udemy • 2021</p>
        </div>
        
        <div className="mb-4">
          <h3 className="text-lg font-semibold">Next.js Developer</h3>
          <p className="text-primary">Vercel • 2022</p>
        </div>
      </section>
    </div>
  )
}
