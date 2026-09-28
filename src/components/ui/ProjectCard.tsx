import {
    ArrowUpRight,
    GitCommit,
} from 'lucide-react'

import type { Project } from '../../types/project'

import TechBadge from './TechBadge'

interface ProjectCardProps {
    project: Project
}

export default function ProjectCard({
    project,
}: ProjectCardProps) {
    return (
        <article className="group overflow-hidden rounded-2xl border border-slate-200 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">

            <div className="aspect-[16/10] overflow-hidden bg-slate-100">
                <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />
            </div>

            <div className="p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">
                    {project.category}
                </p>

                <h3 className="mt-3 text-xl font-bold tracking-tight text-slate-950">
                    {project.title}
                </h3>

                <p className="mt-3 leading-7 text-slate-600">
                    {project.shortDescription}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                    {project.technologies.map(
                        (technology) => (
                            <TechBadge
                                key={technology}
                                name={technology}
                            />
                        ),
                    )}
                </div>

                {(project.demo ||
                    project.github) && (
                        <div className="mt-6 flex flex-wrap gap-5 border-t border-slate-100 pt-5">

                            {project.demo && (
                                <a
                                    href={project.demo}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="inline-flex items-center gap-2 text-sm font-semibold text-slate-900"
                                >
                                    Live Demo

                                    <ArrowUpRight
                                        size={15}
                                    />
                                </a>
                            )}

                            {project.github && (
                                <a
                                    href={project.github}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="inline-flex items-center gap-2 text-sm font-semibold text-slate-600"
                                >
                                    <GitCommit size={15} />

                                    GitHub
                                </a>
                            )}

                        </div>
                    )}
            </div>

        </article>
    )
}