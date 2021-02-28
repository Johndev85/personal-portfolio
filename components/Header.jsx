import styles from "@/components/styles/header.module.scss"
import Link from "next/link"
import MenuList from "@/components/MenuList"
import NavMenu from "@/components/NavMenu"

function Header() {
    return (
        <header id="top" className={styles.header}>
            <div className={styles.header__top}>
                <MenuList />
            </div>
            <img src="/images/logo.svg" alt="jb-logo" />
            <div className={styles.header__menu}>
                <NavMenu />
                {/* <Link href="/cv/John_Botero-CV.pdf">
                    <a
                        className={styles.header__cv}
                        download="John Botero-CV.pdf"
                        target="_blank"
                    >
                        Descargar CV
                    </a>
                </Link> */}
            </div>
        </header>
    )
}

export default Header
