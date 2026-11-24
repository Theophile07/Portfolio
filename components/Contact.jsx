import { SiGmail, SiGithub, SiWhatsapp,} from "@icons-pack/react-simple-icons";
import { FaLinkedin } from "react-icons/fa6";
import { ArrowUpRight } from "lucide-react";
export default function Contact(){
        const contacts = [
            {
                title: "Gmail",
                description: "M'écrire un e-mail",
                icon: SiGmail,
                link: "mailto:lumbalatheophile@gmail.com",
            },
            {
                title: "GitHub",
                description: "Découvrir mes projets",
                icon: SiGithub,
                link: "https://github.com/Theophile07",
            },
            {
                title: "LinkedIn",
                description: "Mon profil professionnel",
                icon: FaLinkedin,
                link: "https://linkedin.com/in/théophile-lumbala-aa8874242/",
            },
            {
                title: "WhatsApp",
                description: "Discuter directement",
                icon: SiWhatsapp,
                link: "https://wa.me/243827600740",
            },
            ];
    return(
        <>
        <section id="contact" className="min-h-screen border-b border-[#A5B4FC] bg-transparent">
            <div className="mx-auto flex min-h-screen max-w-[1440px]  items-center justify-between gap-10 px-8 pt-32 md:px-12 lg:px-20 xl:px-24">
                <div className="w-full justify-center flex flex-col ">
                    <div className="flex flex-col items-center text-center">
                        <h2 className="max-w-[654px] text-center text-5xl font-bold leading-tight tracking-tight text-slate-950 lg:text-5xl">
                            Vous avez un projet ? Construisons-le ensemble.
                        </h2>
                        <p className="mt-6 max-w-[650px] text-lg leading-8 text-[#262B38] md:text-lg">
                            Donnons vie à vos projets web. <br />Contactez-moi pour échanger sur vos besoins.
                        </p>
                    </div>

                    <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
                        {contacts.map((contact) => {
                            const Icon = contact.icon

                            return(
                                <a key={contact.title} href={contact.link} target={contact.title === "Gmail" ? undefined : "_blank"} 
                                rel="noopener noreferrer"
                                className="group h-full min-h-[110px] flex items-center justify-between rounded-2xl border border-[#A5B4FC]/60 bg-white/60 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#6366F1] hover:bg-white/90 hover:shadow-lg"
                                >
                                    <div className="flex items-center gap-4">
                                        <div className="rounded-xl bg-indigo-50 p-3 text-[#6366F1] transition-colors duration-300 group-hover:bg-[#6366F1] group-hover:text-white">
                                            <Icon size={22} />
                                        </div>

                                        <div>
                                            <h3 className="font-bold text-[#262B38]">
                                                {contact.title}
                                            </h3>
                                            <p className="text-sm text-slate-500">
                                                {contact.description}
                                            </p>
                                         </div>
                                    </div>

                                    <ArrowUpRight
                                        size={20}
                                        className="text-slate-400 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#6366F1]"
                                    />
                                </a>
                            )
                        } )}
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}