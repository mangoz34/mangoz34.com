'use client';

import { useState } from 'react';
import styles from './Sidebar.module.css';
import { IoMailOutline, IoPhonePortraitOutline, IoCalendarOutline, IoLocationOutline} from 'react-icons/io5';
import { FaGithub, FaLinkedin } from 'react-icons/fa'

const Sidebar = () => {
    const [isActive, setIsActive] = useState(false);

    const toggleSidebar = () => {
        setIsActive(!isActive);
    };

    return (
        <aside className={`card-style ${styles.sidebar} ${isActive ? styles.active : ''}`} data-sidebar>
            {/* 側邊欄資訊 */}
            <div className={styles.sidebarInfo}>
                <figure className={styles.avatarBox}>
                    <img src="pikacat_cropped.png" alt="JC"/>
                </figure>
                <div className={styles.infoContent}>
                    <h1 className={`${styles.h1} ${styles.infoTitle}`} data-aos="fade-up">Jerry Chung</h1>
                    <div className={styles.infoText} data-aos="fade-up" data-aos-delay="200">
                        <p>404 Not Found :Ｄ</p>
                    </div>
                </div>

                <button className={styles.infoMoreBtn} data-sidebar-btn onClick={toggleSidebar}>
                    <span>Show Contacts</span>
                    {/* <ion-icon name="chevron-down"></ion-icon> */}
                </button>
            </div>

            {/* ContactInfo */}
            <div className={styles.sidebarInfoMore}>
                <div className={styles.separator}></div>
                <ul className={styles.contactsList}>

                    <li className={styles.contactItem}>
                        <div className="icon-box">
                            <IoMailOutline />
                        </div>
                        <div className={styles.contactInfo}>
                            <p className={styles.contactTitle}>Email</p>
                            <a href="mailto: jerryh.chung@outlook.com" className={styles.contactLink}>jerryh.chung@outlook.com</a>
                        </div>
                    </li>

                    <li className={styles.contactItem}>
                        <div className="icon-box">
                            <IoLocationOutline />
                        </div>
                        <div className={styles.contactInfo}>
                            <p className={styles.contactTitle}>Location</p>
                            <address className="contact-link">
                                Seattle, WA
                            </address>
                        </div>
                    </li>

                    <li className={styles.contactItem}>
                        <div className="icon-box">
                            <FaGithub />
                        </div>
                        <div className={styles.contactInfo}>
                            <p className={styles.contactTitle}>GitHub</p>
                            <a href="https://github.com/mangoz34" className={styles.contactLink}>mangoz34</a>
                        </div>
                    </li>

                    <li className={styles.contactItem}>
                        <div className="icon-box">
                            <FaLinkedin />
                        </div>
                        <div className={styles.contactInfo}>
                            <p className={styles.contactTitle}>Linkedin</p>
                            <a href="https://www.linkedin.com/in/jchung34/" className={styles.contactLink}>jchung34</a>
                        </div>
                    </li>

                </ul>
                <div className={styles.separator}></div>
                <ul className={styles.socialList}>
                    <li className={styles.socialItem}>
                        <a href="#" className={styles.socialLink}>
                            {/* <ion-icon name="logo-facebook"></ion-icon> */}
                        </a>
                    </li>
                    {/* ... 其他社群連結 ... */}
                </ul>
            </div>
        </aside>
    );
};

export default Sidebar;