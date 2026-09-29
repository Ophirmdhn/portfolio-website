import {
    ArrowDown,
    GitCommit,
} from 'lucide-react'

// import profileImage from '../assets/images/profile/profile.webp'

import { useLanguage } from '../contexts/LanguageContext'

export default function Hero() {
    const { t } = useLanguage()

    return (
        <section className="relative overflow-hidden">

            <div className="section-container">

                <div className="grid min-h-[calc(100vh-72px)] items-center gap-14 py-16 lg:grid-cols-[1.15fr_0.85fr] lg:py-20">

                    {/* Content */}
                    <div className="order-2 lg:order-1">

                        <p className="mb-5 text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
                            {
                                t.hero.greeting
                            }
                        </p>

                        <h1 className="max-w-4xl text-4xl font-bold leading-[1.08] tracking-[-0.04em] text-slate-950 sm:text-5xl md:text-6xl lg:text-7xl">
                            Dwi Ophi
                            <br />
                            Ramadhan
                        </h1>

                        <h2 className="mt-6 text-xl font-semibold text-slate-700 sm:text-2xl">
                            {t.hero.role}
                        </h2>

                        <p className="mt-6 max-w-xl text-base leading-8 text-slate-600 sm:text-lg">
                            {
                                t.hero
                                    .description
                            }
                        </p>

                        <div className="mt-8 flex flex-col gap-3 sm:flex-row">

                            <a
                                href="#projects"
                                className="inline-flex items-center justify-center gap-2 rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-slate-800"
                            >
                                {
                                    t.hero
                                        .viewProjects
                                }

                                <ArrowDown
                                    size={16}
                                />
                            </a>

                            <a
                                href="https://github.com/Ophirmdhn"
                                target="_blank"
                                rel="noreferrer"
                                className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-800 transition-colors hover:bg-slate-100"
                            >
                                <GitCommit
                                    size={17}
                                />

                                GitHub
                            </a>

                        </div>

                        <div className="mt-10 flex flex-wrap gap-x-6 gap-y-3 text-sm font-medium text-slate-500">
                            <span>
                                Flutter
                            </span>

                            <span>
                                React
                            </span>

                            <span>
                                TypeScript
                            </span>

                            <span>
                                Laravel
                            </span>
                        </div>

                    </div>

                    {/* Profile */}
                    <div className="order-1 flex justify-center lg:order-2 lg:justify-end">

                        <div className="relative w-full max-w-sm sm:max-w-md">

                            <div className="aspect-[4/5] overflow-hidden rounded-[2rem] bg-slate-100">
                                <img
                                    src={
                                        "profileImage"
                                    }
                                    alt="Dwi Ophi Ramadhan"
                                    className="h-full w-full object-cover"
                                />
                            </div>

                            <div className="absolute -bottom-5 -left-5 hidden rounded-2xl border border-slate-200 bg-white px-5 py-4 shadow-lg sm:block">

                                <p className="text-xs font-medium uppercase tracking-wider text-slate-400">
                                    {
                                        t.hero
                                            .basedIn
                                    }
                                </p>

                                <p className="mt-1 font-semibold text-slate-950">
                                    {
                                        t.hero
                                            .location
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