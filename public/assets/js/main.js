'use strict';

console.log('>> Ready :)');


// Toggle function 

function fill_visibility(id) {
   const e = document.getElementById('form__design--open');
   if(e.style.display == 'block')
      e.style.display = 'none';
   else
      e.style.display = 'block';
}

function fill_visibility(id) {
    const e = document.getElementById('form__fill--open');
    if(e.style.display == 'block')
       e.style.display = 'none';
    else
       e.style.display = 'block';
 }

 function share_visibility(id) {
    const e = document.getElementById('form__share--open');
    if(e.style.display == 'block')
       e.style.display = 'none';
    else
       e.style.display = 'block';
 }


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

 
//# sourceMappingURL=main.js.map
