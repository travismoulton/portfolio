import Head from 'next/head';

import styles from '../styles/Home.module.css';
import Hero from '../components/Hero/Hero';
import MyWork from '../components/MyWork';
import Nav from '../components/Nav';
import MySkills from '../components/MySkills';
import AboutMe from '../components/AboutMe';

export default function Home() {
  return (
    <div className={styles.app}>
      <Head>
        <title>Travis Moulton</title>
        <meta name="description" content="Travis Moulton Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Hero />
      <Nav />
      <MyWork />
      <AboutMe />
      <MySkills />
    </div>
  );
}
