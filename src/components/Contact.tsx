'use client';

import styles from './Contact.module.css';
import { Fade } from 'react-awesome-reveal';
import Map from './Map';
import ContactInfo from "@/components/ContactInfo";

interface ContactProps {
    isActive: boolean;
}

const Contact = ({ isActive }: ContactProps) => {
    return (
        <article className={`card-style ${styles.contact} ${isActive ? 'active' : ''}`} data-page="contact">
            <header>
                <Fade>
                    <h2 className={`h2 ${styles.articleTitle}`}>Contact</h2>
                </Fade>
            </header>

            <Fade delay={250}>
                <Map />
            </Fade>

            <Fade delay={500}>
                <ContactInfo />
            </Fade>
        </article>
    );
};

export default Contact;