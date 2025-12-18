import { EditorLayout } from "@/components/editor-layout"
import { HomeContent } from "@/components/home-content"

export default function HomePage() {
  return (
    <EditorLayout activeFile="index.ts">
      <HomeContent />
    </EditorLayout>
  )
}
