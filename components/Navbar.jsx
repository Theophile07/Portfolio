import Link from "next/link"
import Button from "./ui/Button"
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
                <nav className="mx-auto flex max-w-7xl items-center justify-between rounded-2xl bg-white px-6 py-5 lg:px-8">
                    <Link 
                    href='/'
                    className="text-xl font-bold tracking-tight text-slate-950"
                    >
                        <span className="text-[#6366F1] text-3xl">{"<"}</span>
                            {" Théophile Lumbala "}
                        <span className="text-[#6366F1] text-3xl">{"/>"}</span>
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

                    <Button text="Me contacter" href="#contact"/>
                </nav>
            </header>

        </>
    )
}