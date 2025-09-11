import { FaDownload } from "react-icons/fa";

// File: app/resume/page.js
export default function Resume() {
  return (
    <div className="container mx-auto py-20 px-70">
      <div className="border-4 border-primary p-8 rounded-lg  bg-blue-100">
        <h1 className="text-4xl font-black mb-8 text-center">My Resume</h1>

        <section className="mb-10">
          <h2 className="text-2xl font-bold section-heading">Work Experience:</h2>

          <div className="mb-6">
            <h3 className="text-xl font-semibold">Frontend Developer</h3>
            <p className="text-primary">OZ Sports • 2025 - Present</p>
            <ul className="list-disc ml-5 mt-2">
              <li>Developed responsive web applications using Next.js and TypeScript</li>
              <li>Collaborated with designers to implement pixel-perfect UI components</li>
              <li>Built interactive and user-friendly interfaces using React.js and Tailwind CSS</li>
              <li>Assisted in debugging and troubleshooting issues to enhance application performance</li>
              <li>Worked closely with senior developers to implement new features and improvements</li>
            </ul>
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-semibold">Data Engineer</h3>
            <p className="text-primary">OZ Sports • 2025 - Present</p>
            <ul className="list-disc ml-5 mt-2">
              <li> Labeled and categorized images, text, and videos to train machine learning models</li>
              <li>Reviewed and corrected annotations to ensure high-quality dataset accuracy</li>
              <li>Ensured data quality by verifying and cross-checking annotated samples</li>
              <li>Used annotation tools like CVAT to mark objects in datasets</li>
            </ul>
          </div >
        </section >

        <section className="mb-10">
          <h2 className="text-2xl font-bold section-heading">Education:</h2>

          <div className="mb-6">
            <h3 className="text-xl font-semibold">Bachelor of Engineer in Mechanical Engineering</h3>
            <p className="text-primary">Nagpur University • 2017 - 2020</p>
            <p className="mt-2">Graduated with honors. Build interest in web development and user experience design.</p>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold section-heading">Skills:</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h3 className="text-xl font-semibold mb-2">Technical Skills</h3>
              <ul className="list-disc ml-5">
                <li>JavaScript/TypeScript</li>
                <li>React.js & Next.js</li>
                <li>HTML5 & CSS3/Sass</li>
                <li>Tailwind CSS</li>
                <li>Git & GitHub</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2">Soft Skills</h3>
              <ul className="list-disc ml-5">
                <li>Problem Solving</li>
                <li>Time Management</li>
                <li>Attention to Detail</li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold section-heading">Personal Details:</h2>

          <div className="mb-4">
            <h3 className="text-xl font-semibold">Full Name</h3>
            <p className="text-primary">Rahul Gajbhiye</p>
          </div>

          <div className="mb-4">
            <h3 className="text-xl font-semibold">Born</h3>
            <p className="text-primary">16 July 1999</p>
          </div>
          <div className="mb-4">
            <h3 className="text-xl font-semibold">Location</h3>
            <p className="text-primary">Nagpur, India</p>
          </div>


          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="text-xl font-semibold">Phone</h3>
              <p className="text-primary">+91-9096458038</p>
            </div>

            <div>
              <a
                href="/my_resume.png"
                download
                className="flex items-center gap-2 bg-blue-800 hover:bg-blue-700 text-white px-4 py-2 rounded-lg shadow-md transition-all"
              >
                <FaDownload className="text-lg" />
                <span>Download</span>
              </a>
            </div>
          </div>
        </section>
      </div > 
    </div >
  )
}
