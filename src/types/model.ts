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