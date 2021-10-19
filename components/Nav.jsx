import NavLink from './NavLink';
import classes from '../styles/Nav.module.css';
import DrawerToggle from './DrawerToggle';
import navProps from '../shared/navProps';

const {
  homeLinkProps,
  myWorkLinkProps,
  skillsProps,
  aboutProps,
  contactProps,
} = navProps;

export default function Nav({ toggleSideBar }) {
  return (
    <nav className={classes.Nav}>
      <div className={classes.NavItemsWrapper}>
        <NavLink {...homeLinkProps} />
        <NavLink {...aboutProps} />
        <NavLink {...skillsProps} />
        <NavLink {...myWorkLinkProps} />
        <NavLink {...contactProps} />
      </div>
      <DrawerToggle clicked={toggleSideBar} />
    </nav>
  );
}
