import { EditorLayout } from "@/components/editor-layout"
import { ProjectsContent } from "@/components/projects-content"

export default function ProjectsPage() {
  return (
    <EditorLayout activeFile="projects.ts">
      <ProjectsContent />
    </EditorLayout>
  )
}
