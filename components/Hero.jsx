import { useEffect, useState } from 'react';

import classes from '../styles/HeroWrapper.module.css';
import HeroBtn from './HeroBtn';
import HeroHeader from './HeroHeader';
import HeroCanvas from './HeroCanvas/HeroCanvas';

export default function HeroContainer() {
  const [showAnimation, setShowAnimation] = useState(false);

  useEffect(() => {
    setShowAnimation(true);
  }, []);

  console.log(showAnimation);

  return (
    <>
      <HeroCanvas />
      <div className={classes.HeroWrapper}>
        <HeroHeader show={showAnimation} />
        <HeroBtn startTimer={showAnimation} />
      </div>
    </>
  );
}
