import React from "react";
import BusinessModel from "./business_model";
import MobileAppDevelopment from "./mobile_app_development";
import styles from "../styles/company.module.css";

const Company = () => {
  return (
    <>
      <div className={styles.com_body}>
        <div className={styles.com_content}>
          <h2>Company</h2>
          <p>
            The company was founded in 2007 in Silicon Valley, CA. The founders
            have extensive experience in software and systems design. sBIT is
            Focused on Software (Mobile Apps Development), Semiconductor VLSI
            Software and Services, IT Services and Solar Power.
          </p>
          <h4>Our Vision:</h4>
          <p>
            To be the leading Solution Provider in Software, Services and Solar
            and best of choice partner.
          </p>
          <h4>Our Mission:</h4>
          <p>
            Total customer satisfaction by providing solutions to critical
            design issues to expedite time to market with successful products
          </p>
          <h4>Our Mandates:</h4>
          <ul className={styles.ul}>
            <li className={styles.li}>
              Professionalism: The measure of our professionalism is integrity,
              commitment and partnership to our clients.
            </li>
            <li className={styles.li}>
              Commitments: On-time, accurate, high quality, and comprehensive
              delivery of all the artifacts.
            </li>
            <li className={styles.li}>
              Customer Satisfaction: Our goal is to exceed customer&lsquo;s
              expectation and achieve total customer satisfaction.
            </li>
            <li className={styles.li}>
              Innovation: With our services and technology we strive to deliver
              innovative system solutions that enable and create new opportunity
              for us and our customers.
            </li>
          </ul>
        </div>

        {/* business model */}
        <BusinessModel />

        {/* Domain Expertise */}
        <MobileAppDevelopment />
      </div>
    </>
  );
};

export default Company;
