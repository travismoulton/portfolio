import classes from '../styles/Contact.module.css';
import EmailLink from './Contact/EmailLink';
import ContactForm from './Contact/ContactForm';

export default function Contact() {
  return (
    <section id="Contact" className={classes.Contact}>
      <h2 className="Header">Contact Me</h2>
      <div className={classes.ContactWrapper}>
        <EmailLink />
        <ContactForm />
      </div>
    </section>
  );
}
