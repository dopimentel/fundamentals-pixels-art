const bodyElement = document.querySelector('body');
const colorPalette = bodyElement.appendChild(document.createElement('div'));
colorPalette.id = 'color-palette';
for (let index = 0; index < 4; index += 1) {
  const color = colorPalette.appendChild(document.createElement('div'));
  color.classList.add('color');
}
const color = document.getElementsByClassName('color');
color[0].style.backgroundColor = 'black';
color[1].style.backgroundColor = 'red';
color[2].style.backgroundColor = 'blue';
color[3].style.backgroundColor = 'green';

const pixelBoard = bodyElement.appendChild(document.createElement('div'));
pixelBoard.id = 'pixel-board';
for (let index = 0; index < 25; index += 1) {
  const pixel = pixelBoard.appendChild(document.createElement('div'));
  pixel.className = 'pixel';
}
