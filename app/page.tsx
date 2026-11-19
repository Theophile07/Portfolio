import NavBar from "@/components/Navbar"
import Hero from "@/components/Hero"
import About from "@/components/About"
import Skills from "@/components/Skills"
import Service from "@/components/Service"
import Project from "@/components/Project"
export default function Home() {
  return (
    <>
    <div>
      <NavBar/>

      <main className="pt-6">
        <Hero/>
        <About/>
        <Skills/>
        <Service/>
        <Project/>
      </main>
    </div>
    </>
  );
}
