export interface Project {
    id: number
    slug: string
    title: string
    // category: string
    shortDescription: string
    description: string
    image: string
    technologies: string[]
    github?: string
    demo?: string
    featured: boolean
}