
export default function ServiceCard({ title, subtitle, description }) {
  return (
    <article className="flex h-full min-w-0 flex-col rounded-2xl border border-[#A5B4FC]/60 bg-white/40 p-4 transition duration-300 hover:-translate-y-1 hover:border-[#6366F1] hover:bg-white/90 hover:shadow-lg sm:p-5">

      <h3 className="mb-2 text-base font-bold leading-snug text-[#6366F1] sm:mb-3 sm:text-lg">
        {title}
      </h3>

      <h4 className="mb-2 text-sm font-semibold leading-snug text-[#6366F1] sm:mb-3">
        {subtitle}
      </h4>

      <p className="text-sm leading-6 text-[#262B38] sm:leading-7">
        {description}
      </p>

    </article>
  );
}
