import React, { useRef, useEffect } from 'react';

import utils from './heroCanvasUtils';
import classes from '../../styles/heroCanvas.module.css';

const Canvas = () => {
  const canvasRef = useRef(null);
  const { updateDots, initiateDots, screenResizeHandler, clear } = utils;
  const dots = [];

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    const mousePosition = {
      x: window.innerWidth / 2,
      y: window.innerHeight / 2,
    };

    function changeMousePosition(e) {
      mousePosition.x = e.pageX;
      mousePosition.y = e.pageY;
    }

    initiateDots(canvas, dots);

    updateDots(dots, canvas, ctx, mousePosition);

    document.addEventListener('mousemove', changeMousePosition);

    let timer;
    window.addEventListener('resize', () => {
      clearTimeout(timer);

      clear(canvas, ctx);
      cancelAnimationFrame(canvas.animationId);

      timer = setTimeout(
        () => screenResizeHandler(dots, canvas, ctx, mousePosition),
        50
      );
    });

    return () => {
      window.cancelAnimationFrame(canvas.animationId);
      document.removeEventListener('mousemove', changeMousePosition);
    };
  }, []);

  return <canvas ref={canvasRef} className={classes.heroCanvas} />;
};

export default Canvas;
