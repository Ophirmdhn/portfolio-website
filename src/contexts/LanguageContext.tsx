import { createContext, useContext, useEffect, useState } from 'react'
import type { ReactNode } from 'react'
import { translations } from '../translations'
import type { Translation } from '../translations'
import type { Language } from '../types/language'

interface LanguageContextValue {
    language: Language
    setLanguage: (language: Language) => void
    toggleLanguage: () => void
    t: Translation
}

const LanguageContext = createContext<LanguageContextValue | undefined>(undefined)

interface LanguageProviderProps {
    children: ReactNode
}

export function LanguageProvider({ children }: LanguageProviderProps) {
    const [language, setLanguage] = useState<Language>(() => {
        const savedLanguage = localStorage.getItem('portfolio-language')

        if (savedLanguage === 'en' || savedLanguage === 'id') {
            return savedLanguage
        }

        return 'en'
    })

    useEffect(() => {
        localStorage.setItem(
            'portfolio-language',
            language,
        )

        document.documentElement.lang = language
    }, [language])

    const toggleLanguage = () => {
        setLanguage((current) =>
            current === 'en'
                ? 'id'
                : 'en'
        )
    }

    const t: Translation = translations[language]

    return (
        <LanguageContext.Provider
            value={{
                language,
                setLanguage,
                toggleLanguage,
                t,
            }}
        >
            {children}
        </LanguageContext.Provider>
    )
}

export function useLanguage() {
    const context = useContext(LanguageContext)

    if (!context) {
        throw new Error('useLanguage must be used inside LanguageProvider')
    }

    return context
}