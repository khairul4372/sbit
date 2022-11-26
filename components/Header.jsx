import React from "react";
import styles from "../styles/header.module.css";

const Header = () => {
  return (
    <>
      <div className={styles.header}>
        <div className={styles.logo}>
          <img src="/images/logo.png" alt="logo" />
        </div>
        <div className={styles.slider}>
          <img src="/images/slide2.jpeg" alt="slide2" />
        </div>
      </div>
    </>
  );
};

export default Header;
