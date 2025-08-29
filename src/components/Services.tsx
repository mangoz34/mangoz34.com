'use client';

import ServiceItem from './ServiceItem';
import styles from './Services.module.css';
import { IoMailOutline, IoPhonePortraitOutline, IoCalendarOutline, IoLocationOutline} from 'react-icons/io5';

const servicesData = [
    { icon: IoMailOutline, title: 'Web design', text: 'The most modern and high-quality design made at a professional level.' },
    { icon: IoMailOutline, title: 'Web development', text: 'High-quality development of sites at the professional level.' },
    { icon: IoMailOutline, title: 'Mobile apps', text: 'Professional development of applications for iOS and Android.' },
    { icon: IoMailOutline, title: 'Photography', text: 'Exploring the world, capturing preciosity, telling stories.' },
];

const Services = () => {
    return (
        <section className={styles.service}>
            <h3 className={`${styles.h3} ${styles.serviceTitle}`}>What I&#39;m doing</h3>
            <ul className={styles.serviceList}>
                {servicesData.map((service, index) => (
                    <ServiceItem key={index} icon={service.icon} title={service.title} text={service.text} />
                ))}
            </ul>
        </section>
    );
};

export default Services;