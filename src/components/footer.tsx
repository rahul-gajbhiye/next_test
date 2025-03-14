
export default function Footer() {
  return (
    <footer className="bg-gray-500 text-black py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* <div className="mb-4 md:mb-0">
            <p>&copy; {new Date().getFullYear()} Rahul Gajbhiye. All rights reserved.</p>
          </div> */}
          <div className="flex flex-col">
<div className="text-xl font-bold">Phone</div>
<div>+91-9096458038</div>
          </div>
          <div className="flex flex-col">
<div className="text-xl font-bold">Email</div>
<div>rahulgajbhiye1699@gmail.com</div>
          </div>

          <div className="flex flex-col">
          <div className="text-xl font-bold">Follow me</div>
          <div className="flex space-x-6">
            <a href="https://github.com/rahul-gajbhiye" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            GitHub
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            LinkedIn          
              </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
            Twitter           
             </a>
            <a href="mailto:rahulgajbhiye1699@gmail.com" aria-label="Email">
            Email           
             </a>
          </div>
        </div>
      </div>
      </div>
    </footer>
  )
}