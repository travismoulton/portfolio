import { Link as ScrollLink } from 'react-scroll';
import { AiOutlineHome } from 'react-icons/ai';
import { BsPerson } from 'react-icons/bs';
import { AiOutlineFolderOpen } from 'react-icons/ai';
import { SiHtmlacademy } from 'react-icons/si';
import { AiOutlineContacts } from 'react-icons/ai';

import classes from '../styles/NavLink.module.css';

const icons = {
  home: <AiOutlineHome />,
  work: <AiOutlineFolderOpen />,
  skill: <SiHtmlacademy />,
  about: <BsPerson />,
  contact: <AiOutlineContacts />,
};

export default function NavLink({ linkTxt, target, icon }) {
  return (
    <ScrollLink
      to={target}
      duration={700}
      smooth={true}
      className={classes.NavLink}
      activeClass={classes.active}
      spy={true}
    >
      <span>{linkTxt}</span> {icons[icon]}
    </ScrollLink>
  );
}
