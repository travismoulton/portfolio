import Image from 'next/image';

import img from '../public/me.jpg';
import classes from '../styles/AboutMe.module.css';

export default function AboutMePic() {
  return (
    <div className={classes.ImgWrapper}>
      <Image
        className={classes.Img}
        src={img}
        alt="Picture of myself"
        layout="fill"
        loading="eager"
      />
    </div>
  );
}
