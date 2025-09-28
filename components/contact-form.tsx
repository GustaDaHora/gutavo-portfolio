"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { CheckCircle, Send } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/hooks/use-toast"

export function ContactForm() {
  const { toast } = useToast()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    const form = e.currentTarget
    const formData = new FormData(form)

    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      subject: formData.get("subject"),
      message: formData.get("message"),
    }

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })

      if (!res.ok) throw new Error("Failed to send")

      form.reset()
      setIsSubmitted(true)

      setTimeout(() => {
        setIsSubmitted(false)
      }, 10000) // Reset after 10 seconds
    } catch {
      toast({
        title: "Error",
        description: "There was a problem sending your message.",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <div className="relative overflow-hidden rounded-xl bg-zinc-800/50 backdrop-blur-sm border border-zinc-700/50 p-6 transition-all duration-300 hover:border-green-500/50">
        <div className="absolute -inset-1 bg-gradient-to-r from-green-500/10 to-emerald-500/10 rounded-xl blur opacity-25 hover:opacity-100 transition duration-1000 hover:duration-200"></div>

        <div className="relative min-h-[492px]">
          {isSubmitted ? (
            <div className="flex h-full flex-col items-center justify-center text-center">
              <motion.div
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ type: "spring", stiffness: 260, damping: 20 }}
              >
                <CheckCircle className="mx-auto mb-4 h-16 w-16 text-green-500" />
              </motion.div>
              <h3 className="mb-2 text-2xl font-bold">Message Sent!</h3>
              <p className="text-zinc-300">
                Thanks for reaching out. I&apos;ll get back to you soon.
              </p>
            </div>
          ) : (
            <>
              <h3 className="mb-6 text-2xl font-bold">Send Me a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Input
                    name="name"
                    placeholder="Your Name"
                    required
                    className="bg-zinc-900/50 border-zinc-700 focus:border-green-500 focus:ring-green-500/20"
                  />
                </div>
                <div className="space-y-2">
                  <Input
                    name="email"
                    type="email"
                    placeholder="Your Email"
                    required
                    className="bg-zinc-900/50 border-zinc-700 focus:border-green-500 focus:ring-green-500/20"
                  />
                </div>
                <div className="space-y-2">
                  <Input
                    name="subject"
                    placeholder="Subject"
                    required
                    className="bg-zinc-900/50 border-zinc-700 focus:border-green-500 focus:ring-green-500/20"
                  />
                </div>
                <div className="space-y-2">
                  <Textarea
                    name="message"
                    placeholder="Your Message"
                    rows={5}
                    required
                    className="bg-zinc-900/50 border-zinc-700 focus:border-green-500 focus:ring-green-500/20"
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full border-0 bg-brand-gradient text-green-200 hover:bg-brand-gradient-medium hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2 disabled:opacity-50 disabled:hover:scale-100 transition-all"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>Sending...</>
                  ) : (
                    <>
                      Send Message <Send className="ml-2 h-4 w-4" />
                    </>
                  )}
                </Button>
              </form>
            </>
          )}
        </div>
      </div>
    </motion.div>
  )
}