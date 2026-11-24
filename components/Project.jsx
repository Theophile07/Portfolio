
import ProjectCard from "./ui/ProjectCard";
import projects from "../data/project";
import Link from "next/link";

export default function Project() {
  return (
    <section
      id="project"
      className="min-h-screen border-b border-[#A5B4FC]/60 bg-transparent px-5 py-20 sm:px-8 sm:py-24 md:px-12 lg:px-20 xl:px-24"
    >
      <div className="mx-auto max-w-[1440px]">

        <div className="mb-10 sm:mb-12">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-[#6366F1] sm:text-sm">
            Portfolio
          </p>

          <h2 className="mb-5 text-3xl font-bold text-slate-950 sm:text-4xl">
            Mes projets
          </h2>

          <p className="max-w-[650px] text-base font-semibold leading-7 text-slate-600 sm:text-lg sm:leading-8">
            Des idées transformées en réalisations concrètes.
            Chaque projet est une occasion d'explorer de nouvelles
            approches et de concevoir des expériences digitales utiles,
            performantes et intuitives.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        <div className="mt-10 flex justify-center sm:mt-12">
          <Link
            href="/projects"
            className="inline-flex items-center justify-center gap-2 rounded-xl border border-[#6366F1] px-5 py-3 text-sm font-semibold text-[#6366F1] transition-all duration-300 hover:bg-[#6366F1] hover:text-white sm:px-6"
          >
            Voir tous les projets
            <span aria-hidden="true">→</span>
          </Link>
        </div>

      </div>
    </section>
  );
}
