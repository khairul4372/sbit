import React from "react";
import styles from "../styles/home-content.module.css";

const SolarContent = () => {
  return (
    <>
      <div className={styles.content_body}>
        <img className="" src="/images/solar.png" alt="solar" />
        <h4>SOLAR ENERGY</h4>
        <br />

        <p>
          Presently, the world energy consumption is 10 terawatts (TW) per year,
          and by 2050, it is projected to be about 30 TW. The present PV market
          grows at very high rates (30-40%), similar to that of the
          telecommunication and computer sectors. At present, the PV market is
          dominated (more than 40%) by grid-connected residential systems.
        </p>
        <p className={styles.width}>
          Solar energy is available everywhere; but the greatest amount is
          available between two broad bands encircling the earth between
          15&quot; and 35&quot; latitude north and south. Fortunately,
          Bangladesh is situated between 20&quot;43&apos; north and
          26&quot;38&apos; north latitude and as such Bangladesh is in a very
          favorable position in respect of the utilization of solar energy. The
          insolation in Bangladesh varies from 3.8 kwh/m²/day to 6.4 kwh/m²/day
          at an average of 5 kwh/m²/day. Annual amount of radiation varies from
          1840 to 1675 kwh/m² which is 50-100% higher than in Europe.These
          indicate that there are good prospects for solar thermal and
          photovoltaic application in the country.
        </p>
        <p className={styles.width}>
          The government has set a target of generating 500 megawatts (MW) of
          green energy - almost ten times the current amount - by 2015, in an
          attempt to narrow the gap between current supplies of grid electricity
          and the needs of the country&apos;s 160 million people. Only 49
          percent of Bangladesh&apos;s population has access to electricity from
          the national grid.
        </p>
        <p>
          Presently, 62% of the total population (including renewable energy)
          has access to electricity and per capita generation is 321 kWH, which
          is very low compared to other developing countries. Electricity
          generation in the country was supposed to be 5000 MW by the year 2011
          and 7000 MW by 2013. The government aims to generate an additional
          15,000 MW electricity, within 2016 under short, medium and long term
          plan. This target is much higher than the one stated.
        </p>
        <p className={styles.width}>
          The government has further extended its vision targeting the upcoming
          years up to 2030 and prepared the Power System Master Plan 2010
          (PSMP). This plan states that in 2030 the demand of power would be
          around 34,000 MW while the generation capacity would be about
          39,000MW.Presently, the generation capacity is nearly 9,713 MW
          (September, 2013) which implies that much endeavor is required to
          achieve the goal. Considering the country&apos;s future energy
          security, the government has rightly given due importance on renewable
          energy, energy efficiency as well as energy conservation.
        </p>
        <p>
          Solar home systems (SHS) are the main weapon in the government&apos;s
          renewable energy armory, because they can operate independently of the
          national grid.
        </p>
        <p>
          Rural electrification Board (REB), Atomic Energy Commission (AEC),
          Local Government Engineering Department (LGED), and Grameen Shakti
          (GS) have installed (are in the process of installation of) a number
          of solar PV systems in different parts of the country.
        </p>
        <p>
          And sBIT (Silicon Bangla IT) Inc. is the upcoming cutting edge company
          for Bangladesh which will make a revolutionary change in the power
          sector of Bangladesh. sBIT Inc. will install 200MW solar power plant
          in Bangladesh which will highly support to make possible the steps of
          the Bangladeshgovernment in power sector.
        </p>
      </div>
    </>
  );
};

export default SolarContent;
