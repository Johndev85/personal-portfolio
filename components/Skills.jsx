import styles from "./styles/skills.module.scss"
import Techs from "@/components/Techs"

function Skills() {
    return (
        <article id="skills" className={styles.container}>
            <div className={styles.container__top}>
                <div className={styles.container__top__title}>
                    <h1>Lo que hago</h1>
                </div>
            </div>
            <section className={styles.container__items}>
                <div className={styles.container__items__jobs}>
                    <div className={styles.container__items__jobs__icons}>
                        <img src="/icons/code-icon.svg" alt="code-icon" />
                    </div>
                    <p>
                        Maquetación landing pages, sitios con HTML/CSS,
                        JavaScript, animaciones web, diseños responsivos,
                        trabajando con las últimas tecnologias como React,
                        Nextjs.
                    </p>
                </div>
                <div className={styles.container__items__jobs}>
                    <div className={styles.container__items__jobs__icons}>
                        <img src="/icons/ux-icon.png" alt="ux-user-icon" />
                    </div>

                    <p>
                        User Flows, Wireframes, mockups, prototipado
                        implementados con Adobe XD.
                    </p>
                </div>

                <div className={styles.container__items__jobs}>
                    <div className={styles.container__items__jobs__icons}>
                        <img
                            src="/icons/Wordpress-icon.png"
                            alt="wordpress-icon"
                        />
                    </div>
                    <p>
                        Implementación de sitios web con Wordpress, plantillas y
                        temas responsivos, diversas temáticas.
                    </p>
                </div>
                <div className={styles.container__items__jobs}>
                    <div className={styles.container__items__jobs__icons}>
                        <img src="/icons/woo-icon.svg" alt="woocommerce-icon" />
                    </div>
                    <p>
                        Implementación de tiendas con Woocommerce para
                        E-commerce.
                    </p>
                </div>
            </section>

            <Techs />
        </article>
    )
}

export default Skills
