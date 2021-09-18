import React, { useRef, useEffect } from 'react';

import utils from './heroCanvasUtils';
import classes from '../../styles/heroCanvas.module.css';

export default function Canvas() {
  const canvasRef = useRef(null);
  const { updateDots, initiateDots, screenResizeHandler } = utils;

  useEffect(() => {
    const canvas = canvasRef.current;
    canvas.ctx = canvas.getContext('2d');
    canvas.dots = [];

    const mousePosition = {
      x: window.innerWidth / 2,
      y: window.innerHeight / 2,
    };

    function changeMousePosition(e) {
      mousePosition.x = e.pageX;
      mousePosition.y = e.pageY;
    }

    initiateDots(canvas);

    updateDots(canvas, mousePosition);

    document.addEventListener('mousemove', changeMousePosition);

    window.addEventListener('resize', () =>
      screenResizeHandler(canvas, mousePosition)
    );

    return () => {
      window.cancelAnimationFrame(canvas.animationId);
      document.removeEventListener('mousemove', changeMousePosition);
    };
  }, []);

  return <canvas ref={canvasRef} className={classes.heroCanvas} />;
}
