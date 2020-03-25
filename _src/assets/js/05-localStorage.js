'use strict';

const inputName = document.querySelector('#name');
const inputJob = document.querySelector('#job');
const inputEmail = document.querySelector('#email');
const inputPhone = document.querySelector('#phone');
const inputLinkedin= document.querySelector('#linkedin');
const inputGithub = document.querySelector('#github');

const localInfo = readLocalInfo()

function saveLocalInfo(evt){
  localInfo[evt.currentTarget.name] = evt.currentTarget.value;
  console.log(localInfo);
  setLocalInfo(localInfo);
}

function setLocalInfo(userInfo){
  
  localStorage.setItem('userInfo',JSON.stringify(userInfo));
}

function readLocalInfo(){
  let localInfo = JSON.parse(localStorage.getItem('userInfo'));
  if(localInfo !== null){
    return localInfo;
  } else {
    return localInfo = {};
  }
}

function fillFormfromLocal(localInfo){
  const inputArray = document.querySelectorAll('input');
  
  for(let inputName of inputArray){
    if(localInfo[inputName.name] !== undefined){
      inputName.value = localInfo[inputName.name]
      nameBox.innerHTML = nameInput.value;
      jobBox.innerHTML = jobInput.value;
      showEmailButton();
      getEmailLink();
      showPhoneButton();
      getPhoneLink();
      showLinkedinButton();
      getLinkedinLink();
      showGithubButton()
      getGithubLink();
      enableCreateButton()
    } else {
      inputName.value = ''
    }
  }
}

fillFormfromLocal(localInfo);


inputName.addEventListener('keyup',saveLocalInfo);
inputJob.addEventListener('keyup',saveLocalInfo);
inputEmail.addEventListener('keyup',saveLocalInfo);
inputPhone.addEventListener('keyup',saveLocalInfo);
inputLinkedin.addEventListener('keyup',saveLocalInfo);
inputGithub.addEventListener('keyup',saveLocalInfo);
