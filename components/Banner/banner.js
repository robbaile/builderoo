import bannerStyles from './banner.module.scss';
import cardStyles from '../../styles/components/card.module.scss';
import formStyles from '../../styles/components/form.module.scss';

export default function Banner() {
    return (
        <div className={bannerStyles.hero}>
            <div className={bannerStyles.heroStrapline}>
                <p>Your favourite merchants and materials, delivered to your door</p>
                <div className={cardStyles.card}>
                    <p className={bannerStyles.heroSubText}>Help us out!</p>
                    <a className={formStyles.formButton} target="_blank" href="https://jameswhitecross.typeform.com/to/wSmpyOQW">Take our questionaire</a>
                    <p className={bannerStyles.heroSubText}>We are looking for feedback to get up and running soon!</p>
                </div>
            </div>
            <div className={bannerStyles.imageContainer}>
                <img className={bannerStyles.image} src="/images/moped.svg" alt="" />
            </div>
        </div>
    )
}