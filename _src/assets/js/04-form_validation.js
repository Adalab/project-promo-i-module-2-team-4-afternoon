const userInput = document.getElementById('name');
const userJob = document.getElementById('job') 
const emailInput = document.getElementById('email');
const linkedinInput = document.getElementById('linkedin');
const githubInput = document.getElementById('github');
const photoInput = document.getElementById('photo__submit')

const wrapperName = document.querySelector('.wrapperName');

function formValidation() {
  if(userInput.value === '') {
    wrapperName.classList.add('error');
    return false;
  }  
}

shareShow.addEventListener('click', formValidation);