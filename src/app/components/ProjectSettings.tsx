import {useState} from 'react'
import {Button} from "@/components/ui/button"
import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card"
import {Input} from "@/components/ui/input"
import {Label} from "@/components/ui/label"
import {ChevronLeft, ChevronRight, Plus} from 'lucide-react'

interface Project {
    id: number
    name: string
}

export function ProjectManagement() {
    const [isExpanded, setIsExpanded] = useState(false)
    const [projects, setProjects] = useState<Project[]>([
        {id: 1, name: "Project A"},
        {id: 2, name: "Project B"},
    ])
    const [newProjectName, setNewProjectName] = useState('')

    const handleAddProject = () => {
        if (newProjectName.trim()) {
            setProjects([...projects, {id: projects.length + 1, name: newProjectName}])
            setNewProjectName('')
        }
    }

    return (
        <div className={`bg-white shadow-lg transition-all duration-300 ${isExpanded ? 'w-80' : 'w-16'}`}>
            <Button
                variant="ghost"
                className="w-full p-4 flex justify-center"
                onClick={() => setIsExpanded(!isExpanded)}
            >
                {isExpanded ? <ChevronRight className="h-6 w-6"/> : <ChevronLeft className="h-6 w-6"/>}
            </Button>
            {isExpanded && (
                <div className="p-4">
                    <h2 className="text-xl font-bold mb-4">Project Management</h2>
                    <Card className="mb-4">
                        <CardHeader>
                            <CardTitle>Add New Project</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-2">
                                <Label htmlFor="projectName">Project Name</Label>
                                <div className="flex space-x-2">
                                    <Input
                                        id="projectName"
                                        value={newProjectName}
                                        onChange={(e) => setNewProjectName(e.target.value)}
                                        placeholder="Enter project name"
                                    />
                                    <Button onClick={handleAddProject}>
                                        <Plus className="h-4 w-4"/>
                                    </Button>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader>
                            <CardTitle>Projects</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <ul className="space-y-2">
                                {projects.map((project) => (
                                    <li key={project.id} className="flex items-center justify-between">
                                        <span>{project.name}</span>
                                        <Button variant="ghost" size="sm">View</Button>
                                    </li>
                                ))}
                            </ul>
                        </CardContent>
                    </Card>
                </div>
            )}
        </div>
    )
}

