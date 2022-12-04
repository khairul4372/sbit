import React from "react";
import Image from "next/image";
import styles from "../styles/partners.module.css";
import du from "../public/images/du.png";
import buet from "../public/images/buet.png";
import cuet from "../public/images/cuet.jpeg";
import mist from "../public/images/mist.png";
import ku from "../public/images/ku.jpeg";
import aust from "../public/images/aust.jpeg";
import pust from "../public/images/pust.jpeg";
import aiub from "../public/images/aiub.png";
import iiuc from "../public/images/iiuc.png";
import uiu from "../public/images/uiu.gif";
import nsl2 from "../public/images/nsl2.jpeg";

const Cadence = () => {
  return (
    <div className="container">
      <div>
        <h2>Our Partners:</h2>
        <div className={styles.com_image_body}>
          <img
            className={styles.com_image}
            src="/images/cadance-logo.png"
            alt="adance-logo"
          />
        </div>
        <p>
          <b>Cadence:</b> Cadence is a leading provider of EDA and semiconductor
          IP. Cadence’s custom/analog tools help engineers design the
          transistors, standard cells, and IP blocks that make up SoCs. The
          company’s digital tools automate the design and verification of
          giga-scale, giga-hertz SoCs at the latest semiconductor processing
          nodes. Our IC packaging and PCB tools permit the design of complete
          boards and subsystems.
          <br />
          <br />
        </p>

        <p>
          Cadence also offers a growing portfolio of design IP and verification
          IP for memories, interface protocols, analog/mixed-signal components,
          and specialized processors. And reaching up to the systems level,
          Cadence offers an integrated suite of hardware/software co-development
          platforms.
          <br />
          <br />
        </p>

        <p>
          In short, Cadence technology helps customers build great products that
          connect the world.
        </p>
      </div>
      <div class="row">
        <div class="col">
          <Image src={du} alt="dhaka university" />
          <p>Dhaka University (DU)</p>
        </div>
        <div class="col">
          <Image src={buet} alt="buet" />
          <p>Bangladesh University of Engineering & Technology (BUET)</p>
        </div>
        <div class="col">
          <Image src={cuet} alt="cuet" />
          <p>Chittagong University of Engineering & Technology (CUET)</p>
        </div>
        <div class="col">
          <Image src={mist} alt="mist" />
          <p>Military Institute of Science & Technology (MIST)</p>
        </div>
      </div>
      <div class="row">
        <div class="col">
          <Image src={ku} alt="ku" />
          <p>Khulna University (KU)</p>
        </div>
        <div class="col">
          <Image src={aust} alt="aust" />
          <p>Ahsanullah University of Science & Technology (AUST)</p>
        </div>
        <div class="col">
          <Image src={pust} alt="pust" />
          <p>Pundra University of Science & Technology (PUST)</p>
        </div>
        <div class="col">
          <Image src={aiub} alt="mist" />
          <p>American International University Bangladesh (AIUB)</p>
        </div>
      </div>
      <div class="row">
        <div class="col">
          <Image src={iiuc} alt="iiuc" />
          <p>International Islamic University Chittagong (IIUC)</p>
        </div>
        <div class="col">
          <Image src={uiu} alt="uiu" />
          <p>United International University (UIU)</p>
        </div>
        <div class="col">
          <Image src={nsl2} alt="nsl2" />
          <p>Neural Semiconductor Limited (NSL)</p>
        </div>
      </div>
    </div>
  );
};

export default Cadence;
