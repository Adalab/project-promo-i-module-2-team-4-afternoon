const createLinkButton = document.querySelector('#createCardButton');
const responseURL = document.querySelector('.linkResponse');
const form = document.querySelector('#form__card');

createLinkButton.addEventListener('click', sendData);




function showURL(result){
  if(result.success){
    responseURL.innerHTML = '<a href=' + result.cardURL + '>' + result.cardURL + '</a>';
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
    let inputs = Array.from(form.elements);
    let json = getJSONFromInputs(inputs);
    json.skills = ['JavaScript', 'React'];
    json.photo = savedAvatar;
    sendRequest(json);
}
  