import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/header.module.css";
import Carousel from "./image_carousel";
import logo from "../public/images/logo.png";
import header_img from "../public/images/header-img-top.png";

const Header = () => {
  return (
    <>
      <div className={styles.header}>
        <div className={styles.logo}>
          <Link href="/">
            <Image src={logo} alt="logo" />
          </Link>
        </div>
        <div className={styles.slider}>
          {/* <div>
            <img src="/images/slide1.jpeg" alt="" />
          </div> */}
          <Carousel />
          <div className={styles.slider_header}>
            <Image
              className={styles.top_img}
              src={header_img}
              alt="header img top"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
