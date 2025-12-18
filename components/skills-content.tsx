export function SkillsContent() {
  const skills = {
    languages: ["TypeScript", "JavaScript", "Go", "Python", "C++"],
    frameworks: ["Next.js", "React", "Prisma", "Tailwind CSS", "Node.js"],
    backend: ["REST APIs", "Auth Systems", "Database Design", "Self-hosting (Coolify)"],
    other: ["Git & GitHub", "CTF Fundamentals", "Linux/Unix"],
  }

  return (
    <div className="max-w-4xl space-y-8">
      {/* Header */}
      <div>
        <p className="text-accent text-sm mb-4">{"// skills.ts"}</p>
        <h1 className="text-3xl md:text-4xl font-bold text-primary mb-2">Skills & Technologies</h1>
        <p className="text-muted-foreground">Technical expertise and tools</p>
      </div>

      {/* Skills Object */}
      <section className="space-y-6">
        <p className="text-xl md:text-2xl font-semibold text-secondary">
          interface <span className="text-foreground">Skills</span> {"{"}
        </p>

        <div className="pl-4 md:pl-6 space-y-8">
          {/* Languages */}
          <div className="space-y-3">
            <h3 className="text-lg font-semibold text-accent">
              languages<span className="text-muted-foreground">: string[]</span>
            </h3>
            <div className="pl-4 flex flex-wrap gap-2">
              {skills.languages.map((lang, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-primary/10 text-primary border border-primary/30 rounded font-medium"
                >
                  {lang}
                </span>
              ))}
            </div>
          </div>

          {/* Frameworks & Tools */}
          <div className="space-y-3">
            <h3 className="text-lg font-semibold text-accent">
              frameworks<span className="text-muted-foreground">: string[]</span>
            </h3>
            <div className="pl-4 flex flex-wrap gap-2">
              {skills.frameworks.map((framework, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-secondary/10 text-secondary border border-secondary/30 rounded font-medium"
                >
                  {framework}
                </span>
              ))}
            </div>
          </div>

          {/* Backend & Infrastructure */}
          <div className="space-y-3">
            <h3 className="text-lg font-semibold text-accent">
              backendInfra<span className="text-muted-foreground">: string[]</span>
            </h3>
            <div className="pl-4 flex flex-wrap gap-2">
              {skills.backend.map((skill, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-accent/10 text-accent border border-accent/30 rounded font-medium"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Other Skills */}
          <div className="space-y-3">
            <h3 className="text-lg font-semibold text-accent">
              other<span className="text-muted-foreground">: string[]</span>
            </h3>
            <div className="pl-4 flex flex-wrap gap-2">
              {skills.other.map((skill, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-muted text-foreground border border-border rounded font-medium"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>

        <p className="text-xl md:text-2xl font-semibold text-secondary">{"}"}</p>
      </section>

      {/* Learning Section */}
      <section className="pt-6 border-t border-border space-y-4">
        <h2 className="text-lg font-semibold text-foreground">
          <span className="text-accent">{"// "}</span>Currently exploring
        </h2>
        <ul className="pl-4 space-y-2 text-muted-foreground">
          <li className="flex gap-2">
            <span className="text-accent">→</span>
            <span>Advanced Go patterns and microservices architecture</span>
          </li>
          <li className="flex gap-2">
            <span className="text-accent">→</span>
            <span>Container orchestration with Docker and Kubernetes</span>
          </li>
          <li className="flex gap-2">
            <span className="text-accent">→</span>
            <span>Security best practices and penetration testing</span>
          </li>
        </ul>
      </section>
    </div>
  )
}
