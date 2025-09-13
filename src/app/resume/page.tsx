import { FaDownload } from "react-icons/fa";

// File: app/resume/page.js
export default function Resume() {
  return (
    <div className="py-5 px-75 flex items-center justify-center">
      
      <iframe
        src="/Rahul.jpg"
        width="60%"
        height="800px"
        style={{ border: "none" }}
        title="My Resume"
      />
      
      <div>
     <a
    href="/Rahul_Resume.pdf"
    download
    className="fixed bottom-12 right-6 flex items-center gap-2 bg-blue-800 hover:bg-blue-700 text-white px-4 py-2 rounded-lg shadow-md transition-all"
  >
    <FaDownload className="text-lg" />
    <span>Download</span>
  </a>
      </div>
    </div>
  )
}




