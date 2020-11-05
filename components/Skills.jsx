import styles from "./styles/skills.module.scss"

function Skills() {
    return (
        <article className={styles.container}>
            <div className={styles.container__title}>
                <h1>Lo que hago</h1>
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
            <section className={styles.container__mern}>
                <div className={styles.container__mern__modules}>
                    <h2> Habilidades</h2>
                    <section className={styles.container__mern__modules__icons}>
                        <figure
                            className={
                                styles.container__mern__modules__icons__item
                            }
                        >
                            <img src="/icons/html5-logo.png" alt="html-logo" />
                            <h3>HTML5</h3>
                        </figure>
                        <figure
                            className={
                                styles.container__mern__modules__icons__item
                            }
                        >
                            <img src="/icons/css3-logo.svg" alt="css-logo" />
                            <h3>CSS3</h3>
                        </figure>

                        <figure
                            className={
                                styles.container__mern__modules__icons__item
                            }
                        >
                            <img
                                src="/icons/js-logo.png"
                                alt="javascript-logo"
                            />
                            <h3>JavaScript</h3>
                        </figure>
                    </section>
                </div>
                <div className={styles.container__mern__modules}>
                    <h2> Especializado en MERN Stack</h2>
                    <section className={styles.container__mern__modules__icons}>
                        <figure
                            className={
                                styles.container__mern__modules__icons__item
                            }
                        >
                            <img
                                src="/icons/mongodb-logo.svg"
                                alt="mongodb-logo"
                            />
                            <h3>MongoDB</h3>
                        </figure>
                        <figure
                            className={
                                styles.container__mern__modules__icons__item
                            }
                        >
                            <img
                                src="/icons/express-logo.png"
                                alt="express-logo"
                            />
                            <h3>Express</h3>
                        </figure>

                        <figure
                            className={
                                styles.container__mern__modules__icons__item
                            }
                        >
                            <img src="/icons/react-logo.svg" alt="react-logo" />
                            <h3>React</h3>
                        </figure>

                        <figure
                            className={
                                styles.container__mern__modules__icons__item
                            }
                        >
                            <img src="/icons/nodejs-logo.svg" alt="node-logo" />
                            <h3>Node.js</h3>
                        </figure>
                    </section>
                </div>
                <div className={styles.container__mern__modules}>
                    <h2> Tecnologías Manejadas</h2>
                    <section className={styles.container__mern__modules__icons}>
                        <figure
                            className={
                                styles.container__mern__modules__icons__item
                            }
                        >
                            <img src="/icons/sass-icon.svg" alt="sass-logo" />
                            <h3>SASS</h3>
                        </figure>
                        <figure
                            className={
                                styles.container__mern__modules__icons__item
                            }
                        >
                            <img src="/icons/next-logo.svg" alt="nextjs-logo" />
                            <h3>Next.js</h3>
                        </figure>

                        <figure
                            className={
                                styles.container__mern__modules__icons__item
                            }
                        >
                            <img
                                src="/icons/webpack-icon.svg"
                                alt="Webpack-logo"
                            />
                            <h3>Webpack</h3>
                        </figure>
                        <figure
                            className={
                                styles.container__mern__modules__icons__item
                            }
                        >
                            <img
                                src="/icons/vercel-logo.png"
                                alt="vercel-logo"
                            />
                            <h3>Vercel</h3>
                        </figure>
                        <figure
                            className={
                                styles.container__mern__modules__icons__item
                            }
                        >
                            <img
                                src="/icons/heroku-logo.svg"
                                alt="heroku-logo"
                            />
                            <h3>Heroku</h3>
                        </figure>
                    </section>
                </div>
            </section>
        </article>
    )
}

export default Skills
