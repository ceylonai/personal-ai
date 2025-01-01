import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow} from '@/components/ui/table'
import {Badge} from '@/components/ui/badge'
import {useNavigate} from "react-router";

const projects = [
    {
        id: 1,
        name: 'Project Alpha',
        createdAt: '2023-01-15',
        lastAccessed: '2023-06-01',
        resourceCount: 12,
        status: 'Active'
    },
    {
        id: 2,
        name: 'Project Beta',
        createdAt: '2023-02-28',
        lastAccessed: '2023-05-30',
        resourceCount: 8,
        status: 'Inactive'
    },
    {
        id: 3,
        name: 'Project Gamma',
        createdAt: '2023-04-10',
        lastAccessed: '2023-06-02',
        resourceCount: 15,
        status: 'Active'
    },
]

export default function ProjectList() {
    const navigator = useNavigate();
    return (
        <Table>
            <TableHeader>
                <TableRow>
                    <TableHead>Project Name</TableHead>
                    <TableHead>Created</TableHead>
                    <TableHead>Last Accessed</TableHead>
                    <TableHead>Resources</TableHead>
                    <TableHead>Status</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {projects.map((project) => (
                    <TableRow key={project.id} onClick={() => {
                        navigator(`/project/view/${project.id}`)
                    }}>
                        <TableCell className="font-medium">{project.name}</TableCell>
                        <TableCell>{project.createdAt}</TableCell>
                        <TableCell>{project.lastAccessed}</TableCell>
                        <TableCell>{project.resourceCount}</TableCell>
                        <TableCell>
                            <Badge variant={project.status === 'Active' ? 'default' : 'secondary'}>
                                {project.status}
                            </Badge>
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    )
}

