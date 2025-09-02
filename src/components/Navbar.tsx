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
        { name: 'Photo', page: 'photo' },
        { name: 'Contact', page: 'contact' },
    ];

    const handleButtonClick = (page: string, event: React.MouseEvent<HTMLButtonElement>) => {
        // 呼叫 setActivePage 來改變頁面狀態
        setActivePage(page);

        // 強制移除按鈕的 focus 狀態，這會同時移除 hover 效果
        event.currentTarget.blur();
    };

    return (
        <nav className={styles.navbar}>
            <ul className={styles.navbarList}>
                {navLinks.map((link) => (
                    <li key={link.page} className={styles.navbarItem}>
                        <button
                            className={`${styles.navbarLink} ${
                                activePage === link.page ? styles.active : ''
                            }`}
                            onClick={(event) => handleButtonClick(link.page, event)}
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