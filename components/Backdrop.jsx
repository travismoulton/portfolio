import classes from '../styles/Backdrop.module.css';

export default function Backdrop({ clicked, show }) {
  return show ? (
    <div className={classes.Backdrop} onClick={clicked}></div>
  ) : null;
}
