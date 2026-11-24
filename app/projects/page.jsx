
import ProjectCard from "../../components/ui/ProjectCard";
import projects from "../../data/project";

export default function ProjectPages() {
  return (
    <main className="min-h-screen">
      <section>
        <div className="mx-auto max-w-[1440px] px-5 pb-20 pt-32 sm:px-8 sm:pt-36 md:px-12 lg:px-20 xl:px-24">

          {/* En-tête */}
          <div className="mb-10 sm:mb-12">
            <h1 className="mb-5 text-3xl font-bold text-slate-950 sm:text-4xl">
              Tous mes projets
            </h1>

            <p className="max-w-[650px] text-base leading-7 text-[#262B38] sm:text-lg sm:leading-8">
              Découvrez l'ensemble de mes réalisations et les technologies
              utilisées pour les concevoir.
            </p>
          </div>

          {/* Grille des projets */}
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
            {projects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
              />
            ))}
          </div>

        </div>
      </section>
    </main>
  );
}
