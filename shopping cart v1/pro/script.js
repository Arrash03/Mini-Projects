var shopProducts = {
    "pen":{"price":9000, "number":10},
    "pencil":{"price":6000, "number":10},
    "earaser":{"price":15000, "number":10},
    "bag":{"price":250000, "number":10},
    "pencilcase":{"price":50000, "number":10},
    "book":{"price":350000, "number":5}
}
// post cost need to add in shop bag

var allProducts = document.querySelector(".products");
var shopForm = document.querySelector("form");
var shoppingBag = document.querySelector(".shoppingBag");
const wrongName = shopForm.firstElementChild.children[3];
const numberProblem = shopForm.firstElementChild.children[4];
const totalCost = document.querySelector("#totalCost");

loadEventListeners();

function loadEventListeners(){
    shopForm.addEventListener("submit", sendRequest);
}
function sendRequest(e){
    hideErrors();   // disappear two another situations
    let productName = shopForm.firstElementChild.children[1].value;
    if(productName.toLowerCase() in shopProducts){      // Bug to save names capital or small
        if(shopProducts[productName.toLowerCase()]["number"] != 0){
            addBagShop(productName);
            changeProductNumber(productName);
            // assign success
            shopForm.reset();
            alert("Successfully Added!!");
        }
        else{
            numberProblem.style.display = "block";
        }
    }
    else{
        wrongName.style.display = "block";
    }
    e.preventDefault();
}
function hideErrors(){
    // Bug: appearing and disappering Errors
    wrongName.style.display = "none";
    numberProblem.style.display = "none";
}
function addBagShop(productName){
    let divProduct = document.createElement("div");
    divProduct.className = "product";
    let childrenObject = {};
    childrenObject["nameSpan"] = document.createElement("span");
    childrenObject["nameSpan"].appendChild(document.createTextNode(productName));
    childrenObject["minusI"] = document.createElement("i");
    childrenObject["minusI"].className = "fa-solid fa-minus";
    childrenObject["minusI"].addEventListener("click", minusNumber);
    childrenObject["numberSpan"] = document.createElement("span");
    childrenObject["numberSpan"].appendChild(document.createTextNode("1"));
    childrenObject["plusI"] = document.createElement("i");
    childrenObject["plusI"].className = "fa-solid fa-plus";
    childrenObject["plusI"].addEventListener("click", plusNumber);
    childrenObject["priceSpan"] = document.createElement("span");
    childrenObject["priceSpan"].appendChild(document.createTextNode(shopProducts[productName]["price"]));
    childrenObject["xmarkI"] = document.createElement("i");
    childrenObject["xmarkI"].className = "fa-solid fa-xmark";
    childrenObject["xmarkI"].addEventListener("click", removeProduct);
    for(let child in childrenObject){
        divProduct.appendChild(childrenObject[child]);
    }
    shoppingBag.appendChild(divProduct);
    // calculating total cost
    // calculateTotalCost(productName);
}
function minusNumber(e){
    let productName = e.path[1].children[0].textContent;
    // 1
    shopProducts[productName]["number"] += 1;
    // 2
    Object.keys(allProducts.children).filter(function(key){
        if(allProducts.children[key].children[0].textContent.toLowerCase() === productName){
            allProducts.children[key].children[1].textContent = (parseInt(allProducts.children[key].children[1].textContent) + 1).toString();
        }
    })
    // 3
    e.target.nextSibling.textContent = (parseInt(e.target.nextSibling.textContent) - 1).toString();
}
function plusNumber(e){
    let productName = e.path[1].children[0].textContent;
    // 1
    shopProducts[productName]["number"] -= 1;
    // 2
    Object.keys(allProducts.children).filter(function(key){
        if(allProducts.children[key].children[0].textContent.toLowerCase() === productName){
            allProducts.children[key].children[1].textContent = (parseInt(allProducts.children[key].children[1].textContent) - 1).toString();
        }
    })
    // 3
    e.target.previousSibling.textContent = (parseInt(e.target.previousSibling.textContent) + 1).toString();
}
function removeProduct(e){
    if(confirm("Are You Sure??")){
        e.path[1].remove();
        changeShopProductNumber(e.path[1].children[0].textContent, e.path[1].children[2].textContent);
    }
}
function changeShopProductNumber(productName, productNumber){
    productNumber = parseInt(productNumber);
    // 1
    shopProducts[productName]["number"] += productNumber;
    console.log(shopProducts[productName]);
    // 2
    Object.keys(allProducts.children).filter(function(key){
        if(allProducts.children[key].children[0].textContent.toLowerCase() === productName){
            allProducts.children[key].children[1].textContent = (parseInt(allProducts.children[key].children[1].textContent) + productNumber).toString();
        }
    })
}
function calculateTotalCost(productName){
    if(allProducts[productName]["price"] < 100000){
        totalCost.textContent = (parseInt(totalCost.textContent) + allProducts[productName]["price"] + 1000).toString();
    }
    else{
        totalCost.textContent = (parseInt(totalCost.textContent) + allProducts[productName]["price"]).toString();
    }
}
function changeProductNumber(productName){
    // 1
    shopProducts[productName]["number"] -= 1;
    // 2
    Object.keys(allProducts.children).filter(function(key){
        if(allProducts.children[key].children[0].textContent.toLowerCase() === productName){
            allProducts.children[key].children[1].textContent = (parseInt(allProducts.children[key].children[1].textContent) - 1).toString();
        }
    })
}