import ProjectCard from "./ui/ProjectCard"
import projects from "../data/project"
import Link from "next/link"
export default function Project(){

    return(
        <>
        <section id="project" className="min-h-screen border-b border-[#A5B4FC]/60 bg-transparent">
            <div className="mx-auto max-w-[1440px] px-8 pt-32 pb-24 md:px-12 lg:px-20 xl:px-24">
                <div className="mb-12">
                    <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#6366F1]">
                        Portfolio
                    </p>
                    <h2 className="mb-5 text-3xl font-bold text-slate-950 lg:text-4xl">
                        Mes projets
                    </h2>

                    <p className="max-w-[650px] text-base font-semibold leading-8 text-slate-600 md:text-lg">
                        Des idées transformées en réalisations concrètes.
                        Chaque projet est une occasion d'explorer de nouvelles
                        approches et de concevoir des expériences digitales utiles,
                        performantes et intuitives.
                    </p>
                </div>
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {projects.map((project) => (
                        <ProjectCard key={project.id} project={project} />
                    ))}
                </div>
                
                <div className="mt-12 flex justify-center">
                    <Link
                        href="/projects"
                        className="inline-flex items-center gap-2 rounded-xl border border-[#6366F1] px-6 py-3 text-sm font-semibold text-[#6366F1] transition-all duration-300 hover:bg-[#6366F1] hover:text-white"
                    >
                        Voir tous les projets
                        <span aria-hidden="true">→</span>
                    </Link>
                </div>
            </div>
        </section>
        
        </>
        
    )
}