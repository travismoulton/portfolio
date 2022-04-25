import Image from 'next/image';

import img from '../public/me4-min copy.png';
import classes from '../styles/AboutMe.module.css';

export default function AboutMePic({ refProp }) {
  return (
    <div className={classes.ImgWrapper} ref={refProp}>
      {/* <Image
        className={classes.Img}
        src={img}
        alt="Picture of myself"
        layout="fill"
        loading="eager"
        // priority
      /> */}

      <img src={img} alt="Bio Picture" className={classes.Img} />
    </div>
  );
}
