import SectionTitle from '../components/ui/SectionTitle'

import { skills } from '../data/skills'

import type { SkillCategory } from '../types/skill'

const categories: SkillCategory[] = [
    'Mobile',
    'Frontend',
    'Backend',
    'Database',
    'Tools',
]

export default function TechStack() {
    return (
        <section
            id="skills"
            className="section-spacing"
        >
            <div className="section-container">

                <SectionTitle
                    label="Tech Stack"
                    title="Technologies I work with."
                    description="Tools and technologies I use to build mobile applications, web platforms, and backend systems."
                />

                <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                    {categories.map((category) => {
                        const categorySkills =
                            skills.filter(
                                (skill) =>
                                    skill.category ===
                                    category,
                            )

                        return (
                            <article
                                key={category}
                                className="rounded-2xl border border-slate-200 p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                            >
                                <h3 className="font-semibold text-slate-950">
                                    {category}
                                </h3>

                                <div className="mt-5 flex flex-wrap gap-2">
                                    {categorySkills.map(
                                        (skill) => (
                                            <span
                                                key={
                                                    skill.id
                                                }
                                                className="rounded-lg bg-slate-100 px-3 py-2 text-sm font-medium text-slate-700"
                                            >
                                                {
                                                    skill.name
                                                }
                                            </span>
                                        ),
                                    )}
                                </div>
                            </article>
                        )
                    })}
                </div>

            </div>
        </section>
    )
}