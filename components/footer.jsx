import React from "react";
import Link from "next/link";
import styles from "../styles/footer.module.css";

const Footer = () => {
  return (
    <>
      <div className={styles.bg}>
        <Link className={styles.bar} href="/">
          Home
        </Link>
        <Link className={styles.bar} href="/services">
          Services
        </Link>
        <Link className={styles.bar} href="/partners">
          Partners
        </Link>
        <Link className={styles.bar} href="/company">
          Company
        </Link>
        <Link className={styles.bar} href="/about">
          About Us
        </Link>
        <Link className={styles.bar} href="/contact">
          Contacts Us
        </Link>
        <Link className={styles.bar} href="/career">
          Career
        </Link>
      </div>
    </>
  );
};

export default Footer;
