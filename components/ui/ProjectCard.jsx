
import Image from "next/image";
import Link from "next/link";

export default function ProjectCard({ project }) {
  return (
    <article className="group flex h-full min-w-0 flex-col rounded-2xl border border-[#A5B4FC]/60 bg-white/60 p-4 transition-all duration-300 hover:-translate-y-1 hover:border-[#6366F1] hover:shadow-xl sm:p-5">

      {/* Image du projet */}
      <div className="relative mb-4 aspect-video w-full overflow-hidden rounded-xl">
        <Image
          src={project.image}
          alt={`Aperçu du projet ${project.title}`}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>

      {/* Informations */}
      <div>
        <h3 className="mb-3 line-clamp-1 text-base font-bold leading-snug text-[#6366F1] sm:text-lg">
          {project.title}
        </h3>

        <p className="line-clamp-3 text-sm leading-6 text-[#262B38] sm:leading-7">
          {project.description}
        </p>
      </div>

      {/* Technologies */}
      <div className="mt-4 flex flex-wrap gap-2">
        {project.technologies.map((tech) => (
          <span
            key={tech}
            className="rounded-full bg-indigo-50 px-2.5 py-1.5 text-xs font-medium text-indigo-600 sm:px-3"
          >
            {tech}
          </span>
        ))}
      </div>

      {/* Bouton */}
      <div className="mt-auto pt-5">
        <Link
          href={`/projects/${project.slug}`}
          className="block rounded-lg bg-[#6366F1] px-4 py-3 text-center text-sm font-semibold text-white transition hover:bg-indigo-700"
        >
          Voir le projet
        </Link>
      </div>

    </article>
  );
}
