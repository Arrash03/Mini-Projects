let weightInput = document.querySelector("#weight");
let heightInput = document.querySelector("#height");
let result = document.querySelector("#result");
let category = document.querySelector("#category");

function calculate(){
    result.innerHTML = Number(weightInput.value)/(Number(heightInput.value/100)**2);
    
}