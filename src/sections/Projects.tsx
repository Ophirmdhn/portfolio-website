import {
    ArrowUpRight,
    GitCommit,
} from 'lucide-react'

import ProjectCard from '../components/ui/ProjectCard'
import SectionTitle from '../components/ui/SectionTitle'
import TechBadge from '../components/ui/TechBadge'

import { projects } from '../data/projects'

export default function Projects() {
    const featuredProject =
        projects.find(
            (project) => project.featured,
        )

    const otherProjects =
        projects.filter(
            (project) => !project.featured,
        )

    return (
        <section
            id="projects"
            className="section-spacing bg-slate-50"
        >
            <div className="section-container">

                <SectionTitle
                    label="Projects"
                    title="Selected work."
                    description="A collection of mobile and web applications I've designed and developed."
                />

                {featuredProject && (
                    <article className="mt-12 overflow-hidden rounded-3xl border border-slate-200 bg-white">

                        <div className="grid lg:grid-cols-2">

                            <div className="overflow-hidden bg-slate-100">
                                <img
                                    src={
                                        featuredProject.image
                                    }
                                    alt={
                                        featuredProject.title
                                    }
                                    className="h-full min-h-[320px] w-full object-cover"
                                />
                            </div>

                            <div className="flex flex-col justify-center p-7 sm:p-10 lg:p-12">

                                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
                                    Featured Project
                                </p>

                                <h3 className="mt-4 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
                                    {
                                        featuredProject.title
                                    }
                                </h3>

                                <p className="mt-5 leading-8 text-slate-600">
                                    {
                                        featuredProject.description
                                    }
                                </p>

                                <div className="mt-6 flex flex-wrap gap-2">
                                    {featuredProject.technologies.map(
                                        (technology) => (
                                            <TechBadge
                                                key={
                                                    technology
                                                }
                                                name={
                                                    technology
                                                }
                                            />
                                        ),
                                    )}
                                </div>

                                <div className="mt-8 flex flex-wrap gap-5">

                                    {featuredProject.demo && (
                                        <a
                                            href={
                                                featuredProject.demo
                                            }
                                            target="_blank"
                                            rel="noreferrer"
                                            className="inline-flex items-center gap-2 font-semibold text-slate-950"
                                        >
                                            Live Demo

                                            <ArrowUpRight
                                                size={17}
                                            />
                                        </a>
                                    )}

                                    {featuredProject.github && (
                                        <a
                                            href={
                                                featuredProject.github
                                            }
                                            target="_blank"
                                            rel="noreferrer"
                                            className="inline-flex items-center gap-2 font-semibold text-slate-600"
                                        >
                                            <GitCommit
                                                size={17}
                                            />

                                            GitHub
                                        </a>
                                    )}

                                </div>
                            </div>

                        </div>
                    </article>
                )}
                <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {otherProjects.map((project) => (
                        <ProjectCard
                            key={project.id}
                            project={project}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}