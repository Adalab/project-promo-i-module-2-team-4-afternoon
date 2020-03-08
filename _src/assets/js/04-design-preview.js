'use strict';


const palette1 = document.querySelector('#paletteOne');
const palette2 = document.querySelector('#paletteTwo');
const palette3 = document.querySelector('#paletteThree');
const palettePreview = document.querySelector('#changePreviewStyle');
//using for of loop
// const socialButton = document.querySelectorAll('.preview__buttonList--item')

function selectPalette1(){
    palettePreview.classList.add('infoStyle1');
    palettePreview.classList.remove('infoStyle2');palettePreview.classList.remove('infoStyle3');

    // for (let preview of socialButton) {
    //  socialButton.classList.add('')<--create style
    // }
    console.log('hey');
}

function selectPalette2(){
    palettePreview.classList.remove('infoStyle1');
    palettePreview.classList.add('infoStyle2');
    palettePreview.classList.remove('infoStyle3');
    
    console.log('not working!!');
}

function selectPalette3(){
    palettePreview.classList.remove('infoStyle1');
    palettePreview.classList.remove('infoStyle2');
    palettePreview.classList.add('infoStyle3');

    console.log('fffff....');
}


palette1.addEventListener('click', selectPalette1);
palette2.addEventListener('click', selectPalette2);
palette3.addEventListener('click', selectPalette3);