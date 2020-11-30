import styles from './footer.module.scss';
import logoStyles from '../../styles/components/logo.module.scss';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.footerInner}>
                <p className={logoStyles.logo}>ToolShed</p>
                <div className={styles.footerLinks}>
                    <p>Copyright © 2020 ToolShedCo Ltd</p>
                    <div>
                        <a className={styles.footerLink}  href="#0">About</a>
                        <a className={styles.footerLink} href="#0">Contact</a>
                    </div>
                </div>
            </div>
        </footer>
    )
}