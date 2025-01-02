import {create} from 'zustand'
import {useMutation, useQuery} from '@tanstack/react-query'
import {queryClient} from "@/lib/react-query.ts";

// Types
export type Project = {
    id: string
    projectName: string
    description: string
    projectType: string
    tags: string[]
    createdAt: string
    updatedAt: string
}

export type CreateProjectDTO = {
    projectName: string
    description: string
    projectType: string
    tags: string[]
}

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
        const response = await fetch('/api/projects', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(project),
        })

        if (!response.ok) {
            throw new Error('Failed to create project')
        }

        return response.json()
    },

    getProjects: async (): Promise<Project[]> => {
        const response = await fetch('/api/projects')
        if (!response.ok) {
            throw new Error('Failed to fetch projects')
        }
        return response.json()
    },
}

// Create the store
export const useProjectStore = create<ProjectState>((set) => ({
    isCreatingProject: false,
    currentProject: null,
    error: null,

    createProject: async (project: CreateProjectDTO) => {
        set({isCreatingProject: true, error: null})
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

// Example usage in your component:
/*
import { useCreateProject } from '@/stores/project-store'

export default function ProjectCreationScreen() {
  const { mutate: createProject, isLoading } = useCreateProject()

  const onSubmit = (data: FormData) => {
    createProject({
      projectName: data.projectName,
      description: data.description,
      projectType: data.projectType,
      tags: data.tags,
    })
  }

  return (
    // Your existing form JSX
  )
}
*/