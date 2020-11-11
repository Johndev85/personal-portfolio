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
                        <p>HTML5 | SASS | Nextjs | APIRest</p>
                        <Link
                            href="https://techdeal.vercel.app/"
                            target="_black"
                        >
                            <a target="_black">Ver Demo</a>
                        </Link>
                    </div>
                </section>
                <section className={styles.container__items__card2}>
                    <div className={styles.container__items__card__titles}>
                        <h2>Lets Cook</h2>
                        <h3>Delivery de recetas</h3>
                        <p>HTML5 | SASS | React | APIRest</p>
                        <Link href="http://app-letscook.herokuapp.com/">
                            <a target="_black">Ver Demo</a>
                        </Link>
                    </div>
                </section>
                <section className={styles.container__items__card3}>
                    <div className={styles.container__items__card__titles}>
                        <h2>Portfolio</h2>
                        <h3>Portafolio personal</h3>
                        <p>HTML5 | SASS | React | Nextjs </p>
                        <Link href="" target="_black">
                            <a target="_black">Ver Demo</a>
                        </Link>
                    </div>
                </section>
                <section className={styles.container__items__card4}>
                    <div className={styles.container__items__card__titles}>
                        <h2>Favorities Videos</h2>
                        <h3>Proyecto aplicando MERN Stack</h3>
                        <p>
                            HTML5 | SASS | Nextjs | MongoDb | Express | Node.js
                        </p>
                        <Link
                            href="https://favorities-videos.vercel.app/"
                            target="_black"
                        >
                            <a target="_black">Ver Demo</a>
                        </Link>
                    </div>
                </section>
            </section>
        </article>
    )
}

export default Projects
