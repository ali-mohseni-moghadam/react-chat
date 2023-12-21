import React from "react";

// Components
import Navbar from "./Navbar";

// Style
import styles from "./Chats.module.css";

const Chats = () => {
  return (
    <div className={styles.container}>
      <Navbar />
    </div>
  );
};

export default Chats;
