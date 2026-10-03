import { ArrowUpRight, GitBranch } from 'lucide-react'
import { useLanguage } from '../../contexts/LanguageContext'
import type { Project } from '../../types/project'
import TechBadge from './TechBadge'

interface ProjectCardProps {
    project: Project
}

export default function ProjectCard({ project }: ProjectCardProps) {
    const { language, t } = useLanguage()

    return (
        <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
            <div className="aspect-[16/9] overflow-hidden bg-slate-100">
                <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />
            </div>
            <div className="flex flex-1 flex-col p-5">
                <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-400">
                    {project.category[language]}
                </p>
                <h3 className="mt-2 text-lg font-bold tracking-tight text-slate-950">
                    {project.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">
                    {project.shortDescription[language]}
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                    {project.technologies.map((technology) => (
                        <TechBadge
                            key={technology}
                            name={technology}
                        />
                    ))}
                </div>

                {(project.demo || project.github) && (
                    <div className="mt-auto flex flex-wrap gap-4 border-t border-slate-100 pt-5">
                        {project.demo && (
                            <a
                                href={project.demo}
                                target="_blank"
                                rel="noreferrer"
                                className="inline-flex items-center gap-1.5 text-sm font-semibold text-slate-900 transition-colors hover:text-slate-600"
                            >
                                {t.projects.liveDemo}
                                <ArrowUpRight size={14} />
                            </a>
                        )}

                        {project.github && (
                            <a href={project.github}
                                target="_blank"
                                rel="noreferrer"
                                className="inline-flex items-center gap-1.5 text-sm font-semibold text-slate-500 transition-colors hover:text-slate-950"
                            >
                                <GitBranch size={14} />
                                {t.projects.github}
                            </a>
                        )}
                    </div>
                )}
            </div>
        </article>
    )
}