import styles from './header.module.scss';
import Link from 'next/link'

export default function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.logoContainer}>
                <p className={styles.logoText}>ToolShed</p>
                <img className={styles.logo} src="/images/logo.svg" alt="logo"/>
            </div>
            {/* <nav className={styles.nav}>
                <ul className={styles.navList}>
                    <li className={styles.navListItem}>
                        <Link  href="/">
                            <a className={styles.navItem} href="./home.html">Home</a>
                        </Link>
                    </li>
                    <li className={styles.navListItem}>
                        <Link  href="/contact">
                            <a className={styles.navItem} href="#0">Contact</a>
                        </Link>
                    </li>
                </ul>
            </nav> */}
        </header>
    )
  }