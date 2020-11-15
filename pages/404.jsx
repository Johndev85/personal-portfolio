import Social from "@/components/Social"
import styles from "../styles/404.module.scss"
import Link from "next/link"

export default function Custom404() {
    return (
        <>
            <header className={styles.header}>
                <img src="/images/logo.svg" alt="jb-logo" />
            </header>
            <section className={styles.container}>
                <div className={styles.container__central}>
                    <img src="/images/Astronaut.png" alt="Astronaut-image" />
                    <div className={styles.container__central__text}>
                        <p className={styles.container__central__text__error}>
                            ERROR <span>404</span>
                        </p>
                        <p className={styles.container__central__text__error}>
                            OOPPS!
                        </p>
                        <p>Página no encontrada.</p>
                        <Link href="/">
                            <a className={styles.container__central__text__btn}>
                                Regreso al Inicio
                            </a>
                        </Link>
                    </div>
                </div>
                <Social />
            </section>
        </>
    )
}
