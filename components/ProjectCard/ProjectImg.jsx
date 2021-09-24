import Image from 'next/image';

import MTGImage from '../../public/MTGPowerSearchImg.png';
import MTGHomePage from '../../public/MTGHomePage.png';
import classes from '../../styles/ProjectCard.module.css';

export default function ProjectImg({ img }) {
  return (
    <div className={classes.ProjectImgWrapper}>
      <Image
        src={MTGImage}
        alt={img}
        className={classes.ProjectImg}
        layout="fill"
      />
    </div>
  );
}
