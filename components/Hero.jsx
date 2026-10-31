import Link from "next/link"
import Image from "next/image"

export default function Hero() {
  return (
    <section id="hero" className="min-h-screen pt-32 border-b-1 border-b-[#A5B4FC]">
      <div className="mx-auto flex min-h-[calc(100vh-8rem)] max-w-[1440px] items-center justify-between gap-10 px-8 md:px-12 lg:px-20 xl:px-24">

        <div className="min-w-0 flex-1">
          
          <h1 className="max-w-[654px] text-5xl font-bold leading-tight tracking-tight text-slate-950 lg:text-5xl">
            Je suis Théophile et je transforme les idées en{" "}
            <span className="text-[#6366F1]">
              expériences digitales
            </span>{" "}
            utiles, intuitives et performantes.
          </h1>

          <p className="mt-6 max-w-[600px] text-[24px] font-medium leading-8 text-[#262B38]">
            Développeur web à Kinshasa passionné par la conception de
            produits numériques, je combine développement, design UI/UX et
            réflexion stratégique pour créer des solutions modernes qui
            répondent à de vrais besoins.
          </p>

          <div className="mt-8 flex gap-5">
            <Link
              href="#projet"
              className="rounded-[13px] bg-[#6366F1] px-5 py-3 text-[16px] font-semibold text-white transition hover:bg-indigo-700"
            >
              Voir mes projets
            </Link>

            <Link
              href="#"
              className="rounded-[13px] bg-[#1A1E28] px-5 py-3 text-[16px] font-semibold text-white transition hover:bg-slate-800"
            >
              Télécharger mon CV
            </Link>
          </div>
        </div>

        {/* Image */}
        <div className="hidden shrink-0 justify-center lg:flex lg:w-[444px]">
        <div className="relative h-[440px] w-full overflow-hidden rounded-[30px] border-[5px] border-[#A5B4FC] shadow-md">
            <Image
            src="/images/Theo-3.png"
            alt="Portrait professionnel de Théophile"
            priority
            fill
            sizes="444px"
            className="object-cover"
            />
        </div>
        </div>

      </div>
    </section>
  )
}