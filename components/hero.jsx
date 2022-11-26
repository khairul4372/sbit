import React from "react";
import Link from "next/link";
import styles from "../styles/hero.module.css";

const Hero = () => {
  return (
    <>
      <div className={styles.hero}>
        <Link href="/about">OUTSOURCING MODULE</Link>
        <a href="">CADENCE UNIVERSITY PROGRAM IN BANGLADESH</a>
        <a href="">MOBILE APP DEVELOPMENT</a>
        <a href="">NEWS</a>
        <a href="">TRAINING PROGRAM</a>
      </div>
    </>
  );
};

export default Hero;
