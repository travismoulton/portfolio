import classes from '../styles/DrawerToggle.module.css';

export default function DrawerToggle({ clicked }) {
  return (
    <div onClick={clicked} className={classes.DrawerToggle}>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
}
