var allButtons = document.querySelector(".buttons");
var proccess = document.querySelector(".proccess");
var lastNumber = document.querySelector(".lastNumber");
var allNumbers = document.querySelectorAll(".numbers");
// console.log((897/100000000000000).toString());
loadEventListeners();
function loadEventListeners(){
    allButtons.lastElementChild.addEventListener("click", equalFinalResult);
    Object.keys(allNumbers).forEach(function(numberButton){
        allNumbers[numberButton].addEventListener("click", activeNumberButtons);
    });
    allButtons.firstElementChild.addEventListener("click", numberPerCent);
    allButtons.children[1].addEventListener("click", squareRootNumber);
}
function changeLastNumber(number){
    console.log(lastNumber.childNodes[0].textContent);
    if(lastNumber.childNodes[0].textContent.length < 13){
        if(lastNumber.childNodes[0].textContent != 0){
            lastNumber.childNodes[0].textContent = lastNumber.childNodes[0].textContent + number.toString();
        }
        else{
            lastNumber.childNodes[0].textContent = number.toString();
        }
    }
    else{
        lastNumber.firstElementChild.style.display = "inline";
    }
}

function activeNumberButtons(e){
    let number = e.target.children[0].className.slice(-1);      // sometimes error & sometimes not
    changeLastNumber(number);
}

function numberPerCent(e){
    console.log(typeof lastNumber.textContent/100);
    lastNumber.textContent = (parseFloat(lastNumber.textContent)/100).toString();
}

function squareRootNumber(e){
    // lastNumber.childNodes[0].textContent = 
}

function equalFinalResult(e){

}