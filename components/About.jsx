
import Image from "next/image";
import FeatureCard from "./ui/FeatureCard";
import Button from "./ui/Button";
export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen border-b border-b-[#A5B4FC] bg-transparent pt-32 pb-32"
    >
      <div className="mx-auto flex min-h-[calc(100vh-8rem)] max-w-[1440px] items-center justify-between gap-10 px-8 md:px-12 lg:px-20 xl:px-24">

        <div className="hidden shrink-0 justify-center lg:flex lg:w-[560px]">
          <div className="relative h-[640px] w-full overflow-hidden rounded-[30px] border-[5px] border-[#A5B4FC] shadow-md">
            <Image
              src="/images/Theo-1.png"
              alt="Portrait professionnel de Théophile"
              priority
              fill
              sizes="560px"
              className="object-cover"
            />
          </div>
        </div>

        <div className="min-w-0 flex-1">

          
          <div>
            <h2 className="mb-5 text-3xl font-bold text-slate-950">
              Qui suis-je ?
            </h2>

            <p className="font-semibold leading-5 text-[#262B38]">
              Je suis Théophile Lumbala et je suis un créatif du numérique
              passionné par le développement web, le design d'interface et
              la création de solutions digitales utiles. J'aime transformer
              des idées en expériences modernes, accessibles et pensées
              pour répondre à de vrais besoins.
            </p>
            <p className="font-semibold leading-5 text-[#262B38]">
              Je m'intéresse à la rencontre entre la technologie, le design
              et les besoins humains. Mon approche consiste à comprendre
              un problème, imaginer une solution pertinente et lui donner
              vie à travers une expérience digitale cohérente.

              Au-delà du code, je m'intéresse à la manière dont les
              utilisateurs interagissent avec un produit et à la façon
              dont une bonne conception peut simplifier leur quotidien.
            </p>

            
          </div>

          <div className="mt-5 flex flex-col gap-5">
              <h2 className="text-2xl font-bold text-slate-950">
                Ce qui me définit
              </h2>

              <div id="about-card" className="flex flex-wrap gap-5">
                <FeatureCard
                  title="La logique du développement"
                  description="J'aime comprendre comment les choses fonctionnent et transformer des besoins en fonctionnalités concrètes."
                />

                <FeatureCard
                  title="La créativité et le design"
                  description="Je porte une attention particulière à la clarté des interfaces, à l'harmonie visuelle et à l'expérience utilisateur."
                />

                <FeatureCard
                  title="La résolution de problèmes"
                  description="Chaque projet est une occasion d'apprendre, de tester des idées et de trouver des solutions adaptées."
                />
              </div>
              <Button text="Me contacter" variant="secondary" className="w-fit shrink-0 " />
          </div>
        </div>
      </div>
    </section>
  );
}
