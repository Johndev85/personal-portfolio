import styles from "./styles/hero.module.scss"
import Social from "@/components/Social"

function Hero() {
    return (
        <>
            <article className={styles.hero}>
                <section className={styles.hero__titles}>
                    <div className={styles.hero__titles__moving}>
                        <p>
                            <span>Hola,</span> soy John Botero
                        </p>
                        <h1>Front-End Developer</h1>
                        <h2>
                            Desarrollador web / React / Next.js / Wordpress /
                            Entusiasta GameDev
                        </h2>
                        <div className={styles.hero__titles__social}>
                            <Social />
                        </div>
                    </div>
                </section>
                <section className={styles.hero__img}>
                    <img src="/images/hero-img.svg" alt="hero-img2" />
                </section>
            </article>
        </>
    )
}

export default Hero
