import { Input } from '@/components/ui/input'
import { Search } from 'lucide-react'

export default function SearchBar() {
  return (
    <div className="relative">
      <Search className="absolute left-2 top-1/2 h-4 w-4 -translate-y-1/2 transform text-muted-foreground" />
      <Input
        type="search"
        placeholder="Search projects..."
        className="pl-8 w-[300px]"
      />
    </div>
  )
}

