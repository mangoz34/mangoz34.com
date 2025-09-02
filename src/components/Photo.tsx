'use client';

import { useState } from 'react';
import styles from './Photo.module.css';
import { Fade } from 'react-awesome-reveal';

interface Photo {
    isActive: boolean;
}


const Photo = ({ isActive }: Photo) => {

    return (
        <article className={`card-style ${styles.photo} ${isActive ? 'active' : ''}`} data-page="photo">
            <header>
                <Fade>
                    <h2 className={`h2 ${styles.articleTitle}`}>Photo</h2>
                </Fade>
            </header>

            <Fade delay={250}>
                <section className={styles.underConstruction}>
                    <p className={styles.constructionText}>
                        Oops! This section is currently under construction.
                    </p>
                    <div className={styles.memeContainer}>
                        <img
                            src="/404cat.jpeg"
                            alt="Under Construction Meme Cat"
                            className={styles.memeImage}
                        />
                    </div>
                </section>
            </Fade>
        </article>
    );
};

export default Photo;