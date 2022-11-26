import React from "react";
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
              Customer Satisfaction: Our goal is to exceed customer's
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
        <div className={styles.com_content}>
          <h2>Business Model:</h2>
          <h4>On Shore/Near Shore Services Model:</h4>
          <ul className={styles.ul}>
            <li className={styles.li}>
              In this model, we provide resources either to the customer's main
              development site or near shore to make it more interesting and
              effective to the customer to meet the development deadlines. This
              way the customers can manage the resources based on the project
              needs. This allows customer more predictability, control and
              maintain quality.
            </li>
          </ul>
          <h4>Offshore Model:</h4>
          <ul className={styles.ul}>
            <li className={styles.li}>
              In this model, we provide resources that are customized to the
              customer needs on specific project(s). This helps to save cost
              significantly while maintaining quality and customer satisfaction.
              The offshore team can be tailored based on the customer needs.
              This is easily scalable based on the customer demand, as there are
              plenty of resources available in our pool. A typical team can
              consist of Project Manager, Tech Lead, Software Engineers and
              Test/QA Engineers.
            </li>
          </ul>
          <h4>Turnkey Project:</h4>
          <ul className={styles.ul}>
            <li className={styles.li}>
              In this model, we develop the products based on customer specs.
              The project can be own by the customer or can be jointly owned by
              the customer and sBIT. sBIT can be considered as a premium
              development partner. Detail terms on this can be worked out with
              mutual contract.
            </li>
          </ul>
        </div>

        {/* Domain Expertise */}
        <div className={styles.com_content}>
          <h2>Domain Expertise: Mobile Apps Development</h2>
          <ul className={styles.ul}>
            <li className={styles.li}>
              <b>Appcelerator's Titanium platform:</b> This is one of the best
              multi-OS development platforms that sBIT is focusing on
              development and create expertise
            </li>

            <li className={styles.li}>
              <b>iOS Application Development:</b> We deliver products and
              services for iPhone, iPad and relevant devices
              <ul className={styles.ul}>
                <li className={styles.li}>
                  Skills and Expertise: Objective-C/C++ iOS SDK, Xcode IDE,
                  iPhone Simulator, Performance Analysis Tools, etc.
                </li>
              </ul>
            </li>

            <li className={styles.li}>
              <b>Android Apps:</b> We help in developing wide range of Android
              Apps using Java
              <ul className={styles.ul}>
                <li className={styles.li}>
                  Skills and Expertise: Java, C++, XML, Framework APIs, Android
                  Development Tools Plugin, Native Development Tools, Android
                  SDK, Eclipse IDE, etc.
                </li>
              </ul>
            </li>
            <li className={styles.li}>
              <b>Windows Mobile:</b> We provide expertise on developing Apps on
              Windows Mobile (7.0) platforms
              <ul className={styles.ul}>
                <li className={styles.li}>
                  Skills and Expertise: Windows Mobile (7.0), .Net Compact
                  Framework, MS Visual Studio .NET, Mobile VB, ActiveSync, MS
                  SQL, Platforms and Databases, etc.
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Company;
