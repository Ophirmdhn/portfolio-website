import SectionTitle from '../components/ui/SectionTitle'

import { useLanguage } from '../contexts/LanguageContext'

export default function About() {
    const { t } = useLanguage()

    return (
        <section
            id="about"
            className="section-spacing bg-slate-50"
        >
            <div className="section-container">

                <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">

                    <SectionTitle
                        label={
                            t.about.label
                        }
                        title={
                            t.about.title
                        }
                    />

                    <div>

                        <p className="text-base leading-8 text-slate-600 sm:text-lg">
                            {
                                t.about
                                    .paragraph1
                            }
                        </p>

                        <p className="mt-5 text-base leading-8 text-slate-600 sm:text-lg">
                            {
                                t.about
                                    .paragraph2
                            }
                        </p>

                        <div className="mt-10 grid gap-6 border-t border-slate-200 pt-8 sm:grid-cols-3">

                            <div>
                                <p className="text-sm text-slate-500">
                                    {
                                        t.about
                                            .locationLabel
                                    }
                                </p>

                                <p className="mt-2 font-semibold text-slate-950">
                                    {
                                        t.about
                                            .location
                                    }
                                </p>
                            </div>

                            <div>
                                <p className="text-sm text-slate-500">
                                    {
                                        t.about
                                            .focusLabel
                                    }
                                </p>

                                <p className="mt-2 font-semibold text-slate-950">
                                    {
                                        t.about
                                            .focus
                                    }
                                </p>
                            </div>

                            <div>
                                <p className="text-sm text-slate-500">
                                    {
                                        t.about
                                            .stackLabel
                                    }
                                </p>

                                <p className="mt-2 font-semibold text-slate-950">
                                    {
                                        t.about
                                            .stack
                                    }
                                </p>
                            </div>

                        </div>

                    </div>

                </div>

            </div>
        </section>
    )
}