import {
    GitCommit,
    Inbox,
    Mail,
} from 'lucide-react'

export default function Contact() {
    return (
        <section
            id="contact"
            className="section-spacing bg-slate-950 text-white"
        >
            <div className="section-container">

                <div className="max-w-3xl">

                    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">
                        Contact
                    </p>

                    <h2 className="mt-4 text-4xl font-bold tracking-[-0.03em] sm:text-5xl lg:text-6xl">
                        Let's build something useful together.
                    </h2>

                    <p className="mt-6 max-w-2xl text-base leading-8 text-slate-400 sm:text-lg">
                        Have a project, collaboration, or
                        opportunity in mind? Feel free to
                        reach out.
                    </p>

                    <div className="mt-8 flex flex-wrap gap-3">

                        <a
                            href="mailto:YOUR_EMAIL"
                            className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-950 transition-colors hover:bg-slate-200"
                        >
                            <Mail size={17} />

                            Email Me
                        </a>

                        <a
                            href="https://github.com/Ophirmdhn"
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-700 text-slate-300 transition-colors hover:border-slate-500 hover:text-white"
                            aria-label="GitHub"
                        >
                            <GitCommit size={18} />
                        </a>

                        <a
                            href="YOUR_LINKEDIN_URL"
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-700 text-slate-300 transition-colors hover:border-slate-500 hover:text-white"
                            aria-label="LinkedIn"
                        >
                            <Inbox size={18} />
                        </a>

                    </div>

                </div>

            </div>
        </section>
    )
}