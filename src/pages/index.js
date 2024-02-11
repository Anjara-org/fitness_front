import styles from './index.module.css';
import $ from "jquery";
import {useEffect} from "react";

export default function SignUpLogIn () {

    // Switch login to signup
    useEffect(() => {
        const sign_in = $( '#sign_in' );
        const sign_up = $( '#sign_up' );
        const container = $( '#container' );

        sign_in.on('click', () => {
            container.removeClass(styles.right_panel_active);
        });

        sign_up.on('click', () => {
            container.addClass(styles.right_panel_active);
        });

    }, []);

    return (
        <div className={styles.body}>
            <div
                className={styles.container}
                id={'container'}
            >
                <div className={`
                    ${styles.form_container} 
                    ${styles.sign_up_container}
                `}>
                    <form>
                        <h1 className={styles.h1}>Créer un compte</h1>
                        <input
                            type={'text'}
                            placeholder={'Nom'}
                        />
                        <input
                            type={'email'}
                            placeholder={'E-mail'}
                        />
                        <input
                            type={'password'}
                            placeholder={'Mot de passe'}
                        />
                        <button className={styles.button}>
                            {"S'inscrire"}
                        </button>
                    </form>
                </div>
                <div className={`
                    ${styles.form_container}
                    ${styles.sign_in_container}
                `}>
                    <form>
                        <h1>Se connecter</h1>
                        <input
                            type={'email'}
                            placeholder={'E-mail'}
                        />
                        <input
                            type={'password'}
                            placeholder={'Mot de passe'}
                        />
                        <button className={styles.button}>
                            {"Se connecter"}
                        </button>
                    </form>
                </div>
                <div className={styles.overlay_container}>
                    <div className={styles.overlay}>
                        <div className={`
                            ${styles.overlay_panel}
                            ${styles.overlay_left}
                        `}>
                            <h1 className={styles.h1}>Bon retour !</h1>
                            <p className={styles.p}>Pour continuer votre entrainement veuillez vous connecter.</p>
                            <button
                                className={`
                                    ${styles.ghost}
                                    ${styles.button}
                                `}
                                id={'sign_in'}
                            >
                                {"Se connecter"}
                            </button>
                        </div>
                        <div className={`
                            ${styles.overlay_panel}
                            ${styles.overlay_right}
                        `}>
                            <h1 className={styles.h1}>Bienvenue !</h1>
                            <p className={styles.p}>Pour commencer votre entrainement veuillez vous inscrire.</p>
                            <button
                                className={`
                                    ${styles.ghost}
                                    ${styles.button}
                                `}
                                id={'sign_up'}
                            >
                                {"S'inscrire"}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}