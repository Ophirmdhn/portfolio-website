import SectionTitle from '../components/ui/SectionTitle'

import { useLanguage } from '../contexts/LanguageContext'

import { experiences } from '../data/experiences'

export default function Experience() {
    const {
        language,
        t,
    } = useLanguage()

    return (
        <section
            id="experience"
            className="section-spacing"
        >
            <div className="section-container">

                <SectionTitle
                    label={
                        t.experience.label
                    }
                    title={
                        t.experience.title
                    }
                    description={
                        t.experience
                            .description
                    }
                />

                <div className="mt-12 max-w-4xl">

                    {experiences.map(
                        (
                            experience,
                            index,
                        ) => (
                            <article
                                key={
                                    experience.id
                                }
                                className={`grid gap-5 py-8 md:grid-cols-[180px_1fr] md:gap-10 ${index !==
                                    0
                                    ? 'border-t border-slate-200'
                                    : ''
                                    }`}
                            >

                                <div>
                                    <p className="text-sm font-medium text-slate-500">
                                        {
                                            experience.startDate
                                        }{' '}
                                        —{' '}
                                        {
                                            experience
                                                .endDate[
                                            language
                                            ]
                                        }
                                    </p>
                                </div>

                                <div>

                                    <h3 className="text-xl font-bold text-slate-950">
                                        {
                                            experience
                                                .position[
                                            language
                                            ]
                                        }
                                    </h3>

                                    <p className="mt-1 font-medium text-slate-500">
                                        {
                                            experience.company
                                        }
                                    </p>

                                    <p className="mt-5 leading-7 text-slate-600">
                                        {
                                            experience
                                                .description[
                                            language
                                            ]
                                        }
                                    </p>

                                    <ul className="mt-5 space-y-2">

                                        {experience.responsibilities.map(
                                            (
                                                responsibility,
                                                responsibilityIndex,
                                            ) => (
                                                <li
                                                    key={
                                                        responsibilityIndex
                                                    }
                                                    className="flex gap-3 text-sm leading-6 text-slate-600"
                                                >
                                                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-slate-400" />

                                                    {
                                                        responsibility[
                                                        language
                                                        ]
                                                    }
                                                </li>
                                            ),
                                        )}

                                    </ul>

                                </div>

                            </article>
                        ),
                    )}

                </div>

            </div>
        </section>
    )
}