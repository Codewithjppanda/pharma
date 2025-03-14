"use client"

import { useState, useRef, useEffect } from "react"
import emailjs from "@emailjs/browser"

export default function EmailTest() {
  const [status, setStatus] = useState<string>("")
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const envVariables = {
    publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "Not set",
    serviceId: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "Not set",
    templateId: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "Not set",
  }

  const formRef = useRef<HTMLFormElement>(null)

  useEffect(() => {
    // Initialize EmailJS with your public key
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
    if (publicKey) {
      emailjs.init(publicKey)
      setStatus("EmailJS initialized with public key")
    } else {
      setStatus("❌ Error: EmailJS public key is missing")
    }
  }, [])

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLoading(true)
    setStatus("Sending test email...")

    try {
      if (!formRef.current) return

      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID
      const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID
      
      if (!serviceId || !templateId) {
        throw new Error("EmailJS service ID or template ID is not defined")
      }

      // Log for debugging
      console.log("Sending with:", { serviceId, templateId })

      await emailjs.sendForm(
        serviceId,
        templateId,
        formRef.current
      )

      setStatus("✅ Success! Test email sent successfully")
    } catch (error) {
      console.error("Error sending email:", error)
      setStatus(`❌ Error: ${error instanceof Error ? error.message : 'Unknown error occurred'}`)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="max-w-lg mx-auto mt-20 p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-6">EmailJS Test Page</h1>
      
      <div className="mb-6 p-4 bg-gray-100 rounded">
        <h2 className="font-semibold mb-2">Environment Variables:</h2>
        <ul className="space-y-1">
          <li>Public Key: {envVariables.publicKey.substring(0, 5)}... {envVariables.publicKey === "Not set" ? "❌" : "✓"}</li>
          <li>Service ID: {envVariables.serviceId.substring(0, 5)}... {envVariables.serviceId === "Not set" ? "❌" : "✓"}</li>
          <li>Template ID: {envVariables.templateId.substring(0, 5)}... {envVariables.templateId === "Not set" ? "❌" : "✓"}</li>
        </ul>
      </div>
      
      <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="user_name" className="block text-sm font-medium mb-1">Name</label>
          <input
            type="text"
            id="user_name"
            name="user_name"
            className="w-full px-3 py-2 border rounded"
            defaultValue="Test User"
            required
          />
        </div>
        
        <div>
          <label htmlFor="user_email" className="block text-sm font-medium mb-1">Email</label>
          <input
            type="email"
            id="user_email"
            name="user_email"
            className="w-full px-3 py-2 border rounded"
            defaultValue="test@example.com"
            required
          />
        </div>
        
        <div>
          <label htmlFor="message" className="block text-sm font-medium mb-1">Message</label>
          <textarea
            id="message"
            name="message"
            className="w-full px-3 py-2 border rounded"
            rows={3}
            defaultValue="This is a test email from the EmailJS test page."
            required
          />
        </div>
        
        <button
          type="submit"
          disabled={isLoading}
          className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 disabled:opacity-50"
        >
          {isLoading ? "Sending..." : "Send Test Email"}
        </button>
      </form>
      
      {status && (
        <div className={`mt-4 p-3 rounded ${status.includes("❌") ? "bg-red-100 text-red-700" : status.includes("✅") ? "bg-green-100 text-green-700" : "bg-blue-100 text-blue-700"}`}>
          {status}
        </div>
      )}
    </div>
  )
} 