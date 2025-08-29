'use client';

import styles from './Navbar.module.css';

interface NavbarProps {
    activePage: string;
    setActivePage: (page: string) => void;
}

const Navbar = ({ activePage, setActivePage }: NavbarProps) => {
    const navLinks = [
        { name: 'About', page: 'about' },
        { name: 'Resume', page: 'resume' },
        { name: 'Portfolio', page: 'portfolio' },
        { name: 'Photo', page: 'photo' },
        { name: 'Contact', page: 'contact' },
    ];

    return (
        <nav className={styles.navbar}>
            <ul className={styles.navbarList}>
                {navLinks.map((link) => (
                    <li key={link.page} className={styles.navbarItem}>
                        <button
                            className={`${styles.navbarLink} ${
                                activePage === link.page ? styles.active : ''
                            }`}
                            onClick={() => setActivePage(link.page)}
                        >
                            {link.name}
                        </button>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Navbar;