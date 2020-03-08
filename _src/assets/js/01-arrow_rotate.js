'use strict';

// Button arrow collapse design
const btnArrowDesign = document.querySelector('.form__arrow--design');
function btnToggleDesign() {
  btnArrowDesign.classList.toggle('form__arrow--collapse');
}
btnArrowDesign.addEventListener('click', btnToggleDesign);

// Button arrow collapse fill

const btnArrowFill = document.querySelector('.form__arrow--fill');
function btnToggleFill() {
  btnArrowFill.classList.toggle('form__arrow--collapse');
}
btnArrowFill.addEventListener('click', btnToggleFill);

// Button arrow collapse share

const btnArrowShare = document.querySelector('.form__arrow--share');
function btnToggleShare() {
  btnArrowShare.classList.toggle('form__arrow--collapse');
}
btnArrowShare.addEventListener('click', btnToggleShare);