import React from "react";
import BusinessModel from "./business_model";
import styles from "../styles/company.module.css";

const MobileAppDevelopment = () => {
  return (
    <>
      <div className={styles.com_body}>
        {/* Domain Expertise */}
        <div className={styles.com_content}>
          <h2>Domain Expertise: Mobile Apps Development</h2>
          <ul className={styles.ul}>
            <li className={styles.li}>
              <b>Appcelerator&lsquo;s Titanium platform:</b> This is one of the
              best multi-OS development platforms that sBIT is focusing on
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

export default MobileAppDevelopment;
