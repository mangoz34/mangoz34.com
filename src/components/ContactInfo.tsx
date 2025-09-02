import styles from './Services.module.css'; // 這裡匯入 Services 頁面的樣式
import { IoCameraOutline, IoMailOutline, IoCallOutline} from 'react-icons/io5';
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import React from "react";

const contactData = [
    {
        title: 'Email',
        icon: IoMailOutline,
        details: 'jerryh.chung@outlook.com',
        link: 'mailto:jerryh.chung@outlook.com'
    },
    {
        title: 'JC Photograph',
        icon: IoCameraOutline,
        details: 'Under Construction',
    },
    {
        title: 'GitHub',
        icon: FaGithub,
        details: 'https://github.com/mangoz34',
        link: 'https://github.com/mangoz34',
    },
    {
        title: 'LinkedIn',
        icon: FaLinkedin,
        details: 'https://www.linkedin.com/in/jchung34',
        link: 'https://www.linkedin.com/in/jchung34/',
    },
];

const IconComponent = ({ icon: Icon, size }: { icon: React.ElementType, size: number }) => {
    return <Icon size={size} />;
};

const ContactInfo = () => {
    return (
        <section className={styles.contactInfo}>
            <div className={styles.titleWrapper}>
                <h3 className={styles.contactTitle}>Personal Information</h3>
            </div>
            <ul className={styles.contactListGrid}>
                {contactData.map((item, index) => (
                    <li key={index}>
                        <a href={item.link} target="_blank" rel="noopener noreferrer" className={styles.contactLink}>
                            <div className={styles.serviceIconBox}>
                                <IconComponent icon={item.icon} size={30} />
                            </div>
                            <div className={styles.serviceContentBox}>
                                <h4 className={`${styles.h4} ${styles.serviceItemTitle}`}>{item.title}</h4>
                                <p className={styles.serviceItemText}>{item.details}</p>
                            </div>
                        </a>
                    </li>
                ))}
            </ul>
        </section>
    );
};

export default ContactInfo;