import Image from 'next/image';

import MTGImage from '../../public/MTGPowerSearchImg-min.png';
import WorkoutImg from '../../public/WorkoutImg2-min.png';
import thredditImg from '../../public/threddit-min.png';
import classes from '../../styles/ProjectCard.module.css';

const images = { MTGImage, WorkoutImg, thredditImg };

export default function ProjectImg({ img }) {
  return (
    <div className={classes.ProjectImgWrapper}>
      <Image
        src={images[img]}
        alt={img}
        layout="fill"
        loading="eager"
        className={classes.Img}
      />
    </div>
  );
}
