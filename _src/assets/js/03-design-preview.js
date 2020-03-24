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
}

palette1.addEventListener('click', selectPalette1);
palette2.addEventListener('click', selectPalette2);
palette3.addEventListener('click', selectPalette3);
palette4.addEventListener('click', selectPalette4);

palette1.addEventListener('click', savePalette);
palette2.addEventListener('click', savePalette);
palette3.addEventListener('click', savePalette);
palette4.addEventListener('click', savePalette);

// localStorage


function savePalette(event) {	
    const selectedPaletteId = event.currentTarget.id;
    localStorage.setItem("checkboxId", selectedPaletteId);
    
}

function getLocalPalette(){

let myId = localStorage.getItem("checkboxId");


    const myPalette = document.getElementById(`${myId}`);
    myPalette.setAttribute('checked', 'true');

    if (myPalette === palette1){
      selectPalette1();
    }

    if (myPalette === palette2){
      selectPalette2();
    }

    if (myPalette === palette3){
      selectPalette3();
    }

    if (myPalette === palette4){
      selectPalette4();
    }


}

getLocalPalette();