import styles from "./styles/footer.module.scss"
import Link from "next/link"

function Footer() {
    return (
        <footer className={styles.footer}>
            <nav className={styles.footer__menu}>
                <ul>
                    <li>
                        <Link href="#aboutme">
                            <a>Sobre Mí</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="#skills">
                            <a>Lo que hago</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="#projects">
                            <a>Proyectos</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="#contact">
                            <a>Contacto</a>
                        </Link>
                    </li>
                </ul>
            </nav>
            <span>John Botero - 2020</span>
        </footer>
    )
}

export default Footer
