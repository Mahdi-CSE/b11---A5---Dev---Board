// getting element by id
function gettingElementById(id){
    return document.getElementById(id);
}

//   Converting the String to number
function convertedNumber(id){
    const number = gettingElementById(id).innerText;
    const convertedNumber = parseInt(number);
    return convertedNumber;
}

// setting the innerText
function settingValue(id,value){
    document.getElementById(id).innerText = value;
}