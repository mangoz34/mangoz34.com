import styles from './Timeline.module.css';

interface TimelineItem {
    title: string;
    duration: string;
    description: string;
}

interface TimelineProps {
    data: TimelineItem[];
}

const Timeline = ({ data }: TimelineProps) => {
    return (
        <ol className={styles.timelineList}>
            {data.map((item, index) => (
                <li key={index} className={styles.timelineItem}>
                    <h4 className={`${styles.h5} ${styles.timelineItemTitle}`}>{item.title}</h4>
                    <span className={styles.timelineItemDuration}>{item.duration}</span>
                    <p className={styles.timelineText}>{item.description}</p>
                </li>
            ))}
        </ol>
    );
};

export default Timeline;