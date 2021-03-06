import { useRef, useState, useEffect } from 'react';

import classes from '../styles/AboutMe.module.css';
import AboutMePic from './AboutMePic';

export default function AboutMe() {
  const [showAnimation, setShowAnimation] = useState(false);

  const picRef = useRef(null);
  const txtRef = useRef(null);

  function handleScroll() {
    const offSet = window.scrollY;

    if (offSet >= window.innerHeight && !showAnimation) setShowAnimation(true);
  }

  useEffect(() => {
    if (window.scrollY >= window.innerHeight) setShowAnimation(true);
    else document.addEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className={classes.About} id="About">
      <h2 className={classes.Header}>About me</h2>
      <div className={classes.AboutWrapper}>
        <AboutMePic refProp={picRef} />

        <div className={classes.TextContainer} ref={txtRef}>
          <p className={classes.Text}>
            I'm a self taught full stack web developer. I love solving problems
            with Javascript and exploring technology. I am excited at the
            prospect of working along side other excellent developers and taking
            my skills to the next level. My 10 years of experience in retail
            management have given me the opportunity to develop exceptional
            communication, interpersonal, and organizational skills, and make me
            an excellent addition to your team.
          </p>
        </div>
      </div>
    </section>
  );
}
