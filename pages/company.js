import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Header from "../components/Header";
import Hero from "../components/hero";
import Company from "../components/company";
import Contact from "../components/contact";
import Footer from "../components/footer";

export default function AboutUs() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Sbit-us</title>
        <meta name="description" content="Generated by sbit" />
        <link rel="icon" href="/images/logo.png" />
      </Head>

      <main className={styles.main}>
        <Header />
        <Hero />
        <Company />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}
