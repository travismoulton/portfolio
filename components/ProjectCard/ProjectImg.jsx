import Image from 'next/image';

import MTGImage from '../../public/MTGPowerSearchImg.png';
import WorkoutImg from '../../public/WorkoutImg2.png';
import classes from '../../styles/ProjectCard.module.css';

const images = { MTGImage, WorkoutImg };

export default function ProjectImg({ img }) {
  return (
    <div className={classes.ProjectImgWrapper}>
      <Image src={images[img]} alt={img} layout="fill" loading="eager" />
    </div>
  );
}
