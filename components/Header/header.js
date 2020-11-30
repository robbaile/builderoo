import styles from './header.module.scss';
import Link from 'next/link'

export default function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.logoContainer}>
                <p className={styles.logo}>ToolShed</p>
            </div>
            <nav className={styles.nav}>
                <ul className={styles.navList}>
                    <li className={styles.navListItem}>
                        <Link  href="/">
                            <a className={styles.navItem} href="./home.html">Home</a>
                        </Link>
                    </li>
                    <li className={styles.navListItem}>
                        <Link  href="/about">
                            <a className={styles.navItem}>About</a>
                        </Link>
                        
                    </li>
                    <li className={styles.navListItem}>
                        <Link  href="/contact">
                            <a className={styles.navItem} href="#0">Contact</a>
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
  }