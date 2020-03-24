'use strict';

const reader = new FileReader();
const photoFile = document.querySelector('.js__photo--file');
const photoUploadBtn = document.querySelector('.js__photo--btn');
const photoThumbnail = document.querySelector('.js__photo--thumbnail');
const photoPreview = document.querySelector('.js__photo--preview');

function getPhoto(evt) {
  const myFile = evt.currentTarget.files[0];
  reader.addEventListener('load', addPhoto);
  reader.readAsDataURL(myFile);
}

function addPhoto() {
  photoPreview.style.backgroundImage = `url(${reader.result})`;
  photoThumbnail.style.backgroundImage = `url(${reader.result})`;
}

function hiddenPhotoField() {
  photoFile.click(); 
}

photoUploadBtn.addEventListener('click', hiddenPhotoField);
photoFile.addEventListener('change', getPhoto);

function savePalette(event) {	
  const selectedPaletteId = event.currentTarget.id;
  localStorage.setItem("checkboxId", selectedPaletteId);
  
}

//Local storage //

// function setImage(){
//   if (storedData.photo !== ''){
//       profileImage.style.backgroundImage = `url(${storedData.photo})`;
//       profilePreview.style.backgroundImage = `url(${storedData.photo})`;
//   }

  
// }

// const imageInput = document.querySelector('#image-input');
// function validateImage() {
//     const imageError = document.querySelector('#error-image');
//     const localStoredData = JSON.parse(localStorage.getItem('Details'));
//     if (/.(gif|jpeg|jpg|png)$/i.test(imageInput.value) || localStoredData.photo !== '') {
//         imageError.classList.add('hidden');
//         return (true);
//     } else {
//         imageError.classList.remove('hidden');
//         return (false);
//     }

const userPhoto = document.querySelector('#photo');

const localPhoto = readLocalPhoto()

function saveLocalPhoto(evt){
  localPhoto[evt.currentTarget.name] = evt.currentTarget.value;

  setLocalPhoto(localPhoto);
}



function setLocalPhoto(localPhoto){
  
  localStorage.setItem('localPhoto',JSON.stringify(localPhoto));
}


function readLocalPhoto(){
  let localPhoto = JSON.parse(localStorage.getItem('localPhoto'));
  if(localPhoto !== null){
    return localPhoto;
  } else {
    return localPhoto = {};
  }
}

function fillFormfromLocalPhoto(localPhoto){
  if(localPhoto !== null){
    photoPreview.style.backgroundImage = `url(${storedData.photo})`;
    photoThumbnail.style.backgroundImage = document.querySelector('#photo').files[0];
  } else {
    localPhoto[inputName.value] = '';
  }
}

   
userPhoto.addEventListener('change',saveLocalPhoto);

    
fillFormfromLocalPhoto(localPhoto);

