interface TechBadgeProps {
    name: string
}

export default function TechBadge({ name }: TechBadgeProps) {
    return (
        <span className="inline-flex rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs font-medium text-slate-600">
            {name}
        </span>
    )
}