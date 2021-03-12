import { useRouter } from 'next/router';
import Axios from 'axios';
import formStyles from '../../styles/components/form.module.scss';
import styles from './email.module.scss';
import { useState } from 'react';

export default function Email() {
    const router = useRouter();
    const [isEmailError, setIsEmailError] = useState(false);
    const handleSubmit = async (e) => {
        e.preventDefault();
        const email = e.target.elements.email.value;
        try {
            const response = await Axios.post('https://toolshed-email.herokuapp.com/api/email/new', {email});
            if(!response.data.success) {
                setIsEmailError(true);
                return;
            }

            router.push('/success');
        } catch (error) {
            setIsEmailError(true) 
            return;
        }
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
                    {isEmailError && (
                        <p>We cannot register you right now</p>
                    )}
                </div>
            </form>
        </div>
    )
}