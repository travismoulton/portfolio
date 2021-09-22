import { CSSTransition } from 'react-transition-group';
import { useRef, useEffect, useState } from 'react';
import { FiArrowDown } from 'react-icons/fi';
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';

import classes from '../styles/HeroBtn.module.css';

export default function HeroBtn({ startTimer }) {
  const nodeRef = useRef(null);
  const [showAnimation, setShowAnimation] = useState(false);

  useEffect(() => {
    if (startTimer) setTimeout(() => setShowAnimation(true), 1200);
  });

  return (
    <CSSTransition
      nodeRef={nodeRef}
      in={showAnimation}
      timeout={1200}
      mountOnEnter
      classNames="hero__btn"
    >
      <ScrollLink to="MyWork" smooth={true} duration={500}>
        <button className={classes.HeroBtn} ref={nodeRef}>
          Check out my work
          <FiArrowDown />
        </button>
      </ScrollLink>
    </CSSTransition>
  );
}
