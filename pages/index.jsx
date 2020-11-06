import Header from "@/components/Header"
import Hero from "@/components/Hero"
import AboutMe from "@/components/AboutMe"
import Skills from "@/components/Skills"
import Footer from "@/components/Footer"
import Projects from "@/components/Projects"
import Contact from "@/components/Contact"

function HomePage() {
    return (
        <>
            <Header />
            <Hero />
            <main>
                <AboutMe />
                <Projects />
                <Skills />
            </main>
            <Contact />
            <Footer />
        </>
    )
}

export default HomePage
