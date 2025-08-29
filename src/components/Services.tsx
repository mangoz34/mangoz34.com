'use client';

import ServiceItem from './ServiceItem';
import styles from './Services.module.css';
import { useState, useRef, useEffect } from 'react';
import { IoMailOutline, IoCameraOutline, IoDesktopOutline} from 'react-icons/io5';
import { FaTerminal, FaCode, FaLaptopCode } from 'react-icons/fa';

const servicesData = [
    { icon: FaLaptopCode, title: 'Software Engineering', text: 'DS, Algorithms, Embedded System.\n C++, Python and Java.' },
    { icon: FaCode, title: 'Web Development', text: 'Exprienced in JS, React, and AWS.' },
    { icon: IoCameraOutline, title: 'Photography', text: 'Exploring the world, capturing preciosity, telling stories.' },
    { icon: IoMailOutline, title: 'Travel', text: 'Exploring the world, capturing preciosity, telling stories.' },
];

const Services = () => {
    const [activeItem, setActiveItem] = useState(0);
    const scrollRef = useRef<HTMLUListElement>(null);

    const handleScroll = () => {
        if (scrollRef.current) {
            const scrollLeft = scrollRef.current.scrollLeft;
            const itemWidth = scrollRef.current.scrollWidth / servicesData.length;
            const currentIndex = Math.round(scrollLeft / itemWidth);
            setActiveItem(currentIndex);
        }
    };

    useEffect(() => {
        const element = scrollRef.current;
        if (element) {
            element.addEventListener('scroll', handleScroll);
            return () => {
                element.removeEventListener('scroll', handleScroll);
            };
        }
    }, []);

    return (
        <section className={styles.service}>
            <h3 className={`${styles.h3} ${styles.serviceTitle}`}>What I&#39;m doing</h3>
            <ul ref={scrollRef} className={styles.serviceList}>
                {servicesData.map((service, index) => (
                    <ServiceItem key={index} icon={service.icon} title={service.title} text={service.text} />
                ))}
            </ul>

            <div className={styles.pagination}>
                {servicesData.map((_, index) => (
                    <span
                        key={index}
                        className={`${styles.dot} ${index === activeItem ? styles.active : ''}`}
                        onClick={() => {
                            if (scrollRef.current) {
                                scrollRef.current.scrollLeft = index * (scrollRef.current.scrollWidth / servicesData.length);
                            }
                        }}
                    ></span>
                ))}
            </div>
        </section>
    );
};

export default Services;