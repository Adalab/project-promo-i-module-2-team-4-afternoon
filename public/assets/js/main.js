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
 const btnArrow = document.querySelector('.form__arrow');

 btnArrow.addEventListener('click', () => {
 if (btnArrow.classList.contains('form__arrow--collapse')) {
    btnArrow.classList.remove('form__arrow--collapse'); } 
 else { btnArrow.classList.add('form__arrow--collapse'); }
    }); 
 // ------ Button arrow collapse --------
//# sourceMappingURL=main.js.map
