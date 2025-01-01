'use client'

import {useState} from 'react'
import {useForm, Controller} from 'react-hook-form'
import {X} from 'lucide-react'
import {Button} from "@/components/ui/button.tsx"
import {Input} from "@/components/ui/input.tsx"
import {Textarea} from "@/components/ui/textarea.tsx"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select.tsx"
import {Label} from "@/components/ui/label.tsx"
import {Card, CardContent, CardFooter, CardHeader, CardTitle} from "@/components/ui/card.tsx"
import Layout from "@/app/pages/dashboard/layout.tsx";

type FormData = {
    projectName: string
    description: string
    projectType: string
    tags: string[]
}

const projectTypes = ['Web Application', 'Mobile App', 'Desktop Software', 'API', 'Other']

export default function ProjectCreationScreen() {
    const [tags, setTags] = useState<string[]>([])
    const {register, handleSubmit, control, formState: {errors}} = useForm<FormData>()

    const onSubmit = (data: FormData) => {
        console.log(data)
        // Here you would typically send the data to your backend
    }

    const handleAddTag = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter' && event.currentTarget.value && tags.length < 10) {
            event.preventDefault()
            const newTag = event.currentTarget.value.trim()
            if (!tags.includes(newTag)) {
                setTags([...tags, newTag])
                event.currentTarget.value = ''
            }
        }
    }

    const handleRemoveTag = (tagToRemove: string) => {
        setTags(tags.filter(tag => tag !== tagToRemove))
    }

    return (
        <Layout>
            <Card className="w-full max-w-2xl mx-auto">
                <CardHeader>
                    <CardTitle>Create New Project</CardTitle>
                </CardHeader>
                <CardContent>
                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                        <div className="space-y-2">
                            <Label htmlFor="projectName">Project Name</Label>
                            <Input
                                id="projectName"
                                {...register('projectName', {
                                    required: 'Project name is required',
                                    minLength: {value: 3, message: 'Project name must be at least 3 characters'},
                                    maxLength: {value: 50, message: 'Project name must not exceed 50 characters'}
                                })}
                                aria-invalid={errors.projectName ? "true" : "false"}
                            />
                            {errors.projectName && <p className="text-sm text-red-500">{errors.projectName.message}</p>}
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="description">Description</Label>
                            <Textarea
                                id="description"
                                {...register('description', {
                                    maxLength: {
                                        value: 500,
                                        message: 'Description must not exceed 500 characters'
                                    }
                                })}
                                aria-invalid={errors.description ? "true" : "false"}
                            />
                            {errors.description && <p className="text-sm text-red-500">{errors.description.message}</p>}
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="projectType">Project Type</Label>
                            <Controller
                                name="projectType"
                                control={control}
                                rules={{required: 'Project type is required'}}
                                render={({field}) => (
                                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                                        <SelectTrigger id="projectType">
                                            <SelectValue placeholder="Select project type"/>
                                        </SelectTrigger>
                                        <SelectContent>
                                            {projectTypes.map((type) => (
                                                <SelectItem key={type} value={type}>{type}</SelectItem>
                                            ))}
                                        </SelectContent>
                                    </Select>
                                )}
                            />
                            {errors.projectType && <p className="text-sm text-red-500">{errors.projectType.message}</p>}
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="tags">Tags</Label>
                            <div className="flex flex-wrap gap-2 mb-2">
                                {tags.map(tag => (
                                    <span key={tag}
                                          className="bg-primary text-primary-foreground px-2 py-1 rounded-full text-sm flex items-center">
                  {tag}
                                        <button type="button" onClick={() => handleRemoveTag(tag)}
                                                className="ml-1 focus:outline-none">
                    <X size={14}/>
                  </button>
                </span>
                                ))}
                            </div>
                            <Input
                                id="tags"
                                placeholder="Enter tags and press Enter"
                                onKeyDown={handleAddTag}
                                aria-invalid={errors.tags ? "true" : "false"}
                            />
                            {tags.length >= 10 && <p className="text-sm text-yellow-500">Maximum 10 tags allowed</p>}
                        </div>

                        <CardFooter className="px-0 flex justify-end space-x-4">
                            <Button type="button" variant="outline">Cancel</Button>
                            <Button type="submit">Create Project</Button>
                        </CardFooter>
                    </form>
                </CardContent>
            </Card>
        </Layout>
    )
}

