import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ExternalLink, Github } from "lucide-react"

const projects = [
  {
    name: "Caturnawa 2025",
    description: "Multi-role web system for registration, jury scoring, and admin monitoring",
    tech: ["Next.js", "TypeScript", "Prisma", "Tailwind CSS"],
    role: "Assistant Project Manager & Full-Stack Developer",
    github: "https://github.com/dimas292/caturnawa2025",
  },
  {
    name: "My Blog",
    description: "Text classification and sentiment analysis for Indonesian language datasets",
    tech: ["Ruby", "Jekyll", "CSS", "GEM"],
    role: "Self-Initiated Project",
    github: "https://github.com/dimas292/myblog",
  },
  {
    name: "Main Webstite UNAS FEST 2025",
    description: "Official website for UNAS FEST 2025 event",
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
    role: "Assistant Project Manager",
    github: "https://github.com/CatwisBot/UNAS_FEST-2025",
  }
]

export function ProjectsContent() {
  return (
    <div className="max-w-5xl space-y-8">
      {/* Header */}
      <div>
        <p className="text-accent text-sm mb-4">{"// projects.ts"}</p>
        <h1 className="text-3xl md:text-4xl font-bold text-primary mb-2">Projects</h1>
        <p className="text-muted-foreground">Selected work and contributions</p>
      </div>

      {/* Projects Grid */}
      <div className="grid gap-6 md:grid-cols-1">
        {projects.map((project, index) => (
          <Card key={index} className="bg-card border-border p-6 hover:border-primary transition-colors">
            <div className="space-y-4">
              {/* Project Header */}
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-1">
                    <span className="text-secondary">export const</span> {project.name.replace(/\s+/g, "")}
                  </h3>
                  <p className="text-sm text-muted-foreground">{project.role}</p>
                </div>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:text-primary/80 transition-colors"
                >
                  <Github className="h-6 w-6" />
                </a>
              </div>

              {/* Description */}
              <p className="text-muted-foreground leading-relaxed">{project.description}</p>

              {/* Tech Stack */}
              <div className="space-y-2">
                <p className="text-xs text-accent uppercase tracking-wider">Tech Stack</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 text-xs bg-muted text-foreground rounded border border-border"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action */}
              <div className="pt-2">
                <Button
                  asChild
                  variant="outline"
                  size="sm"
                  className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
                >
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-4 w-4" />
                    View Repository
                    <ExternalLink className="ml-2 h-3 w-3" />
                  </a>
                </Button>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* More Projects Link */}
      <div className="pt-4 text-center">
        <p className="text-sm text-muted-foreground mb-3">More projects available on my GitHub profile</p>
        <Button
          asChild
          variant="outline"
          className="border-accent text-accent hover:bg-accent hover:text-accent-foreground bg-transparent"
        >
          <a href="https://github.com/dimas292" target="_blank" rel="noopener noreferrer">
            <Github className="mr-2 h-4 w-4" />
            View GitHub Profile
            <ExternalLink className="ml-2 h-3 w-3" />
          </a>
        </Button>
      </div>
    </div>
  )
}
