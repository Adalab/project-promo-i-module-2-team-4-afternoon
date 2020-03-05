// PREVIEW CARD FUNCTIONS **********************************************************+

// Text info --------------------------------------------------------------------------

const nameInput = document.querySelector('#name');
const jobInput = document.querySelector('#job');
const nameBox = document.querySelector('.nameText');
const jobBox = document.querySelector('.jobText');

const getText = (x) => {
   nameBox.innerHTML = nameInput.value;
   jobBox.innerHTML = jobInput.value;
}

nameInput.addEventListener('keyup', getText);
jobInput.addEventListener('keyup', getText);

// Social Buttons - MAIL ---------------------------------------------------------------------
const emailBox = document.querySelector('#email');
const emailButton = document.querySelector('#emailButton');
const showEmailButton = () => emailBox.value.length !== 0 ? emailButton.classList.remove('hidden') : emailButton.classList.add('hidden');
emailBox.addEventListener('keyup', showEmailButton);

// Social Buttons - PHONE ---------------------------------------------------------------------
const phoneBox = document.querySelector('#phone');
const phoneButton = document.querySelector('#phoneButton');
const showPhoneButton = () => phoneBox.value.length !== 0 ? phoneButton.classList.remove('hidden') : phoneButton.classList.add('hidden');
phoneBox.addEventListener('keyup', showPhoneButton);

// Social Buttons - LINKEDIN ---------------------------------------------------------------------
const linkedinBox = document.querySelector('#linkedin');
const linkedinButton = document.querySelector('#linkedinButton');
const showLinkedinButton =  () => linkedinBox.value.length !== 0 ? linkedinButton.classList.remove('hidden') : linkedinButton.classList.add('hidden');
linkedinBox.addEventListener('keyup', showLinkedinButton);

// Social Buttons - GITHUB ---------------------------------------------------------------------
const githubBox = document.querySelector('#github');
const githubButton = document.querySelector('#githubButton');
const showGithubButton =  () => githubBox.value.length !== 0 ? githubButton.classList.remove('hidden') : githubButton.classList.add('hidden');
githubBox.addEventListener('keyup', showGithubButton);
