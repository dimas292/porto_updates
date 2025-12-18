export function AboutContent() {
  return (
    <div className="max-w-4xl space-y-8">
      {/* Header Comment */}
      <div>
        <p className="text-accent text-sm mb-4">{"// about.ts"}</p>
        <h1 className="text-3xl md:text-4xl font-bold text-primary mb-2">About Me</h1>
        <p className="text-muted-foreground">Professional summary and background</p>
      </div>

      {/* Summary */}
      <section className="space-y-4">
        <h2 className="text-xl md:text-2xl font-semibold text-secondary">
          const <span className="text-foreground">summary</span> = {"{"}
        </h2>
        <div className="pl-4 md:pl-6 space-y-3 text-muted-foreground leading-relaxed">
          <p>
            I'm an <span className="text-foreground">Informatics undergraduate student</span> with a strong passion for
            backend engineering and system design. My approach to development prioritizes understanding the fundamentals
            over relying solely on frameworks.
          </p>
          <p>
            Beyond coding, I find fulfillment in <span className="text-foreground">teaching and mentoring</span> fellow
            developers, helping them build solid foundations in programming and problem-solving.
          </p>
          <p>
            I'm particularly interested in building <span className="text-foreground">scalable backend systems</span>,
            working with <span className="text-foreground">self-hosted infrastructure</span>, and exploring security
            through CTF competitions.
          </p>
        </div>
        <p className="text-xl md:text-2xl font-semibold text-secondary">{"}"}</p>
      </section>

      {/* Education */}
      <section className="space-y-4 pt-4">
        <h2 className="text-xl md:text-2xl font-semibold text-secondary">
          interface <span className="text-foreground">Education</span>
        </h2>
        <div className="pl-4 md:pl-6 border-l-2 border-primary">
          <div className="space-y-2">
            <h3 className="text-lg font-semibold text-foreground">Bachelor of Informatics</h3>
            <p className="text-muted-foreground">Current undergraduate student</p>
            <p className="text-sm text-muted-foreground">
              Focusing on software engineering, algorithms, database systems, and backend development
            </p>
          </div>
        </div>
      </section>

      {/* Developer Principles */}
      <section className="space-y-4 pt-4">
        <h2 className="text-xl md:text-2xl font-semibold text-secondary">
          const <span className="text-foreground">principles</span>: string[] = [
        </h2>
        <ul className="pl-4 md:pl-6 space-y-3">
          {[
            {
              text: "Write maintainable code",
              description: "Code is read more often than it's written. Clarity over cleverness.",
            },
            {
              text: "Understand systems beyond frameworks",
              description: "Frameworks come and go, but fundamental concepts remain.",
            },
            {
              text: "Learn by building real projects",
              description: "Theory matters, but practical implementation solidifies understanding.",
            },
          ].map((principle, index) => (
            <li key={index} className="flex gap-3">
              <span className="text-accent mt-1">→</span>
              <div>
                <p className="text-foreground font-medium">{`"${principle.text}"`}</p>
                <p className="text-sm text-muted-foreground mt-1">{principle.description}</p>
              </div>
            </li>
          ))}
        </ul>
        <p className="text-xl md:text-2xl font-semibold text-secondary">]</p>
      </section>
    </div>
  )
}
