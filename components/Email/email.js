import formStyles from '../../styles/components/form.module.scss';
import styles from './email.module.scss';

export default function Email() {
    return (
        <div className={styles.container}>      
            <h2 className={styles.heading}>Get updated</h2>    
            <form className={formStyles.form} action="https://google.com/search" method="GET">
                <div className={styles.emailForm}>
                    {/* <label className={formStyles.formLabel} for="email">Get updated when we are up and running</label> */}
                    <div className={formStyles.formRow}>
                        <input className={formStyles.formInput} placeholder="e.g. johnsmith@gmail.com" type="email" name="email" />
                        <button className={formStyles.formButton} type="submit">Sign up</button>
                    </div>
                </div>
            </form>
        </div>
    )
}