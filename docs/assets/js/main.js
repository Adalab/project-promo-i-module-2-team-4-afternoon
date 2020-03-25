const designShow=document.querySelector(".form__arrow--design"),fillShow=document.querySelector(".form__arrow--fill"),shareShow=document.querySelector(".form__arrow--share"),collapsableDesign=document.querySelector("#form__design--open"),collapsableFill=document.querySelector("#form__fill--open"),collapsableShare=document.querySelector("#form__share--open");function hideDesign(){designShow.classList.remove("form__arrow--collapse"),collapsableDesign.classList.add("hidden")}function hideFill(){fillShow.classList.remove("form__arrow--collapse"),collapsableFill.classList.add("hidden")}function hideShare(){shareShow.classList.remove("form__arrow--collapse"),collapsableShare.classList.add("hidden")}function showDesignInfo(){event.preventDefault(),designShow.classList.contains("form__arrow--collapse")?(hideDesign(),hideFill(),hideShare()):(designShow.classList.add("form__arrow--collapse"),collapsableDesign.classList.remove("hidden"),hideFill(),hideShare())}function showFillInfo(){event.preventDefault(),fillShow.classList.contains("form__arrow--collapse")?(hideDesign(),hideFill(),hideShare()):(fillShow.classList.add("form__arrow--collapse"),collapsableFill.classList.remove("hidden"),hideDesign(),hideShare())}function showShareInfo(e){e.preventDefault(),shareShow.classList.contains("form__arrow--collapse")?(hideDesign(),hideFill(),hideShare()):(shareShow.classList.add("form__arrow--collapse"),collapsableShare.classList.remove("hidden"),hideDesign(),hideFill())}fillShow.addEventListener("click",showFillInfo),designShow.addEventListener("click",showDesignInfo),shareShow.addEventListener("click",showShareInfo);const resetButton=document.querySelector(".preview__resetButton");let savedAvatar=localStorage.getItem("avatar");const formReset=()=>{document.getElementById("form__card").reset()},resetHandler=()=>{localStorage.removeItem("userInfo"),localStorage.removeItem("avatar"),savedAvatar=null,localStorage.removeItem("checkboxId"),document.getElementById("form__card").reset(),selectPalette1(),getText(),showEmailButton(),showPhoneButton(),showLinkedinButton(),showGithubButton(),document.querySelector(".nameText").innerHTML="Nombre Apellido",document.querySelector(".jobText").innerHTML="Front-End developer",photoPreview.style.backgroundImage="",photoThumbnail.style.backgroundImage=""};resetButton.addEventListener("click",resetHandler);const nameInput=document.querySelector("#name"),jobInput=document.querySelector("#job"),nameBox=document.querySelector(".nameText"),jobBox=document.querySelector(".jobText"),getText=e=>{nameBox.innerHTML=nameInput.value,jobBox.innerHTML=jobInput.value,enableCreateButton()};nameInput.addEventListener("keyup",getText),jobInput.addEventListener("keyup",getText);const emailBox=document.querySelector("#email"),emailButton=document.querySelector("#emailButton"),showEmailButton=()=>0!==emailBox.value.length?emailButton.classList.remove("hidden"):emailButton.classList.add("hidden"),getEmailLink=()=>{emailButton.querySelector("#emailButtonLink").href=`mailto:${emailBox.value}`},emailHandler=()=>{showEmailButton(),getEmailLink(),enableCreateButton()};emailBox.addEventListener("keyup",emailHandler);const phoneBox=document.querySelector("#phone"),phoneButton=document.querySelector("#phoneButton"),showPhoneButton=()=>0!==phoneBox.value.length?phoneButton.classList.remove("hidden"):phoneButton.classList.add("hidden"),getPhoneLink=()=>{phoneButton.querySelector("#phoneButtonLink").href=`tel:${phoneBox.value}`},phoneHandler=()=>{showPhoneButton(),getPhoneLink(),enableCreateButton()};phoneBox.addEventListener("keyup",phoneHandler);const linkedinBox=document.querySelector("#linkedin"),linkedinButton=document.querySelector("#linkedinButton"),showLinkedinButton=()=>0!==linkedinBox.value.length?linkedinButton.classList.remove("hidden"):linkedinButton.classList.add("hidden"),getLinkedinLink=()=>{linkedinButton.querySelector("#linkedinButtonLink").href=`https://www.linkedin.com/in/${linkedinBox.value}`},linkedinHandler=()=>{showLinkedinButton(),getLinkedinLink(),enableCreateButton()};linkedinBox.addEventListener("keyup",linkedinHandler);const githubBox=document.querySelector("#github"),githubButton=document.querySelector("#githubButton"),showGithubButton=()=>0!==githubBox.value.length?githubButton.classList.remove("hidden"):githubButton.classList.add("hidden"),getGithubLink=()=>{githubButton.querySelector("#githubButtonLink").href=`https://www.github.com/${githubBox.value}`},githubHandler=()=>{showGithubButton(),getGithubLink(),enableCreateButton()};githubBox.addEventListener("keyup",githubHandler);const createCardButton=document.querySelector("#createCardButton"),cardShare=document.querySelector(".created-container");function enableCreateButton(){null!==savedAvatar&&0!==nameInput.value.lenght&&0!==jobInput.value&&0!==emailBox.value.length&&0!==linkedinBox.value.length&&0!==githubBox.value.length?createCardButton.classList.remove("off"):createCardButton.classList.add("off")}const createCard=()=>{event.preventDefault(),cardShare.classList.remove("hidden"),console.log("a new card has been created")};createCardButton.addEventListener("click",createCard);const palette1=document.querySelector("#paletteOne"),palette2=document.querySelector("#paletteTwo"),palette3=document.querySelector("#paletteThree"),palette4=document.querySelector("#paletteFour");let savedPalette=null;const palettePreview=document.querySelector("#changePreviewStyle"),socialButtons=document.querySelectorAll(".preview__socialButton");function selectPalette1(){palettePreview.classList.add("infoStyle1"),palettePreview.classList.remove("infoStyle2"),palettePreview.classList.remove("infoStyle3"),palettePreview.classList.remove("infoStyle4");for(let e of socialButtons)e.classList.add("buttonStyle1"),e.classList.remove("buttonStyle2"),e.classList.remove("buttonStyle3"),e.classList.remove("buttonStyle4");localStorage.setItem("savedPalette",1),savedPalette=1}function selectPalette2(){palettePreview.classList.remove("infoStyle1"),palettePreview.classList.add("infoStyle2"),palettePreview.classList.remove("infoStyle3"),palettePreview.classList.remove("infoStyle4");for(let e of socialButtons)e.classList.remove("buttonStyle1"),e.classList.add("buttonStyle2"),e.classList.remove("buttonStyle3"),e.classList.remove("buttonStyle4");localStorage.setItem("savedPalette",2),savedPalette=2}function selectPalette3(){palettePreview.classList.remove("infoStyle1"),palettePreview.classList.remove("infoStyle2"),palettePreview.classList.add("infoStyle3"),palettePreview.classList.remove("infoStyle4");for(let e of socialButtons)e.classList.remove("buttonStyle1"),e.classList.remove("buttonStyle2"),e.classList.add("buttonStyle3"),e.classList.remove("buttonStyle4");localStorage.setItem("savedPalette",3),savedPalette=3}function selectPalette4(){palettePreview.classList.remove("infoStyle1"),palettePreview.classList.remove("infoStyle2"),palettePreview.classList.remove("infoStyle3"),palettePreview.classList.add("infoStyle4");for(let e of socialButtons)e.classList.remove("buttonStyle1"),e.classList.remove("buttonStyle2"),e.classList.remove("buttonStyle3"),e.classList.add("buttonStyle4");localStorage.setItem("savedPalette",4),savedPalette=4}function getLocalPalette(){savedPalette=localStorage.getItem("savedPalette"),1===parseInt(savedPalette)?(selectPalette1(),palette1.checked=!0):2===parseInt(savedPalette)?(selectPalette2(),palette2.checked=!0):3===parseInt(savedPalette)?(selectPalette3(),palette3.checked=!0):4===parseInt(savedPalette)?(selectPalette4(),palette4.checked=!0):(selectPalette1(),palette1.checked=!0)}palette1.addEventListener("click",selectPalette1),palette2.addEventListener("click",selectPalette2),palette3.addEventListener("click",selectPalette3),palette4.addEventListener("click",selectPalette4),getLocalPalette();const reader=new FileReader,photoFile=document.querySelector(".js__photo--file"),photoUploadBtn=document.querySelector(".js__photo--btn"),photoThumbnail=document.querySelector(".js__photo--thumbnail"),photoPreview=document.querySelector(".js__photo--preview");function getPhoto(e){let t=e.currentTarget.files[0];reader.addEventListener("load",addPhoto),reader.readAsDataURL(t)}function addPhoto(){photoPreview.style.backgroundImage=`url(${reader.result})`,photoThumbnail.style.backgroundImage=`url(${reader.result})`,localStorage.setItem("avatar",reader.result),savedAvatar=localStorage.getItem("avatar"),enableCreateButton()}function hiddenPhotoField(){photoFile.click()}null!==savedAvatar&&(photoPreview.style.backgroundImage=`url(${savedAvatar})`,photoThumbnail.style.backgroundImage=`url(${savedAvatar})`),photoUploadBtn.addEventListener("click",hiddenPhotoField),photoFile.addEventListener("change",getPhoto);const inputName=document.querySelector("#name"),inputJob=document.querySelector("#job"),inputEmail=document.querySelector("#email"),inputPhone=document.querySelector("#phone"),inputLinkedin=document.querySelector("#linkedin"),inputGithub=document.querySelector("#github"),localInfo=readLocalInfo();function saveLocalInfo(e){localInfo[e.currentTarget.name]=e.currentTarget.value,console.log(localInfo),setLocalInfo(localInfo)}function setLocalInfo(e){localStorage.setItem("userInfo",JSON.stringify(e))}function readLocalInfo(){let e=JSON.parse(localStorage.getItem("userInfo"));return null!==e?e:{}}function fillFormfromLocal(e){const t=document.querySelectorAll("input");for(let o of t)void 0!==e[o.name]?(o.value=e[o.name],nameBox.innerHTML=nameInput.value,jobBox.innerHTML=jobInput.value,showEmailButton(),getEmailLink(),showPhoneButton(),getPhoneLink(),showLinkedinButton(),getLinkedinLink(),showGithubButton(),getGithubLink(),enableCreateButton()):o.value=""}fillFormfromLocal(localInfo),inputName.addEventListener("keyup",saveLocalInfo),inputJob.addEventListener("keyup",saveLocalInfo),inputEmail.addEventListener("keyup",saveLocalInfo),inputPhone.addEventListener("keyup",saveLocalInfo),inputLinkedin.addEventListener("keyup",saveLocalInfo),inputGithub.addEventListener("keyup",saveLocalInfo);const createLinkButton=document.querySelector("#createCardButton"),responseURL=document.querySelector(".linkResponse"),form=document.querySelector("#form__card");function showURL(e){e.success?(responseURL.innerHTML="<a href="+e.cardURL+">"+e.cardURL+"</a>",twitterShare(e.cardURL)):responseURL.innerHTML="ERROR:"+e.error}function sendRequest(e){fetch("https://us-central1-awesome-cards-cf6f0.cloudfunctions.net/card/",{method:"POST",body:JSON.stringify(e),headers:{"content-type":"application/json"}}).then((function(e){return e.json()})).then((function(e){showURL(e)})).catch((function(e){console.log(e)}))}function getJSONFromInputs(e){return e.reduce((function(e,t){return"BUTTON"!==t.nodeName&&(e[t.name]=t.value),e}),{})}function sendData(){let e=Array.from(form.elements),t={name:"palette",value:savedPalette};e.unshift(t);let o=getJSONFromInputs(e);console.log(o),o.skills=["JavaScript","React"],o.photo=savedAvatar,sendRequest(o)}function twitterShare(e){document.querySelector("#shareOnTwitter").href=`https://twitter.com/intent/tweet?&text=Echa%20un%20vistazo%20a%20mi%20tarjeta%20de%20visita%2C%20hecha%20con%20%23AwesomeProfileCards%3A%20${e}&hashtags=Adalab%2C%20promoIdelisa`}createLinkButton.addEventListener("click",sendData);