import React, { forwardRef } from 'react';
import styles from './Services.module.css';

interface ServiceItemProps {
    icon: React.ElementType;
    title: string;
    text: string;
}

const ServiceItem = forwardRef<HTMLLIElement, ServiceItemProps>(
    ({ icon: IconComponent, title, text }, ref) => {
        return (
            // 將 ref 附加到元件的根元素 <li> 上
            <li ref={ref} className={styles.serviceItem}>
                <div className={styles.serviceIconBox}>
                    <IconComponent size={40} />
                </div>
                <div className={styles.serviceContentBox}>
                    <h4 className={`${styles.h4} ${styles.serviceItemTitle}`}>{title}</h4>
                    <p className={styles.serviceItemText}>{text}</p>
                </div>
            </li>
        );
    }
);

ServiceItem.displayName = 'ServiceItem'; // 為了方便除錯，設定 display name

export default ServiceItem;