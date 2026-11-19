import ProjectCard from "./ui/ProjectCard"
import projects from "../data/project"
export default function Project(){

    return(
        <>
        <div id="projects" className="h-screen border-b border-[#A5B4FC] bg-transparent transition-colors">
            <div className="mx-auto min-h-screen max-w-[1440px] items-center justify-between gap-10 px-8 pt-32 md:px-12 lg:px-20 xl:px-24">
                <div className="min-w-0 flex-1">
                    <h2 className="text-3xl font-bold mb-5 text-slate-950">
                        Mes projets
                    </h2>
                    <p className="text-lg font-semibold mb-5 text-slate-700">
                        Des idées transformées en réalisations concrètes.
                    </p>
                    <p className="text-lg text-[#6366F1] max-w-[620px]">
                        Chaque projet est une occasion d’explorer de nouvelles approches, 
                        de résoudre des problèmes et de concevoir des expériences digitales utiles, 
                        performantes et intuitives.
                    </p>
                </div>

                <div className="flex flex-1 items-stretch gap-5">
                    {projects.map((project) => (
                        <ProjectCard key={project.id} title={project.title} description={project.description} image={project.image} />
                    ))
                    }
                </div>
            </div>

        </div>
        
        </>
        
    )
}