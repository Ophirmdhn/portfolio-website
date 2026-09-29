import type { LocalizedText } from './language'

export interface Experience {
    id: number
    position: LocalizedText
    company: string
    startDate: string
    endDate: LocalizedText
    description: LocalizedText
    responsibilities: LocalizedText[]
}