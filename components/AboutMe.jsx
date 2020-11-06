import styles from "./styles/aboutme.module.scss"

function AboutMe() {
    return (
        <article id="aboutme" className={styles.container}>
            <div className={styles.container__img}>
                <img src="/images/aboutme-img.svg" alt="aboutme-img" />
            </div>
            <section className={styles.container__text}>
                <div className={styles.container__text__top}>
                    <div className={styles.container__text__top__title}>
                        <h1>Sobre Mí</h1>
                    </div>
                </div>
                <p>
                    El desarrollo web es una pasión, me gusta crear interfaces y
                    sitios web interactivos que brinden soluciones ágiles y
                    suplan las necesidades de la nueva era digital. Soy un
                    autodidacta de la educación online, comencé aprendiendo y
                    aplicando implementaciones en Wordpress y luego adelantando
                    la carrera de desarrollo web en el programa especial Platzi
                    Master. <br />
                    Tengo varios años de experiencia laboral en el mundo de la
                    tecnología que me han dado tambien habilidades como trabajo
                    en equipo, atención a clientes, recursividad en la
                    resolución de problemas, responsabilidad para lograr retos y
                    objetivos.
                </p>
            </section>
        </article>
    )
}

export default AboutMe
