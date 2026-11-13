import SkillsCard from "./ui/SkillsCard"
import skills from "../data/skills"
export default function Skills() {


  return (
    <section
      id="skills"
      className="min-h-screen border-b border-b-[#A5B4FC] bg-transparent py-10"
    >
      <div className="mx-auto flex min-h-[calc(100vh-8rem)] max-w-[1440px] items-center justify-between gap-10 px-8 md:px-12 lg:px-20 xl:px-24">

        <div className="min-w-0 flex-1">

          
          <div>
            <h2 className="mb-5 text-3xl font-bold text-slate-950">
              Ma stack technique et mes compétences
            </h2>

            <p className="font-semibold leading-5 text-[#262B38]">
              Les outils et technologies que j'utilise au quotidien.
            </p>
            
          </div>

          <div className="mt-5 flex items-stretch flex-col gap-5">

              <div id="about-card" className="flex gap-5">
               {skills.map((skill) => (
                <SkillsCard
                  key={skill.title}
                  title={skill.title}
                  description={skill.description}
                  stacks={skill.stacks}
                />
              ))}
              </div>
              
          </div>
        </div>
      </div>
    </section>
  );
}
