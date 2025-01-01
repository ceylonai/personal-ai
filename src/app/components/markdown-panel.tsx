import { X } from 'lucide-react'
import { Button } from "@/components/ui/button.tsx"
import { ScrollArea } from "@/components/ui/scroll-area.tsx"
import { PanelContent } from '../../types/panel.ts'

interface MarkdownPanelProps {
  content: PanelContent
  onClose: () => void
}

export function MarkdownPanel({ content, onClose }: MarkdownPanelProps) {
  return (
    <div className="w-[480px] bg-[#2A2A2A] border-l border-gray-800 flex flex-col">
      <div className="flex items-center justify-between p-4 border-b border-gray-800">
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="sm" className="text-gray-400">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="mr-2"
            >
              <polyline points="15 18 9 12 15 6" />
            </svg>
            {content.title}
          </Button>
        </div>
        <Button variant="ghost" size="icon" onClick={onClose}>
          <X className="h-4 w-4" />
        </Button>
      </div>
      <ScrollArea className="flex-1 p-6">
        <div className="prose prose-invert max-w-none">
          <h2>Practice Platforms</h2>
          <ul>
            <li>PHP Exercises</li>
            <li>Codecademy</li>
            <li>W3Schools PHP</li>
          </ul>

          <h2>Best Practices</h2>
          <ol>
            <li>Follow PSR standards</li>
            <li>Use prepared statements</li>
            <li>Implement proper error handling</li>
            <li>Secure configuration</li>
            <li>Regular backups</li>
            <li>Code documentation</li>
          </ol>

          <h2>Tips for Success</h2>
          <ul>
            <li>Start with basic concepts</li>
            <li>Build real-world projects</li>
            <li>Learn a PHP framework (Laravel/Symfony)</li>
            <li>Join PHP communities</li>
            <li>Practice security consciousness</li>
            <li>Keep up with PHP versions</li>
          </ul>

          <div className="mt-6 text-sm text-gray-400">
            Remember: PHP development requires a strong understanding of both server-side and client-side concepts. 
            Focus on security best practices as PHP applications often handle sensitive user data. 
            Keep your development environment up-to-date and always validate user input.
          </div>
        </div>
      </ScrollArea>
      <div className="border-t border-gray-800 p-4">
        <div className="flex items-center justify-between">
          <div className="text-sm text-gray-400">
            Last edited {content.lastEdited || '7 hours ago'}
          </div>
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="sm">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="mr-2"
              >
                <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
                <rect width="8" height="4" x="8" y="2" rx="1" ry="1" />
              </svg>
              Copy
            </Button>
            <Button variant="ghost" size="sm">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="mr-2"
              >
                <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
              </svg>
              Publish
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

