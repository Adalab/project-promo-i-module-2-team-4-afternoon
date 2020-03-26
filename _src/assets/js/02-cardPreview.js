'use strict';
// PREVIEW CARD FUNCTIONS **********************************************************+

// RESET ------------------------------------------------------------------------------
const resetButton = document.querySelector('.preview__resetButton');
const cardShare = document.querySelector('.created-container');
let savedAvatar = localStorage.getItem('avatar');

const formReset = () => { document.getElementById('form__card').reset();
}
const resetHandler = () => {
   localStorage.removeItem('userInfo');
   localStorage.removeItem('avatar');
   savedAvatar = null;
   localStorage.removeItem('checkboxId');
   formReset();
   cardShare.classList.add('hidden');
   selectPalette1()
   getText();
   showEmailButton();
   showPhoneButton();
   showLinkedinButton();
   showGithubButton();
   document.querySelector('.nameText').innerHTML = 'Nombre Apellido';
   document.querySelector('.jobText').innerHTML = 'Front-End developer';
   photoPreview.style.backgroundImage = '';
   photoThumbnail.style.backgroundImage = '';
}

resetButton.addEventListener('click', resetHandler);
// Color Palette ----------------------------------------------------------------------



// Text info --------------------------------------------------------------------------

const nameInput = document.querySelector('#name');
const jobInput = document.querySelector('#job');
const nameBox = document.querySelector('.nameText');
const jobBox = document.querySelector('.jobText');

const getText = (x) => {
   nameBox.innerHTML = nameInput.value;
   jobBox.innerHTML = jobInput.value;
   enableCreateButton();
}

nameInput.addEventListener('keyup', getText);
jobInput.addEventListener('keyup', getText);

// Social Buttons - MAIL ---------------------------------------------------------------------
const emailBox = document.querySelector('#email');
const emailButton = document.querySelector('#emailButton');

const showEmailButton = () => emailBox.value.length !== 0 ? emailButton.classList.remove('hidden') : emailButton.classList.add('hidden');
const getEmailLink = () => { emailButton.querySelector('#emailButtonLink').href = `mailto:${emailBox.value}` };

const emailHandler = () => {
   showEmailButton();
   getEmailLink();
   enableCreateButton();
}

emailBox.addEventListener('keyup', emailHandler);

// Social Buttons - PHONE ---------------------------------------------------------------------
const phoneBox = document.querySelector('#phone');
const phoneButton = document.querySelector('#phoneButton');

const showPhoneButton = () => phoneBox.value.length !== 0 ? phoneButton.classList.remove('hidden') : phoneButton.classList.add('hidden');
const getPhoneLink = () => { phoneButton.querySelector('#phoneButtonLink').href = `tel:${phoneBox.value}` };

const phoneHandler = () => {
   showPhoneButton();
   getPhoneLink();
   enableCreateButton();
}

phoneBox.addEventListener('keyup', phoneHandler);

// Social Buttons - LINKEDIN ---------------------------------------------------------------------
const linkedinBox = document.querySelector('#linkedin');
const linkedinButton = document.querySelector('#linkedinButton');

const showLinkedinButton =  () => linkedinBox.value.length !== 0 ? linkedinButton.classList.remove('hidden') : linkedinButton.classList.add('hidden');
const getLinkedinLink = () => { linkedinButton.querySelector('#linkedinButtonLink').href = `https://www.linkedin.com/in/${linkedinBox.value}` };

const linkedinHandler = () => {
   showLinkedinButton();
   getLinkedinLink();
   enableCreateButton();
}

linkedinBox.addEventListener('keyup', linkedinHandler);

// Social Buttons - GITHUB ---------------------------------------------------------------------
const githubBox = document.querySelector('#github');
const githubButton = document.querySelector('#githubButton');

const showGithubButton =  () => githubBox.value.length !== 0 ? githubButton.classList.remove('hidden') : githubButton.classList.add('hidden');
const getGithubLink = () => { githubButton.querySelector('#githubButtonLink').href = `https://www.github.com/${githubBox.value}` };

const githubHandler = () => {
   showGithubButton();
   getGithubLink();
   enableCreateButton();
}


githubBox.addEventListener('keyup', githubHandler);

// SHARE - create and share buttons ----------------------------------------------------------------

const createCardButton = document.querySelector('#createCardButton');

function enableCreateButton() {
   if (savedAvatar !== null && nameInput.value.lenght !== 0 && jobInput.value !== 0 && emailBox.value.length !== 0 && linkedinBox.value.length !== 0 && githubBox.value.length !== 0) {
      createCardButton.classList.remove('off');
    } else {
      createCardButton.classList.add('off');
    }
};

const createCard = () => {
   if (savedAvatar !== null && nameInput.value.lenght !== 0 && jobInput.value !== 0 && emailBox.value.length !== 0 && linkedinBox.value.length !== 0 && githubBox.value.length !== 0){
   event.preventDefault();
   cardShare.classList.remove('hidden');
   console.log('a new card has been created');
   }
};
createCardButton.addEventListener('click', createCard);