import React from "react";
import Link from "next/link";
import styles from "../styles/home-content.module.css";
import Image from "next/image";
import software from "../public/images/software.png";
import row_link from "../public/images/row-link-bg.gif";
import solar from "../public/images/solar.png";
import semiconductor from "../public/images/semiconductor.png";

const Home_content = () => {
  return (
    <>
      <div className={styles.main}>
        <div className={styles.left}>
          <Image src={software} alt="software" />
          <h3>SOFTWARE</h3>
          <p>
            We offer Software solution and related consultancy in many different
            IT areas for our clients. Our experienced engineers will be guiding
            you to get the best IT solution for your company.....
          </p>
          <Link className="text-decoration-none text-reset" href="/software">
            <Image src={row_link} alt="row_link" /> Read More
          </Link>
        </div>
        <div className={styles.left}>
          <Image src={semiconductor} alt="semiconductor" />
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
            <Image src={row_link} alt="row_link" /> Read More
          </Link>
        </div>
        <div className={styles.left}>
          <Image src={solar} alt="solar" />
          <h3>SOLAR</h3>
          <p>
            Presently, the world energy consumption is 10 terawatts (TW) per
            year, and by 2050, it is projected to be about 30 TW. The present PV
            market grows at very high rates (30-40%), simi....
          </p>
          <Link className="text-decoration-none text-reset" href="/solar">
            <Image src={row_link} alt="row_link" /> Read More
          </Link>
        </div>
      </div>
    </>
  );
};

export default Home_content;
