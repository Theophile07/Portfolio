
export default function SkillsCard({
  title,
  description,
  stacks,
}) {
  return (
    <article className="flex h-full min-w-0 flex-col rounded-2xl border border-[#A5B4FC]/60 bg-white/60 p-4 transition-all duration-300 ease-out hover:-translate-y-1 hover:border-[#6366F1] hover:bg-white/90 hover:shadow-lg sm:p-5">

      <h3 className="mb-3 text-base font-bold leading-snug text-[#6366F1] sm:text-lg">
        {title}
      </h3>

      <p className="text-sm leading-6 text-[#262B38] sm:leading-7">
        {description}
      </p>

      <div className="mt-4 flex flex-wrap gap-2">
        {stacks.map((stack) => (
          <span
            key={stack}
            className="rounded-lg bg-[#9092ed]/85 px-2.5 py-1.5 text-xs font-semibold text-[#262B38] sm:px-3 sm:py-2 sm:text-sm"
          >
            {stack}
          </span>
        ))}
      </div>

    </article>
  );
}
