import React from "react";
import styles from "../styles/partners.module.css";
import Image from "next/image";
import cadance_logo from "../public/images/cadance-logo.png";
import sunedisonLogo from "../public/images/sunedisonLogo.png";

const Partner = () => {
  return (
    <>
      <div className={styles.com_body}>
        <h2>Our Partners:</h2>
        <div className={styles.com_image_body}>
          <Image
            className={styles.com_image}
            src={cadance_logo}
            alt="adance-logo"
          />
          <Image
            className={styles.com_image}
            src={sunedisonLogo}
            alt="sunedisonLogo"
          />
        </div>
        <p>
          <b>Cadence:</b> Cadence is a leading provider of EDA and semiconductor
          IP. Cadence’s custom/analog tools help engineers design the
          transistors, standard cells, and IP blocks that make up SoCs. The
          company’s digital tools automate the design and verification of
          giga-scale, giga-hertz SoCs at the latest semiconductor processing
          nodes. Our IC packaging and PCB tools permit the design of complete
          boards and subsystems.
        </p>

        <p>
          Cadence also offers a growing portfolio of design IP and verification
          IP for memories, interface protocols, analog/mixed-signal components,
          and specialized processors. And reaching up to the systems level,
          Cadence offers an integrated suite of hardware/software co-development
          platforms. In short, Cadence technology helps customers build great
          products that connect the world.
        </p>

        <p>
          <b>SunEdison:</b> SunEdison is a renowned global Solar power company,
          pioneer and global leader in solar electricity power systems. The
          comapny operates with many partner companies globally.
        </p>
        <p>
          SunEdison knows the power of the sun and are committed to making its
          sustainable energy a significant part around the world’s and its
          energy future. The company continues to achieve that by providing
          customers with innovative solar energy solutions and proven financial
          savings while helping protect the environment too.
        </p>
        <p>SunEdison hold the following core values:</p>
        <ul className={styles.ul}>
          <li className={styles.li}>
            Innovation in solar energy services by delivering more solar energy
            while helping protect the environment.
          </li>
          <li className={styles.li}>
            Relentless pursuit of the right tools, techniques, products and
            technologies that maximize the financial gains associated with
            photovoltaic solar electricity for our customers.
          </li>
          <li className={styles.li}>
            Environmental accountability, by staying committed to increasing
            zero-emission energy worldwide.
          </li>
          <li className={styles.li}>
            Integrity by maintaining the highest standards in everything we do.
          </li>
          <li className={styles.li}>
            Collaboration with partners and customers to deliver viable
            sustainable energy solutions. Collaboration across boundaries to
            make solar energy a significant part of the worldwide energy
            portfolio.
          </li>
        </ul>
      </div>
    </>
  );
};

export default Partner;
