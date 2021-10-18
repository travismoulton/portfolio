import Head from 'next/head';

import styles from '../styles/Home.module.css';
import Hero from '../components/Hero/Hero';
import MyWork from '../components/MyWork';
import Nav from '../components/Nav';
import MySkills from '../components/MySkills';
import AboutMe from '../components/AboutMe';
import Contact from '../components/Contact';

export default function Home() {
  return (
    <div className={styles.app}>
      <Head>
        <title>Travis Moulton</title>
        <meta name="description" content="Travis Moulton Portfolio" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1,maximum-scale=1"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Hero />
      <Nav />
      <MyWork />
      <AboutMe />
      <MySkills />
      <Contact />
    </div>
  );
}
