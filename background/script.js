let $ = document;
let m = Math;
// Inputs
let unameInput = $.querySelector("#uname");
let pswordInput = $.querySelector("#psword");
let loginButton = $.querySelector("button");
// Warnings
let unameWarning = $.querySelector("#unameWarning");
let pswordWarning = $.querySelector("#pswordWarning");
let modal = $.querySelector(".modal");
// UI
let htmlBody = $.body;


loadEventListeners();
function loadEventListeners(){
    loginButton.addEventListener("click", checkSituations);
    unameInput.addEventListener("blur", showUnameWarning)
    pswordInput.addEventListener("blur", showPswordWarning);
}
function checkSituations(e){
    if(unameInput.value.length < 12 || pswordInput.value.length < 8){
        modal.textContent = "The Information Is Not Valid!!";
        modal.style.backgroundColor = "red";
    }
    else{
        modal.textContent = "You Loged In!!";
        modal.style.backgroundColor = "green";
    }
    modal.style.display = "block";
    setTimeout(function (){
    modal.style.display = "none";
    }, 2000)
}
function showUnameWarning(e){
    if(unameInput.value.length < 8){
        unameWarning.style.display = "block";
    }
    else{
        unameWarning.style.display = "none";
    }
}
function showPswordWarning(e){
    if(pswordInput.value.length < 8){
        pswordWarning.style.display = "block";
    }
    else{
        pswordWarning.style.display = "none";
    }
}
// UI
let red, green, blue;
setInterval(changeBackgroundColor, 5000);
function changeBackgroundColor(){
    red = m.floor(m.random()*256);
    green = m.floor(m.random()*256);
    blue = m.floor(m.random()*256);
    console.log(red, green, blue);
    htmlBody.style.backgroundColor = "rgb(" + red + "," + green + "," + blue + ")";
}