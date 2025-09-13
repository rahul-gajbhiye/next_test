'use client'

import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<string | null>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  setIsSubmitting(true);
  setSubmitStatus(null);

  try {
    const res = await fetch("/api/send-email", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    if (res.ok) {
      setSubmitStatus("success");
      setFormData({ name: "", email: "", message: "" });
    } else {
      setSubmitStatus("error");
    }
  } catch (error) {
    console.error(error);
    setSubmitStatus("error");
  }

  setIsSubmitting(false);
};


  return (
    <div className="container mx-auto px-4 py-12  flex justify-center">
      <div>
        <h1 className="text-3xl font-bold mb-8 text-center">Contact Me</h1>
        <div className="flex flex-row gap-10">
          <div className="w-[70%] max-w-2xl mx-auto">
            {submitStatus === 'success' && (
              <div className="mb-6 p-4 bg-green-100 text-green-800 rounded">
                Thank you for your message! I'll get back to you soon.
              </div>
            )}

            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="name" className="block mb-2 text-xl font-semibold">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              <div className="mb-4">
                <label htmlFor="email" className="block mb-2 text-xl font-semibold">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              <div className="mb-6">
                <label htmlFor="message" className="block mb-2 text-xl font-semibold">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-primary"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-6 py-3 text-xl font-bold bg-blue-200	 border rounded-full rounded hover:bg-opacity-90 transition disabled:opacity-70"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
          <div className="h-105 w-px bg-black"></div>
          <div className='w-[50%] flex justify-center'>
            <div >

              <div className="mb-4">
                <h3 className="text-xl font-semibold">Address</h3>
                <p className="text-primary">150, B, St. Tukdoji Nagar, Subhash nagar, Nagpur, 440022</p>
              </div>

              <div className="mb-4">
                <h3 className="text-xl font-semibold">Phone</h3>
                <p className="text-primary">+91-9096458038</p>
              </div>
              <div className="mb-4">
                <h3 className="text-xl font-semibold">Mail</h3>
                <p className="text-primary">rahulgajbhiye1699@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
