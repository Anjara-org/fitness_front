/* eslint-disable */

import styles from "./index.module.css";
import $ from "jquery";
import { useEffect } from "react";

export default function SignUpLogIn() {

  async function handleSignin(event){
      event.preventDefault()

      const formData = new FormData(event.currentTarget)
      const email = formData.get('email')
      const password = formData.get('password')

      try {
          const response = await axios.post('http://localhost8080/login', {
            email: email,
            password: password
          });
    
          const { token } = response.data;
          document.cookie = `token=${token}; path=/`;
          router.push("/components/profile");
        } catch (error) {
          console.error(error);
          setError("Login failed");
        }
      };

  // ----------------signup-------------------------------
  async function handleSignup(event){
    event.preventDefault()
    
    const formData = new FormData(event.currentTarget)
    const firstName = formData.get('firstName')
    const lastName = formData.get('lastName')
    const email = formData.get('email')
    const password = formData.get('password')


    try {
        const response = await axios.post("http://localhost:8080/signup", {
            firstname: firstName,
            lastname: lastName,
            email: email,
            password: password
        }, { withCredentials: true });

        console.log(response);
        // Rediriger l'utilisateur vers une autre page après l'inscription réussie
        router.push('/profile');
    } catch (error) {
        console.error('Une erreur s\'est produite lors de l\'inscription :', error);
        setError(error.message);
    }
    
}
  // -----------------------------------------------
  useEffect(() => {
    const sign_in = $("#sign_in");
    const sign_up = $("#sign_up");
    const container = $("#container");

    sign_in.on("click", () => {
      container.removeClass(styles.right_panel_active);
    });

    sign_up.on("click", () => {
      container.addClass(styles.right_panel_active);
    });
  }, []);

  return (
    <div className={styles.body}>
      <div className={styles.container} id={"container"}>
        <div
          className={`
                    ${styles.form_container} 
                    ${styles.sign_up_container}
                `}
        >
          <form onSubmit={handleSignup}>
            <h1 className={styles.h1}>Create account</h1>
            <input type={"text"} placeholder={"firstname"} />
            <input type={"text"} placeholder={"lastname"} />
            <input type={"email"} placeholder={"E-mail"} />
            <input type={"password"} placeholder={"password"} />
            <button className={styles.button}>{"Sign up"}</button>
          </form>
        </div>
        <div
          className={`
                    ${styles.form_container}
                    ${styles.sign_in_container}
                `}
        >
          <form onSubmit={handleSignin}>
            <h1>Se connecter</h1>
            <input type={"email"} placeholder={"E-mail"} />
            <input type={"password"} placeholder={"Mot de passe"} />
            <button className={styles.button}>{"Login"}</button>
          </form>
        </div>
        <div className={styles.overlay_container}>
          <div className={styles.overlay}>
            <div
              className={`
                            ${styles.overlay_panel}
                            ${styles.overlay_left}
                        `}
            >
              <h1 className={styles.h1}>Good return !</h1>
              <p className={styles.p}>
                Please log in.
              </p>
              <button
                type="submit"
                className={`
                                    ${styles.ghost}
                                    ${styles.button}
                                `}
                id={"sign_in"}
              >
                {"Login"}
              </button>
            </div>
            <div
              className={`
                            ${styles.overlay_panel}
                            ${styles.overlay_right}
                        `}
            >
              <h1 className={styles.h1}>Bienvenue !</h1>
              <p className={styles.p}>
                Please sign up to begin.
              </p>
              <button
                className={`
                                    ${styles.ghost}
                                    ${styles.button}
                                `}
                id={"sign_up"}
              >
                {"Sign up"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
