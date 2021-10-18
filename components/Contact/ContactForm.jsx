import { useForm, ValidationError } from '@formspree/react';

import classes from '../../styles/Contact.module.css';

export default function ContactForm() {
  const [formState, handleSubmit] = useForm('xoqyzewv');

  return (
    <form className={classes.ContactForm} onSubmit={handleSubmit}>
      <label htmlFor="email">Email Address</label>
      <input type="email" id="email" name="email" />
      <ValidationError prefix="Email" field="email" errors={formState.errors} />

      <label htmlFor="name">Your Name</label>
      <input type="text" id="name" name="name" />
      <ValidationError prefix="Name" field="name" errors={formState.errors} />

      <label htmlFor="subject">Subject</label>
      <input type="text" id="subject" name="subject" />
      <ValidationError
        prefix="Subject"
        field="subject"
        errors={formState.errors}
      />

      <label htmlFor="message">Your Message</label>
      <textarea name="message" id="message" cols="30" rows="10"></textarea>
      <ValidationError
        prefix="Message"
        field="message"
        errors={formState.errors}
      />

      <button type="submit" disabled={formState.submitting}>
        Submit
      </button>
    </form>
  );
}
