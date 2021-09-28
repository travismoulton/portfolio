import Image from 'next/image';

import classes from '../../styles/Skills.module.css';
import HTMLSvg from '../../public/html.svg';
import CSSSvg from '../../public/css.svg';
import SASSSvg from '../../public/sass.svg';
import JSSvg from '../../public/javascript.svg';
import ReactSvg from '../../public/react.svg';
import RestSvg from '../../public/api.svg';
import GitSvg from '../../public/git.svg';
import FirebaseSvg from '../../public/firebase.svg';

const images = {
  html: HTMLSvg,
  css: CSSSvg,
  sass: SASSSvg,
  javascript: JSSvg,
  react: ReactSvg,
  'rest api': RestSvg,
  git: GitSvg,
  firebase: FirebaseSvg,
};

export default function SkillImg({ skill }) {
  return (
    <div className={classes.ImgWrapper}>
      <Image src={images[skill]} alt={skill} layout="fill" loading="eager" />
    </div>
  );
}
