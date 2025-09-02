'use client';

import styles from './About.module.css';
import Services from './Services';
import Skills from "./Skills";
import { Fade } from 'react-awesome-reveal';


interface AboutProps {
    isActive: boolean;
}

const About = ({ isActive }: AboutProps) => {
    return (
        <article className={`card-style ${styles.about} ${isActive ? 'active' : ''}`} data-page="about">
            <header>
                <Fade>
                    <h2 className={`h2 ${styles.articleTitle}`}>About me</h2>
                </Fade>
            </header>

            <Fade triggerOnce>
                <section className={styles.aboutText}>
                    <p>
                        Born in Taiwan 🇹🇼, study in Japan 🇯🇵 and US 🇺🇲.
                    </p>
                    <br/>
                    <p>
                        Hi, This is Jerry. I&#39;m currently an MS student at <a href="https://www.washington.edu/">University of Washington</a>.
                    </p>
                </section>
            </Fade>

            <Fade triggerOnce delay={250}>
                <Services />
            </Fade>

            <Fade triggerOnce delay={500}>
                <Skills />
            </Fade>

        </article>
    );
};

export default About;