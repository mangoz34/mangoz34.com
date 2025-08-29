import styles from './Services.module.css';

interface ServiceItemProps {
    icon: React.ElementType;
    title: string;
    text: string;
}

const ServiceItem = ({ icon:IconComponent, title, text }: ServiceItemProps) => {
    return (
        <li className={styles.serviceItem}>
            <div className={styles.serviceIconBox}>
                <IconComponent size={40} />
            </div>
            <div className={styles.serviceContentBox}>
                <h4 className={`${styles.h4} ${styles.serviceItemTitle}`}>{title}</h4>
                <p className={styles.serviceItemText}>{text}</p>
            </div>
        </li>
    );
};

export default ServiceItem;