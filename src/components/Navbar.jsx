import React from 'react';

// Styles
import styles from "./Navbar.module.css"

const Navbar = () => {
    return (
        <div className={styles.container}>
            <div className={styles.name}>
                Reactgram
            </div>
            <div className={styles.logout}> 
                Logout
            </div>
        </div>
    );
};

export default Navbar;