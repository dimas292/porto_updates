import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function HomeContent() {
  return (
    <div className="max-w-4xl space-y-12">
      {/* Comment-style hero */}
      <div className="space-y-2">
        <p className="text-muted-foreground text-sm md:text-base">
          <span className="text-accent">{"// Hi, I'm Dimas"}</span>
        </p>
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-balance leading-tight">
          <span className="text-secondary">Fullstack</span> <span className="text-foreground">Developer &</span>{" "}
          <span className="text-primary">Informatics Student</span>
        </h1>
      </div>

      {/* Intro */}
      <div className="space-y-4 text-muted-foreground leading-relaxed">
        <p className="text-base md:text-lg">
          I build reliable backend systems and full-stack applications with a focus on{" "}
          <span className="text-foreground">clean architecture</span>,{" "}
          <span className="text-foreground">scalable APIs</span>, and{" "}
          <span className="text-foreground">maintainable code</span>.
        </p>
        <p className="text-base md:text-lg">
          Currently pursuing my degree in Informatics Engineering while working with modern web technologies like{" "}
          <span className="text-primary">Next.js</span>, <span className="text-primary">TypeScript</span>,{" "}
          <span className="text-primary">Go</span>, and self-hosted infrastructure. I enjoy solving complex problems and{" "}
          mentoring fellow developers.
        </p>
      </div>

      {/* CTA Buttons */}
      <div className="flex flex-wrap gap-3">
        <Link href="/projects">
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
            ViewProjects()
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </Link>
        <Link href="/contact">
          <Button
            size="lg"
            variant="outline"
            className="border-accent text-accent hover:bg-accent hover:text-accent-foreground bg-transparent"
          >
            ContactMe()
          </Button>
        </Link>
      </div>

      {/* Quick Links */}
      <div className="pt-8 border-t border-border">
        <p className="text-sm text-muted-foreground mb-3">Quick navigation:</p>
        <div className="flex flex-wrap gap-2">
          {[
            { name: "about.ts", path: "/about" },
            { name: "skills.ts", path: "/skills" },
            { name: "experience.ts", path: "/experience" },
          ].map((file) => (
            <Link
              key={file.path}
              href={file.path}
              className="px-3 py-1.5 text-sm bg-card border border-border rounded hover:border-primary hover:text-primary transition-colors"
            >
              {file.name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
