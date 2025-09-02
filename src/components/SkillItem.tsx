import React from 'react';
import styles from './Services.module.css';

interface Skill {
    name: string;
    icon: React.ElementType;
}

interface SkillItemProps {
    icon: React.ElementType;
    title: string;
    skills: Skill[];
}

const IconComponent = ({ icon: Icon, size }: { icon: React.ElementType, size: number }) => {
    return <Icon size={size} />;
};

const SkillItem = ({ icon, title, skills }: SkillItemProps) => {
    return (
        <>
            <div className={styles.serviceIconBox}>
                <IconComponent icon={icon} size={40} />
            </div>
            <div>
                <h4 className={`${styles.h4} ${styles.serviceItemTitle}`}>{title}</h4>
                <ul className={styles.skillTagsList}>
                    {skills.map((skill, skillIndex) => (
                        <li key={skillIndex} className={styles.skillTag}>
                            <IconComponent icon={skill.icon} size={16} />
                            <span>{skill.name}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
};

export default SkillItem;