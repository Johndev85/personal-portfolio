import styles from "./styles/menuList.module.scss"
import { slide as Menu } from "react-burger-menu"
import Link from "next/link"

const MenuStyles = {
    bmBurgerButton: {
        position: "fixed",
        width: "36px",
        height: "30px",
        left: "36px",
        top: "35px",
        padding: "20px",
        background: "#252d40",
    },
    bmBurgerBars: {
        background: "#ffffff",
        borderRadius: "15px",
    },
    bmBurgerBarsHover: {
        background: "#0880c0",
    },
    bmCrossButton: {
        position: "fixed",
        zIndex: "5",
        top: "15px",
        left: "210px",
        height: "24px",
        width: "24px",
    },
    bmCross: {
        position: "fixed",
        zIndex: "5",
        top: "20px",
        left: "220px",
        background: "#bdc3c7",
    },
    bmMenuWrap: {
        position: "fixed",
        zIndex: "5",
        top: "0",
        left: "0",
        height: "100%",
    },
    bmMenu: {
        position: "fixed",
        zIndex: "5",
        top: "0",
        left: "0",
        background: "#ffffff",
        padding: "60px",
        fontSize: "1.5rem",
    },
    bmMorphShape: {
        fill: "#373a47",
    },
    bmItemList: {
        marginTop: "40px",
        color: "#252d40",
    },
    bmItem: {
        display: "inline-block",
    },
    bmOverlay: {
        position: "fixed",
        zIndex: "5",
        top: "0",
        left: "0",
        background: "rgba(0, 0, 0, 0.3)",
    },
}

function MenuList() {
    return (
        <>
            <Menu
                menuClassName={styles.menulist}
                burgerButtonClassName={styles.btnHambur}
                className={styles.menulist}
                styles={MenuStyles}
            >
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
            </Menu>
        </>
    )
}

export default MenuList
