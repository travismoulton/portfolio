import { useState, useEffect } from 'react';

import NavLink from './NavLink';
import classes from '../styles/Nav.module.css';

const homeLinkProps = {
  linkTxt: 'Home',
  target: 'Hero',
};

const myWorkLinkProps = {
  linkTxt: 'My Work',
  target: 'MyWork',
};

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

  const navBarStyle = isSticky
    ? `${classes.Nav} ${classes.Sticky}`
    : classes.Nav;

  return (
    <nav className={navBarStyle}>
      <NavLink {...homeLinkProps}></NavLink>
      <NavLink {...myWorkLinkProps}></NavLink>
    </nav>
  );
}
