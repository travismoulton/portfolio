import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';

import classes from '../styles/NavLink.module.css';

export default function NavLink({ linkTxt, target }) {
  return (
    <ScrollLink
      to={target}
      duration={700}
      smooth={true}
      className={classes.NavLink}
      activeClass={classes.active}
      spy={true}
    >
      {linkTxt}
    </ScrollLink>
  );
}
