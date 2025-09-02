'use client';

import {useEffect, useState} from 'react';
import styles from './Resume.module.css';
import Timeline from './Timeline';
import { IoBookOutline, IoDocumentOutline } from 'react-icons/io5';
import { Fade } from 'react-awesome-reveal';

interface ResumeProps {
    isActive: boolean;
}

const educationData = [
    {
        title: 'University of Washington',
        duration: 'Seattle, United States | 2025 — 2027',
        description: 'Master of Science in Electrical and Computer Engineering',
    },
    {
        title: 'Shibaura Institute of Technology',
        duration: 'Tokyo, Japan  |  2023',
        description: 'Exchange Student at College of Engineering',
    },
    {
        title: 'National Central University',
        duration: 'Taoyuan, Taiwan  |  2020 — 2024',
        description: 'Bachelor of Science in Computer Science',
    },
];

const experienceData = [
    {
        title: 'Research Assistant',
        duration: 'National Central University  |  2020 — 2024',
        description: 'Research Area : Computer Storage System, Embedded System\n' +
            '-Achieved 6.25x acceleration of data operation with implementing algorithm on ReRAM array.\n' +
            '-Applied compute-in-memory algorithm, reducing 50% of data operation.\n' +
            '-Submitted paper to 2024 IEEE SYMPOSIUM ON VLSI TECHNOLOGY & CIRCUITS. \n' +
            '-Operated real-time operating system (RTOS) on MSP430 embedded system microcontroller. \n' +
            '-Collaborated with TSMC, the largest semiconductor manufacturer, in searching next generation memory.',
    },
];

const Resume = ({ isActive }: ResumeProps) => {
    const [isImageVisible, setIsImageVisible] = useState(false);

    const toggleImage = () => {
        setIsImageVisible(!isImageVisible);
    };

    useEffect(() => {
        if (!isActive) {
            setIsImageVisible(false);
        }
    }, [isActive]);

    return (
        <article className={`card-style ${styles.resume} ${isActive ? 'active' : ''}`} data-page="resume">
            <header>
                <Fade>
                    <h2 className={`h2 ${styles.articleTitle}`}>Resume</h2>
                </Fade>
            </header>

            <Fade delay={100}>
                <div className={styles.resumeActions}>
                    <button className={`btn ${styles.viewResumeBtn}`} onClick={toggleImage}>
                        <IoDocumentOutline />
                        <span>{isImageVisible ? 'Hide Paper Resume' : 'View Paper Resume'}</span>
                    </button>
                </div>
            </Fade>

            {isImageVisible && (
                <Fade>
                    <div className={styles.paperResumeContainer}>
                        <img src="resume.png" alt="Paper Resume" className={styles.paperResumeImage} />
                        <a
                            href="resume.pdf"
                            download="JerryChung_Resume.pdf"
                            className={`btn ${styles.downloadResumeBtn}`}
                        >
                            Download PDF
                        </a>
                    </div>
                </Fade>
            )}

            <Fade delay={250}>
                <section className={styles.timeline}>
                    <div className={styles.titleWrapper}>
                        <div className="icon-box">
                            <IoBookOutline />
                        </div>
                        <h3 className={styles.titleWord}>Education</h3>
                    </div>
                    <Timeline data={educationData} />
                </section>
            </Fade>

            <Fade delay={500}>
                <section className={styles.timeline}>
                    <div className={styles.titleWrapper}>
                        <div className="icon-box">
                            <IoBookOutline />
                        </div>
                        <h3 className={styles.titleWord}>Experience</h3>
                    </div>
                    <Timeline data={experienceData} />
                </section>
            </Fade>
        </article>
    );
};

export default Resume;