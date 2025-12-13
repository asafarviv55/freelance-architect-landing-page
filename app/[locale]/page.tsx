import Header from "@/components/Header"
import Hero from "@/components/hero"
import Services from "@/components/services"
import Portfolio from "@/components/portfolio"
import Timeline from "@/components/Timeline"
import MVPSection from "@/components/mvp-section"
import WhyWorkWithMe from "@/components/why-work-with-me"
import Process from "@/components/process"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="w-full bg-white">
      <Header />
      <Hero />
      <Services />
      <Portfolio />
      <Timeline />
      <MVPSection />
      <WhyWorkWithMe />
      <Process />
      <Footer />
    </main>
  )
}
