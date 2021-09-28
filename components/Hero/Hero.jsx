import { useEffect, useState } from 'react';

import classes from '../../styles/HeroWrapper.module.css';
import HeroBtn from './HeroBtn';
import HeroHeader from './HeroHeader';
import HeroCanvas from '../HeroCanvas/HeroCanvas';

export default function Hero() {
  const [showAnimation, setShowAnimation] = useState(false);

  useEffect(() => {
    setShowAnimation(true);
  }, []);

  return (
    <div id="Hero" className={classes.Hero}>
      <HeroCanvas />
      <div className={classes.HeroWrapper}>
        <HeroHeader show={showAnimation} />
        <HeroBtn startTimer={showAnimation} />
      </div>
    </div>
  );
}
