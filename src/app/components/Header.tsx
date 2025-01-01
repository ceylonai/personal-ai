import { Bell } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function Header() {
  return (
    <header className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-4">
        <nav className="flex justify-between items-center">
          <a href="/" className="text-2xl font-bold">
            ProjectHub
          </a>
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon">
              <Bell className="h-5 w-5" />
              <span className="sr-only">Notifications</span>
            </Button>
            <Button variant="secondary">Profile</Button>
          </div>
        </nav>
      </div>
    </header>
  )
}

