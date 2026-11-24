
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import projects from "@/data/project";
import { Suspense } from "react";

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}
export default async function ProjectDetails({ params }) {
  return(
    <Suspense
    fallback={
      <div className="min-h-screen pt-36 text-center text-[#6366F1]">
        Chargement du projet...
      </div>
    }>
      <ProjectContent params={params} />
    </Suspense>
  )
}
async function ProjectContent({params}) {
  const { slug } = await params;
  const project = projects.find(
    (item) => item.slug === slug
  );
  
  if (!project) {
    notFound();
  }
  const details = project.details;
  
  return (
    <main className="min-h-screen">
      <section>
        <div className="mx-auto max-w-[1440px] px-8 pb-24 pt-36 md:px-12 lg:px-20 xl:px-24">
  
          {/* En-tête du projet */}
          <div className="max-w-3xl">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-[#6366F1]">
              {project.category}
              {details?.collaboration &&
                ` · ${details.collaboration}`}
            </p>
  
            <h1 className="text-5xl font-bold tracking-tight text-slate-950 md:text-6xl">
              {project.title}
            </h1>
  
            <p className="mt-6 text-lg leading-8 text-[#262B38]">
              {details?.introduction || project.description}
            </p>
  
            {details?.contribution && (
              <p className="mt-5 leading-8 text-[#262B38]">
                <strong>Ma contribution :</strong>{" "}
                {details.contribution}
              </p>
            )}
  
            <div className="mt-8 flex flex-wrap gap-3">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-[#A5B4FC]/60 bg-white/70 px-4 py-2 text-sm font-medium text-[#6366F1]"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
  
          {/* Capture du projet */}
          <div className="relative mt-16 w-full overflow-hidden rounded-3xl border border-[#A5B4FC]/60 bg-white p-3 shadow-lg">
            <Image
              src={project.image}
              alt={`Interface de ${project.title}`}
              width={1440}
              height={900}
              className="h-auto w-full rounded-2xl object-cover"
              priority
            />
          </div>
  
          {/* Présentation */}
          {details && (
            <section className="mt-24">
              <div className="mb-10">
                <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#6366F1]">
                  01 — Présentation
                </p>
  
                <h2 className="text-3xl font-bold tracking-tight text-slate-950 md:text-4xl">
                  À propos du projet
                </h2>
              </div>
  
              <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                <div className="rounded-2xl border border-[#A5B4FC]/60 bg-white/60 p-7">
                  <h3 className="mb-4 text-xl font-bold text-[#6366F1]">
                    Le contexte
                  </h3>
  
                  <p className="leading-8 text-[#262B38]">
                    {details.context}
                  </p>
                </div>
  
                <div className="rounded-2xl border border-[#A5B4FC]/60 bg-white/60 p-7">
                  <h3 className="mb-4 text-xl font-bold text-[#6366F1]">
                    L'objectif
                  </h3>
  
                  <p className="leading-8 text-[#262B38]">
                    {details.objective}
                  </p>
                </div>
              </div>
            </section>
          )}
  
          {/* Fonctionnalités */}
          {details?.features && (
            <section className="mt-24">
              <div className="mb-10">
                <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#6366F1]">
                  02 — Fonctionnalités
                </p>
  
                <h2 className="text-3xl font-bold tracking-tight text-slate-950 md:text-4xl">
                  Ce que propose l'application
                </h2>
              </div>
  
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {details.features.map((feature) => (
                  <article
                    key={feature.title}
                    className="rounded-2xl border border-[#A5B4FC]/60 bg-white/60 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#6366F1] hover:shadow-lg"
                  >
                    <h3 className="mb-3 font-bold text-slate-950">
                      {feature.title}
                    </h3>
  
                    <p className="text-sm leading-7 text-[#262B38]">
                      {feature.description}
                    </p>
                  </article>
                ))}
              </div>
            </section>
          )}
  
          {/* Ma contribution */}
          {details?.responsibilities && (
            <section className="mt-24">
              <div className="mb-10">
                <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#6366F1]">
                  03 — Ma contribution
                </p>
  
                <h2 className="text-3xl font-bold tracking-tight text-slate-950 md:text-4xl">
                  Mon rôle dans le projet
                </h2>
  
                <p className="mt-5 max-w-3xl leading-8 text-[#262B38]">
                  {details.contribution}
                </p>
              </div>
  
              <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                {details.responsibilities.map((item) => (
                  <article
                    key={item.title}
                    className="rounded-2xl border border-[#A5B4FC]/60 bg-white/60 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#6366F1] hover:shadow-lg"
                  >
                    <h3 className="mb-3 font-bold text-slate-950">
                      {item.title}
                    </h3>
  
                    <p className="text-sm leading-7 text-[#262B38]">
                      {item.description}
                    </p>
                  </article>
                ))}
              </div>
            </section>
          )}
  
          {/* Technologies */}
          {details?.technologies && (
            <section className="mt-24">
              <div className="mb-10">
                <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#6366F1]">
                  04 — Environnement technique
                </p>
  
                <h2 className="text-3xl font-bold tracking-tight text-slate-950 md:text-4xl">
                  Les technologies utilisées
                </h2>
              </div>
  
              <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                {details.technologies.map((tech) => (
                  <article
                    key={tech.name}
                    className="rounded-2xl border border-[#A5B4FC]/60 bg-white/60 p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[#6366F1] hover:shadow-lg"
                  >
                    <p className="mb-3 text-sm font-medium text-[#6366F1]">
                      {tech.role}
                    </p>
  
                    <h3 className="mb-4 text-2xl font-bold text-slate-950">
                      {tech.name}
                    </h3>
  
                    <p className="text-sm leading-7 text-[#262B38]">
                      {tech.description}
                    </p>
                  </article>
                ))}
              </div>
  
              {details.dataManagement && (
                <div className="mt-8 rounded-2xl border border-[#A5B4FC]/60 bg-white/60 p-7">
                  <h3 className="mb-4 text-xl font-bold text-[#6366F1]">
                    Gestion et communication des données
                  </h3>
  
                  <p className="leading-8 text-[#262B38]">
                    {details.dataManagement}
                  </p>
                </div>
              )}
            </section>
          )}
  
          {/* Défis et apprentissages */}
          {details?.challenge && details?.learning && (
            <section className="mt-24">
              <div className="mb-10">
                <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#6366F1]">
                  05 — Défis et apprentissages
                </p>
  
                <h2 className="text-3xl font-bold tracking-tight text-slate-950 md:text-4xl">
                  Les défis rencontrés
                </h2>
              </div>
  
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <article className="rounded-2xl border border-[#A5B4FC]/60 bg-white/60 p-7">
                  <h3 className="mb-4 text-xl font-bold text-slate-950">
                    Le défi technique
                  </h3>
  
                  <p className="leading-8 text-[#262B38]">
                    {details.challenge}
                  </p>
                </article>
  
                <article className="rounded-2xl border border-[#A5B4FC]/60 bg-white/60 p-7">
                  <h3 className="mb-4 text-xl font-bold text-slate-950">
                    Ce que j'ai appris
                  </h3>
  
                  <p className="leading-8 text-[#262B38]">
                    {details.learning}
                  </p>
                </article>
              </div>
            </section>
          )}
  
          {/* Bilan */}
          {details?.conclusion && (
            <section className="mt-24">
              <div className="rounded-3xl border border-[#A5B4FC]/60 bg-white/70 p-8 md:p-12">
                <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-[#6366F1]">
                  06 — Bilan du projet
                </p>
  
                <h2 className="max-w-2xl text-3xl font-bold tracking-tight text-slate-950 md:text-4xl">
                  Une expérience enrichissante en développement web.
                </h2>
  
                <p className="mt-6 max-w-3xl leading-8 text-[#262B38]">
                  {details.conclusion}
                </p>
              </div>
            </section>
          )}
  
          {/* Retour aux projets */}
          <div className="mt-16">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 font-semibold text-[#6366F1] transition hover:gap-3"
            >
              ← Retour à tous les projets
            </Link>
          </div>
  
        </div>
      </section>
    </main>
  );
  
}