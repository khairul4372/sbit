import React from "react";
import styles from "../styles/contact.module.css";

const ContactUs = () => {
  return (
    <div className={styles.page_body}>
      <h2 className={styles.page_title}>Contact</h2>
      <div className={styles.page_main}>
        <div className={styles.page_address}>
          <h4>CORPORATE ADDRESS:</h4>
          <p>1900 Camden Avenue, Suite 201</p>
          <p>San Jose, CA 95124</p>
          <p>California, USA Phone:408-391-0521</p>
          <p>FAX:408-446-1972</p>
          <p>E-Mail: contact@sbit-us.com</p>
        </div>
        <div className={styles.page_address}>
          <h4>ASIA OFFICE:</h4>
          <p>Road No. 6, House No. 480, 2nd Floor</p>
          <p>Mirpur DOHS, Dhaka-1216</p>
          <p>
            Phone: 88-0171-274-0463, <br /> 88-0186-503-0700
          </p>
          <p>88-0186-503-0700</p>
          <p>Fax: 88-02-933-3042</p>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
