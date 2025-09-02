'use client';

import { useState, useRef, useEffect } from 'react';
import styles from './Services.module.css';
import SkillItem from './SkillItem';
import { FaReact, FaJava, FaPython, FaCss3, FaNodeJs, FaGithub, FaDocker, FaJenkins, FaAws, FaDatabase, FaHtml5 } from 'react-icons/fa';
import { SiTypescript, SiNextdotjs, SiKubernetes, SiLinux, SiNginx } from 'react-icons/si';
import { IoBookOutline, IoTerminalOutline, IoLanguageOutline, IoLogoJavascript, IoCode } from 'react-icons/io5';
import { TbBrandCpp } from "react-icons/tb";
import { MdOutlineWeb } from "react-icons/md";
import { GrLanguage } from "react-icons/gr";
import { RiEnglishInput } from "react-icons/ri";
import { DiDjango } from "react-icons/di";
import { GoGear } from "react-icons/go";

const skillsData = [
    {
        icon: IoBookOutline,
        title: 'CS Foundations',
        skills: [
            { name: 'C/C++', icon: TbBrandCpp},
            { name: 'Python', icon: FaPython},
            { name: 'Java', icon: FaJava},
            { name: 'JavaScript', icon: IoLogoJavascript},
            { name: 'TypeScript', icon: SiTypescript },
            { name: 'DSA', icon: IoCode },
            { name: 'Embedded System', icon: GoGear },
        ]
    },
    {
        icon: IoTerminalOutline,
        title: 'DevOps',
        skills: [
            { name: 'Git', icon: FaGithub },
            { name: 'AWS', icon: FaAws },
            { name: 'CI/CD', icon: GoGear },
            { name: 'Nginx', icon: SiNginx },
            { name: 'Jenkins', icon: FaJenkins },
            { name: 'Linux', icon: SiLinux },
            { name: 'Docker', icon: FaDocker },
            { name: 'Kubernetes', icon: SiKubernetes },
        ]
    },
    {
        icon: MdOutlineWeb,
        title: 'Web Development',
        skills: [
            { name: 'React', icon: FaReact },
            { name: 'Node.js', icon: FaNodeJs },
            { name: 'Next.js', icon: SiNextdotjs },
            { name: 'CSS', icon: FaCss3 },
            { name: 'SQL', icon: FaDatabase },
            { name: 'HTML', icon: FaHtml5 },
            { name: 'Django', icon: DiDjango },
        ]
    },
    {
        icon: GrLanguage,
        title: 'Languages',
        skills: [
            { name: 'Mandarin Chinese', icon: IoLanguageOutline },
            { name: 'English', icon: RiEnglishInput },
            { name: 'Japanese', icon: IoLanguageOutline },
        ]
    },
];

const Skills = () => {
    const [activeItem, setActiveItem] = useState(0);
    const scrollRef = useRef<HTMLUListElement>(null);
    const itemRefs = useRef<(HTMLLIElement | null)[]>([]);

    const handleScroll = () => {
        if (scrollRef.current && itemRefs.current[0]) {
            const scrollLeft = scrollRef.current.scrollLeft;
            const itemWidth = itemRefs.current[0].offsetWidth;
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

    const handleDotClick = (index: number) => {
        if (itemRefs.current[index]) {
            itemRefs.current[index]?.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' });
        }
    };

    const dotCount = skillsData.length > 1 ? skillsData.length - 1 : skillsData.length;

    return (
        <section className={styles.service}>
            <h3 className={`${styles.h3} ${styles.serviceTitle}`}>Skills Sets</h3>
            <ul ref={scrollRef} className={styles.serviceList}>
                {skillsData.map((category, index) => (
                    <li key={index}
                        ref={(el: HTMLLIElement) => {
                            if (el) itemRefs.current[index] = el;
                        }}
                        className={styles.serviceItem}>
                        <SkillItem key={index} icon={category.icon} title={category.title} skills={category.skills} />
                    </li>
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

export default Skills;