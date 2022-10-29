let $ = document;

let inputNumber = $.querySelector("#inputNumber");
let changeBtn = $.querySelector("#change");
let resetBtn = $.querySelector("#reset");
let convertBtn = $.querySelector("#convert");
let result = $.querySelector("#showResult");
// flags
let titleFlag = true;

loadEventListeners();
function loadEventListeners(){
    inputNumber.addEventListener("keypress", doingConvert);
    changeBtn.addEventListener("click", changeUnits);
    resetBtn.addEventListener("click", resetPage);
    convertBtn.addEventListener("click", convertNumber);
}
function changeUnits(e){
    if(titleFlag){
        $.title = $.title.replace("F", "C");
        $.title = $.title.replace("C", "F");
        inputNumber.setAttribute("placeholder", "Farenhite");
        titleFlag = false;
    }
    else{
        $.title = $.title.replace("C", "F");
        $.title = $.title.replace("F", "C");
        inputNumber.setAttribute("placeholder", "Centi Grade");
        titleFlag = true;
    }
}
function resetPage(e){
    $.title = "C To F Converter";
    inputNumber.setAttribute("placeholder", "Centi Grade");
    titleFlag = true;
    inputNumber.value = "";
    result.textContent = "";
}
function convertNumber(e){
    let convertedNumber;
    if(isNumber(inputNumber.value)){
        if(titleFlag){
            convertedNumber = (inputNumber.value*9/5).toFixed() + 32;
            result.innerHTML = inputNumber.value + " C Is Equal To " + convertedNumber + " F.";
        }
        else{
            convertedNumber = ((inputNumber.value - 32)*5/9).toFixed();
            result.innerHTML = inputNumber.value + " F Is Equal To " + convertedNumber + " C.";
        }
        result.style.color = "green";
    }
    else if(!inputNumber.value){
        result.innerHTML = "No Input";
        result.style.color = "red";
    }
    else{
        result.innerHTML = "Invalid Input";
        result.style.color = "red";
    }
}
function isNumber(num){
    if(+num){
        return true;
    }
    else{
        if(num === "0"){
            return true;
        }
        return false;
    }
}
function doingConvert(e){
    if(e.key === "Enter"){
        convertNumber();
    }
}