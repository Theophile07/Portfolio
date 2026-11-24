
import Image from "next/image";
import FeatureCard from "./ui/FeatureCard";
import Button from "./ui/Button";

export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen border-b border-[#A5B4FC] bg-transparent px-5 py-20 sm:px-8 sm:py-24 md:px-12 lg:px-20 xl:px-24"
    >
      <div className="mx-auto flex max-w-[1440px] flex-col items-center gap-10 lg:min-h-[calc(100vh-8rem)] lg:flex-row lg:justify-between lg:gap-12">

        {/* Image */}
        <div className="flex w-full shrink-0 justify-center lg:w-[42%]">
          <div className="relative h-[320px] w-[260px] overflow-hidden rounded-[25px] border-[4px] border-[#A5B4FC] shadow-md sm:h-[400px] sm:w-[320px] lg:h-[560px] lg:w-full lg:rounded-[30px] lg:border-[5px] xl:h-[640px]">
            <Image
              src="/images/Theo-1.png"
              alt="Portrait professionnel de Théophile"
              priority
              fill
              sizes="(max-width: 640px) 260px, (max-width: 1024px) 320px, 560px"
              className="object-cover"
            />
          </div>
        </div>

        {/* Contenu */}
        <div className="min-w-0 flex-1">

          {/* Présentation */}
          <div className="space-y-4">
            <h2 className="text-3xl font-bold text-slate-950 sm:text-4xl">
              Qui suis-je ?
            </h2>

            <p className="text-base font-semibold leading-7 text-[#262B38] sm:text-lg">
              Je suis Théophile Lumbala et je suis un créatif du numérique
              passionné par le développement web, le design d'interface et
              la création de solutions digitales utiles. J'aime transformer
              des idées en expériences modernes, accessibles et pensées
              pour répondre à de vrais besoins.
            </p>

            <p className="text-base font-semibold leading-7 text-[#262B38] sm:text-lg">
              Je m'intéresse à la rencontre entre la technologie, le design
              et les besoins humains. Mon approche consiste à comprendre
              un problème, imaginer une solution pertinente et lui donner
              vie à travers une expérience digitale cohérente.

              Au-delà du code, je m'intéresse à la manière dont les
              utilisateurs interagissent avec un produit et à la façon
              dont une bonne conception peut simplifier leur quotidien.
            </p>
          </div>

          {/* Ce qui me définit */}
          <div className="mt-10 flex flex-col gap-5">

            <h2 className="text-2xl font-bold text-slate-950 sm:text-3xl">
              Ce qui me définit
            </h2>

            <div
              id="about-card"
              className="grid grid-cols-1 gap-4 sm:grid-cols-2"
            >
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

            <Button
              text="Me contacter"
              variant="secondary"
              className="w-fit shrink-0"
            />

          </div>
        </div>
      </div>
    </section>
  );
}
