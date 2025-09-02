'use client';

import { useState, useRef, useEffect } from 'react';
import ServiceItem from './ServiceItem';
import styles from './Services.module.css';
import { IoCameraOutline } from 'react-icons/io5';
import { FaCode } from 'react-icons/fa';
import { BsBackpack4, BsLaptop } from "react-icons/bs";

const servicesData = [
    { icon: BsLaptop, title: 'Software Engineering', text: 'DS, Algorithms, Embedded System.\n C++, Python and Java.' },
    { icon: FaCode, title: 'Web Development', text: 'Exprienced in JS, React, and AWS.' },
    { icon: IoCameraOutline, title: 'Photography', text: 'Capturing preciosity, telling stories.' },
    { icon: BsBackpack4, title: 'Travel', text: 'Exploring the world, discovering beauty' },
];

const Services = () => {
    const [activeItem, setActiveItem] = useState(0);
    const scrollRef = useRef<HTMLUListElement>(null);
    const itemRefs = useRef<(HTMLLIElement | null)[]>([]);

    const handleScroll = () => {
        if (scrollRef.current && itemRefs.current.length > 0) {
            const scrollLeft = scrollRef.current.scrollLeft;
            const itemWidth = itemRefs.current[0]?.offsetWidth || 0;
            const gap = 20;

            const currentIndex = Math.round(scrollLeft / (itemWidth + gap));
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

    const handleDotClick = (dotIndex: number) => {
        const itemIndex = dotIndex;
        if (itemRefs.current[itemIndex]) {
            itemRefs.current[itemIndex]?.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' });
        }
    };

    const dotCount = servicesData.length > 1 ? servicesData.length - 1 : servicesData.length;

    return (
        <section className={styles.service}>
            <h3 className={`${styles.h3} ${styles.serviceTitle}`}>What I&#39;m doing</h3>
            <ul ref={scrollRef} className={styles.serviceList}>
                {servicesData.map((service, index) => (
                    <ServiceItem
                        key={index}
                        ref={(el: HTMLLIElement) => {
                            if (el) itemRefs.current[index] = el;
                        }}
                        icon={service.icon}
                        title={service.title}
                        text={service.text}
                    />
                ))}
            </ul>

            <div className={styles.pagination}>
                {Array.from({ length: dotCount }).map((_, index) => (
                    <span
                        key={index}
                        className={`${styles.dot} ${index === activeItem ? styles.active : ''}`}
                        onClick={() => handleDotClick(index)}
                    ></span>
                ))}
            </div>
        </section>
    );
};

export default Services;