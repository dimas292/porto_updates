"use client"

import type React from "react"
import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Github, Linkedin, Mail, Send } from "lucide-react"

export function ContactContent() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
  }

  const socialLinks = [
    {
      name: "GitHub",
      icon: Github,
      url: "https://github.com/dimas292",
      handle: "@dimas292",
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      url: "https://www.linkedin.com/in/dimas-b7041b27b/",
      handle: "Dimas .",
    },
    {
      name: "dimasixc22@gmail.com",
      icon: Mail,
      url: "mailto:dimasixc22@gmail.com",
      handle: "dimasixc22@gmail.com",
    },
  ]

  return (
    <div className="max-w-4xl space-y-8">
      {/* Header */}
      <div>
        <p className="text-accent text-sm mb-4">{"// contact.ts"}</p>
        <h1 className="text-3xl md:text-4xl font-bold text-primary mb-2">Get In Touch</h1>
        <p className="text-muted-foreground">
          <span className="text-accent">{"// "}</span>Let's build something meaningful together
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        {/* Contact Form */}
        {/* <div className="space-y-6">
          <div>
            <h2 className="text-xl font-semibold text-foreground mb-4">
              <span className="text-secondary">const</span> sendMessage = () {"=>"} {"{"}
            </h2>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm text-accent">
                name<span className="text-muted-foreground">: string</span>
              </label>
              <Input
                id="name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="bg-card border-border focus:border-primary"
                placeholder="Your name"
                required
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="email" className="text-sm text-accent">
                email<span className="text-muted-foreground">: string</span>
              </label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="bg-card border-border focus:border-primary"
                placeholder="your.email@example.com"
                required
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="message" className="text-sm text-accent">
                message<span className="text-muted-foreground">: string</span>
              </label>
              <textarea
                id="message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full min-h-32 px-3 py-2 bg-card border border-border rounded-md focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary resize-none text-foreground"
                placeholder="Your message..."
                required
              />
            </div>

            <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
              <Send className="mr-2 h-4 w-4" />
              sendMessage()
            </Button>
          </form>

          <p className="text-xl font-semibold text-secondary">{"}"}</p>
        </div> */}

        {/* Social Links */}
        <div className="space-y-6">
          <div>
            <h2 className="text-xl font-semibold text-foreground mb-4">
              <span className="text-secondary">const</span> socials = [
            </h2>
          </div>

          <div className="space-y-3">
            {socialLinks.map((social) => {
              const Icon = social.icon
              return (
                <Card key={social.name} className="bg-card border-border hover:border-primary transition-colors">
                  <a
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4"
                  >
                    <div className="p-2 bg-muted rounded">
                      <Icon className="h-5 w-5 text-primary" />
                    </div>
                    <div className="flex-1">
                      <p className="font-semibold text-foreground">{social.name}</p>
                      <p className="text-sm text-muted-foreground">{social.handle}</p>
                    </div>
                    <span className="text-accent">→</span>
                  </a>
                </Card>
              )
            })}
          </div>

          <p className="text-xl font-semibold text-secondary">]</p>

          {/* Additional Info */}
          <div className="pt-4 space-y-2">
            <p className="text-sm text-muted-foreground">
              <span className="text-accent">{"// "}</span>Available for
            </p>
            <ul className="space-y-1 text-sm text-muted-foreground pl-4">
              <li className="flex gap-2">
                <span className="text-accent">→</span>
                <span>Fullstack development projects</span>
              </li>
              <li className="flex gap-2">
                <span className="text-accent">→</span>
                <span>Internship</span>
              </li>
              <li className="flex gap-2">
                <span className="text-accent">→</span>
                <span>Collaboration opportunities</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
