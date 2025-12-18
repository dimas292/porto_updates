"use client"

import type React from "react"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { FileCode2, FolderOpen, Settings, X, Minus, Square } from "lucide-react"
import { cn } from "@/lib/utils"

interface EditorLayoutProps {
  children: React.ReactNode
  activeFile: string
}

const files = [
  { name: "index.ts", path: "/", icon: "📄" },
  { name: "about.ts", path: "/about", icon: "📄" },
  { name: "projects.ts", path: "/projects", icon: "📄" },
  { name: "skills.ts", path: "/skills", icon: "📄" },
  { name: "experience.ts", path: "/experience", icon: "📄" },
  { name: "contact.ts", path: "/contact", icon: "📄" },
]

export function EditorLayout({ children, activeFile }: EditorLayoutProps) {
  const pathname = usePathname()

  return (
    <div className="flex h-screen flex-col bg-background text-foreground">
      {/* Title Bar */}
      <div className="flex h-9 items-center justify-between border-b border-border bg-card px-2">
        <div className="flex items-center gap-2">
          <FileCode2 className="h-4 w-4 text-primary" />
          <span className="text-sm">Dimas - Portfolio</span>
        </div>
        <div className="flex items-center gap-1">
          <button className="p-1 hover:bg-muted rounded">
            <Minus className="h-3 w-3" />
          </button>
          <button className="p-1 hover:bg-muted rounded">
            <Square className="h-3 w-3" />
          </button>
          <button className="p-1 hover:bg-destructive hover:text-destructive-foreground rounded">
            <X className="h-3 w-3" />
          </button>
        </div>
      </div>

      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <aside className="w-12 md:w-52 border-r border-border bg-sidebar flex flex-col">
          <div className="p-2 md:p-3 border-b border-sidebar-border">
            <div className="flex items-center gap-2 text-xs text-sidebar-foreground uppercase tracking-wider">
              <FolderOpen className="h-4 w-4 text-primary" />
              <span className="hidden md:inline">Explorer</span>
            </div>
          </div>
          <nav className="flex-1 overflow-y-auto p-1">
            <ul className="space-y-0.5">
              {files.map((file) => {
                const isActive = pathname === file.path
                return (
                  <li key={file.path}>
                    <Link
                      href={file.path}
                      className={cn(
                        "flex items-center gap-2 px-2 py-1.5 text-sm rounded transition-colors",
                        isActive
                          ? "bg-sidebar-accent text-sidebar-accent-foreground"
                          : "text-sidebar-foreground hover:bg-sidebar-accent/50",
                      )}
                    >
                      <span className="text-base">{file.icon}</span>
                      <span className="hidden md:inline">{file.name}</span>
                    </Link>
                  </li>
                )
              })}
            </ul>
          </nav>
          <div className="p-2 border-t border-sidebar-border">
            <button className="flex items-center justify-center md:justify-start gap-2 w-full p-2 text-sm text-sidebar-foreground hover:bg-sidebar-accent rounded transition-colors">
              <Settings className="h-4 w-4" />
              <span className="hidden md:inline">Settings</span>
            </button>
          </div>
        </aside>

        {/* Main Content Area */}
        <main className="flex-1 flex flex-col overflow-hidden">
          {/* Tab Bar */}
          <div className="flex items-center border-b border-border bg-card">
            <div className="flex items-center gap-1 px-3 py-2 border-r border-primary bg-card text-sm">
              <span className="text-primary">●</span>
              <span>{activeFile}</span>
              <button className="ml-2 hover:bg-muted rounded p-0.5">
                <X className="h-3 w-3" />
              </button>
            </div>
          </div>

          {/* Editor Content */}
          <div className="flex-1 overflow-auto p-6 md:p-8">{children}</div>

          {/* Status Bar */}
          <div className="flex items-center justify-between border-t border-border bg-primary px-3 py-1 text-xs text-primary-foreground">
            <div className="flex items-center gap-4">
              <span>TypeScript</span>
              <span>UTF-8</span>
              <span>LF</span>
            </div>
            <div className="flex items-center gap-4">
              <span>Ln 1, Col 1</span>
              <span>Spaces: 2</span>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
