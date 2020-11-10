import Link from "next/link"

function NavMenu() {
    return (
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
    )
}

export default NavMenu
