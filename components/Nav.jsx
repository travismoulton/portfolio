// import { useState, useEffect } from 'react';

import NavLink from './NavLink';
import classes from '../styles/Nav.module.css';

const homeLinkProps = {
  linkTxt: 'Home',
  target: 'Hero',
  icon: 'home',
};

const myWorkLinkProps = {
  linkTxt: 'My Work',
  target: 'MyWork',
  icon: 'work',
};

const skillsProps = {
  linkTxt: 'My Skills',
  target: 'MySkills',
  icon: 'skill',
};

const aboutProps = {
  linkTxt: 'About Me',
  target: 'About',
  icon: 'about',
};

const contactProps = {
  linkTxt: 'Contact',
  target: 'Contact',
  icon: 'contact',
};

export default function Nav() {
  // const [isSticky, setIsSticky] = useState(false);

  // function handleScroll() {
  //   const offSet = window.scrollY;

  //   if (offSet >= window.innerHeight) {
  //     if (!isSticky) setIsSticky(true);
  //   } else {
  //     if (isSticky) setIsSticky(false);
  //   }
  // }

  // useEffect(() => {
  //   window.addEventListener('scroll', handleScroll);
  // });

  // const navBarStyle = isSticky
  //   ? `${classes.Nav} ${classes.Sticky}`
  //   : classes.Nav;

  return (
    <nav className={classes.Nav}>
      <NavLink {...homeLinkProps} />
      <NavLink {...myWorkLinkProps} />
      <NavLink {...aboutProps} />
      <NavLink {...skillsProps} />
      <NavLink {...contactProps} />
    </nav>
  );
}
