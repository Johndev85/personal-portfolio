import Header from "@/components/Header"
import Hero from "@/components/Hero"
import AboutMe from "@/components/AboutMe"
import Skills from "@/components/Skills"
import Footer from "@/components/Footer"
import Projects from "@/components/Projects"

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
            <Footer />
        </>
    )
}

export default HomePage
