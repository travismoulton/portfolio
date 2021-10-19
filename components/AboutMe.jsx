import { CSSTransition } from 'react-transition-group';
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
        <CSSTransition
          nodeRef={picRef}
          in={showAnimation}
          timeout={1200}
          mountOnEnter
          classNames="About__pic"
        >
          <AboutMePic refProp={picRef} />
        </CSSTransition>
        <CSSTransition
          nodeRef={txtRef}
          in={showAnimation}
          timeout={1200}
          mountOnEnter
          classNames="About__text"
        >
          <div className={classes.TextContainer} ref={txtRef}>
            <p className={classes.Text}>
              I'm a self taught front-end web developer working on learning the
              backend and being able to contribute to the full stack. I love
              solving problems with Javascirpt and exploring technology. I am
              excited at the prospect of working along side other excellent
              developers and taking my skills to the next level. My 10 years of
              exerpience in retail management have given me the opprotunity to
              develop exceptional communication, interpersonal, and
              orginizational skills, and make me an excellent addition to your
              team.
            </p>
          </div>
        </CSSTransition>
      </div>
    </section>
  );
}
