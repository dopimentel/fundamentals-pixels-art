const bodyElement = document.querySelector('body');
const elementH1 = bodyElement.appendChild(document.createElement('h1'));
elementH1.id = 'title';
elementH1.innerHTML = 'Paleta de Cores';
const colorPalette = bodyElement.appendChild(document.createElement('div'));
colorPalette.id = 'color-palette';
for (let index = 0; index < 4; index += 1) {
  const color = colorPalette.appendChild(document.createElement('div'));
  color.classList.add('color');
}

function colorGenerate() {
  const r = Math.floor(Math.random() * 255 + 1);
  const g = Math.floor(Math.random() * 255 + 1);
  const b = Math.floor(Math.random() * 255 + 1);
  return `rgb(${r}, ${g}, ${b})`;
}

const color = document.getElementsByClassName('color');
color[0].style.backgroundColor = 'black';
for (let index = 1; index < color.length; index += 1) {
  color[index].style.backgroundColor = colorGenerate();
}

const pixelBoard = bodyElement.appendChild(document.createElement('div'));
pixelBoard.id = 'pixel-board';

function fillPixel(event) {
  const pixel = event.target;
  pixel.style.backgroundColor = document.querySelector('.selected').style.backgroundColor;
}

function pixelFrame(num) {
  for (let index = 0; index < num ** 2; index += 1) {
    const pixel = pixelBoard.appendChild(document.createElement('div'));
    pixel.className = 'pixel';
    pixel.addEventListener('click', fillPixel);
  }
}
pixelFrame(5);

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

const btnLimpar = bodyElement.appendChild(document.createElement('input'));
btnLimpar.id = 'clear-board';
btnLimpar.type = 'button';
btnLimpar.value = 'Limpar';
btnLimpar.innerText = 'Limpar';
bodyElement.insertBefore(btnLimpar, bodyElement.children[3]);
const pixels = document.getElementsByClassName('pixel');

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

function borderRange(param1) {
  if (param1 <= 5) {
    return 5;
  } if (param1 >= 50) {
    return 50;
  }
  return param1;
}
borderRange();

function boderGenerate() {
  if (Number.isNaN(parseInt(borderSize.value, 10))) {
    alert('Board inválido!');
  } else {
    while (pixelBoard.children.length > 0) {
      pixelBoard.removeChild(pixelBoard.lastChild);
    }
    pixelFrame(parseInt(borderRange(borderSize.value), 10));

    pixelBoard.style.width = `${
      parseInt(borderRange(borderSize.value), 10) * 43}px`;
  }
}
btnVqv.addEventListener('click', boderGenerate);
