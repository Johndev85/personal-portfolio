import styles from "@/components/styles/header.module.scss"
import Link from "next/link"

function Header() {
    return (
        <>
            <header className={styles.header}>
                <nav>
                    <ul>
                        <li>
                            <Link href="#sobremi">
                                <a>Sobre mí</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="#proyectos">
                                <a>Proyectos</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="#experiencia">
                                <a>Experiencia</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="#contacto">
                                <a>Contacto</a>
                            </Link>
                        </li>
                    </ul>
                </nav>
                <Link href="#">
                    <a className={styles.header__cv}>Descargar CV</a>
                </Link>
            </header>
        </>
    )
}

export default Header
