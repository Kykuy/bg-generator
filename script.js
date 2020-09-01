let output = document.querySelector('.output');
let color1 = document.querySelector('#color1');
let color2 = document.querySelector('#color2');
let body = document.querySelector('.main');
let button = document.querySelector('.randomize');

// console.log(output);
// console.log(color1);
// console.log(color2);

function setGradient () {
    body.style.background = `linear-gradient(to right, ${color1.value}, ${color2.value} )`;

    output.textContent = body.style.background + ';';
}

function getRandomColorHex() {
    let values = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'a', 'b', 'c', 'd', 'e', 'f'];
    let result = '#';
    for (let i = 0; i < 6; i++) {
        result += values[Math.floor(Math.random() * 16)];
    }
    return result;
}

function randomize() {
    color1.value = getRandomColorHex();
    color2.value = getRandomColorHex();
    setGradient();
}

function displayDefault() {

    // output.textContent = getComputedStyle(body).background.split('rgba(0, 0, 0, 0)').join(' ').split('repeat scroll 0% 0% / auto padding-box border-box').join('')+';';    

    let string = getComputedStyle(body).background;
    output.textContent = string.slice(string.indexOf('linear-gradient'), string.indexOf(' repeat')) + ';';

    // these are identical, the second is preferred though
}


color1.addEventListener('change', setGradient);

color2.addEventListener('change', setGradient);

button.addEventListener('click', randomize);

body.addEventListener('DOMContentLoaded', displayDefault());