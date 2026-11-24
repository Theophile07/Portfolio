
import SkillsCard from "./ui/SkillsCard";
import skills from "../data/skills";

export default function Skills() {
  return (
    <section
      id="skills"
      className="min-h-screen border-b border-[#A5B4FC] bg-transparent px-5 py-20 sm:px-8 sm:py-24 md:px-12 lg:px-20 xl:px-24"
    >
      <div className="mx-auto flex max-w-[1440px] flex-col justify-center lg:min-h-[calc(100vh-8rem)]">

        {/* Introduction */}
        <div>
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-[#6366F1] sm:text-sm">
            Compétences
          </p>

          <h2 className="mb-5 text-3xl font-bold text-slate-950 sm:text-4xl">
            Ma stack technique et mes compétences
          </h2>

          <p className="text-base font-semibold leading-7 text-[#262B38] sm:text-lg">
            Les outils et technologies que j'utilise au quotidien.
          </p>
        </div>

        {/* Cartes */}
        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
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
    </section>
  );
}
