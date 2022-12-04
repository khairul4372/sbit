import React from "react";
import Link from "next/link";
import styles from "../styles/hero.module.css";

const Hero = () => {
  return (
    <>
      <div className={styles.hero}>
        <Link href="/outsourcing">OUTSOURCING MODULE</Link>
        <Link href="/cadence">CADENCE UNIVERSITY PROGRAM IN BANGLADESH</Link>
        <Link href="/mobile">MOBILE APP DEVELOPMENT</Link>
        <Link href="/news">NEWS</Link>
        <Link href="/training">TRAINING PROGRAM</Link>
      </div>
    </>
  );
};

export default Hero;
