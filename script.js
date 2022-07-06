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
const btnLimpar = bodyElement.appendChild(document.createElement('input'));
btnLimpar.id = 'clear-board';
btnLimpar.type = 'button';
btnLimpar.value = 'Limpar';
btnLimpar.innerText = 'Limpar';
bodyElement.insertBefore(btnLimpar, bodyElement.children[3]);
function clearPixels() {
  for (let index = 0; index < pixels.length; index += 1) {
    pixels[index].style.backgroundColor = 'white';
  }
}
btnLimpar.addEventListener('click', clearPixels);

const btnVqv = bodyElement.appendChild(document.createElement('input'));
btnVqv.id = 'generate-board';
btnVqv.type = 'button';
btnVqv.value = 'VQV';
btnVqv.innerText = 'VQV';
bodyElement.insertBefore(btnVqv, bodyElement.children[3]);

const borderSize = bodyElement.appendChild(document.createElement('input'));
borderSize.id = 'board-size';
borderSize.type = 'number';
borderSize.min = '1';
bodyElement.insertBefore(borderSize, bodyElement.children[3]);

function boderGenerate() {
  if (Number.isNaN(parseInt(borderSize.value, 10))) {
    alert('Board inválido!');
  }
}
btnVqv.addEventListener('click', boderGenerate);
