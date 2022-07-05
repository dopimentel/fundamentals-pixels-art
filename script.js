let bodyElement = document.querySelector('body');
let elementDiv = document.createElement('div');
bodyElement.appendChild(elementDiv);
elementDiv.id = 'color-palette';
elementDiv = document.getElementById('color-palette');
for (index = 0; index < 4; index += 1) {
    let divColor = document.createElement('div')
    elementDiv.appendChild(divColor);
    divColor.classList.add('color');
}
let divColor = document.getElementsByClassName('color');
divColor[0].style.backgroundColor = 'black';
divColor[1].style.backgroundColor = 'red';
divColor[2].style.backgroundColor = 'blue';
divColor[3].style.backgroundColor = 'green';
