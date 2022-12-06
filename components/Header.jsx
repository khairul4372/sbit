import React from "react";
import Link from "next/link";
import styles from "../styles/header.module.css";
import Carousel from "./image_carousel";

const Header = () => {
  return (
    <>
      <div className={styles.header}>
        <div className={styles.logo}>
          <Link href="/">
            <img src="/images/logo.png" alt="logo" />
          </Link>
        </div>
        <div className={styles.slider}>
          {/* <div>
            <img src="/images/slide1.jpeg" alt="" />
          </div> */}
          <Carousel />
          <div className={styles.slider_header}>
            <img src="/images/header-img-top.png" alt="header img top" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
