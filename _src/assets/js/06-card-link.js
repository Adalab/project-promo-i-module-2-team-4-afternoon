const createLinkButton = document.querySelector('#createCardButton');
const responseURL = document.querySelector('.linkResponse');
const form = document.querySelector('#form__card');

createLinkButton.addEventListener('click', sendData);

function showURL(result){
  if(result.success){
    responseURL.innerHTML = '<a href=' + result.cardURL + '>' + result.cardURL + '</a>';
    twitterShare(result.cardURL);
  }else{
    responseURL.innerHTML = 'ERROR:' + result.error;
  }
}

function sendRequest(json){
    fetch('https://us-central1-awesome-cards-cf6f0.cloudfunctions.net/card/', {
      method: 'POST',
      body: JSON.stringify(json),
      headers: {
        'content-type': 'application/json'
      },
    })
      .then(function(resp) { return resp.json(); })
      .then(function(result) { showURL(result); })
      .catch(function(error) { console.log(error); });
}
  
function getJSONFromInputs(inputs){
    return inputs.reduce(function (acc, val) {
      if(val.nodeName !== 'BUTTON')
        acc[val.name] = val.value;
      return acc;
    }, {})
}
  
function sendData () {
  if (savedAvatar !== null && nameInput.value.lenght !== 0 && jobInput.value !== 0 && emailBox.value.length !== 0 && linkedinBox.value.length !== 0 && githubBox.value.length !== 0){
    let inputs = Array.from(form.elements);
    let palette = {
        name: 'palette', 
        value: savedPalette
    }
    inputs.unshift(palette);
    let json = getJSONFromInputs(inputs);
    console.log(json);
    json.skills = ['JavaScript', 'React'];
    json.photo = savedAvatar;
    sendRequest(json);
  }
}
  
function twitterShare(URL) {
  const twitterLink = document.querySelector('#shareOnTwitter');
  twitterLink.href = `https://twitter.com/intent/tweet?&text=Echa%20un%20vistazo%20a%20mi%20tarjeta%20de%20visita%2C%20hecha%20con%20%23AwesomeProfileCards%3A%20${URL}&hashtags=Adalab%2C%20promoIdelisa`;
}
