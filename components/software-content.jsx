import React from "react";
import styles from "../styles/home-content.module.css";

const SoftwareContent = () => {
  return (
    <>
      <div className={styles.content_body}>
        <div>
          <img className="" src="/images/software.png" alt="software" />
          <h4>SOFTWARE</h4>
          <br />
        </div>

        <p className={styles.width}>
          We offer Software solution and related consultancy in many different
          IT areas for our clients. Our experienced engineers will be guiding
          you to get the best IT solution for your company. We offer:
        </p>

        <ul className={styles.ul}>
          <li className={styles.li}>Apps Development Services</li>
          <li className={styles.li}>Provide dedicated resources to clients</li>
          <li className={styles.li}>Turnkey Software Development</li>
          <li className={styles.li}>System Integration</li>
          <li className={styles.li}>Software QA and Testing Services</li>
          <li className={styles.li}>Free consultations</li>
          <li className={styles.li}>Satisfaction guarantee</li>
        </ul>
      </div>
    </>
  );
};

export default SoftwareContent;
