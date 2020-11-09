import styles from "./styles/burgerbtn.module.scss"

function BurgerBtn() {
    return (
        <>
            <button className={styles.burgerMenu}>
                <div></div>
                <div></div>
                <div></div>
            </button>
        </>
    )
}

export default BurgerBtn
