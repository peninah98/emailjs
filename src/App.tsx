import { useState } from "react"
import "./index.css"
import emailjs from "emailjs-com"
const SERVICE_ID = import.meta.env.VITE_SERVICE_ID
const TEMPLATE_ID = import.meta.env.VITE_TEMPLATE_ID
const PUBLIC_ID = import.meta.env.VITE_PUBLIC_ID

function App() {
  const [name, setName] = useState("")
  const [phone, setphone] = useState("")
  const [subject, setSubject] = useState("")
  const [message, setMessage] = useState("")

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault()

    const templateParams = {
      name,
      phone,
      subject,
      message,
    }

    emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_ID).then(
      (response) => {
        alert(`${response.status} ${response.text}`)
        console.log("SUCCESS!", response.status, response.text)
      },
      (error) => {
        alert(`${error.text}`)

        console.log("FAILED...", error)
      }
    )
  }
  return (
    <div className="bg-green-950/90 w-full h-screen flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold text-white py-10 text-center">
        Contact Form
      </h1>
      <form
        onSubmit={sendEmail}
        className="flex flex-col items-center gap-4 p-6 border border-gray-300 rounded-lg bg-gray-100 w-full max-w-md">
        <div className="flex flex-col w-full">
          <label className="mb-2 font-bold">Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="p-2 border border-gray-300 rounded"
            required
          />
        </div>
        {/* <div className="flex flex-col w-full">
          <label className="mb-2 font-bold">Email</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="p-2 border border-gray-300 rounded"
            required
          />
        </div> */}
        <div className="flex flex-col w-full">
          <label className="mb-2 font-bold">Telephone</label>
          <input
            type="text"
            value={phone}
            onChange={(e) => setphone(e.target.value)}
            className="p-2 border border-gray-300 rounded"
            required
          />
        </div>
        <div className="flex flex-col w-full max-w-md">
          <label className="mb-2 font-bold">Subject</label>
          <input
            type="text"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            className="p-2 border border-gray-300 rounded"
            required
          />
        </div>
        <div className="flex flex-col w-full max-w-md">
          <label className="mb-2 font-bold">Message</label>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="p-2 border border-gray-300 rounded min-h-[100px]"
            required
          />
        </div>
        <button
          type="submit"
          className="px-6 py-3 border-none rounded bg-green-700 text-white cursor-pointer w-full text-lg font-semibold">
          Send
        </button>
      </form>
    </div>
  )
}

export default App
