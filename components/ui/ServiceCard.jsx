export default function SkillsCard({ title, subtitle, description }) {
    return (
    <article className="flex h-full flex-col rounded-2xl border border-[#A5B4FC]/60 bg-white/40 p-5 transition duration-300 hover:-translate-y-1 hover:border-[#6366F1] hover:shadow-lg">
        <h3 className="mb-3 text-lg font-bold leading-snug text-[#6366F1]">
            {title}
        </h3>
        <h4 className="mb-3 text-sm font-semibold leading-snug text-[#6366F1]">
            {subtitle}
        </h4>
        <p className="text-sm leading-7 text-[#262B38]">
            {description}
        </p>
      
    </article>
    )
}