import React from "react";
import styles from "../styles/company.module.css";

const BusinessModel = () => {
  return (
    <>
      <div className={styles.com_body}>
        {/* business model */}
        <div className={styles.com_content}>
          <h2>Business Model:</h2>
          <h4>On Shore/Near Shore Services Model:</h4>
          <ul className={styles.ul}>
            <li className={styles.li}>
              In this model, we provide resources either to the customer&lsquo;s
              main development site or near shore to make it more interesting
              and effective to the customer to meet the development deadlines.
              This way the customers can manage the resources based on the
              project needs. This allows customer more predictability, control
              and maintain quality.
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
      </div>
    </>
  );
};

export default BusinessModel;
