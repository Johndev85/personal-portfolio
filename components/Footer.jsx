import styles from "./styles/footer.module.scss"
import NavMenu from "@/components/NavMenu"

function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.footer__menu}>
                <NavMenu />
            </div>

            <span>John Botero - 2020</span>
        </footer>
    )
}

export default Footer
