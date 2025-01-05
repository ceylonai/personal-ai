// Types
export type Project = {
    id: string
    title: string
    description: string
    type: string
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