import SectionTitle from '../components/ui/SectionTitle'

export default function About() {
    return (
        <section
            id="about"
            className="section-spacing bg-slate-50"
        >
            <div className="section-container">
                <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">

                    <SectionTitle
                        label="About Me"
                        title="Building software that solves real problems."
                    />

                    <div>
                        <p className="text-base leading-8 text-slate-600 sm:text-lg">
                            I'm a developer focused on building
                            mobile applications, web platforms,
                            and backend systems. I enjoy turning
                            ideas and real operational problems
                            into practical digital solutions.
                        </p>

                        <p className="mt-5 text-base leading-8 text-slate-600 sm:text-lg">
                            Alongside software development, I
                            also have hands-on experience in IT
                            support, information systems,
                            networking, hardware, and technical
                            troubleshooting.
                        </p>

                        <div className="mt-10 grid gap-6 border-t border-slate-200 pt-8 sm:grid-cols-3">

                            <div>
                                <p className="text-sm text-slate-500">
                                    Location
                                </p>

                                <p className="mt-2 font-semibold text-slate-950">
                                    Kendari, Indonesia
                                </p>
                            </div>

                            <div>
                                <p className="text-sm text-slate-500">
                                    Focus
                                </p>

                                <p className="mt-2 font-semibold text-slate-950">
                                    Fullstack Development
                                </p>
                            </div>

                            <div>
                                <p className="text-sm text-slate-500">
                                    Main Stack
                                </p>

                                <p className="mt-2 font-semibold text-slate-950">
                                    Flutter & React
                                </p>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}