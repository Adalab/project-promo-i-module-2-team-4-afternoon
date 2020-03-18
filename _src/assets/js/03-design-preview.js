'use strict';

const palette1 = document.querySelector('#paletteOne');
const palette2 = document.querySelector('#paletteTwo');
const palette3 = document.querySelector('#paletteThree');
const palette4 = document.querySelector('#paletteFour');

const palettePreview = document.querySelector('#changePreviewStyle');
const socialButtons = document.querySelectorAll('.preview__socialButton');

function selectPalette1() {
  palettePreview.classList.add('infoStyle1');
  palettePreview.classList.remove('infoStyle2');
  palettePreview.classList.remove('infoStyle3');
  palettePreview.classList.remove('infoStyle4');

  for (let button of socialButtons) {
    button.classList.add('buttonStyle1');
    button.classList.remove('buttonStyle2');
    button.classList.remove('buttonStyle3');
    button.classList.remove('buttonStyle4');
  }
  console.log('hey');
  saveLocalPalette();
}

function selectPalette2() {
  palettePreview.classList.remove('infoStyle1');
  palettePreview.classList.add('infoStyle2');
  palettePreview.classList.remove('infoStyle3');
  palettePreview.classList.remove('infoStyle4');

  for (let button of socialButtons) {
    button.classList.remove('buttonStyle1');
    button.classList.add('buttonStyle2');
    button.classList.remove('buttonStyle3');
    button.classList.remove('buttonStyle4');
  }
  console.log('not working!!');
  saveLocalPalette();
}

function selectPalette3() {
  palettePreview.classList.remove('infoStyle1');
  palettePreview.classList.remove('infoStyle2');
  palettePreview.classList.add('infoStyle3');
  palettePreview.classList.remove('infoStyle4');

  for (let button of socialButtons) {
    button.classList.remove('buttonStyle1');
    button.classList.remove('buttonStyle2');
    button.classList.add('buttonStyle3');
    button.classList.remove('buttonStyle4');
  }
  console.log('fffff....');
  saveLocalPalette();
}

function selectPalette4() {
  palettePreview.classList.remove('infoStyle1');
  palettePreview.classList.remove('infoStyle2');
  palettePreview.classList.remove('infoStyle3');
  palettePreview.classList.add('infoStyle4');

  for (let button of socialButtons) {
    button.classList.remove('buttonStyle1');
    button.classList.remove('buttonStyle2');
    button.classList.remove('buttonStyle3');
    button.classList.add('buttonStyle4');
  }
  console.log('fffff....');
  saveLocalPalette();
}

palette1.addEventListener('click', selectPalette1);
palette2.addEventListener('click', selectPalette2);
palette3.addEventListener('click', selectPalette3);
palette4.addEventListener('click', selectPalette4);


// localstorage



function saveLocalPalette(){
  
  if (palette1.checked){
    localStorage.setItem('theme',palette1.value);
  }

  if (palette2.checked){
    localStorage.setItem('theme',palette2.value);
  }

  if (palette3.checked){
    localStorage.setItem('theme',palette3.value);
  }

  if (palette4.checked){
    localStorage.setItem('theme',palette4.value);
  }
}

function getTheme(){
  if (localStorage.getItem('theme') === palette1.value){
  
    palettePreview.classList.add('infoStyle1');
  palettePreview.classList.remove('infoStyle2');
  palettePreview.classList.remove('infoStyle3');
  palettePreview.classList.remove('infoStyle4');

  for (let button of socialButtons) {
    button.classList.add('buttonStyle1');
    button.classList.remove('buttonStyle2');
    button.classList.remove('buttonStyle3');
    button.classList.remove('buttonStyle4');
  }
    palette1.checked = true;
  }

  if (localStorage.getItem('theme') === palette2.value){
    palettePreview.classList.remove('infoStyle1');
  palettePreview.classList.add('infoStyle2');
  palettePreview.classList.remove('infoStyle3');
  palettePreview.classList.remove('infoStyle4');

  for (let button of socialButtons) {
    button.classList.remove('buttonStyle1');
    button.classList.add('buttonStyle2');
    button.classList.remove('buttonStyle3');
    button.classList.remove('buttonStyle4');
  }
    palette2.checked = true;
  }

  if (localStorage.getItem('theme') === palette3.value){
    palettePreview.classList.remove('infoStyle1');
  palettePreview.classList.remove('infoStyle2');
  palettePreview.classList.add('infoStyle3');
  palettePreview.classList.remove('infoStyle4');

  for (let button of socialButtons) {
    button.classList.remove('buttonStyle1');
    button.classList.remove('buttonStyle2');
    button.classList.add('buttonStyle3');
    button.classList.remove('buttonStyle4');
  }
    palette3.checked = true;

}

if (localStorage.getItem('theme') === palette4.value){
  palettePreview.classList.remove('infoStyle1');
  palettePreview.classList.remove('infoStyle2');
  palettePreview.classList.remove('infoStyle3');
  palettePreview.classList.add('infoStyle4');

  for (let button of socialButtons) {
    button.classList.remove('buttonStyle1');
    button.classList.remove('buttonStyle2');
    button.classList.remove('buttonStyle3');
    button.classList.add('buttonStyle4');
  }
  palette4.checked = true;

}

palette1.addEventListener('click', getTheme);
palette2.addEventListener('click', getTheme);
palette3.addEventListener('click', getTheme);
palette4.addEventListener('click', getTheme);