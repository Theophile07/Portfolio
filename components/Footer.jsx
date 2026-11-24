
import Link from "next/link";

const footerLinks = [
  { label: "Acceuil", href: "/" },
  { label: "À propos", href: "/#about" },
  { label: "Services", href: "/#service" },
  { label: "Compétences", href: "/#skills" },
  { label: "Projets", href: "/#project" },
  { label: "Contact", href: "/#contact" },
];

export default function Footer() {
  return (
    <footer className="border-t border-[#A5B4FC]/60 bg-white/40 px-5 py-10 sm:px-8 md:px-12 lg:px-20 xl:px-24">

      <div className="mx-auto max-w-[1440px]">

        {/* Partie principale */}
        <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">

          <div>
            <Link
              href="/"
              className="text-xl font-bold tracking-tight text-slate-950"
            >
              <span className="text-2xl text-[#6366F1]">{"<"}</span>
              Théophile Lumbala
              <span className="text-2xl text-[#6366F1]">{"/>"}</span>
            </Link>

            <p className="mt-3 max-w-sm text-sm leading-6 text-[#262B38]">
              Développeur web et créatif du numérique.
              Je transforme les idées en expériences digitales utiles,
              intuitives et performantes.
            </p>
          </div>

          {/* Navigation */}
          <nav className="flex flex-wrap gap-x-6 gap-y-3">
            {footerLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-semibold text-[#262B38] transition-colors hover:text-[#6366F1]"
              >
                {link.label}
              </Link>
            ))}
          </nav>

        </div>

        
        <div className="mt-10 text-center gap-3 border-t border-[#A5B4FC]/40 pt-6 text-sm text-[#52525B] sm:flex-row sm:items-center sm:justify-between">

          <p>
            © 2026 Théophile Lumbala. Tous droits réservés.
          </p>

          

        </div>

      </div>
    </footer>
  );
}
