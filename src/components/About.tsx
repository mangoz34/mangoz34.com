import styles from './About.module.css';
import Services from './Services';

const About = () => {
    return (
        <article className={`card-style ${styles.about}`}>
            <header>
                <h2 className={`${styles.h2} ${styles.articleTitle}`}>About Jerry</h2>
            </header>

            <section className={styles.aboutText}>
                <p>
                    Born in Taiwan🇹🇼, study in Japan🇯🇵 and US🇺🇲.
                </p>
                <p>
                    My job is to build your website so that it is functional and user-friendly but at the same time attractive.
                    Moreover, I add personal touch to your product and make sure that is eye-catching and easy to use. My aim is to bring
                    across your message and identity in the most creative way. I created web design for many famous brand companies.
                </p>
            </section>

            <Services />
        </article>
    );
};

export default About;