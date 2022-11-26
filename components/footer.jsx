import React from "react";
import styles from "../styles/footer.module.css";

const Footer = () => {
  return (
    <>
      <div className={styles.bg}>
        <a className={styles.bar} href="">
          Home
        </a>
        <a className={styles.bar} href="">
          Services
        </a>
        <a className={styles.bar} href="">
          Partners
        </a>
        <a className={styles.bar} href="">
          Company
        </a>
        <a className={styles.bar} href="">
          About Us
        </a>
        <a href="">Contacts</a>
      </div>
    </>
  );
};

export default Footer;
