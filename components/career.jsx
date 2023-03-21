import React from "react";
import Link from "next/link";
import styles from "../styles/contact.module.css";
const Career = () => {
  return (
    <div className={styles.page_body}>
      <div className={styles.page_main}>
        <div className={styles.page_address}>
          <h4>Job Openings </h4>
          <p>Computer Systems Engineer/Architects</p>

          <Link
            className="text-decoration-none text-reset"
            href="/assets/pdfs/Job_Posting_by_the_Petitioner_for_this-position.pdf"
          >
            Check here
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Career;
