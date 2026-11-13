import Button from "./Button";
export default function ProjectCard({ title, description, image}) {
    return (
    <article className="flex h-full flex-col rounded-2xl border border-[#A5B4FC]/60 bg-white/40 p-5 transition duration-300 hover:-translate-y-1 hover:border-[#6366F1] hover:shadow-lg">
      <img src={image} alt="Portfolio" className="mb-3 h-40 w-full rounded-lg object-cover" />
      <h3 className="mb-3 text-lg font-bold leading-snug text-[#6366F1]">
        {title}
      </h3>
      <p className="text-sm leading-7 text-[#262B38]">   
        {description}
      </p>

      <Button text="Voir le projet" href="#" variant="secondary" className="mt-3 w-full" />

    </article>
    )
}