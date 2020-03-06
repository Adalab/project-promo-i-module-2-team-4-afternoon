'use strict';

// console.log('>> Ready :)');

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