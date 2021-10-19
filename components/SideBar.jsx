import navProps from '../shared/navProps';
import classes from '../styles/SideBar.module.css';
import Backdrop from './Backdrop';
import NavLink from './NavLink';

const {
  homeLinkProps,
  myWorkLinkProps,
  skillsProps,
  aboutProps,
  contactProps,
} = navProps;

export default function SideBar({ show, closed }) {
  const styles = show
    ? [classes.SideBar, classes.Open]
    : [classes.SideBar, classes.Closed];

  return (
    <>
      <Backdrop show={show} clicked={closed} />
      <div className={styles.join(' ')}>
        <nav className={classes.Nav}>
          <NavLink {...homeLinkProps} />
          <NavLink {...aboutProps} />
          <NavLink {...skillsProps} />
          <NavLink {...myWorkLinkProps} />
          <NavLink {...contactProps} />
        </nav>
      </div>
    </>
  );
}
