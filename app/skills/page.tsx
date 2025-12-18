import { EditorLayout } from "@/components/editor-layout"
import { SkillsContent } from "@/components/skills-content"

export default function SkillsPage() {
  return (
    <EditorLayout activeFile="skills.ts">
      <SkillsContent />
    </EditorLayout>
  )
}
