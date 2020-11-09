import styles from "@/components/styles/header.module.scss"
import Link from "next/link"
import MenuList from "@/components/MenuList"

function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.header__top}>
                <MenuList />
            </div>
            <img src="/images/logo.svg" alt="jb-logo" />
            <div className={styles.header__menu}>
                <nav>
                    <ul>
                        <li>
                            <Link href="#aboutme">
                                <a>Sobre mí</a>
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
                <Link href="/cv/John_Botero-CV.pdf">
                    <a
                        className={styles.header__cv}
                        download="John Botero-CV.pdf"
                        target="_blank"
                    >
                        Descargar CV
                    </a>
                </Link>
            </div>
        </header>
    )
}

export default Header
