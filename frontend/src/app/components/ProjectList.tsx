import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow} from '@/components/ui/table';
import {useNavigate} from 'react-router';
import {Alert, AlertDescription} from '@/components/ui/alert';
import {Loader2} from 'lucide-react';
import {useProjects} from "@/context/project/create.ts";

export default function ProjectList() {
    const navigate = useNavigate();
    const { data: projects, isLoading, error } = useProjects();

    if (isLoading) {
        return (
            <div className="flex justify-center items-center h-64">
                <Loader2 className="h-8 w-8 animate-spin" />
            </div>
        );
    }

    if (error) {
        return (
            <Alert variant="destructive">
                <AlertDescription>
                    Failed to load projects: {error instanceof Error ? error.message : 'Unknown error'}
                </AlertDescription>
            </Alert>
        );
    }

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
                {projects?.map((project) => (
                    <TableRow
                        key={project.id}
                        className="cursor-pointer hover:bg-slate-100"
                        onClick={() => navigate(`/project/view/${project.id}`)}
                    >
                        <TableCell className="font-medium">{project.title}</TableCell>
                        <TableCell>{new Date(project.createdAt).toLocaleDateString()}</TableCell>
                        <TableCell>{new Date(project.createdAt).toLocaleDateString()}</TableCell>
                        <TableCell>0</TableCell>
                        <TableCell>
                            {/*<Badge variant={project.status === 'Active' ? 'default' : 'secondary'}>*/}
                            {/*    {project.status}*/}
                            {/*</Badge>*/}
                        </TableCell>
                    </TableRow>
                ))}
                {!projects?.length && (
                    <TableRow>
                        <TableCell colSpan={5} className="text-center py-8 text-gray-500">
                            No projects found. Create your first project to get started.
                        </TableCell>
                    </TableRow>
                )}
            </TableBody>
        </Table>
    );
}