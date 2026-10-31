import Link from "next/link"

const navLinks = [
    { label : "À propos", href: "#about"},
    { label : "Mes services", href: "#service"},
    { label : "Mes projets", href: "#project"},
    // { label : "Parcours", href: "#about"},
]
export default function Navbar(){
    return(
        <>
            <header className="fixed left-0 top-0 z-50 w-full px-6 pt-6 md:px-10 lg:px-16">
                <nav className="mx-auto p-20 flex max-w-7xl bg-white rounded-2xl items-center justify-between px-6 py-5 lg:px-8">
                    <Link 
                    href='/'
                    className="text-xl font-bold tracking-tight text-slate-950"
                    >
                        Théophile Lumbala
                    </Link>

                    <div className="hidden items-center gap-5 md:flex">
                        {navLinks.map((links) => (
                            <Link
                            key={links.href}
                            href={links.href}
                            className="text-[16px] font-semibold transition-colors hover:text-[#6366F1]"
                            >
                            {links.label}
                            </Link>
                        ))}
                    </div>

                    <Link
                    href="#contact"
                    className="hidden rounded-[13px] bg-[#6366F1] px-5 py-2.5 text-[16px] font-semibold text-white transition hover:bg-blue-700 md:block"
                    >
                        Me contacter
                    </Link>
                </nav>
            </header>

        </>
    )
}