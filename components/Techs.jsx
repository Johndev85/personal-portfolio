import styles from "./styles/techs.module.scss"

function Techs() {
    return (
        <section className={styles.container__mern}>
            <div className={styles.container__mern__modules}>
                <h2> Habilidades</h2>
                <section className={styles.container__mern__modules__icons}>
                    <figure
                        className={styles.container__mern__modules__icons__item}
                    >
                        <img
                            loading="lazy"
                            src="/icons/html5-logo.png"
                            alt="html-logo"
                        />
                        <h3>HTML5</h3>
                    </figure>
                    <figure
                        className={styles.container__mern__modules__icons__item}
                    >
                        <img
                            loading="lazy"
                            src="/icons/css3-logo.svg"
                            alt="css-logo"
                        />
                        <h3>CSS3</h3>
                    </figure>
                    <figure
                        className={styles.container__mern__modules__icons__item}
                    >
                        <img
                            loading="lazy"
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
                        className={styles.container__mern__modules__icons__item}
                    >
                        <img
                            loading="lazy"
                            src="/icons/mongodb-logo.svg"
                            alt="mongodb-logo"
                        />
                        <h3>MongoDB</h3>
                    </figure>
                    <figure
                        className={styles.container__mern__modules__icons__item}
                    >
                        <img
                            loading="lazy"
                            src="/icons/express-logo.png"
                            alt="express-logo"
                        />
                        <h3>Express</h3>
                    </figure>
                    <figure
                        className={styles.container__mern__modules__icons__item}
                    >
                        <img
                            loading="lazy"
                            src="/icons/react-logo.svg"
                            alt="react-logo"
                        />
                        <h3>React</h3>
                    </figure>
                    <figure
                        className={styles.container__mern__modules__icons__item}
                    >
                        <img
                            loading="lazy"
                            src="/icons/nodejs-logo.svg"
                            alt="node-logo"
                        />
                        <h3>Node.js</h3>
                    </figure>
                </section>
            </div>
            <div className={styles.container__mern__modules__techs}>
                <h2> Tecnologías Manejadas</h2>
                <section
                    className={styles.container__mern__modules__techs__icons}
                >
                    <figure
                        className={
                            styles.container__mern__modules__techs__icons__item
                        }
                    >
                        <img
                            loading="lazy"
                            src="/icons/git-logo.png"
                            alt="git-logo"
                        />
                        <h3>Git</h3>
                    </figure>

                    <figure
                        className={
                            styles.container__mern__modules__techs__icons__item
                        }
                    >
                        <img
                            loading="lazy"
                            src="/icons/sass-icon.svg"
                            alt="sass-logo"
                        />
                        <h3>SASS</h3>
                    </figure>
                    <figure
                        className={
                            styles.container__mern__modules__techs__icons__item
                        }
                    >
                        <img
                            loading="lazy"
                            src="/icons/next-logo.svg"
                            alt="nextjs-logo"
                        />
                        <h3>Next.js</h3>
                    </figure>
                    <figure
                        className={
                            styles.container__mern__modules__techs__icons__item
                        }
                    >
                        <img
                            loading="lazy"
                            src="/icons/jest-logo.png"
                            alt="jest-logo"
                        />
                        <h3>Jest</h3>
                    </figure>

                    <figure
                        className={
                            styles.container__mern__modules__techs__icons__item
                        }
                    >
                        <img
                            loading="lazy"
                            src="/icons/adobexd-logo.svg"
                            alt="adobexd-logo"
                        />
                        <h3>Adobe XD</h3>
                    </figure>

                    <figure
                        className={
                            styles.container__mern__modules__techs__icons__item
                        }
                    >
                        <img
                            loading="lazy"
                            src="/icons/webpack-icon.svg"
                            alt="Webpack-logo"
                        />
                        <h3>Webpack</h3>
                    </figure>
                    <figure
                        className={
                            styles.container__mern__modules__techs__icons__item
                        }
                    >
                        <img
                            loading="lazy"
                            src="/icons/vercel-logo.png"
                            alt="vercel-logo"
                        />
                        <h3>Vercel</h3>
                    </figure>
                    <figure
                        className={
                            styles.container__mern__modules__techs__icons__item
                        }
                    >
                        <img
                            loading="lazy"
                            src="/icons/heroku-logo.svg"
                            alt="heroku-logo"
                        />
                        <h3>Heroku</h3>
                    </figure>
                </section>
            </div>
        </section>
    )
}

export default Techs
