import React from "react";
import styles from "../styles/aboutus.module.css";

const AboutUs = () => {
  return (
    <>
      <div className={styles.com_body}>
        <h2>Product and Services</h2>

        <ul className={styles.ul}>
          <li className={styles.li}>
            <b>Semiconductor Educational Services:</b> <br />
            <br />
            sBIT has pioneered to be the First NRB Company supporting
            Micro-electronics VLSI Education in Bangladesh. sBIT has partnered
            with one of the world leader in Electronic Design Automation (EDA)
            software called Cadence Design Systems (www.cadence.com), USA to
            build the VLSI ecosystem in Bangladesh. sBIT provides special
            programs to support Electronics/VLSI Labs for the Bangladeshi
            universities, colleges and polytechnic in with tools/software,
            training, lab development and necessary resources. <br /> <br />
            If you are interested on sBIT-Cadence university program please
            contact: contact@sbit-us.com For details see:{" "}
            <a href="http://www.cadence.com/support/university/Pages/default.aspx">
              Cadence Support
            </a>
            <br />
            <br />
          </li>

          <li className={styles.li}>
            <b>Mobile and Web Applications</b> <br />
            <br />
          </li>
          <li className={styles.li}>
            <b>eLearning:</b> <br /> <br />
            sBIT has developed a personal e-learning system (PELS) in the
            context of social network environment. The main objective of PELS is
            to develop individual skills on a specific subject and share
            resources with peers. Our system architecture defines organization
            and management of personal learning environment that aids in
            creating, verifying and sharing learning artifacts and making money
            at the same time. PELS can allow online and on-call intelligent
            tutoring services for the students in Math an Science.
            <br />
            <br />
          </li>
          <li className={styles.li}>
            <b>Market Place:</b> <br /> <br />
            Coming soon.
          </li>
        </ul>
      </div>
    </>
  );
};

export default AboutUs;
