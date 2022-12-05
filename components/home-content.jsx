import React from "react";
import Link from "next/link";
import styles from "../styles/home-content.module.css";

const Home_content = () => {
  return (
    <>
      <div className={styles.main}>
        <div className={styles.left}>
          <img src="/images/software.png" alt="" />
          <h3>SOFTWARE</h3>
          <p>
            We offer Software solution and related consultancy in many different
            IT areas for our clients. Our experienced engineers will be guiding
            you to get the best IT solution for your company.....
          </p>
          <Link className="text-decoration-none text-reset" href="/software">
            <img src="/images/row-link-bg.gif" alt="" /> Read More
          </Link>
        </div>
        <div className={styles.left}>
          <img src="/images/semiconductor.png" alt="" />
          <h3>SEMI-CONDUCTOR</h3>
          <p>
            Semiconductor is huge field, and one of its biggest area is IC
            designing. IC or Integrated Circuits contains several transistors
            fabricated on a single chip. And a VLSI (Very Large Scale
            Integration) system...
          </p>
          <Link
            className="text-decoration-none text-reset"
            href="/semiconductor"
          >
            <img src="/images/row-link-bg.gif" alt="" /> Read More
          </Link>
        </div>
        <div className={styles.left}>
          <img src="/images/solar.png" alt="" />
          <h3>SOLAR</h3>
          <p>
            Presently, the world energy consumption is 10 terawatts (TW) per
            year, and by 2050, it is projected to be about 30 TW. The present PV
            market grows at very high rates (30-40%), simi....
          </p>
          <Link className="text-decoration-none text-reset" href="/solar">
            <img src="/images/row-link-bg.gif" alt="" /> Read More
          </Link>
        </div>
      </div>
    </>
  );
};

export default Home_content;
