import styles from "./styles/contact.module.scss"
import * as Yup from "yup"
import { Formik, Field, Form, ErrorMessage } from "formik"
import { useState } from "react"

const formSchema = Yup.object().shape({
    username: Yup.string()
        .required("Nombre requerido")
        .max(25, "Máximo 25 letras"),
    email: Yup.string()
        .required("Correo requerido")
        .max(100, "Máximo 100 letras"),
    message: Yup.string().required("Mínimo 5 letras").min(5, "Mínimo 5 letras"),
})

function Contact() {
    const [form, setForm] = useState("")

    return (
        <article id="contact" className={styles.container}>
            <div className={styles.container__top}>
                <div className={styles.container__top__title}>
                    <h1>Contacto</h1>
                </div>
            </div>
            <Formik
                initialValues={{
                    username: "",
                    email: "",
                    message: "",
                }}
                validationSchema={formSchema}
                onSubmit={(values) => {
                    setForm(values)
                    console.log(form)
                }}
            >
                <Form className={styles.container__form}>
                    <Field
                        type="text"
                        name="username"
                        aria-label="nombre"
                        placeholder="Nombre"
                    />
                    <ErrorMessage
                        name="username"
                        component="span"
                        className={styles.container__form__messageError}
                    />

                    <Field
                        type="email"
                        name="email"
                        aria-label="correo"
                        placeholder="correo"
                    />
                    <ErrorMessage
                        name="email"
                        component="span"
                        className={styles.container__form__messageError}
                    />
                    <Field
                        component="textarea"
                        cols="50"
                        rows="6"
                        name="message"
                        aria-label="mensaje"
                        placeholder="Mensaje"
                    />
                    <ErrorMessage
                        name="message"
                        component="span"
                        className={styles.container__form__messageError}
                    />
                    <div className={styles.container__form__btn}>
                        <button type="submit">Enviar Mensaje</button>
                    </div>
                </Form>
            </Formik>
        </article>
    )
}

export default Contact
