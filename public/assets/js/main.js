'use strict';

console.log('>> Ready :)');

// ------ Button arrow collapse --------
const btnArrowDesign = document.querySelector('.form__arrow--design');
 btnArrowDesign.addEventListener('click', () => {
   if (btnArrowDesign.classList.contains('form__arrow--collapse')) {
      btnArrowDesign.classList.remove('form__arrow--collapse'); } 
   else { btnArrowDesign.classList.add('form__arrow--collapse'); }
   });


   const btnArrowFill = document.querySelector('.form__arrow--fill');
 btnArrowFill.addEventListener('click', () => {
   if (btnArrowFill.classList.contains('form__arrow--collapse')) {
      btnArrowFill.classList.remove('form__arrow--collapse'); } 
   else { btnArrowFill.classList.add('form__arrow--collapse'); }
   });

   const btnArrowShare = document.querySelector('.form__arrow--share');
 btnArrowShare.addEventListener('click', () => {
   if (btnArrowShare.classList.contains('form__arrow--collapse')) {
      btnArrowShare.classList.remove('form__arrow--collapse'); } 
   else { btnArrowShare.classList.add('form__arrow--collapse'); }
   });
 // ------ Button arrow collapse --------


// togle hide-share method

const designShow = document.querySelector('.form__arrow--design');
const fillShow = document.querySelector('.form__arrow--fill');
const shareShow = document.querySelector('.form__arrow--share');

function showDesignInfo(){
  const collapsableDesign = document.querySelector('#form__design--open');
  collapsableDesign.classList.toggle('hidden');

}


function showFillInfo(){
  const collapsableFill = document.querySelector('#form__fill--open');
  collapsableFill.classList.toggle('hidden');

}

function showDesignInfo(){
  const collapsableDesign = document.querySelector('#form__design--open');
  collapsableDesign.classList.toggle('hidden');

}

function showShareInfo(){
  const collapsableShare = document.querySelector('#form__share--open');
  collapsableShare.classList.toggle('hidden');

}


fillShow.addEventListener('click', showFillInfo);
designShow.addEventListener('click', showDesignInfo);
shareShow.addEventListener('click', showShareInfo);
//# sourceMappingURL=main.js.map
