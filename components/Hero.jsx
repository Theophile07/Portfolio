
import Link from "next/link";
import Image from "next/image";
import Button from "./ui/Button";

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen border-b border-[#A5B4FC] bg-transparent"
    >
      <div className="mx-auto flex min-h-screen max-w-[1440px] flex-col justify-center gap-10 px-5 pb-12 pt-32 sm:px-8 md:px-12 lg:flex-row lg:items-center lg:justify-between lg:px-20 lg:pt-32 lg:pb-12 xl:px-24">

        {/* Texte */}
        <div className="min-w-0 flex-1">

          <h1 className="max-w-[654px] text-3xl font-bold leading-tight tracking-tight text-slate-950 sm:text-4xl md:text-5xl">
            Je suis Théophile et je transforme les idées en{" "}
            <span className="text-[#6366F1]">
              expériences digitales
            </span>{" "}
            utiles, intuitives et performantes.
          </h1>

          <p className="mt-5 max-w-[600px] text-base font-medium leading-7 text-[#262B38] sm:mt-6 sm:text-lg sm:leading-8 lg:text-xl xl:text-2xl">
            Développeur web à Kinshasa passionné par la conception de
            produits numériques, je combine développement, design UI/UX et
            réflexion stratégique pour créer des solutions modernes qui
            répondent à de vrais besoins.
          </p>

          {/* Boutons */}
          <div className="mt-7 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:gap-5">
            <Link
                href="/projects"
                className="inline-flex items-center justify-center rounded-xl bg-[#6366F1] px-6 py-3 font-semibold text-white transition-all hover:bg-indigo-700"
              >
                Voir mes projets
            </Link>
            {/* <Button
              text="Télécharger mon CV"
              href="#"
              variant="secondary"
            /> */}
          </div>
        </div>

        {/* Image */}
        <div className="flex w-full justify-center lg:w-[380px] lg:shrink-0 xl:w-[444px]">
          <div className="relative h-[280px] w-[240px] overflow-hidden rounded-[25px] border-[4px] border-[#A5B4FC] shadow-md sm:h-[340px] sm:w-[290px] lg:h-[400px] lg:w-full lg:rounded-[30px] lg:border-[5px] xl:h-[440px]">
            <Image
              src="/images/Theo-3.png"
              alt="Portrait professionnel de Théophile"
              priority
              fill
              sizes="(max-width: 640px) 240px, (max-width: 1024px) 290px, 444px"
              className="object-cover"
            />
          </div>
        </div>

      </div>
    </section>
  );
}
