import {Button} from '@/components/ui/button'
import {PlusCircle} from 'lucide-react'

export default function CreateProjectButton() {
    return (
        <Button size="lg" onClick={() => {
            window.location.href = '/project/create'
        }}>
            <PlusCircle className="mr-2 h-5 w-5"/> Create New Project
        </Button>
    )
}

