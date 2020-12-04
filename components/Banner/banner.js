import bannerStyles from './banner.module.scss';
import cardStyles from '../../styles/components/card.module.scss';
import formStyles from '../../styles/components/form.module.scss';

export default function Banner() {
    return (
        <div className={bannerStyles.hero}>
            <div className={bannerStyles.heroStrapline}>
                <p>Your favourite merchants and materials, delivered to your door</p>
                <div className={cardStyles.card}>
                    <form className={formStyles.form} action="https://google.com/search" method="GET">
                        <div>
                            <label className={formStyles.formLabel} for="email">Get updated when we are up and running</label>
                            <div className={formStyles.formRow}>
                                <input className={formStyles.formInput} placeholder="e.g. johnsmith@gmail.com" type="email" name="email" />
                                <button className={formStyles.formButton} type="submit">Sign up</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <div className={bannerStyles.imageContainer}>
                <img className={bannerStyles.image} src="/images/moped.svg" alt="" />
            </div>
        </div>
    )
}