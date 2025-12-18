import { EditorLayout } from "@/components/editor-layout"
import { AboutContent } from "@/components/about-content"

export default function AboutPage() {
  return (
    <EditorLayout activeFile="about.ts">
      <AboutContent />
    </EditorLayout>
  )
}
