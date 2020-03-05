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

// PREVIEW CARD FUNCTIONS **********************************************************+

const nameInput = document.querySelector('#name');
const jobInput = document.querySelector('#job');
const nameBox = document.querySelector('.nameText');
const jobBox = document.querySelector('.jobText')

const getText = (x) => {
   nameBox.innerHTML = nameInput.value;
   jobBox.innerHTML = jobInput.value;
}

nameInput.addEventListener('keyup', getText);
jobInput.addEventListener('keyup', getText);
