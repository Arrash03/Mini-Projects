let $ = document;

let buttonForModal = $.querySelector("button");
let mainSection = $.querySelector("section");
let modalParentBox = $.querySelector(".modal-parent");
let closeSpanModal = $.querySelector(".X");

loadEventListeners();
function loadEventListeners(){
    buttonForModal.addEventListener("click", showModal);
    closeSpanModal.addEventListener("click", hideModal);
    $.body.addEventListener("keyup", hideModal);
}
function showModal(e){
    modalParentBox.style.display = "block";
    mainSection.setAttribute("style", "filter: blur(10px)");
}
function hideModal(e){
    if(e.type === "click" || e.key === "Escape"){
        modalParentBox.style.display = "none";
        mainSection.setAttribute("style", "filter: blur(0px)");
        buttonForModal.blur();
    }
}
