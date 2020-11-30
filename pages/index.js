import Head from 'next/head';
import Banner from '../components/Banner/banner';
import Footer from '../components/Footer/footer';
import Header from '../components/Header/header';
import styles from '../styles/Home.module.scss';
import mainStyles from '../styles/components/main.module.scss';
import flexStyles from '../styles/components/flex.module.scss';
import formStyles from '../styles/components/form.module.scss';

export default function Home() {
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
        <main>
          <div className={mainStyles.main}>
              <h1>How it works</h1>
              <div className={flexStyles.flexTrio}>
                  <div className={flexStyles.flexTrioItem}>
                      <img className={flexStyles.flexTrioIcon} src="../images/laptop.svg" alt="delivery" />
                      <p className={flexStyles.flexTrioTitle}>1. Buy entirely online</p>
                      <p>You buy urgent resources from local merchants through builderoo</p>
                  </div>
                  <div className={flexStyles.flexTrioItem}>
                      <img className={flexStyles.flexTrioIcon} src="../images/moped-2.svg" alt="delivery" />
                      <p className={flexStyles.flexTrioTitle}>2. Delivered to site</p>
                      <p>We collect your order and have it delivered same day</p>
                  </div>
                  <div className={flexStyles.flexTrioItem}>
                      <img className={flexStyles.flexTrioIcon} src="../images/crane.svg" alt="delivery" />
                      <p className={flexStyles.flexTrioTitle}>3. Maximum efficiency</p>
                      <p>You continue building the future on the same day</p>
                  </div>
              </div>
          </div>
          <div className={styles.questionaire}>
              <h2 className={styles.questionaireHeading}>Help us out</h2>
              <div className={styles.questionaireFlex}>
                  <div className={styles.questionaireFlexText}>
                      <p>We are looking for feedback to guage what our customers most want. Here is a questionaire to have your say!</p>
                  </div>
                  <div>
                      <a target="_blank" className={formStyles.formButton} href="https://jameswhitecross.typeform.com/to/wSmpyOQW">View Questionaire</a>
                  </div>
              </div>
          </div>
        </main>
        <Footer />
      </div>
    </div>
  )
}
