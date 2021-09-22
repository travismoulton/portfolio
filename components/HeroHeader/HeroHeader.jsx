import { CSSTransition } from 'react-transition-group';
import { useRef } from 'react';

import classes from '../../styles/HeroHeader.module.css';

export default function HeroHeader({ show }) {
  const nodeRef1 = useRef(null);
  const nodeRef2 = useRef(null);

  return (
    <div className={classes.HeroHeader}>
      <CSSTransition
        nodeRef={nodeRef1}
        in={show}
        timeout={1200}
        mountOnEnter
        classNames="header__top"
      >
        <h1 ref={nodeRef1}>Hi! I'm Travis Moulton,</h1>
      </CSSTransition>
      <CSSTransition
        nodeRef={nodeRef2}
        in={show}
        timeout={1200}
        mountOnEnter
        classNames="header__bottom"
      >
        <h1 ref={nodeRef2}>Front End Web Developer</h1>
      </CSSTransition>
    </div>
  );
}
