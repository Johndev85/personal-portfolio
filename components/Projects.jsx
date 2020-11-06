import styles from "./styles/projects.module.scss"
import Link from "next/link"

function Projects() {
    return (
        <article id="projects" className={styles.container}>
            <div className={styles.container__top}>
                <div className={styles.container__top__title}>
                    <h1>Mis Proyectos</h1>
                </div>
            </div>
            <section className={styles.container__items}>
                <section className={styles.container__items__card}>
                    <div className={styles.container__items__card__titles}>
                        <h2>Tech Deal</h2>
                        <h3>Comparador de precios</h3>
                        <p>HTML,CSS, JS, React, Nextjs, APIRest</p>
                        <Link href="">
                            <a>Ver Demo</a>
                        </Link>
                    </div>
                </section>
            </section>
        </article>
    )
}

export default Projects
