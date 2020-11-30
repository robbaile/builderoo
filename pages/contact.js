import Head from 'next/head';
import Header from '../components/Header/header';
import Banner from '../components/Banner/banner';

import styles from '../styles/Home.module.scss';

export default function Contact() {
    return (
        <div className={styles.container}>
            <Head>
                <title>ToolShed</title>
                <link rel="icon" href="/favicon.ico" />
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@400;500;900&display=swap" rel="stylesheet"/>
            </Head>
            <div>
                <div className={styles.pageTop}>
                    <div className={styles.pageContent}>
                        <Header />
                        <Banner />
                    </div>
                </div>
            </div>
        </div>
    )
}