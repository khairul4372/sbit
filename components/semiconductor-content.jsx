import React from "react";
import styles from "../styles/home-content.module.css";
import Image from "next/image";
import semiconductor from "../public/images/semiconductor.png";
import semicond from "../public/images/semicond.jpeg";
import semicond2 from "../public/images/semicond2.jpeg";

const SemiconductorContent = () => {
  return (
    <>
      <div className={styles.content_body}>
        <div className={styles.content_width}>
          <Image className="" src={semiconductor} alt="semiconductor" />
          <h4>SEMI-CONDUCTOR</h4>
          <br />

          <Image
            className={styles.width}
            src={semicond}
            alt="semiconductor 1"
          />
          <p className={styles.width}>
            Semiconductor is huge field, and one of its biggest area is IC
            designing. IC or Integrated Circuits contains several transistors
            fabricated on a single chip. And a VLSI (Very Large Scale
            Integration) system integrates millions (30000 - 1000000) of
            &quot;electronic components&quot; in a small area (few mm²-&gt; few
            cm²).To design anything as we need like a Microprocessor,
            Microcontroller,Memories,Printer, Mobile, Digital security lock in a
            word everything of our day to day use need a chip. This chip is the
            ultimate design of a VLSI design flow. Which actually go through as
            following way: We need idea-&gt; Specification-&gt; design
            architecture-&gt; Functional verification-&gt; Logic design-&gt;
            Logic verification-&gt; Circuit Design-&gt; Circuit
            Verification-&gt; Physical design-&gt; Layout verification-&gt;
            Fabrication & testing-&gt; IC chip.
          </p>
          <p className={styles.width}>
            To perform this whole flow we need EDA (electric design automation)
            tools. From lots of EDA tools we focused on Cadence EDA tools. Its
            cover whole design of an IC chip.
          </p>
          <p className={styles.width}>
            Furthermore the field of opportunities of VLSI is huge, we can take
            a glance as mention in here:
          </p>
          <Image
            className={styles.width}
            src={semicond2}
            alt="semiconductor 2"
          />
          <p className={styles.width}>
            Here mentioning that we are the pioneer Provider of Cadence tools in
            Bangladesh. Cadence EDA tools having lots of feature. Founded from
            1988, its revenues is approximately $1.46 billion by 2013.Cadence
            EDA tools span the entire product development process.
          </p>
        </div>
      </div>
    </>
  );
};

export default SemiconductorContent;
