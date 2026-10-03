import { en } from './en'
import { id } from './id'

export type Translation = typeof en

export const translations: Record<
    'en' | 'id', Translation
> = { en, id }