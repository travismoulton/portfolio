/* eslint no-param-reassign: ["error", { "props": false }] */

import Dot from './Dot';

function setCanvasDimensions(canvas) {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}

function setNumDots(canvas) {
  if (canvas.width > 1600) canvas.numDots = 700;
  else if (canvas.width > 1300) canvas.numDots = 550;
  else if (canvas.width > 1100) canvas.numDots = 400;
  else if (canvas.width < 1101) canvas.numDots = 300;
}

function setRatioMultiplier(canvas) {
  if (canvas.width > 1600) canvas.ratioMultiplier = 2500;
  else if (canvas.width > 1300) canvas.ratioMultiplier = 2000;
  else if (canvas.width > 1100) canvas.ratioMultiplier = 1100;
  else if (canvas.width < 1101) canvas.ratioMultiplier = 1000;
}

function initiateDots(canvas) {
  setCanvasDimensions(canvas);
  setNumDots(canvas);
  setRatioMultiplier(canvas);
  for (let i = 0; i < canvas.numDots; i++) canvas.dots.push(new Dot(canvas));
}

function clear(canvas) {
  const { width, height } = canvas;
  canvas.ctx.clearRect(0, 0, width, height);
}

function drawDot(dot, canvas) {
  const { x, y, radius } = dot;

  canvas.ctx.beginPath();
  canvas.ctx.arc(x, y, radius, 0, Math.PI * 2, true);

  canvas.ctx.fillStyle = dot.color;
  canvas.ctx.fill();
}

function detectWalls(dot, canvas) {
  const hitRightWall = dot.x + dot.radius > canvas.width;
  const hitLeftWall = dot.x - dot.radius < 0;

  const hitTopWall = dot.y - dot.radius < 0;
  const hitBottomWall = dot.y + dot.radius > canvas.height;

  if (hitRightWall || hitLeftWall) dot.deltaX *= -1;
  if (hitTopWall || hitBottomWall) dot.deltaY *= -1;
}

function drawLine(dot1, dot2, canvas) {
  canvas.ctx.beginPath();

  canvas.ctx.moveTo(dot1.x, dot1.y);

  canvas.ctx.lineTo(dot2.x, dot2.y);
  canvas.ctx.lineWidth = 1;
  canvas.ctx.strokeStyle = dot1.color;

  canvas.ctx.stroke();
}

function checkForXInRange(dot1, dot2, dotPairDistance) {
  return (
    dot1.x - dot2.x < dotPairDistance && dot1.x - dot2.x > -dotPairDistance
  );
}

function checkForYInRange(dot1, dot2, dotPairDistance) {
  return (
    dot1.y - dot2.y < dotPairDistance && dot1.y - dot2.y > -dotPairDistance
  );
}

function checkForDotPair(dot1, dot2) {
  const dotPairDistance = 50;
  const xInRange = checkForXInRange(dot1, dot2, dotPairDistance);
  const yInRange = checkForYInRange(dot1, dot2, dotPairDistance);

  if (xInRange && yInRange) return [dot1, dot2];
  // Empty arrays will be filtered out when creating the final set of dot pairs
  return [];
}

function createPairs(dots) {
  if (dots.length < 2) return [];
  const first = dots[0];
  const rest = dots.slice(1);
  const pairs = rest.map((arrayItem) => checkForDotPair(first, arrayItem));
  return pairs.concat(createPairs(rest));
}

function generateDotPairs(dots, mousePosition) {
  const lineRadius = 150;

  const dotsToConnect = dots.filter(
    (dot) =>
      mousePosition.x - dot.x < lineRadius &&
      mousePosition.x - dot.x > -lineRadius &&
      mousePosition.y - dot.y < lineRadius &&
      mousePosition.y - dot.y > -lineRadius
  );

  // Filter out the empty pairs that are created when x or y is not in range
  const dotPairs = createPairs(dotsToConnect).filter((pair) => pair.length > 0);

  return dotPairs;
}

function fadeDots(mousePosition, canvas) {
  const getDistanceFromMouse = (dot) =>
    Math.abs(dot.x - mousePosition.x) + Math.abs(dot.y - mousePosition.y);

  const screenSize = canvas.width * canvas.height;

  function getDistanceRatio(dot) {
    const distanceRatio =
      (getDistanceFromMouse(dot) / screenSize) * canvas.ratioMultiplier;

    return distanceRatio < 1 ? distanceRatio : 1;
  }

  canvas.dots.forEach((dot) => {
    const alpha = 1 - getDistanceRatio(dot);

    dot.changeAlpa(alpha);
  });
}

function updateDots(canvas, mousePosition) {
  clear(canvas);

  canvas.dots.forEach((dot) => {
    drawDot(dot, canvas);

    detectWalls(dot, canvas);

    dot.x += dot.deltaX;
    dot.y += dot.deltaY;
  });

  fadeDots(mousePosition, canvas);

  const dotPairs = generateDotPairs(canvas.dots, mousePosition);

  dotPairs.forEach((pair) => drawLine(pair[0], pair[1], canvas));

  canvas.animationId = requestAnimationFrame(() =>
    updateDots(canvas, mousePosition)
  );
}

function resetDots(canvas, mousePosition) {
  canvas.dots.length = 0;
  initiateDots(canvas);
  updateDots(canvas, mousePosition);
}

let timer;
function screenResizeHandler(canvas, mousePosition) {
  clearTimeout(timer);
  clear(canvas);
  cancelAnimationFrame(canvas.animationId);
  timer = setTimeout(() => resetDots(canvas, mousePosition), 50);
}

const utils = {
  updateDots,
  initiateDots,
  screenResizeHandler,
};

export default utils;
