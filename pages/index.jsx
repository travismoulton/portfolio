import { useEffect, useState } from 'react';
import Head from 'next/head';

import styles from '../styles/Home.module.css';
import Hero from '../components/Hero';

export default function Home() {
  const [showAnimation, setShowAnimation] = useState(false);

  useEffect(() => {
    setShowAnimation(true);
  }, []);

  return (
    <div className={styles.app}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Hero />
    </div>
  );
}
