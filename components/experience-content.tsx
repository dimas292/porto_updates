export function ExperienceContent() {
  const experiences = [
    {
      role: "Assistant Project Manager",
      organization: "IT Department",
      period: "2023 - Present",
      type: "Leadership & Development",
      responsibilities: [
        "Coordinated frontend, backend, and UI/UX teams across multiple projects",
        "Ensured timely feature delivery while maintaining code quality standards",
        "Contributed to core system development and architectural decisions",
        "Facilitated communication between technical teams and stakeholders",
      ],
    },
    {
      role: "Laboratory Assistant & Programming Mentor",
      organization: "University Computer Laboratory",
      period: "2022 - Present",
      type: "Teaching & Mentoring",
      responsibilities: [
        "Taught C++ programming fundamentals to undergraduate students",
        "Prepared comprehensive learning modules and practical exercises",
        "Mentored students through debugging sessions and code reviews",
        "Evaluated student progress and provided constructive feedback",
      ],
    },
  ]

  return (
    <div className="max-w-4xl space-y-8">
      {/* Header */}
      <div>
        <p className="text-accent text-sm mb-4">{"// experience.ts"}</p>
        <h1 className="text-3xl md:text-4xl font-bold text-primary mb-2">Experience</h1>
        <p className="text-muted-foreground">Professional and academic positions</p>
      </div>

      {/* Experience List */}
      <section className="space-y-8">
        {experiences.map((exp, index) => (
          <div key={index} className="space-y-4">
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 pb-3 border-b border-primary">
              <div>
                <h2 className="text-xl font-bold text-foreground">{exp.role}</h2>
                <p className="text-secondary">{exp.organization}</p>
              </div>
              <div className="text-sm text-muted-foreground md:text-right">
                <p>{exp.period}</p>
                <p className="text-accent">{exp.type}</p>
              </div>
            </div>

            {/* Responsibilities */}
            <ul className="space-y-3 pl-4">
              {exp.responsibilities.map((resp, respIndex) => (
                <li key={respIndex} className="flex gap-3 text-muted-foreground leading-relaxed">
                  <span className="text-accent mt-1 flex-shrink-0">→</span>
                  <span>{resp}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      {/* Additional Info */}
      <section className="pt-6 border-t border-border">
        <p className="text-sm text-accent mb-3">{"// Additional involvement"}</p>
        <div className="space-y-2 text-muted-foreground">
          <p className="flex gap-2">
            <span className="text-accent">→</span>
            <span>Active participant in CTF (Capture The Flag) competitions</span>
          </p>
          <p className="flex gap-2">
            <span className="text-accent">→</span>
            <span>Contributing to open-source projects on GitHub</span>
          </p>
          <p className="flex gap-2">
            <span className="text-accent">→</span>
            <span>Regularly sharing knowledge through technical discussions</span>
          </p>
        </div>
      </section>
    </div>
  )
}
