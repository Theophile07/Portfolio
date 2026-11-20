export default function SkillsCard({ title, description, stacks, icone}) {
    return (
    <article className="flex h-full flex-col rounded-2xl border border-[#A5B4FC]/60 bg-white/60 p-5 transition-all duration-300 ease-out hover:-translate-y-1 hover:border-[#6366F1] hover:bg-white/90 hover:shadow-lg">
      <h3 className="mb-3 text-lg font-bold leading-snug text-[#6366F1]">
        {title}
      </h3>
      <p className="text-sm leading-7 text-[#262B38]">
        {description}
      </p>
      <div className="mt-3 flex flex-wrap gap-2">
        {stacks.map((stack) => (
            <span
            key={stack}
            className="rounded-lg bg-[#9092ed]/85 px-3 py-2 text-sm font-semibold text-[#262B38]">
                {stack}
            </span>
        ))}

      </div>
    </article>
    )
}