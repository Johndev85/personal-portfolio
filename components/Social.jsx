import styles from "./styles/social.module.scss"

function Social() {
    return (
        <div className={styles.social}>
            <div className={styles.social__item}>
                <img
                    className={styles.social__item__icon}
                    src="/icons/github-logo.svg"
                    alt="github-logo"
                />
                <a
                    href="https://github.com/Johndev85"
                    target="_blanck"
                    className={styles.social__item__title}
                >
                    GitHub
                </a>
            </div>
            <div className={styles.social__item}>
                <img
                    className={styles.social__item__icon}
                    src="/icons/linkedin-logo.svg"
                    alt="likedin-logo"
                />
                <a
                    href="https://www.linkedin.com/in/johnboterogarcia/"
                    target="_blanck"
                    className={styles.social__item__title}
                >
                    LinkedIn
                </a>
            </div>
            <div className={styles.social__item}>
                <img
                    className={styles.social__item__icon}
                    src="/icons/torre-logo.svg"
                    alt="torre-logo"
                />
                <a
                    href="https://bio.torre.co/en/johnbotero"
                    target="_blanck"
                    className={styles.social__item__title}
                >
                    Torre
                </a>
            </div>
        </div>
    )
}

export default Social
