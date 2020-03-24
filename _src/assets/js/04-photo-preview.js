'use strict';

const reader = new FileReader();
const photoFile = document.querySelector('.js__photo--file');
const photoUploadBtn = document.querySelector('.js__photo--btn');
const photoThumbnail = document.querySelector('.js__photo--thumbnail');
const photoPreview = document.querySelector('.js__photo--preview');

if (savedAvatar !== null ) { 
  photoPreview.style.backgroundImage = `url(${savedAvatar})`;
  photoThumbnail.style.backgroundImage = `url(${savedAvatar})`;
}

function getPhoto(evt) {
  let myFile = evt.currentTarget.files[0];
  reader.addEventListener('load', addPhoto);
  reader.readAsDataURL(myFile);
}

function addPhoto() {
  photoPreview.style.backgroundImage = `url(${reader.result})`;
  photoThumbnail.style.backgroundImage = `url(${reader.result})`;
  localStorage.setItem('avatar', reader.result);
  savedAvatar = localStorage.getItem('avatar');
  enableCreateButton();
}

function hiddenPhotoField() {
  photoFile.click(); 
}

photoUploadBtn.addEventListener('click', hiddenPhotoField);
photoFile.addEventListener('change', getPhoto);