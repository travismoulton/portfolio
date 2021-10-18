import { AiOutlineMail } from 'react-icons/ai';

import classes from '../../styles/Contact.module.css';

export default function EmailLink() {
  return (
    <div className={classes.EmailLinkWrapper}>
      <AiOutlineMail size="30px" color="var(--color-purple)" />
      <a
        href="mailto:travis.moulton002@gmail.com"
        className={classes.EmailLink}
      >
        travis.moulton002@gmail.com
      </a>
      <p>Email Me</p>
    </div>
  );
}
