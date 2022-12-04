import React from "react";
import Link from "next/link";
import styles from "../styles/hero.module.css";

const Hero = () => {
  return (
    <>
      {/* <div className="row">
        <Link className="shadow col p-4" href="/outsourcing">
          OUTSOURCING MODULE
        </Link>
        <Link className="shadow col p-2" href="/cadence">
          CADENCE UNIVERSITY PROGRAM IN BANGLADESH
        </Link>
        <Link className="shadow col p-2" href="/mobile">
          MOBILE APP DEVELOPMENT
        </Link>
        <Link className="shadow col p-2" href="/news">
          NEWS
        </Link>
        <Link className="shadow col p-2" href="/training">
          TRAINING PROGRAM
        </Link>
      </div>
 */}
      <div className={styles.hero}>
        <Link className={styles.hero_link} href="/outsourcing">
          <p className={styles.link_text}>OUTSOURCING MODULE</p>
        </Link>
        <Link className={styles.hero_link} href="/cadence">
          <p className={styles.link_text}>CADENCE UNIVERSITY PROGRAM</p>
        </Link>
        <Link className={styles.hero_link} href="/mobile">
          <p className={styles.link_text}>MOBILE APP DEVELOPMENT</p>
        </Link>
        <Link className={styles.hero_link} href="/news">
          <p className={styles.link_text}>NEWS</p>
        </Link>
        <Link className={styles.hero_link} href="/training">
          <p className={styles.link_text}>TRAINING PROGRAM</p>
        </Link>
      </div>
    </>
  );
};

export default Hero;
