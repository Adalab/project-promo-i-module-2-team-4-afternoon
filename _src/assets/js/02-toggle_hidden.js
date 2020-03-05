

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


function showShareInfo(){
  const collapsableShare = document.querySelector('#form__share--open');
  collapsableShare.classList.toggle('hidden');

}


fillShow.addEventListener('click', showFillInfo);
designShow.addEventListener('click', showDesignInfo);
shareShow.addEventListener('click', showShareInfo);