import {create} from 'zustand'
import {useMutation, useQuery} from '@tanstack/react-query'
import {queryClient} from "@/lib/react-query.ts";
import {CreateProjectDTO, Project} from '@/types/model';


interface ProjectState {
    // State
    isCreatingProject: boolean
    currentProject: Project | null
    error: string | null

    // Actions
    createProject: (project: CreateProjectDTO) => Promise<void>
    resetError: () => void
    setCurrentProject: (project: Project | null) => void
}

// API functions (you'll need to implement these based on your backend)
const projectApi = {
    createProject: async (project: CreateProjectDTO): Promise<Project> => {
        console.log(project);
        // return await invoke<Project>("save_project", {
        //     title: project.projectName,
        //     description: project.description,
        //     tags: `${project.tags}`,
        //     type: project.projectType
        // })
        return {} as Project
    },

    getProjects: async (): Promise<Project[]> => {
        // get_projects
        // return await invoke<Project[]>("get_projects")
        return []
    },
}

// Create the store
export const useProjectStore = create<ProjectState>((set) => ({
    isCreatingProject: false,
    currentProject: null,
    error: null,

    createProject: async (project: CreateProjectDTO) => {
        set({isCreatingProject: true, error: null, currentProject: null})
        try {
            const newProject = await projectApi.createProject(project)

            // Invalidate and refetch projects query
            await queryClient.invalidateQueries({queryKey: ['projects']})

            set({
                isCreatingProject: false,
                currentProject: newProject,
            })
        } catch (error) {
            set({
                isCreatingProject: false,
                error: error instanceof Error ? error.message : 'An error occurred'
            })
            throw error
        }
    },

    resetError: () => set({error: null}),
    setCurrentProject: (project) => set({currentProject: project}),
}))

// React Query hooks
export const useCreateProject = () => {
    const createProject = useProjectStore((state) => state.createProject)

    return useMutation({
        mutationFn: (project: CreateProjectDTO) => createProject(project),
        onError: (error) => {
            console.error('Failed to create project:', error)
        },
    })
}

export const useProjects = () => {
    return useQuery({
        queryKey: ['projects'],
        queryFn: projectApi.getProjects,
    })
}