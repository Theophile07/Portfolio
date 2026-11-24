import ServiceCard from "./ui/ServiceCard";
import services from "../data/service";

export default function Service() {


  return (
    <section
      id="service"
      className="min-h-screen border-b border-b-[#A5B4FC] bg-transparent"
    >
      <div className="mx-auto flex min-h-[calc(100vh-8rem)] max-w-[1440px] items-center justify-between gap-10 px-8 md:px-12 lg:px-20 xl:px-24">

        <div className="min-w-0 flex-1">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#6366F1]">
                Services
            </p>
            <h2 className="mb-5 text-3xl font-bold text-slate-950 lg:text-4xl">
              Ce que je fais
            </h2>
            <p className="font-semibold leading-5 text-[#262B38] max-w-2xl">
              Du design de l'interface au développement, je transforme des idées en produits web modernes, simples à utiliser et pensés pour répondre à de vrais besoins.
            </p>
          </div>

          <div className="mt-8 flex gap-5">
            {services.map((service) => (
              <ServiceCard
                key={service.title}
                title={service.title}
                subtitle={service.subtitle}
                description={service.description}
              />
            ))}
          </div>
        </div>

        </div>
    </section>

  )
}