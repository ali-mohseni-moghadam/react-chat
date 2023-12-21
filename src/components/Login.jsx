import React from "react";

// firebase
import firebase from "firebase/app";
import { auth } from "../firebase";

// Icons
import google from "../assets/google-tile.svg";

// styles
import styles from "./Login.module.css";

const Login = () => {
  return (
    <div className={styles.loginPage}>
      <div className={styles.loginCard}>
        <h2>Welcome to ReactGram!</h2>
        <div
          className={styles.button}
          onClick={() => auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider())}
        >
          <img src={google} alt="" /> Sign in with Google
        </div>
      </div>
    </div>
  );
};

export default Login;
