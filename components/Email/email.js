import { useRouter } from 'next/router';
import Axios from 'axios';
import formStyles from '../../styles/components/form.module.scss';
import styles from './email.module.scss';

export default function Email() {
    const router = useRouter();
    const handleSubmit = (e) => {
        e.preventDefault();
        const email = e.target.elements.email.value;
        Axios.post('https://toolshedco-email.herokuapp.com/email', {email});
        router.push('/success');
    }
    return (
        <div className={styles.container}>      
            <h2 className={styles.heading}>Get updated</h2>    
            <form onSubmit={handleSubmit} className={formStyles.form} action="https://google.com/search" method="GET">
                <div className={styles.emailForm}>
                    {/* <label className={formStyles.formLabel} for="email">Get updated when we are up and running</label> */}
                    <div className={formStyles.formRow}>
                        <input id='Form-Email' className={formStyles.formInput} placeholder="e.g. johnsmith@gmail.com" type="email" name="email" />
                        <button className={formStyles.formButton} type="submit">Sign up</button>
                    </div>
                </div>
            </form>
        </div>
    )
}