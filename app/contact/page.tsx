import { EditorLayout } from "@/components/editor-layout"
import { ContactContent } from "@/components/contact-content"

export default function ContactPage() {
  return (
    <EditorLayout activeFile="contact.ts">
      <ContactContent />
    </EditorLayout>
  )
}
