export type SkillCategory =
    | 'Mobile'
    | 'Frontend'
    | 'Backend'
    | 'Database'
    | 'Tools'

export interface Skill {
    id: number
    name: string
    category: SkillCategory
}