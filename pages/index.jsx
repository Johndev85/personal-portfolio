import Header from "@/components/Header"
import Hero from "@/components/Hero"
import AboutMe from "@/components/AboutMe"
import Skills from "@/components/Skills"

function HomePage() {
    return (
        <>
            <Header />
            <Hero />
            <main>
                <AboutMe />
                <Skills />
            </main>
        </>
    )
}

export default HomePage
