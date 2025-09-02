'use client';

import { useState } from 'react';
import styles from './Contact.module.css';
import { IoPaperPlaneOutline } from 'react-icons/io5';

const ContactForm = () => {
    const [formValid, setFormValid] = useState(false);

    const checkFormValidity = (form: HTMLFormElement) => {
        setFormValid(form.checkValidity());
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (formValid) {
            alert('訊息已送出！');
        }
    };

    return (
        <section className={styles.contactForm}>
            <h3 className={`${styles.h3} ${styles.formTitle}`}>Contact Form</h3>
            <form
                action="#"
                className={styles.form}
                data-form
                onInput={(event) => checkFormValidity(event.currentTarget)}
                onSubmit={handleSubmit}
            >
                <div className={styles.inputWrapper}>
                    <input
                        type="text"
                        name="fullname"
                        className={styles.formInput}
                        placeholder="Full name"
                        required
                        data-form-input
                    />
                    <input
                        type="email"
                        name="email"
                        className={styles.formInput}
                        placeholder="Email address"
                        required
                        data-form-input
                    />
                </div>
                <textarea
                    name="message"
                    className={styles.formInput}
                    placeholder="Your Message"
                    required
                    data-form-input
                ></textarea>
                <button
                    className={styles.formBtn}
                    type="submit"
                    disabled={!formValid}
                    data-form-btn
                >
                    <IoPaperPlaneOutline />
                    <span>Send Message</span>
                </button>
            </form>
        </section>
    );
};

export default ContactForm;