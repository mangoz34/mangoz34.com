import styles from './Contact.module.css';

const Map = () => {
    return (
        <section className={styles.mapbox}>
            <figure>
                <iframe
                    src="https://maps.app.goo.gl/v7QdF9NHvMG2KrteA"
                    width="400"
                    height="300"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </figure>
        </section>
    );
};

export default Map;