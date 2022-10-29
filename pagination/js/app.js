let contactDiv = document.querySelector("#list");
let pageNumbers = document.querySelector("#pagination");

let contactList = [
    {id:0, name:"Arrash", pNumber:09908800563},
    {id:1, name:"Ali", pNumber:09908870563},
    {id:2, name:"Amir", pNumber:09904800563},
    {id:3, name:"Mohammad", pNumber:09308800563},
    {id:4, name:"Hossein", pNumber:09908800663},
    {id:5, name:"Shahin", pNumber:09908800568},
    {id:6, name:"Saeid", pNumber:09908870563},
    {id:7, name:"Mahdi", pNumber:09908804563},
    {id:8, name:"Roia", pNumber:09132131866},
    {id:9, name:"Raha", pNumber:09908800560},
    {id:10, name:"Moein", pNumber:09908800561},
    {id:11, name:"Azar", pNumber:09908800562},
    {id:12, name:"Saba", pNumber:09908800568},
    {id:13, name:"Nazanin", pNumber:09908800569},
    {id:14, name:"Soheil", pNumber:09908800570},
    {id:15, name:"Daria", pNumber:09908800571},
    {id:16, name:"Elahe", pNumber:09908800572},
    {id:17, name:"Elham", pNumber:09908800573},
    {id:18, name:"Raheleh", pNumber:09908800763}
];
let pageNumber = 1;
let paginationNumber = 4
//events
window.onload = function(){
    let buttonNumbers = contactList.length / paginationNumber;
    for(let i=1; i<buttonNumbers+1 ; i++){
        let button = document.createElement("button");
        button.appendChild(document.createTextNode(i));
        button.addEventListener("click", showPagination);
        if(i === 1){
            button.className = "active";
        }
        pageNumbers.appendChild(button);
    }
    chosenCotacts = contactList.slice(0, 4);
    chosenCotacts.forEach(function(contact){
        contactDiv.innerHTML += `<div class=${"item"}>${contact.name}</div>`;
    });
}
function showPagination(e){
    contactDiv.innerHTML = "";
    pageNumber = e.target.innerHTML;
    let endtIndex = pageNumber*paginationNumber;
    let startIndex = endtIndex-paginationNumber;
    let chosenCotacts = contactList.slice(startIndex, endtIndex);
    chosenCotacts.forEach(function(contact){
        contactDiv.innerHTML += `<div class=${"item"}>${contact.name}</div>`;
    });
    for(let pageNumberBtn of pageNumbers.children){
        if(pageNumberBtn.innerHTML === pageNumber){
            pageNumberBtn.className = "active";
        }
        else{
            pageNumberBtn.className = "";
        }
    }
}