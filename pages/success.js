import Link from "next/link";

import styles from '../styles/pages/Success.module.scss';

export default function Contact() {
    return (
        <div className={styles.successContainer}>
            <div className={styles.successCard}>
                <h1>Successfully Registered!</h1>
                <p>We will update you when we are up and running</p>
                <div className={styles.successButtonContainer}>
                    <Link href="/">
                        <a className={styles.successButton}>Return home</a>
                    </Link>
                </div>
            </div>
        </div>
    )
}