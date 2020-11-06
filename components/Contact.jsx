import styles from "./styles/contact.module.scss"

function Contact() {
    return (
        <article className={styles.container}>
            <h1>Contacto</h1>

            <form className={styles.container__form} method="post">
                <label htmlFor="">Nombre</label>
                <input type="text" />
                <label htmlFor="">Correo</label>
                <input type="text" />
                <label htmlFor="">Asunto</label>
                <input type="text" />
                <textarea name="" id="" cols="50" rows="6"></textarea>
                <div className={styles.container__form__btn}>
                    <button>Enviar</button>
                </div>
            </form>
        </article>
    )
}

export default Contact
