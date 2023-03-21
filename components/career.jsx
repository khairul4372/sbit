import React from "react";
import Link from "next/link";
import styles from "../styles/career.module.css";
const Career = () => {
  return (
    <div>
      <div>
        <div className={styles.c_body}>
          <h4>Job Openings </h4>
          <p>Computer Systems Engineer/Architects</p>

          <Link href="/assets/pdfs/Job_Posting_by_the_Petitioner_for_this-position.pdf">
            Check here
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Career;
