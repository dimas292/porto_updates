import { EditorLayout } from "@/components/editor-layout"
import { ExperienceContent } from "@/components/experience-content"

export default function ExperiencePage() {
  return (
    <EditorLayout activeFile="experience.ts">
      <ExperienceContent />
    </EditorLayout>
  )
}
