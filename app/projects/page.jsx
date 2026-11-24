import ProjectCard from "../../components/ui/ProjectCard"
import projects from "../../data/project"

export default function ProjectPages(){
    return(
        <>
        <main className="min-h-screen">
            <section>
                <div className="mx-auto max-w-[1440px] px-8 pb-20 pt-36 md:px-12 lg:px-20 xl:px-24">
                    <h1 className="mb-5 text-4xl font-bold text-slate-950">Tous mes projets</h1>
                    <p className="mb-12 max-w-[650px] leading-8 text-[#262B38]">
                        Découvrez l'ensemble de mes réalisations et les technologies
                        utilisées pour les concevoir.
                    </p>

                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        {projects.map((project) => (
                            <ProjectCard key={project.id} project={project}/>
                        ))}
                    </div>
                </div>
            </section>
        </main>
        </>
    )
}