import classes from '../styles/Contact.module.css';
import EmailLink from './Contact/EmailLink';

export default function Contact() {
  return (
    <section id="Contact" className={classes.Contact}>
      <h2 className="Header">Contact Me</h2>
      <div className={classes.ContactWrapper}>
        <EmailLink />
      </div>
    </section>
  );
}
