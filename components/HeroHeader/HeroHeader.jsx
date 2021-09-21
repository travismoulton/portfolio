import { CSSTransition, Transition } from 'react-transition-group';
import { useRef } from 'react';

import classes from '../../styles/HeroHeader.module.css';

export default function HeroHeader({ show }) {
  const nodeRef = useRef(null);
  return (
    <CSSTransition
      nodeRef={nodeRef}
      in={show}
      timeout={1000}
      mountOnEnter
      classNames="header"
    >
      <h1 ref={nodeRef} className={classes.HeroHeader}>
        Travis Moulton
      </h1>
    </CSSTransition>
  );
}
