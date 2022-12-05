import React from "react";
import styles from "../styles/contact.module.css";

const Contact = () => {
  return (
    <>
      {/* <div className={styles.bg}>
        <div className="d-flex justify-content-between col-6">
          <img className={styles.call} src="/images/call.jpeg" alt="call" />
          <img src="/images/bracket.jpeg" alt="bracket" />
          <h6 className={styles.title}>USA: +1-408-391-0521</h6>
          <img src="/images/bracket.jpeg" alt="bracket" />
          <h6 className={styles.title}>Bangladesh: +88-0171-274-0463</h6>
          <img src="/images/bracket.jpeg" alt="bracket" />
        </div>
      </div> */}
      <div className={styles.bg}>
        <div className={styles.left}>
          <img className={styles.call} src="/images/call.jpeg" alt="call" />
          <img
            className={styles.bracket}
            src="/images/bracket.jpeg"
            alt="bracket"
          />
          <h6 className={styles.title}>USA: +1-408-391-0521</h6>
          <img
            className={styles.bracket}
            src="/images/bracket.jpeg"
            alt="bracket"
          />
          <h6 className={styles.title}>Bangladesh: +88-0171-274-0463</h6>
          <img
            className={styles.bracket}
            src="/images/bracket.jpeg"
            alt="bracket"
          />
        </div>
      </div>
    </>
  );
};

export default Contact;
