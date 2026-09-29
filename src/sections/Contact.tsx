import {
    GitBranch,
    PersonStanding,
    Mail,
} from 'lucide-react'

import { useLanguage } from '../contexts/LanguageContext'

export default function Contact() {
    const { t } = useLanguage()

    return (
        <section
            id="contact"
            className="section-spacing bg-slate-950 text-white"
        >
            <div className="section-container">

                <div className="max-w-3xl">

                    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">
                        {
                            t.contact.label
                        }
                    </p>

                    <h2 className="mt-4 text-4xl font-bold tracking-[-0.03em] sm:text-5xl lg:text-6xl">
                        {
                            t.contact.title
                        }
                    </h2>

                    <p className="mt-6 max-w-2xl text-base leading-8 text-slate-400 sm:text-lg">
                        {
                            t.contact
                                .description
                        }
                    </p>

                    <div className="mt-8 flex flex-wrap gap-3">

                        <a
                            href="mailto:YOUR_EMAIL"
                            className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-950 transition-colors hover:bg-slate-200"
                        >
                            <Mail
                                size={17}
                            />

                            {
                                t.contact.email
                            }
                        </a>

                        <a
                            href="https://github.com/Ophirmdhn"
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-700 text-slate-300 transition-colors hover:border-slate-500 hover:text-white"
                            aria-label="GitHub"
                        >
                            <GitBranch
                                size={18}
                            />
                        </a>

                        <a
                            href="YOUR_LINKEDIN_URL"
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-700 text-slate-300 transition-colors hover:border-slate-500 hover:text-white"
                            aria-label="LinkedIn"
                        >
                            <PersonStanding
                                size={18}
                            />
                        </a>

                    </div>

                </div>

            </div>
        </section>
    )
}