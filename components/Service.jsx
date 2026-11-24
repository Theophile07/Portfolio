
import ServiceCard from "./ui/ServiceCard";
import services from "../data/service";

export default function Service() {
  return (
    <section
      id="service"
      className="min-h-screen border-b border-[#A5B4FC] bg-transparent px-5 py-20 sm:px-8 sm:py-24 md:px-12 lg:px-20 xl:px-24"
    >
      <div className="mx-auto flex max-w-[1440px] flex-col justify-center gap-10 lg:min-h-[calc(100vh-8rem)]">

        {/* Introduction */}
        <div>
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-[#6366F1] sm:text-sm">
            Services
          </p>

          <h2 className="mb-5 text-3xl font-bold text-slate-950 sm:text-4xl">
            Ce que je fais
          </h2>

          <p className="max-w-2xl text-base font-semibold leading-7 text-[#262B38] sm:text-lg">
            Du design de l'interface au développement, je transforme des
            idées en produits web modernes, simples à utiliser et pensés
            pour répondre à de vrais besoins.
          </p>
        </div>

        {/* Cartes de services */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
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
    </section>
  );
}
