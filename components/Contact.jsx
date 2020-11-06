import styles from "./styles/contact.module.scss"

function Contact() {
    return (
        <article id="contact" className={styles.container}>
            <div className={styles.container__top}>
                <div className={styles.container__top__title}>
                    <h1>Contacto</h1>
                </div>
            </div>

            <form className={styles.container__form} method="post">
                <label htmlFor="">Nombre</label>
                <input type="text" />
                <label htmlFor="">Correo</label>
                <input type="text" />
                <label htmlFor="">Mensaje</label>
                <textarea name="" id="" cols="50" rows="6"></textarea>
                <div className={styles.container__form__btn}>
                    <button>Enviar Mensaje</button>
                </div>
            </form>
        </article>
    )
}

export default Contact
