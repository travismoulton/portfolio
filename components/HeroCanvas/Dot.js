const colors = {
  blue: 'rgba(9, 132, 227, 1)',
  green: 'rgba(85, 197, 116, 1)',
  purple: 'rgba(162, 155, 254, 1)',
  pink: 'rgba(253, 121, 168, 1)',
  yellow: 'rgba(255, 234, 167, 1)',
};

const dotColors = [
  colors.blue,
  colors.green,
  colors.purple,
  colors.pink,
  colors.yellow,
];

function getRandomColor() {
  const index = Math.floor(Math.random() * 5);
  return dotColors[index];
}

class Dot {
  constructor(canvas) {
    const { width, height } = canvas;
    this.x = Math.random() * width;
    this.y = Math.random() * height;
    this.radius = Math.random() * 3;
    // Randomly have half move in a positive direction, the other hald negative
    this.deltaX = Math.random() < 0.5 ? -Math.random() : Math.random();
    this.deltaY = Math.random() < 0.5 ? -Math.random() : Math.random();

    this.color = getRandomColor();
  }

  changeAlpa(alpha) {
    const lastCommaIndex = this.color.lastIndexOf(',');
    const newColor = `${this.color.slice(0, lastCommaIndex + 1)} ${alpha})`;
    this.color = newColor;
  }
}

export default Dot;
