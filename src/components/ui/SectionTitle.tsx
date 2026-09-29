interface SectionTitleProps {
    label: string
    title: string
    description?: string
}

export default function SectionTitle({
    label,
    title,
    description,
}: SectionTitleProps) {
    return (
        <div className="max-w-2xl">

            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
                {label}
            </p>

            <h2 className="text-3xl font-bold tracking-[-0.03em] text-slate-950 sm:text-4xl lg:text-5xl">
                {title}
            </h2>

            {description && (
                <p className="mt-5 text-base leading-7 text-slate-600 sm:text-lg">
                    {description}
                </p>
            )}

        </div>
    )
}