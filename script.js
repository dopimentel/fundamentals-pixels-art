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
const selected = document.querySelector('.color');
selected.classList.add('selected');
function colorSelector(event) {
  const selectedColor = document.querySelector('.selected');
  selectedColor.classList.remove('selected');
  event.target.classList.add('selected');
}
const colors = document.getElementsByClassName('color');
for (let index = 0; index < colors.length; index += 1) {
  colors[index].addEventListener('click', colorSelector);
}

const pixels = document.getElementsByClassName('pixel');

function fillPixel(event) {
  const pixel = event.target;
  pixel.style.backgroundColor = document.querySelector('.selected').style.backgroundColor;
}
for (let index = 0; index < pixels.length; index += 1) {
  pixels[index].addEventListener('click', fillPixel);
}
const clearBoard = bodyElement.appendChild(document.createElement('input'));
clearBoard.id = 'clear-board';
clearBoard.type = 'button';
clearBoard.value = 'Limpar';
clearBoard.innerText = 'Limpar';
bodyElement.insertBefore(clearBoard, bodyElement.children[3]);
function clearPixels() {
  for (let index = 0; index < pixels.length; index += 1) {
    pixels[index].style.backgroundColor = 'white';
  }
}
clearBoard.addEventListener('click', clearPixels);
