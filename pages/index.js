import Head from 'next/head';
import Banner from '../components/Banner/banner';
import Footer from '../components/Footer/footer';
import Header from '../components/Header/header';
import styles from '../styles/pages/Home.module.scss';
import mainStyles from '../styles/components/main.module.scss';
import flexStyles from '../styles/components/flex.module.scss';
import formStyles from '../styles/components/form.module.scss';
import Email from '../components/Email/email';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <meta name="description" content="Delivering tools to you site within an hour"/>
        <title>Delivering tools to you site within an hour || ToolShedCo</title>
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
        <main>
          <div className={mainStyles.main}>
              <h1>How it works</h1>
              <div className={flexStyles.flexTrio}>
                  <div className={flexStyles.flexTrioItem}>
                      <img className={flexStyles.flexTrioIcon} src="../images/laptop.svg" alt="delivery" />
                      <p className={flexStyles.flexTrioTitle}>1. Buy entirely online</p>
                      <p>You buy urgent resources from local merchants through ToolShed</p>
                  </div>
                  <div className={flexStyles.flexTrioItem}>
                      <img className={flexStyles.flexTrioIcon} src="../images/moped-2.svg" alt="delivery" />
                      <p className={flexStyles.flexTrioTitle}>2. Delivered to site</p>
                      <p>We collect your order and have it delivered in an hour</p>
                  </div>
                  <div className={flexStyles.flexTrioItem}>
                      <img className={flexStyles.flexTrioIcon} src="../images/crane.svg" alt="delivery" />
                      <p className={flexStyles.flexTrioTitle}>3. Maximum efficiency</p>
                      <p>Saving precious time on your program</p>
                  </div>
              </div>
          </div>
          <div className={styles.questionaire}>
              <h2 className={styles.questionaireHeading}>Take our questionaire</h2>
              <div className={styles.questionaireFlex}>
                  <div className={styles.questionaireFlexText}>
                      <p>We are looking for feedback to guage what our customers most want. Here is a questionaire to have your say!</p>
                  </div>
                  <div>
                      <a target="_blank" className={formStyles.formButton} href="https://jameswhitecross.typeform.com/to/wSmpyOQW">View Questionaire</a>
                  </div>
              </div>
          </div>
          <Email />
        </main>
        <Footer />
      </div>
    </div>
  )
}
