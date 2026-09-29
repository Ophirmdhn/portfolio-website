import type { LocalizedText } from './language'

export interface Project {
    id: number
    slug: string

    title: string
    category: LocalizedText

    shortDescription: LocalizedText
    description: LocalizedText

    image: string

    technologies: string[]

    github?: string
    demo?: string

    featured: boolean
}