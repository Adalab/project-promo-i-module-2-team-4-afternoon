'use strict';

const reader = new FileReader();
const photoFile = document.querySelector('.js__photo--file');
const photoUploadBtn = document.querySelector('.js__photo--btn');
const photoThumbnail = document.querySelector('.js__photo--thumbnail');
const photoPreview = document.querySelector('.js__photo--preview');

function getPhoto(evt) {
    const myFile = evt.currentTarget.files[0];
    reader.addEventListener('load', printPhoto);
    reader.readAsDataURL(myFile);
  }

function printPhoto() {
    photoPreview.style.backgroundImage = `url(${reader.result})`;
    photoThumbnail.style.backgroundImage = `url(${reader.result})`;
}

function hiddenPhotoField() {
    photoFile.click(); 
   }

   photoUploadBtn.addEventListener('click', hiddenPhotoField);
   photoFile.addEventListener('change', getPhoto);