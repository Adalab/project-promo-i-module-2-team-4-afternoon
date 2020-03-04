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

//  function btnRotate() {
//     document.querySelector('form__arow').style.transform = 'rotate(180deg)';
//   }