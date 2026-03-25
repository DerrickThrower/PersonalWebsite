import { Navigation } from "@/components/Navigation"
import { Hero } from "@/components/Hero"
import { About } from "@/components/About"
import { Experience } from "@/components/Experience"
import { Projects } from "@/components/Projects"
import { Footer } from "@/components/Footer"

export default function Home() {
  return (
    <>
      <Navigation />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Footer />
    </>
  )
}
