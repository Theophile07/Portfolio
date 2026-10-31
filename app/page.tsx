import NavBar from "@/components/Navbar"
import Hero from "@/components/Hero"

export default function Home() {
  return (
    <>
    <div>
      <NavBar/>

      <main className="pt-6">
        <Hero/>
        
      </main>
    </div>
    </>
  );
}
