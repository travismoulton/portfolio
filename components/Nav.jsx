import { useState, useEffect } from 'react';

import classes from '../styles/Nav.module.css';

export default function Nav() {
  const [isSticky, setIsSticky] = useState(false);

  function handleScroll() {
    const offSet = window.scrollY;

    if (offSet >= window.innerHeight) {
      if (!isSticky) setIsSticky(true);
    } else {
      if (isSticky) setIsSticky(false);
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
  });

  const style = isSticky ? `${classes.Nav} ${classes.Sticky}` : classes.Nav;

  return (
    <nav className={style}>
      <ul>
        <li>Where is the nav</li>
      </ul>
    </nav>
  );
}
