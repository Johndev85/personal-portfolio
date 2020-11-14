import styles from "./styles/footer.module.scss"
import NavMenu from "@/components/NavMenu"
import Social from "@/components/Social"

function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.footer__menu}>
                <NavMenu />
            </div>
            <Social />
            <span>Copyright ©2020 - Diseño por John Botero.</span>
        </footer>
    )
}

export default Footer
