import { AiOutlineMail } from 'react-icons/ai';
import { AiFillGithub } from 'react-icons/ai';

import classes from '../../styles/Contact.module.css';

export default function EmailLink() {
  return (
    <div className={classes.EmailLinkWrapper}>
      <AiOutlineMail
        size="30px"
        color="var(--color-purple)"
        style={{ marginBottom: '1rem' }}
      />
      <a
        href="mailto:travis.moulton002@gmail.com"
        className={classes.EmailLink}
      >
        travis.moulton002@gmail.com
      </a>

      <a className={classes.ResumeBtn} href="/Resume.pdf" target="_blank">
        My Resume
      </a>

      <p>
        Check me out on Github{'  '}
        <span>
          <a href="https://github.com/travismoulton" target="_blank">
            <AiFillGithub
              className={classes.SVG}
              size="30px"
              color="var(--color-purple"
            />
          </a>
        </span>
      </p>
    </div>
  );
}
